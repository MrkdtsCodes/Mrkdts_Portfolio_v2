let projectCons = document.getElementById("projectcontainer");

let techlanguageContainer = document.getElementById("techlanguageContainer");

const darkmode_button = document.getElementById('darkmode_button');


darkmode_button.addEventListener('click', toogledarkmode);

const projectData = [
  {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },

  {
    title: "Google",
    snapshot: "",
    description:
      " A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    techstack: ["HTML", "CSS", "JavaScript", "React"],
  },
];

console.log(projectData[0]);

const techStacklanguage = [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "TailwindCSS",
      "Bootstrap",
      "Jquery",


    ],
  },

  {
    category: "Backend",
    technologies: [
      "PHP",
      "CodeIgniter v3",
      "Javascript",
      "Ajax",

    ],
  },

  {
    category: "Database",
    technologies: ["MySQL",],
  },

  {
    category: "Tools",
    technologies: ["Figma", "Git", "Github", "Linux", "Postman", "Netlify"],
  },
];

function createTechStacks(techslang) {
  const stackspans = techslang.technologies
    .map((langs) => `<span>${langs}</span>`)
    .join("");

  return `
        <div class="techtitle">
             ${techslang.category}  
         </div>

         <div class="technologies">
              ${stackspans}              
         </div>
  `;
}

function createProjectCard(project) {
  const techSpans = project.techstack
    .map((tech) => `<span>${tech}</span>`)
    .join("");

  return `
    <div class="project">
            <div class="projectSnapshot" style="background-image: url('${project.snapshot}')">

            </div>

            <div class="projectDescription">
                <div class="projecttitle">
                    ${project.title}
                 </div>

                  <div class="projectDesc">
                        <article>
                            ${project.description}
                        </article>
                     </div>

                     <div class="projectTeckstack">
                        ${techSpans}
                    </div>
                 </div>            
        </div>`;
}

projectData.forEach((project) => {
  projectCons.innerHTML += createProjectCard(project);
});

techStacklanguage.forEach((techslang) => {
  techlanguageContainer.innerHTML += createTechStacks(techslang);
});

// const CertValues = [
//   {
//     images:
//       "./assets/Certifications_folder/Certificate - ABC - Mark  Andrie Datus.jpg",
//     certName: "Anti-Bribery and Corruption Policy",
//     certplace: "@lhoopa",
//   },
//   {
//     images: "./assets/Certifications_folder/spes_cert.jpg",
//     certName: "Spes Acknowledgement Certificate",
//     certplace: "@Pasig City Hall Office",
//   },
//   {
//     images: "./assets/Certifications_folder/Alibaba.png",
//     certName: "Alibaba Masterclass",
//     certplace: "@Pamantasan ng Lungsod ng Pasig",
//   },
//   {
//     images: "./assets/Certifications_folder/day 2.png",
//     certName: "She++ Project Management and CyberSecurity",
//     certplace: "@Pamantasan ng Lungsod ng Pasig",
//   },
//   {
//     images: "./assets/Certifications_folder/designthingking.png",
//     certName: "Shee++ Design Thinking",
//     certplace: "@Pamantasan ng Lungsod ng Pasig",
//   },
//   {
//     images: "./assets/Certifications_folder/leadership.png",
//     certName: "Shee++ leadership",
//     certplace: "@Pamantasan ng Lungsod ng Pasig",
//   },
// ];

// function CreateCard(values) {
//   const container = document.getElementById("group");

//   for (let i = 0; i < values.length; i++) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     //main conatiner ng isang card

//     const imageCard = document.createElement("div");
//     imageCard.classList.add("imageCard");

//     const nameCard = document.createElement("div");
//     nameCard.classList.add("nameCard");

//     const certificateName = document.createElement("div");
//     certificateName.classList.add("certificateName");

//     const certificate_place = document.createElement("div");
//     certificate_place.classList.add("Certificate_place");

//     imageCard.innerHTML = `<img src="${values[i].images}" alt="${values[i].certName}">`;
//     certificateName.textContent = values[i].certName;
//     certificate_place.textContent = values[i].certplace;

//     nameCard.append(certificateName, certificate_place);

//     card.append(imageCard, nameCard);

//     container.append(card);
//   }
// }

// const infiniteValues = [...CertValues, ...CertValues]; //spread

// CreateCard(infiniteValues);

let isdarkmode = false;
    // console.log("this is the current " + isdarkmode);

function toogledarkmode(){
    //change picture
   let svg =  document.getElementById('drkbtn');
    if(isdarkmode == false){
      isdarkmode = true;
      light_bg_img.src = "./assets/excited.jpeg";

    }else if(isdarkmode == true){
       isdarkmode = false;
       light_bg_img.src = "./assets/Toga_picture.jpeg";

    }

    //darkmode
    document.body.classList.toggle('darkmode');
    document.getElementById('light_bg_img').classList.toggle('rotated');
    


}

