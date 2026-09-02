import { NavLink, Navigate, Route, Routes } from 'react-router-dom'
import logo from '../../../docs/octofitapp-small.png'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="topbar"><NavLink className="brand" to="/users"><img src={logo} alt="OctoFit" /><span>OctoFit<br /><em>TRACKER</em></span></NavLink><span className="status-dot">Live workspace</span></header>
      <main className="container-fluid app-content"><div className="intro"><p className="eyebrow">Personal performance system</p><h1>Move with purpose.</h1><p className="intro-copy">A clear view of your people, progress, and next best workout.</p></div><nav className="section-nav" aria-label="Primary"><NavLink to="/users">People</NavLink><NavLink to="/teams">Teams</NavLink><NavLink to="/activities">Activity</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/workouts">Workouts</NavLink></nav><Routes><Route path="/users" element={<Users />} /><Route path="/teams" element={<Teams />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/workouts" element={<Workouts />} /><Route path="*" element={<Navigate to="/users" replace />} /></Routes></main>
    </div>
  )
}

export default App
