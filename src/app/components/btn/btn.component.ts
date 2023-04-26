import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit{

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';

  /**
   *
   */
  constructor() {    
  }

  ngOnInit(): void {
    
  }

  get colors(){
    return {
      'bg-success-700 hover:bg-success-800 focus:ring-success-300': this.color === 'success',
      'bg-primary hover:bg-violet-200 ': this.color === 'primary',
      'bg-red-700 hover:bg-red-800 focus:ring-red-300': this.color === 'red',
      
    }

  }
}
