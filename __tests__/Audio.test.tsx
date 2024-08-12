import { describe } from "node:test";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MainContainer from "@/components/MainContainer";

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
		const ret = render(<MainContainer presetWord={correctWord} />);
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
		render(<MainContainer presetWord={correctWord} />);
		global.Audio = jest.fn().mockImplementation((v) => ({
			play: () => {
				expect(v).toBe("/typing.wav");
			},
		}));
		await userEvent.keyboard("a");
	});

	test("should play the correct sound when backspacing", async () => {
		render(<MainContainer presetWord={correctWord} />);
		await userEvent.keyboard("a");
		global.Audio = jest.fn().mockImplementation((v) => ({
			play: () => {
				expect(v).toBe("/backspace.wav");
			},
		}));
		await userEvent.keyboard("{Backspace}");
	});
});
