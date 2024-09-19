export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"');
  const pricePeriod = document.querySelectorAll('[data-price="period"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const priceList = {
    starter: {
      default: '$1500',
      withSale: '$100',
    },
    popular: {
      default: '$21000',
      withSale: '$1400',
    },
    enterprise: {
      default: '$31500',
      withSale: '$2100',
    },
  };

  const priceView = {
    default: '/yr',
    withSale: '/mo',
  };

  console.log(pricePeriod);

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;

    pricePeriod.forEach((item) => {
      item.textContent = priceView.withSale;
      item.style.fontWeight = 500;
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;

    pricePeriod.forEach((item) => {
      item.textContent = priceView.default;
      item.style.fontWeight = 600;
    });
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
