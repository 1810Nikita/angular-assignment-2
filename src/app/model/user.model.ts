//model 
export class Emp{
    empid !: number;
    name !: string;
    contact !: string;
    email !: string;
    skills!: {skill: string; experience: string}[];
    gender!: string;
   
}