import { Component, OnChanges, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})

export class UserPageComponent implements OnInit {
  userData!: any;
  isAuthenticated!: boolean;
  constructor (private  httpservice: HTTPService, private auth: AuthService)  {}
  
  ngOnInit() {
    this.auth.getUserIdData().subscribe((data: any) => {
      console.log(data.body)
      this.userData = data.body;
    })
    if(this.userData) {
      this.isAuthenticated = true;
    }
  }
}
