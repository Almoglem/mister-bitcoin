
import './Home.scss'

import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/userActions';
import {MovesList} from '../../cmps/MovesList'
import { Player } from '@lottiefiles/react-lottie-player';


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
                <section className="home">
                    <div>
                        <Player
                            autoplay
                            loop
                            src="https://assets7.lottiefiles.com/packages/lf20_HzCLVo.json"
                            style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                        <h2>Welcome, {user.name} </h2>
                        <div className="balance-container">
                        <h5 className="subtitle">CURRENT BALANCE</h5>
                        <p> BIT: <span className="bitcoin-balance"> ฿ {user.coins.toLocaleString()}  </span></p>
                        <p> USD: $ {rate.toLocaleString()} </p>
                        </div>
                    </div>
                    <h5 className="subtitle">RECENT ACTIVITY</h5>
                <MovesList moves={user.moves.slice(0,5)}/>
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