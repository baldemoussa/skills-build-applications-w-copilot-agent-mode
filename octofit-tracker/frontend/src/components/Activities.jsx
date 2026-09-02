import { useEffect, useState } from 'react'
import { apiBaseUrl, fetchCollection } from '../api.js'

function Activities() {
  const [activities, setActivities] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection(`${apiBaseUrl}/api/activities/`).then(setActivities).catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Movement log</p><h2>Recent activity</h2></div><span className="count-badge">{activities.length} logged</span></div>
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="table-responsive data-card p-0">
        <table className="table align-middle mb-0">
          <thead><tr><th>Member</th><th>Type</th><th>Duration</th><th>Calories</th><th>Date</th></tr></thead>
          <tbody>{activities.map((activity) => <tr key={activity._id || activity.completedAt}><td>{activity.user?.name || activity.user}</td><td><span className="type-pill">{activity.type}</span></td><td>{activity.durationMinutes} min</td><td>{activity.calories} kcal</td><td>{new Date(activity.completedAt).toLocaleDateString()}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  )
}

export default Activities