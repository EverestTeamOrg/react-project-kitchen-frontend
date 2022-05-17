export type THomeProps = {
  currentUser: {
    token: string;
    username: string;
  };
  onLoad: boolean;
  onUnload: boolean;
  
  pager: {
    length: number;
    name: string;
  };
  articles: Array<any>;
 
}