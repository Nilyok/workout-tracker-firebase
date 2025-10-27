
import React, { useEffect, useMemo, useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Dumbbell, BarChart3, RefreshCw, Sun, Moon } from 'lucide-react'
import workouts from './data/workouts'
import DayCard from './components/DayCard'
import ProgressChart from './components/ProgressChart'
import { loadLocal, saveLocal, clearLocal } from './utils/storage'
import { applyTheme, getTheme } from './utils/theme'
import AuthProvider, { useAuth } from './utils/authProvider.jsx'
import { auth } from './firebase'
import { signOut } from 'firebase/auth'
import { loadWorkouts, saveWorkouts } from './utils/db'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'

const dayList = Object.keys(workouts)

function AppShell() {
  const { user } = useAuth()
  const [selectedDay, setSelectedDay] = useState(dayList[0])
  const [selectedProfile, setSelectedProfile] = useState('Magnum')

  // helper: merge saved state with defaults so we don't lose fields like videoUrl
  function mergeWithDefaults(saved) {
    if (!saved) return JSON.parse(JSON.stringify(workouts))
    const merged = {}
    for (const day of Object.keys(workouts)) {
      const baseList = workouts[day] || []
      const savedList = (saved && saved[day]) || []
      merged[day] = baseList.map((baseEx, i) => ({ ...baseEx, ...(savedList[i] || {}) }))
    }
    return merged
  }

  const [state, setState] = useState(() => mergeWithDefaults(loadLocal(selectedProfile)))
  const [theme, setTheme] = useState(getTheme())

  useEffect(() => { applyTheme(theme) }, [theme])

  useEffect(() => {
    if (!user) return
    ;(async () => {
      const remote = await loadWorkouts(user.uid)
      if (remote) setState(prev => mergeWithDefaults({ ...prev, ...remote }))
    })()
  }, [user])

  const dayData = useMemo(() => state[selectedDay] || [], [state, selectedDay])
  const today = new Date().toLocaleDateString()

  function updateDay(newRows) {
    const next = { ...state, [selectedDay]: newRows }
    setState(next)
    saveLocal(next, selectedProfile)
    if (user) saveWorkouts(user.uid, next).catch(console.error)
  }

  function resetAll() {
    if (!confirm('Reset all progress?')) return
    clearLocal(selectedProfile)
    const base = workouts
    setState(base)
    if (user) saveWorkouts(user.uid, base).catch(console.error)
  }

  // Profile selector handler: save current profile, switch and load new
  function onChangeProfile(newProfile) {
    if (!newProfile || newProfile === selectedProfile) return
    // save current state to current profile
    saveLocal(state, selectedProfile)
    // load new profile state (or fallback to base workouts)
    const loaded = mergeWithDefaults(loadLocal(newProfile))
    setSelectedProfile(newProfile)
    setState(loaded)
  }

  return (
    <div className="min-h-screen text-slate-100 header-gradient">
      <header className="container-app pt-8 pb-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-sky-500/20 border border-sky-400/20 shadow-soft flex items-center justify-center md:items-start md:justify-start">
              {/* make icon taller on mobile so it visually spans two lines */}
              <Dumbbell className="w-7 h-7 md:w-7 md:h-7 lg:w-8 lg:h-8" />
            </div>
            <div>
              {/* Title + profile selector */}
              <div className="flex items-center gap-3">
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                  {selectedProfile} tracker <span className="opacity-70 md:ml-2">🏋️‍♂️</span>
                </h1>
              </div>
              {/* Subtitle visible only on md+ */}
              <p className="text-slate-300 hidden md:block">{user ? `Signed in: ${user.email}` : 'Sign in to sync across devices'}</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="btn btn-ghost" onClick={resetAll}><RefreshCw className="w-4 h-4 mr-2" /> Reset</button>
            <button className="btn btn-primary" onClick={()=>document.getElementById('chart-section')?.scrollIntoView({behavior:'smooth'})}><BarChart3 className="w-4 h-4 mr-2" /> Charts</button>
            <button className="btn btn-ghost" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}>
              {theme==='dark'? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}{theme==='dark'?'Light':'Dark'}
            </button>
            {user ? (<button className="btn btn-ghost" onClick={()=>signOut(auth)}>Log out</button>) : (<Link className="btn btn-ghost" to="/signin">Sign in</Link>)}
            <Link className="btn btn-ghost" to="/admin">Admin</Link>
          </div>
        </div>

        {/* Profile selector sits below the header as its own line to preserve layout */}
        <div className="mt-3">
          {/* responsive wrapper: center on mobile, align start on md+ */}
          <div className="w-full flex justify-center md:justify-start px-2">
            <select
              value={selectedProfile}
              onChange={(e)=>onChangeProfile(e.target.value)}
              className="input profile-select w-full max-w-[240px] sm:w-40 text-sm px-2 py-1 font-semibold shadow-md truncate box-border"
            >
              <option>Magnum</option>
              <option>Colby</option>
              <option>Isaiah</option>
            </select>
          </div>
        </div>

        <div className="mt-6 card p-4">
          <div className="hidden md:flex flex-wrap gap-2">
            {dayList.map((d) => (
              <button key={d} onClick={() => setSelectedDay(d)} className={`btn ${selectedDay===d?'btn-primary':'btn-ghost'}`}>{d}</button>
            ))}
          </div>
          <div className="md:hidden flex items-center gap-2">
            <select value={selectedDay} onChange={(e)=>setSelectedDay(e.target.value)} className="input flex-1 text-base">
              {dayList.map(d => <option key={d}>{d}</option>)}
            </select>
            <button className="btn btn-ghost" onClick={()=>setTheme(t=>t==='dark'?'light':'dark')}>{theme==='dark'?'☀️':'🌙'}</button>
          </div>
        </div>
      </header>

      <main className="container-app pb-24">
        <DayCard day={selectedDay} data={dayData} onChange={updateDay} />
        <section id="chart-section" className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-5">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2"><BarChart3 className="w-5 h-5" /> Progress (example)</h2>
            <p className="text-sm text-slate-300 mb-4">Pick an exercise to see trends.</p>
            <ProgressChart state={state} />
          </div>
          <div className="card p-5">
            <h2 className="text-xl font-bold mb-2">Notes</h2>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
              <li>Cardio 5–10 min (~10–15% of session).</li>
              <li>Increase weights when top reps feel clean.</li>
              <li>All data saves locally and to your account (if signed in).</li>
            </ul>
          </div>
        </section>
        <div className="mobile-fab md:hidden">
          <button className="btn btn-primary" onClick={()=>document.getElementById('chart-section')?.scrollIntoView({behavior:'smooth'})}>📈</button>
          <button className="btn btn-ghost" onClick={resetAll}>🔄</button>
        </div>
        <footer className="mt-10 text-center text-slate-400 text-sm pb-10">
          Built with React + Tailwind + Recharts • {today} • <Link to="/admin" className="underline">Admin</Link>
        </footer>
      </main>
    </div>
  )
}

export default function App() {
  useEffect(() => applyTheme(getTheme()), [])
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<AppShell />} />
      </Routes>
    </AuthProvider>
  )
}
