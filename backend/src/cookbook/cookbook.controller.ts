import { Router, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import multer from 'multer';

import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import { storage } from '@/common/storage-multer';

import { CookbookService } from './cookbook.service';
import { CookbookScheme, UpdateCookbookScheme } from './cookbook-scheme/cookbook-scheme';
import { CookbookDto, UpdateCookbookDto } from './dto/cookbook.dto';
import { uploadsCookbookPath } from '@/common/constants';

export class CookbookController {
  router: Router;
  upload: multer.Multer;

  constructor(private cookbookService: CookbookService) {
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
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    this.router.get('/all', async (req, res, next) => {
      const user_id = req.user.id;
      const result = await this.cookbookService.fetchAllCookbooks(user_id);
      res.send({
        data: result,
      });
    });

    this.router.get('/:id', async (req, res, next) => {
      const id = req.params.id;
      const result = await this.cookbookService.getCookbook(id);
      res.send({
        data: result,
      });
    });

    this.router.put(
      '/:id',
      this.upload.single('file'),
      async (
        req: Request<{ id: string }, object, { data: string }>,
        res: Response,
        next: NextFunction,
      ) => {
        // if (!req.file) {
        //   return next(new HttpError(400, 'Image is required'));
        // }
        const id = req.params.id;
        const data = req.body.data;
        const user_id = req.user.id;

        const fileName = req.file?.filename;
        const filePath = `${uploadsCookbookPath}/${fileName}`;

        try {
          const cookbook = JSON.parse(data) as UpdateCookbookDto;
          cookbook.image = filePath;
          UpdateCookbookScheme.parse(cookbook);
          const result = await this.cookbookService.updateCookbook(cookbook, id, user_id);

          res.send(result);
        } catch (error) {
          next(new HttpError(404, 'Record to update not found'));
        }
      },
    );

    this.router.delete('/:id', async (req, res, next) => {
      const id = req.params.id;

      const result = await this.cookbookService.deleteCookbook(id);
      res.send({
        data: result,
      });
    });

    return this.router;
  }
}
