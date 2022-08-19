let elBody = document.querySelector('body');
let elContainer = document.querySelector('div')
let elForm = document.querySelector('form')
let elHeading2 = document.querySelector('h2');
let  elHeading3 = document.querySelector('h3')
let elButton = document.createElement('button')


elForm.appendChild(elHeading2);
elForm.appendChild(elHeading3);
elForm.appendChild(elButton);
elButton.innerHTML = "result"
let numbers = [3.02, -3.65, 5, -9];

let numbersString = numbers.join(", ")
elHeading2.innerHTML =  "Shu sonlarni matematik yaxlitlash va minus son bo'lsa uni musbatga o'girib so'ng array ko'rnishida qaytarish kerak:  " + numbersString ;

let result1;


elForm.addEventListener('submit', function (a) {
    a.preventDefault();
    result1 = document.querySelector( 'h3' );
    elContainer.appendChild (result1);
    result1.innerHTML = sorterNumber(numbers);



});

function sorterNumber(nums) {

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const yaxNumber = Math.round(nums[i]);

        if (yaxNumber < 0) {
            result.push(Math.abs(yaxNumber));

        } else {
            result.push(yaxNumber);
        }

            elBody.style.background = "yellow"
        elButton.style.background = "aqua"
    }

    return result;
}

















