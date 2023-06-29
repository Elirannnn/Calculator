function calc (){
    let x =parseInt(document.getElementById("X").value);
    let y =parseInt(document.getElementById("Y").value);
    let addition=x+y;
    let multy=x*y;
    document.getElementById("addition").value=addition;
    document.getElementById("multy").value=multy;
    }