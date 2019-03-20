import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';
import { CalendarModule} from 'primeng/primeng';
import { InputMask } from 'primeng/primeng';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchitectformComponent } from './architectform/architectform.component';
import { InteriordesignerformComponent } from './interiordesignerform/interiordesignerform.component';
import { GeneralcontractorformComponent } from './generalcontractorform/generalcontractorform.component';
import { TilecontractorformComponent } from './tilecontractorform/tilecontractorform.component';
import { ProductspecsformComponent } from './productspecsform/productspecsform.component';
import { ProjectetaformComponent } from './projectetaform/projectetaform.component';
import { InventorysourceformComponent } from './inventorysourceform/inventorysourceform.component';
import { TiledistributorformComponent } from './tiledistributorform/tiledistributorform.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormFieldModule, MatOptionModule} from '@angular/material';
import { MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectdetailsformComponent } from './projectdetailsform/projectdetailsform.component';
import { HeaderComponent } from './header/header.component';
import { SuccessComponent } from './success/success.component';
import { DisplayComponent } from './display/display.component';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const config = {
  apiKey: 'AIzaSyB92IQF3Bvtdoelvj4Ea9XPQEhyHHn_FYE',
  authDomain: 'authenticationmodule-e2364.firebaseapp.com',
  databaseURL: 'https://authenticationmodule-e2364.firebaseio.com',
  projectId: 'authenticationmodule-e2364',
  storageBucket: 'authenticationmodule-e2364.appspot.com',
  messagingSenderId: '295202537509'
};

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home2', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArchitectformComponent,
    InteriordesignerformComponent,
    GeneralcontractorformComponent,
    TilecontractorformComponent,
    ProductspecsformComponent,
    ProjectetaformComponent,
    InventorysourceformComponent,
    TiledistributorformComponent,
    InputMask,
    ProjectdetailsformComponent,
    HeaderComponent,
    SuccessComponent,
    DisplayComponent,
    HomeComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AccordionModule,
    DropdownModule,
    CheckboxModule,
    SliderModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

function newFunction() {
  return 'authenticationmodule-e2364.appspot.com';
}
