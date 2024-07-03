document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    let i = 1;

    const printNumber = () => {
        if (i <= 100) {
            const numberElement = document.createElement('div');
            if (i % 3 === 0 && i % 5 === 0) {
                numberElement.textContent = 'FooBar';
            } else if (i % 3 === 0) {
                numberElement.textContent = 'Foo';
            } else if (i % 5 === 0) {
                numberElement.textContent = 'Bar';
            } else {
                numberElement.textContent = i;
            }
            container.appendChild(numberElement);
            i++;
            setTimeout(printNumber, 300);
        }
    };

    printNumber();
});