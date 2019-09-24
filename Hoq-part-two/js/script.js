var eventType = prompt ("What type of event are you going to?");
if (eventType === "casual") {
    var clothes = "something comfy";
} else if (eventType === "semi-formal") {
    var clothes = "a polo";
} else if (eventType === "formal") {
    var clothes = "a suit";
} else {
    alert("You didn't answer the question.");
}
var tempFahr = prompt ("What is the temperature outside (in Fahrenheit)?");
if (tempFahr < 54) {
    var outerWear = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
    var outerWear = "a jacket";
} else if (tempFahr > 70) {
    var outerWear = "no jacket";
} else {
    alert("You didn't answer the question.");
}
var result = ("Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + clothes + " and " + outerWear + ".");

if (clothes != null && outerWear != null) {
    console.log(result);
} else {
    alert("Nevermind.")
}
