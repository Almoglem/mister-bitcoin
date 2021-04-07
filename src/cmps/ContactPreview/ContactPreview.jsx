import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export function ContactPreview({ contact }) {
    return (
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview">
                {contact.name}
            </div>
        </Link>
    )

}
