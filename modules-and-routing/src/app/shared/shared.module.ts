import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  // Allows Exporting Smaller components with modules
  // Only export stuff you want to use
  exports:[
    SpinnerComponent
  //  You can export whole module but it will only take declarations
  //  Providers are automatically used in the other module no need for exports
  ]
})
export class SharedModule { }
