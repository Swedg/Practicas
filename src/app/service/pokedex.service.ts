import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor(private http:HttpClient) { }
  public PokemonNombre(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
  public pokemonHabilidad(){
    return this.http.get('https://pokeapi.co/api/v2/ability');

  }

}
