import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IType } from '../shared/models/ProductType';
import { map } from 'rxjs/operators';
import { IProduct } from '../shared/models/product';
import { IPagination, Pagination } from '../shared/models/pagination';

import { ShopParams } from '../shared/models/shopParams';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
baseUrl = 'https://localhost:5001/api/'
products: IProduct[] = [];
pagination = new Pagination();
  constructor(private http: HttpClient , ) { 

  }





  //getProducts(brandId?:number , typeId?:number , sort?:string){
  getProducts(shopParams:ShopParams){
    let params = new HttpParams()

    if(shopParams.brandId){
      params = params.append('brandId',shopParams.brandId.toString())
    }

    if(shopParams.typeId){
      params = params.append('typeId',shopParams.typeId.toString())
    }
   
      params = params.append('sort',shopParams.sort)
      params = params.append('pageIndex',shopParams.pageNumber.toString())
      params = params.append('pageIndex',shopParams.pageSize.toString())
    
    return this.http.get<IPagination>(this.baseUrl+'products', { observe: 'response', params }).pipe(
      map(response => {
        this.products = [...this.products, ...response.body.data];
        this.pagination = response.body;
        return this.pagination;
      })
    );
  }


  getBrands() {
    return this.http.get<IBrand[]>(this.baseUrl+'products/brands');
  }



  getTypes() {
    return this.http.get<IType[]>(this.baseUrl+'products/types');
  }




  

}
