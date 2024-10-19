// our service content generator
const service_content = [
    {
        head: "Sell 1 : 1 Video Call.",
        content: "Connect with experienced faculty mentors to clarify your doubts and receive personalized guidance tailored to your academic and career goals.",
        feature: "Easy Scheduling Book sessions effortlessly based on mentor availability. <br><br> Reminder Notifications Receive timely alerts for your upcoming sessions. <br><br> Interactive Discussions Engage in meaningful conversations to enhance your learning experience.",
        image: "../images/video_call.png"
    },

    {
        head: "Message Your Mentor",
        content: "No need to share personal contact details. Communicate directly with your mentors through our secure messaging platform.",
        feature: "Intuitive Chat Interface Enjoy smooth navigation for effective communication. <br><br> File Sharing Easily share documents, notes, or resources during your chats.",
        feature: "User-Friendly Chat Interface Enjoy Effortless navigation and seamless chatting experience. <br><br> Rich Media Support Sharing Design Mockups, Presentations, Resumes, or any other files is fluidly integrated into your conversations.",
        image: "../images/dms.png"
    },

    {
        head: "Join Engaging Webinars",
        content: "Participate in webinars focused on career development, skill-building, and industry insights led by knowledgeable faculty.",
        feature: "Comprehensive Support From registration to follow-ups, we handle all aspects of your webinar experience. <br><br> Participant Engagement Track attendance and gather feedback with ease.",
        image: "../images/webniar.png"
    },

    {
        
    head: "Connect Through Mentorship",
    content: "Establish meaningful connections with faculty mentors who provide personalized guidance and support throughout your academic journey.",
    feature: "Personalized Guidance Receive tailored advice from experienced faculty. <br><br> Strengthened Connections Foster long-term relationships that enhance your learning experience.",
        image: "../images/exclusive_content.png"
    }
]

function changeService(n) {
    const allElements = document.querySelectorAll(".our-service-title")
    for(i=0; i<=3; i++){
        if(i == n){
            allElements[i].classList.add('active')
        }
        else{
            allElements[i].classList.remove('active')
        }
    }
    const service = service_content[n]
    const html = `
        <div class="service-content-main">
            <h1 class="our-service-head">${service.head}</h1>
            <p class="our-service-content">${service.content}</p>
            <p class="our-service-feature">${service.feature}</p>
        </div>
        <div class="service-image-section">
            <img class="service-img" src=${service.image} alt="">
        </div>
    `
    document.querySelector('.about-our-service').innerHTML = html
}   

changeService(0)

// Function to toggle chatbox visibility
function toggleChat() {
    const chatbox = document.getElementById('chatbox');
    if (chatbox.style.display === 'none' || chatbox.style.display === '') {
        chatbox.style.display = 'flex'; // Show the chatbox
    } else {
        chatbox.style.display = 'none'; // Hide the chatbox
    }
}

function openNav(){
    document.querySelector('.sidebar').style.width = "auto"
}

function closeNav(){
    document.querySelector('.sidebar').style.width = "0"
}
