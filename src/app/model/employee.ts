import { Skill } from "./skill";
import { Certification } from "./certification";


export class Employee
{
    employee_Id:number;
    email:string;
    mobile:string;
    role:string;
    designation:string;
    username:string;
    password:string;
    status:string;
    remarks:string;



    firstname:string;
    lastname:string;
    gender:string;
    marital_Status:boolean;
    date_Of_Birth:Date;
    city:string;
    no_Of_Batches_Taguht:number;
    no_Of_Student_Placed:number;
    supervisor:number;
    

    skills:Skill[];
    certififications:Certification[];



}