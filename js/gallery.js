// масив об'єктів зображень
const images = [
    {
        preview: 'image1-pre.jpg',
        original: 'image1.jpg',
        description: 'Кіт 1',
    },
    {
        preview: 'image2-pre.jpg',
        original: 'image2.jpg',
        description: 'Кіт 2',
    },
    {
        preview: 'image3-pre.jpg',
        original: 'image3.jpg',
        description: 'Кіт 3',
    },
    {
        preview: 'image4-pre.jpg',
        original: 'image4.jpg',
        description: 'Кіт 4',
    },
    {
        preview: 'image5-pre.jpg',
        original: 'image5.jpg',
        description: 'Кіт 5',
    },
    {
        preview: 'image6-pre.jpg',
        original: 'image6.jpg',
        description: 'Кіт 6',
    }
];

const galleryContainer = document.querySelector('.gallery');
// розмітки для кожного зображення в галереї на основі даних масиву
const galleryMarkup = images.map(({ preview, original, description }) => {
    return `
        <li class="gallery-item">
            <img src="${preview}" data-source="${original}" alt="${description}">
        </li>
    `;
}).join('');
// вставка зображення всередину контейнера галереї
galleryContainer.innerHTML = galleryMarkup;
// обробник подій на клік для контейнера галереї
galleryContainer.addEventListener('click', event => {
    event.preventDefault();
    const { target } = event;
    // перевірка, чи клікнули саме на зображення
    if (target.nodeName !== 'IMG') return;
    // посилання на оригінальне зображення з датасету
    const originalImageURL = target.dataset.source;
    console.log(originalImageURL);
    // екземпляр модального вікна basicLightbox з великим зображенням
    const instance = basicLightbox.create(`
        <img src="${originalImageURL}" alt="${target.alt}">
    `);

    instance.show();
});
