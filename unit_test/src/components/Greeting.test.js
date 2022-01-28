import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
describe("Greeting component", () => {
  test("renders hello word as a text", () => {
    //arrange
    render(<Greeting />);

    //Act
    //...nothing here

    //assert
    const helloWordElement = screen.getByText(/hello word/i);
    expect(helloWordElement).toBeInTheDocument();
  });

  test("renders  good to see you if the button was NOT clicked", () => {
    //arrange
    render(<Greeting />);

    //Act
    //...nothing here
    //assert
    const outputElement = screen.getByText(/ good to see you/i);
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed if the button was clicked", () => {
    //arrange
    render(<Greeting />);

    //act
    const buttonElement =screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText(/Changed/i);
    expect(outputElement).toBeInTheDocument();
  });

  test('does not render  good to see you if the button was clicked',()=>{
       //arrange
    render(<Greeting />);

    //act
    const buttonElement =screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.queryByText(/good to see you/i);
    expect(outputElement).toBeNull();
  })
});
