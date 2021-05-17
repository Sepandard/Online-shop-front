export class User {
  user_email: String;
  user_gender: number;
  user_nickname: String;
  user_roleid: number;
  user_id: number;

  constructor(userModel?) {
    (this.user_email = userModel.user_email),
      (this.user_gender = userModel.user_gender);
    this.user_nickname = userModel.user_nickname;
    this.user_roleid = userModel.user_roleid;
    this.user_id = userModel.user_id;
  }
}
