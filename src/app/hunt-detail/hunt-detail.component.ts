import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HuntService } from '../hero.service';
import { Hunt } from '../hunt';

@Component({
  selector: 'app-hunt-detail',
  templateUrl: './hunt-detail.component.html',
  styleUrls: ['./hunt-detail.component.css']
})
export class HuntDetailComponent implements OnInit {
  huntId : number;
  hunt : Hunt;
  
  constructor(private route: ActivatedRoute,
    private location: Location,
    private huntService: HuntService) { this.hunt = new Hunt();}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.huntService.getHunt(+params['id']))
      .subscribe(hunt => {
        console.log('route param changed, got hunt.');
        this.hunt = hunt;
      });
  }

}
