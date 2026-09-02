import { useEffect, useState } from 'react'
import { apiBaseUrl, normalizeCollection } from '../api.js'

function Leaderboard() {
  const [entries, setEntries] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/leaderboard/`).then((response) => {
      if (!response.ok) throw new Error('Unable to load leaderboard')
      return response.json()
    }).then((payload) => setEntries(normalizeCollection(payload))).catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <section>
      <div className="section-heading"><div><p className="eyebrow">Competition</p><h2>Leaderboard</h2></div><span className="count-badge">This week</span></div>
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="data-card p-0 overflow-hidden"><ol className="leaderboard-list mb-0">{entries.map((entry) => <li key={entry._id || entry.rank}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><span className="avatar small">{entry.user?.avatar || entry.user?.name?.slice(0, 2)}</span><span className="member-name">{entry.user?.name || entry.user}</span><span className="streak">{entry.streak} day streak</span><strong>{entry.score} pts</strong></li>)}</ol></div>
    </section>
  )
}

export default Leaderboard