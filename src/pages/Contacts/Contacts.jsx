
import { Component } from 'react'
import { contactService } from '../../services/contactService'
import {ContactFilter} from '../../cmps/ContactFilter'
import { ContactList } from '../../cmps/ContactList'
import {ContactDetails} from '../ContactDetails'

import './Contacts.scss'

export class Contacts extends Component {
    state = {
        contacts: null,
        selectedContactId: null,
        filterBy: null
    }

    componentDidMount() {
        this.loadContacts();
    }
    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy);
        this.setState({contacts})
    }
    onChangeFilter = (filterBy) => {
        this.setState({filterBy}, this.loadContacts)
    }
    selectContact = (contactId) => {
        this.setState({selectedContactId: contactId})
    }
    render() {
        const { contacts , selectedContactId} = this.state
        return (
            contacts &&
            <div>
                <ContactFilter onChangeFilter={this.onChangeFilter}/>
                {!selectedContactId && 
                <ContactList 
                contacts={contacts} 
                selectContact={this.selectContact}
                />}
                {selectedContactId && 
               <ContactDetails contactId = {selectedContactId}/>
                }
            </div>
        )
    }
}
