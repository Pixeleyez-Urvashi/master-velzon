import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { AnalyticsComponent } from "./analytics/analytics.component";

import { WnbaComponent } from "./wnba/wnba.component";
import { CollegeSportsComponent } from "./college-sports/college-sports.component";
import { JobComponent } from './job/job.component';
import { DashboardBlogComponent } from './dashboard-blog/dashboard-blog.component';
import { NbaComponent } from './nba/nba.component';
import { CricketComponent } from './cricket/cricket.component';

const routes: Routes = [
  {
    path: "analytics",
    component: AnalyticsComponent
  },
  {
    path: "nba",
    component: NbaComponent
  },
  {
    path: "wnba",
    component: WnbaComponent
  },
  {
    path: "cricket",
    component: CricketComponent
  },
  {
    path: "college-sports",
    component: CollegeSportsComponent
  },
  {
    path: "job",
    component: JobComponent
  },
  {
    path: "dashboard-blog",
    component: DashboardBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardsRoutingModule { }
