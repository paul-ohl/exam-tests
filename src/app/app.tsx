import GradeTable from "components/organisms/grade_table";
import { useGradeStore } from "components/store/grade_store";

function App() {
  const grades = useGradeStore((state) => state.grades);
  const removeAll = useGradeStore((state) => state.removeAll);

  return (
    <main className="w-4/6 mx-auto mt-10">
      <GradeTable grades={grades} removeAll={removeAll} />
    </main>
  );
}

export default App;
