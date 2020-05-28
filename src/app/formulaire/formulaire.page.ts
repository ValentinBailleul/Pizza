import { Component, OnInit } from '@angular/core';
import { PizzaService} from '../services/pizza.service';
import { Pizza } from '../models/pizza.model';
import { PizzaPanier } from '../models/pizzaPanier.model';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.page.html',
  styleUrls: ['./formulaire.page.scss'],
})
export class FormulairePage implements OnInit {
  pizzaTest: Pizza = new Pizza();
  pizzaF: Pizza[] = [];
  constructor(private alertController: AlertController, private pizzaService: PizzaService, private router: Router) {
    this.pizzaService.getPizza().subscribe(pizzas => {
      this.pizzaF = pizzas;
    }); }

  ngOnInit() {
  }

  SubmitForm() {
    this.pizzaService.addPizza(this.pizzaTest).subscribe(pizzas => {
      this.router.navigate(['/administration']);
      this.presentAlert();
    });
  }

  ajoutPizza(pizza: Pizza) {
    this.pizzaService.addPizza(pizza);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'OK',
      message: 'La pizza a été ajoutée !',
      buttons: ['OK']
    });

    await alert.present();
  }
}
