import { clientLogger } from './devLogger';
import { MethodFactory } from 'loglevel';

/**
 *  Set default log function to display logs or messages with DATE and LOGLEVEL
 *
 * @param {MethodFactory} originalFactory The default function that loglevel uses to print out logs/messages
 */
export const setClientLogMethodFactory = (originalFactory: MethodFactory) => {
  clientLogger.methodFactory = function (methodName, loglevel, myClientLogger) {
    const serverLoggerMethod = originalFactory(methodName, loglevel, myClientLogger);

    return function (message) {
      serverLoggerMethod(`[${new Date().toLocaleString()}] [${methodName.toUpperCase()}] ${message}`);
    };
  };
};
