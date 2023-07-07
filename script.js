let dayField = document.querySelector(".day-field");
let monthField = document.querySelector(".month-field");
let yearField = document.querySelector(".year-field");
let activationBtn = document.querySelector(".age-calculator .btn");
const monthsDaysLimit = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

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
    if (day.value === '') {
        dayField.classList.add('error', 'empty');
        validNumbers = false;
    } else if (isNaN(day.value) || day.value <= 0 || day.value > 31) {
        dayField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    if (month.value === '') {
        monthField.classList.add('error' , 'empty');
        validNumbers = false;
    } else if (isNaN(month.value) || month.value <= 0 || month.value > 12) {
        monthField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    if (year.value === '') {
        yearField.classList.add('error' , 'empty');
        validNumbers = false;
    } else if (isNaN(year.value) || year.value < 0 || year.value > nowDate.getFullYear()) {
        yearField.classList.add('error', 'invalid');
        validNumbers = false;
    }

    // calculate the results if the date is valid
    if (validNumbers) {
        let birthdate = new Date(year.value, month.value - 1, day.value);


        if (nowDate.getMonth() >= birthdate.getMonth()) {
            yearsResult.innerText = nowDate.getFullYear() - birthdate.getFullYear();
            monthsResult.innerText = nowDate.getMonth() - birthdate.getMonth();
        } else {
            yearsResult.innerText = nowDate.getFullYear() - birthdate.getFullYear() - 1;
            monthsResult.innerText = 12 - birthdate.getMonth() + nowDate.getMonth();
        }
        daysResult.innerText = Math.abs(birthdate.getDate() - nowDate.getDate());
    }
}
