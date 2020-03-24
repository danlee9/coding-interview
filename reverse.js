function reverse(str) {
    if (!str || typeof str !== "string") {
        console.log("a string was not passed in");
        return false;
    }
    if (str.length < 2) {
        return str;
    }
    return str
        .split("")
        .reverse()
        .join("");
}

const reverse2 = str => [...str].reverse().join("");
