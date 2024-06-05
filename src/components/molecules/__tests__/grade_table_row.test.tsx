import { render, fireEvent, screen } from "@testing-library/react";
import { test, vi, afterEach } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import GradeTableRow from "../grade_table_row";

test("grade under 8 is red", async () => {
  render(
    <GradeTableRow
      grade={{
        id: 1,
        title: "Math",
        grade: 7,
        dateAdded: "2021-10-10",
        comment: "Good",
      }}
    />
  );

  expect(screen.getByRole("row")).toHaveClass("bg-red-300");
});

test("grade under 10 is orange", async () => {
  render(
    <GradeTableRow
      grade={{
        id: 1,
        title: "Math",
        grade: 9,
        dateAdded: "2021-10-10",
        comment: "Good",
      }}
    />
  );

  expect(screen.getByRole("row")).toHaveClass("bg-orange-300");
});

test("grade under 13 is yellow", async () => {
  render(
    <GradeTableRow
      grade={{
        id: 1,
        title: "Math",
        grade: 11,
        dateAdded: "2021-10-10",
        comment: "Good",
      }}
    />
  );

  expect(screen.getByRole("row")).toHaveClass("bg-yellow-300");
});

test("grade over 13 is green", async () => {
  render(
    <GradeTableRow
      grade={{
        id: 1,
        title: "Math",
        grade: 15,
        dateAdded: "2021-10-10",
        comment: "Good",
      }}
    />
  );

  expect(screen.getByRole("row")).toHaveClass("bg-green-300");
});
