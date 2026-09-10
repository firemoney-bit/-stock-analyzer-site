const APP_URL = "https://firemoney-bit-stock-analyzer-app-8zaeie.streamlit.app/";

function track(name, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

function openAnalysis(code) {
  const cleaned = String(code || "").trim();
  if (!/^\d{4}$/.test(cleaned)) {
    alert("4桁の銘柄コードを入力してください。");
    return;
  }
  track("stock_search", { stock_code: cleaned });
  window.location.href = APP_URL + "?code=" + encodeURIComponent(cleaned);
}

document.getElementById("stockSearch").addEventListener("submit", function(e) {
  e.preventDefault();
  openAnalysis(document.getElementById("stockCode").value);
});

document.querySelectorAll("[data-code]").forEach(btn => {
  btn.addEventListener("click", () => openAnalysis(btn.dataset.code));
});

document.querySelectorAll(".track-link").forEach(link => {
  link.addEventListener("click", () => track(link.dataset.event || "link_click"));
});
