import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { FileComponent } from './file/file.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { ListFormateurComponent } from './list-formateur/list-formateur.component';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';
import { UpdateFormateurComponent } from './update-formateur/update-formateur.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ListSessionComponent } from './list-session/list-session.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { ListOrganismeComponent } from './list-organisme/list-organisme.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formations', component: ListFormationComponent },
  { path: 'addformation', component: AddFormationComponent},
  { path: 'updateformation/:id', component:UpdateFormationComponent},

  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'image', component: FileComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'formateurs', component: ListFormateurComponent},
  { path: 'addformateur', component: AddFormateurComponent},
  { path: 'updateformateur/:id', component: UpdateFormateurComponent},
  { path: 'addparticipant', component: AddParticipantComponent},
  { path: 'participants', component: ListParticipantComponent},
  { path: 'updateparticipant/:id', component: UpdateParticipantComponent},
  { path: 'addsession', component: AddSessionComponent},
  { path: 'sessions', component: ListSessionComponent},
  { path: 'updatesession/:id', component: UpdateSessionComponent},
  { path: 'organismes', component: ListOrganismeComponent},







  



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


