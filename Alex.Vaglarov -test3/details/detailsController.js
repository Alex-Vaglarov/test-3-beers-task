function detailsController(id) {
    $.get('details/beerDetails.htm').then(data => {
        const template = Handlebars.compile(data);

        const html = template(beersStorage.getBeerById(id));
        $('main > h1').text('Детайли за избраната бира:');
        $('main').html(html);
    });
}