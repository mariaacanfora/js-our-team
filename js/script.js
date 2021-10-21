const cardContainer = document.querySelector(".team-container");
const addBtn = document.getElementById("addMemberButton");

const names = ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"];
const roles = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];
const imgs = ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]


let team = [];
let member = {
    "name": "", 
    "role": "",
    "imgSrc": "",
    "imgAlt": ""
};

for (let i = 0; i < names.length; i++) {
    
    let currentMember = member;
    /* currentMember = {
        "name": `${names[i]}`,
        "role": `${roles[i]}`,
        "imgSrc" : `img/${imgs[i]}`,
        "imgAlt" : `${names[i]}`
    } */
    
    currentMember.name = `${names[i]}`;
    currentMember.role = `${roles[i]}`;
    currentMember.imgSrc = `img/${imgs[i]}`;
    currentMember.imgAlt =  `${names[i]}`;

    team.push(currentMember);
    
    createCard(currentMember);
   

}


addBtn.addEventListener("click", function(){
    member.name = document.getElementById("name").value;
    //console.log(newMemberName);
    member.role = document.getElementById("role").value;

    let imageSource = document.getElementById("image").value
    member.imgSrc = `img/${imageSource}`;
    member.imgAlt = member.name;

    console.log(member);
    
    createCard(member);

})


function createCard(currentMember){
     
    const teamCard = document.createElement("div");
    teamCard.classList.add("team-card");
    
    const cardImg = document.createElement("div");
    cardImg.classList.add("card-image");

    const photo = document.createElement("img");
    const currentSrc = currentMember.imgSrc;
    photo.src = `${currentSrc}`;

    const cardTxt = document.createElement("div");
    cardTxt.classList.add("card-text");
    cardTxt.innerHTML = `<h3>${currentMember.name}</h3>
                        <p>${currentMember.role}</p>`;
    

    cardImg.append(photo);
    teamCard.append(cardImg);
    teamCard.append(cardTxt);
    cardContainer.append(teamCard)
}