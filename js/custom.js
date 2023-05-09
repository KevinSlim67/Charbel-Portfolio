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

        $('.projects-slider').on('afterChange', function (event, slick, direction) {
            changeDescription();
        });

        
        $('.projects-slider').on('swipe', function (event, slick, direction) {
            changeDescription();
        });

        //change project description text
        function changeDescription() {
            const projectDescriptionDiv = document.querySelector('#project-description');
            const selectedSlide = projectsList.querySelector('.slick-current .project-box');
            projectDescriptionDiv.innerHTML = selectedSlide.getAttribute('p-desc');
        }
    })
    .catch(error => console.error(error));

function generateProject(project) {
    const { id, name, category, thumbnail, images, description } = project;

    const projectBox = document.createElement('div');
    projectBox.classList.add('px-2');
    projectBox.setAttribute('id', `project-${id}`);
    projectBox.setAttribute('p-desc', description);

    projectBox.innerHTML = `
                <a href="${thumbnail}" id="project-${id}" p-desc="${description}" class="project-box fancybox zoom-btn" data-fancybox="p-${id}">
                    <div class="project-img">
                        <img src="${thumbnail}" alt="${name}">
                    </div>
                    <div class="project-info">
                        <h4>${name}</h4>
                        <h5>${category}</h5>
                    </div>
    
                ${images.map(i => `<a data-fancybox="p-${id}" href="${i}" class="zoom-btn rooms-image invisible"></a>`).join('')}
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
                    return $(".filter-buttons").find("button").removeClass("active"), $(this).addClass("active"),
                        $grid.isotope({
                            filter: filterValue
                        }), !1
                });
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
                <div class="bottom">
                    <h4>${category}</h4>
                </div>
            </div>

            ${images.map(i => `<a data-fancybox="${id}" href="${i}" class="zoom-btn rooms-image invisible"></a>`).join('')}
        </a>
    `;

    return roomBox;
}
