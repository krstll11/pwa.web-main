document.addEventListener("DOMContentLoaded", () => {
    const heightInput = document.querySelector("#height input");
    const weightInput = document.querySelector("#weight input");
    const outputInput = document.querySelector("#output input");
    const calculateButton = document.querySelector("#btn");
    if (!heightInput || !weightInput || !outputInput || !calculateButton) {

        return;
    }

    calculateButton.addEventListener("click", () => {

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        if (!height || !weight || height <= 0 || weight <= 0) {
            alert("Введите корректные значения роста и веса!");
            return;
        }

        const heightInMeters = height / 100; 
        const bmi = (weight / (heightInMeters ** 2)).toFixed(2); 

        console.log(`Рост: ${height}, Вес: ${weight}, ИМТ: ${bmi}`); 
        outputInput.value = bmi;
    });
});