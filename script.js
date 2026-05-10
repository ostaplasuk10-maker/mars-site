let count = 0;
const rock = document.getElementById('target-rock');
const scoreDisplay = document.getElementById('score');

rock.addEventListener('click', () => {
    count += 10;
    scoreDisplay.innerText = count;
    
    rock.style.boxShadow = "0 0 40px #ff4500";
    setTimeout(() => {
        rock.style.boxShadow = "0 0 20px #ff3300";
    }, 100);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-c').forEach(el => {
    observer.observe(el);
});
function startMeteorShower() {
    const container = document.getElementById('fx-container');
    

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const meteor = document.createElement('div');
            meteor.className = 'meteor';
            
        
            const startX = Math.random() * window.innerWidth;
            const duration = Math.random() * 1 + 0.5; 
            
            meteor.style.left = startX + 'px';
            meteor.style.top = '-100px';
            
           
            meteor.style.transform = 'rotate(15deg)';
            
            container.appendChild(meteor);

           
            meteor.animate([
                { top: '-100px', left: startX + 'px', opacity: 1 },
                { top: window.innerHeight + 'px', left: (startX + 200) + 'px', opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'linear'
            }).onfinish = () => meteor.remove();
            
        }, i * 100); 
    }
}
