
import { Component } from 'react'
import { userService } from '../../services/userService'
import { bitcoinService } from '../../services/bitcoinService'
import { Contacts } from '../Contacts'

import './Home.scss'

export class Home extends Component {
    state = {
        user: null,
        rate: null
    }
    componentDidMount() {
        this.loadUser();
        this.loadRate();
    }
    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user },)
    }
    async loadRate() {
        const rate = await bitcoinService.getRate(1);
        this.setState({ rate })
    }
    render() {
        const { user, rate } = this.state
        return (
            user && rate && (
                <section>
                    <div>
                        <p>Welcome, {user.name}. You have {user.coins} coins</p>
                        <p>The current bitcoin rate is: 1 USD = {rate} bitcoins </p>
                    </div>
                    <Contacts />
                </section>
            )
        );
    }
}
