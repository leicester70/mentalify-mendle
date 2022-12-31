// Import Data
import employeesJson from "../data/employees.json"

// Get Session Data
let data = JSON.parse(window.sessionStorage.getItem("data"))

// General
export function getAvatarNumber() {
    let avatarNumber = data.avatarNumber
    // console.log(`Data Helper: getAvatarNumber() returned,\n${avatarNumber}`)
    return avatarNumber
}

// Employees
export function getEmployeeData(x) {
    if (!!x) { return employeesJson[x] }
    let employee = employeesJson[data.employeeNumber]
    // console.log(`Data Helper: getEmployeeData() returned,\n${employee}`)
    return employee
}