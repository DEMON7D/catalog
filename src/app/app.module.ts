import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {HomeComponent} from './home/home.component';
import 'hammerjs';
import 'rxjs/Rx';
import {ContentComponent} from './content/content.component';
import {HttpService} from './http.servise';
import {HttpModule} from '@angular/http';
import {ItemContentComponent} from './content/itemContent/itemContent.component';
import {RouterModule, Routes} from '@angular/router';
import {DialogsModule} from './dialogs/dialogs.module';

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ItemContentComponent,
    outlet: 'popup',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    ItemContentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DialogsModule,
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
