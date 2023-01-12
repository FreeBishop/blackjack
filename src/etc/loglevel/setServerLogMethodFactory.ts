import { serverLogger } from './devLogger';
import { MethodFactory } from 'loglevel';

/**
 *  Set default log function to display logs or messages with DATE and LOGLEVEL
 *
 * @param originalFactory The default function that loglevel uses to print out logs/messages
 */
export const setServerLogMethodFactory = (originalFactory: MethodFactory) => {
  serverLogger.methodFactory = function (methodName, loglevel, myServerLogger) {
    const serverLoggerMethod = originalFactory(methodName, loglevel, myServerLogger);

    return function (message) {
      serverLoggerMethod(`[${new Date().toLocaleString()}] [${methodName.toUpperCase()}] ${message}`);
    };
  };
};
