// import { describe, expect, test } from "vitest";
import { Accordion } from "./Accordion";
import { render, screen, fireEvent } from "@testing-library/react";

describe("Accordion", () => {
  beforeEach(() => {
    render(
      <Accordion title="Hello">
        <h3>Some title</h3>
        <p>Some content</p>
      </Accordion>
    );
  });

  test("should display default title all time", () => {
    expect(screen.getByText("Hello")).toBeDefined();
  });

  test("should not accordion content at the first time", () => {
    expect(screen.queryByText(/content/i)).toBeNull();
  });

  test("should accordion content when click on the button", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeDefined();
  });

  test("should close accordion content when click on the button", () => {
    const button = screen.getByText(/open/i);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.queryByText(/content/i)).toBeNull();
  });
});
