import Grade from "components/atoms/Grade.interface";

export default function GradeTableRow({ grade }: { grade: Grade }) {
  let backgroundColor = "bg-green-300";

  if (grade.grade < 8) {
    backgroundColor = "bg-red-300";
  } else if (grade.grade < 10) {
    backgroundColor = "bg-orange-300";
  } else if (grade.grade < 13) {
    backgroundColor = "bg-yellow-300";
  }

  return (
    <tr key={grade.id} className={backgroundColor}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {grade.title}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {grade.grade}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {grade.dateAdded}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 truncate">
        {grade.comment.slice(0, 30)}...
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
}
