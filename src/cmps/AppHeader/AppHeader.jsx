

import { NavLink, withRouter } from 'react-router-dom'
import './AppHeader.scss'

const _AppHeader = (props) => {

    return (
        <div className="app-header">
            <NavLink exact to="/" >
                <h1 className="logo" >Mister Bitcoin</h1>
            </NavLink>
            <ul>
                <li><NavLink to="/contacts" activeClassName="active-nav" >Contacts</NavLink></li>
                <li><NavLink to="/statistics" activeClassName="active-nav">Statistics</NavLink></li>
            </ul>
        </div>
    )
}

export const AppHeader = withRouter(_AppHeader)
