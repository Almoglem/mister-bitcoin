
import { Component } from 'react'
import { contactService } from '../../services/contactService'
import { ContactList } from '../../cmps/ContactList'

import './Contacts.scss'

export class Contacts extends Component {
    state = {
        contacts: null,
        selectedContactId: null
    }

    componentDidMount() {
        this.loadContacts();
    }
    async loadContacts() {
        const contacts = await contactService.getContacts();
        this.setState({ contacts })
    }
    selectContact = (contactId) => {
        this.setState({ selectedContactId: contactId  }, ()=>{
            console.log(this.state.selectedContactId);
        })
    }
    render() {
        const { contacts , selectedContactId} = this.state
        return (
            contacts &&
            <div>
                {!selectedContactId && 
                <ContactList 
                contacts={contacts} 
                selectContact={this.selectContact}
                />}
                {selectedContactId && 
               <h1>contact was selcted</h1>
                }
            </div>
        )
    }
}
