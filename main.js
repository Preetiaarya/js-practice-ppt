const str = "I    Love               Dogs"
let newStr = "";
for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
        newStr = newStr + str[i]

    } else if (str[i - 1] != " ") {
        newStr = newStr + " "
    }

}
console.log(newStr);
