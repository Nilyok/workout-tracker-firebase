// src/firebase.js
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs 
} from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// --- Firebase Config ---
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID,
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID,
};

// --- Singleton-safe Initialization ---
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// --- Core Firebase Services ---
export const auth = getAuth(app);
export const db = getFirestore(app);

// --- Analytics (optional) ---
isSupported().then((ok) => ok && getAnalytics(app));

// --- Firestore Helper Functions ---
export const addWorkout = async (data) => {
  try {
    const ref = await addDoc(collection(db, 'workouts'), {
      ...data,
      createdAt: new Date().toISOString(),
    });
    console.log('✅ Workout saved with ID:', ref.id);
    return ref.id;
  } catch (error) {
    console.error('❌ Error saving workout:', error);
    throw error;
  }
};

export const getWorkouts = async () => {
  try {
    const snap = await getDocs(collection(db, 'workouts'));
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('❌ Error fetching workouts:', error);
    throw error;
  }
};

export default app;
