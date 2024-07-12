import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-int',
  templateUrl: './button-int.component.html',
  styleUrl: './button-int.component.scss'
})
export class ButtonIntComponent {
  @Input()
  quantity : number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>;

  upQuantity(): void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  downQuantity(): void{
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
