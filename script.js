const APP_URL = "https://firemoney-bit-stock-analyzer-app-8zaeie.streamlit.app/";

function openAnalysis(code) {
  const cleaned = String(code || "").trim();
  if (!/^\d{4}$/.test(cleaned)) {
    alert("4桁の銘柄コードを入力してください。");
    return;
  }
  window.location.href = APP_URL + "?code=" + encodeURIComponent(cleaned);
}

document.getElementById("stockSearch").addEventListener("submit", function(e) {
  e.preventDefault();
  openAnalysis(document.getElementById("stockCode").value);
});

document.querySelectorAll("[data-code]").forEach(btn => {
  btn.addEventListener("click", () => openAnalysis(btn.dataset.code));
});
