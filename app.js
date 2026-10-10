// ── قاموس اللغات الشامل (محرك i18n) ───────────────────────────────────────
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
        msg_logout: "تم تسجيل الخروج بأمان", msg_apply: "تمت العملية بنجاح!",
        
        // كلمات الصفحات الداخلية
        auth_secure: "🔒 بوابة آمنة: الوصول مقيد للطلبة والباحثين. يرجى استخدام بريدك الجامعي.",
        auth_login_tab: "تسجيل الدخول", auth_reg_tab: "حساب جديد",
        auth_email: "البريد الإلكتروني", auth_pass: "كلمة المرور المشفرة", auth_name: "الاسم الكامل",
        auth_agree: "أوافق صراحةً على سياسة الخصوصية وفقاً للقانون المغربي 09-08 لحماية المعطيات.",
        auth_btn_login: "دخول آمن", auth_btn_reg: "إنشاء حساب مشفر",
        trips_title: "برامج السياحة العلمية والاستكشافية",
        trip1_title: "دراسة ميدانية: الميناء الأطلسي بالداخلة", trip1_desc: "زيارة لأكبر ورش بنية تحتية في إفريقيا. بشراكة مع وزارة التجهيز.",
        trip2_title: "استكشاف محطة الطاقة بطرفاية", trip2_desc: "رحلة علمية لدراسة مشاريع الانتقال الطاقي بالعيون وطرفاية.",
        btn_book: "طلب المشاركة",
        events_title: "الفعاليات والندوات الأكاديمية",
        event1_title: "ندوة: تنزيل الجهوية المتقدمة", event1_desc: "بشراكة مع المدرسة الوطنية للتجارة والتسيير بالداخلة.",
        event2_title: "ورشة: الاقتصاد الأزرق", event2_desc: "محاضرة تطبيقية ينظمها طلبة باحثون بتعاون مع معهد تكنولوجيا الصيد البحري.",
        hosting_title: "برنامج الاستضافة الطلابية المتبادلة",
        host1_title: "محمد - طالب بالـ ENCG", host1_desc: "يمكنني استضافة باحث في شقتي بالداخلة لتيسير بحثه الميداني.",
        host2_title: "فاطمة الزهراء - جامعة ابن زهر", host2_desc: "أستطيع استضافة طالبة من جامعات الشمال للمشاركة في المؤتمرات الجهوية.",
        btn_contact: "طلب تواصل آمن"
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
        msg_logout: "Déconnexion réussie", msg_apply: "Opération réussie !",
        
        auth_secure: "🔒 Portail Sécurisé : Accès réservé aux étudiants. Utilisez votre e-mail universitaire.",
        auth_login_tab: "Connexion", auth_reg_tab: "Nouveau Compte",
        auth_email: "E-mail", auth_pass: "Mot de Passe Sécurisé", auth_name: "Nom Complet",
        auth_agree: "J'accepte la politique de confidentialité conformément à la loi 09-08 (CNDP).",
        auth_btn_login: "Connexion Sécurisée", auth_btn_reg: "Créer un Compte",
        trips_title: "Programmes de Tourisme Scientifique",
        trip1_title: "Étude : Port Atlantique de Dakhla", trip1_desc: "Visitez le plus grand chantier d'infrastructure d'Afrique.",
        trip2_title: "Exploration : Énergie Éolienne", trip2_desc: "Voyage pour étudier la transition énergétique à Laâyoune.",
        btn_book: "Demander à Participer",
        events_title: "Événements et Séminaires",
        event1_title: "Séminaire : Régionalisation Avancée", event1_desc: "En partenariat avec l'ENCG Dakhla.",
        event2_title: "Atelier : Économie Bleue", event2_desc: "Organisé par des étudiants chercheurs et l'Institut de Pêche.",
        hosting_title: "Programme d'Hébergement Mutuel",
        host1_title: "Mohamed - Étudiant ENCG", host1_desc: "J'héberge un chercheur pour faciliter son travail sur le terrain.",
        host2_title: "Fatima - Université Ibn Zohr", host2_desc: "J'accueille une étudiante pour participer aux conférences.",
        btn_contact: "Demander le Contact"
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
        msg_logout: "Logged out securely", msg_apply: "Operation successful!",
        
        auth_secure: "🔒 Secure Portal: Access restricted to students. Use your university email.",
        auth_login_tab: "Login", auth_reg_tab: "New Account",
        auth_email: "Email", auth_pass: "Secure Password", auth_name: "Full Name",
        auth_agree: "I agree to the privacy policy in accordance with Law 09-08 (CNDP).",
        auth_btn_login: "Secure Login", auth_btn_reg: "Create Account",
        trips_title: "Scientific Tourism Programs",
        trip1_title: "Study: Dakhla Atlantic Port", trip1_desc: "Visit Africa's largest infrastructure project.",
        trip2_title: "Exploration: Wind Energy", trip2_desc: "Trip to study energy transition in Laayoune.",
        btn_book: "Request Participation",
        events_title: "Events and Seminars",
        event1_title: "Seminar: Advanced Regionalization", event1_desc: "In partnership with ENCG Dakhla.",
        event2_title: "Workshop: Blue Economy", event2_desc: "Organized by researchers and the Maritime Institute.",
        hosting_title: "Mutual Hosting Program",
        host1_title: "Mohamed - ENCG Student", host1_desc: "I can host a researcher to facilitate field work.",
        host2_title: "Fatima - Ibn Zohr Univ", host2_desc: "I can host a student participating in regional conferences.",
        btn_contact: "Request Contact"
    }
};

function changeLanguage(lang) {
    localStorage.setItem('sahara_lang', lang);
    document.documentElement.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const langSelect = document.getElementById('lang-selector');
    if(langSelect) langSelect.value = lang;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
}

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
    setTimeout(() => window.location.href = 'index.html', 1000);
}

function protectRoutes() {
    const userRole = localStorage.getItem('sahara_role');
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['trips.html', 'events.html', 'hosting.html'];
    
    if (protectedPages.includes(currentPage) && !userRole) {
        window.location.href = 'register.html';
        return;
    }
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
    
    protectRoutes();
}

document.addEventListener('DOMContentLoaded', initApp);
