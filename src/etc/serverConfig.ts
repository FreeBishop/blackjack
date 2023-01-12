import ServerConfiguration from './types/ServerConfiguration';
import 'dotenv/config';

export const serverConfig: ServerConfiguration = {
  // Server environment
  env: 'dev',

  // Server Domain
  domain: 'http://localhost',

  // Server port
  port: 3000,
};

// Override settings depending on server environment
if (process.env.NODE_ENV === 'prod') {
  serverConfig.env = 'prod';
  serverConfig.domain = <string>process.env.DOMAIN;
  serverConfig.port = parseInt(<string>process.env.PORT);
}
