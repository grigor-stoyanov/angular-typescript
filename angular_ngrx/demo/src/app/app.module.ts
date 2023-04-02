import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers} from './+store/index';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component'
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './+store/router';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './+store/effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // We use this if we want to use store in our lazy loaded module
    // updates the reducer when our module is lazy loaded
    // StoreModule.forFeature('user',ActionReducerMap),
    
    // Here we add our reducers to the app
    StoreModule.forRoot(reducers),
    // allows logging and tracing of actions trough browser extension
    StoreDevtoolsModule.instrument({logOnly: !isDevMode() }),
    // here we can connect routing to ngrx and manage state between routing
    StoreRouterConnectingModule.forRoot({serializer:CustomSerializer}),
    EffectsModule.forRoot([Effects]),
  ],
  providers: [
    // Mocking the ngRx store for tests and what not
    // {
    //   provide:Store,
    //   useValue:{
    //   select: ()=>{},
    //   dispatch:()=>{}
    // }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
