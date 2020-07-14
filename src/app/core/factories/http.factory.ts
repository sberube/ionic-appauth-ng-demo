import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { CordovaRequestor, XhrSettings } from 'ionic-appauth/lib/cordova';
import { NgHttpService } from '../ng-http.service';

export class MyRequestor extends CordovaRequestor {

    public xhr<T>(settings: XhrSettings): Promise<T> {
        return super.xhr(settings);
    }
}

export let httpFactory = (platform: Platform, httpClient: HttpClient) => {
    return platform.is('cordova') ? new MyRequestor() : new NgHttpService(httpClient);
};
