import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cart';
products : any[];
  constructor(private http : HttpClient){

  }

  ngOnInit(): void {
  this.http.get('https://localhost:5001/api/products').subscribe((response:any )=> {
    console.log(response);
  },error=>{
    console.log(error)
  })

  }
}
