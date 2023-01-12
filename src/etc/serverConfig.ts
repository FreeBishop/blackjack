import ServerConfiguration from './types/ServerConfiguration';
import 'dotenv/config';

export const serverConfig: ServerConfiguration = {
  // Server environment
  env: 'development',

  // Server Domain
  domain: 'http://localhost',

  // Server port
  port: 3000,
};

// Override settings depending on server environment
if (process.env.NODE_ENV === 'production') {
  serverConfig.env = 'production';
  serverConfig.domain = <string>process.env.DOMAIN;
  serverConfig.port = parseInt(<string>process.env.PORT);
}
