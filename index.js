const apiUrl = 'https://saddam.pockethost.io';
const expertiseContainer = document.getElementById("expertiseContainer");
const technologyContainer = document.getElementById("technologyContainer");
const projectsContainer = document.getElementById('projectsContainer');
const questionsContainer = document.getElementById('questionsContainer');

//Skeletons
const expertiseSkeletons = document.getElementsByClassName('expertiseSkeleton');
const technologySkeletons = document.getElementsByClassName('technologySkeleton');
const projectSkeletons = document.getElementsByClassName('projectSkeleton');
const quizSkeletons = document.getElementsByClassName('quizSkeleton');

//Modal
const contactButton = document.getElementById('contactButton');
const contactButton2 = document.getElementById('contactButton2');
const closeModalButton = document.getElementById('closeModalButton');
const messageForm = document.getElementById('messageForm');
const formModal = document.getElementById('formModal');
const alertDiv = document.getElementById('alertDiv');

const openModal = ()=> {
    formModal.classList.remove('hidden');
    formModal.classList.add('block');
}

const closeModal = () =>{
    formModal.classList.remove('block');
    formModal.classList.add('hidden');
}

//Submit button

messageForm.addEventListener('submit',async function(event){
    event.preventDefault();

    const formData = new FormData(messageForm);

    const response = await fetch(`${apiUrl}/api/collections/messages/records`,{
        method:'POST',
        body:formData
    })
    if(response.ok){
        const data = await response.json();
        messageForm.reset();
        closeModal();
        alertDiv.textContent = "Submitted Successfully";
        alertDiv.classList.remove('hidden');

        // Set a timeout to hide the alert after 3 seconds
        setTimeout(() => {
        alertDiv.classList.add('hidden');
            }, 3000);
        }
})




const fetchExpertise = async () =>{
    try {
        const response = await fetch(`${apiUrl}/api/collections/expertise/records`)
        if(response.ok){
        const {items:expertiseData} = await response.json();
        expertiseData.map((expertise)=>{
            for(let i = 0;i<expertiseSkeletons.length;i++){
                expertiseSkeletons[i].classList.add('hidden');
            }
            const expertiseCard = document.createElement('div');
            const title = document.createElement('h4');
            const imageDiv = document.createElement('imageDiv');
            const image = document.createElement('img');
            const description = document.createElement('div');
            title.className = "mt-[10px] font-semibold text-[15px] sm:text-[20px] text-[#006039] text-center";
            title.textContent = expertise.title;
            image.className = "absolute  object-cover top-1/4 h-3/4 w-full sm:w-[334px] sm:h-[180px]";
            image.src = expertise.image;
            description.className = "absolute inset-0 bg-black bg-opacity-50 top-1/2 left-0 right-0 h-1/2 text-center text-white text-[15px] sm:text-[20px] leading-[15px] sm:leading-[30px]";
            description.textContent = expertise.description;
            imageDiv.className = " w-[153px]  h-[104px] sm:w-[334px] sm:h-[180px]  bg-gray-500";
            imageDiv.append(image,description)
            expertiseCard.className = "relative bg-white h-[153px] sm:h-[250px] sm:w-[354px] rounded-md shadow-lg px-[2px] sm:px-[10px] rounded-md";
            expertiseCard.append(title,imageDiv)
            expertiseContainer.append(expertiseCard)
        })
      }else{
        console.log('Error Fetching Expertise')
      }
    } catch (error) {
        console.log("Some error occured",error)
    }
     
}




const fetchTechnology = async () =>{
    try {
        const response = await fetch(`${apiUrl}/api/collections/technology/records`)
        if(response.ok){
        const {items:coreTechnologies} = await response.json();
        coreTechnologies.map((technology)=>{
            for(let i = 0;i<technologySkeletons.length;i++){
                technologySkeletons[i].classList.add('hidden');
            }
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
      }else{
        console.log('Error Fetching Technology from server')
      }
      
    } catch (error) {
        console.log("Some error occured",error)
    }
     
}


const fetchFeaturedProjects = async () =>{
    try {
        const response = await fetch(`${apiUrl}/api/collections/projects/records`)
        if(response.ok){
        const {items:featuredProjects} = await response.json();
        featuredProjects.map((project)=>{
            for(let i = 0;i<projectSkeletons.length;i++){
                projectSkeletons[i].classList.add('hidden');
            }
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
            tags.map((item)=>{
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
      }else{
        console.log('Error Fetching Projects')
      }
    } catch (error) {
        console.log("Some error occured",error)
    }
     
}




const fetchQuizz = async () =>{
    try {
        const response = await fetch(`${apiUrl}/api/collections/quizz/records`)
    if(response.ok){
        const {items:commonQuiz} = await response.json();
        
        commonQuiz.map((item)=>{
            for(let i = 0;i<quizSkeletons.length;i++){
                quizSkeletons[i].classList.add('hidden');
            }
            let isAnswerVisible = false;
            const quizCard = document.createElement('div');
            quizCard.className = "relative bg-white rounded-md";
            const toggleIcon = document.createElement('button');
            toggleIcon.className = "absolute  right-[12px] top-[8px]";
            toggleIcon.textContent = "+";
            const question = document.createElement('div');
            question.className = "p-[10px] sm:p-[20px]";
            question.textContent = item.question;
            const answer = document.createElement('div');
            answer.className = "hidden";
            answer.textContent = item.answer;
            quizCard.append(toggleIcon,question,answer);
            questionsContainer.append(quizCard);
        
            toggleIcon.onclick = ()=>{
                if(isAnswerVisible){
                    answer.className = "hidden";
                    toggleIcon.textContent = "+";
                }else{
                answer.className = "px-[21px] py-2 text-[12px] sm:text-[20px]";
                toggleIcon.textContent = "-";
                }
                isAnswerVisible = !isAnswerVisible;
            }
        })
    }else{
        console.log('Error Fetching Quizz')
      }
    } catch (error) {
        console.log("Error Ocurred",error)
    }
    
}



 


fetchExpertise();
fetchTechnology();
fetchFeaturedProjects();
fetchQuizz();


closeModalButton.addEventListener('click',function(){
    closeModal();
})


contactButton.addEventListener('click',function(){
    openModal();
})

contactButton2.addEventListener('click',function(){
    openModal();
})

document.addEventListener('click',function(event){
    const isCickedInside = formModal.contains(event.target) || event.target === contactButton || event.target ===contactButton2;
    if(!isCickedInside){
        closeModal();
    }
})


