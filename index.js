const expertiseData = [
    {
    title:"UI/UX Design",
    image:"https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Crafting delightful user experiences that keep users coming."
},
{
    title:"Web  Development",
    image:"https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Building robust websites that turn visitors into loyal.",
},
{
    title:"Mobile  Application",
    image:"https://images.unsplash.com/photo-1556155092-8707de31f9c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Developing mobile experiences that fit in your pocket."
},
{
    title:"API Development",
    image:"https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:"Connecting systems with APIs that are as smooth as silk."
}
]

const expertiseContainer = document.getElementById("expertiseContainer");

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