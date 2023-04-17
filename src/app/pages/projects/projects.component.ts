import { Component, OnInit } from '@angular/core';
import { faBox, faWaveSquare, faClock, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;

  items = [
    {
      label: 'users 1',
      items: [
        {
          label: 'user 1.1'
        },
        {
          label: 'user 1.2'
        }
      ]
    },
    {
      label: 'users 2',
      items: [
        {
          label: 'user 1.1'
        }
      ]
    }
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}