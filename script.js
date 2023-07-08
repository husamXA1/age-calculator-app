let dayField = document.querySelector(".day-field");
let monthField = document.querySelector(".month-field");
let yearField = document.querySelector(".year-field");
let activationBtn = document.querySelector(".age-calculator .btn");
const monthsDaysLimit = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let yearsResult = document.querySelector(".results__years span");
let monthsResult = document.querySelector(".results__months span");
let daysResult = document.querySelector(".results__days span");

activationBtn.onclick = () => {
    let nowDate = new Date(Date.now());

    // reset results
    yearsResult.innerText = monthsResult.innerText = daysResult.innerText = "--";

    // reset the classes of the input fields
    dayField.classList.remove("error", "empty", "invalid");
    monthField.classList.remove("error", "empty", "invalid");
    yearField.classList.remove("error", "empty", "invalid");

    // Check if a field is empty or has invalid number
    let validNumbers = true;

    if (year.value === '') {
        yearField.classList.add('error' , 'empty');
        validNumbers = false;
    } else if (isNaN(year.value) || year.value < 0 || year.value > nowDate.getFullYear()) {
        yearField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    // Set days limit for febreuary
    monthsDaysLimit[1] = isLeapYear(year.value) ? 29 : 28;

    if (month.value === '') {
        monthField.classList.add('error' , 'empty');
        validNumbers = false;
    } else if (isNaN(month.value) || month.value <= 0 || month.value > 12) {
        monthField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    if (day.value === '') {
        dayField.classList.add('error', 'empty');
        validNumbers = false;
    } else if (isNaN(day.value) || day.value <= 0 || day.value > monthsDaysLimit[month.value - 1]) {
        dayField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    // calculate the results if the date is valid
    if (validNumbers) {
        let birthYear = year.value;
        let birthMonth = month.value - 1;
        let birthDay = day.value;

        if (nowDate.getMonth() >= birthMonth) {
            yearsResult.innerText = nowDate.getFullYear() - birthYear;
            monthsResult.innerText = nowDate.getMonth() - birthMonth;
        } else {
            yearsResult.innerText = nowDate.getFullYear() - birthYear - 1;
            monthsResult.innerText = 12 - birthMonth + nowDate.getMonth();
        }
        daysResult.innerText = Math.abs(birthDay - nowDate.getDate());
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}