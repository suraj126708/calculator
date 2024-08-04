 
var input = $("#inputBox");
var button = $("button");
var string = "";

button.on("click", function() {
    var buttonText = $(this).text();

    if (buttonText === "=") {
        string = eval(string);     // do calcualtion
        input.val(string);
    } else if (buttonText === "AC") {
        string = "";
        input.val(string);            // output the value
    } else if (buttonText === "DEL") {
        string = string.slice(0, -1);
        input.val(string);
    } else {
        string = string + buttonText;
        input.val(string);
    }
});

