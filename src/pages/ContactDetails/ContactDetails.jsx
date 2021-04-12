import { Component } from 'react'
import { Link } from 'react-router-dom';
import { TransferFund } from '../../cmps/TransferFund/TransferFund';
import { connect } from 'react-redux';
import { getContactById, removeContact } from '../../store/actions/contactActions';
import { transferFund, addMove } from '../../store/actions/userActions';
import { MovesList } from '../../cmps/MovesList';
import { utilService } from '../../services/utilService'

import './ContactDetails.scss'

class _ContactDetails extends Component {

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getContactById(this.props.match.params.id)
        }
    }

    removeContact = async () => {
        await this.props.removeContact(this.props.contact._id)
        this.props.history.push('/contacts')
    }

    transferFund = (amount) => {
        if (amount > this.props.user.coins) return utilService.showMsg('Not enough balance')
        if (amount <= 0) return utilService.showMsg('Please enter a number higher than 0')

        this.props.transferFund(this.props.contact._id, amount)
        this.props.addMove(this.props.contact._id, this.props.contact.name, amount)

        utilService.showMsg(`Transfered ${amount} bitcoins to ${this.props.contact.name} successfuly`)
    }



    render() {
        const { contact, user } = this.props
        return (
            contact &&
            <section className="contact-details">
                <img className="contact-img" src={`https://robohash.org/${contact._id}.png`} alt="contact-img" />

                <div className="info-container container">
                    <h4>{contact.name}</h4>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>

                <div className="actions-container container">
                    <Link to={'/contact/edit/' + contact._id}><i className="fas fa-pen"></i> Edit</Link> ||
                <button className="clean-button" onClick={this.removeContact}><i className="far fa-trash-alt"></i> Delete</button>
                </div>
                <TransferFund transferFund={this.transferFund} contactName={contact.name} />
                <h5 className="subtitle">Your transfers to {contact.name}</h5>
                <MovesList moves={user.moves.filter(move => move.toId === contact._id)} />
            </section>
        )
    }
}


const mapStateToProps = state => ({
    contact: state.contactReducer.currContact,
    user: state.userReducer.user
})

const mapDispatchToProps = {
    getContactById, removeContact, transferFund, addMove
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)