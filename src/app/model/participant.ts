import { Organisme } from "./organisme";
import { Pays } from "./pays";
import { Profil } from "./profil";
import { Session } from "./session";

export class Participant {

    idParticipant : any;
    type: any;
    nom:any;
    prenom:any;
    email:any;
    tel:any;
    organisme: Organisme;
    profil:Profil;
    pays:Pays;
    sessions:Session[];
}


