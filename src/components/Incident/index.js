import React, { Component } from 'react';
import classnames from 'classnames';
import * as incidents_api from '../../api/incidents_api.js'

class Incident extends Component {
  constructor(props){
    super(props)
      this.state = {
        incident: {},
      }
  }

  componentDidMount() {
    let promise = incidents_api.getIncidentInformation(this.props.params.incident_key)

    promise.then( response => {
      this.setState({ incident: response })
    })
  }

  render() {
    const { className, ...props } = this.props;
    let incident;

    if (this.state.incident) {
      incident = this.state.incident
    }

    return (
      <div className={classnames('incident', className)} {...props}>
        <h1 className="incident__title text-center"> {incident.title} </h1>
        <p className="incident__category text-center">{incident.category}</p>
        <div>
          
        </div>
      </div>
    );
  }
}

export default Incident