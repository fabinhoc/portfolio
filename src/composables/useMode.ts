import { getCssVar, setCssVar, useQuasar } from 'quasar';

export default function useMode() {
  const $q = useQuasar();

  const setDarkMode = () => {
    if ($q.dark.isActive) {
      const primary: string = getCssVar('primary-dark') ?? '';
      const secondary: string = getCssVar('secondary-dark') ?? '';
      const info: string = getCssVar('info-dark') ?? '';
      const accent: string = getCssVar('accent-dark') ?? '';

      setCssVar('primary', primary);
      setCssVar('secondary', secondary);
      setCssVar('info', info);
      setCssVar('accent', accent);
    }
  };

  const setLightMode = () => {
    const primary: string = getCssVar('primary-light') ?? '';
    const secondary: string = getCssVar('secondary-light') ?? '';
    const info: string = getCssVar('info-light') ?? '';
    const accent: string = getCssVar('accent-light') ?? '';

    setCssVar('primary', primary);
    setCssVar('secondary', secondary);
    setCssVar('info', info);
    setCssVar('accent', accent);
  };

  const setMode = () => {
    if ($q.dark.isActive) {
      setDarkMode();
      return;
    }

    setLightMode();
  };

  return {
    setMode,
  };
}
