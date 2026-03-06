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
        name: "Unidade - Moreira",
        razao: "DROGARIA MOREIRA DE UBERABA LTDA", 
        cnpj: "08.896.228.0001-13",
        address: "Avenida Guarapuava, 545",
        district: "Conjunto Jose Vallim de Melo",
        phone: "(34) 3314-6000 | (34) 99690-2820",
        mapQuery: "Av.+Guarapuava+,+545+-+Conjunto+Jose+Vallim+de+Melo,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Lourdes",
        razao: "DROGARIA DROGALURDES DE UBERABA LTDA", 
        cnpj: "19.346.618/0001-36",
        address: "Avenida Padre Eddie Bernardes Silva, 531",
        district: "Lourdes",
        phone: "(34) 3315-0659 | (34) 99894-9353 | (34) 99149-4584 | (34) 99767-3363",
        mapQuery: "Av.+Padre+Eddie+Bernardes+Silva,+531+-+Lourdes,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Narciso",
        razao: "DROGARIA NARCISO LTDA", 
        cnpj: "26.305.953/0001-51",
        address: "Av. Djalma Castro Alves, 372",
        district: "Bairro Amoroso Costa",
        phone: "(34) 3317-1846 | (34) 99636-4120",
        mapQuery: "Av.+Djalma+Castro+Alves,+372+-+Amoroso+Costa,+Uberaba+-+MG"
    },
    {
        name: "Unidade - MRA",
        razao: "MRA DROGARIAS LTDA", 
        cnpj: "36.861.285/0001-00",
        address: "Av. Santa Beatriz da Silva, 1000 - Loja 1047",
        district: "Bairro Santa Maria",
        phone: "(34) 3314-1122",
        mapQuery: "Av.+Santa+Beatriz+da+Silva,+1000+-+Santa+Maria,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Pacaembu",
        razao: "FAM DROGARIAS LTDA", 
        cnpj: "24.542.696/0001-46",
        address: "Avenida Americo Pessato, 857",
        district: "Pacaembu",
        phone: "(34) 3336-4096 | (34) 99635-1516",
        mapQuery: "Av.+Americo+Pessato,+857+-+Pacaembu,+Uberaba+-+MG"
    },
    {
        name: "Unidade - Santa Rita",
        razao: "DROGARIA SANTA RITA DE UBERABA LTDA", 
        cnpj: "21.689.435/0001-65",
        address: "Av. Lucas Borges, 573",
        district: "Bairro Fabricio",
        phone: "(34) 99771-1929",
        mapQuery: "Av.+Lucas+Borges,+573+-+Fabrício,+Uberaba+-+MG"
    },
    {
        name: "Unidade - MultiDrogas",
        razao: "DROGARIA MULTIDROGAS DE UBERABA LTDA", 
        cnpj: "07.791.995/0001-03",
        address: "Av. Deputado José Marcus Cherem, 1010",
        district: "Vila São Cristóvão",
        phone: "(34) 3318-1010 | (34) 99683-8457 | (34) 99707-7181",
        mapQuery: "Av.+Deputado+José+Marcus+Cherem,+1010+-+Vila+São+Cristóvão,+Uberaba+-+MG"
    }
];

function setUnit(index) {
    const unit = units[index];
    const infoContainer = document.getElementById('contact-info');
    const unitName = document.getElementById('unit-name');
    const unitRazao = document.getElementById('unit-razao');
    const unitCnpj = document.getElementById('unit-cnpj');
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
        unitCnpj.textContent = unit.cnpj;
        unitRazao.textContent = unit.razao;
        addrText.textContent = unit.address;
        bairroText.textContent = unit.district;
        phoneText.textContent = unit.phone;
        
        mapFrame.src = `https://maps.google.com/maps?q=${unit.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        
        infoContainer.style.opacity = '1';
    }, 200);
}