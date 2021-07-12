(function() {

    // ##########  Variable and constante : ##########

    const toggleButton = document.getElementById('toggle-button');
    const sideBar = document.getElementById('side-bar');
    const content = document.querySelector('.content');

    // ##########  My FUNCTION : ##########

    function show() {

        sideBar.classList.toggle('active');
        content.classList.toggle('active2');

    };

    // ##########  LISTENER  : ##########
    toggleButton.addEventListener('click', show);

    content.addEventListener('click', () => {

        sideBar.classList.remove('active');
        content.classList.remove('active2');

    });

})();