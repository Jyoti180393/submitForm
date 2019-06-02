import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.css']
})
export class SubmitFormComponent implements OnInit {

  @Input() clicked: boolean = false;
  name = '';
  job = '';
 message:string='';

  constructor(private httpClient: HttpClient,
    private userService: UserServiceService) { }

  ngOnInit() {
  }

  // onSubmit(name: any, job: any) {
  //   console.log(name,job);
  // const sendData = this.httpClient.post("https://reqres.in/api/users", {
  //   name: name,
  //   job: job
  // });
  // sendData.subscribe((res) => {
  //   console.log(res);
  // });
  // }

  onSubmit(name: any, job: any){
    this.userService.createUser( name, job).subscribe((res) => {
      console.log(res);
      console.log("successfully created");
      if(res){

      }
    })
  }
  
}
