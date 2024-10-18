// our service content generator
const service_content = [
    {
        head: "Sell 1 : 1 Video Call.",
        content: "From your valued followers, dedicated fans, to aspiring students, there is a consistent demand for your expertise and presence.Unlock a world of possibilities as you connect with your audience.",
        feature: "High Fidelity Video Offer High quality Video Conferencing Service with No Worries about Bandwidth. <br><br> Multi Screenshare Allow participants in the call to share screen with you in real-time. <br><br> Whiteboard Brainstorm and Collaborate in real time Using a shared Whiteboard.",
        image: "../images/video_call.png"
    },

    {
        head: "Sell 1 : 1 DMs.",
        content: "Stop Giving Out your Personal Email , Phone Number or Any Personal Detail , Provide Value just by texting.",
        feature: "User-Friendly Chat Interface Enjoy Effortless navigation and seamless chatting experience. <br><br> Rich Media Support Sharing Design Mockups, Presentations, Resumes, or any other files is fluidly integrated into your conversations.",
        image: "../images/dms.png"
    },

    {
        head: "Sell Pay to Attend Webinars.",
        content: "Be it Virtual Meet and Greet , Carrear Growth Hack or Social Media Strategy coaching. We got your back.",
        feature: "End to End Support Leave the hassle of sending confirmation emails, WhatsApp messages, checking payment status for every participant, sending Zoom links prior to meetings, collecting testimonials, and follow-ups to us. We've got you covered every step of the way. <br><br> Dynamic Tracking Track and Follow up on every Participant with Ease",
        image: "../images/webniar.png"
    },

    {
        head: "Sell Exclusive Content.",
        content: "Start Selling Courses that Showcase your Expertise , tallent or persona and Create a Passive Income that Rewards you.",
        feature: "Anti-Piracy Enforcement Get DRM Encryption , IP Restriction , Screen Capture Denial to Safe Guard your Course Content",
        image: "../images/exclusive_content.png"
    }
]

function changeService(n) {
    const allElements = document.querySelectorAll(".our-service-title")
    for (i = 0; i <= 3; i++) {
        if (i == n) {
            allElements[i].classList.add('active')
        }
        else {
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
