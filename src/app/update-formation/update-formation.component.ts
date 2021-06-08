import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domaine } from '../model/domaine';
import { Formation } from '../model/formation';
import { DomaineService } from '../service/domaine.service';
import { ListFormationService } from '../service/list-formation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id: number;
  formation: Formation;
  domaines : Domaine[];
  domaine : Domaine;

  constructor(private route: ActivatedRoute,private router: Router,
    private FormationService: ListFormationService,private  DomaineService: DomaineService) {


     }

   
  
   ngOnInit() {
      this.formation = new Formation();
  
      this.id = this.route.snapshot.params['id'];
  
      this.FormationService.getFormation(this.id)
        .subscribe(data => {
          console.log(data)
          this.formation = data;
        }, error => console.log(error));

        this.DomaineService.getDomainesList() 
        .subscribe(data => {
          console.log(data)
          this.domaines = data;
        }, error => console.log(error));
    }
   updateFormation() {
      this.FormationService.updateFormation(this.id, this.formation)
        .subscribe(data => {
          console.log(data);
          this.formation = new Formation();
          this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
      this.updateFormation();
    }
  
    gotoList() {
      this.router.navigate(['/formations']);
    }


}
