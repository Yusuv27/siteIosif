function showSupportText() {
    var supportText = document.getElementById("supportText");
    var copyMessage = document.getElementById("copyMessage");

    // Показать рамку с номером
    supportText.classList.toggle("visible");

    // Убедиться, что сообщение о копировании скрыто до нажатия
    copyMessage.style.display = "none";
}

function copyToClipboard(text) {
    // Создание временного текстового элемента для копирования
    var tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy"); // Копирование текста

    // Удаление временного элемента
    document.body.removeChild(tempInput);

    // Показать сообщение о копировании
    var copyMessage = document.getElementById("copyMessage");
    copyMessage.style.display = "block"; // Показать сообщение
    setTimeout(function() {
        copyMessage.style.display = "none"; // Скрыть сообщение через 2 секунды
    }, 2000);
}

document.addEventListener("DOMContentLoaded", function() {
    var content = document.querySelector(".content");
    content.classList.add("visible"); // Показать контент после загрузки страницы

    // Функция для загрузки сайдбара
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('Ошибка загрузки сайдбара:', error));
});

// Пример функции показа номера поддержки
function showSupportText() {
    var supportText = document.getElementById('supportText');
    supportText.classList.toggle('visible'); // Переключение видимости
}

