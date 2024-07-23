$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// function DynamicImg() {
//     document.addEventListener('DOMContentLoaded', () => {
//         const images = document.querySelectorAll('img');
    
//         images.forEach(img => {
//             img.setAttribute('srcset', 'image-small.jpg 480w, image-medium.jpg 768w, image-large.jpg 1200w');
//             img.setAttribute('sizes', '(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw');
//         });
//     });
   
// }

// DynamicImg()
// revoir peut etre solution dynamic 