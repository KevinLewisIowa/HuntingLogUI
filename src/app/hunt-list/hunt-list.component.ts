import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HuntService } from '../hero.service';
import { Hunt } from '../hunt';

@Component({
  selector: 'hunt-list',
  templateUrl: './hunt-list.component.html',
  styleUrls: ['./hunt-list.component.css']
})
export class HuntListComponent implements OnInit {
hunts: Hunt [];
  constructor(private router: Router,
              private huntService: HuntService) { }

  ngOnInit() {
    this.huntService.getHunts()
    .then((hunts: Hunt[]) => this.hunts = hunts);
  }

  onSelect(hunt: Hunt) {
    this.router.navigate(['/detail', hunt.id])
  }

}
