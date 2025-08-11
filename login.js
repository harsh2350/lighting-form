function btn(){

    for (let index = 1; index <= 3; index++) {
        
        
    
    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    let email = localStorage.getItem("email" + index);
    let password = localStorage.getItem("password" + index);
    let id = localStorage.getItem("id" + index);
    console.log(id);

    if(inp1 == email  && inp2 == password ){

        
    let str ="?id=" + id;


    window.location.assign("profile.html" + str);
    
    
}


console.log(email);
console.log(password);

}



}

