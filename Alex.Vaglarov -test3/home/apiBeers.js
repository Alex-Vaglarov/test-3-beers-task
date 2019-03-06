const beersStorage = (function() {

    let beers = null;

    function getBeers(page) {

        return new Promise((resolve, reject) => {
            fetch('https://api.punkapi.com/v2/beers?page=' + page +'&per_page=30')
            .then(res => {
                beers = res.json();
                resolve(beers);
            })
            .catch(err => reject(err))
        });
    }

    function getBeerById(id) {
        const allBeers = JSON.parse(sessionStorage.getItem('beers'));
        let currentBeer = null;
        allBeers.forEach(beer => {
            if (beer.id == id) {
                currentBeer = beer;
            }
        });
        return currentBeer;
    }

    function sortAscending() {
        let allBeers = JSON.parse(sessionStorage.getItem('beers'));
        allBeers.sort( (b1, b2) => {
            if (b1.name > b2.name) {
                return 1;
            }
            if (b1.name < b2.name) {
                return -1;
            }
            return 0;
        });
        return allBeers;
    }
    
    function sortDescending() {
        let allBeers = JSON.parse(sessionStorage.getItem('beers'));
        allBeers.sort( (b1, b2) => {
            if (b1.name < b2.name) {
                return 1;
            }
            if (b1.name > b2.name) {
                return -1;
            }
            return 0;
        });
        return allBeers;
    }

    function getRandomBeer() {

        let beer = null;

        return new Promise((resolve, reject) => {
            fetch('https://api.punkapi.com/v2/beers/random')
            .then(res => {
                beer = res.json();
                resolve(beer);
            })
            .catch(err => reject(err))
        });
    }

    function filterByFood(food) {       // fixed
        let beersByFood = null;

        return new Promise((resolve, reject) => {
            fetch('https://api.punkapi.com/v2/beers?food=' + food)
            .then(res => {
                beersByFood = res.json();
                resolve(beersByFood);
            })
            .catch(err => reject(err))
        });       
    }

    return { getBeers, getBeerById, getRandomBeer, filterByFood, sortAscending, sortDescending }
})();