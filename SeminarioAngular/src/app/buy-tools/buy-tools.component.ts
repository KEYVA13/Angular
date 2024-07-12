import { Component } from '@angular/core';
import { LootCartService } from '../loot-cart.service';
import { Loot } from '../loot-list/Loot';
import { observable } from 'rxjs';

@Component({
  selector: 'app-buy-tools',
  templateUrl: './buy-tools.component.html',
  styleUrl: './buy-tools.component.scss'
})
export class BuyToolsComponent {

  lootListBuy: Loot[] = [];

  constructor(private cart: LootCartService){
    cart.listBuy.subscribe((observable) => this.lootListBuy = observable)
  }
}
