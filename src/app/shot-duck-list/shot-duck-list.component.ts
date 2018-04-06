import { Component, OnInit } from '@angular/core';
import { ShotDucks } from '../shot-duck';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HuntService } from '../hunt.service';

@Component({
  selector: 'app-shot-duck-list',
  templateUrl: './shot-duck-list.component.html',
  styleUrls: ['./shot-duck-list.component.css']
})
export class ShotDuckListComponent implements OnInit {
  shotDucks: ShotDucks[];
  constructor(private route: ActivatedRoute,
    private location: Location,
    private huntService: HuntService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.huntService.getShotDucks(+params['id']))
      .subscribe((shotDucks: ShotDucks[])=> this.shotDucks = shotDucks);
  }

}
