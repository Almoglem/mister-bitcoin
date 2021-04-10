import { Component } from 'react'
import { Link } from 'react-router-dom';
import { TransferFund } from '../../cmps/TransferFund/TransferFund';
import { connect } from 'react-redux';
import { getContactById, removeContact } from '../../store/actions/contactActions';
import { transferFund } from '../../store/actions/userActions';
import { userService } from '../../services/userService'

import './ContactDetails.scss'

class _ContactDetails extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        this.props.getContactById(this.props.match.params.id)
        this.loadUser();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.getRobotById(this.props.match.params.id)
        }
    }

    removeContact = async () => {
        await this.props.removeContact(this.props.contact._id)
        this.props.history.push('/contacts')
    }

    transferFund = (amount) => {
        console.log('amount is', amount);
        this.props.transferFund(this.props.contact._id, amount)
    
        // if (this.state.contact.coins - amount < 0) return alert('sorry, not enough balance')
        // this.setState((prevState) =>
        //     ({ contact: { ...prevState.contact, coins: prevState.contact.coins + amount } })
        // )
    }

    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user })
    }

    render() {
        const { contact } = this.props
        return (
            contact &&
            <div>
                <img src={`https://robohash.org/${contact._id}.png`} alt="contact-img" />
                <h4>{contact.name}</h4>
                <p>{contact.email}</p>
                <p>{contact.phone}</p>
                <Link to={'/contact/edit/' + contact._id}>Edit</Link>
                <button onClick={this.removeContact}>Delete</button>
                <TransferFund transferFund={this.transferFund} />
                {/* TODO: add a 'next contact' option */}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    contact: state.contactReducer.currContact
})

const mapDispatchToProps = {
    getContactById, removeContact, transferFund
}

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)