import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PokemonModule} from "./pokemon/pokemon.module";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {LoginRoutingModule} from "./login-routing.module";
import {LoginComponent} from "./login.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
        PokemonModule,
        LoginRoutingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        LoginComponent
    ],
    exports: [
        LoginComponent
    ],
    bootstrap: [AppComponent] // demarrer l'appl dans le navigateur
})
export class AppModule { }