import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { UserDataComponent } from './components/user-data/user-data.component';
import { SharedCardModule } from '../shared/shared-card.module';

@NgModule({
  declarations: [UserComponent, UserDataComponent],
    imports: [
        SharedCardModule,
        UserRoutingModule
    ]
})
export class UserModule { }
