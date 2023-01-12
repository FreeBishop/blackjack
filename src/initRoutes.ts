import { serverLogger } from './etc/loglevel/devLogger';
import { homePageRoute } from './routes/homePageRoute';
import { serverConfig } from './etc/serverConfig';
import { serverApp } from './etc/serverApp';

/**
 *  Initialize server endpoints
 */
export const initRoutes = () => {
  serverApp.get('/', homePageRoute);

  // Init server app
  serverApp.listen(serverConfig.port, () => {
    serverLogger.info(`Application now listening on ${serverConfig.domain}:${serverConfig.port}`);
  });
};
