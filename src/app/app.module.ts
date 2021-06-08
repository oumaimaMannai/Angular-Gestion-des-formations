import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './_helpers/auth.service';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import { UpdateParticipantComponent } from './update-participant/update-participant.component';
import { UpdateSessionComponent } from './update-session/update-session.component';
import { ListOrganismeComponent } from './list-organisme/list-organisme.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    FileComponent,
    ListFormationComponent,
    ListFormateurComponent,
    AddFormateurComponent,
    AddFormationComponent,
    AddParticipantComponent,
    UpdateFormateurComponent,
    UpdateFormationComponent,
    AddSessionComponent,
    ListSessionComponent,
    ListParticipantComponent,
    UpdateParticipantComponent,
    UpdateSessionComponent,
    ListOrganismeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
