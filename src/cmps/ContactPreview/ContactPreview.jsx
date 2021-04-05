
import './ContactPreview.scss'

export function ContactPreview({ contact, selectContact }) {
    return (
        <div 
            className="contact-preview" 
            onClick ={() => selectContact(contact._id)}
             >
            {contact.name}
        </div>
    )

}
