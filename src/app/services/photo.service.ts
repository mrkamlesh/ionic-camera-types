import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class PhotoService {

    public photos: Photo[] = [];

    constructor(private camera: Camera, private storage: Storage) { }

    takePicture() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            this.photos.unshift({
                data: 'data:image/jpeg;base64,' + imageData
            });

            // Save all photos for later viewing
            this.storage.set('photos', this.photos);
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

    }


    capturePicture() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        return this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            return 'data:image/jpeg;base64,' + imageData
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

    }

    capturePicture2() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        return this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            return imageData
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

    }


    capturePicture3() {
        const options: CameraOptions = {
            quality: 70,
            destinationType: this.camera.DestinationType.NATIVE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        return this.camera.getPicture(options).then((imageData) => {
            // Add new photo to gallery
            return imageData
        }, (err) => {
            // Handle error
            console.log("Camera issue: " + err);
        });

    }

    loadSaved() {
        this.storage.get('photos').then((photos) => {
            this.photos = photos || [];
        });
    }

}

class Photo {
    data: any;
}