import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArchitectformComponent } from './architectform/architectform.component';
import { InteriordesignerformComponent } from './interiordesignerform/interiordesignerform.component';
import { GeneralcontractorformComponent } from './generalcontractorform/generalcontractorform.component';
import { TilecontractorformComponent } from './tilecontractorform/tilecontractorform.component';
import { ProductspecsformComponent } from './productspecsform/productspecsform.component';
import { ProjectetaformComponent } from './projectetaform/projectetaform.component';
import { InventorysourceformComponent } from './inventorysourceform/inventorysourceform.component';

@NgModule({
  declarations: [
    AppComponent,
    ArchitectformComponent,
    InteriordesignerformComponent,
    GeneralcontractorformComponent,
    TilecontractorformComponent,
    ProductspecsformComponent,
    ProjectetaformComponent,
    InventorysourceformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
