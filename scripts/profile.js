const professors = [
    {
        name: "Dr. Birmohan Singh",
        education: "Ph.D., M.E.",
        email: ['birmohansingh@sliet.ac.in', 'birmohans@gmail.com'],
        phone: "+91-1672-253208",
        image: "../images/img1.jpg"
    },
    {
        name: "Dr. Damanpreet Singh",
        education: "Ph.D., M.Tech, B.Tech.",
        email: ['damanpreets@sliet.ac.in'],
        phone: "+91-1672-253210",
        image: "../images/img2.jpg"
    },
    {
        name: "Dr. Major Singh Goraya",
        education: "Ph.D., M.Tech., B.Tech.",
        email: ['mjrsingh@yahoo.com'],
        phone: "01672-253212",
        image: "../images/img3.jpg"
    },
    {
        name: "Dr. Manoj Sachan",
        education: "B.Tech (Computer Science), M.E (Computer Science), Ph.D (Computer Science & Engineering)",
        email: ['manojsachan@sliet.ac.in', 'manojsachan@gmail.com'],
        phone: "+91-1672-253214",
        image: "../images/img4.jpg"
    },
    {
        name: "Dr. Gurjinder Kaur",
        education: "B.E. Kyrgyz Technical University, Bishkek, M.S. BITS, Pilani, Ph.D SLIET, Longowal",
        email: ['gurjinder13@yahoo.com'],
        phone: "+91-1672-253326",
        image: "../images/img5.jpg"
    },
    {
        name: "Dr. Amar Nath",
        education: "Ph.D. in CSE",
        email: ['amarnath@sliet.ac.in'],
        phone: "01672-253610",
        image: "../images/img6.jpg"
    },
    {
        name: "Dr. Jagdeep Singh",
        education: "Ph.D in Computer Science & Engineering",
        email: ['jagdeep@sliet.ac.in', 'jagdeepknit@gmail.com'],
        phone: "01672-253320",
        image: "../images/img7.jpg"
    },
    {
        name: "Dr. Manminder Singh",
        education: "B.Tech (Computer Science & Engineering), M.Tech (Computer Science & Engineering), Ph.D (Computer Science & Engineering)",
        email: ['manminderldh@gmail.com', 'manmindersingh@sliet.ac.in'],
        phone: "+91-01672-253328",
        image: "../images/img8.jpg"
    },
    {
        name: "Dr. Preetpal Kaur Buttar",
        education: "PhD (Computer Science & Engineering)",
        email: ['preetpal@sliet.ac.in'],
        phone: "01672-253614",
        image: "../images/img9.jpg"
    },
    {
        name: "Dr. Tajinder Singh",
        education: "Ph.D from National Institute of Technology, Hamirpur, India",
        email: ['tajindersingh@sliet.ac.in'],
        phone: "+91-6283963279",
        image: "../images/img10.jpg"
    },
    {
        name: "Dr. Utkarsh",
        education: "School of Computer & Systems Sciences, Jawaharlal Nehru University, New Delhi, India, University Institute of Engineering & Technology, CSJM University, Kanpur, India",
        email: [],
        phone: "",
        image: "../images/img11.jpg"
    },
    {
        name: "Dr. VINOD KUMAR VERMA",
        education: "Ph.D. Computer Science and Engineering",
        email: ['vinod5881@gmail.com'],
        phone: "+91-1672-253218",
        image: "../images/img12.jpg"
    },
    {
        name: "Jaspal Singh",
        education: "M.E. (CSE & IT), Pursuing PhD in Cloud Computing",
        email: ['safrisoft@yahoo.com', 'jaspalsingh@sliet.ac.in'],
        phone: "01672-253327",
        image: "../images/img13.jpg"
    },
    {
        name: "Rahul Gautam",
        education: "Ph.D. pursuing, M.Tech (Computer Science and Applications), Patiala, B.Tech (Computer Science and Info. Technology)",
        email: ['rahulgautam@sliet.ac.in'],
        phone: "+91-1672-253612",
        image: "../images/img14.jpg"
    },
    {
        name: "Dr. Jatinder Pal Singh",
        education: "B.Tech - Computer Science and Engineering, M.Tech - Computer Science and Engineering, Ph.D. - Computer Science and Engineering",
        email: ['sachdeva.jp@gmail.com', 'jatinderpalsingh@sliet.ac.in'],
        phone: "",
        image: "../images/img15.jpg"
    },
    {
        name: "Sukhpreet Singh",
        education: "B.Tech, M.Tech, Ph.D (Pursuing)",
        email: ['sukhpreet .manshahia@gmail.com'],
        phone: "",
        image: "../images/img16.jpg"
    },

    {
        name: "Chinu",
        education: "Ph.D.(Pursuing), M.Tech, B.Tech",
        email: ['chinu@sliet.ac.in'],
        phone: "9915025805",
        image: "../images/img17.jpg"
    },


    {
        name: "Sunita Rani",
        education: "Ph.D(Pursuing),M.Tech,B.Tech",
        email: ['sunitarani@sliet.ac.in'],
        phone: "8196013222",
        image: "../images/img18.jpg"
    }
];

function getProfessorDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const professorIndex = urlParams.get("index");

  if (professorIndex !== null && professors[professorIndex]) {
    const professor = professors[professorIndex];

    // Display professor details in the profile section
    document.getElementById("professor-name").textContent = professor.name;
    document.getElementById(
      "professor-education"
    ).innerHTML = `<span style='color:#f56464; font-weight: bold;'>Education:</span> ${professor.education}`;
    document.getElementById(
      "professor-email"
    ).innerHTML = `<span style='color:#f56464; font-weight: bold;'>Email:</span> ${professor.email.join(
      ", "
    )}`;
    document.getElementById(
      "professor-phone"
    ).innerHTML = `<span style='color:#f56464; font-weight: bold;'>Phone:</span> ${professor.phone}`;
    document.getElementById("professor-image").src = professor.image;
    document.getElementById(
      "professor-image"
    ).alt = `${professor.name}'s profile picture`;

    // Also display professor's name and image in the session section
    updateSessionSection(professor);
  } else {
    // Handle if professor is not found
    document.querySelector(".profile-details").innerHTML =
      "<p>Professor not found</p>";
  }
}

// Function to update the session section with professor's name and image
function updateSessionSection(professor) {
  // Update the session section with the professor's name and image
  const sessionHeader = `
      <div class="session-header">
        <img src="../images/work.avif" alt="${professor.name}'s image" class="professor-photo">
        <div class="session-info">
          <h3>${professor.name}</h3>
          <p><span class="sub-head">Session Description:</span> Join us for a focused lecture on Algorithms and Data Structures, essential concepts in Computer Science. This session will cover the fundamentals of how algorithms work and the importance of data structures in optimizing performance. You'll learn how to choose the right data structure for specific problems and explore classic algorithms such as sorting and searching. This lecture is perfect for anyone looking to strengthen their programming skills and improve their problem-solving capabilities in real-world applications.</p>
        </div>
      </div>
    `;

  // Inject the content into the session section
  document.querySelector(".session").innerHTML =
    sessionHeader +
    `
      <a href="booking.html" class="session-link">Join Session</a>
    `;
}

// Get all the tabs and sections
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".section");

// Add event listener to each tab
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove 'active' class from all tabs and sections
    tabs.forEach((t) => t.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    // Add 'active' class to the clicked tab and the corresponding section
    tab.classList.add("active");
    const targetSection = document.getElementById(tab.dataset.target);
    targetSection.classList.add("active");
  });
});

// Call function on page load to load professor details
document.addEventListener("DOMContentLoaded", getProfessorDetails);
