import { Router, Request, Response, NextFunction } from 'express';
import { RecipeService } from './recipe.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import {
  CommentRecipeScheme,
  RecipeScheme,
  UpdateRecipeScheme,
} from './recipe-scheme/recipe-scheme';
import { ZodError } from 'zod';
import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import multer from 'multer';
import { storage } from '@/common/storage-multer';
import { CommentRecipeService } from './comment-recipe/comment-recipe.service';

export class RecipeController {
  router: Router;
  upload: multer.Multer;

  constructor(
    private recipeService: RecipeService,
    private commentRecipeService: CommentRecipeService,
  ) {
    this.router = Router();
    this.upload = multer({ storage });
  }

  routes() {
    this.router.post(
      '/',
      this.upload.single('file'),
      async (req: Request<object, object, { data: string }>, res: Response, next: NextFunction) => {
        if (!req.file) {
          return next(new HttpError(400, 'Image is required'));
        }
        const id = req.user.id;
        const recipeStringify = req.body.data;

        const fileName = req.file.filename;
        const filePath = `/uploads/recipes/${fileName}`;

        try {
          const recipe = JSON.parse(recipeStringify) as RecipeDto;
          recipe.image = filePath;
          RecipeScheme.parse(recipe);

          const result = await this.recipeService.createRecipe(id, recipe);

          if (result) {
            res.send({ result });
          } else {
            console.error(result);
            return next(new HttpError(400, 'Bad Request'));
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.get('/all', async (req, res, next) => {
      const id = req.user.id;

      const recipes = await this.recipeService.getAllRecipeByUserId(id);

      if (recipes) {
        res.send(recipes);
      } else {
        res.status(200).send({
          data: [],
        });
      }
    });

    this.router.put(
      '/:id',
      async (req: Request<{ id: string }, object, UpdateRecipeDto>, res, next) => {
        const body = req.body;
        const id = req.params.id;

        try {
          UpdateRecipeScheme.parse(body);
          const result = await this.recipeService.updateRecipe(id, body);

          if (result) {
            res.status(204).send();
          } else {
            next(new HttpError(404, 'Record to update not found'));
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.delete('/:id', async (req, res, next) => {
      const id = req.params.id;
      const result = await this.recipeService.deleteById(id);
      if (result) {
        res.status(204).send();
      } else {
        next(new HttpError(404, 'Record to delete does not exist.'));
      }
    });

    this.router.post(
      '/comment',
      async (
        req: Request<object, object, { description: string; recipe_id: string }>,
        res: Response,
        next: NextFunction,
      ) => {
        const user_id = req.user.id;

        try {
          CommentRecipeScheme.parse(req.body);
          const { description, recipe_id } = req.body;
          const result = await this.commentRecipeService.createComment(recipe_id, description);

          if (result) {
            res.send({ result });
          } else {
            console.error(result);
            return next(new HttpError(400, 'Bad Request'));
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.get('/comment/:id', async (req, res) => {
      const result = await this.commentRecipeService.getAllCommentsByRecipeId(req.params.id);
      if (result) {
        res.send(result);
      } else {
        res.status(200).send({
          data: [],
        });
      }
    });

    return this.router;
  }
}
