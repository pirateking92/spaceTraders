import { it, expect, vi, describe } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import NewGame from "../components/StartPage";
import { BrowserRouter as Router } from "react-router-dom";

const createMockResponse = (data: any) => {
  return {
    ok: true,
    json: () => Promise.resolve(data),
    headers: new Headers(),
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic" as ResponseType,
    url: "https://api.spacetraders.io/v2/register",
    clone: function () {
      return this;
    },
    body: null,
    bodyUsed: false,
    arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
    blob: () => Promise.resolve(new Blob()),
    formData: () => Promise.resolve(new FormData()),
    text: () => Promise.resolve(JSON.stringify(data)),
  };
};
// original single test that was already her
describe("original test from beginning", () =>
  it("renders", async () => {
    // Arrange
    render(
      <Router>
        <NewGame />
      </Router>
    );

    // Act
    await screen.findByRole("heading");

    // Assert
    expect(screen.getByRole("heading")).toHaveTextContent("SPAAAACE");
  }));

// generating random 5 character string for username input
const generateRandomUser = () => {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
};

describe("NewGame response", () => {
  it("calls the API with a random username and receives relevant data", async () => {
    // Mock the fetch function to simulate the API response
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: { token: "test-token" } }),
      })
    );

    // Mock localStorage to spy on the setItem method
    const localStorageMock = {
      getItem: vi.fn(),
      setItem: vi.fn(),
      clear: vi.fn(),
    };
    Object.defineProperty(window, "localStorage", { value: localStorageMock });
    // Generate a random user and render the component
    const randomUser = generateRandomUser();

    // Find the input fields
    const symbolInput = screen.getByLabelText("Agent Name");
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate user input by typing the random user into the symbol input
    fireEvent.change(symbolInput, { target: { value: randomUser } });

    // Simulate clicking the submit button
    fireEvent.click(submitButton);

    // Wait for the fetch request to resolve and verify the expected outcome
    await waitFor(() => {
      // Check that fetch was called with the correct API endpoint and body
      expect(global.fetch).toHaveBeenCalledWith(
        "https://api.spacetraders.io/v2/register",
        expect.objectContaining({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            symbol: randomUser,
            faction: "COSMIC",
          }),
        })
      );

      // adding part that checks if the token is saved in localStorage
      expect(localStorage.setItem).toHaveBeenCalledWith("token", "test-token");

      // Check that the token is displayed in the component
      expect(screen.getByText(/token: test-token/i)).toBeInTheDocument();
    });
  });
});

// // ADD THIS AFTER SOME NEW FEATURES
// describe("Error Verification", () => {
//   it("", async () => {
//     render(<NewGame />);
//   });
// });
