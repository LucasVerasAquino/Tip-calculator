const billValueInput = document.querySelector(".bill-input");
const peopleAmountInput = document.querySelector(".people-input");
const showTipValue = document.querySelector(".tip-value");
const showTotalValue = document.querySelector(".total-value");
const percentageButtonOptions = document.querySelectorAll(
    ".tip-percentage-button"
);
const customPercentageButton = document.querySelector(
    ".custom-percentage-button"
);

//Função para selecionar o botão de porcentagem
const selectPercentageButton = () => {
    for (const percentageButton of percentageButtonOptions) {
        percentageButton.addEventListener("click", (e) => {
            const clickedPercentageButtonOption = e.target;
            const customPercentageButtonValue = customPercentageButton.value;

            if (isSomePercentageButtonSelected()) {
                for (const percentageButton of percentageButtonOptions) {
                    percentageButton.classList.remove("selected");
                }
            }

            //Se o valor do custom percentage for maior que 0 ao clicar em um percentage button, será zerado
            if (customPercentageButtonValue.length > 0) {
                customPercentageButton.value = "";
            }

            clickedPercentageButtonOption.classList.add("selected");

            //Rodando as funções para atualizar os valores
            updateValues();
        });
    }
};

//Função para obter a porcentagem do botão selecionado
const getSelectedPercentage = () => {
    const customPercentageButtonValue = customPercentageButton.value;

    //Se o custom percentage estiver alguma numeração, retornar esse valor
    if (customPercentageButtonValue.length > 0) {
        return customPercentageButtonValue;
    }

    for (const percentageButton of percentageButtonOptions) {
        if (percentageButton.classList.contains("selected")) {
            return percentageButton.getAttribute("data-value");
        }
    }
};

//Função para verificar se alguma opção de porcentagem já está selecionada
const isSomePercentageButtonSelected = () => {
    for (const percentageButton of percentageButtonOptions) {
        if (percentageButton.className === "tip-percentage-button selected") {
            return true;
        }
    }
};

//Função para pegar o valor da gorjeta
const getTipValue = () => {
    const billValue = billValueInput.value;

    const tipValue = (billValue * getSelectedPercentage()) / 100;
    return tipValue;
};

//Função para calcular a quantia em gorjeta divido para cada pessoa
const getTipValuePerPerson = () => {
    const tipValue = getTipValue();
    const peopleAmount = peopleAmountInput.value;

    //Só realizar o calculo caso haja mais de uma pessoa
    if (peopleAmount.length > 0) {
        const tipValuePerPerson = tipValue / peopleAmount;
        return tipValuePerPerson;
    } else {
        return tipValue;
    }
};

//Função para calcular o total da conta incluindo a gorjeta divido para cada pessoa
const getTotalBillValuePerPerson = () => {
    const tipValue = getTipValue();
    const billValue = billValueInput.value;
    const peopleAmount = peopleAmountInput.value;

    if (peopleAmount.length > 0) {
        const billValuePerPerson =
            (parseFloat(billValue) + parseFloat(tipValue)) / peopleAmount;
        return billValuePerPerson;
    } else {
        return parseFloat(billValue) + parseFloat(tipValue);
    }
};

//Atualizar o valor mostrado ao mudar o valor de bill e ao mudar quantidade de pessoas
const updateValues = () => {
    const tipValuePerPerson = showTipValue;
    const totalValuePerPerson = showTotalValue;

    getSelectedPercentage();
    getTipValue();
    getTipValuePerPerson();
    getTotalBillValuePerPerson();

    tipValuePerPerson.innerText = "$" + getTipValuePerPerson();
    totalValuePerPerson.innerText = "$" + getTotalBillValuePerPerson();
};

selectPercentageButton();

//eventListener no custom percentage button
customPercentageButton.addEventListener("keyup", () => {
    //Retirando a seleção do percentage button caso algum valor seja inserido
    if (isSomePercentageButtonSelected()) {
        for (const percentageButton of percentageButtonOptions) {
            percentageButton.classList.remove("selected");
        }
    }

    //Rodando as funções para atualizar os valores
    updateValues();
});

//eventListener para o billInput
billValueInput.addEventListener("keyup", () => {
    const billValue = billValueInput.value;

    if (isSomePercentageButtonSelected()) {
        updateValues();
    }
});

//eventListener para o peopleInput
peopleAmountInput.addEventListener("keyup", () => {
    const customPercentageButtonValue = customPercentageButton.value;

    if (isSomePercentageButtonSelected()) {
        updateValues();
    }
});
//Limitar as casas decimais no valor mostrado ao usuário
//Resolver o NaN após zerar o custom percentage
//Proibir entrada do caractere "." nos inputs
//Não permitir casas decimais no input de pessoas
//Resolver o NaN no total value per person
