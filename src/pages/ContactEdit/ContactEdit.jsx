
import { Component } from 'react'
import { contactService } from '../../services/contactService';

import './ContactEdit.scss'

export class ContactEdit extends Component {

    state = {
        contact: null
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        try {
            const contact = id ? await contactService.getContactById(id) : contactService.getEmptyContact();
            this.setState({ contact })
        }
        catch (err) {
            console.log(err);
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
    }

    saveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact(this.state.contact);
        this.props.history.push('/contacts');
    }
    render() {
        if (!this.state.contact) return <div>Loading</div>

        const { name, email, phone } = this.state.contact
        return (
            <section className="contact-edit">
                <form className='edit-form' onSubmit={this.saveContact}>

                    <label htmlFor="name">Name</label>
                    <input required type="text" id="name" value={name} onChange={this.handleChange} name="name" />

                    <label htmlFor="email">Email</label>
                    <input required type="email" id="email" value={email} onChange={this.handleChange} name="email" />

                    <label htmlFor="phone">Phone</label>
                    <input required type="phone" id="phone" value={phone} onChange={this.handleChange} name="phone" />

                    <button>Save</button>
                </form>
            </section>
        )
    }
}
