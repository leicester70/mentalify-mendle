export function capitalizeWords(str) {
    str = String(str).split(" ")
    return str.map(element => {
        return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
    });
}