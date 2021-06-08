import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { ParticipantService } from '../service/participant.service';

@Component({
  selector: 'app-list-participant',
  templateUrl: './list-participant.component.html',
  styleUrls: ['./list-participant.component.css']
})
export class ListParticipantComponent implements OnInit {

  closeResult = '';
  id:any;
  participant:any;
  f: any=[ ];
  j:any;


  participants: any;
  ngOnInit() {

    this.reloadData();}
  

  constructor(private participantService: ParticipantService,
    private router: Router,private modalService: NgbModal) { }


    

  reloadData() {
    this.participants = this.participantService.getParticipantsList();
    }

    deleteParticipant(id: number) {
      this.participantService.deleteParticipant(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  participantDetails(id: number){ 
    this.router.navigate(['participant',id]);
    }
  updateParticipant(id: number){
      this.router.navigate(['updateparticipant', id]);
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
        this.deleteParticipant(id);
        Swal.fire(
          'Supprimé!',
          'participant est supprimé avec succes.',
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
  this.participantService.getParticipant(id)
  .subscribe(data => {
    console.log(data);
    this.participant = data;
    console.log(this.participant.sessions[0].nom);
    for(this.j of this.participant.sessions){
     this.f.push(this.j);
     console.log(this.j); 
    }
    for(this.j of this.f ){
      console.log(this.j.nom);}

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
