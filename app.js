// ── الإشعارات (Toast) ───────────────────────────────────────
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type} animate-fade-in-up`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── العدادات المتحركة ────────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  if(!counters.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current + (el.dataset.suffix || '');
          if (current >= target) clearInterval(timer);
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

// ── حماية الأقسام والتحقق من الصلاحيات أمنياً ───────────────────
function protectRoutes() {
    const userRole = localStorage.getItem('sahara_role'); // 'admin', 'student', أو غير مسجل
    const currentPage = window.location.pathname.split('/').pop();

    // 1. إذا كان المستخدم في الصفحة الرئيسية (index.html)
    const guestView = document.getElementById('guest-view');
    const studentView = document.getElementById('student-view');
    const adminView = document.getElementById('admin-view');

    if (guestView && studentView && adminView) {
        if (userRole === 'admin') {
            guestView.style.display = 'none';
            studentView.style.display = 'none';
            adminView.style.display = 'block'; // تظهر لوحة الإدارة للمدير فقط
        } else if (userRole === 'student') {
            guestView.style.display = 'none';
            adminView.style.display = 'none';
            studentView.style.display = 'block'; // تظهر لوحة الطالب للمسجلين
        } else {
            studentView.style.display = 'none';
            adminView.style.display = 'none';
            guestView.style.display = 'block'; // يظهر محتوى الزوار للعموم
        }
    }

    // 2. قفل الصفحات الداخلية إذا لم يتم تسجيل الدخول
    const protectedPages = ['trips.html', 'events.html', 'hosting.html'];
    if (protectedPages.includes(currentPage) && !userRole) {
        alert('الرجاء تسجيل الدخول أولاً للوصول إلى هذا القسم!');
        window.location.href = 'register.html';
        return;
    }

    // تحديث أزرار شريط التنقل في جميع الصفحات بناءً على حالة تسجيل الدخول
    document.querySelectorAll('.btn-nav').forEach(btn => {
        if(userRole) {
            btn.textContent = 'تسجيل الخروج';
            btn.style.backgroundColor = '#ef4444';
            btn.href = '#';
            btn.onclick = (e) => { 
                e.preventDefault(); 
                localStorage.removeItem('sahara_role'); 
                showToast('تم تسجيل الخروج بنجاح');
                setTimeout(() => window.location.href = 'index.html', 1000);
            };
        } else {
            btn.textContent = 'الدخول / التسجيل';
            btn.href = 'register.html';
            btn.style.backgroundColor = 'var(--primary-blue)';
        }
    });

    // إظهار أو إخفاء قوائم التنقل بناءً على حالة تسجيل الدخول
    const navLinks = document.getElementById('dynamic-nav-links');
    if (navLinks) {
        navLinks.style.display = userRole ? 'flex' : 'none';
    }
}

// ── التهيئة العامة عند تحميل الصفحة ───────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  protectRoutes();
});
