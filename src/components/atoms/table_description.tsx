import AddGradeButton from "./add_grade_button";

export default function TableDescription() {
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">
          Notes
        </h1>
        <p className="mt-2 text-sm text-gray-700">
          La liste de toutes les notes entrées dans le système.
        </p>
      </div>
      <AddGradeButton />
    </div>
  );
}
