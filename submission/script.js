const services = [

{
name:"Interpretation",
description:"Professional real-time translation services for international conferences, summits, workshops and corporate meetings."
},

{
name:"Conference Logistics",
description:"Planning assistance and technical management for multilinguall conferences."
},

{
name:"Equipment Hire",
description:"Soundproof booths, microphones, headphones and conference equipment."
},

{
name:"Certified Interpreters",
description:"Highly experienced interpreters covering English, French, Arabic, Spanish, Chinese and many more languages."
}

];
const servicesContainer = document.getElementById("services-container");
services.forEach(function(service){

const card = document.createElement("div");

card.classList.add("card");

card.innerHTML = `
<h3>${service.name}</h3>
<p>${service.description}</p>
`;

servicesContainer.appendChild(card);

});
const input=document.getElementById("serviceInput");

const button=document.getElementById("addButton");

const list=document.getElementById("serviceList");
button.addEventListener("click",function(){

const text=input.value.trim();

if(text===""){

alert("Please enter a service.");

return;

}

const li=document.createElement("li");

li.textContent=text;

const remove=document.createElement("button");

remove.textContent="Remove";

remove.addEventListener("click",function(){

li.remove();

});

li.appendChild(remove);

list.appendChild(li);

input.value="";

});
const form=document.getElementById("contactForm");

const feedback=document.getElementById("feedback");
form.addEventListener("submit",function(event){

event.preventDefault();

const name=document.getElementById("name").value;

const email=document.getElementById("email").value;

const message=document.getElementById("message").value;

if(name===""||email===""||message===""){

feedback.textContent="Please fill in all fields.";

}

else{

feedback.textContent="Thank you! We will contact you shortly.";

}

});
const nameInput=document.getElementById("name");

const savedName=localStorage.getItem("username");

if(savedName){

nameInput.value=savedName;

}

nameInput.addEventListener("input",function(){

localStorage.setItem("username",nameInput.value);

});