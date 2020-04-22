// JavaScript source code


function tipCalculate() {
    var amt = document.getElementById("billamt").value;

    var people = document.getElementById("noOfpeople").value;

    var serQual = document.getElementById("serviceQual").value;


    // Validate Input
    if (amt == "" || serQual == "0") {
        alert("Enter a value.")
        return;
    }


    if (people == "" || people <= 1) {
        people = 1;
        document.getElementById("each").style.display = "none";

    }

    else {
        document.getElementById("each").style.display = "block";
    }



    // Calculate Tip

    var total = (amt * serQual) / people;

    total = Math.round(total * 100) / 100;

    total = total.toFixed(2);

    document.getElementById("totaltip").style.display = "block";

    document.getElementById("tip").innerHTML = total;


}


 clearData = function(){

    document.getElementById("billamt").value = "";
    document.getElementById("serviceQual").value = "0";
     document.getElementById("noOfpeople").value = "";
     document.getElementsByClassName("tip_span")[0].innerHTML = "0.00";
     document.getElementById("each").style.display = "none";
  

}

    document.getElementById("cal").onclick = function() {
        tipCalculate();
};










