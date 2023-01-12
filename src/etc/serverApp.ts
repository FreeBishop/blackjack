import express from 'express';
import path from 'path';

/**
 *  Main HTTP Server application using Express
 */
export const serverApp = express();

// Middleware declarations
serverApp.use(express.static(path.resolve(__dirname, '../../public')));
serverApp.use(express.json());
