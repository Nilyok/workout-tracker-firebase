
import React, { useMemo, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


function parseAvg(str) {
  if (!str) return null
  const nums = String(str).split(/[^\d.]+/).filter(Boolean).map(n => parseFloat(n)).filter(n => !isNaN(n))
  if (!nums.length) return null
  return Math.round(nums.reduce((a,b)=>a+b,0) / nums.length)
}
export default function ProgressChart({ state }) {
  const [exerciseName, setExerciseName] = useState('Barbell Bench Press')
  const data = useMemo(() => {
    const timeline = Object.entries(state || {}).flatMap(([day, rows]) => rows.map(r => ({ day, name: r.name, avg: parseAvg(r.weight) })))
    return timeline.filter(t => t.name === exerciseName && t.avg != null).map((f, idx) => ({ idx, weight: f.avg, day: f.day }))
  }, [state, exerciseName])
  const allExercises = useMemo(() => {
    const set = new Set(); Object.values(state || {}).forEach(rows => rows.forEach(r => set.add(r.name)))
    return Array.from(set).sort()
  }, [state])
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <label className="text-sm text-slate-300">Exercise:</label>
        <select className="input" value={exerciseName} onChange={(e)=>setExerciseName(e.target.value)}>
          {[exerciseName, ...allExercises.filter(n=>n!==exerciseName)].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="weight" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {!data.length && <p className="text-sm text-slate-400 mt-2">Add weights for this exercise to see progress.</p>}
    </div>
  )
}
