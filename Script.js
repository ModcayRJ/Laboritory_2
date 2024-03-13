const projects = document.querySelectorAll(".project");
let currentIndex = 0;

function showProject(index) {
    projects.forEach((project, i) => {
        if (i === index) {
            project.classList.add("active");
            project.style.maxHeight = project.scrollHeight + "px";
        } else {
            project.classList.remove("active");
            project.style.maxHeight = 0;
        }
    });
}

function toggleProject(index) {
    if (projects[index].classList.contains("active")) {
        projects[index].classList.remove("active");
        projects[index].style.maxHeight = 0;
    } else {
        showProject(index);
    }
}

document.querySelector(".next-btn").addEventListener("click", () => {
    toggleProject(currentIndex);
    currentIndex++;
    if (currentIndex >= projects.length) {
        currentIndex = 0;
    }
    toggleProject(currentIndex);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
    toggleProject(currentIndex);
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = projects.length - 1;
    }
    toggleProject(currentIndex);
});

showProject(currentIndex);

