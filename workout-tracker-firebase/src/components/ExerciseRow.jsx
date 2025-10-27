import React from "react";
import { addWorkout } from "../firebase"; // 👈 Firestore helper import

export default function ExerciseRow({ row, onChange }) {
  // Handle completion toggle
  async function onToggle(e) {
    const completed = e.target.checked;
    onChange({ completed });

    if (completed) {
      // When user marks as done, save to Firestore
      const data = {
        userId: "magnum", // later: replace with actual logged-in user
        date: new Date().toISOString().split("T")[0],
        exercise: row.name,
        sets: row.sets ?? 0,
        reps: row.reps ?? "",
        weight: row.weight ?? "",
        notes: row.notes ?? "",
        done: true,
      };

      try {
        await addWorkout(data);
        console.log("✅ Workout successfully saved to Firestore!");
      } catch (err) {
        console.error("❌ Workout save failed:", err);
      }
    }
  }

  // Handle generic field updates
  const handleChange = (field, value) => {
    onChange({ [field]: value });
  };

  return (
    <div className="px-2">
      {/* 💻 Desktop layout */}
      <div className="hidden md:grid row-grid">
        <div className="hidden md:block col-span-4">
          <div className="font-medium">
            {row.videoUrl ? (
              <a
                href={row.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-slate-100"
                onClick={(e) => {
                  e.preventDefault();
                  console.log("Opening demo:", row.videoUrl);
                  window.open(row.videoUrl, "_blank", "noopener");
                }}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    window.open(row.videoUrl, "_blank", "noopener");
                  }
                }}
              >
                {row.name}
              </a>
            ) : (
              row.name
            )}
            <div className="text-xs text-slate-400 mt-1">
              Click name to view workout
            </div>
          </div>
        </div>

        <div className="hidden md:block col-span-1 text-center">
          <input
            className="input text-center"
            type="number"
            min="0"
            value={row.sets ?? ""}
            onChange={(e) => handleChange("sets", +e.target.value)}
          />
        </div>

        <div className="hidden md:block col-span-1 text-center">
          <input
            className="input text-center"
            value={row.reps ?? ""}
            onChange={(e) => handleChange("reps", e.target.value)}
          />
        </div>

        <div className="hidden md:block col-span-2">
          <input
            className="input text-center"
            type="text"
            placeholder="e.g. 135, 135, 145"
            value={row.weight ?? ""}
            onChange={(e) => handleChange("weight", e.target.value)}
          />
        </div>

        <div className="hidden md:block col-span-1 text-center">
          <input
            className="checkbox"
            type="checkbox"
            checked={!!row.completed}
            onChange={onToggle}
          />
        </div>

        <div className="hidden md:block col-span-3">
          <input
            className="input"
            type="text"
            placeholder="Notes / RPE / cardio time"
            value={row.notes ?? ""}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </div>
      </div>

      {/* 📱 Mobile layout */}
      <div className="md:hidden py-3">
        <div className="bg-slate-800/50 p-4 rounded-2xl mb-2 border border-slate-700/60 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-base">
                {row.videoUrl ? (
                  <a
                    href={row.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-slate-100"
                    onClick={(e) => {
                      e.preventDefault();
                      console.log("Opening demo:", row.videoUrl);
                      window.open(row.videoUrl, "_blank", "noopener");
                    }}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        window.open(row.videoUrl, "_blank", "noopener");
                      }
                    }}
                  >
                    {row.name}
                  </a>
                ) : (
                  row.name
                )}
              </p>
              <div className="text-xs text-slate-400 mt-1">
                Click the name to view the workout example
              </div>
            </div>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!row.completed}
                onChange={onToggle}
                className="w-6 h-6 accent-sky-500"
              />
              Done
            </label>
          </div>

          <div className="space-y-3">
            <input
              type="number"
              min="0"
              placeholder="Sets"
              value={row.sets ?? ""}
              onChange={(e) => handleChange("sets", +e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-base text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              placeholder="Reps"
              value={row.reps ?? ""}
              onChange={(e) => handleChange("reps", e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-base text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <input
              placeholder="Weight (lb)"
              value={row.weight ?? ""}
              onChange={(e) => handleChange("weight", e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-base text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />

            <textarea
              rows="2"
              placeholder="Notes / RPE / cardio time"
              value={row.notes ?? ""}
              onChange={(e) => handleChange("notes", e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-3 text-base text-slate-100 placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
