/* ============================================================
   ANIMATIONS ENGINE - Smooth, premium, interactive experience
   ============================================================ */

const bienvenida = document.getElementById('bienvenida');
const tarjeta = document.getElementById('tarjeta');
const regalo = document.getElementById('regalo');
const carta = document.getElementById('carta');
const finalSection = document.getElementById('final');
const btnComenzar = document.getElementById('btnComenzar');
const btnAbrir = document.getElementById('btnAbrir');
const btnProximo = document.getElementById('btnProximo');
const gift = document.getElementById('gift');
const textoCarta = document.getElementById('textoCarta');
const petalosContainer = document.getElementById('petalos');

// ============================================================
// Utility Functions
// ============================================================

function mostrar(elemento) {
    elemento.classList.remove('oculto');
}

function ocultar(elemento) {
    elemento.classList.add('oculto');
}

function randomBetween(min, max) {
    return min + Math.random() * (max - min);
}

// ============================================================
// PÉTALOS: Falling petals with natural variation
// ============================================================

function spawnPetal() {
    const petalo = document.createElement('span');
    petalo.className = 'petal';
    const size = Math.floor(randomBetween(10, 16));
    petalo.style.width = `${size}px`;
    petalo.style.height = `${size}px`;
    petalo.style.left = `${randomBetween(0, 100)}%`;
    // Random horizontal drift for natural falling
    petalo.style.setProperty('--drift', `${randomBetween(-40, 40)}px`);
    const duration = randomBetween(8, 15);
    petalo.style.animationDuration = `${duration}s`;
    petalo.style.animationDelay = `${randomBetween(0, 4)}s`;
    petalo.style.opacity = `${randomBetween(0.65, 0.95)}`;
    petalosContainer.appendChild(petalo);
    // Cleanup to prevent memory leak
    petalo.addEventListener('animationend', () => petalo.remove(), { once: true });
}

function crearPetalos() {
    // Initial batch of petals
    for (let i = 0; i < 12; i++) {
        spawnPetal();
    }
    // Continuous generation for ambient effect
    setInterval(() => {
        spawnPetal();
    }, 900);
}

// ============================================================
// RAMO: Sequential building with smooth animations
// ============================================================

function buildBouquetSequence() {
    const elements = [
        {
            el: document.getElementById('papel'),
            delay: 0,
            name: 'papel'
        },
        {
            el: document.getElementById('tallo'),
            delay: 320,
            name: 'tallo'
        },
        {
            el: document.querySelector('.leaf1'),
            delay: 640,
            name: 'hoja1'
        },
        {
            el: document.querySelector('.leaf2'),
            delay: 920,
            name: 'hoja2'
        },
        {
            el: document.querySelector('.flower1'),
            delay: 1200,
            name: 'flor1',
            isFlower: true
        },
        {
            el: document.querySelector('.flower2'),
            delay: 1480,
            name: 'flor2',
            isFlower: true
        },
        {
            el: document.querySelector('.flower3'),
            delay: 1760,
            name: 'flor3',
            isFlower: true
        },
        {
            el: document.querySelector('.flower4'),
            delay: 2040,
            name: 'flor4',
            isFlower: true
        },
        {
            el: document.querySelector('.flower5'),
            delay: 2320,
            name: 'flor5',
            isFlower: true
        },
        {
            el: document.getElementById('mono'),
            delay: 2600,
            name: 'mono'
        }
    ];

    // Prepare all elements
    elements.forEach(item => {
        if (!item.el) return;
        item.el.classList.add('build-item');
        item.el.style.opacity = '0';
        item.el.style.willChange = 'transform, opacity';
    });

    // Reveal sequence
    elements.forEach(item => {
        if (!item.el) return;

        setTimeout(() => {
            if (item.isFlower) {
                // Flowers: special animation with rotation and scale
                const rotation = Math.round(randomBetween(-18, 18));
                const scale = randomBetween(0.88, 1.14);
                const skew = randomBetween(-3, 3);

                item.el.style.transform = `
                    translateY(25px) 
                    rotate(${rotation}deg) 
                    scale(${scale}) 
                    skewX(${skew}deg)
                `;
                item.el.style.opacity = '0';

                requestAnimationFrame(() => {
                    item.el.classList.add('show');
                    item.el.style.transition =
                        'transform 520ms cubic-bezier(0.34, 1.56, 0.64, 1), ' +
                        'opacity 420ms ease-out';
                    item.el.style.transform = `
                        translateY(0) 
                        rotate(${rotation}deg) 
                        scale(${scale}) 
                        skewX(${skew}deg)
                    `;
                    item.el.style.opacity = '1';

                    // Subtle bounce effect
                    item.el.animate(
                        [
                            {
                                transform: `
                                    translateY(0) 
                                    rotate(${rotation}deg) 
                                    scale(${scale}) 
                                    skewX(${skew}deg)
                                `
                            },
                            {
                                transform: `
                                    translateY(-10px) 
                                    rotate(${rotation}deg) 
                                    scale(${scale}) 
                                    skewX(${skew}deg)
                                `
                            },
                            {
                                transform: `
                                    translateY(0) 
                                    rotate(${rotation}deg) 
                                    scale(${scale}) 
                                    skewX(${skew}deg)
                                `
                            }
                        ],
                        {
                            duration: 480,
                            easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }
                    );
                });
            } else {
                // Non-flower elements: simple reveal
                item.el.style.transform = 'translateY(20px)';
                item.el.style.opacity = '0';

                requestAnimationFrame(() => {
                    item.el.classList.add('show');
                    item.el.style.transition =
                        'transform 480ms cubic-bezier(0.34, 1.56, 0.64, 1), ' +
                        'opacity 380ms ease-out';
                    item.el.style.transform = 'translateY(0)';
                    item.el.style.opacity = '1';
                });
            }

            // After last element, activate gentle sway and show button
            if (item.name === 'mono') {
                setTimeout(() => {
                    const bouquet = document.getElementById('bouquet');
                    bouquet.classList.add('bouquet-sway');
                    mostrar(btnProximo);
                }, 500);
            }
        }, item.delay);
    });
}

// ============================================================
// CARTA: Typewriter effect with elegant rendering
// ============================================================

function escribirCarta() {
    const message =
        'Que este día esté lleno de risas, abrazos y momentos bonitos. Gracias por ser especial y por dejarme compartir este pequeño regalo contigo.';

    textoCarta.textContent = '';
    textoCarta.style.minHeight = '5.4em';

    let index = 0;
    const speed = 32; // milliseconds per character

    const typeInterval = setInterval(() => {
        if (index < message.length) {
            textoCarta.textContent += message[index];
            index += 1;
        } else {
            clearInterval(typeInterval);
            // Remove cursor after typing completes
            setTimeout(() => {
                textoCarta.style.opacity = '1';
            }, 200);
        }
    }, speed);
}

// ============================================================
// MAIN FLOW: Section transitions
// ============================================================

btnComenzar.addEventListener('click', () => {
    ocultar(bienvenida);
    setTimeout(() => {
        mostrar(tarjeta);
    }, 500);
});

btnAbrir.addEventListener('click', () => {
    ocultar(tarjeta);
    setTimeout(() => {
        mostrar(regalo);
    }, 450);

    // Open lid with proper timing
    setTimeout(() => {
        gift.classList.add('abrir');
        // Wait for lid to open, then build bouquet
        setTimeout(() => {
            buildBouquetSequence();
        }, 750);
    }, 900);
});

btnProximo.addEventListener('click', () => {
    // Transition to carta
    ocultar(regalo);
    setTimeout(() => {
        mostrar(carta);
        const cartaCard = document.querySelector('#carta .card');
        cartaCard.classList.add('fade-up');

        requestAnimationFrame(() => {
            cartaCard.classList.add('show');
        });

        // Start typewriter effect
        setTimeout(() => {
            escribirCarta();
        }, 600);

        // Transition to final section after time
        setTimeout(() => {
            ocultar(carta);
            mostrar(finalSection);
        }, 5600);
    }, 200);
});

// ============================================================
// INITIALIZATION
// ============================================================

window.addEventListener('load', () => {
    // Small delay for smooth initial rendering
    setTimeout(() => {
        crearPetalos();
    }, 100);
});
