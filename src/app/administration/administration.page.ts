import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PizzaService} from '../services/pizza.service';
import { Pizza } from '../models/pizza.model';
import { PizzaPanier } from '../models/pizzaPanier.model';
import {Router} from '@angular/router';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {

  pizzaF: Pizza[] = [];
  constructor(private alertController: AlertController, private pizzaService: PizzaService, private router: Router) {
    this.pizzaService.getPizza().subscribe(pizzas => {
      this.pizzaF = pizzas;
    }); }
  pizzaTest: Pizza = new Pizza();
  ngOnInit() {
  }

  ajoutDePizza() {
    this.router.navigate(['/formulaire']);
  }

  supprimerPizza(pizza: Pizza) {
    this.pizzaService.deletePizza(pizza).subscribe(pizzas => {
      this.pizzaService.getPizza().subscribe(pizzaRefresh => {
        this.pizzaF = pizzaRefresh;
        this.presentAlert();
      });
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'OK',
      message: 'La pizza a été supprimée',
      buttons: ['OK']
    });

    await alert.present();
  }

}
