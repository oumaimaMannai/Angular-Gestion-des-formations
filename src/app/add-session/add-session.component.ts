import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../model/session';
import { Formateur } from '../model/formateur';
import { FormateurService } from '../service/formateur.service';
import { SessionService } from '../service/session.service';
import { ListFormationService } from '../service/list-formation.service';
import { Formation } from '../model/formation';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  formateur : Formateur;
  formateurs : Formateur[];
  session:any;
  formations:Formation[];
  formation:Formation;

  myForm: any;
  
  selectedItems:string[];
  submitted = false;
  

  constructor(private sessionService: SessionService,private formateurService:FormateurService,private formationService:ListFormationService, private router: Router) { }

  ngOnInit(): void {
    
    this.session= new Session(); // instancier l'objet rdv;
    this.formateurService.getFormateursList().subscribe(
      data => {
        console.log(data);
        this.formateurs = data;
      },
      error => console.log(error)
      );



      this.formationService.getFormationsList().subscribe(
        data => {
          console.log(data);
          this.formations = data;
        },
        error => console.log(error)
        );
  
        this.selectedItems= new Array<string>();
    }
  
    newSession(): void {
      this.submitted = false;
      this.session = new Session();
    }
    
    save() {
      this.session.formations = this.selectedItems;
      console.log(this.session.formations);
      this.sessionService.createSession(this.session).subscribe(data => {
        //console.log(data)
        
        this.session = new Session();
        this.gotoList();
      },
      error => console.log(error));
  
      
    }
    


  onSubmit() {
    this.submitted = true;
    this.save();
  }


  gotoList() {
    this.router.navigate(['/sessions']);
  }

  onClick(id:number)
  {
   console.log(id);
 
    this.formationService.getFormation(id).subscribe(
      data => {
        console.log(data);
        this.formation = data;
      
       
      },
      error => console.log(error)
      );
  }

  getFormationId(e:any,id:any) {

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