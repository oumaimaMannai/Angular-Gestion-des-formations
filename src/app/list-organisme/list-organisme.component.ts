import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { OrganismeService } from '../service/organisme.service';
import { Router } from '@angular/router';
import { Organisme } from '../model/organisme';

@Component({
  selector: 'app-list-organisme',
  templateUrl: './list-organisme.component.html',
  styleUrls: ['./list-organisme.component.css']
})
export class ListOrganismeComponent implements OnInit {

  closeResult = '';
  id:any;
  submitted=false;
  organisme:any;
  //isSuccessful = false;
  //isSignUpFailed = false;
organismes:any;
  //form: any = {};
 // errorMessage = '';
 
  ngOnInit() {
    this.organisme=new Organisme();

    this.reloadData();}
  

  constructor(private organismeService: OrganismeService,
    private router: Router,private modalService: NgbModal) { }


    

  reloadData() {
    this.organismes = this.organismeService.getOrganismesList();
    }

    deleteOrganisme(id: number) {
      this.organismeService.deleteOrganisme(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  organismeDetails(id: number){ 
    this.router.navigate(['organisme',id]);
    }

  
    updateOrganisme(id: number){
      this.router.navigate(['updateorganisme', id]);
      console.log(id);
    }

    onCreate(id:number){

      Swal.fire({
      title: "Vous êtes sure?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer!',
      cancelButtonText:'Annuler'
    
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteOrganisme(id);
        Swal.fire(
          'Supprimé!',
          'organisme est supprimé avec succes.',
          'success'
        )
      }
    });
  }
  newOrganisme(): void {
    this.submitted = false;
    this.organisme = new Organisme();
    
  }

  save() {
    this.organismeService.createOrganisme(this.organisme).subscribe(data => {
      console.log(data)
      this.organisme = new Organisme();
    },
    error => console.log(error));
  }
  






onSubmit() {

  this.submitted = true;
   this.save();
   this.reloadPage();
   
}
 
reloadPage() {
  window.location.reload();
}

gotoList() {
  this.router.navigate(['/organismes']);
}



open(content) {
  this.modalService.open(content,
 {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
    this.closeResult = `Closed with: ${result}`;
    
  }, (reason) => {
    this.closeResult = 
       `Dismissed ${this.getDismissReason(reason)}`;
  });
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
