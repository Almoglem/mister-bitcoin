import { Line } from 'react-chartjs-2';
import './Charts.scss'

export function Charts({ marketPriceData, tradeVolumeData }) {
    return (
        <section>
            { marketPriceData &&
                <div className="chart-container">
                    <Line
                        data={{
                            labels: marketPriceData.labels,
                            datasets: [{
                                label: 'Market Price',
                                data: marketPriceData.vals
                            }]
                        }}

                    />
                </div>
            }
            { tradeVolumeData &&
                <div className="chart-container">
                    <Line
                        data={{
                            labels: tradeVolumeData.labels,
                            datasets: [{
                                label: 'Trade Volume',
                                data: tradeVolumeData.vals
                            }]
                        }}
                    />
                </div>
            }
        </section >
    )
}

