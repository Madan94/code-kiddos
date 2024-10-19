const professors = [
  {
    name: "Dr. Birmohan Singh",
    education: "Ph.D., M.E.",
    email: ["birmohansingh@sliet.ac.in", "birmohans@gmail.com"],
    phone: "+91-1672-253208",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/5/6fc17d6735998f4f22a0e91fbf43b75c-bpfull.jpg",
  },
  {
    name: "Dr. Damanpreet Singh",
    education: "Ph.D., M.Tech, B.Tech.",
    email: ["damanpreets@sliet.ac.in"],
    phone: "+91-1672-253210",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/4/65783e7db0473-bpfull.jpg",
  },
  {
    name: "Dr. Major Singh Goraya",
    education: "Ph.D., M.Tech., B.Tech.",
    email: ["mjrsingh@yahoo.com"],
    phone: "01672-253212",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/35/5e69c6be20c7e-bpfull.jpg",
  },
  {
    name: "Dr. Manoj Sachan",
    education:
      "B.Tech (Computer Science), M.E (Computer Science), Ph.D (Computer Science & Engineering)",
    email: ["manojsachan@sliet.ac.in", "manojsachan@gmail.com"],
    phone: "+91-1672-253214",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/6/605c66bd3e3bc-bpfull.jpg",
  },
  {
    name: "Dr. Gurjinder Kaur",
    education:
      "B.E. Kyrgyz Technical University, Bishkek, M.S. BITS, Pilani, Ph.D SLIET, Longowal",
    email: ["gurjinder13@yahoo.com"],
    phone: "+91-1672-253326",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/14/5f2245e7a7f1bde5dee5bda48e09d411-bpfull.jpg",
  },
  {
    name: "Dr. Amar Nath",
    education: "Ph.D. in CSE",
    email: ["amarnath@sliet.ac.in"],
    phone: "01672-253610",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/467/66b8bb350cc46-bpfull.jpg",
  },
  {
    name: "Dr. Jagdeep Singh",
    education: "Ph.D in Computer Science & Engineering",
    email: ["jagdeep@sliet.ac.in", "jagdeepknit@gmail.com"],
    phone: "01672-253320",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/466/66f81ca30f4ff-bpfull.jpg",
  },
  {
    name: "Dr. Manminder Singh",
    education:
      "B.Tech (Computer Science & Engineering), M.Tech (Computer Science & Engineering), Ph.D (Computer Science & Engineering)",
    email: ["manminderldh@gmail.com", "manmindersingh@sliet.ac.in"],
    phone: "+91-01672-253328",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/16/66693282b6269-bpfull.jpg",
  },
  {
    name: "Dr. Preetpal Kaur Buttar",
    education: "PhD (Computer Science & Engineering)",
    email: ["preetpal@sliet.ac.in"],
    phone: "01672-253614",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/349/632d98c75d80f-bpfull.jpg",
  },
  {
    name: "Dr. Tajinder Singh",
    education: "Ph.D from National Institute of Technology, Hamirpur, India",
    email: ["tajindersingh@sliet.ac.in"],
    phone: "+91-6283963279",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/468/64e3532d30fac-bpfull.jpg",
  },
  {
    name: "Dr. Utkarsh",
    education:
      "School of Computer & Systems Sciences, Jawaharlal Nehru University, New Delhi, India, University Institute of Engineering & Technology, CSJM University, Kanpur, India",
    email: [],
    phone: "",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/493/6165aace595a1-bpfull.jpg",
  },
  {
    name: "Dr. VINOD KUMAR VERMA",
    education: "Ph.D. Computer Science and Engineering",
    email: ["vinod5881@gmail.com"],
    phone: "+91-1672-253218",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/17/28b95ba0ed455dca378c1ada58307bf6-bpfull.jpg",
  },
  {
    name: "Jaspal Singh",
    education: "M.E. (CSE & IT), Pursuing PhD in Cloud Computing",
    email: ["safrisoft@yahoo.com", "jaspalsingh@sliet.ac.in"],
    phone: "01672-253327",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/36/e0a878e8162fd75cb5eb6929d98df5c1-bpfull.jpg",
  },
  {
    name: "Rahul Gautam",
    education:
      "Ph.D. pursuing, M.Tech (Computer Science and Applications), Patiala, B.Tech (Computer Science and Info. Technology)",
    email: ["rahulgautam@sliet.ac.in"],
    phone: "+91-1672-253612",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/350/666bf221c60a0-bpfull.jpg",
  },
  {
    name: "Dr. Jatinder Pal Singh",
    education:
      "B.Tech - Computer Science and Engineering, M.Tech - Computer Science and Engineering, Ph.D. - Computer Science and Engineering",
    email: ["sachdeva.jp@gmail.com", "jatinderpalsingh@sliet.ac.in"],
    phone: "",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/344/64edd5a68d11b-bpfull.jpg",
  },
  {
    name: "Sukhpreet Singh",
    education: "B.Tech, M.Tech, Ph.D (Pursuing)",
    email: ["sukhpreet.manshahia@gmail.com"],
    phone: "",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/353/60544f9339252-bpfull.jpg",
  },

  {
    name: "Chinu",
    education: "Ph.D.(Pursuing), M.Tech, B.Tech",
    email: ["chinu@sliet.ac.in"],
    phone: "9915025805",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/477/605067c46b9c6-bpfull.jpg",
  },

  {
    name: "Sunita Rani",
    education: "Ph.D(Pursuing),M.Tech,B.Tech",
    email: ["sunitarani@sliet.ac.in"],
    phone: "8196013222",
    image:
      "http://sliet.ac.in/wp-content/uploads/avatars/516/64ed97380a462-bpfull.jpg",
  },
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
