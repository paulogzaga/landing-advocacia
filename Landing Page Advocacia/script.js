// Menu Mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Header fixo com sombra ao rolar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards
document.querySelectorAll('.area-card, .depoimento-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// Formulário de contato
const form = document.getElementById('formulario-contato');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação básica
    if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um e-mail válido!');
        return;
    }

    // Criar mensagem para WhatsApp
    const whatsappNumber = '5521991676001'; // Substitua pelo número correto
    const whatsappMessage = `
*Nova mensagem do site - Advocacia*

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Área de Interesse:* ${getAssuntoText(assunto)}

*Mensagem:*
${mensagem}
    `.trim();

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Mostrar mensagem de sucesso
    alert('Redirecionando para o WhatsApp...');

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');

    // Limpar formulário
    form.reset();
});

// Função auxiliar para obter texto do assunto
function getAssuntoText(value) {
    const assuntos = {
        'patrimonial': 'Direito Patrimonial e Imobiliário',
        'contratos': 'Contratos',
        'familia': 'Direito de Família',
        'outro': 'Outra área'
    };
    return assuntos[value] || value;
}

// Validação de telefone em tempo real
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length <= 11) {
        if (value.length === 11) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length === 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else if (value.length > 0) {
            value = value.replace(/(\d*)/, '($1');
        }
    }

    e.target.value = value;
});

// Contador de caracteres para textarea (opcional)
const mensagemTextarea = document.getElementById('mensagem');
const maxChars = 500;

mensagemTextarea.addEventListener('input', (e) => {
    if (e.target.value.length > maxChars) {
        e.target.value = e.target.value.substring(0, maxChars);
    }
});

// Animação do botão flutuante do WhatsApp
const whatsappFloat = document.querySelector('.whatsapp-float');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 300) {
        // Scrolling down
        whatsappFloat.style.transform = 'scale(0.8)';
    } else {
        // Scrolling up
        whatsappFloat.style.transform = 'scale(1)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Efeito de digitação removido - título fixo

// Contador de estatísticas (caso queira adicionar)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Prevenção de spam no formulário
let formSubmitted = false;
form.addEventListener('submit', (e) => {
    if (formSubmitted) {
        e.preventDefault();
        alert('Por favor, aguarde alguns segundos antes de enviar novamente.');
        return;
    }

    formSubmitted = true;
    setTimeout(() => {
        formSubmitted = false;
    }, 5000);
});

// Log para debug (remover em produção)
console.log('Landing Page de Advocacia carregada com sucesso!');
