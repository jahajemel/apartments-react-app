import React from 'react';
import { connect } from 'react-redux';
import { getApartments } from './actions'

import MainMenu from './containers/MainMenu';
import HeroImage from './containers/HeroImage';
import ApartmentList from './containers/ApartmentList';

class App extends React.Component {
  componentWillMount() {
    this.props.getApartments()
  }

  render() {
    return (
      <>
        <MainMenu />
        <HeroImage />
        <div className="bg-white flex font-medium justify-center py-8 shadow-lg sticky w-full">
          <span className="-mt-2 absolute bg-white border border-gray-400 font-light  lg:w-1/4 outline-none py-3 rounded-lg shadow text-3xl text-center w-1/2">Offers about Mallorca, Spain</span>
        </div>
        <div className="container mx-auto flex flex-col flex-wrap lg:flex-row my-10">
          <ApartmentList />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = { getApartments: getApartments };

export default connect(null, mapDispatchToProps)(App);
