import Logger from "./Logger.js";

const log = new Logger('TEST')

log.info('this is an info log')
log.warn('this is a warn log')
log.error('this is an error log')

const log2 = new Logger()

log2.info('info', {with: "extra"})