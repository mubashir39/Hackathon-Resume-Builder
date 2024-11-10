const maxExpertise = 5;
const maxProjects = 5;
const maxCertificates = 3;
const maxEducation = 4;
const maxLanguages = 2; // Set values accordingly

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
  
  // Check if the number of skills does not exceed maxExpertise
  if (skillsContainer.children.length < maxExpertise) {
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
  } else {
    alert('You can only add up to ' + maxExpertise + ' skills.');
  }
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

  // Check if the number of certificates does not exceed maxCertificates
  if (certificatesContainer.children.length < maxCertificates) {
    const certificateDiv = document.createElement('div');
    certificateDiv.classList.add('certificate-input');
    certificateDiv.innerHTML = `
      <input type="text" class="certificate-name" placeholder="Certificate Name" required />
      <input type="text" class="certificate-issuer" placeholder="Issuer (e.g., Udemy)" required />
    `;
    
    certificatesContainer.appendChild(certificateDiv);
  } else {
    alert('You can only add up to ' + maxCertificates + ' certificates.');
  }
}

let educationCount = 1;

function addEducationEntry() {
  educationCount++;
  const educationForm = document.getElementById('education-form');

  // Check if the number of education entries does not exceed maxEducation
  if (educationForm.children.length < maxEducation) {
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
  } else {
    alert('You can only add up to ' + maxEducation + ' education entries.');
  }
}

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

  // Check if the number of projects does not exceed maxProjects
  if (projectsContainer.children.length < maxProjects) {
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
  } else {
    alert('You can only add up to ' + maxProjects + ' projects.');
  }
}

function addLanguage() {
  const languageContainer = document.getElementById('language-container');

  // Check if the number of languages does not exceed maxLanguages
  if (languageContainer.children.length < maxLanguages) {
    // Create new language input fields
    const languageDiv = document.createElement('div');
    languageDiv.classList.add('language-input');
    languageDiv.innerHTML = `
      <input type="text" class="language-name" placeholder="Language (e.g., English)" required />
    `;

    languageContainer.appendChild(languageDiv);
  } else {
    alert('You can only add up to ' + maxLanguages + ' languages.');
  }
}

function generateResume() {
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

  // Collect languages
  const languages = [];
  const languageInputs = document.querySelectorAll('.language-input');
  languageInputs.forEach((input) => {
    const languageName = input.querySelector('.language-name').value;
    languages.push(languageName);
  });

  // Assign values to display elements
  document.getElementById("display-name").textContent = name;
  document.getElementById("display-position").textContent = position;
  document.getElementById("display-about").textContent = about;
  document.getElementById("display-email").textContent = email;
  document.getElementById("display-phone").textContent = phone;
  document.getElementById("display-address").textContent = address;
  document.getElementById("display-reference").textContent = reference;

  // Update skills, portfolio, certificates, education, and languages display
  displaySkills(skills);
  displayPortfolioLinks(portfolioLinks);
  displayCertificates(certificates);
  displayEducation(educationDetails);
  displayLanguages(languages);
}

function displaySkills(skills) {
  const skillsList = document.getElementById('display-skills');
  skillsList.innerHTML = '';
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill');
    skillItem.innerHTML = `${skill.skillName}: ${skill.skillPercent}%`;
    skillsList.appendChild(skillItem);
  });
}

function displayPortfolioLinks(portfolioLinks) {
  const portfolioList = document.getElementById('display-portfolio');
  portfolioList.innerHTML = '';
  portfolioLinks.forEach(link => {
    const linkItem = document.createElement('div');
    linkItem.classList.add('portfolio-link');
    linkItem.innerHTML = `<a href="${link.portfolioUrl}" target="_blank">${link.portfolioName}</a>`;
    portfolioList.appendChild(linkItem);
  });
}

function displayCertificates(certificates) {
  const certificatesList = document.getElementById('display-certificates');
  certificatesList.innerHTML = '';
  certificates.forEach(cert => {
    const certItem = document.createElement('div');
    certItem.classList.add('certificate');
    certItem.innerHTML = `${cert.certificateName} by ${cert.certificateIssuer}`;
    certificatesList.appendChild(certItem);
  });
}

function displayEducation(educationDetails) {
  const educationList = document.getElementById('display-education');
  educationList.innerHTML = '';
  educationDetails.forEach(edu => {
    const eduItem = document.createElement('div');
    eduItem.classList.add('education');
    eduItem.innerHTML = `${edu.degree} at ${edu.institution}, ${edu.yearStart} - ${edu.yearEnd}`;
    educationList.appendChild(eduItem);
  });
}

function displayLanguages(languages) {
  const languagesList = document.getElementById('display-languages');
  languagesList.innerHTML = '';
  languages.forEach(lang => {
    const langItem = document.createElement('div');
    langItem.classList.add('language');
    langItem.innerHTML = lang;
    languagesList.appendChild(langItem);
  });
}

document.getElementById("generate-resume").addEventListener('click', generateResume);
