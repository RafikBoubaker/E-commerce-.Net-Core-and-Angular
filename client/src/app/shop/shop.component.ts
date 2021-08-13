import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/ProductType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
products : IProduct[]
brands : IBrand[]
types:IType[]
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {

    this.getProducts()
    this.getBrand()
    this.getTypes()
  }

  
      getProducts(){
        this.shopService.getProducts().subscribe(response =>{
          this.products = response.data
        },err =>{
          console.log(err)
        })
      }



      getBrand(){

        this.shopService.getBrands().subscribe(response =>{
          this.brands = response
        },err =>{
          console.log(err)
        })
          
      }


      getTypes(){

        this.shopService.getTypes().subscribe(response =>{
          this.types = response
        },err =>{
          console.log(err)
        })
          
      }




}
