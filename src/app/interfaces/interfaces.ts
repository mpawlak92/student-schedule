export interface articleType {
  id: number;
  category: string;
  img: string;
  heading: string;
  content: string;
  publishDate: string;
  writer: string;
}

export interface classesType {
  startTime: string;
  endTime: string;
  title: string;
  lecturer: string;
  place: string;
}

export interface userType {
  id:number,
  password: string,
  email: string,
  studentCardNumber:number
  name:string,
}

export interface scheduleType {
  date: string;
  classes: {
    startTime: string;
    endTime: string;
    title: string;
    lecturer: string;
    place: string;
  }[];
}