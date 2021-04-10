import './MovesList.scss'
import Moment from 'react-moment';

export const MovesList = ({moves}) => {
    if (!moves.length) return <div>No activity yet</div>
    return (
        <section>
            <ul className="moves-list">
                {moves.map(move => (
                    <li className="activity-preview" key={move._id}>
                      You have transfered {move.amount}฿ to {move.to} on <Moment format="DD/MM/YY">{move.at}</Moment>
                    </li>
                ))}
            </ul>
        </section>
    )
}

