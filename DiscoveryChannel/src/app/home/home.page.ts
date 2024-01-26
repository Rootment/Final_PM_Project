import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PcvikoComponent } from './pcviko/pcviko.component';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../services/places/places.service';
import { Preferences } from '@capacitor/preferences';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {

  animalsDataArray: any[] = [];
  handlerMessage = '';
  roleMessage ='';
  
  constructor(
    public modalCTRL:ModalController, 
    public http:HttpClient, 
    private placesService:PlacesService,
   private alertController: AlertController
    ) {
      /* hraní si s alerty pro dory - legit nevím už co jsem všechno dělal
      celkem v prdelce to je protože jsem zapomněl většinu věcí
      const setName = async() => {
        await Preferences.set({
          key:"name",
          value:"Dory"
        });
        
      }
      setName();
      
      const checkName = async() => {
        const {value} = await Preferences.get({
          key:"name",
        })
        alert(`Hello ${value} 
How are you today?`);
        alert(`Did I tell you, that you look beautiful today ${value}?`);
        alert(`${value}! Look what i just found!
Thats food! Let's eat it together`);
        alert(`Are you sure ${value}?
It feels like you don't want to`);
        alert(`Hmmmm... There is something fishy about you ${value}`);
        alert(`Sooooo fishy fish`);
        alert(`OK, THEN!`);
      }
 
    
       checkName();*/
       const getAnimalsData =async () => {
        const {value} = await Preferences.get({
          key:"homeFetchData",
        });
        if (value) {
          const fetchedItems = JSON.parse(value);
          this.animalsDataArray = fetchedItems;
        }
        //alert(`Hello ${value}`);
       }
      
       getAnimalsData();
       // když to zakomentujeme tak to načteme ale nepoužijeme ->
       // to znamena že by po refreshi stejně nebyly uloženy změny..
       // alespon ne v tom co by se zobrazovalo
      }



       async presentAlert () {
        const alert = await this.alertController.create({
          header: 'Are you sure?',
          buttons: [
            {
              text: 'Dissable',
              handler: () => {
                this.handlerMessage = 'Alerts dissabled';
              },
            },
            {
              text: 'YES',
              handler: () => {
                this.handlerMessage = 'Alerts confirmed';
              },
            },
          ],
        });
    
        await alert.present();
      }
  async openModal(){
    const modal = await this.modalCTRL.create({
      component: PcvikoComponent
    });

    await modal.present();

    const{data: newData,role}=await modal.onWillDismiss();

    if (role==="location") {
      console.log(newData);
      
      this.fetchData(newData);
    }
  }
  sendData(data: any){
    this.placesService.data = data;
  }
  fetchData(animals: any){
    this.animalsDataArray = [];
    for(var c of animals){
      //přidat si sem nejakou api ... nevím kde ji získat někde na gitu
      // zde: https://github.com/public-apis/public-apis
       const url = `https://freetestapi.com/api/v1/animals?search=${c.label}`;
       this.http.get(url).subscribe(data =>  {
        console.log(data);
        this.animalsDataArray.push(data);
        
        //přídáno:
        const saveStoredItems =async () => {
          await Preferences.set({
            key:"homeFetchData",
            value: JSON.stringify(this.animalsDataArray)
          });
          
        }

        saveStoredItems();
        //po sem
       });
       console.warn(this.animalsDataArray);
    }
    console.log("Load data from API")
  }
}