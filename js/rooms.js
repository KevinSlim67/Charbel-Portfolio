// Get reference to the rooms list element
const roomsList = document.getElementById('rooms-list');

// Fetch the data from the JSON file
fetch('rooms.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(room => {
            const roomBox = generateroom(room);
            roomsList.appendChild(roomBox);
        });
    })
    .catch(error => console.error(error));


function generateroom(room) {
    const { id, name, category, thumbnail, images, categoryClass } = room;

    const roomBox = document.createElement('div');
    roomBox.classList.add('grid-item', 'col-lg-4', 'col-sm-6', 'col-12', 'm-0', 'p-2', categoryClass);

    roomBox.innerHTML = `
            <a href="${thumbnail}" class="room-box fancybox zoom-btn" data-fancybox="${id}">
            <div class="room-img">
                <img src="${thumbnail}" alt="${name}">
            </div>

            <div class="room-content">
                <div class="bottom">
                    <h5>${category}</h5>
                    <h4>${name}</h4>
                </div>
            </div>

            ${images.map(i =>  `<a data-fancybox="${id}" href="${i}" class="zoom-btn rooms-image invisible"></a>`).join('')}
        </a>
    `;

    return roomBox;
}
