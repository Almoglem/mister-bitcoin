import React from 'react';
import { ContactPreview } from '../ContactPreview'

import './ContactList.scss'

export function ContactList({ contacts, selectContact }) {
    return (
        contacts &&
        <section>
            <h3>Contacts</h3>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <ContactPreview 
                    contact={contact}
                    key={contact._id} 
                    selectContact={selectContact}/>
                ))}
            </ul>
        </section>
    )

}
