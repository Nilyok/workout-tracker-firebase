import { db } from '../firebase'
import { doc, getDoc, setDoc, serverTimestamp, collection, addDoc, onSnapshot, query, where } from 'firebase/firestore'

export async function loadWorkouts(uid) {
  const ref = doc(db, 'users', uid)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

export async function saveWorkouts(uid, data) {
  const ref = doc(db, 'users', uid)
  await setDoc(ref, { ...data, updatedAt: serverTimestamp() }, { merge: true })
}

// 🔥 NEW: track each completed exercise separately
export async function addWorkout(data) {
  const ref = collection(db, 'workouts')
  await addDoc(ref, { ...data, createdAt: serverTimestamp() })
}

// 🔥 NEW: listen in real time for user’s logged workouts
export function listenToWorkouts(uid, callback) {
  const q = query(collection(db, 'workouts'), where('userId', '==', uid))
  return onSnapshot(q, (snapshot) => {
    const out = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    callback(out)
  })
}
