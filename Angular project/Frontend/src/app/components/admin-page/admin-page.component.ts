import { Component, OnChanges, OnInit } from '@angular/core';
import { HTTPService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})

export class AdminPageComponent implements OnInit {
  userData!: any;
  isAuthenticated!: boolean;
  constructor(private httpservice: HTTPService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.getUserIdData().subscribe((data: any) => {
      console.log(data.body)
      this.userData = data.body;
    })
    if (this.userData) {
      this.isAuthenticated = true;
    }
  }
}
