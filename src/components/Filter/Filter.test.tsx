import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { IFilterData } from "@interfaces";
import Filter from "./Filter";

describe("Filters", () => {
  const handleChange = vi.fn();
  const mockData: IFilterData[] = [{ onChange: handleChange, title: "test" }];
  it("Filters mounted", () => {
    render(<Filter data={mockData} />);
    expect(screen.getAllByTestId("input").length).toBe(1);
  });
  it("Input change", () => {
    render(<Filter data={mockData} />);
    fireEvent.change(screen.getByTestId("input"), {
      target: { value: "test" },
    });
    expect(handleChange).toHaveBeenCalledOnce();
  });
  it("Check Placeholder", () => {
    render(<Filter data={mockData} />);
    expect(screen.getByPlaceholderText("test")).toBeTruthy();
  });
});
