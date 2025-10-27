
import React from 'react'
import ExerciseRow from './ExerciseRow'
import { Flame } from 'lucide-react'
export default function DayCard({ day, data, onChange }) {
  function updateRow(index, patch) {
    const next = data.map((r, i) => i === index ? { ...r, ...patch } : r)
    onChange(next)
  }
  return (
    <section className="card p-5">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold">{day} Plan</h2>
        <div className="badge badge-blue"><Flame className="w-4 h-4 mr-1" /> 50–60 min • 2/1/1 tempo</div>
      </div>
      <div className="hidden md:grid grid-cols-12 text-xs font-semibold text-slate-300 px-2">
        <div className="col-span-4">Exercise 💪</div>
        <div className="col-span-1 text-center">Sets</div>
        <div className="col-span-1 text-center">Reps</div>
        <div className="col-span-2 text-center">Weight (lb)</div>
        <div className="col-span-1 text-center">Done ✅</div>
        <div className="col-span-3">Notes 🗒️</div>
      </div>
      <div className="divide-y divide-slate-700/60">
        {data.map((row, idx) => (
          <ExerciseRow key={idx} row={row} onChange={(patch) => updateRow(idx, patch)} />
        ))}
      </div>
    </section>
  )
}
