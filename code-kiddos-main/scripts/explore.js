// Store all professor details in an array
const professors = [
    {
        name: "Dr. Birmohan Singh",
        education: "Ph.D., M.E.",
        email: ['birmohansingh@sliet.ac.in', 'birmohans@gmail.com'],
        phone: "+91-1672-253208",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg"
    },
    {
        name: "Dr. Damanpreet Singh",
        education: "Ph.D., M.Tech, B.Tech.",
        email: ['damanpreets@sliet.ac.in'],
        phone: "+91-1672-253210",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        education: "Ph.D., M.Tech., B.Tech.",
        email: ['mjrsingh@yahoo.com'],
        phone: "01672-253212",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        education: "B.Tech (Computer Science), M.E (Computer Science), Ph.D (Computer Science & Engineering)",
        email: ['manojsachan@sliet.ac.in', 'manojsachan@gmail.com'],
        phone: "+91-1672-253214",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        education: "B.E. Kyrgyz Technical University, Bishkek, M.S. BITS, Pilani, Ph.D SLIET, Longowal",
        email: ['gurjinder13@yahoo.com'],
        phone: "+91-1672-253326",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg"
    },
    {
        name: "Dr. Amar Nath",
        education: "Ph.D. in CSE",
        email: ['amarnath@sliet.ac.in'],
        phone: "01672-253610",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        education: "Ph.D in Computer Science & Engineering",
        email: ['jagdeep@sliet.ac.in', 'jagdeepknit@gmail.com'],
        phone: "01672-253320",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        education: "B.Tech (Computer Science & Engineering), M.Tech (Computer Science & Engineering), Ph.D (Computer Science & Engineering)",
        email: ['manminderldh@gmail.com', 'manmindersingh@sliet.ac.in'],
        phone: "+91-01672-253328",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        education: "PhD (Computer Science & Engineering)",
        email: ['preetpal@sliet.ac.in'],
        phone: "01672-253614",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        education: "Ph.D from National Institute of Technology, Hamirpur, India",
        email: ['tajindersingh@sliet.ac.in'],
        phone: "+91-6283963279",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg"
    },
    {
        name: "Dr. Utkarsh",
        education: "School of Computer & Systems Sciences, Jawaharlal Nehru University, New Delhi, India, University Institute of Engineering & Technology, CSJM University, Kanpur, India",
        email: [],
        phone: "",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg"
    },
    {
        name: "Dr. VINOD KUMAR VERMA",
        education: "Ph.D. Computer Science and Engineering",
        email: ['vinod5881@gmail.com'],
        phone: "+91-1672-253218",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg"
    },
    {
        name: "Jaspal Singh",
        education: "M.E. (CSE & IT), Pursuing PhD in Cloud Computing",
        email: ['safrisoft@yahoo.com', 'jaspalsingh@sliet.ac.in'],
        phone: "01672-253327",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg"
    },
    {
        name: "Rahul Gautam",
        education: "Ph.D. pursuing, M.Tech (Computer Science and Applications), Patiala, B.Tech (Computer Science and Info. Technology)",
        email: ['rahulgautam@sliet.ac.in'],
        phone: "+91-1672-253612",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg"
    },
    {
        name: "Dr. Jatinder Pal Singh",
        education: "B.Tech - Computer Science and Engineering, M.Tech - Computer Science and Engineering, Ph.D. - Computer Science and Engineering",
        email: ['sachdeva.jp@gmail.com', 'jatinderpalsingh@sliet.ac.in'],
        phone: "",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg"
    },
    {
        name: "Sukhpreet Singh",
        education: "B.Tech, M.Tech, Ph.D (Pursuing)",
        email: ['sukhpreet .manshahia@gmail.com'],
        phone: "",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg"
    },

    {
        name: "Chinu",
        education: "Ph.D.(Pursuing), M.Tech, B.Tech",
        email: ['chinu@sliet.ac.in'],
        phone: "9915025805",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/477/605067c46b9c6-bpfull.jpg"
    },


    {
        name: "Sunita Rani",
        education: "Ph.D(Pursuing),M.Tech,B.Tech",
        email: ['sunitarani@sliet.ac.in'],
        phone: "8196013222",
        image: "http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg"
    }
];

// Function to search professors by name
// Function to search professors by name
function searchProfessors() {
    const searchValue = document.getElementById('searchBar').value.toLowerCase();
    const filteredProfessors = professors.filter(professor =>
        professor.name.toLowerCase().includes(searchValue)
    );

    displayProfessors(filteredProfessors);
}

// Modify displayProfessors to accept a filtered list (defaults to full professor list)
function displayProfessors(professorList = professors) {
    const container = document.querySelector('.container');

    // Clear previous content if any
    container.innerHTML = '';

    // Iterate through the list of professors and create a card for each
    professorList.forEach((professor, index) => {
        // Create outer card div
        const outercard = document.createElement('div');
        outercard.classList.add('outer-card'); // Add outer-card class

        // Create inner card div
        const card = document.createElement('div');
        card.classList.add('card'); // Add card class

        // Create a container for the image and overlay
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');

        // Create elements for each professor's details
        const img = document.createElement('img');
        img.src = professor.image;
        img.alt = `${professor.name}'s profile picture`;
        img.classList.add('mentor-image');

        const infoOverlay = document.createElement('div');
        infoOverlay.classList.add('info-overlay');

        const name = document.createElement('h3');
        name.textContent = professor.name;
        name.classList.add('name-overlay'); // Add a class for styling

        // Append the name to the overlay
        infoOverlay.appendChild(name);

        // Append the image and overlay to the image container
        imageContainer.appendChild(img);
        imageContainer.appendChild(infoOverlay);

        // Create additional info for education, email, phone
        const education = document.createElement('p');
        education.innerHTML = `<span style="font-weight: bold;">Education:</span> ${professor.education.slice(0, 25)}...`;
        education.classList.add('education');

        const email = document.createElement('p');
        email.innerHTML = `<span style="font-weight: bold;">Email:</span> ${professor.email.length > 0 ? professor.email.join(', ') : 'N/A'}`;
        email.classList.add('email');

        const phone = document.createElement('p');
        phone.innerHTML = `<span style="font-weight: bold;">Phone:</span> ${professor.phone || 'N/A'}`;
        phone.classList.add('phone');

        const button = document.createElement('a');
        button.textContent = 'View Profile';
        button.classList.add('profile-btn');
        button.href = `profile.html?index=${index}`;  // Link to profile.html with query parameter

        // Append the image container to the card
        card.appendChild(imageContainer);

        // Append additional details to the card
        card.appendChild(education);
        card.appendChild(email);
        card.appendChild(phone);
        card.appendChild(button);

        // Append the card to the outercard
        outercard.appendChild(card);

        // Append the outercard to the container
        container.appendChild(outercard);
    });
}

// Initially display all professors when the page loads
document.addEventListener('DOMContentLoaded', () => displayProfessors(professors));


function openNav() {
    document.querySelector('.sidebar').style.width = "auto"
}

function closeNav() {
    document.querySelector('.sidebar').style.width = "0"
}