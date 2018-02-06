import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { RouterModule } from "@angular/router";
import {HomeComponent} from "./Components/HomeCompoment/home.component";
import {NavComponent} from "./Components/NavComponent/nav.component";

@NgModule({
    declarations: [AppComponent,NavComponent,HomeComponent],
    imports: [
      BrowserModule,
      RouterModule.forRoot([
              {
                path: '',
                component:  HomeComponent,
                //canActivate:[AuthGuard]
              }
      ])
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
