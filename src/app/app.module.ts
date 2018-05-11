import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
// import { CategoryPipe } from './category.pipe';
import { NewsListComponent } from './news-list/news-list.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { CommentsComponent } from './comments/comments.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ShowInfoComponent,
    CommentsComponent,
    ItemDetailComponent
    // CategoryPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
