import { Router, Request } from 'express';
import { RecipeService } from './recipe.service';
import { RecipeDto, UpdateRecipeDto } from './dto/recipe.dto';
import { RecipeScheme, UpdateRecipeScheme } from './recipe-scheme/recipe-scheme';
import { ZodError } from 'zod';
import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';

export class RecipeController {
  router: Router;
  constructor(private recipeService: RecipeService) {
    this.router = Router();
  }

  routes() {
    this.router.post('/', async (req: Request<object, object, RecipeDto>, res, next) => {
      const recipe = req.body;
      const id = req.user.id;

      try {
        RecipeScheme.parse(recipe);

        const result = await this.recipeService.createRecipe(id, recipe);
        if (result) {
          res.sendStatus(200);
        } else {
          console.error(result);
          return next(new HttpError(400, 'Bad Request'));
        }
      } catch (error) {
        if (error instanceof ZodError) {
          return next(new CustomZodError(400, error.issues));
        }
      }
    });

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
            res.sendStatus(200);
          } 
          
          else {
            next(new HttpError(404, 'Record to update not found'));
          }
        } 
        
        catch (error) {
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
        res.sendStatus(204);
      } else {
        next(new HttpError(404, 'Record to delete does not exist.'));
      }
    });

    return this.router;
  }
}
