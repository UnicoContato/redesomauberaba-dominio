document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('glass-strong', 'shadow-sm');
            header.classList.remove('py-4');
            header.classList.add('py-2');
        } else {
            header.classList.remove('glass-strong', 'shadow-sm', 'py-2');
            header.classList.add('py-4');
        }

        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    let isMenuOpen = false;

    menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('scale-y-0');
        } else {
            mobileMenu.classList.add('scale-y-0');
        }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            isMenuOpen = false;
            mobileMenu.classList.add('scale-y-0');
        });
    });

    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(el => revealOnScroll.observe(el));

    const modal = document.getElementById('modal-privacy');
    const modalContent = document.getElementById('modal-content');
    const openBtn = document.getElementById('open-privacy');
    const closeBtn = document.getElementById('close-modal-btn');
    const closeBg = document.getElementById('close-modal-bg');

    function openModal() {
        modal.classList.remove('hidden');
        setTimeout(() => {
            modalContent.classList.add('modal-show');
            modalContent.style.opacity = '1';
        }, 10);
    }

    function closeModal() {
        modalContent.classList.remove('modal-show');
        modalContent.style.opacity = '0';
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    }

    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeBtn.addEventListener('click', closeModal);
    closeBg.addEventListener('click', closeModal);
});

const units = [
    {
        name: "Unidade - Santa Maria",
        address: "Av. Santa Beatriz da Silva, 1000 - Loja 1047",
        district: "Bairro Santa Maria",
        phone: "(34) 3332-2020",
        mapQuery: "Av.+Santa+Beatriz+da+Silva,+1000+-+Santa+Maria,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Fabricio",
        address: "Av. Lucas Borges, 573",
        district: "Bairro Fabricio",
        phone: "(34) 3332-2020",
        mapQuery: "Av.+Lucas+Borges,+573+-+Fabrício,+Uberaba+-+MG"
    },
    {
        name: "Unidade - São Cristóvão",
        address: "Av. Deputado José Marcus Cherem, 1010",
        district: "Vila São Cristóvão",
        phone: "(34) 3332-2020",
        mapQuery: "Av.+Deputado+José+Marcus+Cherem,+1010+-+Vila+São+Cristóvão,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Amoroso Costa",
        address: "Av. Djalma Castro Alves, 372",
        district: "Bairro Amoroso Costa",
        phone: "(34) 3332-2020",
        mapQuery: "Av.+Djalma+Castro+Alves,+372+-+Amoroso+Costa,+Uberaba+-+MG"
    }
];

function setUnit(index) {
    const unit = units[index];
    const infoContainer = document.getElementById('contact-info');
    const unitName = document.getElementById('unit-name');
    const addrText = document.getElementById('addr-text');
    const bairroText = document.getElementById('bairro-text');
    const phoneText = document.getElementById('phone-text');
    const mapFrame = document.getElementById('map-frame');
    
    const buttons = document.querySelectorAll('.unit-btn');
    buttons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    infoContainer.style.opacity = '0';
    
    setTimeout(() => {
        unitName.textContent = unit.name;
        addrText.textContent = unit.address;
        bairroText.textContent = unit.district;
        phoneText.textContent = unit.phone;
        
        mapFrame.src = `https://maps.google.com/maps?q=${unit.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        
        infoContainer.style.opacity = '1';
    }, 200);
}