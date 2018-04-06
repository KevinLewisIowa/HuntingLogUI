import { Component, OnInit } from '@angular/core';
import { Hunt } from '../hunt';
import { Store } from '@ngrx/store';
import { IMainStore } from '../state-management/main.store';
import { HuntService } from '../hunt.service';

@Component({
  selector: 'app-create-hunt',
  templateUrl: './create-hunt.component.html',
  styleUrls: ['./create-hunt.component.css']
})
export class CreateHuntComponent implements OnInit {
  hunt : Hunt;
  constructor(private store: Store<IMainStore>,
  private huntService: HuntService) {
    this.hunt = new Hunt();
   }

  ngOnInit() {

  }

  addHunt() {
    console.log('Adding Hunt');

    this.huntService.addHunt(this.hunt);

    this.hunt = new Hunt();
  }

}
