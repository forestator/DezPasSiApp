import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberItemComponent } from './member/member-item/member-item.component';
import { BisListComponent } from './itemisation/bis-list/bis-list.component';
import { ItemComponent } from './itemisation/item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WowWapiGuildMembersService} from './services/wow-wapi-guild-members.service';
import {HttpClientModule} from '@angular/common/http';
import { MemberDezListComponent } from './member/api/member-dez-list/member-dez-list.component';
import {StatsService} from './services/stats.service';
import { PoidsDesStatsComponent } from './poids-des-stats/poids-des-stats.component';
import { NewComponent } from './poids-des-stats/new/new.component';
import {CharacterDetailsService} from './services/character-details.service';
import { NewItemAssociationComponent } from './itemisation/new-item-association/new-item-association.component';
import {AngularFireModule} from '@angular/fire';
import {config} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { EditComponent } from './poids-des-stats/edit/edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule, MatTableModule} from '@angular/material';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {SpeBisListService} from './services/spe-bis-list.service';
import { NewBisListComponent } from './itemisation/bis-list/new-bis-list/new-bis-list.component';

const appRoutes: Routes = [
  { path: 'members', component: MemberDezListComponent},
  { path: 'pds', component: PoidsDesStatsComponent},
  { path: 'newpds', component: NewComponent},
  { path: 'newItemAssociation', component: NewItemAssociationComponent},
  { path: 'memberDetails', component: MemberItemComponent},
  { path: 'bisList', component: BisListComponent},
  { path: 'newBisListItems', component: NewBisListComponent},
  { path: 'editPds/:spec/:mono/:multi/:classe', component: EditComponent},
  { path: '**', component: MemberDezListComponent},
  { path: '', component: MemberDezListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MemberItemComponent,
    BisListComponent,
    ItemComponent,
    NavbarComponent,
    MemberDezListComponent,
    PoidsDesStatsComponent,
    NewComponent,
    NewItemAssociationComponent,
    EditComponent,
    NewBisListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    StatsService,
    WowWapiGuildMembersService,
    CharacterDetailsService,
    SpeBisListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
