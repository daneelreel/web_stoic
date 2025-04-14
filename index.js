document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
        "Мудрость начинается с удивления. – Сократ",
        "Наша жизнь такова, каковы наши мысли. – Марк Аврелий",
        "Не страдания делают нас несчастными, а то, как мы к ним относимся. – Эпиктет",
        "Счастлив тот, кто доволен своим настоящим. – Сенека",
        "Не ищи счастья вовне, оно внутри тебя. – Эпиктет",
        "Мужество — это не отсутствие страха, а способность действовать вопреки ему. – Сенека",
        "Судьба ведет того, кто желает, и тащит того, кто не желает. – Клеанф",
        "Истинная свобода – это власть над собой. – Эпиктет",
        "Не все, что имеет цену, ценно. – Сенека",
        "Человек причиняет себе больше вреда, чем ему может причинить любой враг. – Марк Аврелий",
        "Природа дала нам одну речь и два уха, чтобы слушать больше, чем говорить. – Зенон",
        "Счастье – это просто побочный продукт добродетели. – Эпиктет",
        "Не тратьте время на споры о том, каким должен быть хороший человек. Будьте им. – Марк Аврелий",
        "Проблемы не приходят к нам, чтобы нас сломать, а чтобы научить. – Сенека",
        "Не то, что с вами происходит, а то, как вы на это реагируете, имеет значение. – Эпиктет",
        "Гнев – это кратковременное безумие. – Сенека",
        "Счастье зависит от качества ваших мыслей. – Марк Аврелий",
        "Не стоит сожалеть о прошлом, оно не подвластно вам. – Сенека",
        "Смерть – это не зло, смерть – это естественно. – Эпиктет",
        "Цель жизни – жить в согласии с природой. – Зенон",
        "Чем больше - тем стабильнее, чем стабильнее - тем лучше. - Неизвестный"
    ];

    const initialMessage = "Нажмите на кнопку, чтобы получить цитату";
    const quoteDisplay = document.getElementById('quoteDisplay');
    const quoteButton = document.getElementById('quoteButton');
    const customNotification = document.getElementById('customNotification');
    
    quoteDisplay.textContent = initialMessage;

    quoteButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
        quoteDisplay.style.cursor = 'pointer';
        quoteDisplay.classList.add('slide-in');

        setTimeout(() => {
            quoteDisplay.classList.remove('slide-in');
        }, 500); // Убираем класс после завершения анимации
    });

    quoteDisplay.addEventListener('click', function() {
        const quote = quoteDisplay.textContent;
        if (quote !== initialMessage) {
            navigator.clipboard.writeText(quote).then(() => {
                customNotification.style.display = 'block';
                setTimeout(() => {
                    customNotification.style.display = 'none';
                }, 3000); // Уведомление исчезает через 3 секунды
            }).catch(err => {
                console.error('Ошибка копирования: ', err);
            });
        }
    });
});



