import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Test} from "../test";
import { SomethingComponent } from './something/something.component';


@NgModule({
  declarations: [

    SomethingComponent
  ],
  providers: [Test],
  imports: [
    CommonModule
  ],
  exports: [SomethingComponent]
})
export class PostModule {
}
