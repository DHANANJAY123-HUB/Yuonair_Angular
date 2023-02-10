import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
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

const routes: Routes = [
  {
    path : '',
    component :HomeComponent
  },
  {
    path : 'register',
    component :RegisterComponent
  },
  {
    path : 'login',
    component :LoginComponent
  },
  {
    path : 'forgot-password',
    component :ForgotPasswordComponent
  },
  {
    path : 'setting',
    component :SettingComponent
  },
  {
    path : 'subscriptions',
    component :SubscriptionsComponent
  },
  {
    path : 'history-page',
    component :HistoryPageComponent 
  },
  {
    path : 'help',
    component :HelpComponent
  },
  {
    path : 'about',
    component :AboutComponent
  },
  {
    path : 'single-channel',
    component :SingleChannelComponent
  },
  {
    path : 'upload',
    component :UploadComponent
  },
  {
    path : 'account',
    component :AccountComponent
  },
  {
    path : 'video-page',
    component :VideoPageComponent
  },
  {
    path : 'upload-video',
    component :UploadVideoComponent
  },
  {
    path : 'slider',
    component :SliderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
