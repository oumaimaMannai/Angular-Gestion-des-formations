import { Formateur } from "./formateur";
import { Formation } from "./formation";

export class Session {
     idSession:any;

     lieu:any;
	 dateDebut:any;
	 dateFin:any;
     nbParticipant:any;
	 nom:any;
     formateur:Formateur;
     formations:Formation[];
}
