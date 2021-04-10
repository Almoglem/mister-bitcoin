import { storageService } from './storageService.js'

export const contactService = {
  query,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}

const STORAGE_KEY = 'contacts'
const gDefaultContacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
  }
];

var gContacts = _loadContacts();

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

//// TODO: contacts come from logged user's contacts array

function query(filterBy = null) {
  let contactsToReturn = gContacts;
  if (filterBy && filterBy.term) {
    contactsToReturn = filter(filterBy.term)
  }
  return Promise.resolve(sort(contactsToReturn));
}

function getContactById(id) {
  const contact = gContacts.find(contact => contact._id === id)
  if (!contact) return Promise.reject()
  return Promise.resolve({ ...contact })
}

function deleteContact(id) {
  const idx = gContacts.findIndex(contact => contact._id === id)
  if (idx !== -1) gContacts.splice(idx, 1)
  storageService.store(STORAGE_KEY, gContacts)
  return Promise.resolve(gContacts)
}

function saveContact(contactToSave) {
  if (contactToSave._id) {
    const idx = gContacts.findIndex(contact => contact._id === contactToSave._id)
    gContacts.splice(idx, 1, contactToSave)
  } else {
    contactToSave._id = _makeId()
    gContacts.push(contactToSave)
  }
  storageService.store(STORAGE_KEY, gContacts)
  return Promise.resolve(contactToSave);
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function filter(term) {
  term = term.toLocaleLowerCase()
  return gContacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(term) ||
      contact.phone.toLocaleLowerCase().includes(term) ||
      contact.email.toLocaleLowerCase().includes(term)
  })
}


function _loadContacts() {
  let contacts = storageService.load(STORAGE_KEY)
  if (!contacts || !contacts.length) contacts = gDefaultContacts
  storageService.store(STORAGE_KEY, contacts)
  return contacts
}


function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}