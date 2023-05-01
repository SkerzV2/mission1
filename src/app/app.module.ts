import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ImmatriculationComponent } from './immatriculation/immatriculation.component';
import { ErrorService } from './immatriculation/error.service';

@NgModule({
  declarations: [
    AppComponent,
    ImmatriculationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
