import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public data!: any;
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
    this.auth.getUserIdData().subscribe((data: any) => {
      console.log(data.body)
      this.data = data.body;
    })
  }

  public loginStatus() {
    if (!sessionStorage.getItem('token')) {
      return true;
    }
    else {
      return false;
    }
  }


}
