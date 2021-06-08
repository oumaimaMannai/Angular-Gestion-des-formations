import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Session } from '../model/session';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-update-session',
  templateUrl: './update-session.component.html',
  styleUrls: ['./update-session.component.css']
})
export class UpdateSessionComponent implements OnInit {

  id: number;
  sessions: Session[];
  session: Session;
 

  constructor(private route: ActivatedRoute,private router: Router,
    private sessionService: SessionService) {


     }

   
  
   ngOnInit() {
      this.session = new Session();
  
      this.id = this.route.snapshot.params['id'];
  
      this.sessionService.getSession(this.id)
        .subscribe(data => {
          console.log(data)
          this.session = data;
        }, error => console.log(error));

        this.sessionService.getSessionsList() 
        .subscribe(data => {
          console.log(data)
          this.sessions = data;
        }, error => console.log(error));
    }
   updateSession() {
      this.sessionService.updateSession(this.id, this.session)
        .subscribe(data => {
          console.log(data);
          this.session = new Session();
          this.gotoList();
        }, error => console.log(error));
    }
    onSubmit() {
      this.updateSession();
    }
  
    gotoList() {
      this.router.navigate(['/sessions']);
    }



}
