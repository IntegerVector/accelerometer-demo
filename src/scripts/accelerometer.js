import * as rxjs from 'rxjs';

export class AppAccelerometer {
    constructor(params) {
        this.onError = new rxjs.Subject();
        this._change = new rxjs.Subject();

        if (typeof Accelerometer === "function") {
            this._acl = new Accelerometer(params);
            this._acl.addEventListener('error', event => {
                if (event.error.name === 'NotAllowedError') {
                    this.onError.next('Application not allowed to use accelerometer');
                } else if (event.error.name === 'NotReadableError' ) {
                    this.onError.next('Accelerometer sensor unreachable');
                }
            });

            this._acl.addEventListener('reading', () => {
                this._change.next({ x: this._acl.x, y: this._acl.y, z: this._acl.z });
            }); 
        } else {
            this.onError.next('This devise doesn\'t have accelerometer, or it\'s unreachable');
        }

        this.update = {
            subscribe: this._change.subscribe.bind(this._change),
            unsubscribe: this._change.unsubscribe.bind(this._change)
        };
    }

    start() {
        this._acl.start();
    }

    stop() {
        this._acl.stop();
        this._change.unsubscribe();
    } 
}
