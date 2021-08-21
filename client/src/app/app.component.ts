import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BasketService } from './basket/basket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cart';
products : any[];
  constructor(private http : HttpClient,private basketService: BasketService){

  }

  ngOnInit(): void {
  this.http.get('https://localhost:5001/api/products').subscribe((response:any )=> {
    console.log(response);
  },error=>{
    console.log(error)
  })


  this.loadBasket();
  }


    loadBasket() {
      const basketId = localStorage.getItem('basket_id');
      if (basketId) {
        this.basketService.getBasket(basketId).subscribe(() => {
          console.log('initialised basket');
        }, error => {
          console.log(error);
        });
      }

    }


}
