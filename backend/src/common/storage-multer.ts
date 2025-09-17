import multer from 'multer';
import path from 'path';
import fs from 'fs';

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let arrayPath = req.originalUrl.split('/');
    console.log(arrayPath)
    const [comma, root, route] = arrayPath;

    const path = `uploads/${route}`;
    
    fs.mkdirSync(path, { recursive: true });
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
