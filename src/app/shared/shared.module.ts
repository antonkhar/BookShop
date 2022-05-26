import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { SharedRoutingModule } from './shared-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
  ],
  exports: [
    FormComponent
  ]
})
export class SharedModule { }
