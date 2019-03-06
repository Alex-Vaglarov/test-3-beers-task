function homeController(page) {
    $.get('home/home.htm').then(text => {
        $('main').html(text);

        $.get('home/beers.htm').then(data => {
            const template = Handlebars.compile(data);
            
            beersStorage.getBeers(page).then(beers => {
                // console.log(page);
                // console.log(beers);
                beers.forEach(beer => {
                    const html = template(beer);
                    $('#allBeers').append($(html));
                });

            $('#random').on('click', function() {
                let currentBeer = null;

                beersStorage.getRandomBeer().then(beer => {
                    currentBeer = beer;
                    // console.log(beer)
                    // console.log(currentBeer[0].id)
                    location.replace('#page=details_' + currentBeer[0].id);
                });
            });

            $('#foodPairs').on('click', function(event) {
                event.preventDefault();

                const currentFood = $('input[type=radio]:checked').val();
                // console.log(currentFood);
                $('#allBeers').html('');
                
                beersStorage.filterByFood(currentFood).then(beersByFood => {
                    // console.log(beersByFood);
                    beersByFood.forEach(beer => {
                        const html = template(beer);
                        $('#allBeers').append($(html));
                    });
                });
            });

            $('#asc').on('click', function() {
                const sortedArray = beersStorage.sortAscending();
                
                $('#allBeers').html('');
                sortedArray.forEach(beer => {
                    const html = template(beer);
                    $('#allBeers').append($(html));
                });
            });
            
            $('#desc').on('click', function() {
                const sortedArray = beersStorage.sortDescending();
                
                $('#allBeers').html('');
                sortedArray.forEach(beer => {
                    const html = template(beer);
                    $('#allBeers').append($(html));
                });
            });

            });
        });
    });
}