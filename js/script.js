const cardContainer = document.querySelector(".team-container");
const addBtn = document.getElementById("addMemberButton");

const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        imgSrc: "img/wayne-barnett-founder-ceo.jpg",
        imgAlt: "Wayne Barnett"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        imgSrc: "img/angela-caroll-chief-editor.jpg",
        imgAlt: "Angela Caroll"
    },

    {
        name: "Walter Gordon",
        role: "Office Manager",
        imgSrc: "img/walter-gordon-office-manager.jpg",
        imgAlt: "Walter Gordon"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        imgSrc: "img/angela-lopez-social-media-manager.jpg",
        imgAlt: "Angela Lopez"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        imgSrc: "img/scott-estrada-developer.jpg",
        imgAlt: "Scott Estrada"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        imgSrc: "img/barbara-ramos-graphic-designer.jpg",
        imgAlt: "Barbara Ramos"
    }
]



for (let i = 0; i < team.length; i++) {
    
    let currentMember = team[i];
    //console.log(currentMember);
    createCard(currentMember);
   

}




addBtn.addEventListener("click", function(){
    let member = {};

    member.name = document.getElementById("name").value;
    member.role = document.getElementById("role").value;

    let imageSource = document.getElementById("image").value

    member.imgSrc = imagePath(imageSource);
    member.imgAlt = member.name;

    console.log(member);
    
    createCard(member);

    //resetto valori dopo aver inserito il nuovo membro
    document.getElementById("name").value = "";
    document.getElementById("role").value = "";
    document.getElementById("image").value = "";
})



/***************************************************/
/* FUNCTIONS */
/***************************************************/

/**
 * Crea la card del membro dello staff 
 * 
 * @param {object} currentMember - oggetto con poriet?? name, imgSrc, imgAlt e role
 */
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



/**
 * Restituisce il percorso dell'immagine scritto nel form, distinguendo i casi da percorso interno o esterno
 * @param {string} src - percorso del file
 * @returns 
 */
function imagePath(src) {
    if (!src.startsWith("http")){
        return `img/${src}`;
    } else {
        return src
    }
}