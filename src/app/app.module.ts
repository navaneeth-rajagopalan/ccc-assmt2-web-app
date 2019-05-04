import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { CreditsComponent } from './credits/credits.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { WindowScrollDirective } from './directives/window-scroll.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisualizationComponent,
    CreditsComponent,
    ScatterPlotComponent,
    WindowScrollDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
