import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./user/list/list.component";
import {SomethingComponent} from "./post/something/something.component";
import {DetailComponent} from "./user/detail/detail.component";

const routes: Routes = [
  {
    path: '',
    //  exclude any other paths
    pathMatch: 'full',
    redirectTo: '/user/list'
  },
  {
    path: 'something',
    component: SomethingComponent
  },
];

// This is basically the whole routing module
export const AppRoutingModule = RouterModule.forRoot(routes)

// forChild,forFeature
// RouterModule.forChild()
// This Snippet automatically generates a module that is extensible
// Static Methods eliminate need for providers
// @NgModule({
//   declarations: [],
//   imports: [
//
//     RouterModule.forRoot(routes)
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {
// }
