import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import App from "../App";

describe("app", () => {
  it("should display app", () => {
    const container = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
