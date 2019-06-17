import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Pokemon} from './pokemon';
import {catchError, map} from "rxjs/operators";
import {tap} from "rxjs/operators/tap";
import {of} from "rxjs/observable/of";
import {reduce} from "rxjs/operators/reduce";
import {filter} from "rxjs/operators/filter";

@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient) {}

    private pokemonsUrl = 'api/pokemons';
    private log(log: string) {
        console.info(log);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);

            return of(result as T);
        }
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        if (!term.trim()){
            return of([]);
        }

        return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
            tap( _ => this.log(`found pokemons matching "${term}"`)),
            catchError(this.handleError<Pokemon[]>('search pokemons', []))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        }

        return this.http.put<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap( _ => this.log(`update pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('update pokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${pokemon.id}`
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json'})
        }

        return this.http.delete<Pokemon>(url, httpOptions).pipe(
            tap( _ => this.log(`delete pokemon id=${pokemon.id}`)),
            catchError(this.handleError<any>('delete pokemon'))
        );
    }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {

        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap( _ => this.log(`fetched pokemons`)),
            catchError(this.handleError('getPokemons', []))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
        const url = `${this.pokemonsUrl}/${id}`;
        console.log(url);
        return this.http.get<Pokemon>(url).pipe(
            tap( _ => this.log(`fetched pokemon id=${id}`)),
            catchError(this.handleError<Pokemon>(`fetched pokemon id=${id}`))
        );
    }

    getPokemonTypes(): string[] {
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal',
            'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy'];
    }
}