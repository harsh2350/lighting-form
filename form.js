function btn(){
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;
    let inp3 = document.getElementById("inp3").value;
    let inp4 = document.getElementById("inp4").value;
    let inp6 = document.getElementById("inp6").value;
    let inp7 = document.getElementById("inp7").value;

    localStorage.setItem("name" + inp4 , inp1);
    localStorage.setItem("email" + inp4 , inp2);
    localStorage.setItem("password" + inp4 , inp3);
    localStorage.setItem("id" + inp4 , inp4);
    localStorage.setItem("dob" + inp4 , inp6);
    localStorage.setItem("image" + inp4 , inp7);

}