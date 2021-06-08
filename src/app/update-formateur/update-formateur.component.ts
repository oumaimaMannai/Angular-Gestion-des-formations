import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from '../model/formateur';
import { Organisme } from '../model/organisme';
import { FormateurService } from '../service/formateur.service';
import { OrganismeService } from '../service/organisme.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {

  id: number;
  formateur: Formateur;
  organismes: Organisme[];
  organisme : Organisme;

  constructor(private route: ActivatedRoute,private router: Router,
    private FormateurService: FormateurService,private  OrganismeService: OrganismeService) { }

   
  
   ngOnInit() {
      this.formateur = new Formateur();
  
      this.id = this.route.snapshot.params['id'];
  
      this.FormateurService.getFormateur(this.id)
        .subscribe(data => {
          console.log(data)
          this.formateur = data;
        }, error => console.log(error));

        this.OrganismeService.getOrganismesList() 
        .subscribe(data => {
          console.log(data)
          this.organismes = data;
        }, error => console.log(error));
    }
   updateFormateur() {
      this.FormateurService.updateFormateur(this.id, this.formateur)
        .subscribe(data => {
          console.log(data);
          this.formateur = new Formateur();
          this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
      this.updateFormateur();
    }
  
    gotoList() {
      this.router.navigate(['/formateurs']);
    }

}
