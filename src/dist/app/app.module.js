"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var page_not_found_component_1 = require("./page-not-found.component");
var pokemon_module_1 = require("./pokemon/pokemon.module");
var http_1 = require("@angular/common/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
var login_routing_module_1 = require("./login-routing.module");
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { dataEncapsulation: false }),
                pokemon_module_1.PokemonModule,
                login_routing_module_1.LoginRoutingModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
                login_component_1.LoginComponent
            ],
            exports: [
                login_component_1.LoginComponent
            ],
            bootstrap: [app_component_1.AppComponent] // demarrer l'appl dans le navigateur
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map