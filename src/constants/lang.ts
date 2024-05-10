export type LanguageId = 'en' | 'de' | 'fr' | 'ja' | 'zh';

export const LANGUAGES = {
  en: {
    flagUrl: 'images/flags/gb.svg',
    code: 'en',
  },
  de: {
    flagUrl: 'images/flags/de.svg',
    code: 'de',
  },
  fr: {
    flagUrl: 'images/flags/fr.svg',
    code: 'fr',
  },
  ja: {
    flagUrl: 'images/flags/jp.svg',
    code: 'ja',
  },
  zh: {
    flagUrl: 'images/flags/cn.svg',
    code: 'zh',
  },
} as const satisfies {
  [langId in LanguageId]: {
    flagUrl: string;
    code: LanguageId;
  }
};

export const TRANSLATIONS = {
  'en': {
    'title': "Who's That Pokémon?",
    'dontknow': "I don't know!",
    'generation': 'Generation',
    'difficulty': 'Difficulty',
    'difficulty-0': 'Normal',
    'difficulty-1': 'Ultra',
    'difficulty-2': 'Master',
    'difficulty-3': 'Elite',
    'difficulty-4': 'Easy',
    'spelling': 'Spelling',
    'spelling-exact': 'Exact',
    'spelling-forgiving': 'Forgiving',
    'sound': 'Sound',
    'on': 'On',
    'off': 'Off',
    'streak': 'Streak',
    'time': 'Time',
    'best': 'Best',
    'current': 'Current',
    'previous': 'Previous',
    'average': 'Average',
    'alsoknownas': 'Also Known As',
    'nextpokemon': 'Next Pokémon in _TIME_ seconds (press Enter to skip)',
    'loadfail': 'This is taking a while to load. Do you want to try loading another one? It won\'t affect your streak. <a href="#" id="loadNewPokemonCta">Load a new Pokémon?</a>',
    'slowconn': 'Is your connection slow or down? Maybe try a harder difficulty, they load faster.',
    'loadnew': 'Load a new Pokémon?',
    'streak-info': 'Note: Your streaks and times are separate for each difficulty',
    'settings-effect': 'Your new settings will take effect for the next Pokémon',
    'genfinished': "There are no Pokémon left! Why not try a different generation or difficulty? Or you can start again with the same settings. Note that Gen 8 and 9 don't support Ultra and Master difficulties as these games don't have sprites.",
    'startAgain': 'Start again',
    'infobox': 'NEW: Teal Mask support added! Since Gen 8, Pokémon do not have sprites available, so only Easy, Normal and Elite modes are supported. If you find any issues, let me know on GitHub!',
    'footer': 'Send feedback or contribute at <a href="https://github.com/menardi/whosthatpokemon" title="Who\'s That Pokémon on Github">GitHub</a>.<br />Images and sounds contributed by <a href="https://github.com/sora10pls">sora10pls</a>. Images and sounds &copy; Nintendo. ',
    'language': 'Language',
    'settings': 'Settings',
    'stats': 'Stats',
    'eliteNeedsAudio': 'You must set Sound to On to play in Elite mode',
  },
  'fr': {
    'title': 'Quel est ce Pokémon?',
    'dontknow': 'Je ne sais pas!',
    'generation': 'Génération',
    'difficulty': 'Difficulté',
    'difficulty-0': 'Normale',
    'difficulty-1': 'Hyper',
    'difficulty-2': 'Master',
    'difficulty-3': 'Élite',
    'difficulty-4': 'Facile',
    'spelling': 'Orthographe',
    'spelling-exact': 'Exacte',
    'spelling-forgiving': 'Tolérant',
    'sound': 'Son',
    'on': 'Oui',
    'off': 'Non',
    'streak': 'Consécutif',
    'time': 'Chronomètre',
    'best': 'Meilleur',
    'current': 'Actuel',
    'previous': 'Précédent',
    'average': 'Moyenne',
    'alsoknownas': 'Aussi connu sous le nom de',
    'nextpokemon': 'Pokémon suivante dans _TIME_ secondes (ou Entrée pour sauter)',
    'loadfail': 'C\'est lent à charger. <a href="#" id="loadNewPokemonCta">Essayez un autre?</a>',
    'slowconn': 'Connexion lente?',
    'loadnew': 'Charger un nouveau Pokémon?',
    'streak-info': 'Vos records sont distincts pour chaque difficulté',
    'settings-effect': 'Vos nouveaux paramètres prendront effet pour la prochaine Pokémon',
    'genfinished': "Il n'y a plus de Pokémon ! Essayez une génération ou une difficulté différente. Les Gen 8 et 9 ne prennent pas en charge les difficultés Hyper et Master car ces jeux n'ont pas de sprites.",
    'startAgain': 'Start again',
    'infobox': 'NEW: Teal Mask support added! Since Gen 8, Pokémon do not have sprites available, so only Easy, Normal and Elite modes are supported. If you find any issues, let me know on GitHub!',
    'footer': 'Contribuez à <a href="https://github.com/Menardi/whosthatpokemon" title="Who\'s That Pokémon à Github">Github</a>.<br />Les images et les sons contribué par <a href="https://github.com/sora10pls">sora10pls</a>. Les images et les sons &copy; Nintendo.',
    'language': 'Langue',
    'settings': 'Options',
    'stats': 'Stats',
    'eliteNeedsAudio': 'You must set Sound to On to play in Elite mode',
  },
  'de': {
    'title': 'Wer ist das Pokémon?',
    'dontknow': 'Ich weiß nicht',
    'generation': 'Generation',
    'difficulty': 'Schwierigkeit',
    'difficulty-0': 'Normale',
    'difficulty-1': 'Hyper',
    'difficulty-2': 'Meister',
    'difficulty-3': 'Elite',
    'difficulty-4': 'Einfach',
    'spelling': 'Rechtschreibung',
    'spelling-exact': 'Exakt',
    'spelling-forgiving': 'Tolerant',
    'sound': 'Ton',
    'on': 'Ja',
    'off': 'Nein',
    'streak': 'Konsekutiv',
    'time': 'Zeit',
    'best': 'Beste',
    'current': 'Aktuell',
    'previous': 'Früher',
    'average': 'Durchschnitt',
    'alsoknownas': 'Also Known As',
    'nextpokemon': 'Weiter Pokémon in _TIME_ Sekunden (oder Enter zum Überspringen)',
    'loadfail': 'Dies ist nur langsam geladen. <a href="#" id="loadNewPokemonCta">Versuchen Sie ein anderes</a>?',
    'slowconn': 'Langsame Verbindung?',
    'loadnew': 'Legen Sie eine neue Pokémon?',
    'streak-info': 'Ihre Aufzeichnungen sind für jeden Schwierigkeitsgrad separaten',
    'settings-effect': 'Ihre neuen Einstellungen werden für die nächste Pokémon nehmen',
    'genfinished': 'Es gibt keine Pokémon mehr! Versuchen Sie es mit einer anderen Generation oder Schwierigkeit. Gen 8 und 9 unterstützen keine Hyper- und Meister-Schwierigkeiten, da diese Spiele keine Sprites haben.',
    'startAgain': 'Start again',
    'infobox': 'NEW: Teal Mask support added! Since Gen 8, Pokémon do not have sprites available, so only Easy, Normal and Elite modes are supported. If you find any issues, let me know on GitHub!',
    'footer': 'Beitragen bei <a href="https://github.com/Menardi/whosthatpokemon" title="Who\'s That Pokémon à Github">Github</a>.<br />Bilder und Töne beigetragen von <a href="https://github.com/sora10pls">sora10pls</a>. Bilder und Töne &copy; Nintendo.',
    'language': 'Sprache',
    'settings': 'Options',
    'stats': 'Statistik',
    'eliteNeedsAudio': 'You must set Sound to On to play in Elite mode',
  },
  'ja': {
    'title': 'だれだ？',
    'dontknow': 'わかりません',
    'generation': '世代',
    'difficulty': '難度',
    'difficulty-0': '普通',
    'difficulty-1': 'ハイパー',
    'difficulty-2': 'マスター',
    'difficulty-3': '天王',
    'difficulty-4': '簡単',
    'spelling': 'スペリング',
    'spelling-exact': '正確',
    'spelling-forgiving': '甘い',
    'sound': 'サウンド',
    'on': 'オン',
    'off': 'オフ',
    'streak': '連勝',
    'time': '時間',
    'best': 'ベスト',
    'current': '現在',
    'previous': '前回',
    'average': '平均',
    'alsoknownas': '他の言語での名前',
    'nextpokemon': '_TIME_秒で次のポケモンが登場します(リターンキーを押してスキップします)',
    'loadfail': '通信エラーが発生したため、新しいポケモンをロードするために、<a href="#" id="loadNewPokemonCta">ここにクリックしてください。</a>連勝が影響を受けません。',
    'slowconn': '接続が遅い可能性があります。ロード時間を改善するために、他の難度をご選択ください。',
    'loadnew': '新たなポケモンをロードしますか？',
    'streak-info': '各難度で連勝や時間が違います。',
    'settings-effect': 'この後で新しい設定が有効になります。',
    'genfinished': 'ポケモンが残っていません！ 別の世代または難易度を試してください。 第8世代か第9世代は、これらのゲームにはスプライトがないため、ハイパー および マスター の難易度をサポートしていません。',
    'startAgain': 'Start again',
    'infobox': 'NEW: Teal Mask support added! Since Gen 8, Pokémon do not have sprites available, so only Easy, Normal and Elite modes are supported. If you find any issues, let me know on GitHub!',
    'footer': 'フィードバック：<a href="https://github.com/Menardi/whosthatpokemon">GitHub</a>。<br /><a href="https://github.com/sora10pls">sora10pls</a>が収集した画像と音声。画像と音声 &copy; Nintendo.',
    'language': 'ランゲージ',
    'settings': 'オプション',
    'stats': 'レコード',
    'eliteNeedsAudio': 'You must set Sound to On to play in Elite mode',
  },
  'zh': {
    'title': '我是谁？',
    'dontknow': '我不知道！',
    'generation': '世代',
    'difficulty': '难度',
    'difficulty-0': '普通',
    'difficulty-1': '超级',
    'difficulty-2': '大师',
    'difficulty-3': '精英',
    'difficulty-4': '简单',
    'spelling': '拼写',
    'spelling-exact': '准确',
    'spelling-forgiving': '模糊',
    'sound': '声音',
    'on': '开',
    'off': '关',
    'streak': '连胜',
    'time': '时间',
    'best': '最佳',
    'current': '当前',
    'previous': '之前',
    'average': '平均',
    'alsoknownas': '也被称作',
    'nextpokemon': '下一只宝可梦将在 _TIME_ 秒后出现 (按回车键跳过)',
    'loadfail': '加载时间较长。是否要加载其他的宝可梦？这将不会影响连胜数。<a href="#" id="loadNewPokemonCta">加载一个新的宝可梦！</a>',
    'slowconn': '网络连接似乎有些慢。你可以尝试更高的难度，可以提高加载速度。',
    'loadnew': '加载一个新的宝可梦！',
    'streak-info': '每个难度的连胜次数和时间都是分开的',
    'settings-effect': '新设置将对下一只宝可梦生效',
    'genfinished': '没有宝可梦了！ 尝试不同的世代或难度。 第八世代 和 第九世代 不支持 超级 和 大师 难度，因为这些游戏没有精灵。',
    'startAgain': 'Start again',
    'infobox': 'NEW: Teal Mask support added! Since Gen 8, Pokémon do not have sprites available, so only Easy, Normal and Elite modes are supported. If you find any issues, let me know on GitHub!',
    'footer': '请在 <a href="https://github.com/menardi/whosthatpokemon" title="Who\'s That Pokémon on Github">GitHub</a> 上提交反馈或贡献。<br />图像和音频由 <a href="https://github.com/sora10pls">sora10pls</a> 提供。图像和音频 &copy; Nintendo。',
    'language': '语言',
    'settings': '设置',
    'stats': '状态',
    'eliteNeedsAudio': 'You must set Sound to On to play in Elite mode',
  },
} as const satisfies {
  [langId in LanguageId]: {
    [key in string]: string;
  }
};

export type TranslationKey = keyof typeof TRANSLATIONS['en'];
