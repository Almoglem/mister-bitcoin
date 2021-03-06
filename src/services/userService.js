import { storageService } from './storageService.js'
import { utilService } from './utilService.js'

export const userService = {
    getUser,
    saveUser,
    transferFund,
    addMove
}

///only support 1 hard coded user for now
///TODO: support muiltiple users

const STORAGE_KEY = 'user'
const gDefultUser = {
    name: "Guest",
    coins: 500,
    moves: []
}

var gUser = _loadUser();

function getUser() {
    return Promise.resolve({ ...gUser });
}

function saveUser(userToSave) {
    gUser = userToSave;
    storageService.store(STORAGE_KEY, gUser)
    return Promise.resolve({ ...gUser });
}


function transferFund(transferAmount) {
    gUser.coins -= transferAmount;
    storageService.store(STORAGE_KEY, gUser)
    return Promise.resolve({ ...gUser });
}

function addMove(contactId, contactName, transferAmount) {
    const move = {
        _id: utilService.makeId(),
        toId: contactId,
        to: contactName,
        at: Date.now(),
        amount: transferAmount,
    }
    gUser.moves.unshift(move);
    storageService.store(STORAGE_KEY, gUser)
    return Promise.resolve({ ...gUser });
}

function _loadUser() {
    let user = storageService.load(STORAGE_KEY)
    if (!user) user = gDefultUser
    storageService.store(STORAGE_KEY, user)
    return user
}

