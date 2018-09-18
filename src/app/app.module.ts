import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemberItemComponent } from './member/member-item/member-item.component';
import { SpecListComponent } from './specialisation/spec-list/spec-list.component';
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

const appRoutes: Routes = [
  { path: 'members', component: MemberDezListComponent},
  { path: 'pds', component: PoidsDesStatsComponent},
  { path: 'newpds', component: NewComponent},
  { path: '**', component: MemberDezListComponent},
  { path: '', component: MemberDezListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MemberItemComponent,
    SpecListComponent,
    BisListComponent,
    ItemComponent,
    NavbarComponent,
    MemberDezListComponent,
    PoidsDesStatsComponent,
    NewComponent
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
    StatsService,
    WowWapiGuildMembersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
