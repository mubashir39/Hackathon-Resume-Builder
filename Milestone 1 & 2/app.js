// Function to show sections by default and toggle visibility
document.addEventListener("DOMContentLoaded", function () {
    var sectionsToShow = [
        'contact',
        'expertise',
        'links',
        'language',
        'about',
        'education',
        'certificates',
        'projects'
    ];
    sectionsToShow.forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            section.style.display = "block"; // Show section by default
        }
    });
});
// Toggle section visibility
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = section.style.display === "block" ? "none" : "block";
    }
}
