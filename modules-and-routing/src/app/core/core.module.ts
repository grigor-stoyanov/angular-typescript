import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import {SharedModule} from "../shared/shared.module";
import { NavigationComponent } from './navigation/navigation.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavigationComponent,
  ],
  exports: [
    GlobalLoaderComponent,
    NavigationComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
