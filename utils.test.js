import { it, expect, describe, vitest, beforeEach } from "vitest";

import { getDaysMonthsAndYearsFromBirthdate } from "./utils";

describe("mocking Date with Jest", () => {
  beforeEach(() => {
    const mockedDate = new Date(2024, 3, 2); // January 2, 2024
    vitest.useFakeTimers("modern");
    vitest.setSystemTime(mockedDate);
  });

  it("Should return the correct years", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(2, 3, 2014);
    expect(result.days).toBe(0);
    expect(result.months).toBe(0);
    expect(result.years).toBe(10);
  });

  it("Should return the correct months", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(2, 4, 2023);
    expect(result.days).toBe(0);
    expect(result.months).toBe(11);
    expect(result.years).toBe(0);
  });

  it("Should return the correct days", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(3, 2, 2024);
    expect(result.days).toBe(30);
    expect(result.months).toBe(0);
    expect(result.years).toBe(0);
  });

  it("Should return the correct dayd, months and years", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(12, 8, 1984); // Sept 12, 1984
    expect(result.days).toBe(21);
    expect(result.months).toBe(6);
    expect(result.years).toBe(39);
  });
});
