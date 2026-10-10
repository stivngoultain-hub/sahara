// ── قاموس اللغات (محرك i18n) ───────────────────────────────────────
const translations = {
    ar: {
        nav_home: "الرئيسية / الفضاء", nav_trips: "السياحة العلمية", nav_events: "الفعاليات", nav_hosting: "الاستضافة", nav_login: "الدخول / التسجيل",
        hero_title: "SaharaVerse: نحو بيئة رقمية للتنمية والتشغيل",
        hero_desc: "منصة ذكية تربط طلبة الجامعات المغربية بالأقاليم الجنوبية لتعزيز الابتكار، البحث العلمي، وفرص التدريب المهني في الصحراء المغربية.",
        hero_btn: "انضم إلى المجتمع", features_title: "مزايا إبداعية لخدمة التنمية",
        feat1_title: "💡 بنك التحديات الترابية", feat1_desc: "طرح أفكار وحلول مبتكرة لتحديات التنمية المستدامة والاقتصاد الأزرق.",
        feat2_title: "💼 ركن 'فرصة' للتشغيل", feat2_desc: "تمكين الطلاب من فرص تدريب ميداني وعملي في مؤسسات وشركات الجنوب.",
        feat3_title: "🏆 نظام الشارات الرقمية", feat3_desc: "تحفيز الباحثين والأندية عبر نقاط وشارات تفاعلية موثقة.",
        student_badge: "شارة: باحث مشارك في SaharaVerse", student_badge_desc: "لقد جمعت 150 نقطة. أنت مؤهل للتقدم لفرص التدريب!",
        student_welcome: "مرحباً", student_sub: "ساهم بحلولك في بنك التحديات أو اقترح أنشطة نوعية:",
        btn_seminar: "+ اقترح ندوة", btn_challenge: "💡 شارك فكرة", student_opp: "💼 ركن 'فرصة': عروض التدريب", btn_apply: "تقدم للفرصة",
        admin_title: "لوحة تحكم الإدارة المركزية", admin_sub: "إدارة بنك الأفكار، مقترحات الرحلات، وعروض 'فرصة'.",
        admin_stat1: "الأعضاء", admin_stat2: "المقترحات المعلقة",
        th_author: "المُقترح", th_type: "النوع", th_details: "التفاصيل", th_status: "الحالة", th_action: "الإجراء",
        settings_title: "⚙️ الإعدادات (Settings)", settings_lang: "لغة المنصة / Language / Langue",
        settings_notif: "الإشعارات", settings_on: "مفعلة", settings_off: "معطلة", settings_logout: "تسجيل الخروج",
        msg_logout: "تم تسجيل الخروج بأمان", msg_apply: "تم إرسال طلبك بنجاح!"
    },
    fr: {
        nav_home: "Accueil / Espace", nav_trips: "Tourisme Scientifique", nav_events: "Événements", nav_hosting: "Hébergement", nav_login: "Connexion / Inscription",
        hero_title: "SaharaVerse : Environnement Numérique pour le Développement",
        hero_desc: "Plateforme intelligente reliant les étudiants marocains aux Provinces du Sud pour l'innovation et les stages.",
        hero_btn: "Rejoindre la Communauté", features_title: "Avantages Créatifs",
        feat1_title: "💡 Banque de Défis", feat1_desc: "Proposez des solutions innovantes pour le développement durable.",
        feat2_title: "💼 Espace 'Forsa'", feat2_desc: "Accédez à des opportunités de stages dans les entreprises du Sud.",
        feat3_title: "🏆 Badges Numériques", feat3_desc: "Motivez les chercheurs avec des badges interactifs.",
        student_badge: "Badge : Chercheur Actif", student_badge_desc: "150 points collectés. Éligible pour les stages !",
        student_welcome: "Bienvenue", student_sub: "Participez aux défis ou proposez des activités :",
        btn_seminar: "+ Séminaire", btn_challenge: "💡 Idée", student_opp: "💼 Offres de Stages", btn_apply: "Postuler",
        admin_title: "Tableau de Bord Admin", admin_sub: "Gérez les idées, voyages et offres.",
        admin_stat1: "Membres", admin_stat2: "En Attente",
        th_author: "Auteur", th_type: "Type", th_details: "Détails", th_status: "Statut", th_action: "Action",
        settings_title: "⚙️ Paramètres", settings_lang: "Langue",
        settings_notif: "Notifications", settings_on: "Activées", settings_off: "Désactivées", settings_logout: "Se Déconnecter",
        msg_logout: "Déconnexion réussie", msg_apply: "Candidature envoyée !"
    },
    en: {
        nav_home: "Home / Space", nav_trips: "Scientific Tourism", nav_events: "Events", nav_hosting: "Hosting", nav_login: "Login / Register",
        hero_title: "SaharaVerse: Digital Environment for Development",
        hero_desc: "Smart platform connecting Moroccan students to Southern Provinces for innovation, research, and internships.",
        hero_btn: "Join Community", features_title: "Creative Advantages",
        feat1_title: "💡 Challenges Hub", feat1_desc: "Propose innovative solutions for sustainable development.",
        feat2_title: "💼 'Forsa' Careers", feat2_desc: "Access internship opportunities in Southern companies.",
        feat3_title: "🏆 Digital Badges", feat3_desc: "Motivate researchers with interactive badges.",
        student_badge: "Badge: Active Researcher", student_badge_desc: "150 points collected. Eligible for internships!",
        student_welcome: "Welcome", student_sub: "Contribute to challenges or propose activities:",
        btn_seminar: "+ Seminar", btn_challenge: "💡 Idea", student_opp: "💼 Internship Offers", btn_apply: "Apply",
        admin_title: "Admin Dashboard", admin_sub: "Manage ideas, trips, and offers.",
        admin_stat1: "Members", admin_stat2: "Pending",
        th_author: "Author", th_type: "Type", th_details: "Details", th_status: "Status", th_action: "Action",
        settings_title: "⚙️ Settings", settings_lang: "Language",
        settings_notif: "Notifications", settings_on: "Enabled", settings_off: "Disabled", settings_logout: "Logout",
        msg_logout: "Logged out securely", msg_apply: "Application sent!"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('sahara_lang', lang);
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('lang-selector').value = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

// ── الوظائف الأساسية ───────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} animate-fade-in-up`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3500);
}

function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function applyOpportunity(title) { 
    const lang = localStorage.getItem('sahara_lang') || 'ar';
    showToast(translations[lang].msg_apply, 'success'); 
}

function logout() {
    const lang = localStorage.getItem('sahara_lang') || 'ar';
    localStorage.removeItem('sahara_role'); 
    localStorage.removeItem('sahara_current_user'); 
    showToast(translations[lang].msg_logout);
    setTimeout(() => window.location.reload(), 1000);
}

function initApp() {
    const savedLang = localStorage.getItem('sahara_lang') || 'ar';
    changeLanguage(savedLang);

    const role = localStorage.getItem('sahara_role');
    const currentUser = localStorage.getItem('sahara_current_user') || 'طالب';
    
    const navLinks = document.getElementById('dynamic-nav-links');
    const guestView = document.getElementById('guest-view');
    const studentView = document.getElementById('student-view');
    const adminView = document.getElementById('admin-view');
    const authBtn = document.getElementById('auth-btn');

    if (navLinks) navLinks.style.display = role ? 'flex' : 'none';
    if (authBtn) authBtn.style.display = role ? 'none' : 'block';

    if (guestView) guestView.style.display = role ? 'none' : 'block';
    if (studentView) studentView.style.display = role === 'student' ? 'block' : 'none';
    if (adminView) adminView.style.display = role === 'admin' ? 'block' : 'none';
    
    if(role === 'student' && document.getElementById('user-display-name')) {
        document.getElementById('user-display-name').textContent = currentUser;
    }
}

document.addEventListener('DOMContentLoaded', initApp);
