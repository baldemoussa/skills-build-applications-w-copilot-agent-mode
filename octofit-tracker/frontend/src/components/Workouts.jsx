import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api.js'

function Workouts() {
  const [workouts, setWorkouts] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(`${apiBaseUrl}/api/workouts/`).then(setWorkouts).catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">For your next session</p><h2>Workout library</h2></div><span className="count-badge">{workouts.length} plans</span></div>
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row g-3">{workouts.map((workout) => <div className="col-md-6 col-xl-4" key={workout._id || workout.title}><article className="data-card workout-card h-100"><span className="type-pill">{workout.category}</span><h3>{workout.title}</h3><p>{workout.target}</p><div className="workout-meta"><span>{workout.durationMinutes} min</span><span>{workout.difficulty}</span></div></article></div>)}</div>
    </section>
  )
}

export default Workouts