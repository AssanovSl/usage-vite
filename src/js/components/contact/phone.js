import intlTelInput from 'intl-tel-input';
import 'intl-tel-input/build/css/intlTelInput.css';

export const usePhone = () => {
  const input = document.querySelector('#phone');

  intlTelInput(input, {
    initialCountry: 'us',
    geoIpLookup: (callback) => {
      fetch('https://ipapi.co/json')
        .then((res) => res.json())
        .then((data) => callback(data.country_code))
        .catch(() => callback('us'));
    },
    strictMode: true,
    utilsScript:
      'https://cdn.jsdelivr.net/npm/intl-tel-input@24.4.0/build/js/utils.js',
  });
};
