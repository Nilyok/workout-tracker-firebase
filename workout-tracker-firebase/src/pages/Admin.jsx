
import React, { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../utils/authProvider.jsx';
import { Navigate } from 'react-router-dom';

export default function Admin() {
  const { user } = useAuth()
  const [rows, setRows] = useState([])
  const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
  if (!user) return <Navigate to="/signin" replace />
  if (user.email !== ADMIN_EMAIL) return <div className="p-6">Not authorized.</div>
  useEffect(() => { (async () => {
    const qs = await getDocs(collection(db, 'users'))
    const out = []; qs.forEach(d => out.push({ id: d.id, ...d.data() }))
    setRows(out)
  })() }, [])
  return (
    <div className="container-app py-8">
      <h1 className="text-2xl font-bold mb-4">Admin — Users</h1>
      <div className="card p-4 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-300">
            <tr><th className="py-2 pr-4">UID</th><th className="py-2 pr-4">Updated At</th><th className="py-2 pr-4">Mon items</th></tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.id} className="border-t border-slate-700/60">
                <td className="py-2 pr-4">{r.id}</td>
                <td className="py-2 pr-4">{r.updatedAt?.toDate?.().toLocaleString?.() || '—'}</td>
                <td className="py-2 pr-4">{Array.isArray(r.Monday) ? r.Monday.length : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
