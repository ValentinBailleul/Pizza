import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { PizzaService} from '../services/pizza.service';
import { Pizza } from '../models/pizza.model';
import { PizzaPanier } from '../models/pizzaPanier.model';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title: string;
  imgData: string;
  longitude: string;
  latitude: string;
  pizzaF: Pizza[] = [];
  nombrePizzaPanier = this.pizzaService.numberPanier;
  // tslint:disable-next-line:max-line-length
  constructor(private alertController: AlertController,
              private camera: Camera,
              private geolocation: Geolocation,
              private localNotifications: LocalNotifications,
              private pizzaService: PizzaService,
              private storage: Storage,
              private router: Router) {
    this.pizzaService.getPizza().subscribe(pizzas => {
      this.pizzaF = pizzas;
      this.nombrePizzaPanier = this.pizzaService.numberPanier;
    });
  }
  updateTitle() {
    this.title = 'Mon Nouveau Titre';
  }

  /**
   * https://ionicframework.com/docs/api/alert
   */
  async fireAlert(pizza) {
    // creation de l alerte
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'On est bon',
      message: 'La pizza a bien été envoyé au panier',
      buttons: ['OK']
    });
    alert.onDidDismiss().then(() => console.log('alerte masquée'));

    await alert.present();
    this.pizzaService.addPanier(pizza);
    this.nombrePizzaPanier = this.pizzaService.numberPanier;
  }

  detailsPanier() {
    this.router.navigate(['/panier']);
  }

  detailsPizza(pizza) {
    localStorage.setItem('pizza', JSON.stringify(pizza));
    localStorage.setItem('ingredient', JSON.stringify(pizza.ingredient));
    this.router.navigate(['/detail']);
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }

  takeNotification() {
    this.localNotifications.schedule({
      id: 1,
      text: 'Simple Notif',
      sound: 'file: src/assets/1762.mp3'
    });

// Schedule multiple notifications
    this.localNotifications.schedule([{
      id: 1,
      text: 'Plus belle Notif',
    }, {
      id: 2,
      title: 'Plus belle Notif 2',
      text: 'Top',
      // tslint:disable-next-line:max-line-length
      icon: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeeko.lesoir.be%2F2016%2F05%2F12%2Finstagram-leve-le-voile-sur-son-nouveau-logo%2F&psig=AOvVaw0YMaFgDIeKfGgP-vQoFZD8&ust=1587109348260000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODs0Zm57OgCFQAAAAAdAAAAABAD'
    }]);

  }

  takeLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
        console.log(resp.coords.latitude);
        console.log(resp.coords.longitude);
        this.longitude = resp.coords.longitude.toString();
        this.latitude = resp.coords.longitude.toString();
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
        console.log(data.coords.latitude);
        console.log(data.coords.longitude);
    });
  }

}
