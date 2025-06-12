import { Router, Request, Response, NextFunction } from 'express';
import { RecipeService } from './recipe.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import {
  CommentRecipeScheme,
  RecipeScheme,
  RecipeTitleScheme,
  UpdateRecipeScheme,
} from './recipe-scheme/recipe-scheme';
import { ZodError } from 'zod';
import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import multer from 'multer';
import { storage } from '@/common/storage-multer';
import { CommentRecipeService } from './comment-recipe/comment-recipe.service';

import { uploadsRecipePath } from '@/common/constants';

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
        const filePath = `${uploadsRecipePath}/${fileName}`;

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

    this.router.get(
      '/all',
      async (req: Request<object, object, object, { sort: string; time: string }>, res, next) => {
        const { sort, time } = req.query;

        const recipes = await this.recipeService.getAllRecipe(sort, +time);

        res.send({
          data: recipes,
        });
      },
    );

    this.router.get('/all-user', async (req, res, next) => {
      const id = req.user.id;

      const recipes = await this.recipeService.getAllUserRecipeByUserId(id);

      res.send({
        data: recipes,
      });
    });

    this.router.get(
      '/',
      async (req: Request<object, object, object, { title: string }>, res, next) => {
        try {
          RecipeTitleScheme.parse(req.query);
          const title = req.query.title;
          const recipes = await this.recipeService.getRecipeByTitle(title);

          res.send({
            data: recipes,
          });
        } catch (error) {
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.get('/:id', async (req, res, next) => {
      const id = req.params.id;

      const result = await this.recipeService.getUniqueRecipeByID(id);
      res.send(result);
    });

    this.router.put(
      '/:id',
      this.upload.single('file'),
      async (
        req: Request<{ id: string }, object, { data: string }>,
        res: Response,
        next: NextFunction,
      ) => {
        const user_id = req.user.id;
        const id = req.params.id;
        const data = req.body.data;

        const fileName = req.file?.filename;

        const filePath = `${uploadsRecipePath}/${fileName}`;

        try {
          const credentials = JSON.parse(data) as UpdateRecipeDto;
          if (fileName) {
            credentials.image = filePath;
          }

          UpdateRecipeScheme.parse(credentials);
          const result = await this.recipeService.updateRecipe(id, credentials);

          if (result) {
            res.send(result);
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

      res.send({
        data: result,
      });
    });

    // this.router.put('/like/:id', async (req, res, next) => {
    //   const id = req.params.id;

    //   const result = await this.recipeService.addLike(id);
    //   if (result) {
    //     res.status(204).send();
    //   } else {
    //     next(new HttpError(404, 'Record to update does not exist.'));
    //   }
    // });

    return this.router;
  }
}
