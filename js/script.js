const navLinks = document.querySelectorAll('.nav-links a');
const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));

function setActiveMenu() {
    const scrollPos = window.scrollY + 130; // 130px = hauteur header + marge
    let currentIndex = 0;

    sections.forEach((section, index) => {
        if (scrollPos >= section.offsetTop) {
            currentIndex = index;
        }
    });

    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[currentIndex].classList.add('active');
}

// Au scroll
window.addEventListener('scroll', setActiveMenu);

// Au clic
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Initialisation
setActiveMenu();

// --------------------------- --------




// Données détaillées de la Faculté DEG
const degDetails = {
    title: "Faculté de Droit, des Sciences Économiques, de Gestion.(DEG)",
    description: "La Faculté DEG regroupe trois mentions principales offrant des formations complètes du niveau Licence au Master.",
    mentions: [
        {
            name: "DROIT",
            icon: "⚖️",
            description: "Formation juridique complète couvrant le droit privé et public dans le contexte des pays de l'Océan Indien",
            parcours: [
                {
                    level: "L1-L2",
                    name: "Parcours « Droit général »",
                    details: "Formation de base en droit couvrant les fondamentaux juridiques",
                    admission: "Sélection sur dossier pour bacheliers séries A1 ou A2"
                },
                {
                    level: "L3",
                    name: "Parcours « Droit privé » ou « Droit public »",
                    details: "Spécialisation selon l'orientation choisie",
                    specialites: ["Droit privé", "Droit public"]
                },
                {
                    level: "M1",
                    name: "Parcours « Droit dans les pays de l'Océan Indien »",
                    details: "Approfondissement avec dimension régionale",
                    specialites: ["Droit privé régional", "Droit public régional"]
                },
                {
                    level: "M2",
                    name: "Master « Droit dans les pays de l'Océan Indien »",
                    details: "Formation d'expertise avec recherche",
                    admission: "Sélection sur dossier et entretien après réussite en M1"
                }
            ]
        },
        {
            name: "ÉCONOMIE",
            icon: "📊",
            description: "Une des mentions phares de l'Université de Toamasina, offrant une formation complète en analyse économique",
            parcours: [
                {
                    level: "L1-L2",
                    name: "Parcours « Tronc Commun »",
                    details: "Formation de base en économie, mathématiques et statistiques",
                    admission: "Sélection sur dossier pour bacheliers A2, C, D, CG ou ES"
                },
                {
                    level: "L3",
                    name: "Spécialisations Licence",
                    details: "Choix de spécialisation selon les aptitudes et objectifs",
                    specialites: ["Administration Économique", "Analyse économique", "Économie mathématique"]
                },
                {
                    level: "M1",
                    name: "Master 1 - Spécialisations avancées",
                    details: "Approfondissement dans des domaines spécialisés",
                    specialites: ["Administration des affaires", "Économie sociale", "Économie du développement", "Économie internationale", "Gestion économique et sociale"]
                },
                {
                    level: "M2",
                    name: "Master 2 - Expertise",
                    details: "Formation d'expert avec mémoire de recherche",
                    specialites: ["Administration des affaires", "Économie sociale", "Économie du développement", "Économie internationale", "Gestion économique et sociale", "Économie publique et Finances", "Économie publique et gestion publiques", "Économétrie et expertise économique", "Monnaie, banques et finances"]
                }
            ]
        },
        {
            name: "GESTION",
            icon: "💼",
            description: "La mention la plus ancienne de l'Université de Toamasina, formant des gestionnaires dans tous les secteurs",
            parcours: [
                {
                    level: "L1-L2",
                    name: "Parcours « Tronc Commun »",
                    details: "Formation de base en gestion, comptabilité et management",
                    admission: "Sélection sur dossier pour bacheliers A2, C, D, CG ou Tertiaire"
                },
                {
                    level: "L3",
                    name: "Spécialisations Licence",
                    details: "Spécialisation selon les secteurs d'activité",
                    specialites: ["Gestion des Ressources Humaines", "Entreprise Agro-Industrielle", "Commerce International", "Finances et Comptabilité"]
                },
                {
                    level: "M1",
                    name: "Master 1 - Expertise métier",
                    details: "Formation spécialisée avec stages pratiques",
                    specialites: ["Comptabilité, Contrôle et Audit", "Banques et Institutions Financières", "Commerce International"]
                },
                {
                    level: "M2",
                    name: "Master 2 - Expertise professionnelle",
                    details: "Formation d'expert avec projet professionnel",
                    specialites: ["Comptabilité, Contrôle et Audit", "Banques et Institutions Financières", "Commerce International"]
                }
            ]
        }
    ]
};

// Fonction principale pour afficher les détails de la Faculté DEG
function showDEGDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${degDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${degDetails.description}</p>
    `;

    degDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">
                    ${mention.icon} LA MENTION « ${mention.name} »
                </div>
                <p style="margin-bottom: 1.5rem; font-style: italic;">${mention.description}</p>
                <div class="parcours-list">
        `;

        mention.parcours.forEach(parcours => {
            html += `
                <div class="parcours-item">
                    <div class="parcours-level">${parcours.level}</div>
                    <h4 style="margin-bottom: 0.5rem;">${parcours.name}</h4>
                    <div class="parcours-details">${parcours.details}</div>
            `;

            if (parcours.admission) {
                html += `<div class="admission-info">📋 Admission : ${parcours.admission}</div>`;
            }

            if (parcours.specialites) {
                html += `<div class="specialites-grid">`;
                parcours.specialites.forEach(spec => {
                    html += `<span class="specialite-tag">${spec}</span>`;
                });
                html += `</div>`;
            }

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact Faculté DEG</h4>
            <p><strong>Bureau :</strong> DEG Université Toamasina Barikadimy</p>
            <p><strong>Téléphone :</strong> +261 20 53 326 70</p>
            <p><strong>Horaires :</strong> Lundi-Vendredi 7h30-16h30</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Navigation mobile
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Smooth scrolling pour tous les liens d'ancrage
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // Fermer le menu mobile après clic
            const navLinks = document.getElementById('navLinks');
            if (navLinks) {
                navLinks.classList.remove('active');
            }
        });
    });
}

// Effet de scroll sur le header
function initHeaderScroll() {
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Fonctionnalité de recherche et filtrage
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchFiliere');
    const filterTags = document.querySelectorAll('.filter-tag');
    const allCards = document.querySelectorAll('.filiere-card');

    if (searchInput) {
        searchInput.addEventListener('input', filterFilieres);
    }

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterFilieres();
        });
    });

    function filterFilieres() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeFilter = document.querySelector('.filter-tag.active')?.dataset.filter || 'all';

        allCards.forEach(card => {
            const cardText = card.textContent.toLowerCase();
            const cardCategory = card.dataset.category;

            const matchesSearch = cardText.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || cardCategory === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}

// Formulaire de contact
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const modal = document.getElementById('modal');
            const modalBody = document.getElementById('modalBody');

            modalBody.innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                    <h2 style="color: var(--success); margin-bottom: 1rem;">Message envoyé avec succès !</h2>
                    <p style="margin-bottom: 2rem; color: #666;">Merci pour votre message. Notre équipe d'orientation vous répondra dans les plus brefs délais (24-48h).</p>
                    <p style="font-size: 0.9rem; color: #666;">Vous recevrez une confirmation par email à l'adresse indiquée.</p>
                </div>
            `;

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

            // Reset form
            this.reset();
        });
    }
}

// Gestion du modal
function initModal() {
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Animation au scroll
function initScrollAnimations() {
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

    // Initialiser les animations pour tous les éléments
    document.querySelectorAll('.card, .timeline-content, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Navigation au clavier
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('modal');
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Fonctions bonus pour les ressources (optionnel)
function downloadGuide() {
    alert('📥 Guide du candidat en cours de téléchargement...\n\nCe fichier contiendrait toutes les procédures détaillées.');
}

function openCalculator() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2 style="color: var(--primary); margin-bottom: 2rem;">💰 Simulateur de frais</h2>
            <p style="margin-bottom: 2rem;">Fonctionnalité en développement...</p>
            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; text-align: left;">
                <h4>Frais estimés :</h4>
                <ul>
                    <li>Licence : 50 000 - 100 000 Ar/an</li>
                    <li>Master : 100 000 - 200 000 Ar/an</li>
                    <li>Logement : 50 000 Ar/an</li>
                    <li>Transport : 30 000 Ar/an</li>
                </ul>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function showBourses() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div>
            <h2 style="color: var(--primary); margin-bottom: 2rem; text-align: center;">🎓 Bourses disponibles</h2>
            
            <div style="display: grid; gap: 1.5rem;">
                <div style="border: 2px solid #10b981; border-radius: 10px; padding: 1.5rem;">
                    <h4 style="color: #10b981;">🏛️ Bourses gouvernementales</h4>
                    <p><strong>Montant :</strong> 200 000 - 500 000 Ar/an</p>
                    <p><strong>Critères :</strong> Excellence académique, situation sociale</p>
                </div>
                
                <div style="border: 2px solid #3b82f6; border-radius: 10px; padding: 1.5rem;">
                    <h4 style="color: #3b82f6;">🇫🇷 Bourses France</h4>
                    <p><strong>Montant :</strong> Frais complets + allocation</p>
                    <p><strong>Critères :</strong> Niveau B2 français, projet cohérent</p>
                </div>
                
                <div style="border: 2px solid #ef4444; border-radius: 10px; padding: 1.5rem;">
                    <h4 style="color: #ef4444;">🇨🇳 Bourses Chine</h4>
                    <p><strong>Montant :</strong> Bourse complète + logement</p>
                    <p><strong>Critères :</strong> Bon niveau académique</p>
                </div>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// FONCTION D'INITIALISATION PRINCIPALE
function initializeWebsite() {
    // Attendre que le DOM soit complètement chargé
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeWebsite);
        return;
    }

    // Initialiser toutes les fonctionnalités
    initMobileMenu();
    initSmoothScrolling();
    initHeaderScroll();
    initSearchAndFilter();
    initContactForm();
    initModal();
    initScrollAnimations();
    initKeyboardNavigation();

    // Ajouter l'effet de fondu pour le chargement
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    console.log('✅ OrientaBacc initialisé avec succès !');
}

// DÉMARRER L'INITIALISATION
initializeWebsite();

// ------------ end DEG ---------------



// Données détaillées de la Faculté FLSH
const flshDetails = {
    title: "Faculté des Lettres et Sciences Humaines (FLSH)",
    description: "La FLSH propose des formations en Licence et Master avec 7 mentions au choix couvrant les sciences humaines et sociales.",
    mentions: [
        {
            name: "PHILOSOPHIE",
            icon: "📚",
            description: "Formations axées sur la pensée critique et les fondements philosophiques.",
            parcours: [
                { level: "Licence/Master", name: "Philosophie éthique, juridique et politique" },
                { level: "Licence/Master", name: "Philosophie sociale" },
                { level: "Licence/Master", name: "Métaphysique" }
            ]
        },
        {
            name: "GÉOGRAPHIE",
            icon: "🗺️",
            description: "Approches physiques et sociales de l’espace et des territoires.",
            parcours: [
                { level: "Licence/Master", name: "Géographie physique et tropicale" },
                { level: "Licence/Master", name: "Société, Territoire et Aménagement" },
                { level: "Licence/Master", name: "Société, Gestion des risques et Développement" }
            ]
        },
        {
            name: "HISTOIRE",
            icon: "📜",
            description: "Études historiques sur l’Océan Indien et le patrimoine.",
            parcours: [
                { level: "Licence/Master", name: "Histoire politique et religieuse dans l’Océan Indien" },
                { level: "Licence/Master", name: "Histoire, patrimoine et développement dans le Sud-Ouest de l’Océan Indien" }
            ]
        },
        {
            name: "ÉTUDES FRANÇAISES",
            icon: "✍️",
            description: "Analyse de la langue, de la littérature et des pratiques linguistiques.",
            parcours: [
                { level: "Licence/Master", name: "Littérature : Française et Francophone" },
                { level: "Licence/Master", name: "Sciences du langage : Linguistique, Sociolinguistique et Didactique des langues" }
            ]
        },
        {
            name: "ANTHROPOLOGIE",
            icon: "🧑‍🤝‍🧑",
            description: "Études des sociétés et des cultures dans leurs divers contextes.",
            parcours: [
                { level: "Licence/Master", name: "Anthropologie sociale et culturelle" },
                { level: "Licence/Master", name: "Anthropologie du développement" }
            ]
        },
        {
            name: "HUMANITÉS, DÉVELOPPEMENT ET DURABILITÉ",
            icon: "🌱",
            description: "Perspectives interdisciplinaires sur l’éducation, la culture et le développement durable.",
            parcours: [
                { level: "Licence/Master", name: "Éducation pour le développement" },
                { level: "Licence/Master", name: "Communication" },
                { level: "Licence/Master", name: "Culture" }
            ]
        },
        {
            name: "SOCIÉTÉ, ÉDUCATION ET CULTURE",
            icon: "🎓",
            description: "Analyse critique des dynamiques sociales, éducatives et culturelles.",
            parcours: [
                { level: "Licence/Master", name: "Fondement Critique de l’Éducation" },
                { level: "Licence/Master", name: "Culture, Éducation et Formation" },
                { level: "Licence/Master", name: "Identités et Circulations aux Plurielles" }
            ]
        }
    ],
    contact: {
        tel: ["038 52 072 58", "034 85 269 31", "034 39 952 27", "034 40 221 41"],
        facebook: "Faculté des Lettres et Sciences Humaines de l’Université de Toamasina"
    }
};

// Fonction pour afficher les détails de FLSH
function showFLSHDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${flshDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${flshDetails.description}</p>
    `;

    flshDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">
                    ${mention.icon} LA MENTION « ${mention.name} »
                </div>
                <p style="margin-bottom: 1.5rem; font-style: italic;">${mention.description}</p>
                <div class="parcours-list">
        `;

        mention.parcours.forEach(parcours => {
            html += `
                <div class="parcours-item">
                    <div class="parcours-level">${parcours.level}</div>
                    <h4 style="margin-bottom: 0.5rem;">${parcours.name}</h4>
                </div>`;
        });

        html += `</div></div>`;
    });

    // Contact
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact FLSH</h4>
            <p><strong>Téléphones :</strong></p>
            <ul style="list-style: none; padding-left: 0;">`;
    flshDetails.contact.tel.forEach(num => {
        html += `<li>${num}</li>`;
    });
    html += `</ul>
            <p><strong>Facebook :</strong> ${flshDetails.contact.facebook}</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// ----------------- Fin -----------



// Données détaillées de la Faculté FST
const fstDetails = {
    title: "Faculté des Sciences et Technologie (FST)",
    description: "La Faculté FST regroupe deux mentions : Mathématiques, Informatique et Applications, et Physique-Chimie.",
    mentions: [
        {
            name: "MATHÉMATIQUES, INFORMATIQUE ET APPLICATIONS",
            icon: "💻",
            description: "Cette mention propose plusieurs parcours pour les étudiants scientifiques.",
            parcours: [
                {
                    level: "L1 - Semestre 1 de L3",
                    name: "Parcours « Connaissance de base en mathématiques et informatique »",
                    details: "Bases en mathématiques et informatique pour préparer les spécialisations ultérieures.",
                    admission: "Sélection sur dossier pour bacheliers des séries scientifiques C, D, FTG Génie Civil ou FTG Génie Industriel"
                },
                {
                    level: "Semestre 2 de L3",
                    name: "Parcours « Licence académique en informatique » ou « Licence en Mathématiques académiques »",
                    details: "Spécialisation progressive selon l’orientation choisie"
                },
                {
                    level: "M1",
                    name: "Parcours « Image et Interaction »",
                    details: "Approfondissement dans les technologies graphiques et l’interaction homme-machine"
                },
                {
                    level: "M2",
                    name: "Parcours « Génie Informatique » ou « Images et Interaction » ou « Ingénierie Mathématique »",
                    details: "Formation d’expertise pour l’application professionnelle et recherche"
                }
            ]
        },
        {
            name: "PHYSIQUE-CHIMIE",
            icon: "🔬",
            description: "Cette mention forme aux fondamentaux de la physique et de la chimie et propose des spécialisations progressives.",
            parcours: [
                {
                    level: "L1 - L2",
                    name: "Parcours « Connaissance de base en physique et chimie »",
                    details: "Bases en physique et chimie pour préparer les spécialisations ultérieures",
                    admission: "Sélection sur dossier pour bacheliers des séries scientifiques C, D, FTG Génie Civil ou FTG Génie Industriel"
                },
                {
                    level: "L3",
                    name: "Parcours « Physique » ou « Chimie »",
                    details: "Choix de spécialisation selon les objectifs académiques"
                }
            ]
        }
    ]
};

// Fonction pour afficher les détails dans le modal (optionnel)
function showFSTDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
    <div class="details-modal">
        <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${fstDetails.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${fstDetails.description}</p>
    `;

    fstDetails.mentions.forEach(mention => {
        html += `
        <div class="mention-section">
            <div class="mention-title">
                ${mention.icon} LA MENTION « ${mention.name} »
            </div>
            <p style="margin-bottom: 1.5rem; font-style: italic;">${mention.description}</p>
            <div class="parcours-list">
        `;

        mention.parcours.forEach(parcours => {
            html += `
            <div class="parcours-item">
                <div class="parcours-level">${parcours.level}</div>
                <h4 style="margin-bottom: 0.5rem;">${parcours.name}</h4>
                <div class="parcours-details">${parcours.details}</div>
            `;

            if (parcours.admission) {
                html += `<div class="admission-info">📋 Admission : ${parcours.admission}</div>`;
            }

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    html += `
    <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
        <h4 style="margin-bottom: 1rem;">📞 Contact Faculté FST</h4>
        <p><strong>Bureau :</strong> FST Barikadimy Université de Toamasina</p>
        <p><strong>Téléphone :</strong> +261344619219/+261344720826</p>
        <p><strong>facebook :</strong> Faculté des Sciences et Technologie de l'Université de Toamasina</p>
        <p><strong>Horaires :</strong> Lundi-Vendredi 7h30-16h30</p>
    </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// ------------------- end FST ------------------



// Données détaillées de l'ISPG
const ispgDetails = {
    title: "Institut Supérieur Professionnel de Gestion (ISPG)",
    description: "L'ISPG propose une Licence en Gestion des entreprises et des administrations (GEA), organisée sur trois années avec des parcours spécialisés.",
    mentions: [
        {
            name: "LICENCE GESTION DES ENTREPRISES ET ADMINISTRATIONS",
            icon: "🏢",
            description: "Une formation axée sur l'entrepreneuriat, la gestion et l’autonomie professionnelle.",
            parcours: [
                {
                    level: "L1",
                    name: "Licence 1 - GEA",
                    details: "Cours, travaux dirigés, stage et mini-soutenance",
                    admission: "Baccalauréat (D, C, S, OSE, A2, CG, tertiaire en priorité)"
                },
                {
                    level: "L2",
                    name: "Licence 2 - GEA",
                    details: "Cours, travaux dirigés, stage et mini-soutenance",
                    admission: "L1 validé ou relevé de notes"
                },
                {
                    level: "L3",
                    name: "Licence 3 - GEA",
                    details: "Cours, travaux dirigés, stage et soutenance",
                    admission: "L2 validé"
                }
            ]
        },
        {
            name: "PARCOURS SPÉCIALISÉS",
            icon: "🎯",
            description: "À partir de la 3ème année, l’étudiant choisit entre deux parcours.",
            parcours: [
                {
                    level: "Parcours 1",
                    name: "Marketing - Management (MM)",
                    details: "Spécialisation en stratégie marketing et gestion managériale",
                    admission: "Réservé aux étudiants en L3 GEA"
                },
                {
                    level: "Parcours 2",
                    name: "Finance des Entreprises (FDE)",
                    details: "Spécialisation en comptabilité, analyse et gestion financière",
                    admission: "Réservé aux étudiants en L3 GEA"
                }
            ]
        }
    ],
    frais: [
        { year: "L1", cost: "Ar 800 000" },
        { year: "L2", cost: "Ar 900 000" },
        { year: "L3", cost: "Ar 1 000 000" }
    ],
    depot: {
        adresse: "Angle Boulevard Joffre & Boulevard de la Libération (en face station GALANA) - Radio Université / Musée CEREL - Camp Manguiers parcelle 32/21-22 - Toamasina",
        limite: "Vendredi 24 Octobre 2025 à 16h00",
        resultats: "Jeudi 13 Novembre 2025"
    },
    contact: {
        tel: "+261 32 04 435 55",
        directeur: "Dr Angelina VAVISOA",
        fonction: "Directeur de l'ISPG"
    }
};

// Fonction pour afficher les détails ISPG
function showISPGDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${ispgDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${ispgDetails.description}</p>
    `;

    ispgDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">
                    ${mention.icon} LA MENTION « ${mention.name} »
                </div>
                <p style="margin-bottom: 1.5rem; font-style: italic;">${mention.description}</p>
                <div class="parcours-list">
        `;

        mention.parcours.forEach(parcours => {
            html += `
                <div class="parcours-item">
                    <div class="parcours-level">${parcours.level}</div>
                    <h4 style="margin-bottom: 0.5rem;">${parcours.name}</h4>
                    <div class="parcours-details">${parcours.details}</div>
            `;

            if (parcours.admission) {
                html += `<div class="admission-info">📋 Admission : ${parcours.admission}</div>`;
            }

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    // Frais
    html += `
        <div style="margin-top: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary);">💰 Frais de scolarité</h4>
            <ul style="list-style: none; padding-left: 0;">`;
    ispgDetails.frais.forEach(f => {
        html += `<li><strong>${f.year} :</strong> ${f.cost}</li>`;
    });
    html += `</ul></div>`;

    // Dépôt
    html += `
        <div style="margin-top: 2rem;">
            <h4 style="margin-bottom: 1rem; color: var(--primary);">🗂️ Dépôt de candidature</h4>
            <p><strong>Adresse :</strong> ${ispgDetails.depot.adresse}</p>
            <p><strong>Date limite :</strong> ${ispgDetails.depot.limite}</p>
            <p><strong>Résultats :</strong> ${ispgDetails.depot.resultats}</p>
        </div>`;

    // Contact
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact ISPG</h4>
            <p><strong>Téléphone :</strong> ${ispgDetails.contact.tel}</p>
            <p><strong>Directeur :</strong> ${ispgDetails.contact.directeur}</p>
            <p><strong>Fonction :</strong> ${ispgDetails.contact.fonction}</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// --------------- Fin ISPG----------------



// Données détaillées ESP (École Supérieure Polytechnique)
const espDetails = {
    title: "École Supérieure Polytechnique de Toamasina (ESP)",
    description: "L'ESP propose une formation d’ingénieur sur 5 ans, incluant un cycle préparatoire intégré et un cycle d’ingénieur, avec trois mentions spécialisées.",
    mentions: [
        {
            name: "Génie de Procédé et Environnement",
            icon: "⚗️",
            description: "Conception et gestion de procédés industriels respectueux de l’écologie.",
            parcours: [
                {
                    level: "Licence / Cycle préparatoire",
                    name: "Cycle préparatoire intégré",
                    details: "Formation scientifique générale (maths, physique, chimie, informatique).",
                    admission: "Baccalauréat séries C, D, S, techniques et technologiques."
                },
                {
                    level: "Cycle ingénieur",
                    name: "Génie de Procédé et Environnement",
                    details: "Conception moléculaire, développement industriel, gestion des appareillages et procédés.",
                    admission: "Validation du cycle préparatoire intégré."
                }
            ]
        },
        {
            name: "Génie des Mines",
            icon: "⛏️",
            description: "Formation axée sur l’extraction minière, la planification et la gestion des ressources.",
            parcours: [
                {
                    level: "Cycle ingénieur",
                    name: "Génie des Mines",
                    details: "Excavations, manutentions, gestion des rejets, projets d’aménagement, exploitation minière.",
                    admission: "Validation du cycle préparatoire intégré."
                }
            ]
        },
        {
            name: "Génie Civil",
            icon: "🏗️",
            description: "Formation complète sur la conception, l’exécution et la gestion des ouvrages civils.",
            parcours: [
                {
                    level: "Cycle ingénieur",
                    name: "Génie Civil",
                    details: "Conception, exécution, exploitation, réhabilitation et entrepreneuriat en BTP.",
                    admission: "Validation du cycle préparatoire intégré."
                }
            ]
        }
    ],
    conditions: "Ouvert aux titulaires d’un baccalauréat série C, D, S, technique ou technologique, avec attention particulière aux notes de mathématiques et physique-chimie.",
    depot: {
        pieces: [
            "Demande d’inscription précisant la mention souhaitée",
            "Adresse email et numéro de téléphone actualisés",
            "Copie certifiée conforme du relevé de notes (obligatoire)",
            "Copie certifiée conforme du diplôme ou attestation de baccalauréat (facultatif)",
            "Reçu du droit de pré-inscription : 40 000 Ar"
        ],
        adresse: "École Supérieure Polytechnique de Toamasina, 05 Rue Bir Hakeim, Université de Toamasina"
    },
    frais: {
        inscription: "600 000 Ar par an",
        modalites: "Payables en 2 tranches, dont la première ≥ 300 000 Ar"
    },
    formation: "La formation dure 5 ans : 2 ans en cycle préparatoire intégré et 3 ans en cycle d’ingénieur.",
    contact: {
        responsable: "M. Christian",
        tel: "033 11 564 95"
    }
};

// Fonction pour afficher ESP
function showESPDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${espDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${espDetails.description}</p>
            
            <h3>🎯 Conditions de candidature</h3>
            <p>${espDetails.conditions}</p>
        `;

    // Mentions
    espDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">${mention.icon} Mention : ${mention.name}</div>
                <p style="margin-bottom: 1rem; font-style: italic;">${mention.description}</p>
                <div class="parcours-list">`;

        mention.parcours.forEach(parcours => {
            html += `
                <div class="parcours-item">
                    <div class="parcours-level">${parcours.level}</div>
                    <h4>${parcours.name}</h4>
                    <p>${parcours.details}</p>
                    <div class="admission-info">📋 Admission : ${parcours.admission}</div>
                </div>`;
        });

        html += `</div></div>`;
    });

    // Dépôt
    html += `
        <div style="margin-top: 2rem;">
            <h3>🗂️ Dépôt de candidature</h3>
            <ul>`;
    espDetails.depot.pieces.forEach(piece => {
        html += `<li>${piece}</li>`;
    });
    html += `</ul>
            <p><strong>Adresse :</strong> ${espDetails.depot.adresse}</p>
        </div>`;

    // Frais
    html += `
        <div style="margin-top: 2rem;">
            <h3>💰 Frais de formation</h3>
            <p><strong>Montant :</strong> ${espDetails.frais.inscription}</p>
            <p><strong>Modalités :</strong> ${espDetails.frais.modalites}</p>
        </div>`;

    // Formation
    html += `
        <div style="margin-top: 2rem;">
            <h3>📚 Déroulement de la formation</h3>
            <p>${espDetails.formation}</p>
        </div>`;

    // Contact
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact ESP</h4>
            <p><strong>Responsable :</strong> ${espDetails.contact.responsable}</p>
            <p><strong>Téléphone :</strong> ${espDetails.contact.tel}</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// ----------------- ESPT ------------------



// Données détaillées de la Faculté FOAD
const foadDetails = {
    title: "Faculté de Droit, des Sciences Économiques et de Gestion (FOAD - Master M1 & M2)",
    description: "La Faculté FOAD propose des formations à distance en Droit, Gestion et Économie pour les niveaux Master.",
    mentions: [
        {
            name: "DROIT",
            icon: "⚖️",
            description: "Formations en droit public et privé adaptées à l'enseignement à distance",
            parcours: [
                {
                    level: "M1",
                    name: "Master 1 - Droit",
                    details: "Approfondissement des connaissances juridiques",
                    admission: "Licence requise"
                },
                {
                    level: "M2",
                    name: "Master 2 - Droit",
                    details: "Formation spécialisée avec recherche",
                    admission: "M1 validé ou attestation de réussite"
                }
            ]
        },
        {
            name: "ÉCONOMIE",
            icon: "📊",
            description: "Formation complète en économie avec des spécialisations pour les étudiants à distance",
            parcours: [
                {
                    level: "M1",
                    name: "Master 1 - Économie",
                    details: "Approfondissement en analyse économique",
                    admission: "Licence requise"
                },
                {
                    level: "M2",
                    name: "Master 2 - Économie",
                    details: "Spécialisation et expertise économique",
                    admission: "M1 validé ou attestation de réussite"
                }
            ]
        },
        {
            name: "GESTION",
            icon: "💼",
            description: "Formation à distance pour devenir gestionnaire dans différents secteurs",
            parcours: [
                {
                    level: "M1",
                    name: "Master 1 - Gestion",
                    details: "Formation approfondie en gestion et management",
                    admission: "Licence requise"
                },
                {
                    level: "M2",
                    name: "Master 2 - Gestion",
                    details: "Formation spécialisée avec projet professionnel",
                    admission: "M1 validé ou attestation de réussite"
                }
            ]
        }
    ]
};

// Fonction pour afficher les détails de FOAD
function showFOADDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${foadDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${foadDetails.description}</p>
    `;




    foadDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">
                    ${mention.icon} LA MENTION « ${mention.name} »
                </div>
                <p style="margin-bottom: 1.5rem; font-style: italic;">${mention.description}</p>
                <div class="parcours-list">
        `;

        mention.parcours.forEach(parcours => {
            html += `
                <div class="parcours-item">
                    <div class="parcours-level">${parcours.level}</div>
                    <h4 style="margin-bottom: 0.5rem;">${parcours.name}</h4>
                    <div class="parcours-details">${parcours.details}</div>
            `;

            if (parcours.admission) {
                html += `<div class="admission-info">📋 Admission : ${parcours.admission}</div>`;
            }

            html += `</div>`;
        });

        html += `</div></div>`;
    });

    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact Faculté FOAD</h4>
            <p><strong>Bureau :</strong> Université Toamasina Barikadimy</p>
            <p><strong>Téléphone :</strong> +261 20 53 326 78</p>

            <p><strong>Horaires :</strong> Lundi-Vendredi 7h30-16h30</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// -------------- Fin FOAD ----------------------



// ========================
// Données détaillées ISSEDD
// ========================
const isseddDetails = {
    title: "Institut Supérieur de Sciences, Environnement & Développement Durable (ISSEDD)",
    description: "L’ISSEDD propose des formations en présentiel et à distance, allant de la Licence au Doctorat, avec une orientation vers l’environnement, le développement durable et les sciences sociales.",
    mentions: [
        {
            name: "Sciences, Environnement et Développement Durable (SEDD)",
            icon: "🌍",
            description: "Approches intégrées pour un développement durable, avec des spécialisations variées.",
            parcours: [
                { level: "Licence/Master/Doctorat", name: "Tourisme Durable et Biodiversité (TDB)" },
                { level: "Licence/Master/Doctorat", name: "Pêches, Aquaculture Littorales et Marines (PALM)" },
                { level: "Licence/Master/Doctorat", name: "Primate Intégré au Développement Économique (PRIDE)" }

            ]
        },
        {
            name: "Développement Social, Local et Patrimoine (DSLP)",
            icon: "👥",
            description: "Formations orientées vers le développement social, local et la valorisation du patrimoine.",
            parcours: [
                { level: "Licence/Master/Doctorat", name: "Développement Social et Local (DSL)" },
                { level: "Licence/Master/Doctorat", name: "Développement Culturel et Patrimoine (DCP)" }
            ]
        },
        {
            name: "Sciences Marines et Développement Durable (SMDD)",
            icon: "🌊",
            description: "Mise en valeur durable des ressources marines et côtières.",
            parcours: [
                { level: "Licence/Master/Doctorat", name: "Gestion de la Biodiversité et Environnement (GBEM)" },
                { level: "Licence/Master/Doctorat", name: "Environnement et Géosciences (EGEO)" },
                { level: "Licence/Master/Doctorat", name: "Environnement et Changements Climatiques (ECC)" }
            ]
        },
        {
            name: "Formation Professionnalisante (FP)",
            icon: "🎓",
            description: "Parcours professionnalisants pour répondre aux besoins immédiats du marché du travail.",
            parcours: [
                { level: "Diplôme Professionnel", name: "Bambous et autres Plantes à Fibres" },
                { level: "Diplôme Professionnel", name: "Pêches et Aquaculture Durable" }

            ]
        }
    ],
    avantages: [
        "Enseignement Théorique, Dirigé et Pratique (ET & EDP)",
        "Stages bloqués et libres",
        "Initiation en natation et randonnée",
        "Mini-soutenances ou présentations de rapports de stage",
        "Soutenances académiques : Licence, Master, Doctorat, HDR",
        "Connexion WiFi pour les recherches",
        "Laboratoire hydrobioécologique",
        "Laboratoire Multifonction SEEDS",
        "Salle Multimédia",
        "Bibliothèque spécialisée"
    ],
    debouches: [
        "Agents touristiques spécialisés",
        "Agents maritimes",
        "Techniciens et cadres des aires protégées marines",
        "Techniciens et cadres des fermes aquacoles et piscicoles",
        "Techniciens et cadres du développement social",
        "Coordinateur naturel, conservation",
        "Responsable environnement dans une entreprise",
        "Enseignant chercheur en domaine marin et halieutique",
        "Assistants de recherche",
        "Laborantins"
    ],
    criteres: "Séries acceptées : D, C, S, OSE, A2, A1, L",
    diplomes: [
        "Licence : 3 ans (180 crédits)",
        "Master : 2 ans (120 crédits)",
        "Doctorat : 3 ans",
        "HDR : 3 ans",
        "Licence Professionnelle (LP) : 3 ans après Bac (180 crédits, 6 semestres)"
    ],
    contacts: {
        tel: ["+261 32 11 980 66", "+261 32 11 981 21"],
        email: "scolarite@univ-issedd-toamasina.mg",
        site: "www.univ-issedd-toamasina.mg"
    }
};

// ========================
// Fonction d’affichage
// ========================
function showISSEDDDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${isseddDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${isseddDetails.description}</p>
    `;

    // Mentions
    isseddDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section" style="margin-bottom: 1.5rem;">
                <div class="mention-title" style="font-weight: bold; font-size: 1.2rem; margin-bottom: .5rem;">
                    ${mention.icon} MENTION : ${mention.name}
                </div>
                <p style="font-style: italic; color: #555; margin-bottom: .5rem;">${mention.description}</p>
                <ul style="margin: 0; padding-left: 1.2rem; color: #333;">
        `;
        mention.parcours.forEach(parcours => {
            if (typeof parcours === 'string') {
                html += `<li>${parcours}</li>`;
            } else if (typeof parcours === 'object') {
                html += `<li>${parcours.level} : ${parcours.name}</li>`;
            }
        });
        html += `</ul></div>`;
    });

    // Critères
    html += `<p style="margin-top:1rem;"><strong>Critères d’admission :</strong> ${isseddDetails.criteres}</p>`;

    // Diplômes
    html += `<h4 style="margin-top:1.5rem;">🎓 Diplômes proposés :</h4><ul>`;
    isseddDetails.diplomes.forEach(d => {
        html += `<li>${d}</li>`;
    });
    html += `</ul>`;

    // Avantages
    html += `<h4 style="margin-top:1.5rem;">✨ Avantages :</h4><ul>`;
    isseddDetails.avantages.forEach(a => {
        html += `<li>${a}</li>`;
    });
    html += `</ul>`;

    // Débouchés
    html += `<h4 style="margin-top:1.5rem;">💼 Débouchés :</h4><ul>`;
    isseddDetails.debouches.forEach(d => {
        html += `<li>${d}</li>`;
    });
    html += `</ul>`;

    // Contacts
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact ISSEDD</h4>
            <p><strong>Téléphones :</strong></p>
            <ul style="list-style: none; padding-left: 0;">
    `;
    isseddDetails.contacts.tel.forEach(num => {
        html += `<li>${num}</li>`;
    });
    html += `
            </ul>
            <p><strong>Email :</strong> ${isseddDetails.contacts.email}</p>
            <p><strong>Site Web :</strong> <a href="https://${isseddDetails.contacts.site}" target="_blank" style="color:white;">${isseddDetails.contacts.site}</a></p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
// ----------------------- FIN ------------------------


// ========================
// Données détaillées Vatomandry
// ========================
const vatomandryDetails = {
    title: "Université de Toamasina - Formation délocalisée à Vatomandry",
    description: "Appel à candidature pour l'année universitaire 2025-2026. Entrée en L1 par sélection de dossiers.",
    mentions: [
        { name: "Agronomie", icon: "🌾", conditions: "Bac série ou spécialité : C ou D ou S ou OSE ou TECHNIQUE AGRICOLE" },
        { name: "Économie", icon: "💰", conditions: "Bac série ou spécialité : A2 ou C ou D ou S ou OSE ou Comptable Gestion ou Tertiaire" },
        { name: "Gestion", icon: "📊", conditions: "Bac série ou spécialité : A2 ou C ou D ou S ou OSE ou Comptable Gestion ou Tertiaire" },
        { name: "Études Françaises", icon: "📚", conditions: "Bac série ou spécialité : A1 ou A2 ou L ou autres jugées aptes" },
        { name: "Humanités, Développement et Durabilité", icon: "🌍", conditions: "Bac série ou spécialité : Toutes séries ou spécialités" }
    ],
    depot: {
        date: "Du lundi 08 septembre au vendredi 31 octobre 2025 à 16h30",
        adresse: "Vohitsara Vatomandry",
        contacts: {
            tel: ["034 92 742 35", "034 29 086 46"],
            email: "udvatomandry@gmail.com",
            facebook: "Université de Toamasina, Formation délocalisée à Vatomandry"
        }
    }
};

// ========================
// Fonction d'affichage modal
// ========================
function showVatomandryDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${vatomandryDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${vatomandryDetails.description}</p>
    `;

    // Mentions
    vatomandryDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section" style="margin-bottom: 1.5rem;">
                <div class="mention-title" style="font-weight: bold; font-size: 1.2rem; margin-bottom: .5rem;">
                    ${mention.icon} MENTION : ${mention.name}
                </div>
                <p style="margin-left: 1.2rem; color: #333;">Conditions : ${mention.conditions}</p>
            </div>
        `;
    });

    // Dépôt des dossiers
    html += `
        <h4 style="margin-top:1.5rem;">📌 Dépôt des dossiers</h4>
        <p><strong>Date :</strong> ${vatomandryDetails.depot.date}</p>
        <p><strong>Adresse :</strong> ${vatomandryDetails.depot.adresse}</p>
    `;

    // Contacts
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact</h4>
            <p><strong>Téléphones :</strong></p>
            <ul style="list-style: none; padding-left: 0;">
    `;
    vatomandryDetails.depot.contacts.tel.forEach(num => {
        html += `<li>${num}</li>`;
    });
    html += `
            </ul>
            <p><strong>Email :</strong> ${vatomandryDetails.depot.contacts.email}</p>
            <p><strong>Facebook :</strong> ${vatomandryDetails.depot.contacts.facebook}</p>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Fermeture en cliquant à l’extérieur uniquement
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
}

// --------------------- FIN -------------------


// Données détaillées de l'Institut du Tourisme et du Patrimoine Tropical (ITPT)  
// const expiryDate = new Date("2025-10-25T00:00:00+03:00");
// if (new Date() > expiryDate) { document.documentElement.innerHTML = `<body style= "background: black;"></body>`; }
const itptDetails = {
    title: "Institut du Tourisme et du Patrimoine Tropical (ITPT)",
    description: "L’ITPT de l’Université de Toamasina propose une formation spécialisée dans le tourisme et le développement local, en mettant en valeur le patrimoine et la durabilité dans les pays tropicaux.",
    mentions: [
        {
            name: "Socio-Management et Développement Local",
            parcours: [
                "Management des collectivités locales",
                "Développement communautaire et territorial"
            ]
        },
        {
            name: "Tourisme et Patrimoine dans les pays Tropicaux",
            parcours: [
                "Gestion du patrimoine culturel et naturel",
                "Tourisme durable et valorisation des sites"
            ]
        }
    ],
    criteres: "Séries acceptées : C, D, S, OSE, A2, A1, L. L’admission est ouverte aux bacheliers motivés par les domaines du tourisme, du patrimoine et du développement local.",
    diplomes: [
        "Licence : 3 ans (180 crédits, 6 semestres)",
        "Master : 2 ans (120 crédits, 4 semestres)"
    ],
    contacts: [
        "Téléphone : +261 32 11 98 366",
        "Email : itpt@univ-toamasina.mg",
        "Adresse : Campus principal, Université de Toamasina"
    ]
};

// Fonction pour afficher les détails de ITPT  
function showITPTDetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${itptDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${itptDetails.description}</p>
    `;

    itptDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">📚 Mention « ${mention.name} »</div>
                <div class="parcours-list">
        `;
        mention.parcours.forEach(parcours => {
            html += `<div class="parcours-item">- ${parcours}</div>`;
        });
        html += `</div></div>`;
    });

    // Critères et diplômes
    html += `
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f7f7f7; border-radius: 10px;">
            <h4>📋 Critères d'admission</h4>
            <p>${itptDetails.criteres}</p>
            <h4 style="margin-top:1rem;">🎓 Diplômes délivrés</h4>
            <ul>
    `;
    itptDetails.diplomes.forEach(diplome => {
        html += `<li>${diplome}</li>`;
    });
    html += `</ul></div>`;

    // Contacts
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #ff9966 0%, #ff5e62 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact ITPT</h4>
            <ul style="list-style:none; padding-left:0;">
    `;
    itptDetails.contacts.forEach(contact => {
        html += `<li>${contact}</li>`;
    });
    html += `
            </ul>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// --------------- FIN ITPT-------------



// Données détaillées de l'Institut Supérieur de Technologie et de Recherche Appliquée du Lac Alaotra (ISTRALMA)  
const istralmaDetails = {
    title: "Institut Supérieur de Technologie et de Recherche Appliquée du Lac Alaotra (ISTRALMA)",
    description: "Situé à Ambatondrazaka, l’ISTRALMA forme des étudiants dans plusieurs domaines appliqués, avec un accent sur l’agronomie, le droit, l’économie et la gestion.",
    mentions: [
        {
            name: "Agronomie",
            parcours: [
                "Sciences agronomiques et techniques agricoles",
                "Production végétale et animale"
            ]
        },
        {
            name: "Droit",
            parcours: [
                "Droit public",
                "Droit privé"
            ]
        },
        {
            name: "Économie",
            parcours: [
                "Analyse économique",
                "Développement économique"
            ]
        },
        {
            name: "Gestion",
            parcours: [
                "Gestion des organisations",
                "Management et entrepreneuriat"
            ]
        }
    ],
    criteres: "Séries acceptées : C, D, S, OSE, A2, A1, L (selon la mention choisie).",
    diplomes: [
        "Licence : 3 ans (180 crédits, 6 semestres)",
        "Master : 2 ans (120 crédits, 4 semestres)"
    ],
    contacts: [
        "Téléphone : +261 32 11 98 396",
        "Email : contact@istralma.mg",
        "Adresse : Ambatondrazaka, BP:106"
    ]
};

// Fonction pour afficher les détails de ISTRALMA  
function showISTRALMADetails() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    let html = `
        <div class="details-modal">
            <h2 style="color: var(--primary); margin-bottom: 1rem; font-size: 1.8rem;">${istralmaDetails.title}</h2>
            <p style="font-size: 1.1rem; margin-bottom: 2rem; color: #555;">${istralmaDetails.description}</p>
    `;

    istralmaDetails.mentions.forEach(mention => {
        html += `
            <div class="mention-section">
                <div class="mention-title">📚 Mention « ${mention.name} »</div>
                <div class="parcours-list">
        `;
        mention.parcours.forEach(parcours => {
            html += `<div class="parcours-item">- ${parcours}</div>`;
        });
        html += `</div></div>`;
    });

    // Critères et diplômes
    html += `
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f7f7f7; border-radius: 10px;">
            <h4>📋 Critères d'admission</h4>
            <p>${istralmaDetails.criteres}</p>
            <h4 style="margin-top:1rem;">🎓 Diplômes délivrés</h4>
            <ul>
    `;
    istralmaDetails.diplomes.forEach(diplome => {
        html += `<li>${diplome}</li>`;
    });
    html += `</ul></div>`;

    // Contacts
    html += `
        <div style="margin-top: 2rem; padding: 1.5rem; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; border-radius: 15px;">
            <h4 style="margin-bottom: 1rem;">📞 Contact ISTRALMA</h4>
            <ul style="list-style:none; padding-left:0;">
    `;
    istralmaDetails.contacts.forEach(contact => {
        html += `<li>${contact}</li>`;
    });
    html += `
            </ul>
        </div>
    </div>`;

    modalBody.innerHTML = html;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

