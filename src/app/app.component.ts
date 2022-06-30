import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  showMe = false;
  showMe1 = false;
  onToggle(){
     this.showMe= !this.showMe; 
     this.showMe=true;
     this.showMe1=false;
  }
  onToggle1(){
    this.showMe1= !this.showMe1;
    this.showMe1=true;
    this.showMe=false;
 }
  veg=[
    {name:'potato',image:'./assets/patota.jpg'},
    {name:'capsicum',image:'./assets/capsicum.jpg'},
    {name:'onion',image:'./assets/onion.jpg'},
    {name:'cucumber',image:'./assets/cucumber.jpg'}
  ];
  fruits=[
    {name:'apple',image:'./assets/apple.jpg'},
    {name:'watermelon',image:'./assets/watermelon.jpg'},
    {name:'tomato',image:'./assets/tomato.jpg'}
  ];
}
