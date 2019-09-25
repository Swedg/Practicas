import { Component, OnInit } from '@angular/core';
import {PokedexService} from '../service/pokedex.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  arrayPokemon:[]=[];
  arrayHability:[]=[];
  constructor(private nombres:PokedexService) {}
  ngOnInit(){
    this.nombres.PokemonNombre().subscribe(
      (response)=>{
        
        this.arrayPokemon=(response['results']);
      },
      (error)=>{
        console.log(error);
      }

    );
    this.nombres.pokemonHabilidad().subscribe(
      (response)=>{
        this.arrayHability=(response['results']);
      },
      (error)=>{
        console.log(error);
      }
    );
  
  }
}
