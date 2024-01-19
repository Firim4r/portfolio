/* --------------------------------------- MAIN --------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
    const customCursor = document.querySelector('.custom-cursor');

    document.addEventListener('mousemove', function (e) {
        // Met à jour la position de la div en fonction de la position de la souris
        customCursor.style.left = e.pageX + 'px';
        customCursor.style.top = e.pageY + 'px';
    });

    function cursorHover(query){
        const links = document.querySelectorAll(query);
        const customCursor = document.getElementById('cursor');

        links.forEach(link => {
            link.addEventListener('mouseenter', function () {
                customCursor.classList.add('hovered');
                customCursor.classList.remove('custom-cursor');
            });

            link.addEventListener('mouseleave', function () {
                customCursor.classList.add('custom-cursor');
                customCursor.classList.remove('hovered');
            });
        });
    }

    /* --------------------------------------- INDEX --------------------------------------- */
    cursorHover('.Works i');
    cursorHover('.Carrousel > button');
    /* --------------------------------------- END INDEX --------------------------------------- */

});

/* --------------------------------------- END MAIN --------------------------------------- */