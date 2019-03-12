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
import { LoginformComponent } from './loginform/loginform.component';


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
    LoginformComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
