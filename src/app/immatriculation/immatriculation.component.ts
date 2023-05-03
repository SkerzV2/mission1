import { Component } from '@angular/core';
import { immatriculationList } from './immatriculation-list.component';
@Component({
selector: 'app-immatriculation',
templateUrl: './immatriculation.component.html',
})
export class ImmatriculationComponent {
showForm = false;
newImmatriculation = '';
immatriculations: string[] = [];
caractereMax = 9;
caractereMin = 7;
formatVerif = /^[a-zA-Z]{2}-\d{3}-[a-zA-Z]{2}$/;
message=''

toggleForm() {
this.showForm = !this.showForm;
}

addImmatriculation() {
const immatriculationVerif = this.verification();
if (immatriculationVerif !== 0) {
this.immatriculations.push(immatriculationVerif.toUpperCase());
this.newImmatriculation = '';
}
}

verification() {
if (this.newImmatriculation.trim() !== '') {
if (this.newImmatriculation.length === this.caractereMin) {
this.newImmatriculation =
this.newImmatriculation.slice(0, 2) +
'-' +
this.newImmatriculation.slice(2, 5) +
'-' +
this.newImmatriculation.slice(5);
if (this.formatVerif.test(this.newImmatriculation)) {
  this.setValidationMessage()
  return this.newImmatriculation;
}
} else if (this.newImmatriculation.length === this.caractereMax) {
if (this.formatVerif.test(this.newImmatriculation)) {
  this.setValidationMessage()
  return this.newImmatriculation;
} else {
  this.setErrorMessage("le format n'a pas été respecté!");
  return 0;
}
} else {
this.setErrorMessage('pas la bonne taille');
return 0;
}
}
return 0;
}

getImmatriculation() {
return this.immatriculations;
}
setErrorMessage(error:string){
this.message=error;
}
setValidationMessage(){
  this.message='plaque d\'immatriculation enregistrer';
  }
suprImmatriculation(index: number) {
this.immatriculations.splice(index, 1);
}
}