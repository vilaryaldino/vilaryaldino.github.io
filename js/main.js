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
      title: 'Sistem Manajemen Gudang (GudangKu)',
      category: 'Enterprise Solution & Logistics',
      tech: ['Laravel', 'Oracle 11g', 'OCI8 Active', 'Eloquent ORM', 'PL/SQL', 'Bootstrap', 'JavaScript'],
      image: 'assets/img/gudangku-preview.webp',
      summary: 'Aplikasi pencatatan inventaris dan distribusi logistik pergudangan skala enterprise menggunakan Laravel dan basis data Oracle 11g (OCI8). Dirancang dengan jaminan integritas transaksi tinggi dan kepatuhan ACID.',
      features: [
        'Otomasi Sequence Penomoran Transaksi: Penomoran unik otomatis berformat enterprise standar (format BK-YYYYMMDD-001 untuk Pengeluaran Barang / Surat Jalan dan format FB untuk Faktur Pembelian).',
        'Konektivitas Dedicated Oracle 11g (OCI8 Active): Integrasi koneksi langsung Laravel ke database Oracle 11g dengan schema relasional teruji dan performa query teroptimasi.',
        'Modul Pengeluaran Barang (Surat Jalan Distribusi): Alokasi logistik pengeluaran barang multi-item langsung dari katalog master item siap distribusi.',
        'Modul Faktur Pembelian (Barang Masuk): Pencatatan dan verifikasi faktur pengadaan barang dari rekanan supplier dengan auto-update saldo persediaan.',
        'Audit Mutasi & Kontrol Stok Fisik: Pemantauan pergerakan barang real-time melalui Kartu Mutasi Stok guna mencegah selisih persediaan fisik di gudang.'
      ],
      role: 'Fullstack Developer & Database Architect',
      status: 'Selesai & Teruji'
    },
    sks: {
      title: 'Sistem Manajemen Keuangan Siswa (SKS-Aisyiyah)',
      category: 'School Administration & Finance System',
      tech: ['CodeIgniter 4', 'PHP 8.x', 'MySQL', 'Bootstrap 5', 'Dashboard KPI', 'SweetAlert2', 'JavaScript'],
      image: 'assets/img/sks-preview.webp',
      summary: 'Aplikasi web tata kelola administrasi keuangan dan operasional sekolah terpadu di PG TK \'Aisyiyah VI Candi. Menghadirkan transparansi finansial, otomasi rekonsiliasi kas, pelaporan laba/rugi, serta monitoring real-time tunggakan siswa.',
      features: [
        'Dashboard Eksekutif & KPI Finansial Real-Time: Visualisasi metrik kunci mencakup jumlah siswa aktif, volume transaksi masuk, dan perhitungan otomatis total piutang/tunggakan belum lunas.',
        'Laporan Keuangan Sekolah (Laba / Rugi): Perhitungan matematis neraca arus kas (total pendapatan/uang masuk vs total pengeluaran belanja sekolah) dengan kalkulasi saldo bersih akurat.',
        'Otomasi Cetak Laporan Lengkap: Fitur cetak rekapitulasi finansial komprehensif seluruh pos anggaran (biaya pendaftaran siswa baru, SPP bulanan, dan kas) hanya dengan satu klik.',
        'Manajemen Pengeluaran & Slip Gaji Guru: Pencatatan beban belanja operasional sekolah serta modul penerbitan slip insentif dan gaji tenaga pendidik terintegrasi.',
        'Grafik Analisis Tren Keuangan: Visualisasi grafik interaktif tren arus kas masuk mingguan/tahunan dan perbandingan statistik pendapatan vs belanja operasional.'
      ],
      role: 'Fullstack Web Developer & Database Designer',
      status: 'Production / Deployed'
    },
    payroll: {
      title: 'Sistem Payroll HRD',
      category: 'Human Resource & Payroll Management',
      tech: ['Laravel', 'PHP 8.x', 'MySQL', 'Blade Engine', 'Vite', 'JavaScript', 'Excel Import Engine'],
      image: 'assets/img/payroll-preview.webp',
      summary: 'Sistem otomasi penggajian (payroll) dan manajemen kepegawaian perusahaan berbasis web untuk memproses data presensi, kompensasi kerja lembur, tunjangan kehadiran, dan pelaporan slip gaji secara presisi.',
      features: [
        'Manajemen master data karyawan, divisi perusahaan, kalender hari libur, dan jadwal multi-shift kerja yang dinamis.',
        'Modul presensi kehadiran komprehensif: input manual, pencatatan surat tugas dinas luar, serta import absensi log Excel.',
        'Otomasi Surat Perintah Lembur (SPL) dengan kalkulasi perhitungan kompensasi jam kerja lembur otomatis & manual.',
        'Perhitungan tunjangan kehadiran & uang makan otomatis yang terkalibrasi dengan kepatuhan jam kerja aktual.',
        'Cetak slip lembur & rekapitulasi gaji karyawan terintegrasi, siap pakai untuk kebutuhan audit HRD dan bagian akuntansi.'
      ],
      role: 'Fullstack Laravel Developer & System Analyst',
      status: 'Selesai & Teruji'
    },
    acwa: {
      title: 'Web Company Profile (ACWA International)',
      category: 'Corporate Website & CMS',
      tech: ['PHP', 'CodeIgniter', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      image: 'assets/img/acwa-preview.webp',
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
      image: 'assets/img/sekolah-preview.webp',
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

      ${project.image ? `
        <div style="margin-bottom: 1.5rem; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-color); background: var(--bg-secondary); box-shadow: var(--shadow-sm);">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; background: var(--bg-secondary); border-bottom: 1px solid var(--border-color); font-size: 0.8rem; color: var(--text-muted); font-weight: 600;">
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 14px; height: 14px; color: var(--accent-cyan);"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              <span>Tampilan Antarmuka Sistem (Antarmuka Live)</span>
            </div>
            <a href="${escapeHtml(project.image)}" target="_blank" rel="noopener noreferrer" style="color: var(--accent-cyan); text-decoration: none; font-size: 0.78rem; display: inline-flex; align-items: center; gap: 0.25rem;" title="Buka resolusi penuh di tab baru">
              <span>Resolusi Penuh</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width: 12px; height: 12px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          </div>
          <a href="${escapeHtml(project.image)}" target="_blank" rel="noopener noreferrer" style="display: block; cursor: zoom-in;" title="Klik untuk memperbesar">
            <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" style="width: 100%; height: auto; display: block; max-height: 380px; object-fit: contain; background: #0f172a;" loading="lazy">
          </a>
        </div>
      ` : ''}

      <div style="margin-bottom: 1.5rem; background: var(--bg-secondary); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-cyan);">
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.25rem; font-weight: 600;">PERAN & STATUS PROYEK:</p>
        <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${escapeHtml(project.role)} &bull; <span style="color: var(--accent-emerald);">${escapeHtml(project.status)}</span></p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.75rem;">Fitur Unggulan Sistem:</h4>
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

  // Event delegation for opening project modals
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-project-key]');
    if (btn) {
      const key = btn.getAttribute('data-project-key');
      openProjectModal(key);
    }
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
     11. Project Category Filter Logic
     -------------------------------------------------------------------------- */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterTabs.length > 0 && projectCards.length > 0) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetCategory = tab.getAttribute('data-filter');

        // Update active tab button state
        filterTabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        // Filter cards
        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (targetCategory === 'all' || category === targetCategory) {
            card.classList.remove('is-hidden');
            card.classList.remove('fade-in');
            // Force browser reflow to re-trigger fade-in animation
            void card.offsetWidth;
            card.classList.add('fade-in');
          } else {
            card.classList.add('is-hidden');
            card.classList.remove('fade-in');
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. Interactive 3D Tilt Effect for Bento Cards
     -------------------------------------------------------------------------- */
  const tiltElements = document.querySelectorAll('[data-tilt]');
  if (window.matchMedia('(pointer: fine)').matches) {
    tiltElements.forEach(el => {
      let isHovered = false;

      el.addEventListener('mouseenter', () => {
        isHovered = true;
        el.style.transition = 'transform 0.1s ease-out, border-color 0.2s ease, box-shadow 0.2s ease';
      });

      el.addEventListener('mousemove', (e) => {
        if (!isHovered) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5.5;
        const rotateY = ((x - centerX) / centerX) * 5.5;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      });

      el.addEventListener('mouseleave', () => {
        isHovered = false;
        el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, box-shadow 0.2s ease';
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  /* --------------------------------------------------------------------------
     12. Back to Top Button
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

