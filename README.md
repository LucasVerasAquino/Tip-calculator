# Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). In this challenge I decided to go a step further in the difficulty of the project, and after finishing it I'm sure I have matured my ability to think about solutions even before putting my hand on the code.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the app depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Calculate the correct tip and total cost of the bill per person

### Screenshot

![](/images/desktop.PNG)
![](/images/mobile.PNG)

### Links

-   Live Site URL: [https://thetipsplitter.netlify.app/](https://thetipsplitter.netlify.app/)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS Custom Properties
-   Flexbox
-   Vanilla JavaScript

### What I learned

As mentioned above, in this project I decided to challenge myself and take a step forward in the difficulty of a project. There were days of a lot of learning and research, where I learned new methods of Vanilla Javascript, in addition to maturing my programming logic. As I seek to carry out the solutions following my own logic, it was very interesting to know what I was able to solve, where each small step taken in the project motivated me even more to want to finish it. That said, it was very interesting to work and deepen my knowledge of functions a little more, especially in this project, where I had to dynamically manipulate them, since the values ​​would have to be displayed and updated in real time.

And below is the function that deserves to be highlighted, as it is responsible for updating the values ​​in real time and showing them to the user:

```js
const updateValues = () => {
    const tipValuePerPerson = showTipValue;
    const totalValuePerPerson = showTotalValue;
    const billValue = billValueInput.value;
    const peopleAmount = peopleAmountInput.value;

    //Atualizando todos os cálculos
    getSelectedPercentage();
    getTipValue();
    getTipValuePerPerson();
    getTotalBillValuePerPerson();

    //Validando se o billInput está zerado
    if (billValue.length > 0) {
        billValueInput.classList.remove("error");
        billErrorMessage.style.visibility = "hidden";
    } else {
        billValueInput.classList.add("error");
        billErrorMessage.style.visibility = "visible";
    }

    //Validando se o peopleAmountInput está zerado
    if (peopleAmount.length > 0) {
        peopleAmountInput.classList.remove("error");
        peopleInputErrorMessage.style.visibility = "hidden";
    } else {
        peopleAmountInput.classList.add("error");
        peopleInputErrorMessage.style.visibility = "visible";
    }

    //Atualizando os valores mostrados ao usuário
    if (billValue.length > 0) {
        tipValuePerPerson.innerText = "$" + getTipValuePerPerson().toFixed(2);
        totalValuePerPerson.innerText =
            "$" + getTotalBillValuePerPerson().toFixed(2);
    } else {
        tipValuePerPerson.innerText = "$0.00";
        totalValuePerPerson.innerText = "$0.00";
    }

    //Executando função para verificar se deve ou não disponibilizar o botão de reset
    ResetButtonIsAvailable();
};
```

### Continued development

After this great learning experience, I feel that with each new project I just get excited to learn even more. Discover new methods and further mature my ability, thus being able to develop more elaborate applications with more robust and comprehensive solutions. However, this project showed me the usefulness and possibilities that functions have, and I intend to continue working on them in future projects, as I still need to get familiar with the use of parameters within functions, as I believe that this will bring greater dynamism and lightness to the code.

### Useful resources

-   [Useful regex](https://www.mundojs.com.br/2018/07/05/expressoes-regulares-para-o-dia-a-dia/) - This site helped me a lot when setting up the input validation regex, which contains several useful regex for my day-to-day.

## Author

-   Frontend Mentor - [@LucasVerasAquino](https://www.frontendmentor.io/profile/LucasVerasAquino)
-   LinkedIn - [Lucas Veras](https://www.linkedin.com/in/lucas-veras-aquino-95a7361b1/)

## Acknowledgments

I would like to use this ending to also thank the help of my friend Rodrigo Rodrigues, who helped me when preparing the necessary calculations for the application to work.
