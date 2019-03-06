function userController() {
    console.log('idva tuk')
    $.get('user/login.htm').then(text => {
        $('main').html(text);
        const loogedUser = localStorage.getItem('loggedUser');
        if(loogedUser){
            location.replace('#page=home');
        }
        $('#login').on('click', function(event) {
            event.preventDefault();

            const user = userStorage.login($('#username').val());
            if (user) {
                localStorage.setItem('loggedUser', JSON.stringify(user));
                location.replace('#page=home_1');
                $('#username').val('')
            } else {
                $('.dontShow').show();
            }
        });

        $('#showRegisterForm').on('click', function(event) {
            event.preventDefault();
            console.log('cliknah register')

            $.get('user/register.htm').then(text => {
                $('main').html(text);

                $('#register').on('click', function(event) {
                    event.originalEvent.preventDefault();
        
                    let hasErrors = false;
        
                    const email = $('#email2').val();
                    // if ($('#email').val().length < 3) {
                    //     hasErrors = true;
                    //     $('.dontShow').show();
                    // }
        
                    // if(!hasErrors) {
                        userStorage.register(email);
                        location.reload();
                    // }
                });

            });
        });

    });
}