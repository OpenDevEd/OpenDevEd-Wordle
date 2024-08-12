import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MAX_ATTEMPTS } from "@/constants/game";
import MainContainer from "@/components/MainContainer";

describe("GameContainer", () => {
	const user = userEvent.setup();
	const correctWord = "tests";

	const guessWord = async (word: string) => {
		for (let i = 0; i < word.length; i++) {
			await user.keyboard(word[i]);
		}
		await user.keyboard("[Enter]");
	};

	const correctGuess = async () => {
		render(<MainContainer presetWord={correctWord} />);
		await guessWord(correctWord);
		expect(screen.getByTestId("end-screen")).toHaveClass("opacity-100");
		expect(screen.queryByText("You win!")).toBeInTheDocument();
	};

	test("should fill the cell on input", async () => {
		render(<MainContainer />);
		await user.keyboard("a");
		expect(screen.queryAllByText("a")).toHaveLength(2);
	});

	test("should clear the cell on backspace", async () => {
		render(<MainContainer />);
		await user.keyboard("a");
		await user.keyboard("[Backspace]");
		expect(screen.queryAllByText("a")).toHaveLength(1);
	});

	test("no character that isn't alphabetical, enter, or backspace should be accepted", async () => {
		render(<MainContainer />);
		const characters = [
			"1",
			"!",
			"?",
			" ",
			"%",
			"=",
			"(",
			")",
			"~",
			"\\",
			"/",
			"+",
			"-",
			"*",
			"_",
			"0",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
		];
		for (let i = 0; i < characters.length; i++) {
			await user.keyboard(characters[i]);
			expect(screen.queryByText(characters[i])).toBeNull();
		}
	});

	test("shouldn't do anything when the word is invalid", async () => {
		const home = render(<MainContainer />);
		await guessWord("aaaaa");
		expect(screen.queryAllByTestId("submit-button")[0]).toBeVisible();
	});

	test("should show the win screen when guessing the correct word", async () => {
		await correctGuess();
	});

	test("shoud go back to a cleared grid after the end game screen is clicked on", async () => {
		await correctGuess();
		await userEvent.click(screen.getByText("You win!"));
		expect(screen.getByTestId("end-screen")).not.toHaveClass("opacity-100");
	});

	test("shoud go back to a cleared grid after a keyboard button is pressed", async () => {
		await correctGuess();
		await user.keyboard("a");
		expect(screen.getByTestId("end-screen")).not.toHaveClass("opacity-100");
	});

	test("should show the lose screen when the maximum attempts are reached", async () => {
		render(<MainContainer presetWord={correctWord} />);
		for (let i = 0; i < MAX_ATTEMPTS; i++) {
			await guessWord("meted");
		}
		expect(screen.getByTestId("end-screen")).toHaveClass("opacity-100");
		expect(screen.queryByText("You lose!")).toBeInTheDocument();
	});

	test("should display the right colors for each character", async () => {
		render(<MainContainer presetWord={correctWord} />);
		await guessWord("meted");
		const classes = [
			"!bg-card-400",
			"!bg-green-600",
			"!bg-yellow-600",
			"!bg-card-400",
			"!bg-card-400",
		];
		const children = screen.getByTestId("row-0").children;
		for (let i = 0; i < correctWord.length; i++) {
			expect(children[i]).toHaveClass(classes[i]);
		}
	});

	test("should show the correct amount of hearts", async () => {
		const { container } = render(<MainContainer presetWord={correctWord} />);
		for (let i = 0; i < MAX_ATTEMPTS; i++) {
			await guessWord("meted");
			expect(
				container.querySelectorAll(
					"#gridHearts #heartList .stroke-background-200",
				),
			).toHaveLength(i + 1);
		}
	});

	test("should show all the correct letters when using the hint button", async () => {
		render(<MainContainer presetWord={correctWord} />);
		for (let i = 0; i < correctWord.length; i++) {
			await userEvent.click(screen.getByTestId("hint-button"));
			expect(
				screen.getAllByTestId("hint-character")[i],
			).toHaveTextContent(correctWord[i]);
		}
	});

	test("should show the remainder of the correct letters when using the hint button", async () => {
		render(<MainContainer presetWord={correctWord} />);
		await guessWord("meted");
		expect(screen.getAllByTestId("hint-character")[1]).toHaveTextContent(
			correctWord[1],
		);
		for (let i = 0; i < 4; i++)
			await userEvent.click(screen.getByTestId("hint-button"));
		for (let i = 0; i < 5; i++)
			expect(
				screen.getAllByTestId("hint-character")[i],
			).toHaveTextContent(correctWord[i]);
	});

	test("should show win screen even when theres only one heart remaining", async () => {
		render(<MainContainer presetWord={correctWord} />);
		for (let i = 0; i < MAX_ATTEMPTS - 1; i++) {
			await guessWord("meted");
		}
		await guessWord(correctWord);
		expect(screen.getByTestId("end-screen")).toHaveClass("opacity-100");
		expect(screen.queryByText("You win!")).toBeInTheDocument();
	});
});
