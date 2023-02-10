import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { SingleChannelComponent } from './single-channel/single-channel.component';
import { UploadComponent } from './upload/upload.component';
import { AccountComponent } from './account/account.component';
import { VideoPageComponent } from './video-page/video-page.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    HomeComponent,
    SettingComponent,
    SubscriptionsComponent,
    HistoryPageComponent,
    HelpComponent,
    AboutComponent,
    SingleChannelComponent,
    UploadComponent,
    AccountComponent,
    VideoPageComponent,
    UploadVideoComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
