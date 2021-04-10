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
    }

    render() {
        const { transferAmount } = this.state
        return (
            <form onSubmit={this.transferFund}>

                <label htmlFor="transferAmount"> Send payment: </label>
                <input required type="number" id="transferAmount" value={transferAmount} onChange={this.handleChange} name="transferAmount" />

                <button>Send</button>
            </form>
        )
    }
}
