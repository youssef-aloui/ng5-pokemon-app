import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "./pokemons.service";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemon/list-pokemon.component.html'
})
export class ListPokemonComponent implements OnInit{

    private pokemons: Pokemon[];
    private title: string = "List des pokemons";
    // private value: string = "";
    // private  values: string = "";

    constructor(private router: Router,
                private pokemonsService: PokemonsService) {}
    // singleton, instance unique du service
    // constructor injection pattern : service dans un service

    ngOnInit(): void {
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);


    }

    selectPokemon(pokemon: Pokemon) {
        let link = ['pokemons', pokemon.id];
        this.router.navigate(link);
    }

    /* onKey(event: any) {
         this.value = 'Bonjour ' + event.target.value;
     }*/

    /*onKey(event: KeyboardEvent) {
        this.value = 'Bonjour ' + (<HTMLInputElement>event.target).value;
    }*/

    /* onKey(value: string) {
         this.value = 'Bonjour ' + value;
     }*/
}