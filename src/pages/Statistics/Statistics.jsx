
import { Component } from 'react'
import { bitcoinService } from '../../services/bitcoinService'
import { Charts } from '../../cmps/Charts'
import moment from 'moment'
import './Statistics.scss'

export class Statistics extends Component {
    state = {
        marketPriceData: null,
        tradeVolumeData: null
    }
    componentDidMount() {
        this.loadMarketPlaceData();
        this.LoadTradeVolumeData();
    }


    async loadMarketPlaceData() {
        const data = await bitcoinService.getMarketPrice();
        const marketPriceData = {};
        marketPriceData.vals = data.values.map(coord => coord.y);
        marketPriceData.labels = data.values.map(coord => moment.unix(coord.x).format("DD/MM/YYYY"))
        this.setState({ marketPriceData })
    }
    async LoadTradeVolumeData() {
        const data = await bitcoinService.getTradeVolume();
        const tradeVolumeData = {};
        tradeVolumeData.vals = data.values.map(coord => coord.y);
        tradeVolumeData.labels = data.values.map(coord => moment.unix(coord.x).format("DD/MM/YYYY"))
        this.setState({ tradeVolumeData })
    }

    render() {
        const { marketPriceData, tradeVolumeData } = this.state
        return (
            <div>
                <h3>Statistics</h3>
                <Charts marketPriceData={marketPriceData}
                    tradeVolumeData={tradeVolumeData}
                />
            </div>
        )
    }
}
