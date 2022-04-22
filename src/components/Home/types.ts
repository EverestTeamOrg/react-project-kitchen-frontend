export type THomeProps = {
  currentUser: {
    token: string;
    username: string;
  };
  onLoad: any;
  onUnload: any;
  
  pager: {
    length: number;
    name: string;
  };
  articles: Array<any>;
 
}