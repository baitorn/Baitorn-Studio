let date = new Date();
let selectedDay = null;

// 🔥 charger les événements sauvegardés
let events = JSON.parse(localStorage.getItem("events")) || {};

// 💾 sauvegarde
function saveToStorage(){
localStorage.setItem("events", JSON.stringify(events));
}

// 📅 afficher calendrier
function renderCalendar(){

const calendar = document.getElementById("calendar");
const title = document.getElementById("monthTitle");

calendar.innerHTML = "";

let year = date.getFullYear();
let month = date.getMonth();

let firstDay = new Date(year, month, 1).getDay();
let daysInMonth = new Date(year, month + 1, 0).getDate();

let months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];

title.innerText = months[month] + " " + year;

// espaces vides avant début du mois
for(let i = 0; i < firstDay; i++){
calendar.innerHTML += `<div></div>`;
}

// jours
for(let d = 1; d <= daysInMonth; d++){

let key = `${year}-${month}-${d}`;
let eventText = events[key] ? `<br><small>📌 ${events[key]}</small>` : "";

calendar.innerHTML += `
<div class="day" onclick="openPopup(${d})">
${d}
${eventText}
</div>
`;
}
}

// ➡️ changer de mois
function changeMonth(step){
date.setMonth(date.getMonth() + step);
renderCalendar();
}

// 📌 ouvrir popup
function openPopup(day){
selectedDay = day;
document.getElementById("popup").style.display = "flex";

// remplir si déjà un événement
let key = `${date.getFullYear()}-${date.getMonth()}-${day}`;
document.getElementById("eventText").value = events[key] || "";
}

// ❌ fermer popup
function closePopup(){
document.getElementById("popup").style.display = "none";
}

// ✔️ ajouter / modifier événement
function saveEvent(){

let text = document.getElementById("eventText").value;
let key = `${date.getFullYear()}-${date.getMonth()}-${selectedDay}`;

if(text.trim() !== ""){
events[key] = text; // ajouter ou modifier
} else {
delete events[key]; // si vide = supprimer
}

saveToStorage();
closePopup();
renderCalendar();
}

// 🗑 supprimer événement
function deleteEvent(){

let key = `${date.getFullYear()}-${date.getMonth()}-${selectedDay}`;

delete events[key];

saveToStorage();

document.getElementById("eventText").value = "";
closePopup();
renderCalendar();
}

// 🚀 lancer calendrier
renderCalendar();
