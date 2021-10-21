const cardContainer = document.querySelector(".team-container");

const names = ["Wayne Barnett", "Angela Caroll", "Walter Gordon", "Angela Lopez", "Scott Estrada", "Barbara Ramos"];
const roles = ["Founder & CEO", "Chief Editor", "Office Manager", "Social Media Manager", "Developer", "Graphic Designer"];
const imgs = ["wayne-barnett-founder-ceo.jpg", "angela-caroll-chief-editor.jpg", "walter-gordon-office-manager.jpg", "angela-lopez-social-media-manager.jpg", "scott-estrada-developer.jpg", "barbara-ramos-graphic-designer.jpg"]


let team = [];
for (let i = 0; i < names.length; i++) {
    
    const currentMember = {
        "name": `${names[i]}`,
        "role": `${roles[i]}`,
        "imgSrc" : `img/${imgs[i]}`,
        "imgAlt" : `${names[i]}`
    }
    
    team.push(currentMember);
    
    
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