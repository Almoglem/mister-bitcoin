import { Link } from 'react-router-dom'
import './ContactPreview.scss'

export function ContactPreview({ contact }) {
    return (
        <Link to={'/contact/' + contact._id}>
            <div className="contact-preview">
                <img className="contact-img" src={`https://robohash.org/${contact._id}.png`} alt="contact-img" />
                <p>{contact.name}</p>
            </div>
        </Link>
    )

}
