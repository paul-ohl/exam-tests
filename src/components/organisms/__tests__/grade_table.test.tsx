import { render, fireEvent, screen } from "@testing-library/react";
import { test, vi, afterEach, expect } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import GradeTable from "../grade_table.tsx";

const handleRemoveAll = vi.fn();

afterEach(() => {
  handleRemoveAll.mockReset();
});

test("loads and displays greeting", async () => {
  const grades = [
    {
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    },
    {
      id: 2,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    },
  ];

  render(<GradeTable removeAll={handleRemoveAll} grades={grades} />);

  expect(screen.getAllByRole("row").length).toBe(3);
});
