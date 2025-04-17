import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { CollegeSportsComponent } from './college-sports/college-sports.component';

const routes: Routes = [
  {
    path: "college-sports",
    component: CollegeSportsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
