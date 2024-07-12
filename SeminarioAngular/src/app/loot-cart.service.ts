import { Injectable } from '@angular/core';
import { Loot } from './loot-list/Loot';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LootCartService {

  private _listBuy: Loot[] = [];
  listBuy: BehaviorSubject<Loot[]> = new BehaviorSubject(this._listBuy);

  constructor() { }

  addCard(loot: Loot) : void {
    let item: Loot | undefined = this._listBuy.find((v) => v.name == loot.name);
    if(!item){
      this._listBuy.push({ ... loot});
    }else{
      item.quantity += loot.quantity;
    }

    this.listBuy.next(this._listBuy);
  }

}
