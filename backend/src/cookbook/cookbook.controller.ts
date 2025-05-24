
import { Router, Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import multer from 'multer';

import { CustomZodError } from '@/errors/zod-error';
import { HttpError } from '@/errors/http-error';
import { storage } from '@/common/storage-multer';

import { CookbookService } from './cookbook.service';

export class CookbookController {
  router: Router;
  upload: multer.Multer;

  constructor(private cookbookService: CookbookService) {
    this.router = Router();
    this.upload = multer({ storage });
  }

  routes(){

    this.router.post('/', (req, res, next) => {

      // this.cookbookService.createCookbook()
    })

    return this.router
  }
}
