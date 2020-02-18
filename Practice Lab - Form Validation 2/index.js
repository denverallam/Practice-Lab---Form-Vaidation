    
function verifyPassword() {
    let login = document.getElementById("login").value;
    let first = document.getElementById("firstPass").value;
    let second = document.getElementById("secondPass").value;
    let gender = document.getElementById("gender").value;
    let email = document.getElementById("email").value;

    if (login != "") {
        document.getElementById("login").style.backgroundColor = "#DFF2BF";
    }
    else if (login == "") {
        document.getElementById("login").style.backgroundColor = "#FFD2D2";
    }


    if (first == "") {
        document.getElementById("firstPass").style.backgroundColor = "#FFD2D2";
    }
    else if (first != "") {
        if (first.length < 8) {
            document.getElementById("meter").innerHTML = "Fair"
        }
        else if (first.length >= 8) {
            document.getElementById("meter").innerHTML = "Strong"
        }
    }
    
    if(gender=="none"){
        document.getElementById("alert").innerHTML = "Select a Gender";
    }
    else if(gender!="none"){
        document.getElementById("alert").innerHTML = "";
    }

    
    if (second == "") {
        document.getElementById("secondPass").style.backgroundColor = "#FFD2D2";
    }
    else if (first != "" && second != "" && first == second) {
        document.getElementById("alert").innerHTML = "";
        document.getElementById("firstPass").style.backgroundColor = "#DFF2BF";
        document.getElementById("secondPass").style.backgroundColor = "#DFF2BF";
    }
    else if (first != second) {
        document.getElementById("alert").innerHTML = "Passwords are not the same";
        document.getElementById("firstPass").style.backgroundColor = "#FFD2D2";
        document.getElementById("secondPass").style.backgroundColor = "#FFD2D2";
    }

    if(email==""){
        document.getElementById("email").style.backgroundColor = "#FFD2D2";
    }
    else if(email!=""){
        document.getElementById("firstPass").style.backgroundColor = "#DFF2BF";
    }
}
