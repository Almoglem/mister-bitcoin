
import './Home.scss'

import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/userActions';

class _Home extends Component {
    state = {
        rate: null
    }
    async componentDidMount() {
        await this.props.setUser();
        this.loadRate();
    }

    async loadRate() {
        const rate = await bitcoinService.getRate(this.props.user.coins);
        this.setState({ rate })
    }
    render() {
        const { user } = this.props
        const { rate } = this.state
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

const mapStateToProps = state => ({
    user: state.userReducer.user
})

const mapDispatchToProps = {
    setUser
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)