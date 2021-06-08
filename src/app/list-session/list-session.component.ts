import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Session } from 'selenium-webdriver';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Formation } from '../model/formation';



@Component({
  selector: 'app-list-session',
  templateUrl: './list-session.component.html',
  styleUrls: ['./list-session.component.css']
})
export class ListSessionComponent implements OnInit {

  closeResult = '';
  id:any;
  session:any;
  f: any=[ ];
  j:any;


  sessions: any;
  ngOnInit() {

    this.reloadData();}
  

  constructor(private sessionService: SessionService,
    private router: Router,private modalService: NgbModal) { }


    

  reloadData() {
    this.sessions = this.sessionService.getSessionsList();
    }

    deleteSession(id: number) {
      this.sessionService.deleteSession(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  sessionDetails(id: number){ 
    this.router.navigate(['session',id]);
    }
  updateSession(id: number){
      this.router.navigate(['updatesession', id]);
    }
  
    FormationSession(id:number) {
      this.sessionService.getSession(id)
        .subscribe(data => {
          console.log(data);
          this.session = data;
          console.log(this.session);
        }, error => console.log(error));
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
        this.deleteSession(id);
        Swal.fire(
          'Supprimé!',
          'session est supprimé avec succes.',
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
    this.f=[];
    
  }, (reason) => {
    this.closeResult = 
       `Dismissed ${this.getDismissReason(reason)}`;
  });
  this.sessionService.getSession(id)
  .subscribe(data => {
    console.log(data);
    this.session = data;
    console.log(this.session.formations[0].titre);
    for(this.j of this.session.formations){
     this.f.push(this.j);
     console.log(this.j); 
    }
    for(this.j of this.f ){
      console.log(this.j.titre);}

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