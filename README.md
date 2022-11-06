# Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). In this challenge I decided to go a step further in the difficulty of the project, and after finishing it I'm sure I learned new methods and matured my ability to think about solutions even before putting my hand on the code.

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

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

**Note: Delete this note and the content within this section and replace with your own learnings.**

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

-   [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
-   [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

-   Website - [Add your name here](https://www.your-site.com)
-   Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
-   Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
