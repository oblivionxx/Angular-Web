import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { ProfileComponent } from './component/profile/profile.component';

const AppRoutes: Routes = [
    {
        path:'',
        component:HomePageComponent
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    }
];
 
export const routing: ModuleWithProviders=RouterModule.forRoot(AppRoutes);