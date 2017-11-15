import React, { Component } from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import * as incidents_api from '../../api/incidents_api.js'
import NoPreview from './no-preview.svg'

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
      this.initMap(response.location)
    })
  }

  initMap(coordinates) {
    coordinates = coordinates.replace(" ", "").split(",")

    var uluru = { lat: Number(coordinates[0]), lng: Number(coordinates[1]) };
    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: uluru
    });
    var marker = new window.google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  completeIncident() {
    let promise = incidents_api.changeIncidentStatus(this.props.params.incident_key)

    promise.then( response => {
      browserHistory.push('/incidents')
    })
  }

  render() {
    const { className, ...props } = this.props;
    let incident, colorStatus, incidentImage, hidden

    if (this.state.incident) {
      incident = this.state.incident
      colorStatus = incident.status

      if (incident.imageUrl) {
        incidentImage = incident.imageUrl
      } else {
        incidentImage = NoPreview
      }

      if (incident.status === "pending") {
        hidden = ""
      } else {
        hidden = "hidden"
      }
    }

    return (
      <div className={classnames('incident', className)} {...props}>
        <a href="/incidents" className="incident__back">Volver</a>
        <h1 className={"incident__title text-center " + colorStatus}> {incident.title} </h1>
        <p className="incident__category text-center">{incident.date}</p>
        <div className="align-flex center">
          <div className="incident__content">
            <p className="incident__label">Categoría:</p>
            <p className="incident__desc">{incident.category}</p>
            <p className="incident__label">Descripción:</p>
            <p className="incident__desc">{incident.desc}</p>
            <p className="incident__label">Evidencia:</p>
            <img src={incidentImage} className="incident__image" />
            <p className="incident__label">Ubicación:</p>
            <div id="map"></div>
            <div className="action text-center">
              <a className={"button button__done " + hidden} onClick={this.completeIncident.bind(this)}>Marcar como atendido</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Incident