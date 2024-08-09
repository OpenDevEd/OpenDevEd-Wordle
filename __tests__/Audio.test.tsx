import Home from "@/app/page";
import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Audio", () => {
	let audioMock: typeof Audio;

	beforeEach(() => {
		audioMock = global.Audio;
	});

	afterEach(() => {
		global.Audio = audioMock;
	});

	const correctWord = "tests";

	test("should play the correct sound when there's no hint to reveal anymore", async () => {
		const ret = render(<Home presetWord={correctWord} />);
		for (let i = 0; i < correctWord.length; i++)
			await userEvent.click(screen.getByTestId("hint-button"));
		global.Audio = jest.fn().mockImplementation((v) => ({
			play: () => {
				expect(v).toBe("/deny.mp3");
			},
		}));
		await userEvent.click(screen.getByTestId("hint-button"));
	});

	test("should play the correct sound when typing", async () => {
		render(<Home presetWord={correctWord} />);
		global.Audio = jest.fn().mockImplementation((v) => ({
			play: () => {
				expect(v).toBe("/typing.wav");
			},
		}));
		await userEvent.keyboard("a");
	});

	test("should play the correct sound when backspacing", async () => {
		render(<Home presetWord={correctWord} />);
		await userEvent.keyboard("a");
		global.Audio = jest.fn().mockImplementation((v) => ({
			play: () => {
				expect(v).toBe("/backspace.wav");
			},
		}));
		await userEvent.keyboard("{Backspace}");
	});
});
