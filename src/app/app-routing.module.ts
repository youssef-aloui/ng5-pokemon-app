import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./page-not-found.component";

// routes
const appRoutes: Routes = [
    { path: '', redirectTo: 'pokemons/all', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } // l'ordre est important
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }