import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function Teams() {
  const [teams, setTeams] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCollection('teams').then(setTeams).catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <section>
      <div className="section-heading">
        <div><p className="eyebrow">Squads</p><h2>Teams</h2></div>
        <span className="count-badge">{teams.length} teams</span>
      </div>
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id || team.name}>
            <article className="data-card team-card h-100">
              <span className="team-mark">+</span>
              <div><h3>{team.name}</h3><p>{team.motto}</p><strong>{team.members?.length || 0} members</strong></div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams