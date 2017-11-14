import firebaseInit from './firebase.js'
import firebase from 'firebase'

let database = firebase.database()

export function getIncidents() {
  let ref = database.ref('incidents')
  let incidents = []
  let cont = 0
  return ref.once('value').then( snapshot => {
    snapshot.forEach( ( data, index ) => {
      incidents.push(data.val())
      incidents[cont].key = data.key
      cont++
    })
    return incidents
  }).catch(error => error)
}

export function getIncidentInformation(key) {
  let ref = database.ref('incidents/' + key)
  return ref.once('value')
            .then( snapshot => {
              return snapshot.val()
            })
            .catch(error => error)
}

export function changeIncidentStatus(key) {
  let ref = database.ref('incidents/' + key)
  return ref.update({status: "done"})
            .then(response => response);
}