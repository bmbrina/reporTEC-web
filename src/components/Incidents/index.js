import React, { Component } from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import * as incidents_api from '../../api/incidents_api.js'

class Incidents extends Component {
  constructor(props){
    super(props)
      this.state = {
        incidents: [],
        incident_status: "all"
      }
  }

  componentDidMount() {
    let promise = incidents_api.getIncidents()

    promise.then( response => {
      this.setState({ incidents: response })
    })
  }

  showIncidentDetails(incident) {
    browserHistory.push("/incidents/" + incident.key);
    window.scrollTo(0, 0)
  }

  updateSelectedIncidentStatus() {
    this.setState({ incident_status: this._incidentStatus.value })
  }

  filterIncidents() {
    if (this.state.incident_status === "all") {
       return this.state.incidents
    } else {
      return this.state.incidents.filter( incident => incident.status === this.state.incident_status)
    }
  }

  emptyIncidentsTr() {
    return (
      <tr>
        <td colSpan={10}>No hay incidentes con tus filtros.</td>
      </tr>
    )
  }

  render() {
    const { className, ...props } = this.props;
    let incidents = this.incidentsRows()
    return (
      <div className={classnames('incidents', className)} {...props}>
        <h1 className="incidents__title text-center"> Incidentes </h1>
        <div className="align-flex center">
          <table className="incidents__table">
            <tbody>
              <tr className="text-center">
                <th>Título</th>
                <th>Fecha</th>
                <th> 
                  <select onChange={this.updateSelectedIncidentStatus.bind(this)} ref={(incidentStatus) => this._incidentStatus = incidentStatus}>
                    <option value="all">Estatus de incidente</option>
                    <option value="pending">Pendiente</option>
                    <option value="done">Atendido</option>
                  </select>
                </th>
                <th>Categoría</th>
                <th colSpan={2}></th>
              </tr>
              {incidents}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  incidentsRows() {
    let filtered_incidents = this.filterIncidents();
      
    if (filtered_incidents.length === 0) {
      return this.emptyIncidentsTr();
    }

    return filtered_incidents.map( (incident, index) => {
      let statusTitle, statusClass, linkTitle
      if (incident.status === "pending") {
        linkTitle = "Atender"
        statusTitle = "Pendiente"
      } else {
        linkTitle = "Ver"
        statusTitle = "Atendido"
      }

      return (
        <tr key={index} className="text-center">
          <td>{incident.title}</td>
          <td>{incident.date}</td>
          <td className={incident.status}>{statusTitle}</td>
          <td>{incident.category}</td>
          <td><a className="link" onClick={this.showIncidentDetails.bind(this, incident)}>{linkTitle}</a></td>
        </tr>
      )
    });
  }
}

export default Incidents;