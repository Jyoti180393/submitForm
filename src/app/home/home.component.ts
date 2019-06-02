import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  check = false;
  submit = false;
  clicked:boolean=false;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClicked(){
    this.clicked = true;
    
  }

  checkAllUsers(){
    this.check = true;
    this.submit = false;
  }

  submitForm() {
    this.submit = true;
    this.check = false;
  }
}
