import { Injectable } from '@angular/core';
import { Network } from 'ionic-native';
import { Platform } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

declare var Connection;

@Injectable()
export class Connectivity {

  onDevice: boolean;

  constructor(public platform: Platform){
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection !== Connection.NONE;
    } else {
      return navigator.onLine; 
    }
  }

  isOffline(): boolean {
    if(this.onDevice && Network.connection){
      return Network.connection === Connection.NONE;
    } else {
      return !navigator.onLine;   
    }
  }

  watchOnline(): Observable<any> {
    return Network.onConnect();
  }

  watchOffline(): Observable<any> {
    return Network.onDisconnect();
  }

}