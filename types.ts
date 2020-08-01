export interface postListType {
  title: string;
  zan: number;
  _id: number;
  intro: string;
  img: string;
  tags: string[];
  author: string;
  time: number;
  readtime: number;
  content: string;
  comment: number;
  juejin: string;
  csdn: string;
  views: number;
}

export interface LifeListType {
  _id: number;
  image: string;
  content: string;
  date: string;
}
