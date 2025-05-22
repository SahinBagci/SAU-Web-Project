const { createApp } = Vue;

createApp({
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      message: '',
      city: '',
      gender: ''
    };
  },
  methods: {
    isEmailValid(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    sendForm() {
      if (!this.name.trim()) {
        alert('Lütfen isminizi giriniz.');
        return;
      }
      if (!this.surname.trim()) {
        alert('Lütfen soyisminizi giriniz.');
        return;
      }
      if (!this.email.trim()) {
        alert('Lütfen e-posta adresinizi giriniz.');
        return;
      }
      if (!this.isEmailValid(this.email)) {
        alert('Lütfen geçerli bir e-posta adresi giriniz.');
        return;
      }

      // URL parametreleri olarak form verilerini oluştur
      const params = new URLSearchParams({
        name: this.name,
        surname: this.surname,
        email: this.email,
        message: this.message,
        city: this.city,
        gender: this.gender
      }).toString();

      // formSonuc.html sayfasına yönlendir
      window.location.href = 'formsonuc.html?' + params;
    }
  }
}).mount('#app');
