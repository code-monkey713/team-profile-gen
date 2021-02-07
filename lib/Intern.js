class Intern{
  constructor(name, id, email, school, role = 'Intern'){
    this.name = name;
    this.name = id;
    this.email = email;
    this.school = school;
    this.role = role;
  }
  getRole(){
    return this.role;
  }
  getSchool(){
    return this.school;
  }
}

module.exports = Intern;