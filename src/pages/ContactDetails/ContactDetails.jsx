import { Component } from 'react'
import { contactService } from '../../services/contactService'

import './ContactDetails.scss'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }

    async loadContact() {
        const id = this.props.contactId;
        const contact = await contactService.getContactById(id);
        this.setState({ contact })
    }
    render() {
        const { contact } = this.state
        return (
            contact &&
            <div>
                <img src={`https://robohash.org/${contact._id}.png`} alt="contact-img" />
                <h4>{contact.name}</h4>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
            </div>
        )
    }
}
