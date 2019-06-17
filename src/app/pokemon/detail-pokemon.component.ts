import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from './pokemon';
import {PokemonsService} from "./pokemons.service";
import {AuthService} from "../auth.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    // router redirection
    // route recuperer les information url param
    constructor(private route: ActivatedRoute,
                private router: Router,
                private pokemonsService: PokemonsService,
                private authService: AuthService) {}

    ngOnInit(): void {
        // bloquant l'exucetion snapshot recuperer id synvhronne
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    delete(pokemon: Pokemon): void {
        this.pokemonsService.deletePokemon(pokemon)
            .subscribe(_ => this.goBack());
    }

    goBack(): void {
        this.router.navigate(['/pokemons/all']);
        // window.history.back(); pb : retour page - 1
    }

    goEdit(pokemon: Pokemon) {
        this.authService.isLoggedIn = false;
        let link = ['/pokemons/edit', pokemon.id];
        this.router.navigate(link);
    }
}