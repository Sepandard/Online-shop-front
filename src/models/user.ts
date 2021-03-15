export class User {
  user_email: String;
  user_gender: Number;
  user_nickname: String;
  password: String;

  constructor(userModel?) {
      this.user_email = userModel.user_email,
      this.user_gender = userModel.user_gender
      this.user_nickname = userModel.user_nickname
      this.password = userModel.password    
  }
}
