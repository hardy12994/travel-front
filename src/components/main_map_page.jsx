import React, { Component} from 'react';
import PropTypes from 'prop-types';

import shouldPureComponentUpdate from 'react-pure-render/function';

import MainMapLayout from './main_map_layout.jsx';
// import IceTable from './ice_table.jsx';
import MainMapBlock from './main_map_block.jsx';

// import { Connector } from 'redux/react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { bindActionCreators } from 'redux';

import * as allMapActions from '../actions/map_actions.js';

// slice actions to support map and table interfaces
const mapActions = (({ changeBounds: onBoundsChange, markerHoverIndexChange: onMarkerHover, showBallon: onChildClick}) => ({
    onBoundsChange, onMarkerHover, onChildClick
}))(allMapActions);


const tableActions = (({ tableHoveredRowIndexChange: onHoveredRowIndexChange, tableVisibleRowsChange: onVisibleRowsChange, showBallon: onRowClick}) => ({
    onHoveredRowIndexChange, onVisibleRowsChange, onRowClick
}))(allMapActions);


class MainMapPage extends Component {
  static propTypes = {
    layout: PropTypes.string
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <MainMapLayout layout={this.props.layout}/>
    );
  }
}

const mapStateToProps = (state = {}) => {
  return {
    center: state.map.get('mapInfo').get('center'),
    zoom: state.map.get('mapInfo').get('zoom'),
    markers: state.map.get('dataFiltered'),
    visibleRowFirst: state.map.get('tableRowsInfo').get('visibleRowFirst'),
    visibleRowLast: state.map.get('tableRowsInfo').get('visibleRowLast'),
    maxVisibleRows: state.map.get('tableRowsInfo').get('maxVisibleRows'),
    hoveredRowIndex: state.map.get('tableRowsInfo').get('hoveredRowIndex'),
    openBallonIndex: state.map.get('openBalloonIndex'),
    markers: state.map.get('dataFiltered'),
    hoveredMapRowIndex: state.map.get('hoverMarkerIndex'),
    resetToStartObj: state.map.get('mapInfo')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(mapActions, dispatch)
  }
}

export default connect(mapStateToProps)(MainMapPage);