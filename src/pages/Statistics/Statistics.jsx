
import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { Charts } from '../../cmps/Charts'
import './Statistics.scss'

export class Statistics extends Component {
    state = {
        marketPriceVals: null,
        tradeVolumeVals: null
    }
    componentDidMount() {
        this.loadData();
    }
    async loadData() {
        const marketPriceData = await bitcoinService.getMarketPrice();
        const marketPriceVals = marketPriceData.values.map(value => value.y);
        this.setState({ marketPriceVals })

        const tradeVolumeData = await bitcoinService.getTradeVolume();
        const tradeVolumeVals = tradeVolumeData.values.map(value => value.y);
        this.setState({ tradeVolumeVals })
    }
    render() {
        const { marketPriceVals, tradeVolumeVals } = this.state
        return (
            <div>
                <h3>Statistics</h3>
                <Charts marketPriceVals={marketPriceVals}
                    tradeVolumeVals={tradeVolumeVals}
                />
            </div>
        )
    }
}
