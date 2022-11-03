const billValueInput = document.querySelector(".bill-input");
const peopleAmountInput = document.querySelector(".people-input");
const showTipValue = document.querySelector(".tip-value");
const showTotalValue = document.querySelector(".total-value");
const billErrorMessage = document.querySelector(".bill-error-message");
const peopleInputErrorMessage = document.querySelector(".people-error-message");
const resetButton = document.querySelector(".reset-button");
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
    } else {
        for (const percentageButton of percentageButtonOptions) {
            if (percentageButton.classList.contains("selected")) {
                return percentageButton.getAttribute("data-value");
            }
        }

        return "0.00";
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

    if (billValue.length > 0) {
        const tipValue = (billValue * getSelectedPercentage()) / 100;
        return tipValue;
    } else {
        return "0.00";
    }
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
    } else if (billValue.length > 0) {
        return parseFloat(billValue) + parseFloat(tipValue);
    } else {
        return "0.00";
    }
};

//Atualizar o valor mostrado ao mudar o valor de bill e ao mudar quantidade de pessoas
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

    ResetButtonIsAvailable();
};

const ResetButtonIsAvailable = () => {
    const billValue = billValueInput.value;

    if (getTipValue() > 0 && billValue.length > 0) {
        resetButton.classList.remove("unable");
        return true;
    } else {
        resetButton.classList.add("unable");
    }
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
    //Rodando as funções para atualizar os valores
    updateValues();
});

//eventListener para o peopleInput
peopleAmountInput.addEventListener("keyup", () => {
    const peopleAmount = peopleAmountInput.value;

    if (!checkPeopleAmount(peopleAmount)) {
        peopleAmountInput.preventDefault();
    }

    //Rodando as funções para atualizar os valores
    updateValues();
});

resetButton.addEventListener("click", () => {
    if (ResetButtonIsAvailable()) {
        billValueInput.value = "";
        peopleAmountInput.value = "";
        for (const percentageButton of percentageButtonOptions) {
            percentageButton.classList.remove("selected");
        }
    }

    updateValues();
});

//Não permitir casas decimais no input de pessoas
//Regex para entrada somente de número nos inputs
function checkPeopleAmount(peopleAmount) {
    return /^\d+$/.test(peopleAmount);
}
