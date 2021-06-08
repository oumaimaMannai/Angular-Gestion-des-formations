import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organisme } from '../model/organisme';
import { Participant } from '../model/participant';
import { Pays } from '../model/pays';
import { Profil } from '../model/profil';
import { OrganismeService } from '../service/organisme.service';
import { ParticipantService } from '../service/participant.service';
import { PaysService } from '../service/pays.service';
import { ProfilService } from '../service/profil.service';

@Component({
  selector: 'app-update-participant',
  templateUrl: './update-participant.component.html',
  styleUrls: ['./update-participant.component.css']
})
export class UpdateParticipantComponent implements OnInit {

  id: number;
  participant: Participant;
  organismes: Organisme[];
  organisme : Organisme;
  pays:Pays;
  payss:Pays[];
  profil:Profil;
  profils:Profil;

  constructor(private route: ActivatedRoute,private router: Router,
    private participantService: ParticipantService,private  OrganismeService:OrganismeService,
    private  paysService:PaysService,private  profilService:ProfilService) { }

  ngOnInit() {
    this.participant = new Participant();

    this.id = this.route.snapshot.params['id'];

    this.participantService.getParticipant(this.id)
      .subscribe(data => {
        console.log(data)
        this.participant = data;
      }, error => console.log(error));

      this.OrganismeService.getOrganismesList() 
      .subscribe(data => {
        console.log(data)
        this.organismes = data;
      }, error => console.log(error));

      
      this.profilService.getProfilsList().subscribe(
        data => {
          console.log(data);
          this.profils = data;
        },
        error => console.log(error)
        );

        this.paysService.getPaysList().subscribe(
          data => {
            console.log(data);
            this.payss = data;
          },
          error => console.log(error)
          );
  }


 updateParticipant() {
    this.participantService.updateParticipant(this.id, this.participant)
      .subscribe(data => {
        console.log(data);
        this.participant = new Participant();
        this.gotoList();
      }, error => console.log(error));
  }
  onSubmit() {
    this.updateParticipant();
  }

  gotoList() {
    this.router.navigate(['/participants']);
  }
}
