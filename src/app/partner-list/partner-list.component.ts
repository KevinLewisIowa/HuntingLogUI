import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HuntService } from '../hunt.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
people : Person[];
hasPartners : Boolean;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private huntService: HuntService) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.huntService.getHuntPartners(+params['id']))
      .subscribe((people: Person[])=> {
        if(people.length > 0){
          this.hasPartners = true;
        }
        else{
          this.hasPartners = false;
        }
        this.people = people
      });
  }

}
