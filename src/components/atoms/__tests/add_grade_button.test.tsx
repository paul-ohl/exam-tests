import { render, fireEvent, screen } from "@testing-library/react";
import { test, vi, afterEach } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import AddGradeButton from "../add_grade_button.tsx";

test("displays modal on click", async () => {
  render(<AddGradeButton />);

  expect(screen.queryByLabelText("Ajouter une note")).null;

  await userEvent.click(screen.getAllByRole("button")[0]);

  expect(screen.getByLabelText("Ajouter une note")).exist;
});

test("displays modal on click", async () => {
  render(<AddGradeButton />);
  await userEvent.click(screen.getAllByRole("button")[0]);
});
