 //Scope
 var a = 12;
 const b = 33;
 let c = 44;
 var d = 50;

 document.write(`<p>a = ${a}</p>`);
 document.write(`<p>b = ${b}</p>`);
 document.write(`<p>c = ${c}</p>`);
 document.write(`<p>d = ${d}</p><hr>`);

 if (d>20){
     //Block

     document.write(`<p>a = ${a}</p>`);
     document.write(`<p>b = ${b}</p>`);
 document.write(`<p>c = ${c}</p>`);
 document.write(`<p>d = ${d}</p><hr>`);

 var x = 100;
 let y = 200;
 const z = 300;

 document.write(`<p>x = ${x}</p>`);
     document.write(`<p>y = ${y}</p>`);
 document.write(`<p>z = ${z}</p><hr>`);

 }
 document.write(`<p>x = ${x}</p>`);  //We get x value bcoz "var" keyword is considered as global inspite if u give anywhere in the code
   //  document.write(`<p>y = ${y}</p>`);
 //document.write(`<p>z = ${z}</p>`);

 var isAdmin = false;
 document.write(`<p>isAdmin = ${typeof(isAdmin)}</p>`);
 document.write(`<p>isAdmin = ${isAdmin}</p>`);

 var title = "Welcome to JavaScript";
 document.write(`<p>isAdmin = ${typeof(title)}</p>`);
 document.write(`<p>isAdmin = ${title}</p>`);

 var xx = 1233;
 document.write(`<p>isAdmin = ${typeof(xx)}</p>`);
 document.write(`<p>isAdmin = ${xx}</p>`);

 var yy = 34.544;
 document.write(`<p>isAdmin = ${typeof(yy)}</p>`);
 document.write(`<p>isAdmin = ${yy}</p>`);

 //ARRAY
 var colors = ['orange', 'blue', 'green', 'yellow', 100,true,500.5]
 document.write(`<p>isAdmin = ${typeof(colors)}</p>`);
 document.write(`<p>isAdmin = ${colors}</p>`);

 //OBJECT
 var user =  {
     //Key : Value => property
     name : "NM SIDDHARTH",
     email : "siddharthnm07@gmail.com"

 };
 document.write(`<p>isAdmin = ${typeof(user)}</p>`);
 document.write(`<p>isAdmin = ${user.name}</p>`);

 //function block = Behaviours

 function defaultFun()   // Function Declaration
 {
     document.write(`<p> This is DEFAULT FUNCTION.</p>`);
 }
 defaultFun();  // Function Calling

 // function name (parameter)

 function parameterFun(name,email)
 {
     document.write(`<p> This is PARAMETERIZED  FUNCTION.</p>`);
     document.write(`<p> First Parameter is :${name}</p>`);
     document.write(`<p> Second Parameter is :${email}</p>`);
 }
 parameterFun("SID", "admin@gmail.com");