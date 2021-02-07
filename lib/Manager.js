class Manager{
  constructor(name, id, email, officeNumber, role = 'Manager'){
    this.name = name;
    this.name = id;
    this.email = email;
    this.officeNumber = officeNumber;
    this.role = role;
  }
  getRole(){
    return this.role;
  }
  getOfficeNumber(){
    return this.officeNumber;
  }
}

module.exports = Manager;