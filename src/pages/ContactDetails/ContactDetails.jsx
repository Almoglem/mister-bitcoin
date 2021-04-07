import { Component } from 'react'
import { Link } from 'react-router-dom';
import { contactService } from '../../services/contactService'

import './ContactDetails.scss'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }

    removeContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.props.history.push('/contacts')
    }

    async loadContact() {
        const id = this.props.match.params.id;
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
                <Link to={'/contact/edit/' + contact._id}>Edit</Link>
                <button onClick={() => this.removeContact(contact._id)}>Delete</button>
                {/* TODO: add a 'next contact' option */}
            </div>
        )
    }
}
