// Selecting elements
const userNameInput = document.getElementById('user-name-input') as HTMLInputElement;
const userPositionInput = document.getElementById('user-position-input') as HTMLInputElement;
const userAboutInput = document.getElementById('user-about-input') as HTMLTextAreaElement;
const userEmailInput = document.getElementById('user-email') as HTMLInputElement;
const userPhoneInput = document.getElementById('user-phone') as HTMLInputElement;
const userAddressInput = document.getElementById('user-address') as HTMLInputElement;
const userProfilePicInput = document.getElementById('user-profile-picture') as HTMLInputElement;

const displayLanguagesContainer = document.getElementById('display-languages-container') as HTMLUListElement;
const displaySkillsContainer = document.getElementById('display-skills-container') as HTMLDivElement;
const displayPortfolioLinks = document.getElementById('display-portfolio-links') as HTMLUListElement;
const displayCertificates = document.getElementById('display-certificates') as HTMLUListElement;
const displayEducation = document.getElementById('display-education-container') as HTMLDivElement;

const inputSection = document.getElementById('input-section') as HTMLDivElement;
const resumeSection = document.getElementById('resume-section') as HTMLDivElement;

// Arrays to store data
let languages: string[] = [];
let skills: { name: string, percent: number }[] = [];
let portfolios: { name: string, url: string }[] = [];
let certificates: { name: string, issuer: string }[] = [];
let education: { degree: string, institution: string, startYear: number, endYear: number }[] = [];

// Function to add language
function addLanguage() {
  const languageInput = document.getElementById('user-language-input') as HTMLInputElement;
  if (languageInput.value) {
    languages.push(languageInput.value);
    languageInput.value = '';
    updateLanguagesDisplay();
  }
}

// Function to update languages display
function updateLanguagesDisplay() {
  displayLanguagesContainer.innerHTML = '';
  languages.forEach(lang => {
    const li = document.createElement('li');
    li.textContent = lang;
    displayLanguagesContainer.appendChild(li);
  });
}

// Function to add skill
function addSkill() {
  const skillNameInput = document.querySelector('.skill-name') as HTMLInputElement;
  const skillPercentInput = document.querySelector('.skill-percent') as HTMLInputElement;
  if (skillNameInput.value && skillPercentInput.value) {
    skills.push({
      name: skillNameInput.value,
      percent: Number(skillPercentInput.value),
    });
    skillNameInput.value = '';
    skillPercentInput.value = '';
    updateSkillsDisplay();
  }
}

// Function to update skills display
function updateSkillsDisplay() {
  displaySkillsContainer.innerHTML = '';
  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill-entry');
    skillDiv.innerHTML = `${skill.name}: <div class="progress-bar"><div class="progress" style="width: ${skill.percent}%"></div></div>`;
    displaySkillsContainer.appendChild(skillDiv);
  });
}

// Function to add portfolio link
function addPortfolio() {
  const portfolioNameInput = document.querySelector('.portfolio-name') as HTMLInputElement;
  const portfolioUrlInput = document.querySelector('.portfolio-url') as HTMLInputElement;
  if (portfolioNameInput.value && portfolioUrlInput.value) {
    portfolios.push({
      name: portfolioNameInput.value,
      url: portfolioUrlInput.value,
    });
    portfolioNameInput.value = '';
    portfolioUrlInput.value = '';
    updatePortfolioDisplay();
  }
}

// Function to update portfolio links display
function updatePortfolioDisplay() {
  displayPortfolioLinks.innerHTML = '';
  portfolios.forEach(portfolio => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${portfolio.url}" target="_blank">${portfolio.name}</a>`;
    displayPortfolioLinks.appendChild(li);
  });
}

// Function to add certificate
function addCertificate() {
  const certificateNameInput = document.querySelector('.certificate-name') as HTMLInputElement;
  const certificateIssuerInput = document.querySelector('.certificate-issuer') as HTMLInputElement;
  if (certificateNameInput.value && certificateIssuerInput.value) {
    certificates.push({
      name: certificateNameInput.value,
      issuer: certificateIssuerInput.value,
    });
    certificateNameInput.value = '';
    certificateIssuerInput.value = '';
    updateCertificatesDisplay();
  }
}

// Function to update certificates display
function updateCertificatesDisplay() {
  displayCertificates.innerHTML = '';
  certificates.forEach(certificate => {
    const li = document.createElement('li');
    li.textContent = `${certificate.name} by ${certificate.issuer}`;
    displayCertificates.appendChild(li);
  });
}

// Function to add education
function addEducation() {
  const degreeInput = document.querySelector('.education-degree') as HTMLInputElement;
  const institutionInput = document.querySelector('.education-institution') as HTMLInputElement;
  const startYearInput = document.querySelector('.education-year-start') as HTMLInputElement;
  const endYearInput = document.querySelector('.education-year-end') as HTMLInputElement;
  if (degreeInput.value && institutionInput.value && startYearInput.value && endYearInput.value) {
    education.push({
      degree: degreeInput.value,
      institution: institutionInput.value,
      startYear: Number(startYearInput.value),
      endYear: Number(endYearInput.value),
    });
    degreeInput.value = '';
    institutionInput.value = '';
    startYearInput.value = '';
    endYearInput.value = '';
    updateEducationDisplay();
  }
}

// Function to update education display
function updateEducationDisplay() {
  displayEducation.innerHTML = '';
  education.forEach(ed => {
    const div = document.createElement('div');
    div.innerHTML = `${ed.degree}, ${ed.institution} (${ed.startYear} - ${ed.endYear})`;
    displayEducation.appendChild(div);
  });
}

// Function to generate the resume
function generateResume() {
  if (userNameInput.value && userPositionInput.value && userEmailInput.value) {
    inputSection.style.display = 'none';
    resumeSection.style.display = 'block';

    // Display Resume Data
    const resumeContainer = document.getElementById('resume-section') as HTMLDivElement;

    // Create profile section with name, position, and profile picture
    resumeContainer.innerHTML = `
      <h1>${userNameInput.value} - ${userPositionInput.value}</h1>
      <p>Email: ${userEmailInput.value}</p>
      <p>Phone: ${userPhoneInput.value}</p>
      <p>Address: ${userAddressInput.value}</p>
      <h3>About Me</h3>
      <p>${userAboutInput.value}</p>
      <h3>Languages</h3>
      <ul>${languages.map(lang => `<li>${lang}</li>`).join('')}</ul>
      <h3>Skills</h3>
      ${skills.map(skill => `<p>${skill.name}: <span style="width:${skill.percent}%">${skill.percent}%</span></p>`).join('')}
      <h3>Portfolios</h3>
      <ul>${portfolios.map(portfolio => `<li><a href="${portfolio.url}" target="_blank">${portfolio.name}</a></li>`).join('')}</ul>
      <h3>Certificates</h3>
      <ul>${certificates.map(certificate => `<li>${certificate.name} by ${certificate.issuer}</li>`).join('')}</ul>
      <h3>Education</h3>
      <ul>${education.map(ed => `<li>${ed.degree} from ${ed.institution} (${ed.startYear} - ${ed.endYear})</li>`).join('')}</ul>
    `;
  }
}

// Add event listener for generating the resume
document.getElementById('generate-btn')?.addEventListener('click', generateResume);
