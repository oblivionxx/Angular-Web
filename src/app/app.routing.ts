import {ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import { HomePageComponent } from './component/home-page/home-page.component';
import { AboutPageComponent } from './component/about-page/about-page.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SpotifyComponent } from './component/spotify/spotify.component'
import { ArtistComponent } from './component/artist/artist.component'
import { AlbumComponent } from './component/album/album.component'


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
    },
    {
        path:'spotify',
        component: SpotifyComponent
    },
    {
        path:'spotify/artist/:id',
        component: ArtistComponent
    },
    {
        path:'spotify/album/:id',
        component: AlbumComponent
    }
];
 
export const routing: ModuleWithProviders=RouterModule.forRoot(AppRoutes);