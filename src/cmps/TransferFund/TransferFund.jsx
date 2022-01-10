import { Component } from 'react'

import './TransferFund.scss'

export class TransferFund extends Component {

    state = {
        transferAmount: ''
    }

    handleChange = ({ target }) => {
        this.setState({ transferAmount: +target.value })
    }

    transferFund = async (ev) => {
        ev.preventDefault();
        this.props.transferFund(this.state.transferAmount);
        this.state.transferAmount = '';
    }

    render() {
        const { transferAmount } = this.state
        const { contactName } = this.props
        return (
            <form className="transfer-fund" onSubmit={this.transferFund}>
                <h3>Send payment to {contactName}</h3>
                <label htmlFor="transferAmount"></label>
                <input required
                    min="1"
                    type="number" id="transferAmount" value={transferAmount} onChange={this.handleChange} name="transferAmount" />

                <button className="purple-btn">Send</button>
            </form>
        )
    }
}
