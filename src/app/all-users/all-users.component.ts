import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUserData = {};
  constructor(private httpClient: HttpClient,
    private userService: UserServiceService) { }

  
  ngOnInit() {
  //   const getData = this.httpClient.get("https://reqres.in/api/users/1");
  //   getData.subscribe((res) => {
  //   console.log(res);
  //   this.allUserData = res;
  // });
  this.userService.getUser("https://reqres.in/api/users/1").subscribe((res) => {
    console.log(res);
    this.allUserData = res;
  })
  }

}
