import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreComponent} from './core.component';
import {CoreRoutingModule} from './core-routing.module';



@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ]
})
export class CoreModule { }
