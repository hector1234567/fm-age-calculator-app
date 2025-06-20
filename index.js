import { getDaysMonthsAndYearsFromBirthdate, itsAValidDate } from "./utils.js";

const formEl = document.querySelector("form");
const resultEl = document.querySelector(".result");
const errorEl = document.querySelector(".error-popup");

function renderResult({ days, months, years }) {
  resultEl.querySelector(
    ".result__days"
  ).innerHTML = `<strong>${days}</strong> ${days === 1 ? "day" : "days"}`;
  resultEl.querySelector(
    ".result__months"
  ).innerHTML = `<strong>${months}</strong> ${
    months === 1 ? "month" : "months"
  }`;
  resultEl.querySelector(
    ".result__years"
  ).innerHTML = `<strong>${years}</strong> ${years === 1 ? "year" : "years"}`;
}

function showErrorMessage(message) {
  errorEl.innerText = message;
  errorEl.style.display = "block";
  setTimeout(() => (errorEl.style.display = "none"), 3000);
}

function handleOnSubmit(ev) {
  try {
    ev.preventDefault();

    const formObj = {};
    new FormData(formEl)
      .entries()
      .forEach(([key, value]) => (formObj[key] = Number(value)));
    const { day, month, year } = formObj;

    if (!itsAValidDate(day, month, year)) {
      throw new Error("Wrong date!");
    }

    const lived = getDaysMonthsAndYearsFromBirthdate(day, month, year);
    renderResult(lived);
  } catch (e) {
    showErrorMessage(e.message);
  }
}

formEl.addEventListener("submit", handleOnSubmit);
