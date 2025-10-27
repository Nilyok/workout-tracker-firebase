
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

const AuthCtx = createContext(null)
export function useAuth() { return useContext(AuthCtx) }
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => onAuthStateChanged(auth, (u)=>{ setUser(u); setLoading(false) }), [])
  if (loading) return <div className="min-h-screen flex items-center justify-center text-slate-300">Loading…</div>
  return <AuthCtx.Provider value={{ user }}>{children}</AuthCtx.Provider>
}
