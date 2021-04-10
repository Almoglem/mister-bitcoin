import {
    Line
}

from 'react-chartjs-2';
import './Charts.scss'

export function Charts( {
        marketPriceData, tradeVolumeData
    }

) {
    return (<section> {
            marketPriceData && <div className="chart-container"> <h2>Market Price</h2> <Line data= {
                    {
                    labels: marketPriceData.labels,
                    datasets: [ {
                        label: 'Market Price',
                        data: marketPriceData.vals,
                        backgroundColor: '#a8a8a82c',
                        borderColor: '#cf9d3f'
                    }
                    ]
                }
            }
            /> </div>
        }

            {
            tradeVolumeData && <div className="chart-container"> <h2>Trade Volume</h2> <Line data= {
                    {
                    labels: tradeVolumeData.labels,
                    datasets: [ {
                        label: 'Trade Volume',
                        data: tradeVolumeData.vals,
                        backgroundColor: '#a8a8a82c',
                        borderColor: '#cf9d3f'
                    }
                    ]
                }
            }
            /> </div>
        }

        </section >)
}