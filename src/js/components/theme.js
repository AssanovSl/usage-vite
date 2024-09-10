export const useTheme = () => {
  const themeTarget = document.querySelector('[data-theme]');
  const themeSwitcher = document.querySelector('[data-theme-switcher]');

  const themeTargetDataset = themeTarget.dataset;
  const theme = localStorage.getItem('theme') || 'light';

  if (theme == 'dark') {
    themeSwitcher.checked = true;
  }

  themeTargetDataset.theme = theme;
  themeSwitcher.addEventListener('click', () => {
    if (themeTargetDataset.theme == 'light') {
      themeTargetDataset.theme = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      themeTargetDataset.theme = 'light';
      localStorage.setItem('theme', 'light');
    }
  });
};
