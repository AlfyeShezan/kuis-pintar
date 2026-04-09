// Supabase Configuration
const SUPABASE_URL = 'https://fiihrefnpskbulqncyrs.supabase.co';
const SUPABASE_KEY = 'sb_publishable_7cWoEcQdCnP1PGIAyPTa-Q_FSnLYmqb';
const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const ALL_QUESTIONS = {
    indonesia: [
        { q: "Apa lawan kata dari 'rajin'?", a: ["Malas", "Pintar", "Giat", "Patuh"], c: 0 },
        { q: "Lengkapilah peribahasa: 'Sedia payung sebelum...'", a: ["Badai", "Hujan", "Angin", "Malam"], c: 1 },
        { q: "Huruf kapital digunakan untuk menulis... di awal kalimat.", a: ["Nama Hewan", "Kata Kerja", "Nama Orang", "Nama Benda"], c: 2 },
        { q: "Pantun memiliki sajak...?", a: ["A-B-C-D", "A-A-B-B", "A-B-A-B", "A-A-A-A"], c: 2 },
        { q: "Tanda baca untuk mengakhiri kalimat tanya adalah...?", a: ["Titik (.)", "Koma (,)", "Tanda Seru (!)", "Tanda Tanya (?)"], c: 3 },
        { q: "Kata dasar dari 'berjalan' adalah...?", a: ["Berjalan", "Jalankan", "Jalan", "Jalanan"], c: 2 },
        { q: "Siapa penulis cerita anak yang sering disebut sebagai Dongeng?", a: ["Pengarang", "Penyair", "Pendongeng", "Pelukis"], c: 2 },
        { q: "Tempat meminjam buku di sekolah disebut...?", a: ["Kantor", "Perpustakaan", "Kantin", "Aula"], c: 1 },
        { q: "Antonim dari kata 'Besar' adalah...?", a: ["Tinggi", "Lebar", "Kecil", "Luas"], c: 2 },
        { q: "Majas yang membandingkan benda dengan manusia disebut...?", a: ["Hiperbola", "Personifikasi", "Metafora", "Litotes"], c: 1 }
    ],
    matematika: [
        { q: "Berapakah hasil dari 7 x 8?", a: ["54", "56", "64", "62"], c: 1 },
        { q: "Berapakah hasil dari 100 - 45?", a: ["45", "55", "65", "35"], c: 1 },
        { q: "Berapakah jumlah sudut pada segitiga?", a: ["2", "3", "4", "5"], c: 1 },
        { q: "Berapakah hasil dari 40 : 5?", a: ["6", "7", "8", "9"], c: 2 },
        { q: "Berapakah hasil dari 12 x 3?", a: ["32", "36", "42", "24"], c: 1 },
        { q: "Berapakah hasil dari 25 + 75?", a: ["110", "100", "90", "125"], c: 1 },
        { q: "Bentuk bangun datar yang memiliki 4 sisi sama panjang adalah...?", a: ["Persegi Panjang", "Segitiga", "Persegi", "Lingkaran"], c: 2 },
        { q: "Jika 1 jam adalah 60 menit, berapa menit dalam 2 jam?", a: ["100 Menit", "110 Menit", "120 Menit", "90 Menit"], c: 2 },
        { q: "Berapakah hasil dari 150 : 3?", a: ["50", "40", "60", "30"], c: 0 },
        { q: "Angka 5 pada bilangan 542 menempati nilai tempat...?", a: ["Satuan", "Puluhan", "Ratusan", "Ribuan"], c: 2 }
    ],
    ipa: [
        { q: "Apa sumber energi terbesar bagi bumi?", a: ["Bulan", "Listrik", "Matahari", "Api"], c: 2 },
        { q: "Bagian tumbuhan yang berfungsi menyerap air dari tanah adalah...?", a: ["Daun", "Batang", "Bunga", "Akar"], c: 3 },
        { q: "Hewan yang memakan daging disebut...?", a: ["Herbivora", "Karnivora", "Omnivora", "Insektivora"], c: 1 },
        { q: "Proses tumbuhan memasak makanan sendiri disebut...?", a: ["Bernapas", "Fotosintesis", "Penguapan", "Perkembangbiakan"], c: 1 },
        { q: "Planet terdekat dari Matahari adalah...?", a: ["Bumi", "Mars", "Merkurius", "Venus"], c: 2 },
        { q: "Air yang membeku akan berubah wujud menjadi...?", a: ["Uap", "Cair", "Gas", "Padat"], c: 3 },
        { q: "Manusia bernapas menggunakan...?", a: ["Insang", "Paru-paru", "Kulit", "Trakea"], c: 1 },
        { q: "Bunyi tidak dapat merambat di...?", a: ["Air", "Udara", "Ruang Hampa", "Kayu"], c: 2 },
        { q: "Benda yang dapat ditarik oleh magnet adalah...?", a: ["Plastik", "Besi", "Kayu", "Kertas"], c: 1 },
        { q: "Perubahan wujud dari padat menjadi gas disebut...?", a: ["Mencair", "Menguap", "Menyublim", "Membeku"], c: 2 }
    ],
    ips: [
        { q: "Apa nama candi Buddha terbesar di Indonesia?", a: ["Prambanan", "Borobudur", "Mendut", "Kalasan"], c: 1 },
        { q: "Siapa tokoh yang membacakan teks proklamasi?", a: ["Moh. Hatta", "Soeharto", "Soekarno", "Ki Hajar Dewantara"], c: 2 },
        { q: "Apa nama mata uang negara Indonesia?", a: ["Ringgit", "Rupiah", "Dollar", "Yen"], c: 1 },
        { q: "Ibu kota negara Indonesia saat ini adalah...?", a: ["Bandung", "Surabaya", "Jakarta", "Yogyakarta"], c: 2 },
        { q: "Suku aseli dari provinsi Papua adalah...?", a: ["Batak", "Dayak", "Asmat", "Jawa"], c: 2 },
        { q: "Gudeg adalah makanan khas dari daerah...?", a: ["Jakarta", "Yogyakarta", "Bali", "Padang"], c: 1 },
        { q: "Negara yang pernah menjajah Indonesia paling lama adalah...?", a: ["Jepang", "Inggris", "Belanda", "Portugis"], c: 2 },
        { q: "Samudra yang mengapit wilayah Indonesia adalah...?", a: ["Pasifik & Hindia", "Pasifik & Atlantik", "Hindia & Arktik", "Atlantik & Hindia"], c: 0 },
        { q: "Rumah Gadang berasal dari daerah...?", a: ["Sumatera Utara", "Sumatera Barat", "Sumatera Selatan", "Riau"], c: 1 },
        { q: "Gunung tertinggi di pulau Jawa adalah...?", a: ["Merapi", "Slamet", "Semeru", "Lawu"], c: 2 }
    ],
    pkn: [
        { q: "Apa lambang negara Indonesia?", a: ["Pohon Beringin", "Burung Garuda", "Bintang", "Rantai"], c: 1 },
        { q: "Sila kedua Pancasila berlambang...?", a: ["Bintang", "Pohon Beringin", "Rantai", "Kepala Banteng"], c: 2 },
        { q: "Apa semboyan bangsa Indonesia?", a: ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Ing Ngarsa Sung Tuladha", "Maju Tak Gentar"], c: 1 },
        { q: "Keputusan bersama yang diambil untuk mufakat disebut...?", a: ["Diskusi", "Debat", "Musyawarah", "Pidato"], c: 2 },
        { q: "Warna bendera Indonesia Merah berarti...?", a: ["Suci", "Berani", "Kuat", "Sabar"], c: 1 },
        { q: "Kewajiban utama seorang pelajar adalah...?", a: ["Bekerja", "Bermain", "Belajar", "Tidur"], c: 2 },
        { q: "Kepala Negara Indonesia adalah seorang...?", a: ["Raja", "Sultan", "Perdana Menteri", "Presiden"], c: 3 },
        { q: "Lagu kebangsaan Indonesia adalah...?", a: ["Bagimu Negeri", "Indonesia Raya", "Garuda Pancasila", "Halo-halo Bandung"], c: 1 },
        { q: "Dasar negara Indonesia adalah...?", a: ["UUD 1945", "Pancasila", "GBHN", "Proklamasi"], c: 1 },
        { q: "Hari Kesaktian Pancasila diperingati setiap tanggal...?", a: ["1 Juni", "17 Agustus", "1 Oktober", "10 November"], c: 2 }
    ],
    pai: [
        { q: "Rukun Islam yang pertama adalah...?", a: ["Shalat", "Syahadat", "Zakat", "Puasa"], c: 1 },
        { q: "Ada berapakah jumlah Rukun Iman?", a: ["4", "5", "6", "7"], c: 2 },
        { q: "Surah pertama dalam Al-Qur'an adalah...?", a: ["An-Naas", "Al-Falaq", "Al-Fatihah", "Al-Ikhlas"], c: 2 },
        { q: "Siapa nabi terakhir (penutup para nabi)?", a: ["Nabi Isa AS", "Nabi Musa AS", "Nabi Muhammad SAW", "Nabi Ibrahim AS"], c: 2 },
        { q: "Malaikat yang bertugas menyampaikan wahyu adalah...?", a: ["Mikail", "Israil", "Jibril", "Ridwan"], c: 2 },
        { q: "Shalat fardhu dalam sehari semalam ada berapa waktu?", a: ["3 waktu", "4 waktu", "5 waktu", "6 waktu"], c: 2 },
        { q: "Kitab suci umat Islam adalah...?", a: ["Injil", "Taurat", "Zabur", "Al-Qur'an"], c: 3 },
        { q: "Tempat ibadah umat Islam disebut...?", a: ["Gereja", "Pura", "Masjid", "Vihara"], c: 2 },
        { q: "Berbakti kepada orang tua disebut...?", a: ["Birrul Walidain", "Ukhuwah", "Tashdiq", "Istiqomah"], c: 0 },
        { q: "Perpindahan Nabi Muhammad dari Makkah ke Madinah disebut...?", a: ["Isra Miraj", "Hijrah", "Fathul Makkah", "Qurban"], c: 1 }
    ],
    pjok: [
        { q: "Berapa jumlah pemain dalam satu tim sepak bola?", a: ["5 Orang", "9 Orang", "11 Orang", "12 Orang"], c: 2 },
        { q: "Gerakan memutar tubuh di udara disebut...?", a: ["Salto", "Sikap Lilin", "Guling Depan", "Kayang"], c: 0 },
        { q: "Lari jarak pendek disebut juga lari...?", a: ["Maraton", "Estafet", "Sprint", "Zig-zag"], c: 2 },
        { q: "Induk organisasi sepak bola dunia adalah...?", a: ["FIBA", "PSSI", "FIFA", "BWF"], c: 2 },
        { q: "Istirahat yang paling baik adalah...?", a: ["Bermain", "Makan", "Tidur", "Membaca"], c: 2 },
        { q: "Sebutkan jenis vitamin yang baik untuk kesehatan mata!", a: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], c: 0 },
        { q: "Alat pemukul dalam permainan kasti disebut...?", a: ["Raket", "Bet", "Stick/Tongkat", "Glove"], c: 2 },
        { q: "Pemanasan sebelum olahraga bertujuan untuk...?", a: ["Lapar", "Haus", "Mencegah Cedera", "Mengantuk"], c: 2 },
        { q: "Renang gaya katak disebut juga gaya...?", a: ["Bebas", "Punggung", "Dada", "Kupu-kupu"], c: 2 },
        { q: "Gerakan melompat di tempat termasuk gerak...?", a: ["Lokomotor", "Non-lokomotor", "Manipulatif", "Statistik"], c: 1 }
    ],
    senibudaya: [
        { q: "Warna yang dihasilkan dari campuran merah dan kuning adalah...?", a: ["Hijau", "Ungu", "Oranye", "Cokelat"], c: 2 },
        { q: "Alat musik yang dimainkan dengan cara ditiup adalah...?", a: ["Gitar", "Suling", "Drum", "Kecapi"], c: 1 },
        { q: "Lagu 'Ampar-ampar Pisang' berasal dari...?", a: ["Papua", "Jawa Barat", "Kalimantan Selatan", "Bali"], c: 2 },
        { q: "Patung termasuk dalam karya seni... dimensi.", a: ["1", "2", "3", "4"], c: 2 },
        { q: "Batik yang dibuat dengan canting disebut batik...?", a: ["Cap", "Tulis", "Printing", "Celup"], c: 1 },
        { q: "Angklung adalah alat musik tradisional dari...?", a: ["Jawa Timur", "Jawa Barat", "Sumatera", "Aceh"], c: 1 },
        { q: "Tarian dari Bali yang sangat terkenal adalah tari...?", a: ["Saman", "Piring", "Kecak", "Jaipong"], c: 2 },
        { q: "Nada tinggi rendah dalam lagu disebut...?", a: ["Irama", "Melodi", "Ritme", "Tempo"], c: 1 },
        { q: "Cepat lambatnya sebuah lagu disebut...?", a: ["Dinamika", "Tempo", "Nada", "Vokal"], c: 1 },
        { q: "Menggambar dengan teknik menempel kertas disebut...?", a: ["Lukis", "Mozaik / Kolase", "Poster", "Komik"], c: 1 }
    ],
    inggris: [
        { q: "What is the color of an apple usually?", a: ["Blue", "Red", "Yellow", "Purple"], c: 1 },
        { q: "How many legs does a spider have?", a: ["Four", "Six", "Eight", "Ten"], c: 2 },
        { q: "What is the English word for 'Buku'?", a: ["Pencil", "Bag", "Book", "Eraser"], c: 2 },
        { q: "Translate: 'Good Morning'!", a: ["Selamat Siang", "Selamat Malam", "Selamat Pagi", "Halo"], c: 2 },
        { q: "An elephant is a... animal.", a: ["Small", "Tiny", "Big", "Thin"], c: 2 },
        { q: "What do we wear on our heads?", a: ["Shoes", "Hat", "Gloves", "Socks"], c: 1 },
        { q: "Monday, Tuesday, ...?", a: ["Friday", "Sunday", "Wednesday", "Thursday"], c: 2 },
        { q: "The capital of England is...?", a: ["London", "Paris", "New York", "Tokyo"], c: 0 },
        { q: "A person who teaches is a...?", a: ["Doctor", "Singer", "Teacher", "Pilot"], c: 2 },
        { q: "The opposite of 'Happy' is...?", a: ["Sad", "Glad", "Playful", "Angry"], c: 0 }
    ],
    tik: [
        { q: "Otak dari sebuah komputer disebut...?", a: ["Monitor", "Mouse", "CPU", "Keyboard"], c: 2 },
        { q: "Alat untuk mengetik di komputer adalah...?", a: ["Printer", "Scanner", "Keyboard", "Speaker"], c: 2 },
        { q: "Alat untuk mencetak dokumen adalah...?", a: ["Monitor", "Printer", "Modem", "Flashdisk"], c: 1 },
        { q: "Internet adalah singkatan dari...?", a: ["Inter-Network", "Inter-Net", "Inter-National", "Internal-Net"], c: 0 },
        { q: "Tombol pada keyboard untuk menghapus adalah...?", a: ["Shift", "Enter", "Backspace / Delete", "Esc"], c: 2 },
        { q: "Layar komputer disebut juga...?", a: ["Processor", "Monitor", "RAM", "Speaker"], c: 1 },
        { q: "WWW stands for...?", a: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], c: 0 },
        { q: "Pesan elektronik disebut juga dengan...?", a: ["Surat", "Telepon", "Email", "SMS"], c: 2 },
        { q: "Alat penyimpan data yang kecil disebut...?", a: ["Harddisk", "Layar", "Flashdisk", "Speaker"], c: 2 },
        { q: "Situs pencari paling populer di dunia adalah...?", a: ["Facebook", "Google", "WhatsApp", "YouTube"], c: 1 }
    ]
};

// Supabase Integration Utility
const ProfileManager = {
    sessionKey: 'kuis_pintar_current_user',
    
    async getRemote(name) {
        const { data, error } = await _supabase
            .from('users')
            .select('*')
            .eq('name', name)
            .single();
        
        if (error) return { not_found: true };
        return data;
    },
    
    async saveRemote(data) {
        const { error } = await _supabase
            .from('users')
            .upsert({ 
                name: data.name, 
                avatar: data.avatar, 
                role: data.role, 
                xp: data.xp, 
                games_played: data.games_played 
            }, { onConflict: 'name' });
            
        if (!error) {
            localStorage.setItem(this.sessionKey, data.name);
            this.updateHeader(data);
        }
    },
    
    updateHeader(p) {
        if (!p) return;
        document.getElementById('global-header').style.display = 'flex';
        document.getElementById('header-avatar').innerText = p.avatar || '🌱';
        document.getElementById('header-name').innerText = p.name;
        document.getElementById('header-level').innerText = `Level ${this.calculateLevel(p.xp)}`;
        document.getElementById('header-role').innerText = (p.role || 'siswa').toUpperCase();
        
        document.getElementById('teacher-actions').style.display = p.role === 'guru' ? 'block' : 'none';
    },
    
    calculateLevel(xp) {
        return Math.floor(Math.sqrt((xp || 0) / 50)) + 1;
    },
    
    getXPForLevel(level) {
        return Math.pow(level - 1, 2) * 50;
    },
    
    getRank(level) {
        if (level >= 10) return "Pelindung Alam 👑";
        if (level >= 8) return "Pohon Besar 🌳";
        if (level >= 5) return "Tanaman Muda 🌿";
        if (level >= 3) return "Tunas Harapan 🌱";
        return "Bibit Sahabat 🍀";
    }
};

// Audio Engine
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTone(type) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'correct') {
        osc.frequency.setValueAtTime(523, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.1);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now); osc.stop(now + 0.3);
    } else if (type === 'wrong') {
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, now);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
        osc.start(now); osc.stop(now + 0.2);
    } else if (type === 'victory') {
        [523, 659, 783].forEach((f, i) => {
            const o = audioCtx.createOscillator();
            const g = audioCtx.createGain();
            o.connect(g); g.connect(audioCtx.destination);
            o.frequency.setValueAtTime(f, now + (i * 0.15));
            g.gain.setValueAtTime(0.2, now + (i * 0.15));
            g.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.15) + 0.3);
            o.start(now + (i * 0.15)); o.stop(now + (i * 0.15) + 0.3);
        });
    } else if (type === 'hover') {
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(1200, now + 0.05);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now); osc.stop(now + 0.05);
    }
}

// DOM Elements
const screens = {
    setup: document.getElementById('setup-screen'),
    start: document.getElementById('start-screen'),
    menu: document.getElementById('menu-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    profile: document.getElementById('profile-screen'),
    teacher: document.getElementById('teacher-dashboard-screen')
};

const elements = {
    questionText: document.getElementById('question-text'),
    optionsGrid: document.getElementById('options-grid'),
    progressBar: document.getElementById('progress-bar'),
    progressText: document.getElementById('progress-text'),
    subjectTag: document.getElementById('subject-tag'),
    feedbackOverlay: document.getElementById('feedback-overlay'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    nextBtn: document.getElementById('next-btn'),
    achievementGarden: document.getElementById('achievement-garden'),
    streakMeter: document.getElementById('streak-meter'),
    timerBar: document.getElementById('timer-bar'),
    reactionOverlay: document.getElementById('reaction-overlay'),
    reactionEmoji: document.getElementById('reaction-emoji'),
    reactionText: document.getElementById('reaction-text'),
    levelUpOverlay: document.getElementById('level-up-overlay'),
    levelUpText: document.getElementById('level-up-text'),
    studentsTableBody: document.getElementById('students-table-body'),
    leaderboardList: document.getElementById('leaderboard-list')
};

const powerupBtns = {
    double: document.getElementById('pwr-double'),
    freeze: document.getElementById('pwr-freeze'),
    shield: document.getElementById('pwr-shield')
};

// State
let currentSubject = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let streak = 0;
let timer = null;
let timeLeft = 100;
let powerups = { double: true, freeze: true, shield: true };
let activePowerup = null;
let currentUser = null;
let selectedRole = "siswa";

// Initialization Logic
window.onload = async () => {
    const savedName = localStorage.getItem(ProfileManager.sessionKey);
    if (savedName) {
        currentUser = await ProfileManager.getRemote(savedName);
        if (currentUser && !currentUser.not_found) {
            ProfileManager.updateHeader(currentUser);
            showScreen('start');
            fetchAndShowLeaderboard();
            return;
        }
    }
    showScreen('setup');
};

// Setup Screen Role Toggles
document.querySelectorAll('.role-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.role-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedRole = btn.dataset.role;
        document.getElementById('guru-pin-container').style.display = selectedRole === 'guru' ? 'block' : 'none';
        document.getElementById('avatar-setup-container').style.display = selectedRole === 'guru' ? 'none' : 'block';
    };
});

// Setup Screen Listeners
let selectedAvatar = "🌱";
document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.onclick = () => {
        document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        selectedAvatar = opt.dataset.avatar;
    };
});

document.getElementById('save-profile-btn').onclick = async () => {
    const name = document.getElementById('username-input').value.trim() || 'Petualang';
    
    if (selectedRole === 'guru') {
        const pin = document.getElementById('guru-pin').value;
        if (pin !== '8888') {
            alert('PIN GURU SALAH! Silakan masukkan pin yang benar.');
            return;
        }
        selectedAvatar = "👨‍🏫";
    }

    let existing = await ProfileManager.getRemote(name);
    if (existing && !existing.not_found) {
        currentUser = existing;
    } else {
        currentUser = { name: name, avatar: selectedAvatar, role: selectedRole, xp: 0, games_played: 0 };
    }
    await ProfileManager.saveRemote(currentUser);
    showScreen('start');
    fetchAndShowLeaderboard();
};

// Navigation Listeners
document.getElementById('go-to-menu-btn').onclick = () => showScreen('menu');
document.getElementById('open-profile-btn').onclick = showDashboard;
document.getElementById('back-to-menu-btn').onclick = () => showScreen('menu');
document.getElementById('edit-profile-btn').onclick = () => {
    document.getElementById('username-input').value = currentUser.name;
    selectedAvatar = currentUser.avatar;
    selectedRole = currentUser.role || 'siswa';
    document.querySelectorAll('.role-btn').forEach(b => b.classList.toggle('active', b.dataset.role === selectedRole));
    document.getElementById('guru-pin-container').style.display = selectedRole === 'guru' ? 'block' : 'none';
    document.querySelectorAll('.avatar-option').forEach(o => o.classList.toggle('selected', o.dataset.avatar === selectedAvatar));
    document.querySelector('#setup-screen h1').innerText = "Edit Profil 👤";
    showScreen('setup');
};

document.getElementById('go-to-teacher-dashboard-btn').onclick = showTeacherDashboard;
document.getElementById('back-from-teacher-btn').onclick = () => {
    showScreen('start');
    fetchAndShowLeaderboard();
};
document.getElementById('refresh-students-btn').onclick = fetchAndRenderStudents;

document.querySelectorAll('.subject-card').forEach(card => {
    card.onclick = () => startSubject(card.dataset.subject);
});

elements.nextBtn.onclick = goToNextQuestion;
elements.reactionOverlay.onclick = goToNextQuestion;

document.getElementById('restart-btn').onclick = () => startSubject(currentSubject);
document.getElementById('change-subject-btn').onclick = () => showScreen('menu');
document.getElementById('level-up-close-btn').onclick = () => elements.levelUpOverlay.style.display = 'none';

// Power-ups
document.getElementById('pwr-double').onclick = () => usePowerup('double');
document.getElementById('pwr-freeze').onclick = () => usePowerup('freeze');
document.getElementById('pwr-shield').onclick = () => usePowerup('shield');

// Game Functions
function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
    document.getElementById('global-header').style.display = (name === 'setup') ? 'none' : 'flex';
}

function startSubject(subjectKey) {
    currentSubject = subjectKey;
    currentQuestions = [...ALL_QUESTIONS[subjectKey]].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    score = 0;
    streak = 0;
    powerups = { double: true, freeze: true, shield: true };
    activePowerup = null;
    updatePowerupUI();
    updateStreakUI();
    
    showScreen('quiz');
    showQuestion();
}

function showQuestion() {
    answered = false;
    elements.nextBtn.style.display = 'none';
    elements.feedbackOverlay.innerHTML = '';
    timeLeft = 100;
    elements.timerBar.style.width = '100%';
    elements.timerBar.style.background = '#ff4757';
    
    const data = currentQuestions[currentIndex];
    elements.progressBar.style.width = `${(currentIndex / 10) * 100}%`;
    elements.progressText.innerText = `Soal ${currentIndex + 1} dari 10`;
    elements.questionText.innerText = data.q;
    elements.optionsGrid.innerHTML = '';
    
    data.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onmouseenter = () => playTone('hover');
        btn.onclick = () => handleAnswer(idx, btn);
        elements.optionsGrid.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        if (activePowerup === 'freeze') return;
        timeLeft -= 1;
        elements.timerBar.style.width = `${timeLeft}%`;
        if (timeLeft <= 0) { clearInterval(timer); handleAnswer(-1, null); }
    }, 150);
}

function handleAnswer(idx, btn) {
    if (answered) return;
    answered = true;
    clearInterval(timer);
    
    const correctIdx = currentQuestions[currentIndex].c;
    const isCorrect = idx === correctIdx;
    let reaction = {};
    
    if (isCorrect) {
        streak++;
        let points = 10 + Math.floor(timeLeft / 10);
        if (activePowerup === 'double') points *= 2;
        score += points;
        btn.classList.add('correct');
        playTone('correct');
        reaction = { emoji: "🌿", text: "SUBUR!", type: 'correct' };
    } else {
        if (activePowerup === 'shield') {
            activePowerup = null;
            elements.feedbackOverlay.innerHTML = '🛡️ Shielded!';
        } else {
            streak = 0;
            reaction = { emoji: "🍂", text: "LAYUH...", type: 'wrong' };
        }
        if (btn) btn.classList.add('wrong');
        elements.optionsGrid.querySelectorAll('.option-btn')[correctIdx].classList.add('correct');
        playTone('wrong');
    }
    
    activePowerup = null;
    updateStreakUI();
    updatePowerupUI();
    
    setTimeout(() => {
        if (!screens.quiz.classList.contains('active')) return;
        showReaction(reaction);
        setTimeout(() => {
            if (screens.quiz.classList.contains('active') && elements.reactionOverlay.style.display === 'flex') goToNextQuestion();
        }, 3000);
    }, 1000);
    
    elements.optionsGrid.querySelectorAll('button').forEach(b => b.disabled = true);
    elements.nextBtn.style.display = 'block';
}

function goToNextQuestion() {
    if (elements.reactionOverlay.style.display === 'flex' || answered) {
        elements.reactionOverlay.style.display = 'none';
        if (answered) {
            currentIndex++;
            if (currentIndex < 10) showQuestion();
            else showResult();
        }
    }
}

function showReaction(data) {
    elements.reactionOverlay.style.display = 'flex';
    elements.reactionEmoji.innerText = data.emoji;
    elements.reactionText.innerText = data.text;
    elements.reactionText.style.color = data.type === 'correct' ? '#2ecc71' : '#e74c3c';
}

function usePowerup(type) {
    if (!powerups[type] || answered) return;
    powerups[type] = false;
    activePowerup = type;
    updatePowerupUI();
}

function updatePowerupUI() {
    Object.keys(powerupBtns).forEach(k => {
        powerupBtns[k].disabled = !powerups[k] || answered;
        powerupBtns[k].classList.toggle('active', activePowerup === k);
    });
}

function updateStreakUI() {
    elements.streakMeter.innerText = `🔥 ${streak}`;
    elements.streakMeter.style.display = streak > 0 ? 'inline-block' : 'none';
}

async function showResult() {
    showScreen('result');
    elements.finalScore.innerText = score;
    
    if (currentUser.role === 'siswa') {
        const oldLevel = ProfileManager.calculateLevel(currentUser.xp);
        
        // Use RPC to avoid null + math issues
        const { error } = await _supabase.rpc('increment_stats', { 
            user_name_input: currentUser.name, 
            score_gain: score 
        });

        // Save individual game record
        await _supabase.from('leaderboard').insert({
            user_name: currentUser.name,
            subject: currentSubject,
            score: score
        });

        currentUser = await ProfileManager.getRemote(currentUser.name);
        ProfileManager.updateHeader(currentUser);
        
        const newLevel = ProfileManager.calculateLevel(currentUser.xp);
        if (newLevel > oldLevel) showLevelUp(newLevel);
    }

    let msg = score >= 150 ? "LEGENDARIS! 👑" : score >= 100 ? "LUAR BIASA! 🌲" : score >= 70 ? "HEBAT! 🌱" : "COBA LAGI! 💧";
    elements.resultMessage.innerText = msg;
    generateGarden(score);
    if (score >= 100) { playTone('victory'); confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } }); }
}

function showLevelUp(newLevel) {
    elements.levelUpOverlay.style.display = 'flex';
    elements.levelUpText.innerText = `Kamu sekarang Level ${newLevel}! - ${ProfileManager.getRank(newLevel)}`;
    playTone('victory');
    confetti({ particleCount: 200, spread: 100 });
}

async function showDashboard() {
    currentUser = await ProfileManager.getRemote(currentUser.name);
    const lvl = ProfileManager.calculateLevel(currentUser.xp);
    showScreen('profile');
    
    document.getElementById('dash-avatar').innerText = currentUser.avatar;
    document.getElementById('dash-name').innerText = currentUser.name;
    document.getElementById('dash-rank').innerText = ProfileManager.getRank(lvl);
    document.getElementById('stat-level').innerText = lvl;
    document.getElementById('stat-xp').innerText = currentUser.xp;
    document.getElementById('stat-games').innerText = currentUser.games_played;
    
    const curXP = currentUser.xp - ProfileManager.getXPForLevel(lvl);
    const nextXP = ProfileManager.getXPForLevel(lvl + 1) - ProfileManager.getXPForLevel(lvl);
    const perc = (curXP / nextXP) * 100;
    document.getElementById('xp-fill').style.width = `${perc}%`;
    document.getElementById('xp-text').innerText = `${curXP} / ${nextXP} XP menuju Level ${lvl+1}`;
}

async function showTeacherDashboard() {
    showScreen('teacher');
    fetchAndRenderStudents();
}

async function fetchAndShowLeaderboard() {
    try {
        const { data: players, error } = await _supabase
            .from('users')
            .select('name, avatar, xp')
            .eq('role', 'siswa')
            .order('xp', { ascending: false })
            .limit(5);

        elements.leaderboardList.innerHTML = '';
        if (error || !players || players.length === 0) {
            elements.leaderboardList.innerHTML = '<p style="text-align:center; color:#7f8c8d; font-size: 0.9rem;">Belum ada juara. Jadilah yang pertama! 🚀</p>';
            return;
        }

        players.forEach((p, idx) => {
            const rank = idx + 1;
            const medals = ['🥇', '🥈', '🥉', '4', '5'];
            const tr = document.createElement('div');
            tr.className = `leaderboard-item rank-${rank}`;
            tr.innerHTML = `
                <span class="lb-rank">${medals[idx]}</span>
                <span class="lb-avatar">${p.avatar}</span>
                <span class="lb-name">${p.name}</span>
                <span class="lb-xp">${p.xp} XP</span>
            `;
            elements.leaderboardList.appendChild(tr);
        });
    } catch (e) {
        console.error("Gagal memuat leaderboard:", e);
    }
}

async function fetchAndRenderStudents() {
    try {
        const { data: students, error } = await _supabase
            .from('users')
            .select('name, avatar, xp, games_played, created_at')
            .eq('role', 'siswa')
            .order('xp', { ascending: false });
        
        if (error) {
            elements.studentsTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:red; padding:20px;">⚠️ Error: ${error.message}</td></tr>`;
            return;
        }

        elements.studentsTableBody.innerHTML = '';
        if (students.length === 0) {
            elements.studentsTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:20px; color:#7f8c8d;">Belum ada siswa yang terdaftar. Ayo ajak siswa bermain! 🎒</td></tr>';
            return;
        }
        
        students.forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><span style="font-size: 2rem;">${s.avatar || '🎓'}</span></td>
                <td>${s.name}</td>
                <td>${ProfileManager.calculateLevel(s.xp)}</td>
                <td>${s.xp}</td>
                <td>${s.games_played}</td>
                <td style="font-size: 0.8rem; color: #7f8c8d;">${new Date(s.created_at).toLocaleDateString()}</td>
            `;
            elements.studentsTableBody.appendChild(tr);
        });
    } catch (e) {
        console.error("Gagal mengambil data siswa:", e);
        elements.studentsTableBody.innerHTML = '<tr><td colspan="6" style="text-align:center; color:red; padding:20px;">⚠️ Koneksi Supabase bermasalah.</td></tr>';
    }
}

function generateGarden(score) {
    const garden = elements.achievementGarden;
    garden.innerHTML = '';
    const count = Math.min(Math.floor(score / 15), 15);
    const emojis = ['🌻', '🌷', '🌹', '🌼', '🌸', '🏵️', '🌺', '🌱', '🌿', '🍀'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const f = document.createElement('div');
            f.className = 'garden-flower';
            f.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            garden.appendChild(f);
        }, i * 100);
    }
}

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    document.querySelectorAll('.deco').forEach((d, i) => {
        d.style.transform = `translate(${x * (i+1)*0.5}px, ${y * (i+1)*0.5}px)`;
    });
});
