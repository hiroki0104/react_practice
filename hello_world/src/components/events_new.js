import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { postEvent } from '../actions'

export class events_new extends Component {
    render() {
        return (
            <React.Fragment>
                <div>dooo</div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(events_new)
