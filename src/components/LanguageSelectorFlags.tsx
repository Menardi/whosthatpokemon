import { LANGUAGES } from '../constants/lang';
import { useAppDispatch } from '../store';
import { setLanguage } from '../store/settingsSlice';
import { useSettings } from '../util/hooks';

const LanguageSelectorFlags = () => {
  const dispatch = useAppDispatch();
  const settings = useSettings();

  return (
    <ul className="language-selector-flags">
      {Object.values(LANGUAGES).map((lang) => (
        <li key={lang.code}>
          <button
            className={settings.language === lang.code ? 'selected' : ''}
            onClick={() => dispatch(setLanguage(lang.code))}
          >
            <img src={lang.flagUrl} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LanguageSelectorFlags;
