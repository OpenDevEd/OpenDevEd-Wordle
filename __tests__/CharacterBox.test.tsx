import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CharacterBox from "@/components/CharacterBox";

describe("CharacterBox", () => {
    test("should render the correct letter and the correct color", () => {
        render(<CharacterBox 
            attemptColors={[["yellow", "yellow", "gray", "gray", "green"]]}
            attempts={["balls"]}
            randomWord="abyss"
            columnIndex={2}
            rowIndex={0}
            currentString=""
            isKeyDown={false}
        />)
        expect(screen.getByTestId(`column-2`)).toHaveTextContent("l");
        expect(screen.getByTestId(`column-2`)).toHaveClass("!bg-card-400");
    })
});
