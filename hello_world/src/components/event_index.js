import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { readEvents } from '../actions';

class EventsIndex extends Component {

  componentDidMount(){
    this.props.readEvents();
  }
  
  render() {
    
    return(
      <React.Fragment>
        
      </React.Fragment>
    )
  }
}


const mapStateToProps = state => (
  {
  }

)


const mapDispatchToprops = { readEvents }


export default connect(mapStateToProps, mapDispatchToprops
  )(EventsIndex);
