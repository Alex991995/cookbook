import { Router, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import multer from 'multer';

import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import { storage } from '@/common/storage-multer';

import { CookbookService } from './cookbook.service';
import {
  CommentCookbookScheme,
  CookbookScheme,
  UpdateCookbookScheme,
} from './cookbook-scheme/cookbook-scheme';
import { CookbookDto, UpdateCookbookDto } from './dto/cookbook.dto';
import { uploadsCookbookPath } from '@/common/constants';
import { CommentCookbookService } from './comment-cookbook/comment-cookbook.service';

export class CookbookController {
  router: Router;
  upload: multer.Multer;

  constructor(
    private cookbookService: CookbookService,
    private commentCookbookService: CommentCookbookService,
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
        const user_id = req.user.id;
        const data = req.body.data;

        const fileName = req.file.filename;
        const filePath = `${uploadsCookbookPath}/${fileName}`;

        try {
          const cookbook = JSON.parse(data) as CookbookDto;
          cookbook.image = filePath;
          CookbookScheme.parse(cookbook);

          const result = await this.cookbookService.createCookbook(cookbook, user_id);
          res.send(result);
        } catch (error) {
          console.log(error);
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

  
    this.router.get('/all', async (req, res, next) => {
      const result = await this.cookbookService.fetchAllCookbooks();
      res.send({
        data: result,
      });
    });

    this.router.get('/all-user', async (req, res, next) => {
      const user_id = req.user.id;
      const result = await this.cookbookService.fetchAllUserCookbooks(user_id);

      res.send({
        data: result,
      });
    });

    this.router.get('/most-popular', async (req, res, next) => {
      const result = await this.cookbookService.fetchAllPopularCookbooks();
      res.send({
        data: result,
      });
    });

    this.router.get('/:id', async (req, res, next) => {
      const id = req.params.id;

      const result = await this.cookbookService.getCookbook(id);
      res.send(result);
    });

    this.router.put(
      '/',
      async (
        req: Request<object, object, { cookbook_id: string; recipesID: string }>,
        res,
        next,
      ) => {
        const { cookbook_id, recipesID } = req.body;
        const result = await this.cookbookService.addRecipeToCookbook(cookbook_id, recipesID);
        res.send(result);
      },
    );

      this.router.put(
      '/add-cookbook/:id',
      async (req: Request<{ id: string }, object, object>, res, next) => {
        const user_id = req.user.id;
        // const id = req.body.id;
     
        const id = req.params.id;

        const result = await this.cookbookService.addCookbookToUSer(id, user_id);
        res.send({
          data: result,
        });
      },
    );



    this.router.delete('/:id', async (req, res, next) => {
      const id = req.params.id;

      const result = await this.cookbookService.deleteCookbook(id);

      if (result) {
        res.status(204).send();
      } else {
        next(new HttpError(404, 'Record to delete does not exist.'));
      }
    });

    this.router.post(
      '/comment',
      async (
        req: Request<object, object, { description: string; cookbook_id: string }>,
        res: Response,
        next: NextFunction,
      ) => {
        const user_id = req.user.id;

        try {
          CommentCookbookScheme.parse(req.body);
          const { description, cookbook_id } = req.body;
          const result = await this.commentCookbookService.createComment(cookbook_id, description);

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
      const result = await this.commentCookbookService.getAllCommentsByCookbookId(req.params.id);

      res.send({
        data: result,
      });
    });

    this.router.post('/like/:id', async (req, res, next) => {
      const user_id = req.user.id;
      const cookbook_id = req.params.id;

      const result = await this.cookbookService.addLike(user_id, cookbook_id);
      if (result) {
        res.sendStatus(204).end();
      } else {
        next(new HttpError(404, 'User has already liked this recipe'));
      }
    });

    this.router.post('/views/:id', async (req, res, next) => {
      const user_id = req.user.id;
      const cookbook_id = req.params.id;

      const result = await this.cookbookService.addViews(user_id, cookbook_id);
      if (result) {
        res.sendStatus(204).end();
      } else {
        next(new HttpError(404, 'User has already seen it'));
      }
    });

    return this.router;
  }
}
