function alertFunction(name) {
    alert("YAY! YOU DID IT!" + name);
}
const element = document.querySelector("#myBtn");
element.addEventListener("onclick", alertFunction("bob"));