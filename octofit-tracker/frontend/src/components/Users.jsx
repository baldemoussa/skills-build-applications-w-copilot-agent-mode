import { useEffect, useState } from 'react'
import { apiBaseUrl, normalizeCollection } from '../api.js'

function Users() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(`${apiBaseUrl}/api/users/`).then((response) => {
      if (!response.ok) throw new Error('Unable to load users')
      return response.json()
    }).then((payload) => setUsers(normalizeCollection(payload))).catch((loadError) => setError(loadError.message))
  }, [])

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="eyebrow">Community</p>
          <h2>Members</h2>
        </div>
        <span className="count-badge">{users.length} active</span>
      </div>
      {error && <p className="alert alert-danger">{error}</p>}
      <div className="row g-3">
        {users.map((user) => (
          <div className="col-md-6 col-xl-4" key={user._id || user.email}>
            <article className="data-card h-100">
              <div className="avatar">{user.avatar || user.name?.slice(0, 2)}</div>
              <div>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <strong>{user.points || 0} pts</strong>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Users