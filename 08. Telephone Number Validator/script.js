const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

const checkValidNumber = input => {
  if (input === '') {
    alert('Please provide a phone number');
    return;
  }
  //This is Indian Phone Number Validator
const countryCode = '^(\\+91\\s?|91\\s?)?'; // Optional +91 or 91 with or without a space
const spacesDashes = '[\\s\\-]?';
const phoneNumber = '[6-9][0-9]{4}[\\s\\-]?[0-9]{5}$'; // 10-digit number starting with 6-9
const phoneRegex = new RegExp(
  `${countryCode}${spacesDashes}${phoneNumber}`
);


  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  phoneRegex.test(input)
    ? (pTag.style.color = '#00471b')
    : (pTag.style.color = '#4d3800');
  pTag.appendChild(
    document.createTextNode(
      `${phoneRegex.test(input) ? 'Valid' : 'Invalid'} IN number: ${input}`
    )
  );
  resultsDiv.appendChild(pTag);
};

checkBtn.addEventListener('click', () => {
  checkValidNumber(userInput.value);
  userInput.value = '';
});

userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkValidNumber(userInput.value);
    userInput.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  resultsDiv.textContent = '';
});
