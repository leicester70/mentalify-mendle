export function isNavComponent() {
    let x = window.location.href.split("/")
    if (x.includes("employee") || x.includes("corporate") || x.includes("doctor")) {
        return true
    } else return false
}

export function getRole() {
    try {
        let x = window.location.href.split("/")
        if (x.includes("employee")) { return "employee" }
        if (x.includes("corporate")) { return "corporate" }
        if (x.includes("doctor")) { return "doctor" }
    } catch (error) {
        console.log(`Helper.js, getRole() - Failed\n${error}`)
    }
}

export function capitalizeWords(str) {
    str = String(str).split(" ")
    return str.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
    });
}

export function parseRole(role) {
    switch (role) {
        case "employee":
            return "Employee"
        case "corporate":
            return "Corporate Company/Organization"
        case "doctor":
            return "Mental Health Professional"

        default:
            return "Undetermined"
    }
}

export function randomMinMax(min, max) {
    let x = Math.random() * (max - min) + min;
    return Math.round(x)
}