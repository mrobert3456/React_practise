import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
test("renders hello word as a text", () => {
  //arrange
  render(<Greeting />);

  //Act
  //...nothing here

  //assert
  const helloWordElement = screen.getByText(/hello word/i);
  expect(helloWordElement).toBeInTheDocument();
});
