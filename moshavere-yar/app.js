
const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// منوی موبایل
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// جست‌وجوی خدمات
const searchInput = document.getElementById("serviceSearch");
const searchBtn = document.getElementById("searchBtn");
const serviceCards = document.querySelectorAll(".service-card");
const emptySearch = document.getElementById("emptySearch");

function searchServices() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  serviceCards.forEach(card => {
    const content = (
      card.innerText + " " + card.dataset.search
    ).toLowerCase();

    const matched = content.includes(query);
    card.style.display = matched ? "" : "none";

    if (matched) visibleCount++;
  });

  emptySearch.hidden = visibleCount !== 0;
}

searchBtn.addEventListener("click", searchServices);

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchServices();
  }
});

searchInput.addEventListener("input", () => {
  if (!searchInput.value.trim()) {
    serviceCards.forEach(card => card.style.display = "");
    emptySearch.hidden = true;
  }
});

// انتخاب خدمت مشاوره
document.querySelectorAll(".service-link").forEach(button => {
  button.addEventListener("click", () => {
    const service = button.dataset.service;

    showToast(
      `خدمت مشاوره ${service} انتخاب شد. در مرحله بعد نوع ارتباط را انتخاب می‌کنید.`
    );

    document.querySelector(".consult-types").scrollIntoView({
      behavior: "smooth"
    });
  });
});

// انتخاب روش ارتباط
document.querySelectorAll(".type-btn").forEach(button => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;

    showToast(
      `مشاوره ${type} انتخاب شد. مرحله ثبت سفارش در بخش بعدی ساخته می‌شود.`
    );
  });
});

// پروفایل نمونه مشاوران
document.querySelectorAll(".expert-btn").forEach(button => {
  button.addEventListener("click", () => {
    const expert = button.dataset.expert;
    showToast(`پروفایل ${expert} در نسخه بعدی تکمیل می‌شود.`);
  });
});

// ورود و ثبت نام
document.getElementById("loginBtn").addEventListener("click", () => {
  showToast("صفحه ورود و ثبت‌نام در مرحله بعد طراحی می‌شود.");
});

// درخواست پرونده VIP
document.getElementById("vipBtn").addEventListener("click", () => {
  showToast("فرم اختصاصی پرونده VIP در مرحله بعد ساخته می‌شود.");
});
