// 🌐 Liste de tes projets
const projects = [
{
name: "📧 ProMail",
url: "#"
},
{
name: "📅 Nippon Core",
url: "https://baitorn.github.io/nippon-core/"
},
{
name: "🎌 Animefy",
url: "#"
},
{
name: "⏱️ Timer",
url: "#"
},
{
name: "🌸 Otaku Sphere",
url: "#"
}
];

// 📌 afficher message dans console
console.log("🌟 Baitorn Hub chargé");

// 🚀 ouvrir un site
function openProject(url){
if(url === "#"){
alert("⚠️ Projet pas encore en ligne");
return;
}
window.open(url, "_blank");
}

// 🎮 animation simple au chargement
window.onload = () => {
document.body.style.opacity = "0";
setTimeout(() => {
document.body.style.transition = "1s";
document.body.style.opacity = "1";
}, 100);
};
