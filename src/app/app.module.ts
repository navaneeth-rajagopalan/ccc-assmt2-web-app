import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { CreditsComponent } from './credits/credits.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';
import { ApiService } from './services/api.service';
import { WindowScrollDirective } from './directives/window-scroll.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VisualizationComponent,
    CreditsComponent,
    ScatterPlotComponent,
    WindowScrollDirective,
    PageNotFoundComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
