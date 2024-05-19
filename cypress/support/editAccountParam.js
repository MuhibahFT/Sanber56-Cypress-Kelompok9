class editAccountParam{
    email='#firstname';
    newEmail='#lastname';
    password = '#password';

    constructor() {
        this.email = '';
        this.newEmail = '';
        this.password = '';
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