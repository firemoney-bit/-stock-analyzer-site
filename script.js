const APP_URL = "https://firemoney-bit-stock-analyzer-app-8zaeie.streamlit.app/";

function trackEvent(name, params = {}) {
  if (typeof window.gtag === "function") window.gtag("event", name, params);
}

function openAnalysis(code) {
  const cleaned = String(code || "").trim();
  if (!/^\d{4}$/.test(cleaned)) {
    alert("4桁の銘柄コードを入力してください。");
    return;
  }
  trackEvent("stock_search", { stock_code: cleaned });
  window.location.href = APP_URL + "?code=" + encodeURIComponent(cleaned);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#stock-search-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      openAnalysis(document.querySelector("#stock-code").value);
    });
  }
  document.querySelectorAll(".quick-code").forEach((button) => {
    button.addEventListener("click", () => openAnalysis(button.dataset.code));
  });
  document.querySelectorAll(".track-link").forEach((link) => {
    link.addEventListener("click", () => {
      trackEvent("cta_click", { label: link.dataset.label || link.textContent.trim() });
    });
  });
});
