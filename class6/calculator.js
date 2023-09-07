function calculator() {
  const operation = Number(prompt('Choose an operation.\n 1 - Addition [+]\n 2 - Subtraction [-]\n 3- Multiplication [*]\n 4 - Division [/]\n 5 - Remainder [%]\n 6 - Exponentiation [**]'));

  if (!operation || operation >= 7) {
    alert('Invalid operation! Type an valid value.')
    calculator();
  } else {
      let n1 = Number(prompt('Choose the first value.'));
      let n2 = Number(prompt('Choose the second value.'));
      let result;

      if (n1 == 0 && n2 == 0) {
        n1 = 1;
        n2 = 1;
      };

      function addiction() {
        result = n1+n2
        alert(`${n1} + ${n2}: ${result}.`)
      }

      function subtraction() {
        result = n1-n2
        alert(`${n1} - ${n2}: ${result}.`)
      }

      function multiplication() {
        result = n1*n2
        alert(`${n1} * ${n2}: ${result}.`)
      }

      function division() {
        result = n1/n2
        alert(`${n1} / ${n2}: ${result}.`)
      }

      function remainder() {
        result = n1%n2
        alert(`The remainder on the divison between ${n1} & ${n2} is: ${result}.`)
      }

      function exponentiation() {
        result = n1**n2
        alert(`${n1} powered by ${n2} is: ${result}.`)
      }

      if (operation == 1) {
        addiction();
      } else if (operation == 2) {
        subtraction();
      } else if (operation == 3) {
        multiplication();
      } else if (operation == 4) {
        division();
      } else if (operation == 5) {
        remainder();
      } else if (operation == 6) {
        exponentiation();
      }

      let option = prompt('Do you want to do another operation?\n 1 - Yes\n 2 - No')
      if (option == 1) {
        calculator();
      } else if (option == 2) {
        alert('Okay, bye!')
      } else {
        alert('Type an valid option.')
        calculator();
      }
  }
}

calculator();