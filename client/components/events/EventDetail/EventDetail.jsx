import React, { useEffect, useState } from 'react'
import { getEvent } from '../../../pages/Event/eventHelper'
import VolunteerButton from '../../volunteers/VolunteerButton/VolunteerButton'
import { useHistory, Link } from 'react-router-dom'

function EventDetail (props) {
  const { eventId, isAdmin } = props
  const [event, setEvent] = useState({})
  const [volunteering, setVolunteering] = useState(false)
  const history = useHistory()

  function redirectToEdit () {
    // console.log('redirectToEdit')
    history.push(`/events/${eventId}/edit`)
  }

  useEffect(() => {
    getEvent(eventId).then(res => {
      setEvent(res)
      setVolunteering(event.isVolunteer)
      return null
    }).catch(err => {
      console.log(err.message)
    })
  })
  return (
    <section className='card-secondary column-6'>
      <article className='card-inner'>
        <Link onClick={() => history.goBack()} className='card-close-button'>Close</Link>
        <h1 className='card-title'>{event.title}</h1>
        <ul className='card-list'>
          <li>{event.gardenName}</li>
          <li>{event.gardenAddress}</li>
          <li>{event.date}</li>
          <li>Volunteers Needed: {event.volunteersNeeded}</li>
          <li>{event.description}</li>
        </ul>
        {!isAdmin
          ? <VolunteerButton
            eventId={eventId}
            volunteering={volunteering}
            setVolunteering={setVolunteering}
          />
          : <>
            <button onClick={redirectToEdit} className='button-secondary'>Edit Event</button>
            <button className='button-secondary'>Event Admin</button>
          </>
        }
      </article>
    </section>
  )
}

export default EventDetail
