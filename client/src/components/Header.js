import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faUserAlt }  from '@fortawesome/free-solid-svg-icons'

const Header = () => (<div >
  <h3 className="title-header">Tiny Improvements</h3>
  <FontAwesomeIcon icon={faUserAlt} size="2x" />
  <hr/>
</div>);

export default Header;
