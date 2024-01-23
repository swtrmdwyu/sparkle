function getUserInfo(): IUser {
    const storage = localStorage.getItem('user');
    let user: IUser = {
        username: '',
        image: ''
    }

    if(storage) {
        user = JSON.parse(storage);
    }

    return user;
}

export default getUserInfo;