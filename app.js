// Проверяем, запущено ли приложение в Telegram
if (window.Telegram && window.Telegram.WebApp) {
    const webApp = Telegram.WebApp;

    // Инициализация приложения
    webApp.ready();

    // Обработка кнопки
    document.getElementById('sendDataButton').addEventListener('click', () => {
        const data = { message: 'Hello from Mini App!' };

        // Отправляем данные в бота
        webApp.sendData(JSON.stringify(data));

        // Выводим сообщение на страницу
        const messageElement = document.createElement('p');
        messageElement.textContent = 'Сообщение отправлено: ' + data.message;
        document.body.appendChild(messageElement);
    });
} else {
    console.log("This app is not running in Telegram.");
}