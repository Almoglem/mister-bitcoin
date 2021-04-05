export const userService = {
    getUser
}

const user = {
    name: "Almog Lemberg",
    coins: 100,
    moves: []
}

function getUser() {
    return user;
}