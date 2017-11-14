import firebaseInit from './firebase.js'
import firebase from 'firebase'

let database = firebase.database()

export function getIncidents() {
  let ref = database.ref('incidents')
  let incidents = []
  return ref.once('value').then( snapshot => {
    snapshot.forEach( data => {
      incidents.push(data.val())
    })
    return incidents
  }).catch(error => error)
}