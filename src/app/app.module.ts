import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
//Loader
import { NgxUiLoaderModule,NgxUiLoaderHttpModule,NgxUiLoaderConfig,SPINNER,POSITION,PB_DIRECTION, NgxUiLoaderRouterModule } from "ngx-ui-loader";
//Module for performing http requests
import { HttpClientModule } from '@angular/common/http';
//Created modules which are to be imported in the root module
import { MainModule } from './main/main.module';
import { UseroauthModule } from './useroauth/useroauth.module';
import { UsermanageModule } from './usermanage/usermanage.module';
import { FaqModule } from './faq/faq.module';
//toastr for toast messages
import { ToastrModule } from 'ngx-toastr';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#0cac9c",
  fgsColor: "#0cac9c",
  bgsPosition: POSITION.bottomCenter,
  bgsSize: 40,
  fgsSize: 50,
  bgsType: SPINNER.doubleBounce, // background spinner type
  fgsType: SPINNER.doubleBounce, // foreground spinner type
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 8, // progress bar thickness
  pbColor: "#0cac9c",
  text: "Loading...",
  textColor: "#0cac9c",
  minTime: 70,
};
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //loader library modules
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      exclude:[
        "https://api.alternative.me/v2/ticker/?structure=array"
      ]
    }),
    // Module for performing http requests 
    HttpClientModule,
    // user defined modules
    MainModule,
    UsermanageModule,
    UseroauthModule,
    FaqModule,
    //Toastr module
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
