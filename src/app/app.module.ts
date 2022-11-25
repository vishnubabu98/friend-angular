import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { Route, RouterModule, Routes } from '@angular/router';

const myRoute:Routes=[
  {
    path:"",
    component:AddFriendComponent
  },
  {
    path:"viewfriend",
    component:ViewFriendComponent
  },
  {
    path:"searchfriend",
    component:SearchFriendComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddFriendComponent,
    ViewFriendComponent,
    SearchFriendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
