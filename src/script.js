const cemailinpt = document.getElementsByClassName("emailinpt");
const csubscribeBTN = document.getElementsByClassName("subscribeBTN");

csubscribeBTN,addEventListener("click", myfunction);

function myfunction(){
    var inputEmail = document.getElementsByClassName('emailinpt').value;
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var testRe = re.test(inputEmail);
    testRe;
    if (testRe != true) {
        window.alert("Invalid Email Address. Please Reenter");
    }
    else {
        var openWindow = window.open();
        openWindow.document.write(inputEmail);
    }
}
