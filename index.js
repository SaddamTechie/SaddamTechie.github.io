import { expertiseData,coreTechnologies,featuredProjects } from "./data/infoJson.js";
const expertiseContainer = document.getElementById("expertiseContainer");
const technologyContainer = document.getElementById("technologyContainer");
const projectsContainer = document.getElementById('projectsContainer');


// const expertiseData = [
//     {
//     title:"UI/UX Design",
//     image:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:"Crafting delightful user experiences that keep users coming."
// },
// {
//     title:"Web  Development",
//     image:"https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:"Building robust websites that turn visitors into loyal.",
// },
// {
//     title:"Mobile  Application",
//     image:"https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:"Developing mobile experiences that fit in your pocket."
// },
// {
//     title:"API Development",
//     image:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     description:"Connecting systems with APIs that are as smooth as silk."
// }
// ]

// const coreTechnologies = [
//     {   
//         name:"javascript",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"
//     },
//     {
//         name:"python",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000"
//     },
//     {
//         name:"mysql",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000"
//     },
//     {
//         name:"nodejs",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
//     },
//     {
//         name:"django",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000"
//     },
//     {
//         name:"mongodb",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=74402&format=png&color=000000"
//     },
//     {
//         name:"express",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000"
//     },
//     {
//         name:"linux",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=17842&format=png&color=000000"
//     },
//     {
//         name:"tailwindcss",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000"
//     },
//     {
//         name:"react",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"
//     },
//     {
//         name:"flutter",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000"
//     },
//     {
//         name:"git",
//         official_site:"",
//         icon:"https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
//     },
    
// ]


// const featuredProjects = [
//     {
//         title:"Marambii Books:Book Store Inventory",
//         coverImage:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         tags:["tag1","tag2","tag3","tag4"],
//         code:"#",
//         live_site:"#",
//     },
//     {
//         title:"Marambii Books:Book Store Inventory",
//         coverImage:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         tags:["tag1","tag2","tag3","tag4"],
//         code:"#",
//         live_site:"#",
//     },
//     {
//         title:"Marambii Books:Book Store Inventory",
//         coverImage:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         tags:["tag1","tag2","tag3","tag4"],
//         code:"#",
//         live_site:"#",
//     },
//     {
//         title:"Marambii Books:Book Store Inventory",
//         coverImage:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         tags:["tag1","tag2","tag3","tag4"],
//         code:"#",
//         live_site:"#",
//     },
    
// ]


expertiseData.forEach((expertise)=>{
    const expertiseCard = document.createElement('div');
    const title = document.createElement('h4');
    const imageDiv = document.createElement('imageDiv');
    const image = document.createElement('img');
    const description = document.createElement('div');
    title.className = "mt-[10px] font-semibold text-[15px] sm:text-[20px] text-[#006039] text-center";
    title.textContent = expertise.title;
    image.className = "object-cover w-full h-full sm:w-[334px] sm:h-[180px]";
    image.src = expertise.image;
    description.className = "absolute inset-0 bg-black bg-opacity-50 top-1/2 left-0 right-0 h-1/2 text-center text-white text-[15px] sm:text-[20px] leading-[15px] sm:leading-[30px]";
    description.textContent = expertise.description;
    imageDiv.className = "relative w-[153px]  h-[70px] sm:w-[334px] sm:h-[180px]  bg-gray-500";
    imageDiv.append(image,description)
    expertiseCard.className = "bg-white h-[153px] sm:h-[250px] sm:w-[354px] rounded-md shadow-lg px-[2px] sm:px-[10px]";
    expertiseCard.append(title,imageDiv)
    expertiseContainer.append(expertiseCard)
})

coreTechnologies.forEach((technology)=>{
    const iconCard = document.createElement('div');
    const link = document.createElement('a');
    const icon = document.createElement('img');
    icon.className = "object-cover w-full h-full";
    icon.src = technology.icon;
    link.href = technology.official_site;
    link.target = "_blank"
    link.append(icon);
    iconCard.className = "w-[90px] h-[90px]";
    iconCard.append(link);
    technologyContainer.append(iconCard);
})


featuredProjects.forEach((project)=>{
    const projectCard = document.createElement('div');
    projectCard.className = "bg-white w-[349px] h-[281px] rounded-md"
    const imageDiv = document.createElement('div');
    imageDiv.className = "w-[325px] h-[175px] p-[10px]";
    const coverImage = document.createElement('img');
    coverImage.className = "object-cover w-full h-full";
    coverImage.alt = 'Cover Image';
    coverImage.src = project.coverImage;
    imageDiv.append(coverImage);
    const title = document.createElement('h4');
    title.className = "text-center text-[15px] font-semibold";
    title.textContent = project.title;

    //Project tags
    const tagsDiv = document.createElement('div');
    tagsDiv.className = "flex justify-evenly";
    const tags = project.tags;
    tags.forEach((item)=>{
        const tag = document.createElement('div');
        tag.className = "mt-[7px] w-[64px] h-[23px] bg-[#D9D9D9] text-center rounded-md";
        tag.textContent = item;
        tagsDiv.append(tag);
    })

    //External links part ,the code Link and the live site
    const externalLinksDiv = document.createElement('div');
    externalLinksDiv.className = "mt-[5px] flex justify-between px-[34px]";

    const codeLinkDiv = document.createElement('div');
    codeLinkDiv.className = "items-start w-[26px] h-[26px";
    const code_link = document.createElement('a');
    code_link.href = project.code;
    const code_icon = document.createElement('img');
    code_icon.className = "object-cover w-full h-full";
    code_icon.alt = "Code link";
    code_icon.src = "https://img.icons8.com/?size=100&id=60967&format=png&color=000000";
    code_link.append(code_icon);
    codeLinkDiv.append(code_link);

    const liveLinkDiv = document.createElement('div');
    liveLinkDiv.className = "items-end w-[26px] h-[26px";
    const site_link = document.createElement('a');
    site_link.href = project.live_site;
    const live_icon = document.createElement('img');
    live_icon.className = "object-cover w-full h-full";
    live_icon.alt = "Live link";
    live_icon.src = "https://img.icons8.com/?size=100&id=16139&format=png&color=000000";
    site_link.append(live_icon);
    liveLinkDiv.append(site_link);

    externalLinksDiv.append(codeLinkDiv,liveLinkDiv);
    
    projectCard.append(imageDiv,title,tagsDiv,externalLinksDiv) ;

    projectsContainer.append(projectCard)

})
