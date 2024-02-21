
export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
 
  interface User {
    avatar: string;
    name: string;
    facebook: string;
    phone: string;
    email: boolean;
    dateAttended: string;
    yearOfBirth: number;

  }

  interface Department{
    branch:string;
    block?:string;
    room:string;
    group?:string;
  }
  
}
