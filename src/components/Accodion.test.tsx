// import { describe, expect, test } from "vitest";
import { Accordion } from "./Accordion";
import { render, screen } from "@testing-library/react";

describe("Accordion", () => {
  test("should render Accordioncomponent", () => {
    render(
      <Accordion title="Hello">
        <p>World</p>
      </Accordion>
    );
    expect(screen.getByText("Hello")).toBeDefined();
  });
});
