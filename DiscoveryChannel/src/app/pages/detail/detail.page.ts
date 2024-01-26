import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { PlacesService } from 'src/app/services/places/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  allData: any; //new
  imageURL: string ="empty";
  myDomain: string ="empty";
  flagIMG: string ="empty";
  startOfWeek: string ="empty";
  population: string ="empty";
  region: string ="empty";

  constructor(
    private placeService: PlacesService //new
  ) { }

  ngOnInit() {
    this.allData = this.placeService.data[0]; //new

    console.log("All data");
    console.log(this.allData);

    const url = this.allData.coatOfArms.png;
    this.imageURL = url;

    this.myDomain = this.allData.tld[0];
    console.log(url);

    const flags = this.allData.flags.png;
    this.flagIMG = flags;

    this.startOfWeek=this.allData.startOfWeek;
    this.population=this.allData.population.toString();
    this.region=this.allData.region;
    NgControlStatusGroup
  }

}
