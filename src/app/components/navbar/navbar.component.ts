import { Component, OnInit } from '@angular/core';
import { faInfoCircle, faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  faBell = faBell;
  faInfoCircle = faInfoCircle;

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
