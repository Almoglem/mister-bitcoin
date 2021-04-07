
import './Home.scss'

import { Component } from 'react'
import { userService } from '../../services/userService'
import { bitcoinService } from '../../services/bitcoinService'

export class Home extends Component {
    state = {
        user: null,
        rate: null
    }
    componentDidMount() {
        this.loadUser();
    }
    async loadUser() {
        const user = await userService.getUser();
        this.setState({ user }, () => { this.loadRate() })
    }
    async loadRate() {
        const rate = await bitcoinService.getRate(this.state.user.coins);
        this.setState({ rate })
    }
    render() {
        const { user, rate } = this.state
        return (
            user && rate && (
                <section>
                    <div>
                        <p>Welcome, {user.name}. You have {user.coins} bitcoins</p>
                        <p>Equel to {rate} USD </p>
                    </div>

                </section>
            )
        );
    }
}
