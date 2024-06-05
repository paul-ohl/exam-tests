import Card from "components/molecules/card";
import { useGradeStore } from "components/store/grade_store";
import { useState } from "react";

export default function AddGradeButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addGrade = useGradeStore((state) => state.add);

  const submitAction = (elt: any) => {
    elt.preventDefault();
    addGrade({
      id: Math.floor(Math.random() * 100000),
      title: elt.target.title.value,
      grade: parseInt(elt.target.grade.value),
      dateAdded: new Date().toISOString(),
      comment: elt.target.comment.value,
    });
    setIsModalOpen(false);
  };

  return (
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      {isModalOpen && (
        <Card setIsOpen={setIsModalOpen}>
          <h2
            className="text-lg font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            Ajouter une note
          </h2>
          <form
            onSubmit={(elt) => {
              submitAction(elt);
            }}
            className="mt-6"
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Note
              </label>
              <input
                type="number"
                name="grade"
                id="grade"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Commentaire
              </label>
              <input
                type="text"
                name="comment"
                id="comment"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-visible:ring-indigo-500 focus-visible:border-indigo-500 sm:text-sm"
              />
            </div>
            <input
              type="submit"
              className="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Ajouter la note"
            />
          </form>
        </Card>
      )}
      <button
        type="button"
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setIsModalOpen(true)}
      >
        Ajouter une note
      </button>
    </div>
  );
}
