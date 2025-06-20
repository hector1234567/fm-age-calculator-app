import { it, expect, describe, vitest, beforeEach } from "vitest";

import { getDaysMonthsAndYearsFromBirthdate, itsAValidDate } from "./utils";

describe("getDaysMonthsAndYearsFromBirthdate", () => {
  beforeEach(() => {
    const mockedDate = new Date(2024, 3, 2); // January 2, 2024
    vitest.useFakeTimers("modern");
    vitest.setSystemTime(mockedDate);
  });

  it("Should return the correct years", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(2, 4, 2014);
    expect(result.days).toBe(0);
    expect(result.months).toBe(0);
    expect(result.years).toBe(10);
  });

  it("Should return the correct months", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(2, 5, 2023);
    expect(result.days).toBe(0);
    expect(result.months).toBe(11);
    expect(result.years).toBe(0);
  });

  it("Should return the correct days", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(3, 3, 2024);
    expect(result.days).toBe(30);
    expect(result.months).toBe(0);
    expect(result.years).toBe(0);
  });

  it("Should return the correct dayd, months and years", () => {
    const result = getDaysMonthsAndYearsFromBirthdate(12, 9, 1984); // Sept 12, 1984
    expect(result.days).toBe(21);
    expect(result.months).toBe(6);
    expect(result.years).toBe(39);
  });
});

describe("itsAValidDate", () => {
  it("Wrong day should return false", () => {
    const result = itsAValidDate(32, 3, 2024);
    expect(result).toBe(false);
  });

  it("Wrong month should return false", () => {
    const result = itsAValidDate(2, 13, 2024);
    expect(result).toBe(false);
  });

  it("Should return true", () => {
    const result = itsAValidDate(4, 3, 2024);
    expect(result).toBe(true);
  });

  it("Should return true", () => {
    const result = itsAValidDate(21, 3, 1987);
    expect(result).toBe(true);
  });
});
