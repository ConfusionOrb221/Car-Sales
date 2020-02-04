import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux';
import {addFeature, removeFeature} from './actions/action';

const App = (props) => {

  const removeFeature = item => {
    props.removeFeature(item);
  };

  const buyItem = item => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      {console.log(props)}
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, {addFeature, removeFeature}) (App);
