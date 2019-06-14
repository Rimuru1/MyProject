import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: firebase.User;
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),

  }

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      console.log(user);
      this.user = user;
    })
  }
  logoutGoogle(){
    console.log("logout...");
    this.service.logout();
    this.router.navigate(['/login'])
  }

}