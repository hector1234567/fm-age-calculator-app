import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addYears,
  addMonths,
} from "date-fns";

export function getDaysMonthsAndYearsFromBirthdate(
  birthDay,
  birthMonth,
  birthYear
) {
  const now = new Date();
  const birth = new Date(birthYear, birthMonth - 1, birthDay);

  if (birth.getTime() > now.getTime()) {
    throw new Error("Birth date is too high!");
  }

  const years = differenceInYears(now, birth);
  const dateAfterYears = addYears(birth, years);

  const months = differenceInMonths(now, dateAfterYears);
  const dateAfterMonths = addMonths(dateAfterYears, months);

  const days = differenceInDays(now, dateAfterMonths);

  return { days, months, years };
}

export function itsAValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}
