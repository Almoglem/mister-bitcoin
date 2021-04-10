import React from 'react';
import { ContactPreview } from '../ContactPreview'

import './ContactList.scss'

export function ContactList({ contacts }) {
    return (
        contacts &&
        <section>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <ContactPreview
                        contact={contact}
                        key={contact._id}
                    />
                ))}
            </ul>
        </section>
    )

}
