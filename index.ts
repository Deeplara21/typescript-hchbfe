// Import stylesheets
import './style.css';

function bubbleSort(numbers) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < numbers.length; i += 1) {
      if (numbers[i - 1] > numbers[i]) {
        done = false;
        var tmp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = tmp;
      }
    }
  }

  return numbers;
}

var numbers = ['JACK', 'SAM', 'JOHN', 'JOHN'];
bubbleSort(numbers);
console.log('SORTING');
console.log(numbers);

const appDiv: HTMLElement = document.getElementById('app');
// appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
