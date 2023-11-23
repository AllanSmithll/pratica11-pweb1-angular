import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CpfPipe} from './pipe/cpf.pipe';
import { PhonePipe } from './pipe/phone.pipe';


@NgModule({
  declarations: [CpfPipe, PhonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CpfPipe,
    PhonePipe
  ]
})
export class PipesModule { }
