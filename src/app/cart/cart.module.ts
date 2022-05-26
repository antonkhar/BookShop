import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ CardComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
  exports:[
    CardComponent
  ]
})
export class CartModule { }
