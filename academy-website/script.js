// ✅ زر الرجوع للأعلى
window.onscroll = function () {
    document.getElementById("topBtn").style.display = (window.scrollY > 200) ? "block" : "none";
};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ✅ اختبار تفاعلي
function checkAnswer(button, correct) {
    let feedback = button.nextElementSibling;
    feedback.textContent = correct ? "✅ إجابة صحيحة!" : "❌ إجابة خاطئة!";
    feedback.style.color = correct ? "green" : "red";
}