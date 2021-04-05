
// import { Line } from 'react-chartjs-2';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import './Charts.scss'

export function Charts({ marketPriceVals, tradeVolumeVals }) {
    return (
        <section>

            {marketPriceVals &&
                <div>
                    <h1>Market Price Stats</h1>
                    <Sparklines data={marketPriceVals} width={100} height={20} margin={3}>
                        <SparklinesLine color='black' />
                    </Sparklines>
                </div>}


            {tradeVolumeVals &&
                <div>
                    <h1>Trade Volume Stats</h1>
                    <Sparklines data={tradeVolumeVals} width={100} height={20} margin={3}>
                        <SparklinesLine color='black' />
                    </Sparklines>
                </div>}

            {/* <Line
                data={{
                    labels: ['hihihhi', 'hihi'],
                    datasets: [{
                        label: 'blah',
                        data: [1, 2]
                    }]
                }}
                height={400}
                width={400}
            /> */}

        </section>
    )
}

