document.addEventListener('DOMContentLoaded', function () {
    const birthday = new Date(new Date().getFullYear(), 11, 17); // December 17th
    const countdownElement = document.getElementById('countdown');
    const countdownContainer = document.querySelector('.countdown-container');
    const celebrationContainer = document.getElementById('celebration-container');
    let intervalId;

    function updateCountdown() {
        const now = new Date();
        let difference = birthday - now;

       
        if (difference < 0) {
            
            const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
            const birthdayThisYear = new Date(now.getFullYear(), 11, 17);
            
            if (todayStart.getTime() === birthdayThisYear.getTime()) {
                
                clearInterval(intervalId);
                startCelebration();
                return;
            }
            
            birthday.setFullYear(birthday.getFullYear() + 1);
            difference = birthday - now;
        }

        const diffSeconds = Math.floor(difference / 1000);
        const days = Math.floor(diffSeconds / (3600 * 24));
        const hours = Math.floor((diffSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((diffSeconds % 3600) / 60);
        const seconds = diffSeconds % 60;

        countdownElement.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes and ${seconds} Seconds`;

        
        if (difference <= 1000) {
            clearInterval(intervalId);
            startCelebration();
        }
    }

    function startCelebration() {
       
        countdownContainer.classList.add('hidden');
        celebrationContainer.classList.remove('hidden');

       
        createConfetti();
        createBalloons();
        createSparkles();
        createFireworks();

        
        setInterval(createConfetti, 3000);
        setInterval(createBalloons, 4000);
        setInterval(createSparkles, 2000);
        setInterval(createFireworks, 2500);
    }

    function createConfetti() {
        const confettiContainer = document.getElementById('confetti');
        const colors = ['#ff6b9d', '#ffc371', '#c471ff', '#71caff', '#ff71a8', '#71ff9f', '#ffeb71', '#ff7171'];
        const shapes = ['square', 'circle', 'triangle', 'star'];

        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = `confetti ${shapes[Math.floor(Math.random() * shapes.length)]}`;
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                confettiContainer.appendChild(confetti);

                
                setTimeout(() => {
                    confetti.remove();
                }, 5500);
            }, i * 50);
        }
    }

    function createBalloons() {
        const balloonsContainer = document.getElementById('balloons');
        const balloonEmojis = ['🎈', '🎈', '🎈', '🎁', '🎀', '💝'];
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => {
                const balloon = document.createElement('div');
                balloon.className = 'balloon';
                balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
                balloon.style.left = Math.random() * 100 + '%';
                balloon.style.animationDuration = (Math.random() * 4 + 6) + 's';
                balloon.style.fontSize = (Math.random() * 30 + 30) + 'px';
                
                balloonsContainer.appendChild(balloon);

                setTimeout(() => {
                    balloon.remove();
                }, 10000);
            }, i * 300);
        }
    }

    function createSparkles() {
        const sparklesContainer = document.getElementById('sparkles');
        const sparkleChars = ['✨', '⭐', '💫', '🌟', '✦', '★'];

        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.className = 'sparkle';
                sparkle.textContent = sparkleChars[Math.floor(Math.random() * sparkleChars.length)];
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = (Math.random() * 20 + 15) + 'px';
                
                sparklesContainer.appendChild(sparkle);

                
                setTimeout(() => {
                    sparkle.remove();
                }, 1000);
            }, i * 100);
        }
    }

    function createFireworks() {
        const fireworksContainer = document.getElementById('fireworks');
        const colors = ['#ff6b9d', '#ffc371', '#c471ff', '#71caff', '#ff71a8', '#71ff9f'];
        
        
        for (let f = 0; f < 3; f++) {
            setTimeout(() => {
                const x = Math.random() * 80 + 10; // 10-90% of screen width
                const y = Math.random() * 40 + 10; // 10-50% of screen height
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                
                const particleCount = 30;
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.className = 'firework-particle';
                    particle.style.left = x + '%';
                    particle.style.top = y + '%';
                    particle.style.backgroundColor = color;
                    particle.style.boxShadow = `0 0 6px ${color}, 0 0 12px ${color}`;
                    
                    
                    const angle = (i / particleCount) * Math.PI * 2;
                    const velocity = Math.random() * 80 + 60;
                    const tx = Math.cos(angle) * velocity;
                    const ty = Math.sin(angle) * velocity;
                    
                    particle.style.setProperty('--tx', tx + 'px');
                    particle.style.setProperty('--ty', ty + 'px');
                    particle.style.animation = `particle-fly 1.5s ease-out forwards`;
                    particle.style.transform = `translate(${tx}px, ${ty}px)`;
                    
                    
                    particle.animate([
                        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                        { transform: `translate(${tx}px, ${ty}px) scale(0.3)`, opacity: 0 }
                    ], {
                        duration: 1500,
                        easing: 'ease-out',
                        fill: 'forwards'
                    });
                    
                    fireworksContainer.appendChild(particle);
                    
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 1500);
                }
            }, f * 800);
        }
    }


    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
});
