import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';
import { FormateurService } from '../service/formateur.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {

  formateurs: any;
  closeResult = '';
  id:any;
  formateur:any;

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;


  constructor(private formateurService: FormateurService,
    private router: Router,private modalService: NgbModal,private tokenStorageService: TokenStorageService) { 
     
    }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      console.log(this.roles);
     // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
     if(this.roles[0]=='ROLE_USER'){

      this.reloadData(); 
    }
       
    }
   

    
  }

  reloadData() {
    this.formateurs = this.formateurService.getFormateursList();
    }

    deleteFormateur(id: number) {
      this.formateurService.deleteFormateur(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  formateurDetails(id: number){ 
    this.router.navigate(['formateur',id]);
    }
  updateFormateur(id: number){
      this.router.navigate(['updateformateur', id]);
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
        this.deleteFormateur(id);
        Swal.fire(
          'Supprimé!',
          'formateur est supprimé avec succes.',
          'success'
        )
      }
    });
  }

  open(content,id:number) {
    console.log(id);
    this.modalService.open(content,
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result)  => {
      this.closeResult = `Closed with: ${result}`;
    
      
    }, (reason) => {
      this.closeResult = 
         `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.formateurService.getFormateur(id)
    .subscribe(data => {
      console.log(data);
      this.formateur = data;
    }, error => console.log(error));
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

