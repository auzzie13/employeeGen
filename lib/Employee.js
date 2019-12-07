class Employee {
    
    constructor (id, name, title) {
        this.id = id,
        this.name = name,
        this.title = title
    }

getId() {
    return this.id
}
getName() {
    return this.name
}
getEmail() {
    return this.email
}
getRole() {
    return "employee"
}
}

module.exports = Employee;