import { setServerLogMethodFactory } from './setServerLogMethodFactory';
import log from 'loglevel';

/**
 *  Logger object for server-side messages
 */
export const serverLogger = log.getLogger('serverLogger');

// Set methodFactory
const originalFactory = log.methodFactory;
setServerLogMethodFactory(originalFactory);

// Set loglevel
serverLogger.setLevel('debug');
