
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function SignIn() {
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  async function onSubmit(e) {
    e.preventDefault()
    try { await signInWithEmailAndPassword(auth, email, password); nav('/') } catch (e) { setError(e.message) }
  }
  async function signInGoogle() {
    try { await signInWithPopup(auth, new GoogleAuthProvider()); nav('/') } catch (e) { setError(e.message) }
  }
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
        <form onSubmit={onSubmit} className="space-y-3">
          <input className="input" placeholder="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className="input" placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button className="btn btn-primary w-full">Sign In</button>
        </form>
        <button onClick={signInGoogle} className="btn btn-ghost w-full mt-3">Sign in with Google</button>
        <p className="text-sm text-slate-400 mt-3">No account? <Link to="/signup" className="underline">Sign up</Link></p>
      </div>
    </div>
  )
}
