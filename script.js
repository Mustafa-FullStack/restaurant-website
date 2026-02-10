// ===== Translation Data =====
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        menu: "المنيو",
        gallery: "معرض الصور",
        reservation: "حجز طاولة",
        contact: "تواصل معنا",
        hero_title: "تجربة طعام لا تُنسى",
        hero_subtitle: "مذاقات فريدة من المطبخ الفرنسي بلمسة عصرية",
        book_now: "احجز الآن",
        view_menu: "استعرض المنيو",
        our_story: "قصتنا",
        about_title: "فن الطهي بلمسة عصرية",
        about_text: "في L'Or Noir، نؤمن بأن الطعام فن. يجمع شيفنا الحائز على نجمة ميشلان بين التقاليد الفرنسية العريقة والتقنيات الحديثة ليقدم لكم تجربة طعام استثنائية. كل طبق يحكي قصة، وكل مكون يُختار بعناية فائقة.",
        quality: "جودة عالمية",
        fresh: "مكونات طازجة",
        service: "خدمة راقية",
        years_exp: "عاماً من الخبرة",
        discover: "اكتشف",
        menu_title: "منيو L'Or Noir",
        all: "الكل",
        starters: "مقبلات",
        main_dishes: "أطباق رئيسية",
        desserts: "حلويات",
        drinks: "مشروبات",
        dish1: "سلطة سي فود كلاسيكية",
        desc1: "أخطبوط، كاليماري، جمبري مع صلصة الليمون والأعشاب البحرية",
        dish2: "فوا جرا مع التين",
        desc2: "فوا جرا فرنسي مشوي مع مربى التين البلدي وخبز البريوش",
        dish3: "ستيك واغيو A5",
        desc3: "لحم واغيو ياباني درجة A5 مع صلصة الفلفل الأسود والخضروات المشوية",
        dish4: "سلمون أطلسي مشوي",
        desc4: "فيليه سلمون طازج مع صلصة الكريمة والشبت والليمون",
        dish5: "كريم بروليه الفانيليا",
        desc5: "كريم الفانيليا الفرنسي التقليدي مع طبقة كراميل مقرمشة",
        dish6: "تارت الشوكولاتة",
        desc6: "تارت شوكولاتة بلجيكية 70% مع آيس كريم الفانيليا المدخن",
        moments: "لحظات",
        gallery_title: "معرض الصور",
        book_table: "احجز طاولتك",
        reservation_title: "لحظات لا تُنسى تنتظرك",
        reservation_text: "احجز الآن واستمتع بتجربة طعام فاخرة في أجواء راقية. فريقنا جاهز لخدمتك على مدار الأسبوع.",
        address: "طريق الملك فهد، الرياض",
        name: "الاسم",
        phone: "رقم الجوال",
        date: "التاريخ",
        time: "الوقت",
        guests: "عدد الضيوف",
        notes: "ملاحظات خاصة",
        confirm_booking: "تأكيد الحجز",
        footer_text: "وجهتك الأولى للطعام الفاخر في الرياض. نقدم تجربة طعام استثنائية تجمع بين الأصالة والحداثة.",
        quick_links: "روابط سريعة",
        working_hours: "أوقات العمل",
        saturday_thursday: "السبت - الخميس",
        friday: "الجمعة",
        newsletter: "النشرة البريدية",
        newsletter_text: "اشترك للحصول على أحدث العروض والأخبار",
        rights: "جميع الحقوق محفوظة",
        success_title: "تم بنجاح!",
        success_message: "تم تأكيد حجزك وسنتواصل معك قريباً",
        close: "إغلاق"
    },
    en: {
        home: "Home",
        about: "About Us",
        menu: "Menu",
        gallery: "Gallery",
        reservation: "Reservations",
        contact: "Contact",
        hero_title: "An Unforgettable Dining Experience",
        hero_subtitle: "Unique flavors from French cuisine with a modern touch",
        book_now: "Book Now",
        view_menu: "View Menu",
        our_story: "Our Story",
        about_title: "Culinary Art with a Modern Touch",
        about_text: "At L'Or Noir, we believe that food is art. Our Michelin-starred chef combines ancient French traditions with modern techniques to deliver an exceptional dining experience. Every dish tells a story, and every ingredient is carefully selected.",
        quality: "World-class Quality",
        fresh: "Fresh Ingredients",
        service: "Premium Service",
        years_exp: "Years of Experience",
        discover: "Discover",
        menu_title: "L'Or Noir Menu",
        all: "All",
        starters: "Starters",
        main_dishes: "Main Courses",
        desserts: "Desserts",
        drinks: "Drinks",
        dish1: "Classic Seafood Salad",
        desc1: "Octopus, calamari, shrimp with lemon sauce and seaweed",
        dish2: "Foie Gras with Figs",
        desc2: "Grilled French foie gras with fig jam and brioche bread",
        dish3: "Wagyu Steak A5",
        desc3: "Japanese A5 Wagyu beef with black pepper sauce and grilled vegetables",
        dish4: "Grilled Atlantic Salmon",
        desc4: "Fresh salmon fillet with cream, dill, and lemon sauce",
        dish5: "Vanilla Crème Brûlée",
        desc5: "Traditional French vanilla cream with crispy caramel layer",
        dish6: "Chocolate Tart",
        desc6: "Belgian 70% chocolate tart with smoked vanilla ice cream",
        moments: "Moments",
        gallery_title: "Photo Gallery",
        book_table: "Book Your Table",
        reservation_title: "Unforgettable Moments Await",
        reservation_text: "Book now and enjoy a luxurious dining experience in an elegant atmosphere. Our team is ready to serve you throughout the week.",
        address: "King Fahd Road, Riyadh",
        name: "Name",
        phone: "Phone Number",
        date: "Date",
        time: "Time",
        guests: "Number of Guests",
        notes: "Special Requests",
        confirm_booking: "Confirm Reservation",
        footer_text: "Your premier destination for fine dining in Riyadh. We offer an exceptional culinary experience that combines authenticity and modernity.",
        quick_links: "Quick Links",
        working_hours: "Working Hours",
        saturday_thursday: "Sat - Thu",
        friday: "Friday",
        newsletter: "Newsletter",
        newsletter_text: "Subscribe for the latest offers and news",
        rights: "All Rights Reserved",
        success_title: "Success!",
        success_message: "Your reservation has been confirmed. We will contact you soon",
        close: "Close"
    }
};

let currentLang = 'ar';

// ===== Loading Screen =====
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('hidden');
    }, 1500);
});

// ===== Navigation Scroll Effect =====
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ===== Language Toggle =====
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.body.classList.toggle('english');
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Update button text
    document.getElementById('lang-text').textContent = currentLang === 'ar' ? 'English' : 'العربية';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

// ===== Menu Filter =====
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    const buttons = document.querySelectorAll('.tab-btn');
    
    // Update active button
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });
    
    // Filter items with animation
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.classList.remove('hidden');
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.classList.add('hidden');
            }, 300);
        }
    });
}

// ===== Form Handling =====
function handleReservation(e) {
    e.preventDefault();
    showModal(translations[currentLang].success_message);
    e.target.reset();
}

function handleSubscribe(e) {
    e.preventDefault();
    showModal(currentLang === 'ar' ? 'تم الاشتراك بنجاح!' : 'Subscribed successfully!');
    e.target.reset();
}

// ===== Modal Functions =====
function showModal(message) {
    const modal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = message;
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('successModal').classList.remove('active');
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('successModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
        }
    });
});

// ===== Scroll Animation =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.menu-item, .gallery-item, .about-content, .reservation-info');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===== Gallery Lightbox (Simple) =====
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${img.src}" alt="${img.alt}">
                <span class="close-lightbox">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Close lightbox
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightbox.querySelector('img')) {
                lightbox.remove();
            }
        });
    });
});

// Add lightbox styles dynamically
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.95);
        z-index: 3000;
        display: flex;
        justify-content: center;
        align-items: center;
        animation: fadeIn 0.3s ease;
    }
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    .lightbox img {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    }
    .close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
        transition: color 0.3s;
    }
    .close-lightbox:hover {
        color: var(--primary-color);
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(lightboxStyles);