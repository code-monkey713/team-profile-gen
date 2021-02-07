const Employee = require('./Employee');
class Enginner extends Employee{
  constructor(name, id, email, github){
    super(name, id, email);
    // this.name = name;
    // this.name = id;
    // this.email = email;
    this.github = github;
    this.role = 'Engineer';
  }
  getRole(){
    return this.role;
  }
  getGithub(){
    return this.github;
  }
}

module.exports = Enginner;