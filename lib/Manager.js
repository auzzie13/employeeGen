const Employee = require('./Employee');

class Manager extends Employee {

    constructor(id, name, email, officeNum) {
        super(id, name, email, );
        this.officeNum = officeNum;       
    }

getRole() {
    return "Manager"; //override to return Manager
}

getOfficeNum() {
    return this.officeNum;
}
}

module.exports = Manager;