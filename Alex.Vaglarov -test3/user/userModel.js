const userStorage = (function() {

    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    
    class User {
        constructor(email) {
            this.email = email;
            
        }
    }

    let userList = [];
    if (localStorage.getItem('userList') !== null) {
        userList = JSON.parse(localStorage.getItem('userList'));
    } else {
        userList = [
            new User('aleks@aleks.bg')
        ]
    }

    return {
        login: function(email) {
            return userList.find(user => user.email === email);
        },

        register: function(email) {
            // const repeatUsers = userList.some(user => user.email === email);

            // if (repeatUsers) {
            //     throw new Error('this username exists');
            // } else {
                userList.push(new User(email));
                localStorage.setItem('userList', JSON.stringify(userList));
            // }
        }
    }
})();