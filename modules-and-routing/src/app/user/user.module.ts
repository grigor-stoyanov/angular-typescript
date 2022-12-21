import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from './list/list.component';
import {Test} from "../test";
import {DetailComponent} from './detail/detail.component';
import {RouterModule} from "@angular/router";
import {UserResolver} from "../user-detail.resolver";
import {AuthGuard} from "./user-details.guard";

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  exports: [
    ListComponent
  ],
  // providers:[
  //   Test // {provide:Test,useClass:Test}
  // ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [{
        // our root config requires /
        path: 'user/list',
        component: ListComponent
      },
        {
          path: 'user/detail/:id',
          // Before rendering usercomponent resolver will allow it!
          // Will be able to access user
          resolve: {user: UserResolver},
          // This Guard Prevents un logged user from going forward with the navigation
          canActivate:[AuthGuard],
          // have different guards (children,paths...)
          component: DetailComponent
        }])
  ]
})
export class UserModule {
  // When I use this Module in The Highest Level (For ROOT only there to be entered the providers)
  // if we dont use forRoot we will get same module without providers
  static forRoot(config: any): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'test',
          useValue: config
        }
      ]
    }
  }

  // Configurations which are provided with DI used on Highest Level(AppRouting)
  static forChild(config: any): ModuleWithProviders<UserModule> { // ForFeature
    return {
      ngModule: UserModule,
      providers: [
        {
          provide: 'test',
          useValue: config
        }
      ]
    }
  }

}
