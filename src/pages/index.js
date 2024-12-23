import { useTranslation } from '@/contexts/locale';

export default function Home() {
  const { lang, translate, changeLanguage } = useTranslation();

  return (
    <div>
      <h1>{translate(lang, 'welcome')}</h1>
      <p>{translate(lang, 'hello', { name: 'John' })}</p>

      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
}
