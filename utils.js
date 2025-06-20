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
  const birth = new Date(birthYear, birthMonth, birthDay);

  const years = differenceInYears(now, birth);
  const dateAfterYears = addYears(birth, years);

  const months = differenceInMonths(now, dateAfterYears);
  const dateAfterMonths = addMonths(dateAfterYears, months);

  const days = differenceInDays(now, dateAfterMonths);

  return { days, months, years };
}
