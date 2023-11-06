export interface articleDTO {
  id: number;
  category: string;
  img: string;
  heading: string;
  content: string;
  publishDate: string;
  writer: string;
}
export interface userDTO {
  id:number,
  password: string,
  email: string,
  studentCardNumber:number
  name:string,
}