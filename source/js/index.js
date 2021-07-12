(function() {

    // ##########  Variable and constante : ##########

    const toggleButton = document.getElementById('toggle-button');
    const sideBar = document.getElementById('side-bar');

    // ##########  My FUNCTION : ##########

    function show() {

        sideBar.classList.toggle('active');

    };

    // ##########  LISTENER  : ##########
    toggleButton.addEventListener('click', show);

})();