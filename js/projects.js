// Get reference to the projects list element
const projectsList = document.getElementById('projects-list');

// Fetch the data from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectBox = generateProject(project);
            projectsList.appendChild(projectBox);
        });
    })
    .catch(error => console.error(error));


function generateProject(project) {
    const { id, name, category, thumbnail, images, categoryClass } = project;

    const projectBox = document.createElement('div');
    projectBox.classList.add('grid-item', 'col-lg-4', 'col-sm-6', 'col-12', 'm-0', 'p-2');

    projectBox.innerHTML = `
            <a href="${thumbnail}" class="project-box ${categoryClass} fancybox zoom-btn" data-fancybox="${id}">
            <div class="project-img">
                <img src="${thumbnail}" alt="${name}">
            </div>

            <div class="project-content">
                <div class="bottom">
                    <h5>${category}</h5>
                    <h4>${name}</h4>
                </div>
            </div>

            ${images.map(i =>  `<a data-fancybox="${id}" href="${i}" class="zoom-btn projects-image invisible"></a>`).join('')}
        </a>
    `;

    return projectBox;
}
