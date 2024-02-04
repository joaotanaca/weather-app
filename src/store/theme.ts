import { action, computed, makeObservable, observable } from 'mobx';
import secureLocalStorage from '@/lib/secureLocalStorage';

type ThemeType = 'dark' | 'light';
class Theme {
  theme: ThemeType = 'light';
  constructor() {
    makeObservable(this, {
      theme: observable,
      toogleTheme: action.bound,
      validateTheme: action.bound,
      isDark: computed,
    });
  }

  toogleTheme = () => {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    secureLocalStorage.set('theme', this.theme);
    document.documentElement.classList.toggle('dark');
  };

  /* The `validateTheme` method is responsible for validating and setting the theme based on the
    value stored in the secure local storage. */
  validateTheme = () => {
    this.theme = (secureLocalStorage.get('theme') || 'light') as ThemeType;
    if (this.theme === 'dark') document.documentElement.classList.add('dark');
  };

  get isDark() {
    return this.theme === 'dark';
  }
}

export default new Theme();
