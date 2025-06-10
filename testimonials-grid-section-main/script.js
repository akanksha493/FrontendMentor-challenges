const data = [
    {
        "name": "Daniel Clifford",
        "designation": "Verified Graduate",
        "url": "./images/image-daniel.jpg",
        "title": "I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.",
        "content": "I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
    },
    {
        "name": "Jonathan Walters",
        "designation": "Verified Graduate",
        "url": "./images/image-jonathan.jpg",
        "title": "The team was very supportive and kept me motivated",
        "content": "I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."
    },
    {
        "name": "Jeanette Harmon",
        "designation": "Verified Graduate",
        "url": "./images/image-jeanette.jpg",
        "title": "An overall wonderful and rewarding experience",
        "content": "Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."
    },
    {
        "name": "Patrick Abrams",
        "designation": "Verified Graduate",
        "url": "./images/image-patrick.jpg",
        "title": "Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.",
        "content": "The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."
    },
    {
        "name": "Kira Whittle",
        "designation": "Verified Graduate",
        "url": "./images/image-kira.jpg",
        "title": "Such a life-changing experience. Highly recommended!",
        "content": "Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"
    }
];

const main = document.querySelector("main");

// const data = require("./data.json");
// import data from './data.json';
// let data = [];
// fetch("./data.json")
//     .then(response => {
//         return response.json();
//     }).then(response => {
//         data = response;
//     }).catch(error => {
//         console.log(error);
//     })

console.log(data);


data.forEach((item, index)=>{
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = `index${index}`;

    const authorDetails = document.createElement("div");
    authorDetails.classList.add("author");
    const image = document.createElement("img");
    image.classList.add("author-img");
    image.setAttribute("src", item.url);
    const name_designation = document.createElement("div");
    name_designation.classList.add(".name-designation-container");

    const name = document.createElement("p");
    name.classList.add("author-name");
    name.textContent = item.name;
    const designation = document.createElement("p");
    designation.classList.add("author-designation");
    designation.textContent = item.designation;

    authorDetails.appendChild(image);

    
    name_designation.appendChild(name);
    name_designation.appendChild(designation);
    authorDetails.appendChild(name_designation);

    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = item.title;
    const content = document.createElement("p");
    content.classList.add("content");
    content.textContent = `"${item.content}"`;


    card.appendChild(authorDetails);
    card.appendChild(title);
    card.appendChild(content);

    main.appendChild(card);
})
