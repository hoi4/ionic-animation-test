import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import {AboutPage} from "./about/about.page";
import {ProfilePage} from "./profile/profile.page";

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'profile',
    component: ProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
