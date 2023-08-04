const hamburger  = document.querySelector(".hamburger");
const mobileul  = document.querySelector(".mobileul");
hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    mobileul.classList.toggle("active");
})
document.querySelectorAll(".mobileul").forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    mobileul.classList.remove("active");
}));
// function sendMail(){
//     var email = {
//         name:document.getElementById("Name").value ,
//         email:document.getElementById("Email").value,
//         message:document.getElementById("message").value
//     };
//     const serviceID ="service_cop2vwa";
//     const templateID ="template_y5imd69"

//     emailjs.send(serviceID,templateID,email)
//   .then(
//     res =>{
//         document.getElementById("Name").value ="";
//         document.getElementById("Email").value ="";
//         document.getElementById("message").value ="";
//         console.log(res);
//         alert("Your message is sent successfully");
        
//     })
//     .catch((err) => console.log(err));
// }


