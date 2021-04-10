import './MovesList.scss'
import Moment from 'react-moment';

export const MovesList = ({moves}) => {
    if (!moves.length) return <div className="moves-list">No activity yet</div>
    return (
        <section className="moves-list">
            <ul>
                {moves.map(move => (
                    <li className="activity-preview" key={move._id}>
                      You have transfered {move.amount}฿ to {move.to} on <Moment format="DD/MM/YY">{move.at}</Moment>
                    </li>
                ))}
            </ul>
        </section>
    )
}

