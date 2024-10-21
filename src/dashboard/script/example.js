// Dropdown for Desktop
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("hidden");
});

// Hamburger Menu for Mobile
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");
const logo = document.getElementById("logo");
const header = document.getElementById("header");

mobileMenuButton.addEventListener("click", function () {
  // Toggle visibility for the logo, hamburger button, and the border
  mobileMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  mobileMenuButton.classList.toggle("hidden");
  header.classList.toggle("border-b"); // Removes border-b when menu opens
});

// Hide dropdown when clicking outside
window.addEventListener("click", function (e) {
  if (!dropdownButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.add("hidden");
  }
});
window.addEventListener("click", function (e) {
  if (!mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
    mobileMenuButton.classList.add("hidden");
  }
});

const polls = [
  {
    title: "August Team Member",
    nominees: 32,

    daysRemaining: "7 days remaining",
    icon3: "../../public/Arrow - Right 2.svg",
  },
  {
    title: "August Team Member",
    nominees: 32,

    daysRemaining: "7 days remaining",
    icon3: "../../public/Arrow - Right 2.svg",
  },
];

const pollsPerPage = 2;
let currentPage = 1;

function displayPolls(page) {
  const startIndex = (page - 1) * pollsPerPage;
  const endIndex = startIndex + pollsPerPage;
  const paginatedPolls = polls.slice(startIndex, endIndex);
  const pollsContainer = document.getElementById("pollsContainer");
  pollsContainer.innerHTML = "";

  paginatedPolls.map((poll, i) => {
    const pollcard = /*html*/ ` <div key=${i} class="border rounded-lg mt-6  shadow-sm bg-[#FFFFFF]" > <div  class=" p-4 ">
      
        <h3 class="font-bold flex items-center gap-2 mb-4">
         <img src="../../public/Misc icon (1).svg" alt="Poll Icon" class="" /> ${poll.title}</h3>
       <div class=" flex gap-4 flex-col mt-6"> <p class="text-[#333333] text-3xl font-bold">${poll.nominees} <span class="text-sm font-normal"> Nominees</span></p>
      
      <div class=" "><h4 class="inline-flex rounded-lg gap-1 text-[#28AA63] bg-[#EAFBF2] px-2 py-1 text-xs font-normal items-center ">   <img src="../../public/Calendar.svg" alt="Poll Icon" class="h-4 w-6 " />
      days remaining</h4></div></div>
    
    </div>
    <div class="text-[#28AA63]  mt-4 border-t-2 p-2 cursor-pointer flex justify-between"> <a class="" href="URL">View Poll</a>
  <img class="h-5 w-5" src="../../public/Arrow - Right 2.svg" alt="" style="filter: brightness(0) saturate(100%) invert(50%) sepia(50%) saturate(200%) hue-rotate(80deg);">
    </div>
    </div>`;
    pollsContainer.innerHTML += pollcard;
  });
}
// Pagination Variables
const totalPages = Math.ceil(polls.length / pollsPerPage);
const paginationNumbers = document.getElementById("paginationNumbers");

// Generate Pagination Numbers
function generatePagination() {
  paginationNumbers.innerHTML = ""; // Clear previous numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.classList.add("px-3", "py-1", "rounded", "bg-gray-300", "page-btn");
    pageBtn.textContent = i;

    if (i === currentPage) {
      pageBtn.classList.add("active");
    }

    pageBtn.addEventListener("click", () => {
      currentPage = i;
      updatePagination();
    });

    paginationNumbers.appendChild(pageBtn);
  }
}

// Update Pagination State
function updatePagination() {
  displayPolls(currentPage);
  generatePagination();

  document.getElementById("prevBtn").disabled = currentPage === 1;
  document.getElementById("nextBtn").disabled = currentPage === totalPages;
}

// Initial display of polls and pagination
updatePagination();

// Pagination buttons
document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});
