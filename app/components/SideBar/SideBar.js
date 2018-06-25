import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class SideBar extends React.Component {
  render() {
    return (
      <aside>
        <nav className='nav-menu'>
          <ul>
            <li className='active'>
              <a className='item-link' href='#'>Todos Pokemons</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default SideBar;