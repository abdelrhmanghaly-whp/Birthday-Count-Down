document.addEventListener('DOMContentLoaded', function () {
    const birthday = new Date(new Date().getFullYear(), 11, 17);
    const countdownElement = document.getElementById('countdown');
    const headingElement = document.querySelector('h1');

    function updateCountdown() {
        const now = new Date();
        const difference = birthday - now;

        if (difference < 0) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }

        const diffSeconds = Math.floor(difference / 1000);
        const days = Math.floor(diffSeconds / (3600 * 24));
        const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);
        const seconds = diffSeconds % 60;
        countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds`;

        if (difference <= 0) {
            countdownElement.classList.add('animated');
            headingElement.classList.add('animated');
            headingElement.innerHTML = "Happy Birthday Ghaly!";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
