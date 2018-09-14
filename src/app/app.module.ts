import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberItemComponent } from './member/member-item/member-item.component';
import { CharacterListComponent } from './character/character-list/character-list.component';
import { CharacterItemComponent } from './character/character-item/character-item.component';
import { SpecListComponent } from './specialisation/spec-list/spec-list.component';
import { BisListComponent } from './itemisation/bis-list/bis-list.component';
import { ItemComponent } from './itemisation/item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import {CharactersService} from './services/characters.service';
import {MembersService} from './services/members.service';
import {RouterModule, Routes} from '@angular/router';
import { NewMemberComponent } from './member/new-member/new-member.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WowWapiGuildMembersService} from './services/wow-wapi-guild-members.service';
import {HttpClientModule} from '@angular/common/http';
import { MemberDezListComponent } from './member/api/member-dez-list/member-dez-list.component';

const appRoutes: Routes = [
  { path: 'members', component: MemberListComponent},
  { path: 'newMember', component: NewMemberComponent},
  { path: 'members-list', component: MemberDezListComponent},
  { path: '**', component: MemberListComponent},
  { path: '', component: MemberListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberItemComponent,
    CharacterListComponent,
    CharacterItemComponent,
    SpecListComponent,
    BisListComponent,
    ItemComponent,
    NavbarComponent,
    NewMemberComponent,
    MemberDezListComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    CharactersService,
    MembersService,
    WowWapiGuildMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
