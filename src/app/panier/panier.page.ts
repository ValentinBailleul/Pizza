import { Component, OnInit } from '@angular/core';
import {Pizza} from '../models/pizza.model';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';
import {PizzaService} from '../services/pizza.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {
  nombrePizzaPanier = this.pizzaService.numberPanier;
  pizzaF: Pizza[] = [];
  constructor(private http: HttpClient, private route: Router, private storage: Storage, private pizzaService: PizzaService) {
    this.pizzaF = this.pizzaService.getAddPanier();
    this.nombrePizzaPanier = this.pizzaService.numberPanier;
  }
  ngOnInit() {
  }
  enleverPizza(pizza, nombre) {
    this.pizzaF = this.pizzaService.getDeletePanier(pizza, nombre);
    this.nombrePizzaPanier = this.pizzaService.numberPanier;
  }

  ajouterPizza(pizza) {
    this.pizzaF = this.pizzaService.addDansPanier(pizza);
    this.nombrePizzaPanier = this.pizzaService.numberPanier;
  }
}
