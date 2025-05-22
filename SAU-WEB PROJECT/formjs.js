document.addEventListener("DOMContentLoaded", function () {
  const jsButton = document.querySelector(".btn-success");

  jsButton.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const city = document.getElementById("city").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const isChecked = document.getElementById("agreement").checked;

    // Doğrulama
    if (!name || !surname || !email || !message || !city || !gender || !isChecked) {
      alert("Lütfen tüm alanları eksiksiz doldurun ve onay kutusunu işaretleyin.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Geçerli bir e-posta adresi girin.");
      return;
    }

    const params = new URLSearchParams({
      name,
      surname,
      email,
      message,
      city,
      gender: gender.value
    });

    window.location.href = `formSonuc.html?${params.toString()}`;
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  const btnJS = document.querySelector('button.btn-success'); 

  btnJS.addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const surname = document.getElementById('surname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const city = document.getElementById('city').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Boş alan kontrolleri
    if (!name) {
      alert('Lütfen isminizi giriniz.');
      return;
    }
    if (!surname) {
      alert('Lütfen soyisminizi giriniz.');
      return;
    }
    if (!email) {
      alert('Lütfen e-posta adresinizi giriniz.');
      return;
    }
    if (!isEmailValid(email)) {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
      return;
    }

    const genderValue = gender ? gender.value : '';

    const params = new URLSearchParams({
      name: name,
      surname: surname,
      email: email,
      message: message,
      city: city,
      gender: genderValue,
    }).toString();

    window.location.href = 'formSonuc.html?' + params;
  });

  function isEmailValid(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function isPhoneValid(phone) {
    return /^\d*$/.test(phone);
  }
});
