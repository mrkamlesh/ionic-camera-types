import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  currentImage: any;
  profileImg: string;
  selectedImage: string;
  nativeURIImage: string;

  constructor(
    public photoService: PhotoService,
    private webview: WebView
  ) { }

  ngOnInit() {
    this.photoService.loadSaved();
  }

  photoShoot() {
    this.photoService.capturePicture().then(picture => {
      if (picture) {
        this.profileImg = picture;
      }
    });
  }

  photoShoot2() {
    this.photoService.capturePicture2().then(selectedImage => {
      if (selectedImage) {
        this.selectedImage = this.webview.convertFileSrc(selectedImage);;
      }
    });
  }

  photoShoot3() {
    this.photoService.capturePicture2().then(NIImage => {
      if (NIImage) {
        this.nativeURIImage = this.webview.convertFileSrc(NIImage);;
      }
    });
  }
}
