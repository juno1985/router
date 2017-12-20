import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

   //通过构造器获得router对象
    constructor(private router: Router){}

    toProductDetails(){
    this.router.navigate(['/product']);
  }
}
