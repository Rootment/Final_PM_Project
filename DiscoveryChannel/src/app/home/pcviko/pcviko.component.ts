import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-pcviko',
  templateUrl: './pcviko.component.html',
  styleUrls: ['./pcviko.component.scss'],
})
export class PcvikoComponent {

  items = [
    { label: "Czechia", checked: false },
    { label: "Slovakia", checked: false },
    { label: "Deutschland", checked: false },
    { label: "Poland", checked: false },
    { label: "United Kingdom", checked: false }
  ];

  constructor(private modalCTRL: ModalController) {
    this.items = this.getItems();

    const getStoreditems =async () => {
      const {value} = await Preferences.get({
        key:"jsonData"
      });
      if (value) {
        const selectedItems = JSON.parse(value);
        // Update the checked state of items based on what's in localStorage
        this.items.forEach(item => {
          item.checked = selectedItems.some((selectedItem: { label: string; }) => selectedItem.label === item.label);
        });
    }
    /* const storedItems = localStorage.getItem('selectedItems');
    if (storedItems) {
      const selectedItems = JSON.parse(storedItems);
      // Update the checked state of items based on what's in localStorage
      this.items.forEach(item => {
        item.checked = selectedItems.some((selectedItem: { label: string; }) => selectedItem.label === item.label);
      });*/
    }
  getStoreditems();
}

  dismissModal() {
    this.modalCTRL.dismiss(null, "cancel");
  }
  submit() {
    const selectedItems = this.items.filter((item) => item.checked);

    const saveStoredItems =async () => {
      await Preferences.set({
        key:"jsonData",
        value:JSON.stringify(selectedItems)
      });
      
    }
    // localStorage.setItem("k", "O");
    /*localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
     console.log('Selected Items:', selectedItems);*/
    saveStoredItems();

     this.modalCTRL.dismiss(selectedItems, "location");
  }
  private getItems() {
    return [
      { label: 'Czechia', checked: false },
      { label: "Slovakia", checked: false },
      { label: "Deutschland", checked: false },
      { label: "Poland", checked: false },
      { label: "United Kingdom", checked: false }
    ];
  }
}
