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
  /*
  myDomain: string ="empty";
  flagIMG: string ="empty";
  */
  name: string ="empty";
  species: string ="empty";
  habitat: string ="empty";
  weight_kg: string ="empty";
  height_cm: string ="empty";
  description: string ="empty";

  constructor(
    private placeService: PlacesService //new
  ) { }

  ngOnInit() {
    this.allData = this.placeService.data[0]; //new

    console.log("All data");
    console.log(this.allData);

    const url = this.allData.image;
    this.imageURL = url;

    /*this.myDomain = this.allData.tld[0];
    console.log(url);
    */
    /*const flags = this.allData.image;
    this.flagIMG = flags;
    */
    this.name=this.allData.name;
    this.species=this.allData.species;
    this.habitat=this.allData.habitat;
    this.weight_kg=this.allData.weight_kg;
    this.height_cm=this.allData.height_cm;
    this.description=this.allData.description;
    NgControlStatusGroup
  }

}
