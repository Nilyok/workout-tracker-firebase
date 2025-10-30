import React, { useState } from "react";
import { addWorkout } from "../firebase";
import ImageModal from "./ImageModal";
import YouTubeModal from "./YouTubeModal"; // 👈 Import YouTube modal

export default function ExerciseRow({ row, onChange, workoutDate }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  async function onToggle(e) {
    const completed = e.target.checked;
    onChange({ completed });

    if (completed) {
      const data = {
        userId: "magnum",
        date: workoutDate || new Date().toISOString().split("T")[0],
        exercise: row.name,
        sets: row.sets ?? "",
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

  const handleChange = (field, value) => onChange({ [field]: value });

  const imageUrl = row.imageUrl || "https://via.placeholder.com/100x100?text=Workout";

  return (
    <>
      <div className="px-2">
        {/* 💻 Desktop layout */}
        <div className="hidden md:grid row-grid">
          <div className="hidden md:block col-span-4">
            <div className="font-medium flex items-center gap-2">
              <span>{row.name}</span>

              {/* 🎥 Video link - Now opens modal */}
              {row.videoUrl && (
                <button
                  onClick={() => setIsVideoModalOpen(true)}
                  className="text-sky-400 hover:underline text-sm"
                >
                  Video
                </button>
              )}

              {/* 🖼️ Image link - Opens modal */}
              {imageUrl && (
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="text-sky-400 hover:underline text-sm"
                >
                  Image
                </button>
              )}
            </div>
          </div>

          <div className="hidden md:block col-span-1 text-center">
            <input
              className="input text-center"
              type="number"
              min="0"
              placeholder="Set"
              value={row.sets ?? ""}
              onChange={(e) => handleChange("sets", e.target.value)}
            />
          </div>

          <div className="hidden md:block col-span-1 text-center">
            <input
              className="input text-center"
              value={row.reps ?? ""}
              placeholder="Reps"
              onChange={(e) => handleChange("reps", e.target.value)}
            />
          </div>

          <div className="hidden md:block col-span-2">
            <input
              className="input text-center"
              type="text"
              placeholder="Weight (lb)"
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
                <p className="text-base flex items-center gap-2">
                  <span>{row.name}</span>

                  {row.videoUrl && (
                    <button
                      onClick={() => setIsVideoModalOpen(true)}
                      className="text-sky-400 hover:underline text-sm"
                    >
                      Video
                    </button>
                  )}

                  {imageUrl && (
                    <button
                      onClick={() => setIsImageModalOpen(true)}
                      className="text-sky-400 hover:underline text-sm"
                    >
                      Image
                    </button>
                  )}
                </p>
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
                placeholder="Sets"
                value={row.sets ?? ""}
                onChange={(e) => handleChange("sets", e.target.value)}
                className="input w-full text-base"
              />
              <input
                placeholder="Reps"
                value={row.reps ?? ""}
                onChange={(e) => handleChange("reps", e.target.value)}
                className="input w-full text-base"
              />
              <input
                placeholder="Weight (lb)"
                value={row.weight ?? ""}
                onChange={(e) => handleChange("weight", e.target.value)}
                className="input w-full text-base"
              />
              <textarea
                rows="2"
                placeholder="Notes / RPE / cardio time"
                value={row.notes ?? ""}
                onChange={(e) => handleChange("notes", e.target.value)}
                className="input w-full text-base resize-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={imageUrl}
        exerciseName={row.name}
      />

      {/* YouTube Modal */}
      <YouTubeModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={row.videoUrl}
        exerciseName={row.name}
      />
    </>
  );
}