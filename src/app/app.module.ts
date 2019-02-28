import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";
import { InputTextModule } from 'primeng/primeng';
import { CalendarModule} from "primeng/primeng";
import { InputMask } from 'primeng/primeng';
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
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
