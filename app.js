let users = [
{
    username: 'Brock',
    email: 'Brock@gmail.com',
    password: 'Test233',
    subscriptionStatus: 'VIP',
    discordID: 'Brock#000',
    lessonsCompleted: [1, 2, 3]
},
{
    username: 'Brockfff',
    email: 'Brockdfdfd@gmail.com',
    subscriptionStatus: 'VIP',
    discordID: 'Brockfff#000',
    lessonsCompleted: [1, 2, 3]
},
{
    username: 'Brockfffddd',
    email: 'Brockdfdfdddd@gmail.com',
    subscriptionStatus: 'VIP',
    discordID: 'Brockfffddd#000',
    lessonsCompleted: [1, 2, 3]
},
];

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            console.log(users[i]);
            if (users[i].password === password) {
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect')
            }
            return;
        }
    }
    console.log('could not find an email that matches')
}

login('Brock@gmail.com', 'Test233');

function register(user) {
        users.push(user);
}

register({
    username: 'BrOck', 
    email:'brocksddds@gmail.com', 
    password:'BPasword', 
    subscriptionStatus: 'Vip', 
    discordID: 'discord#000', 
    lessonsCompleted: [0,1]});

    //register new user//


    console.log(users);