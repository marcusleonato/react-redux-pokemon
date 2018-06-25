/*
 * HomePage
 */

import React from 'react';
import PropTypes from 'prop-types';
import SideBar from 'components/SideBar';
import PokemonWrap from 'components/PokemonWrap';
import './style.scss';

export default class HomePage extends React.PureComponent { 
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <div id='main'>
        <SideBar />
        <div className='flex-grid bg-gray'>
          <div className='column'>
            <div className='product-list'>
              <PokemonWrap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func,
};
