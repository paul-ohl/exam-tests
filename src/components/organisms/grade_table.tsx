import Grade from "components/atoms/Grade.interface";
import TableDescription from "components/atoms/table_description";
import GradeTableRow from "components/molecules/grade_table_row";

export default function GradeTable({
  grades,
  removeAll,
}: {
  grades: Grade[];
  removeAll: () => void;
}) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <TableDescription />
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full max-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full max-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Titre
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Note
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Date d'ajout
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Commentaire
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <button
                      onClick={() => {
                        removeAll();
                      }}
                      className="text-red-600 hover:text-red-900"
                    >
                      Tout supprimer
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {grades.map((grade) => (
                  <GradeTableRow key={grade.id} grade={grade} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
