import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from 'selenium-webdriver';
import { Organisme } from '../model/organisme';
import { Participant } from '../model/participant';
import { Pays } from '../model/pays';
import { Profil } from '../model/profil';
import { OrganismeService } from '../service/organisme.service';
import { ParticipantService } from '../service/participant.service';
import { PaysService } from '../service/pays.service';
import { ProfilService } from '../service/profil.service';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  organismes:Organisme[];
  organisme :Organisme;
  participant: any={};
  submitted = false;
  profils:Profil[];
  profil :Profil;
  payss:Pays[];
  pays :Pays;
  sessions:Session[];
  session:Session;

  myForm: any;
  
  selectedItems:string[];
  
  constructor(private participantService: ParticipantService,  private sessionservice:SessionService,
    private ProfilService:ProfilService,private PaysService:PaysService,private OrganismeService:OrganismeService, private router: Router) { }

  ngOnInit(): void {
    
    this.participant = new Participant(); 
    this.OrganismeService.getOrganismesList().subscribe(
      data => {
        console.log(data);
        this.organismes = data;
      },
      error => console.log(error)
      );
    
      
      this.ProfilService.getProfilsList().subscribe(
        data => {
          console.log(data);
          this.profils = data;
        },
        error => console.log(error)
        );

        this.PaysService.getPaysList().subscribe(
          data => {
            console.log(data);
            this.payss = data;
          },
          error => console.log(error)
          );
    
    
          this.sessionservice.getSessionsList().subscribe(
            data => {
              console.log(data);
              this.sessions = data;
            },
            error => console.log(error)
            );
      
            this.selectedItems= new Array<string>();
        }
      
        newParticipant(): void {
          this.submitted = false;
          this.participant= new Participant();
        }
    
  

 

    save() {
      this.participant.sessions = this.selectedItems;
      console.log( this.participant.sessions);
      this.participantService.createParticipant(this.participant).subscribe(data => {
        //console.log(data)
        
        this.participant = new Participant();
        this.gotoList();
      },
      error => console.log(error));
  
      
    }
    


  onSubmit() {
    this.submitted = true;
    this.save();
  }


  gotoList() {
    this.router.navigate(['/participants']);
  }

  onClick(id:number)
  {
   console.log(id);
 
    this.participantService.getParticipant(id).subscribe(
      data => {
        console.log(data);
        this.participant = data;
      
       
      },
      error => console.log(error)
      );
  }


  getSessionId(e:any,id:any) {

    if(e.target.checked)
    {
      console.log(id +'checked');
      this.selectedItems.push(id);
    }
    else 
    {
      console.log(id +'Unchecked');
    }

    console.log(this.selectedItems);
   

}
}
