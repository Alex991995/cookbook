import { NextFunction, Router, Request, Response } from 'express';
import { ZodError } from 'zod';
import multer from 'multer';

import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import { storage } from '@/common/storage-multer';
import { AccountService } from './account.service';
import { uploadsAccountPath } from '@/common/constants';
import { UpdateAccountDto } from './dto/account.dto';
import { UpdateAccountScheme } from './account-scheme/account-scheme';

export class AccountController {
  router: Router;
  upload: multer.Multer;

  constructor(private accountService: AccountService) {
    this.router = Router();
    this.upload = multer({ storage });
  }

  routes() {
    this.router.get('/settings', async (req, res, next) => {
      const id = req.user.id;

      const result = await this.accountService.getInfoUser(id);
      if (result) {
        const { password, ...user } = result;
        res.send(user);
      } else res.send(result);
    });

    this.router.put(
      '/settings',
      this.upload.single('file'),
      async (req: Request<object, object, { data: string }>, res: Response, next: NextFunction) => {
        const id = req.user.id;
        const data = req.body.data;

        const fileName = req.file?.filename;
        const filePath = `${uploadsAccountPath}/${fileName}`;

        try {
          const credentials = JSON.parse(data) as UpdateAccountDto;
          credentials.image = filePath;
          UpdateAccountScheme.parse(credentials);
          const result = await this.accountService.updateCredentials(id, credentials);

          if (!result) {
            return next(new HttpError(401, 'Wrong credentials'));
          } else if (typeof result == 'boolean') {
            res.status(204).send();
          } else {
            res
              .cookie('access_token', result.jwt, {
                httpOnly: true,
              })
              .end();
          }
        } catch (error) {
          if (error instanceof ZodError) {
            return next(new CustomZodError(400, error.issues));
          }
        }
      },
    );

    return this.router;
  }
}
