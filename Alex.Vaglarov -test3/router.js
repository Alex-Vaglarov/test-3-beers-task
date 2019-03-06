function router() {

    if (localStorage.getItem('loggedUser') == null) {
        userController();
        return;
    }
    
    let page = location.hash.split('=')[1];

    if (page && page.includes('details')) {
        const id = page.split('_')[1];
        detailsController(id);
        return;
    }

    switch (page) {
        case 'home_1':
            homeController(1);
            break;
        
        case 'home_2':
            homeController(2);
            break;
        
        case 'home_3':
            homeController(3);
            break;
        
        case 'login':
            userController();
            break;

        default:
            userController();
            break;
    }
}

$(window).on('hashchange', router);
router();