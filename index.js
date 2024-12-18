document.addEventListener('DOMContentLoaded', function () {
    const birthday = new Date(new Date().getFullYear(), 11, 17);
    const countdownElement = document.getElementById('countdown');
    const headingElement = document.querySelector('h1');
    let intervalId;

    function updateCountdown() {
        const now = new Date();
        let difference = birthday - now;

        if (difference < 0) {
            birthday.setFullYear(birthday.getFullYear() + 1);
            difference = birthday - now;
        }

        const diffSeconds = Math.floor(difference / 1000);
        const days = Math.floor(diffSeconds / (3600 * 24));
        const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);
        const seconds = diffSeconds % 60;

        countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds`;

        if (difference <= 0) {
            clearInterval(intervalId);
            startCelebration();
        }
    }

    function startCelebration() {
        let toggler = true;
        let toggleCount = 0;

        const celebrationInterval = setInterval(() => {
            headingElement.classList.toggle('animated', toggler);
            countdownElement.classList.toggle('hidden', toggler);
            headingElement.innerHTML = toggler ? "Happy Birthday Ghaly!" : "";
            toggler = !toggler;

            toggleCount++;
            if (toggleCount >= 60) {
                clearInterval(celebrationInterval); 
                headingElement.innerHTML = "";
                countdownElement.classList.remove('hidden');
                intervalId = setInterval(updateCountdown, 1000);
            }
        }, 1000);
    }

    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});
