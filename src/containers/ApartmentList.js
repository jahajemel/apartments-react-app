import React from 'react';
import { connect } from 'react-redux';

import Apartment from './Apartment';

const ApartmentList = ({ apartments }) => (
  apartments ?
    apartments.offers.map(apartment =>
      <Apartment key={apartment.id} apartment={apartment} />
    )
    : null
)

const mapStateToProps = state => ({
  apartments: state.apartments,
})

export default connect(mapStateToProps, null)(ApartmentList)


