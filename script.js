const billValueInput = document.querySelector(".bill-input");
const peopleAmountInput = document.querySelector(".people-input");
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

            if (isSomePercentageButtonSelected()) {
                for (const percentageButton of percentageButtonOptions) {
                    percentageButton.classList.remove("selected");
                }
            }

            clickedPercentageButtonOption.classList.add("selected");
            console.log(getSelectedPercentage());
        });
    }
};

//Função para obter a porcentagem do botão selecionado
const getSelectedPercentage = () => {
    const customPercentageButtonValue = customPercentageButton.value;

    if (customPercentageButtonValue.length > 0) {
        for (const percentageButton of percentageButtonOptions) {
            if (percentageButton.classList.contains("selected")) {
                percentageButton.classList.remove("selected");
                return customPercentageButtonValue;
            }
        }
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

//Calcular a quantia em gorjeta divido para cada pessoa

//Calcular o total da conta incluindo a gorjeta divido para cada pessoa

selectPercentageButton();
