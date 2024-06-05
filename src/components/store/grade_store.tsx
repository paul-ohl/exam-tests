import Grade from "components/atoms/Grade.interface";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// import type { } from '@redux-devtools/extension' // required for devtools typing

interface GradeState {
  grades: Grade[];
  add: (newGrade: Grade) => void;
  remove: (id: number) => void;
  removeAll: () => void;
}

export const useGradeStore = create<GradeState>()(
  devtools(
    persist(
      (set) => ({
        grades: [
          {
            id: 1,
            title: "Maths",
            grade: 12,
            dateAdded: "2021-10-01",
            comment: "Très bon travail",
          },
        ],
        add: (newGrade) =>
          set((state) => ({ grades: [...state.grades, newGrade] })),
        remove: (id) =>
          set((state) => ({
            grades: state.grades.filter((grade) => grade.id !== id),
          })),
        removeAll: () => set({ grades: [] }),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
