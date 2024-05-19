class editAccountParam{
    email='#firstname';
    newEmail='#lastname';
    password = '#password';

    constructor(email,newEmail,password) {
        this.email = email;
        this.newEmail = newEmail;
        this.password = password;
      }
    
      setEmail(email) {
        this.email = email;
      }
    
      setNewEmail(newEmail) {
        this.newEmail = newEmail;
      }
    
      setPassword(password) {
        this.password = password;
      }

      getEmail() {
        return this.email;
      }
    
      getNewEmail() {
        return this.newEmail;
      }
    
      getPassword() {
        return this.password;
      }
}



export default editAccountParam;