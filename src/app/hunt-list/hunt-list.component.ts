import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HuntService } from '../hunt.service';
import { Hunt } from '../hunt';
import { Store } from '@ngrx/store';
import { IMainStore, IUserStore } from '../state-management/main.store';

@Component({
  selector: 'hunt-list',
  templateUrl: './hunt-list.component.html',
  styleUrls: ['./hunt-list.component.css']
})
export class HuntListComponent implements OnInit {
hunts: Hunt [];
  constructor(private router: Router,
              private store: Store<IMainStore>,
              private huntService: HuntService) { }

  ngOnInit() {
    this.store.select('user')//.filter((data : IMainStore) => !!data)
      .subscribe(
          (data : IUserStore) => {
            this.hunts = [];
            if(data.hunts != undefined && data.hunts.length > 0){
              this.hunts = data.hunts;
            }
          }
      )

    this.huntService.getHunts(window.sessionStorage.getItem('userId'));
    //.then((hunts: Hunt[]) => this.hunts = hunts);
  }

  onSelect(hunt: Hunt) {
    this.router.navigate(['/detail', hunt.id])
  }

}
