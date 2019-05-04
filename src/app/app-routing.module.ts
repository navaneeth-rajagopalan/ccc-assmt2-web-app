import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreditsComponent } from './credits/credits.component';
import { VisualizationComponent } from './visualization/visualization.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScatterPlotComponent } from './scatter-plot/scatter-plot.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'visualization', component: VisualizationComponent,
    children:[
      {path: '', redirectTo: 'corelation', pathMatch: 'full'},
      {path: 'corelation', component: ScatterPlotComponent},
      {path: '**', redirectTo: 'corelation', pathMatch: 'full'}
    ]
  },
  {path: 'credits', component: CreditsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
