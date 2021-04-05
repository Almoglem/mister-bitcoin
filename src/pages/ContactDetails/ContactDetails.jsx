import { Component } from 'react'
import {contactService} from '../../services/contactService'

import './ContactDetails.scss'

export class ContactDetails extends Component {

    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact();
    }

    async loadContact(){
        const id = this.props.contactId;
        const contact = await contactService.getContactById(id);
        this.setState({contact}, ()=>{console.log('contact', this.state.contact);})
    }
    render() {
        return (
            <div>
            HI IM CONTACT DETAILS
            </div>
        )
    }
}
