import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domaine } from '../model/domaine';
import { Formation } from '../model/formation';
import { DomaineService } from '../service/domaine.service';
import { ListFormationService } from '../service/list-formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  domaine : Domaine;
  domaines: Domaine[];
  formation: any={};
  submitted = false;
  

  constructor(private formationService: ListFormationService,private domaineService:DomaineService, private router: Router) { }

  ngOnInit(): void {
    
    this.formation = new Formation(); // instancier l'objet rdv;
    this.domaineService.getDomainesList().subscribe(
      data => {
        console.log(data);
        this.domaines = data;
      },
      error => console.log(error)
      );}


 


  newFormation(): void {
    this.submitted = false;
    this.formation = new Formation();
    
  }

  save() {
    this.formationService.createFormation(this.formation).subscribe(data => {
      console.log(data)
      this.formation = new Formation();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/formations']);
  }


}



