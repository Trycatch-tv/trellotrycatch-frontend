import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  constructor(){}

  ngOnInit(): void {
    
  }


}
