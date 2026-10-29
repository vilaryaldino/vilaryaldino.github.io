/**
 * ============================================================================
 * PORTFOLIO CLIENT-SIDE CONTROLLER
 * Author: Vilary Aldino Egrea, S.Kom.
 * Architecture: Clean Vanilla JavaScript (ES6+), Modular Design, Zero Dependencies
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- Project Data Store for Interactive Modal ---
  const projectDatabase = {
    gudang: {
      title: 'Sistem Manajemen Gudang',
      category: 'Enterprise Web Application',
      tech: ['Laravel', 'Oracle 11g', 'Eloquent ORM', 'PL/SQL', 'Bootstrap', 'JavaScript'],
      summary: 'Aplikasi pencatatan inventaris keluar/masuk skala enterprise menggunakan Laravel dan Oracle Database, dirancang untuk menangani integritas transaksi tinggi.',
      features: [
        'Fitur pembuatan Faktur Pembelian (Purchase Invoice) dan Surat Jalan multi-item otomatis.',
        'Implementasi sequence handling pada Oracle 11g untuk auto-increment kode invoice dan SKU unik.',
        'Manajemen stok otomatis dengan audit trail pergerakan barang (Stock In / Stock Out).',
        'Optimasi query database relasional menggunakan Eloquent ORM dengan eager loading untuk mencegah N+1 problem.',
        'Reporting dan ekspor rekap inventaris berkala ke format PDF / Excel.'
      ],
      role: 'Fullstack Developer & Database Architect',
      status: 'Selesai & Teruji'
    },
    acwa: {
      title: 'Web Company Profile (ACWA International)',
      category: 'Corporate Website & CMS',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      summary: 'Pengembangan website profil perusahaan profesional yang responsif, berkinerja tinggi, dan teroptimasi SEO untuk ACWA International.',
      features: [
        'Arsitektur MVC yang rapi dan terstruktur berbasis framework CodeIgniter.',
        'Desain UI/UX modern, adaptif dan ringan di semua resolusi layar (Mobile, Tablet, Desktop).',
        'Modul Content Management System (CMS) untuk pembaruan profil layanan, portofolio klien, dan berita perusahaan secara dinamis.',
        'Optimasi kecepatan muat halaman melalui kompresi aset dan caching queries.',
        'Formulir kontak bisnis terintegrasi dengan validasi anti-spam.'
      ],
      role: 'Fullstack Web Developer',
      status: 'Production / Deployed'
    },
    sekolah: {
      title: 'Sistem Informasi Profil Sekolah',
      category: 'Education Portal & Database System',
      tech: ['PHP', 'MySQL', 'Fullstack Web', 'JavaScript', 'Tailwind/CSS', 'Database Design'],
      summary: 'Pengembangan basis data dan sistem informasi portal profil sekolah secara Fullstack guna memfasilitasi publikasi kegiatan akademik dan keterbukaan informasi publik.',
      features: [
        'Perancangan skema database relasional ternormalisasi (3NF) untuk data siswa, guru, dan mata pelajaran.',
        'Portal publikasi informasi akademik, ekstrakurikuler, dan agenda kegiatan sekolah interaktif.',
        'Role-Based Access Control (RBAC) untuk manajemen hak akses staf administrasi dan pengelola konten.',
        'Tampilan antarmuka yang ramah pengguna (user-friendly) untuk semua kalangan, termasuk wali murid.',
        'Dashboard statistik dan ringkasan data inventaris sarana sekolah.'
      ],
      role: 'Fullstack Developer & Database Designer',
      status: 'Selesai & Diimplementasikan'
    }
  };

  /* --------------------------------------------------------------------------
     1. Theme Switcher (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('portfolio_theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initialize theme: priority storedTheme -> default light (Linear/Vercel clean mode)
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('portfolio_theme', targetTheme);
      
      showToast(`Tema beralih ke mode ${targetTheme === 'dark' ? 'Gelap (Onyx)' : 'Terang (Clean Minimal)'}`);
    });
  }

  /* --------------------------------------------------------------------------
     2. Sticky Navbar & Scroll Progress
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  /* --------------------------------------------------------------------------
     3. Mobile Navigation Drawer
     -------------------------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const toggleMobileNav = () => {
    const isOpen = hamburgerBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
    hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  const closeMobileNav = () => {
    hamburgerBtn.classList.remove('active');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', toggleMobileNav);
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileNav);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        closeMobileNav();
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. Active Link Spy (ScrollSpy via IntersectionObserver)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Desktop links
        desktopNavLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        // Mobile links
        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));

  /* --------------------------------------------------------------------------
     5. Scroll Reveal Animation
     -------------------------------------------------------------------------- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Reveal only once for performance
      }
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.15
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --------------------------------------------------------------------------
     6. Typewriter Effect in Hero Section
     -------------------------------------------------------------------------- */
  const typewriterSpan = document.getElementById('typewriter-text');
  if (typewriterSpan) {
    const roles = [
      'Frontend & Fullstack Developer',
      'Relational Database Enthusiast',
      'Junior Network Administrator (BNSP)'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 90;

    const typeRole = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typewriterSpan.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 45;
      } else {
        typewriterSpan.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 1800; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500; // Pause before typing new word
      }

      setTimeout(typeRole, typingSpeed);
    };

    // Kick off typewriter
    setTimeout(typeRole, 600);
  }

  /* --------------------------------------------------------------------------
     7. Toast Notification Utility
     -------------------------------------------------------------------------- */
  const toastContainer = document.getElementById('toast-container');
  window.showToast = (message) => {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${escapeHtml(message)}</span>
    `;

    toastContainer.appendChild(toast);
    
    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto remove
    setTimeout(() => {
      toast.classList.remove('show');
      toast.addEventListener('transitionend', () => {
        toast.remove();
      });
    }, 3200);
  };

  /* --------------------------------------------------------------------------
     8. Copy to Clipboard Functionality
     -------------------------------------------------------------------------- */
  const copyButtons = document.querySelectorAll('[data-copy]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Teks';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`${label} berhasil disalin ke clipboard!`);
        }).catch(() => {
          fallbackCopyText(textToCopy, label);
        });
      } else {
        fallbackCopyText(textToCopy, label);
      }
    });
  });

  const fallbackCopyText = (text, label) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`${label} berhasil disalin ke clipboard!`);
    } catch (err) {
      showToast(`Gagal menyalin ${label}`);
    }
    document.body.removeChild(textArea);
  };

  /* --------------------------------------------------------------------------
     9. Interactive Contact Form (WhatsApp / Email Direct Dispatch)
     -------------------------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');
  const channelWhatsAppBtn = document.getElementById('channel-wa-btn');
  const channelEmailBtn = document.getElementById('channel-email-btn');
  let selectedChannel = 'whatsapp'; // default

  if (channelWhatsAppBtn && channelEmailBtn) {
    channelWhatsAppBtn.addEventListener('click', () => {
      selectedChannel = 'whatsapp';
      channelWhatsAppBtn.classList.add('active');
      channelEmailBtn.classList.remove('active');
    });

    channelEmailBtn.addEventListener('click', () => {
      selectedChannel = 'email';
      channelEmailBtn.classList.add('active');
      channelWhatsAppBtn.classList.remove('active');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('sender-name').value.trim();
      const contactInfo = document.getElementById('sender-contact').value.trim();
      const subject = document.getElementById('sender-subject').value.trim();
      const message = document.getElementById('sender-message').value.trim();

      if (!name || !contactInfo || !message) {
        showToast('Mohon lengkapi nama, kontak, dan pesan Anda!');
        return;
      }

      if (selectedChannel === 'whatsapp') {
        const waNumber = '628570641128';
        const formattedMsg = `*Halo Vilary, Pesan Baru dari Portofolio*\n\n` +
          `👤 *Nama:* ${name}\n` +
          `📞 *Kontak/Email:* ${contactInfo}\n` +
          `📌 *Subjek:* ${subject || 'Kolaborasi / Diskusi Proyek'}\n\n` +
          `💬 *Pesan:*\n${message}`;

        const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(formattedMsg)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        showToast('Membuka WhatsApp untuk mengirim pesan...');
        contactForm.reset();
      } else {
        const mailTo = 'vilaryaldino@gmail.com';
        const mailSubject = `[Portofolio Contact] ${subject || 'Pesan Baru dari ' + name}`;
        const mailBody = `Halo Vilary,\n\nNama: ${name}\nKontak/Pengirim: ${contactInfo}\n\nPesan:\n${message}`;
        
        const mailUrl = `mailto:${mailTo}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
        window.location.href = mailUrl;
        showToast('Membuka email client Anda...');
        contactForm.reset();
      }
    });
  }

  /* --------------------------------------------------------------------------
     10. Project Detail Modal
     -------------------------------------------------------------------------- */
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalContentContainer = document.getElementById('modal-body-content');
  const detailButtons = document.querySelectorAll('[data-project-key]');

  const openProjectModal = (key) => {
    const project = projectDatabase[key];
    if (!project || !modalOverlay || !modalContentContainer) return;

    modalContentContainer.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="section-badge" style="margin-bottom: 0.5rem;">${escapeHtml(project.category)}</span>
        <h3 style="font-size: 1.75rem; font-weight: 800; margin-bottom: 0.5rem;">${escapeHtml(project.title)}</h3>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${escapeHtml(project.summary)}</p>
      </div>

      <div style="margin-bottom: 1.5rem; background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 600;">PERAN & STATUS PROYEK:</p>
        <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(project.role)} &bull; <span style="color: var(--accent-emerald);">${escapeHtml(project.status)}</span></p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">Fitur Kunci & Arsitektur:</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          ${project.features.map(f => `
            <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5;">
              <svg style="width: 16px; height: 16px; color: var(--accent-cyan); flex-shrink: 0; margin-top: 3px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              <span>${escapeHtml(f)}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div>
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">Teknologi Terkait:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${project.tech.map(t => `<span class="project-tag" style="background: rgba(56, 189, 248, 0.1); border-color: rgba(56, 189, 248, 0.25); color: var(--accent-cyan);">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    `;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-project-key');
      openProjectModal(key);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeProjectModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('open')) {
        closeProjectModal();
      }
    });
  }

  /* --------------------------------------------------------------------------
     11. Back to Top Button
     -------------------------------------------------------------------------- */
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* Helper function to prevent XSS in dynamic templates */
  function escapeHtml(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});

