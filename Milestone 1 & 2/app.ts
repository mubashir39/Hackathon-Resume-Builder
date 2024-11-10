// Function to show sections by default and toggle visibility
document.addEventListener("DOMContentLoaded", () => {
  const sectionsToShow: string[] = [
    'contact', 
    'expertise', 
    'links', 
    'language', 
    'about', 
    'education', 
    'certificates', 
    'projects'
  ];
  
  sectionsToShow.forEach(sectionId => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.style.display = "block"; // Show section by default
    }
  });
});

// Toggle section visibility
function toggleSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = section.style.display === "block" ? "none" : "block";
  }
}
