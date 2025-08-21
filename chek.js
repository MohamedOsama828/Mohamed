// ========================
// ✅ تهيئة EmailJS
// ========================
(function(){
  emailjs.init({
    publicKey: "X2t6l5_-plA-u3kMv" // ضع مفتاحك العام هنا
  });
})();

// ========================
// ✅ تعبئة الحقول تلقائيًا إذا كان هناك بيانات محفوظة
// ========================
window.addEventListener('DOMContentLoaded', function() {
  const savedUser = localStorage.getItem('savedUsername');
  const savedPass = localStorage.getItem('savedPassword');

  if(savedUser && savedPass){
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if(usernameInput && passwordInput){
      usernameInput.value = savedUser;
      passwordInput.value = savedPass;
    }
  }
});

// ========================
// ✅ تسجيل الدخول
// ========================
document.getElementById("loginForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  const savedUser = localStorage.getItem('savedUsername');
  const savedPass = localStorage.getItem('savedPassword');

  if((user === "mhamedlaithy" && pass === "MohamedOsama") || (user === savedUser && pass === savedPass)){
    window.location.href = "index2.html";
  } else {
    alert("❌ خطأ في اسم المستخدم أو كلمة المرور");
  }
});

// ========================
// ✅ تسجيل مستخدم جديد (Sign Up)
// ========================
document.getElementById("signupForm")?.addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("username")?.value.trim();
  const password = document.getElementById("password")?.value.trim();

  if(username && password){
    // حفظ البيانات في localStorage
    localStorage.setItem('savedUsername', username);
    localStorage.setItem('savedPassword', password);

    // تحويل المستخدم للصفحة Login
    alert("✅ تم إنشاء الحساب بنجاح! سيتم تحويلك إلى صفحة تسجيل الدخول");
    window.location.href = "login.html";
  } else {
    alert("⚠️ من فضلك أدخل اسم المستخدم وكلمة المرور");
  }
});

// ========================
// ✅ زر الانتقال لصفحة التسجيل من الصفحة الرئيسية
// ========================
const signupButton = document.getElementById("signupButton");
signupButton?.addEventListener("click", function(){
  window.location.href = "register.html"; // توجه لصفحة التسجيل
});

// ========================
// ✅ إظهار صندوق الريسيت
// ========================
function showReset(){
  document.getElementById("resetBox").style.display = "block";
}

// ========================
// ✅ إرسال كلمة المرور على الإيميل
// ========================
function resetPassword(){
  const user = document.getElementById("resetUser").value.trim();
  const email = document.getElementById("resetEmail").value.trim();

  if(user === "" || email === ""){
    alert("⚠️ من فضلك ادخل البيانات كاملة");
    return;
  }

  // الحصول على كلمة المرور المناسبة
  const savedUser = localStorage.getItem('savedUsername');
  const savedPass = localStorage.getItem('savedPassword');
  let passwordToSend = "";

  if(user === "mhamedlaithy"){
    passwordToSend = "MohamedOsama"; // الحساب الثابت
  } else if(user === savedUser){
    passwordToSend = savedPass; // الحساب المخزن من Sign Up
  } else {
    alert("❌ اسم المستخدم غير موجود");
    return;
  }

  emailjs.send("service_jga7ox3","template_iw3fsnt",{
      username: user,
      email: email,
      message: `كلمة المرور الخاصة بك هي: ${passwordToSend}`
  })
  .then(function() {
     alert("✅ تم إرسال كلمة المرور إلى بريدك الإلكتروني");
  }, function(error) {
     alert("❌ حدث خطأ: " + JSON.stringify(error));
  });
}
// ========================
// ✅ إظهار/إخفاء كلمة المرور عند الضغط على الأيقونة
// ========================
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("togglePassword");

  if (toggleIcon && passwordInput) {
    toggleIcon.addEventListener("click", function () {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
      this.classList.toggle("fa-eye");
      this.classList.toggle("fa-eye-slash");
    });
  }
});
