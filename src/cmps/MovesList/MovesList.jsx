import './MovesList.scss'
import Moment from 'react-moment';

export const MovesList = ({ moves, isHome }) => {
    if (!moves?.length) return <div className="moves-list">No activity yet</div>
    return (
        <section className="moves-list">
            <ul>
                {moves.map(move => (
                    <li className="activity-preview" key={move._id}>
                        {isHome && <p className="acticity-title"> To {move.to}</p>}
                        <p>{move.amount}฿ </p>
                        <Moment className="activity-date" format="DD/MM/YY, h:mma">{move.at}</Moment>
                    </li>
                ))}
            </ul>
        </section>
    )
}

