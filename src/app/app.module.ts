import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTableModule } from '@angular/material/table';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { StructuresComponent } from './modules/adventure/structures/structures.component';
import { AttModifiersComponent } from './modules/adventure/structures/att-modifiers/att-modifiers.component';
import { BanksComponent } from './modules/adventure/structures/banks/banks.component';
import { DwellingsComponent } from './modules/adventure/structures/dwellings/dwellings.component';
import { MinesComponent } from './modules/adventure/structures/mines/mines.component';
import { TreasuresComponent } from './modules/adventure/structures/treasures/treasures.component';
import { TravelMiscComponent } from './modules/adventure/structures/treasures/travel-misc/travel-misc.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    StructuresComponent,
    AttModifiersComponent,
    BanksComponent,
    DwellingsComponent,
    MinesComponent,
    TreasuresComponent,
    TravelMiscComponent,
  ],
  imports: [
    // RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
