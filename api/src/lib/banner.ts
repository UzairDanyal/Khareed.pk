import { env } from '../env';
import { Logger } from '../lib/logger';

export function banner(log: Logger): void {
    if (env.app.banner) {
        const route = () => `${env.app.schema}://${env.app.host}:${env.app.port}`;
        log.info(``);
        log.info(`Hi Usama and Uzair your app is ready on ${route()}${env.app.routePrefix}`);
        log.info(`To shut it down, press <CTRL> + C at any time.`);
        if (env.apidoc.enabled) {
             }
        if (env.monitor.enabled) {  
        }
        log.info('-------------------------------------------------------');
    } else {
        log.info(`Application is up and running.`);
    }
}
