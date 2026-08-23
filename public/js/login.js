/* eslint-disable */
console.log('0. login.js file loaded successfully!');

const login = async (email, password) => {
  console.log('2. Login function called with:', email, password);
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log('3. Success:', res);
  } catch (err) {
    console.log('3. Error caught!');
    // This safety check prevents the catch block from crashing if it's a network error
    if (err.response) {
      console.log('Backend message:', err.response.data.message);
    } else {
      console.log('Raw error:', err);
    }
  }
};

const loginForm = document.querySelector('.form');
console.log('0. Form element found?', loginForm);

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('1. Form submit event fired!');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    login(email, password);
  });
}
