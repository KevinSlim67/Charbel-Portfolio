// Get reference to the projects list element
const projectsList = document.querySelector('.projects-slider');

// Fetch the data from the JSON file
fetch('projects.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(project => {
            const projectBox = generateProject(project);
            projectsList.appendChild(projectBox);
        });

        //configure slider settings
        $('.projects-slider').slick({
            centerMode: true,
            centerPadding: '20px',
            slidesToShow: 3,
            infinite: true,
            dots: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        infinite: true,
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '20px',
                        infinite: true,
                        slidesToShow: 1
                    }
                }
            ]
        });

        changeDescription();
        // tiltProjects();

        $('.projects-slider').on('afterChange', function (event, slick, direction) {
            changeDescription();
            // tiltProjects();
        });


        $('.projects-slider').on('swipe', function (event, slick, direction) {
            changeDescription();
            // tiltProjects();
        });

        //change project description text
        function changeDescription() {
            const projectDescriptionDiv = document.querySelector('#project-description');
            const selectedSlide = projectsList.querySelector('.slick-current .project-box');
            projectDescriptionDiv.innerHTML = selectedSlide.getAttribute('p-desc');
        }

        // function tiltProjects() {
        //     const currentSlide = document.querySelector('.slick-slide.slick-current');
        //     const nextSlide = currentSlide.nextSibling;
        //     const prevSlide = currentSlide.previousSibling;
        //     console.log(nextSlide);

        //     const nextSlideProject = nextSlide.querySelector('.project-box');
        //     const prevSlideProject = prevSlide.querySelector('.project-box');
        //     console.log(nextSlideProject);
        //     console.log(prevSlideProject);
         
        //     prevSlideProject.style.transform = 'perspective(1000px) rotateY(-60deg)';
        //     prevSlideProject.style.transition = 'all 0.3s ease';
          
        //     nextSlideProject.style.transform = 'perspective(1000px) rotateY(10deg)';
        //     nextSlideProject.style.transition = 'all 0.3s ease';
        //   }          
    })
    .catch(error => console.error(error));

function generateProject(project) {
    const { id, name, category, thumbnail, images, description, collaborator } = project;

    let collaboratorText = '';
    if (collaborator !== '') {
        collaboratorText = `Collaborated with<br><span>${collaborator}</span>`;
    }

    const projectBox = document.createElement('div');
    projectBox.classList.add('px-2');

    projectBox.innerHTML = `
            <a href="${thumbnail}" id="project-${id}" p-desc="${description}" class="project-box fancybox zoom-btn" data-fancybox="${id}">
                <div class="project-img">
                    <img src="${thumbnail}" alt="${name}" loading="lazy">
                </div>
                <div class="project-info">
                    <div class="collaboration">${collaboratorText}</div>
                    <h4>${name}</h4>
                    <h5>${category}</h5>
                </div>
            ${images.map(i => `<a data-fancybox="${id}" href="${i}" class="zoom-btn project-image invisible"></a>`).join('')}
            </a>
        `;

    return projectBox;
}

// Get reference to the rooms list element
const roomsList = document.getElementById('grid-container');

// Fetch the data from the JSON file
fetch('rooms.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(room => {
            const roomBox = generateRoom(room);
            roomsList.appendChild(roomBox);
        });

        $(".grid-container").each(function () {
            var e = $(this);
            (function () {
                var $grid = e.isotope({
                    layoutMode: "masonry",
                    originLeft: true
                });

                $(".filter-buttons").find("button").on("click", function () {
                    var filterValue = $(this).attr("data-filter");
                    console.log(filterValue)
                    return $(".filter-buttons").find("button").removeClass("active"), $(this).addClass("active"),
                        $grid.isotope({
                            filter: filterValue
                        }), !1
                });

                //starts the grid with the living-space items first
                $grid.isotope({
                    filter: '.living-space'
                }), !1
            })();

        });
    })
    .catch(error => console.error(error));


function generateRoom(room) {
    const { id, name, category, thumbnail, images, categoryClass } = room;

    const roomBox = document.createElement('div');
    roomBox.classList.add('cbp-item', 'col-lg-4', 'col-sm-6', 'col-12', 'm-0', 'p-2', categoryClass);

    roomBox.innerHTML = `
            <a href="${thumbnail}" class="room-box fancybox zoom-btn" data-fancybox="${id}">
            <div class="room-img">
                <img src="${thumbnail}" alt="${name}" loading="lazy">
            </div>

            <div class="room-content">
                <i class="room-icon bi bi-search"></i>
                <div class="bottom">
                    
                </div>
            </div>

            ${images.map(i => `<a data-fancybox="${id}" href="${i}" class="zoom-btn rooms-image invisible"></a>`).join('')}
        </a>
    `;

    return roomBox;
}

