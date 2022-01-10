export enum POST_TYPES{
  NORMAL = "NORMAL",
  EVENT = "EVENT"
}

export class Post {
  constructor(
  private userId: string,
  private id: string,
  private photo: string,
  private description: string
  ){}
  public getId(){
    return this.id;
  }
  public getUserId(){
    return this.userId;
  }
  public getPhoto(){
    return this.photo;
  }
  public getDescription(){
    return this.description;
  }

}