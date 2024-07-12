import { Component } from '@angular/core';
import { Loot } from './Loot';
import { LootCartService } from '../loot-cart.service';

@Component({
  selector: 'app-loot-list',
  templateUrl: './loot-list.component.html',
  styleUrl: './loot-list.component.scss'
})
export class LootListComponent {

  loots: Loot[] = [{
    name : "Phantom Gx Academy",
    type: "Con Tapones",
    price: 154999,
    stock: 6,
    image: "https://i.pinimg.com/564x/02/91/25/029125cb23842c5c9003f40f51494818.jpg",
    clearance: false,
    quantity: 0
  },
  {
    "name" : "Vapor 15",
    "type": "Con Tapones",
    "price": 154999,
    "stock": 0,
    "image": "https://i.pinimg.com/564x/c1/78/bb/c178bb3beaf27a9e364a74fce422eedb.jpg",
    clearance: false,
    quantity: 0
  },
  {
    "name" : "Ultra Match Fgag",
    "type": "Con Tapones",
    "price": 129598,
    "stock": 9,
    "image": "https://i.pinimg.com/564x/d3/8d/99/d38d99540d742e5351eeccb3af0d84c3.jpg",
    clearance: true,
    quantity: 0
  },
  {
    "name" : "Botines Futsal Nex",
    "type": "Sin Tapones",
    "price": 36950,
    "stock": 1,
    "image": "https://i.pinimg.com/564x/49/50/f7/4950f7ca730929589cb2672a49b81638.jpg",
    clearance: false,
    quantity: 0
  },
  {
    "name" : "CR7 Botita",
    "type": "Con Tapones",
    "price": 200000,
    "stock": 3,
    "image": "https://i.pinimg.com/564x/a6/08/60/a608605a8e5e60b914ca21a544c73671.jpg",
    clearance: true,
    quantity: 0
  },
  {
    "name" : "Botines Futsal Domin",
    "type": "Sin Tapones",
    "price": 60950,
    "stock": 4,
    "image": "https://i.pinimg.com/564x/f1/de/7e/f1de7e70a42391a8045f6b663b28d8d4.jpg",
    clearance: false,
    quantity: 0
  }

];



constructor(private cart: LootCartService){
}

addCart(loot: Loot): void {
  if(loot.quantity > 0){
    this.cart.addCard(loot);
    loot.stock -=loot.quantity;
    loot.quantity = 0;
  }
}

}
