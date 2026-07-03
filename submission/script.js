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