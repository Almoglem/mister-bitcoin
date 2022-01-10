
import './Home.scss'

import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { connect } from 'react-redux';
import { setUser } from '../../store/actions/userActions';
import { MovesList } from '../../cmps/MovesList'
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
                            src="https://assets3.lottiefiles.com/packages/lf20_ltbqacam.json"
                            style={{ height: '300px', width: '300px' }}
                        >
                        </Player>
                        <h3>Welcome </h3>
                        <div className="balance-container">
                            <h4 className="subtitle">Current balance</h4>
                            <p> BIT: <span className="bitcoin-balance"> ฿ {user.coins.toLocaleString()}  </span></p>
                            <p> USD: $ {rate.toLocaleString()} </p>
                        </div>
                    </div>
                    <hr />
                    <h4 className="subtitle">Recent activity</h4>
                    <MovesList moves={user.moves.slice(0, 5)} isHome="true" />
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