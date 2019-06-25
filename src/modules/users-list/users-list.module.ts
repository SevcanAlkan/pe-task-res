import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, MatTableModule } from '@angular/material';
import { CoreModule } from '../core';
import { UsersResolver } from './resolvers';
import { PaginationResolver } from './resolvers/pagination.resolver';

import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListComponent } from './components/users-list/users-list.component';
import { SharedListModule } from '../shared/shared-list.module';


@NgModule({
  declarations: [UsersListComponent],
  imports: [
    SharedListModule,
    CoreModule.forRoot(),
    UsersListRoutingModule
  ],
  providers: [
    UsersResolver,
    PaginationResolver
  ]
})
export class UsersListModule { }
