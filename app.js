//mouse grab slider

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed here
    slider.scrollLeft = scrollLeft - walk;
});


//galery tags
const images = {
    all: [
        { src: '../img/landscape/landscape1.jpeg', category: 'landscape' },
        { src: '../img/night/night1.jpeg', category: 'night' },
        { src: '../img/people/people1.jpeg', category: 'people' },
        { src: '../img/sports/sports1.jpeg', category: 'sports' },
        { src: '../img/portraits/portrait1.jpeg', category: 'portraits' },
        { src: '../img/people/people2.jpeg', category: 'people' },
        { src: '../img/landscape/landscape2.jpeg', category: 'landscape' },
        { src: '../img/people/people3.jpeg', category: 'people' },
        { src: '../img/night/night2.jpeg', category: 'night' },
        { src: '../img/portraits/portrait2.jpeg', category: 'portraits' },
        { src: '../img/fashion/fashion1.jpeg', category: 'fashion' },
        { src: '../img/sports/sports2.jpeg', category: 'sports' },
        { src: '../img/people/people4.jpeg', category: 'people' },
        { src: '../img/architecture/architecture1.jpeg', category: 'architecture' },
        { src: '../img/night/night3.jpeg', category: 'night' },
        { src: '../img/people/people5.jpeg', category: 'people' },
        { src: '../img/food/food1.jpeg', category: 'food' },
        { src: '../img/landscape/landscape3.jpeg', category: 'landscape' },
        { src: '../img/sports/sports3.jpeg', category: 'sports' },
        { src: '../img/portraits/portrait3.jpeg', category: 'portraits' },
        { src: '../img/architecture/architecture2.jpeg', category: 'architecture' },
        { src: '../img/fashion/fashion2.jpeg', category: 'fashion' },
        { src: '../img/architecture/architecture3.jpeg', category: 'architecture' },
        { src: '../img/night/night4.jpeg', category: 'night' },
        { src: '../img/landscape/landscape4.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape5.jpeg', category: 'landscape' },
        { src: '../img/food/food2.jpeg', category: 'food' },
        { src: '../img/architecture/architecture4.gif', category: 'architecture' },
        { src: '../img/night/night5.jpeg', category: 'night' },
        { src: '../img/portraits/portrait4.jpeg', category: 'portraits' },
        { src: '../img/sports/sports4.jpeg', category: 'sports' },
        { src: '../img/fashion/fashion3.jpeg', category: 'fashion' },
        { src: '../img/food/food3.jpeg', category: 'food' },
        { src: '../img/architecture/architecture5.jpeg', category: 'architecture' },
        { src: '../img/night/night6.jpeg', category: 'night' },
        { src: '../img/people/people6.jpeg', category: 'people' },
        { src: '../img/sports/sports5.jpeg', category: 'sports' },
        { src: '../img/architecture/architecture6.jpeg', category: 'architecture' },
        { src: '../img/portraits/portrait5.jpeg', category: 'portraits' },
        { src: '../img/fashion/fashion4.jpeg', category: 'fashion' },
        { src: '../img/architecture/architecture7.jpeg', category: 'architecture' },
        { src: '../img/night/night7.jpeg', category: 'night' },
        { src: '../img/food/food4.jpeg', category: 'food' },
        { src: '../img/sports/sports6.jpeg', category: 'sports' },
        { src: '../img/architecture/architecture8.jpeg', category: 'architecture' },
        { src: '../img/landscape/landscape6.jpeg', category: 'landscape' },
        { src: '../img/people/people7.jpeg', category: 'people' },
        { src: '../img/night/night8.jpeg', category: 'night' },
        { src: '../img/fashion/fashion5.jpeg', category: 'fashion' },
        { src: '../img/food/food5.jpeg', category: 'food' },
        { src: '../img/landscape/landscape7.jpeg', category: 'landscape' },
        { src: '../img/sports/sports7.jpeg', category: 'sports' },
        { src: '../img/portraits/portrait6.jpeg', category: 'portraits' },
        { src: '../img/sports/sports8.jpeg', category: 'sports' },
        { src: '../img/fashion/fashion6.jpeg', category: 'fashion' },
        { src: '../img/night/night9.jpeg', category: 'night' },
        { src: '../img/sports/sports9.jpeg', category: 'sports' },
        { src: '../img/food/food6.jpeg', category: 'food' },
    ],
    people: [
        { src: '../img/people/people1.jpeg', category: 'people' },
        { src: '../img/people/people2.jpeg', category: 'people' },
        { src: '../img/people/people3.jpeg', category: 'people' },
        { src: '../img/people/people4.jpeg', category: 'people' },
        { src: '../img/people/people5.jpeg', category: 'people' },
        { src: '../img/people/people6.jpeg', category: 'people' },
        { src: '../img/people/people7.jpeg', category: 'people' },

    ],
    landscape: [
        { src: '../img/landscape/landscape1.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape2.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape3.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape4.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape5.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape6.jpeg', category: 'landscape' },
        { src: '../img/landscape/landscape7.jpeg', category: 'landscape' },

    ],
    fashion: [
        { src: '../img/fashion/fashion1.jpeg', category: 'fashion' },
        { src: '../img/fashion/fashion2.jpeg', category: 'fashion' },
        { src: '../img/fashion/fashion3.jpeg', category: 'fashion' },
        { src: '../img/fashion/fashion4.jpeg', category: 'fashion' },
        { src: '../img/fashion/fashion5.jpeg', category: 'fashion' },
        { src: '../img/fashion/fashion6.jpeg', category: 'fashion' },

    ],
    architecture: [
        { src: '../img/architecture/architecture1.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture2.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture3.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture4.gif', category: 'architecture' },
        { src: '../img/architecture/architecture5.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture6.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture7.jpeg', category: 'architecture' },
        { src: '../img/architecture/architecture8.jpeg', category: 'architecture' },

    ],
    portraits: [
        { src: '../img/portraits/portrait1.jpeg', category: 'portraits' },
        { src: '../img/portraits/portrait2.jpeg', category: 'portraits' },
        { src: '../img/portraits/portrait3.jpeg', category: 'portraits' },
        { src: '../img/portraits/portrait4.jpeg', category: 'portraits' },
        { src: '../img/portraits/portrait5.jpeg', category: 'portraits' },
        { src: '../img/portraits/portrait6.jpeg', category: 'portraits' },

    ],
    food: [
        { src: '../img/food/food1.jpeg', category: 'food' },
        { src: '../img/food/food2.jpeg', category: 'food' },
        { src: '../img/food/food3.jpeg', category: 'food' },
        { src: '../img/food/food4.jpeg', category: 'food' },
        { src: '../img/food/food5.jpeg', category: 'food' },
        { src: '../img/food/food6.jpeg', category: 'food' },

    ],
    night: [
        { src: '../img/night/night1.jpeg', category: 'night' },
        { src: '../img/night/night2.jpeg', category: 'night' },
        { src: '../img/night/night3.jpeg', category: 'night' },
        { src: '../img/night/night4.jpeg', category: 'night' },
        { src: '../img/night/night5.jpeg', category: 'night' },
        { src: '../img/night/night6.jpeg', category: 'night' },
        { src: '../img/night/night7.jpeg', category: 'night' },
        { src: '../img/night/night8.jpeg', category: 'night' },
        { src: '../img/night/night9.jpeg', category: 'night' },
    ],
    sports: [
        { src: '../img/sports/sports1.jpeg', category: 'sports' },
        { src: '../img/sports/sports2.jpeg', category: 'sports' },
        { src: '../img/sports/sports3.jpeg', category: 'sports' },
        { src: '../img/sports/sports4.jpeg', category: 'sports' },
        { src: '../img/sports/sports5.jpeg', category: 'sports' },
        { src: '../img/sports/sports6.jpeg', category: 'sports' },
        { src: '../img/sports/sports7.jpeg', category: 'sports' },
        { src: '../img/sports/sports8.jpeg', category: 'sports' },
        { src: '../img/sports/sports9.jpeg', category: 'sports' },

     ],
    
};

function showImages(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const categoryImages = category === 'all' ? images.all : images[category] || [];

    categoryImages.forEach(img => {
        // Create the gallery item container
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        // Create the image element
        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        galleryItem.appendChild(imgElement);

        // Create the overlay with the download option
        const overlay = document.createElement('div');
        overlay.classList.add('download-overlay');
        overlay.innerHTML = `
            <a href="${img.src}" download class="download-button"><i class="fa-solid fa-download"></i></a>
        `;
        galleryItem.appendChild(overlay);

        // Append the gallery item to the gallery container
        gallery.appendChild(galleryItem);
    });
}

// Initially load images for the "all" category
showImages('all');

//seach
function searchImages() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredImages = images.all.filter(img =>
        img.category.toLowerCase().includes(input)
    );

    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    filteredImages.forEach(img => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        galleryItem.appendChild(imgElement);

        const overlay = document.createElement('div');
        overlay.classList.add('download-overlay');
        overlay.innerHTML = `<a href="${img.src}" download class="download-button"><i class="fa-solid fa-download"></i></a>`;
        galleryItem.appendChild(overlay);

        gallery.appendChild(galleryItem);
    });
}
//carousel
function showSwiper(id) {
    // Hide all sliders
    const sliders = document.querySelectorAll('.fadeanimation');
    sliders.forEach(slider => {
        slider.style.display = 'none';
    });

    // Clear previous content in modal
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '<button class="close-btn" onclick="closeModal()">Close</button>'; // Add close button

    // Show the selected slider
    const selectedSlider = document.getElementById(id);
    if (selectedSlider) {
        const sliderClone = selectedSlider.cloneNode(true);
        sliderClone.style.display = 'block'; // Ensure the cloned slider is visible
        modalContent.appendChild(sliderClone);

        // Create and append download button
        const downloadButton = document.createElement('button');
        downloadButton.className = 'download-button';
        downloadButton.textContent = 'Download Image';
        downloadButton.onclick = () => downloadImage(getImagePath(id));
        modalContent.appendChild(downloadButton);
    }

    // Show the modal
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function downloadImage(imagePath) {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = imagePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to get the image path based on slider ID
function getImagePath(id) {
    // Return the path based on the slider ID
    switch(id) {
        case 'image-type-1': return './img/high resolution5.jpg';
        case 'image-type-2': return './img/vector5.jpeg';
        case 'image-type-3': return './img/stock photos5.jpeg';
        case 'image-type-4': return './img/illustrations5.jpeg';
        case 'image-type-5': return './img/icons5.jpeg';
        case 'image-type-6': return './img/backgrounds5.jpeg';
        case 'image-type-7': return './img/patterns5.jpeg';
        case 'image-type-8': return './img/textures5.jpeg';
        default: return '';
    }
}





