import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ListFormationService } from '../service/list-formation.service';




@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {

  formations: any;
  handler:any = null;

 
  ngOnInit() {

    this.reloadData(); 
    this.loadStripe();

    
  }

  makePayment(amount:any){

  var handler = (<any>window).StripeCheckout.configure({
    key: 'pk_test_51IlEWYLcqnSkHEyHWLFlfIc2XXyBtHePuh48I8qjNbS1dS8PuQRywB9UsVuxA5qAro5oA0Ptf13FnVqxbZaDWOqJ000gIykTTj',
    locale: 'auto',
    token: function (token: any) {
      // You can access the token ID with `token.id`.
      // Get the token ID to your server-side code for use.
      console.log(token)
      alert('paiement effectué avec succès');
    }
  });

  handler.open({
    name: 'paiement formation',
    description: '2 widgets',
    amount: amount * 100
  });

}
 

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51IlEWYLcqnSkHEyHWLFlfIc2XXyBtHePuh48I8qjNbS1dS8PuQRywB9UsVuxA5qAro5oA0Ptf13FnVqxbZaDWOqJ000gIykTTj',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
  

  constructor(private formationService: ListFormationService,
    private router: Router) { 

      
     
    }

 

  reloadData() {
    this.formations = this.formationService.getFormationsList();
    }

    deleteFormation(id: number) {
      this.formationService.deleteFormation(id).subscribe( data=> {
      console.log(data);
      this.reloadData(); },
      error => console.log(error)); 
  }
  
  formationDetails(id: number){ 
    this.router.navigate(['formation',id]);
    }
  updateFormation(id: number){
      this.router.navigate(['updateformation', id]);
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
        this.deleteFormation(id);
        Swal.fire(
          'Supprimé!',
          'frmationest supprimé avec succes.',
          'success'
        )
      }
    });
  }

    }



 

