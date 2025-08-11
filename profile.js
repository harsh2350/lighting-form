 let demo1 = document.getElementById("demo1");
 let demo2 = document.getElementById("demo2");
 let demo4 = document.getElementById("demo4");
 let demo5 = document.getElementById("demo5");
 let demo3 = document.getElementById("demo3");
 let photo = document.getElementById("photo");
 let header = document.getElementById("header");
 
let tophead = document.createElement("p");




 let y = window.location.search
 console.log(y);

  let sl = y.slice(4,5);
  console.log(sl);

  let val1 = localStorage.getItem("id" + sl);
  let val2 = localStorage.getItem("name"+ sl);
  let val4 = localStorage.getItem("password"+ sl);
  let val5 = localStorage.getItem("dob"+ sl);
  let val3 = localStorage.getItem("email"+ sl);
  let val6 = localStorage.getItem("image"+ sl);
console.log(val1);
console.log(val2);
console.log(val4);
console.log(val5);
console.log(val3);
console.log(val6);

demo1.innerHTML = "Id =" + val1;
demo2.innerHTML = "Name = " + val2;
demo4.innerHTML = "Password = " + val4;
demo5.innerHTML = "Dob = " + val5;
demo3.innerHTML = "Email = " + val3;





let img = document.createElement("img");
img.setAttribute("id","photo-img");
img.setAttribute("src",val6);

photo.appendChild(img);



