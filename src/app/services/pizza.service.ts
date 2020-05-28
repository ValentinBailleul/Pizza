import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pizza } from '../models/pizza.model';
import {Ingredient} from '../models/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class PizzaService {

    numberPanier = 0;
    panierPizza: Pizza[] = [];
    private baseUrl = 'https://api.ynov.jcatania.io/pizza';
    private ingredientUrl = 'https://api.ynov.jcatania.io/ingredient';
    private source = '';
    constructor(private http: HttpClient) {
    }
    public getPizza(): any {
        const url = this.baseUrl;
        return this.http.get<Pizza[]>(url);
    }
    public getIngredient(): any {
        const url = this.ingredientUrl;
        return this.http.get<Ingredient[]>(url);
    }
    public deletePizza(pizza: Pizza): any {
        const url = this.baseUrl;
        return this.http.delete(this.baseUrl + '/' + pizza.id);
    }
    public addPizza(pizza: Pizza): any {
        const url = this.baseUrl;
        return this.http.post<Pizza[]>(url, pizza);
    }

    public getPanier(): any {
        const url = this.baseUrl;
        return this.http.get<Pizza[]>(url);
    }

    public addPanier(pizza: Pizza): any {
        this.panierPizza.push(pizza);
        this.numberPanier = this.numberPanier + 1;
        console.log(this.numberPanier);
    }

    public addDansPanier(pizza: Pizza): any {
        this.panierPizza.push(pizza);
        this.numberPanier = this.numberPanier + 1;
        return this.panierPizza;
    }

    public getAddPanier(): any {
        console.log(this.panierPizza);
        return this.panierPizza;
    }

    public getDeletePanier(pizza: Pizza, nombre: number): any {

        this.panierPizza.splice(nombre, 1);
        this.numberPanier = this.numberPanier - 1;
        console.log(this.panierPizza);
        return this.panierPizza;
    }
}
