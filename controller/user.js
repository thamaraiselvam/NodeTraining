class UserController {
    constructor(){
        this.users =  [{
            name: 'raju'
        },{
            name: 'elango'
        }, {
            name: 'lavanya'
        }, {
            name: 'deepa'
        }, {
            name: 'santhiya'
        }]
    }
    get() {
        return this.users;
    }

    add(user){
        this.users.shift(user);

    }

    delete(username){
        this.users = this.users.filter(user => user.name !== username);
    }
}


module.exports = new UserController();