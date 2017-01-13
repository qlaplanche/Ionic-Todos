import { AddTodoPage } from './../pages/add-todo/add-todo';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { InfoComponent } from './../pages/Info-page/info-page';
import { ListPage } from './../pages/list-page/list-page';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    InfoComponent,
    ListPage,
    AddTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    InfoComponent,
    ListPage,
    AddTodoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
    ]
})
export class AppModule {}
