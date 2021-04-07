
import { Component } from 'react'
import { contactService } from '../../services/contactService'
import { ContactFilter } from '../../cmps/ContactFilter'
import { ContactList } from '../../cmps/ContactList'

import './Contacts.scss'

export class Contacts extends Component {
    state = {
        contacts: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadContacts();
    }
    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy);
        this.setState({ contacts })
    }
    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }
    render() {
        const { contacts } = this.state
        return (
            contacts &&
            <div>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList
                    contacts={contacts}
                />
            </div>
        )
    }
}
