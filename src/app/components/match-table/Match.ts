import { Team } from "./Team";
export interface Match{
    ids:number;
    team1:Team;
    team2:Team;
    goal_1:string;
    goal_2:string;
    status:string;
    date:string;

}