import { serverConfig } from './etc/serverConfig';
import { serverApp } from './etc/serverApp';
import { serverLogger } from './etc/loglevel/devLogger';

/**
 *  Initialize server endpoints
 */
export const initRoutes = () => {
  serverApp.listen(serverConfig.port, () => {
    serverLogger.info(`Application now listening on ${serverConfig.domain}:${serverConfig.port}`);
  });
};
