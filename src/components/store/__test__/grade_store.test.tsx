import { test, expect, vi, describe, beforeEach } from "vitest";
import { useGradeStore } from "../grade_store";

describe("Store Zustand grade", () => {
  beforeEach(() => {
    const { removeAll } = useGradeStore.getState();
    removeAll();
  });

  test("Test can add a picture in the picture array", () => {
    const { add } = useGradeStore.getState();

    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });

    const { grades } = useGradeStore.getState();
    expect(grades).toMatchSnapshot();
  });

  test("Test can add multiple element in the picture array", () => {
    const { add } = useGradeStore.getState();

    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });
    add({
      id: 2,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });

    const { grades } = useGradeStore.getState();
    expect(grades).toMatchSnapshot();
  });

  test("Test can delete a picture in the picture array", () => {
    const { add, remove } = useGradeStore.getState();

    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });
    remove(1);

    const { grades } = useGradeStore.getState();
    expect(grades).toEqual([]);
  });

  test("Test can remove a picture in mutiple picture array", () => {
    const { add, remove } = useGradeStore.getState();

    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });
    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });
    remove(1);

    const { grades } = useGradeStore.getState();
    expect(grades).toMatchSnapshot();
  });

  test("Test can remove elt that doesnt exist", () => {
    const { remove } = useGradeStore.getState();
    remove(1);

    const { grades } = useGradeStore.getState();
    expect(grades).toEqual([]);
  });

  test("Test can reset the data inside the store", () => {
    const { add, removeAll } = useGradeStore.getState();

    add({
      id: 1,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });
    add({
      id: 2,
      grade: 1,
      title: "test",
      comment: "test",
      dateAdded: "2021-10-10",
    });

    removeAll();

    const { grades } = useGradeStore.getState();
    expect(grades).toEqual([]);
  });
});
