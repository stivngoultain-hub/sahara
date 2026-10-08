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

// ── نظام تسجيل الدخول والصلاحيات (Dynamic Auth) ───────────────
function checkAuth() {
    const user = localStorage.getItem('sahara_user');
    
    // تحديث أزرار التنقل في جميع الصفحات
    document.querySelectorAll('.btn-nav').forEach(btn => {
        if(user) {
            btn.textContent = 'تسجيل الخروج';
            btn.style.backgroundColor = '#ef4444';
            btn.href = '#';
            btn.onclick = (e) => { 
                e.preventDefault(); 
                localStorage.removeItem('sahara_user'); 
                window.location.href = 'index.html'; 
            };
        } else {
            btn.textContent = 'الدخول / التسجيل';
            btn.href = 'register.html';
            btn.style.backgroundColor = 'var(--primary-blue)';
        }
    });

    // إدارة واجهات الصفحة الرئيسية (index.html)
    const guestView = document.getElementById('guest-view');
    const studentView = document.getElementById('student-view');
    const adminView = document.getElementById('admin-view');

    if (guestView && studentView && adminView) {
        if (user === 'admin') {
            guestView.style.display = 'none';
            studentView.style.display = 'none';
            adminView.style.display = 'block';
        } else if (user === 'student') {
            guestView.style.display = 'none';
            adminView.style.display = 'none';
            studentView.style.display = 'block';
        } else {
            studentView.style.display = 'none';
            adminView.style.display = 'none';
            guestView.style.display = 'block';
        }
    }
}

// ── التهيئة عند تحميل الصفحة ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  animateCounters();
  checkAuth();
});
