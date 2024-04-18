import { Club } from "./club";

export interface Rank {
    class:number;
    club:Club;
    W:string;
    D:string;
    L:string;
    poin:string;
    lasts:string[];
}
