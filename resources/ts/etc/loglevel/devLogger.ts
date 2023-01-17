import { setClientLogMethodFactory } from './setClientLogMethodFactory';
import log from 'loglevel';

/**
 *  Logger object for client-side messages
 */
export const clientLogger = log.getLogger('clientLogger');

// Set methodFactory
const originalFactory = log.methodFactory;
setClientLogMethodFactory(originalFactory);

// Set loglevel
clientLogger.setLevel('debug');
