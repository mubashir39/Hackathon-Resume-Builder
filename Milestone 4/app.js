const maxExpertise = 5;
const maxProjects = 5;
const maxCertificates = 3;
const maxEducation = 4;
const maxLanguages = 2; // Set kro

const pictureInput = document.getElementById('user-picture-input');
const previewImg = document.getElementById('picture-preview-img');
const displayPicture = document.getElementById('display-picture');

pictureInput.addEventListener('change', function () {
  if (pictureInput.files && pictureInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Display picture in both preview and resume sections
      previewImg.src = e.target.result;
      displayPicture.src = e.target.result;
    };
    reader.readAsDataURL(pictureInput.files[0]);
  }
});

function addSkill() {
  const skillsContainer = document.getElementById('skills-container');

  const skillDiv = document.createElement('div');
  skillDiv.classList.add('skill-input');
  skillDiv.innerHTML = `
    <input type="text" class="skill-name" placeholder="Skill (e.g., HTML)" required />
    <input type="number" class="skill-percent" placeholder="Skill (%)" min="0" max="100" required oninput="updateProgressBar(this)" />
    <div class="progress-bar">
      <div class="progress"></div>
    </div>
  `;
  
  skillsContainer.appendChild(skillDiv);
}


function updateProgressBar(input) {
  const percent = input.value;
  const progressBar = input.nextElementSibling.querySelector('.progress');
  progressBar.style.width = `${percent}%`;
}
  function addPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-links-container');
  
    // Create new portfolio input fields
    const portfolioDiv = document.createElement('div');
    portfolioDiv.classList.add('portfolio-input');
    portfolioDiv.innerHTML = `
      <input type="text" class="portfolio-name" placeholder="LinkedIn" required />
      <input type="url" class="portfolio-url" placeholder="LinkedIn URL" required />
    `;
    
    portfolioContainer.appendChild(portfolioDiv);
  }
  
  function addCertificate() {
    const certificatesContainer = document.getElementById('certificates-container');
  
    // Create new certificate input fields
    const certificateDiv = document.createElement('div');
    certificateDiv.classList.add('certificate-input');
    certificateDiv.innerHTML = `
      <input type="text" class="certificate-name" placeholder="Certificate Name" required />
      <input type="text" class="certificate-issuer" placeholder="Issuer (e.g., Udemy)" required />
    `;
    
    certificatesContainer.appendChild(certificateDiv);
  }
  
  let educationCount = 1;

  function addEducationEntry() {
    educationCount++;
    const educationForm = document.getElementById('education-form');
  
    const newEntry = document.createElement('div');
    newEntry.classList.add('education-entry');
  
    newEntry.innerHTML = `
      <label for="education-year-${educationCount}">Year:</label>
      <input type="text" id="education-year-${educationCount}" name="education-year-${educationCount}" placeholder="Enter year" required>
      
      <label for="education-field-${educationCount}">Field of Study:</label>
      <input type="text" id="education-field-${educationCount}" name="education-field-${educationCount}" placeholder="Enter field (e.g., Computer Science)" required>
      
      <label for="education-university-${educationCount}">University:</label>
      <input type="text" id="education-university-${educationCount}" name="education-university-${educationCount}" placeholder="university name" required>
    `;
  
    educationForm.appendChild(newEntry);
  } // Function to dynamically add new education input fields
  function addEducation() {
    const educationContainer = document.getElementById('education-container');
  
    const educationDiv = document.createElement('div');
    educationDiv.classList.add('education-input');
    educationDiv.innerHTML = `
      <input type="text" class="education-degree" placeholder="Degree (e.g., B.Sc.)" required />
      <input type="text" class="education-institution" placeholder="Institution (e.g., XYZ University)" required />
      <input type="text" class="education-year-start" placeholder="Start Year" required />
      <input type="text" class="education-year-end" placeholder="End Year" required />
    `;
  
    educationContainer.appendChild(educationDiv);
  }
  // Function to add a new project input field
function addProject() {
  const projectsContainer = document.getElementById("projects-container");
  
  // Create a new project input element
  const projectInput = document.createElement("div");
  projectInput.classList.add("project-input");
  
  // Add input fields for project name and project URL
  projectInput.innerHTML = `
    <input type="text" class="project-name" placeholder="Project Name" required />
    <input type="url" class="project-url" placeholder="Source Code URL" required />
    &nbsp;<button type="button" onclick="removeProject(this)">-</button>
  `;
  
  projectsContainer.appendChild(projectInput);
}
  function addLanguage() {
    const languageContainer = document.getElementById('language-container');
  
    // Create new language input fields
    const languageDiv = document.createElement('div');
    languageDiv.classList.add('language-input');
    languageDiv.innerHTML = `
      <input type="text" class="language-name" placeholder="Language (e.g., English)" required />
    `;
    
    languageContainer.appendChild(languageDiv);
  }


function generateResume() {
    // Get user inputs
  
 
    // Collecting user inputs
    const name = document.getElementById("user-name-input").value;
    const position = document.getElementById("user-position-input").value;
    const about = document.getElementById("user-about-input").value;
    const email = document.getElementById("user-email").value;
    const phone = document.getElementById("user-phone").value;
    const address = document.getElementById("user-address").value;
    const reference = document.getElementById("reference-input").value;

    // Collect skills
    const skills = [];
    const skillInputs = document.querySelectorAll('.skill-input');
    skillInputs.forEach((input) => {
      const skillName = input.querySelector('.skill-name').value;
      const skillPercent = input.querySelector('.skill-percent').value;
      skills.push({ skillName, skillPercent });
    });
  
    // Collect portfolio links
    const portfolioLinks = [];
    const portfolioInputs = document.querySelectorAll('.portfolio-input');
    portfolioInputs.forEach((input) => {
      const portfolioName = input.querySelector('.portfolio-name').value;
      const portfolioUrl = input.querySelector('.portfolio-url').value;
      portfolioLinks.push({ portfolioName, portfolioUrl });
    });
  
    // Collect certificates
    const certificates = [];
    const certificateInputs = document.querySelectorAll('.certificate-input');
    certificateInputs.forEach((input) => {
      const certificateName = input.querySelector('.certificate-name').value;
      const certificateIssuer = input.querySelector('.certificate-issuer').value;
      certificates.push({ certificateName, certificateIssuer });
    });
  
 // Collect education details
 const educationDetails = [];
 const educationInputs = document.querySelectorAll('.education-input');
 educationInputs.forEach((input) => {
   const degree = input.querySelector('.education-degree').value;
   const institution = input.querySelector('.education-institution').value;
   const yearStart = input.querySelector('.education-year-start').value;
   const yearEnd = input.querySelector('.education-year-end').value;
   educationDetails.push({ degree, institution, yearStart, yearEnd });
 });
  // Display education in resume section
  const educationSection = document.getElementById('education-section');
  educationSection.innerHTML = ''; // Clear previous entries

  educationDetails.forEach((edu) => {
    const eduDiv = document.createElement('div');
    eduDiv.classList.add('education-entry');
    eduDiv.innerHTML = `
      <h4>${edu.degree} </h4>
      <p>${edu.institution}</p>
      <p>${edu.yearStart} - ${edu.yearEnd}</p>
    `;
    educationSection.appendChild(eduDiv);
  });


    // Collect languages
    const languages = [];
    const languageInputs = document.querySelectorAll('.language-input');
    languageInputs.forEach((input) => {
      const languageName = input.querySelector('.language-name').value;
      languages.push(languageName);
    });
  
    // Now, set the data into the resume section
     // Assigning values to display elements
     document.getElementById("display-name").textContent = name;
     document.getElementById("display-position").textContent = position;
     document.getElementById("display-about").textContent = about;
     document.getElementById("display-email").textContent = email;
     document.getElementById("display-phone").textContent = phone;
     document.getElementById("display-address").textContent = address;
     document.getElementById("display-reference").textContent = reference;
 // Display skills with progress bars
const skillsContainer = document.getElementById('display-skills-container');
skillsContainer.innerHTML = ''; // Clear any previous data

skills.forEach((skill) => {
    const skillElement = document.createElement('div');
    skillElement.classList.add('skill-display');

    // Skill name
    const skillName = document.createElement('strong');
    skillName.innerText = `${skill.skillName}: `;
    skillElement.appendChild(skillName);

    // Progress bar
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.width = `${skill.skillPercent}%`;
    progressBar.appendChild(progress);
    skillElement.appendChild(progressBar);

    // Skill percentage text
    const skillPercentText = document.createElement('span');
    skillPercentText.classList.add('skill-percent-text');
    skillElement.appendChild(skillPercentText);

    // Append the skill element to the container
    skillsContainer.appendChild(skillElement);
});

  
    // Display portfolio links
    const portfolioContainer = document.getElementById('display-portfolio-links');
    portfolioContainer.innerHTML = ''; // Clear previous data
    portfolioLinks.forEach((link) => {
      const linkElement = document.createElement('li');
      linkElement.innerHTML = `<a href="${link.portfolioUrl}" target="_blank">${link.portfolioName}</a>`;
      portfolioContainer.appendChild(linkElement);
    });
  
    // Display languages
    const languageList = document.getElementById('display-language1');
    languageList.innerHTML = '';
    languages.forEach((language, index) => {
      const languageElement = document.createElement('li');
      languageElement.innerText = language;
      languageList.appendChild(languageElement);
    });
  
 
    // Display certificates
    const certificatesContainer = document.getElementById('display-certificates');
    certificatesContainer.innerHTML = '';
    certificates.forEach((certificate) => {
      const certificateElement = document.createElement('li');
      certificateElement.innerText = `${certificate.certificateName} (${certificate.certificateIssuer})`;
      certificatesContainer.appendChild(certificateElement);
    });
  // Populate projects
  const projectsContainer = document.getElementById("display-projects-container");
  projectsContainer.innerHTML = "";
  document.querySelectorAll("#projects-container .project-input").forEach(projectInput => {
    const projectName = projectInput.querySelector(".project-name").value;
    const projectUrl = projectInput.querySelector(".project-url").value;
    
    // Create a project display element with a name and link
    const projectDisplay = document.createElement("p");
    projectDisplay.innerHTML = `
      <strong>${projectName}:</strong>
      <a href="${projectUrl}" target="_blank">Source Code</a>
    `;
    projectsContainer.appendChild(projectDisplay);
  });
    // Hide the input form and show the resume section
// Show the resume section and hide the input section

// document.getElementById("resume-section").style.display = "flex";
// document.getElementById("input-section").style.display = "none";
document.getElementById("resume-section").style.display = "flex";
document.getElementById("input-section").style.display = "none";
// Populate resume fields with form data
  }
  // Function to print resume
function printResume() {
  window.print();
}

// Function to return to the edit form
function editResume() {
  document.getElementById("resume-section").style.display = "none";
  document.getElementById("input-section").style.display = "block";
}