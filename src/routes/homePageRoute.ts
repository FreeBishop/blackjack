import { Request, Response } from 'express';
import path from 'path';

/**
 *  Handle homePage endpoint by responding with a static page
 *
 * @param {Request} req Request object received from Client
 * @param {Response} res Response object that server will respond with
 */
export const homePageRoute = (req: Request, res: Response): void => {
  res.sendFile(path.resolve(__dirname, '../../public/html/homePage.html'));
};
