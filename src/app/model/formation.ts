import { Session } from "selenium-webdriver";
import { Domaine } from "./domaine";

export class Formation {
    id: any;
    titre: any;
    type_formation: any;
    budget: any;
    nb_session: any;
    duree: any;
    domaine:Domaine;
    session:Session[];
}
