import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../model/formateur';
import { Organisme } from '../model/organisme';
import { FormateurService } from '../service/formateur.service';
import { OrganismeService } from '../service/organisme.service';



@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css']
})
export class AddFormateurComponent implements OnInit {
  

  organismes:Organisme[];
  formateur: any={};
  submitted = false;
  organisme: Organisme;

  constructor(private formateurService: FormateurService,private OrganismeService:OrganismeService, private router: Router) { }

  ngOnInit(): void {


    this.formateur = new Formateur(); // instancier l'objet rdv;
    this.OrganismeService.getOrganismesList().subscribe(
      data => {
        console.log(data);
        this.organismes = data;
      },
      error => console.log(error)
    );
   
    
  }



  newFormateur(): void {
    this.submitted = false;
    this.formateur = new Formateur();
    
  }

  save() {
    this.formateurService.createFormateur(this.formateur).subscribe(data => {
      console.log(data)
      this.formateur = new Formateur();
      this.gotoList();
    },
    error => console.log(error));
  }
  

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/formateurs']);
  }
 
}


