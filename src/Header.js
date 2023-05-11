// Header component is functional component

import {Link } from 'react-router-dom'
const Header = function (){
    return (
      <div className="header">
       <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
          <Link to="/specific">Specificdetails</Link></li>
          <li>
          <Link to="/">Deatilcards</Link></li>
        </ul>
       </div>
      </div>
    )
  }

  export default Header;