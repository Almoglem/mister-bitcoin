
import { Component } from 'react'
import { ContactFilter } from '../../cmps/ContactFilter'
import { ContactList } from '../../cmps/ContactList'
import { connect } from 'react-redux';
import { loadContacts } from '../../store/actions/contactActions';

import './Contacts.scss'
import { Link } from 'react-router-dom'

class _Contacts extends Component {
    state = {
        filterBy: null
    }

    componentDidMount() {
        this.props.loadContacts();
    }


    onChangeFilter = (filterBy) => {
        this.props.loadContacts(filterBy);
    }
    render() {
        const { contacts } = this.props
        return (
            contacts &&
            <div className="contact-page">
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <ContactList
                    contacts={contacts}
                />
                <Link to="/contact/edit" ><button className="add-contact">+</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contactReducer.contacts
})

const mapDispatchToProps = {
    loadContacts
}

export const Contacts = connect(mapStateToProps, mapDispatchToProps)(_Contacts)