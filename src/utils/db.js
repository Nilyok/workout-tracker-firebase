import { db } from '../firebase'
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore'

/* ---------------------------
   🧠 LOAD workouts for a specific profile
   Uses document key = userId_profileName
--------------------------- */
export async function loadWorkouts(uid, profileName = 'default') {
  const ref = doc(db, 'users', `${uid}_${profileName}`)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

/* ---------------------------
   💾 SAVE workouts for a specific profile
   Merges data to avoid overwriting existing info
--------------------------- */
export async function saveWorkouts(uid, profileName = 'default', data) {
  const ref = doc(db, 'users', `${uid}_${profileName}`)
  await setDoc(ref, { ...data, updatedAt: serverTimestamp() }, { merge: true })
}

/* ---------------------------
   🏋️ ADD a completed exercise log
   Includes both userId and profileName for clarity
--------------------------- */
export async function addWorkout(data) {
  const ref = collection(db, 'workouts')
  await addDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
  })
}

/* ---------------------------
   🔄 LISTEN to workouts for a specific profile (real-time updates)
--------------------------- */
export function listenToWorkouts(uid, profileName, callback) {
  const q = query(
    collection(db, 'workouts'),
    where('userId', '==', uid),
    where('profileName', '==', profileName)
  )
  return onSnapshot(q, (snapshot) => {
    const out = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    callback(out)
  })
}
