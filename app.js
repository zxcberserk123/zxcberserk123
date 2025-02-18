 // Проверяем, запущено ли приложение в Telegram
if (window.Telegram && window.Telegram.WebApp) {
    const webApp = Telegram.WebApp;

    // Инициализация приложения
    webApp.ready();

    // Обработка кнопки
    document.getElementById('sendDataButton').addEventListener('click', () => {
        const data = { message: 'Hello from Mini App!' };
        webApp.sendData(JSON.stringify(data)); // Отправляем данные в бота
        webApp.close(); // Закрываем мини-приложение
    });
} else {
    console.log("This app is not running in Telegram.");
}