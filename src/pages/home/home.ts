import { Component, ElementRef, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { GoogleMaps } from '../../providers/google-maps';
import { GoogleMapsCluster } from '../../providers/google-maps-cluster';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('map') mapElement: ElementRef;
	@ViewChild('pleaseConnect') pleaseConnect: ElementRef;

	constructor(public platform: Platform, public maps: GoogleMaps, public mapCluster: GoogleMapsCluster) {

	}

	ionViewDidLoad(): void {

		this.platform.ready().then(() => {

			let mapLoaded = this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then((map) => {
				this.mapCluster.addCluster(map);
			});

		});

	}

}
