import { describe } from "node:test";
import { act, renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useCanPopOut } from "@/hooks/game";

describe("useCanPopOut", () => {
	test("should return false initially", () => {
		const { result } = renderHook(() => useCanPopOut());
		expect(result.current).toBe(false);
	});

	test("should return true after 750ms", () => {
		jest.useFakeTimers();
		const { result } = renderHook(() => useCanPopOut());
		act(() => {
			jest.advanceTimersByTime(750);
		});
		expect(result.current).toBe(true);
	});

	test("clear timeout on unmount", () => {
		const { result, unmount } = renderHook(() => useCanPopOut());
		const clearTimeout = jest.fn();
		jest.spyOn(global, "clearTimeout").mockImplementation(clearTimeout);
		unmount();
		expect(clearTimeout).toHaveBeenCalledTimes(1);
	});
});
