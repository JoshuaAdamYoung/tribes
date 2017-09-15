import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommunityComponent } from './cmp/community/community.component';
import { TribeComponent } from './cmp/tribe/tribe.component';
import { ThoughtlistComponent } from './cmp/thoughtlist/thoughtlist.component';

@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    TribeComponent,
    ThoughtlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
