
function login(){
 const pass=document.getElementById('password').value;
 if(pass==='0310'){window.location='home.html';}
 else{
  document.getElementById('msg').innerText='كلمة المرور غير صحيحة ❤️';
 }
}
const d=document.getElementById('days');
if(d){
 const start=new Date('2025-10-03');
 const now=new Date();
 const diff=Math.floor((now-start)/(1000*60*60*24));
 d.innerText='مر على حبنا '+diff+' يوم ❤️';
}
