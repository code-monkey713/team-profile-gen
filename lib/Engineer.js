class Enginner{
  constructor(name, id, email, github, role = 'Engineer'){
    this.name = name;
    this.name = id;
    this.email = email;
    this.github = github;
    this.role = role;
  }
  getRole(){
    return this.role;
  }
  getGithub(){
    return this.github;
  }
}

module.exports = Enginner;