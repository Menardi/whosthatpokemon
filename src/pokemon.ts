/*
 * names.js
 *
 * Contains all Pokemon names in multiple languages. Also includes functionality
 * to remove accents from non-English Pokemon names for easier comparison.
 */

const ACCENT_MAP = {
  'â':'a',
  'ä':'a',
  'ß':'s',
  'Ü':'u',
  'ü':'u',
  'Ï':'i',
  'ï':'i',
  'Ê':'e',
  'ê':'e',
  'é':'e',
  'È':'e',
  'è':'e',
  'ô':'o',
  'Ô':'O',
  'ç':'c',
  'Ç':'C'
} as const;

// Based on https://github.com/aristus/accent-folding/blob/master/accent-fold.js

export const removeAccents = (s: string) => {
  if (!s) { return ''; }
  let ret = '';
  for (let i=0; i<s.length; i++) {
    // @ts-ignore
    ret += ACCENT_MAP[s.charAt(i)] || s.charAt(i);
  }
  return ret;
}

export const POKEMON_NAMES = [{
  names: {
    de: "bisasam",
    en: "bulbasaur",
    fr: "bulbizarre",
    ja: "フシギダネ",
    zh: "妙蛙种子",
  },
  number: 1,
},{
  names: {
    de: "bisaknosp",
    en: "ivysaur",
    fr: "herbizarre",
    ja: "フシギソウ",
    zh: "妙蛙草",
  },
  number: 2,
},{
  names: {
    de: "bisaflor",
    en: "venusaur",
    fr: "florizarre",
    ja: "フシギバナ",
    zh: "妙蛙花",
  },
  number: 3,
},{
  names: {
    de: "glumanda",
    en: "charmander",
    fr: "salamèche",
    ja: "ヒトカゲ",
    zh: "小火龙",
  },
  number: 4,
},{
  names: {
    de: "glutexo",
    en: "charmeleon",
    fr: "reptincel",
    ja: "リザード",
    zh: "火恐龙",
  },
  number: 5,
},{
  names: {
    de: "glurak",
    en: "charizard",
    fr: "dracaufeu",
    ja: "リザードン",
    zh: "喷火龙",
  },
  number: 6,
},{
  names: {
    de: "schiggy",
    en: "squirtle",
    fr: "carapuce",
    ja: "ゼニガメ",
    zh: "杰尼龟",
  },
  number: 7,
},{
  names: {
    de: "schillok",
    en: "wartortle",
    fr: "carabaffe",
    ja: "カメール",
    zh: "卡咪龟",
  },
  number: 8,
},{
  names: {
    de: "turtok",
    en: "blastoise",
    fr: "tortank",
    ja: "カメックス",
    zh: "水箭龟",
  },
  number: 9,
},{
  names: {
    de: "raupy",
    en: "caterpie",
    fr: "chenipan",
    ja: "キャタピー",
    zh: "绿毛虫",
  },
  number: 10,
},{
  names: {
    de: "safcon",
    en: "metapod",
    fr: "chrysacier",
    ja: "トランセル",
    zh: "铁甲蛹",
  },
  number: 11,
},{
  names: {
    de: "smettbo",
    en: "butterfree",
    fr: "papilusion",
    ja: "バタフリー",
    zh: "巴大蝶",
  },
  number: 12,
},{
  names: {
    de: "hornliu",
    en: "weedle",
    fr: "aspicot",
    ja: "ビードル",
    zh: "独角虫",
  },
  number: 13,
},{
  names: {
    de: "kokuna",
    en: "kakuna",
    fr: "coconfort",
    ja: "コクーン",
    zh: "铁壳蛹",
  },
  number: 14,
},{
  names: {
    de: "bibor",
    en: "beedrill",
    fr: "dardargnan",
    ja: "スピアー",
    zh: "大针蜂",
  },
  number: 15,
},{
  names: {
    de: "taubsi",
    en: "pidgey",
    fr: "roucool",
    ja: "ポッポ",
    zh: "波波",
  },
  number: 16,
},{
  names: {
    de: "tauboga",
    en: "pidgeotto",
    fr: "roucoups",
    ja: "ピジョン",
    zh: "比比鸟",
  },
  number: 17,
},{
  names: {
    de: "tauboss",
    en: "pidgeot",
    fr: "roucarnage",
    ja: "ピジョット",
    zh: "大比鸟",
  },
  number: 18,
},{
  names: {
    de: "rattfratz",
    en: "rattata",
    fr: "rattata",
    ja: "コラッタ",
    zh: "小拉达",
  },
  number: 19,
},{
  names: {
    de: "rattikarl",
    en: "raticate",
    fr: "rattatac",
    ja: "ラッタ",
    zh: "拉达",
  },
  number: 20,
},{
  names: {
    de: "habitak",
    en: "spearow",
    fr: "piafabec",
    ja: "オニスズメ",
    zh: "烈雀",
  },
  number: 21,
},{
  names: {
    de: "ibitak",
    en: "fearow",
    fr: "rapasdepic",
    ja: "オニドリル",
    zh: "大嘴雀",
  },
  number: 22,
},{
  names: {
    de: "rettan",
    en: "ekans",
    fr: "abo",
    ja: "アーボ",
    zh: "阿柏蛇",
  },
  number: 23,
},{
  names: {
    de: "arbok",
    en: "arbok",
    fr: "arbok",
    ja: "アーボック",
    zh: "阿柏怪",
  },
  number: 24,
},{
  names: {
    de: "pikachu",
    en: "pikachu",
    fr: "pikachu",
    ja: "ピカチュウ",
    zh: "皮卡丘",
  },
  number: 25,
},{
  names: {
    de: "raichu",
    en: "raichu",
    fr: "raichu",
    ja: "ライチュウ",
    zh: "雷丘",
  },
  number: 26,
},{
  names: {
    de: "sandan",
    en: "sandshrew",
    fr: "sabelette",
    ja: "サンド",
    zh: "穿山鼠",
  },
  number: 27,
},{
  names: {
    de: "sandamer",
    en: "sandslash",
    fr: "sablaireau",
    ja: "サンドパン",
    zh: "穿山王",
  },
  number: 28,
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン",
    zh: "尼多兰",
  },
  number: 29,
},{
  names: {
    de: "nidorina",
    en: "nidorina",
    fr: "nidorina",
    ja: "ニドリーナ",
    zh: "尼多娜",
  },
  number: 30,
},{
  names: {
    de: "nidoqueen",
    en: "nidoqueen",
    fr: "nidoqueen",
    ja: "ニドクイン",
    zh: "尼多后",
  },
  number: 31,
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン",
    zh: "尼多朗",
  },
  number: 32,
},{
  names: {
    de: "nidorino",
    en: "nidorino",
    fr: "nidorino",
    ja: "ニドリーノ",
    zh: "尼多力诺",
  },
  number: 33,
},{
  names: {
    de: "nidoking",
    en: "nidoking",
    fr: "nidoking",
    ja: "ニドキング",
    zh: "尼多王",
  },
  number: 34,
},{
  names: {
    de: "piepi",
    en: "clefairy",
    fr: "mélofée",
    ja: "ピッピ",
    zh: "皮皮",
  },
  number: 35,
},{
  names: {
    de: "pixi",
    en: "clefable",
    fr: "mélodelfe",
    ja: "ピクシー",
    zh: "皮可西",
  },
  number: 36,
},{
  names: {
    de: "vulpix",
    en: "vulpix",
    fr: "goupix",
    ja: "ロコン",
    zh: "六尾",
  },
  number: 37,
},{
  names: {
    de: "vulnona",
    en: "ninetales",
    fr: "feunard",
    ja: "キュウコン",
    zh: "九尾",
  },
  number: 38,
},{
  names: {
    de: "pummeluff",
    en: "jigglypuff",
    fr: "rondoudou",
    ja: "プリン",
    zh: "胖丁",
  },
  number: 39,
},{
  names: {
    de: "knuddeluff",
    en: "wigglytuff",
    fr: "grodoudou",
    ja: "プクリン",
    zh: "胖可丁",
  },
  number: 40,
},{
  names: {
    de: "zubat",
    en: "zubat",
    fr: "nosferapti",
    ja: "ズバット",
    zh: "超音蝠",
  },
  number: 41,
},{
  names: {
    de: "golbat",
    en: "golbat",
    fr: "nosferalto",
    ja: "ゴルバット",
    zh: "大嘴蝠",
  },
  number: 42,
},{
  names: {
    de: "myrapla",
    en: "oddish",
    fr: "mystherbe",
    ja: "ナゾノクサ",
    zh: "走路草",
  },
  number: 43,
},{
  names: {
    de: "duflor",
    en: "gloom",
    fr: "ortide",
    ja: "クサイハナ",
    zh: "臭臭花",
  },
  number: 44,
},{
  names: {
    de: "giflor",
    en: "vileplume",
    fr: "rafflesia",
    ja: "ラフレシア",
    zh: "霸王花",
  },
  number: 45,
},{
  names: {
    de: "paras",
    en: "paras",
    fr: "paras",
    ja: "パラス",
    zh: "派拉斯",
  },
  number: 46,
},{
  names: {
    de: "parasek",
    en: "parasect",
    fr: "parasect",
    ja: "パラセクト",
    zh: "派拉斯特",
  },
  number: 47,
},{
  names: {
    de: "bluzuk",
    en: "venonat",
    fr: "mimitoss",
    ja: "コンパン",
    zh: "毛球",
  },
  number: 48,
},{
  names: {
    de: "omot",
    en: "venomoth",
    fr: "aéromite",
    ja: "モルフォン",
    zh: "摩鲁蛾",
  },
  number: 49,
},{
  names: {
    de: "digda",
    en: "diglett",
    fr: "taupiqueur",
    ja: "ディグダ",
    zh: "地鼠",
  },
  number: 50,
},{
  names: {
    de: "digdri",
    en: "dugtrio",
    fr: "triopikeur",
    ja: "ダグトリオ",
    zh: "三地鼠",
  },
  number: 51,
},{
  names: {
    de: "mauzi",
    en: "meowth",
    fr: "miaouss",
    ja: "ニャース",
    zh: "喵喵",
  },
  number: 52,
},{
  names: {
    de: "snobilikat",
    en: "persian",
    fr: "persian",
    ja: "ペルシアン",
    zh: "猫老大",
  },
  number: 53,
},{
  names: {
    de: "enton",
    en: "psyduck",
    fr: "psykokwak",
    ja: "コダック",
    zh: "可达鸭",
  },
  number: 54,
},{
  names: {
    de: "entoron",
    en: "golduck",
    fr: "akwakwak",
    ja: "ゴルダック",
    zh: "哥达鸭",
  },
  number: 55,
},{
  names: {
    de: "menki",
    en: "mankey",
    fr: "férosinge",
    ja: "マンキー",
    zh: "猴怪",
  },
  number: 56,
},{
  names: {
    de: "rasaff",
    en: "primeape",
    fr: "colossinge",
    ja: "オコリザル",
    zh: "火暴猴",
  },
  number: 57,
},{
  names: {
    de: "fukano",
    en: "growlithe",
    fr: "caninos",
    ja: "ガーディ",
    zh: "卡蒂狗",
  },
  number: 58,
},{
  names: {
    de: "arkani",
    en: "arcanine",
    fr: "arcanin",
    ja: "ウインディ",
    zh: "风速狗",
  },
  number: 59,
},{
  names: {
    de: "quapsel",
    en: "poliwag",
    fr: "ptitard",
    ja: "ニョロモ",
    zh: "蚊香蝌蚪",
  },
  number: 60,
},{
  names: {
    de: "quaputzi",
    en: "poliwhirl",
    fr: "têtarte",
    ja: "ニョロゾ",
    zh: "蚊香君",
  },
  number: 61,
},{
  names: {
    de: "quappo",
    en: "poliwrath",
    fr: "tartard",
    ja: "ニョロボン",
    zh: "蚊香泳士",
  },
  number: 62,
},{
  names: {
    de: "abra",
    en: "abra",
    fr: "abra",
    ja: "ケーシィ",
    zh: "凯西",
  },
  number: 63,
},{
  names: {
    de: "kadabra",
    en: "kadabra",
    fr: "kadabra",
    ja: "ユンゲラー",
    zh: "勇基拉",
  },
  number: 64,
},{
  names: {
    de: "simsala",
    en: "alakazam",
    fr: "alakazam",
    ja: "フーディン",
    zh: "胡地",
  },
  number: 65,
},{
  names: {
    de: "machollo",
    en: "machop",
    fr: "machoc",
    ja: "ワンリキー",
    zh: "腕力",
  },
  number: 66,
},{
  names: {
    de: "maschock",
    en: "machoke",
    fr: "machopeur",
    ja: "ゴーリキー",
    zh: "豪力",
  },
  number: 67,
},{
  names: {
    de: "machomei",
    en: "machamp",
    fr: "mackogneur",
    ja: "カイリキー",
    zh: "怪力",
  },
  number: 68,
},{
  names: {
    de: "knofensa",
    en: "bellsprout",
    fr: "chétiflor",
    ja: "マダツボミ",
    zh: "喇叭芽",
  },
  number: 69,
},{
  names: {
    de: "ultrigaria",
    en: "weepinbell",
    fr: "boustiflor",
    ja: "ウツドン",
    zh: "口呆花",
  },
  number: 70,
},{
  names: {
    de: "sarzenia",
    en: "victreebel",
    fr: "empiflor",
    ja: "ウツボット",
    zh: "大食花",
  },
  number: 71,
},{
  names: {
    de: "tentacha",
    en: "tentacool",
    fr: "tentacool",
    ja: "メノクラゲ",
    zh: "玛瑙水母",
  },
  number: 72,
},{
  names: {
    de: "tentoxa",
    en: "tentacruel",
    fr: "tentacruel",
    ja: "ドククラゲ",
    zh: "毒刺水母",
  },
  number: 73,
},{
  names: {
    de: "kleinstein",
    en: "geodude",
    fr: "racaillou",
    ja: "イシツブテ",
    zh: "小拳石",
  },
  number: 74,
},{
  names: {
    de: "georok",
    en: "graveler",
    fr: "gravalanch",
    ja: "ゴローン",
    zh: "隆隆石",
  },
  number: 75,
},{
  names: {
    de: "geowaz",
    en: "golem",
    fr: "grolem",
    ja: "ゴローニャ",
    zh: "隆隆岩",
  },
  number: 76,
},{
  names: {
    de: "ponita",
    en: "ponyta",
    fr: "ponyta",
    ja: "ポニータ",
    zh: "小火马",
  },
  number: 77,
},{
  names: {
    de: "gallopa",
    en: "rapidash",
    fr: "galopa",
    ja: "ギャロップ",
    zh: "烈焰马",
  },
  number: 78,
},{
  names: {
    de: "flegmon",
    en: "slowpoke",
    fr: "ramoloss",
    ja: "ヤドン",
    zh: "呆呆兽",
  },
  number: 79,
},{
  names: {
    de: "lahmus",
    en: "slowbro",
    fr: "flagadoss",
    ja: "ヤドラン",
    zh: "呆壳兽",
  },
  number: 80,
},{
  names: {
    de: "magnetilo",
    en: "magnemite",
    fr: "magnéti",
    ja: "コイル",
    zh: "小磁怪",
  },
  number: 81,
},{
  names: {
    de: "magneton",
    en: "magneton",
    fr: "magnéton",
    ja: "レアコイル",
    zh: "三合一磁怪",
  },
  number: 82,
},{
  names: {
    de: "porenta",
    en: "farfetch'd",
    fr: "canarticho",
    ja: "カモネギ",
    zh: "大葱鸭",
  },
  number: 83,
},{
  names: {
    de: "dodu",
    en: "doduo",
    fr: "doduo",
    ja: "ドードー",
    zh: "嘟嘟",
  },
  number: 84,
},{
  names: {
    de: "dodri",
    en: "dodrio",
    fr: "dodrio",
    ja: "ドードリオ",
    zh: "嘟嘟利",
  },
  number: 85,
},{
  names: {
    de: "jurob",
    en: "seel",
    fr: "otaria",
    ja: "パウワウ",
    zh: "小海狮",
  },
  number: 86,
},{
  names: {
    de: "jugong",
    en: "dewgong",
    fr: "lamantine",
    ja: "ジュゴン",
    zh: "白海狮",
  },
  number: 87,
},{
  names: {
    de: "sleima",
    en: "grimer",
    fr: "tadmorv",
    ja: "ベトベター",
    zh: "臭泥",
  },
  number: 88,
},{
  names: {
    de: "sleimok",
    en: "muk",
    fr: "grotadmorv",
    ja: "ベトベトン",
    zh: "臭臭泥",
  },
  number: 89,
},{
  names: {
    de: "muschas",
    en: "shellder",
    fr: "kokiyas",
    ja: "シェルダー",
    zh: "大舌贝",
  },
  number: 90,
},{
  names: {
    de: "austos",
    en: "cloyster",
    fr: "crustabri",
    ja: "パルシェン",
    zh: "刺甲贝",
  },
  number: 91,
},{
  names: {
    de: "nebulak",
    en: "gastly",
    fr: "fantominus",
    ja: "ゴース",
    zh: "鬼斯",
  },
  number: 92,
},{
  names: {
    de: "alpollo",
    en: "haunter",
    fr: "spectrum",
    ja: "ゴースト",
    zh: "鬼斯通",
  },
  number: 93,
},{
  names: {
    de: "gengar",
    en: "gengar",
    fr: "ectoplasma",
    ja: "ゲンガー",
    zh: "耿鬼",
  },
  number: 94,
},{
  names: {
    de: "onix",
    en: "onix",
    fr: "onix",
    ja: "イワーク",
    zh: "大岩蛇",
  },
  number: 95,
},{
  names: {
    de: "traumato",
    en: "drowzee",
    fr: "soporifik",
    ja: "スリープ",
    zh: "催眠貘",
  },
  number: 96,
},{
  names: {
    de: "hypno",
    en: "hypno",
    fr: "hypnomade",
    ja: "スリーパー",
    zh: "引梦貘人",
  },
  number: 97,
},{
  names: {
    de: "krabby",
    en: "krabby",
    fr: "krabby",
    ja: "クラブ",
    zh: "大钳蟹",
  },
  number: 98,
},{
  names: {
    de: "kingler",
    en: "kingler",
    fr: "krabboss",
    ja: "キングラー",
    zh: "巨钳蟹",
  },
  number: 99,
},{
  names: {
    de: "voltobal",
    en: "voltorb",
    fr: "voltorbe",
    ja: "ビリリダマ",
    zh: "霹雳电球",
  },
  number: 100,
},{
  names: {
    de: "lektrobal",
    en: "electrode",
    fr: "électrode",
    ja: "マルマイン",
    zh: "顽皮雷弹",
  },
  number: 101,
},{
  names: {
    de: "owei",
    en: "exeggcute",
    fr: "noeunoeuf",
    ja: "タマタマ",
    zh: "蛋蛋",
  },
  number: 102,
},{
  names: {
    de: "kokowei",
    en: "exeggutor",
    fr: "noadkoko",
    ja: "ナッシー",
    zh: "椰蛋树",
  },
  number: 103,
},{
  names: {
    de: "tragosso",
    en: "cubone",
    fr: "osselait",
    ja: "カラカラ",
    zh: "卡拉卡拉",
  },
  number: 104,
},{
  names: {
    de: "knogga",
    en: "marowak",
    fr: "ossatueur",
    ja: "ガラガラ",
    zh: "嘎啦嘎啦",
  },
  number: 105,
},{
  names: {
    de: "kicklee",
    en: "hitmonlee",
    fr: "kicklee",
    ja: "サワムラー",
    zh: "飞腿郎",
  },
  number: 106,
},{
  names: {
    de: "nockchan",
    en: "hitmonchan",
    fr: "tygnon",
    ja: "エビワラー",
    zh: "快拳郎",
  },
  number: 107,
},{
  names: {
    de: "schlurp",
    en: "lickitung",
    fr: "excelangue",
    ja: "ベロリンガ",
    zh: "大舌头",
  },
  number: 108,
},{
  names: {
    de: "smogon",
    en: "koffing",
    fr: "smogo",
    ja: "ドガース",
    zh: "瓦斯弹",
  },
  number: 109,
},{
  names: {
    de: "smogmog",
    en: "weezing",
    fr: "smogogo",
    ja: "マタドガス",
    zh: "双弹瓦斯",
  },
  number: 110,
},{
  names: {
    de: "rihorn",
    en: "rhyhorn",
    fr: "rhinocorne",
    ja: "サイホーン",
    zh: "独角犀牛",
  },
  number: 111,
},{
  names: {
    de: "rizeros",
    en: "rhydon",
    fr: "rhinoféros",
    ja: "サイドン",
    zh: "钻角犀兽",
  },
  number: 112,
},{
  names: {
    de: "chaneira",
    en: "chansey",
    fr: "leveinard",
    ja: "ラッキー",
    zh: "吉利蛋",
  },
  number: 113,
},{
  names: {
    de: "tangela",
    en: "tangela",
    fr: "saquedeneu",
    ja: "モンジャラ",
    zh: "蔓藤怪",
  },
  number: 114,
},{
  names: {
    de: "kangama",
    en: "kangaskhan",
    fr: "kangourex",
    ja: "ガルーラ",
    zh: "袋兽",
  },
  number: 115,
},{
  names: {
    de: "seeper",
    en: "horsea",
    fr: "hypotrempe",
    ja: "タッツー",
    zh: "墨海马",
  },
  number: 116,
},{
  names: {
    de: "seemon",
    en: "seadra",
    fr: "hypocéan",
    ja: "シードラ",
    zh: "海刺龙",
  },
  number: 117,
},{
  names: {
    de: "goldini",
    en: "goldeen",
    fr: "poissirène",
    ja: "トサキント",
    zh: "角金鱼",
  },
  number: 118,
},{
  names: {
    de: "golking",
    en: "seaking",
    fr: "poissoroy",
    ja: "アズマオウ",
    zh: "金鱼王",
  },
  number: 119,
},{
  names: {
    de: "sterndu",
    en: "staryu",
    fr: "stari",
    ja: "ヒトデマン",
    zh: "海星星",
  },
  number: 120,
},{
  names: {
    de: "starmie",
    en: "starmie",
    fr: "staross",
    ja: "スターミー",
    zh: "宝石海星",
  },
  number: 121,
},{
  names: {
    de: "pantimos",
    en: "mr. mime",
    fr: "m. mime",
    ja: "バリヤード",
    zh: "魔墙人偶",
  },
  number: 122,
},{
  names: {
    de: "sichlor",
    en: "scyther",
    fr: "insécateur",
    ja: "ストライク",
    zh: "飞天螳螂",
  },
  number: 123,
},{
  names: {
    de: "rossana",
    en: "jynx",
    fr: "lippoutou",
    ja: "ルージュラ",
    zh: "迷唇姐",
  },
  number: 124,
},{
  names: {
    de: "elektek",
    en: "electabuzz",
    fr: "élektek",
    ja: "エレブー",
    zh: "电击兽",
  },
  number: 125,
},{
  names: {
    de: "magmar",
    en: "magmar",
    fr: "magmar",
    ja: "ブーバー",
    zh: "鸭嘴火兽",
  },
  number: 126,
},{
  names: {
    de: "pinsir",
    en: "pinsir",
    fr: "scarabrute",
    ja: "カイロス",
    zh: "凯罗斯",
  },
  number: 127,
},{
  names: {
    de: "tauros",
    en: "tauros",
    fr: "tauros",
    ja: "ケンタロス",
    zh: "肯泰罗",
  },
  number: 128,
},{
  names: {
    de: "karpador",
    en: "magikarp",
    fr: "magicarpe",
    ja: "コイキング",
    zh: "鲤鱼王",
  },
  number: 129,
},{
  names: {
    de: "garados",
    en: "gyarados",
    fr: "léviator",
    ja: "ギャラドス",
    zh: "暴鲤龙",
  },
  number: 130,
},{
  names: {
    de: "lapras",
    en: "lapras",
    fr: "lokhlass",
    ja: "ラプラス",
    zh: "拉普拉斯",
  },
  number: 131,
},{
  names: {
    de: "ditto",
    en: "ditto",
    fr: "métamorph",
    ja: "メタモン",
    zh: "百变怪",
  },
  number: 132,
},{
  names: {
    de: "evoli",
    en: "eevee",
    fr: "évoli",
    ja: "イーブイ",
    zh: "伊布",
  },
  number: 133,
},{
  names: {
    de: "aquana",
    en: "vaporeon",
    fr: "aquali",
    ja: "シャワーズ",
    zh: "水伊布",
  },
  number: 134,
},{
  names: {
    de: "blitza",
    en: "jolteon",
    fr: "voltali",
    ja: "サンダース",
    zh: "雷伊布",
  },
  number: 135,
},{
  names: {
    de: "flamara",
    en: "flareon",
    fr: "pyroli",
    ja: "ブースター",
    zh: "火伊布",
  },
  number: 136,
},{
  names: {
    de: "porygon",
    en: "porygon",
    fr: "porygon",
    ja: "ポリゴン",
    zh: "多边兽",
  },
  number: 137,
},{
  names: {
    de: "amonitas",
    en: "omanyte",
    fr: "amonita",
    ja: "オムナイト",
    zh: "菊石兽",
  },
  number: 138,
},{
  names: {
    de: "amoroso",
    en: "omastar",
    fr: "amonistar",
    ja: "オムスター",
    zh: "多刺菊石兽",
  },
  number: 139,
},{
  names: {
    de: "kabuto",
    en: "kabuto",
    fr: "kabuto",
    ja: "カブト",
    zh: "化石盔",
  },
  number: 140,
},{
  names: {
    de: "kabutops",
    en: "kabutops",
    fr: "kabutops",
    ja: "カブトプス",
    zh: "镰刀盔",
  },
  number: 141,
},{
  names: {
    de: "aerodactyl",
    en: "aerodactyl",
    fr: "ptéra",
    ja: "プテラ",
    zh: "化石翼龙",
  },
  number: 142,
},{
  names: {
    de: "relaxo",
    en: "snorlax",
    fr: "ronflex",
    ja: "カビゴン",
    zh: "卡比兽",
  },
  number: 143,
},{
  names: {
    de: "arktos",
    en: "articuno",
    fr: "artikodin",
    ja: "フリーザー",
    zh: "急冻鸟",
  },
  number: 144,
},{
  names: {
    de: "zapdos",
    en: "zapdos",
    fr: "électhor",
    ja: "サンダー",
    zh: "闪电鸟",
  },
  number: 145,
},{
  names: {
    de: "lavados",
    en: "moltres",
    fr: "sulfura",
    ja: "ファイヤー",
    zh: "火焰鸟",
  },
  number: 146,
},{
  names: {
    de: "dratini",
    en: "dratini",
    fr: "minidraco",
    ja: "ミニリュウ",
    zh: "迷你龙",
  },
  number: 147,
},{
  names: {
    de: "dragonir",
    en: "dragonair",
    fr: "draco",
    ja: "ハクリュー",
    zh: "哈克龙",
  },
  number: 148,
},{
  names: {
    de: "dragoran",
    en: "dragonite",
    fr: "dracolosse",
    ja: "カイリュー",
    zh: "快龙",
  },
  number: 149,
},{
  names: {
    de: "mewtu",
    en: "mewtwo",
    fr: "mewtwo",
    ja: "ミュウツー",
    zh: "超梦",
  },
  number: 150,
},{
  names: {
    de: "mew",
    en: "mew",
    fr: "mew",
    ja: "ミュウ",
    zh: "梦幻",
  },
  number: 151,
},{
  names: {
    de: "endivie",
    en: "chikorita",
    fr: "germignon",
    ja: "チコリータ",
    zh: "菊草叶",
  },
  number: 152,
},{
  names: {
    de: "lorblatt",
    en: "bayleef",
    fr: "macronium",
    ja: "ベイリーフ",
    zh: "月桂叶",
  },
  number: 153,
},{
  names: {
    de: "meganie",
    en: "meganium",
    fr: "méganium",
    ja: "メガニウム",
    zh: "大竺葵",
  },
  number: 154,
},{
  names: {
    de: "feurigel",
    en: "cyndaquil",
    fr: "héricendre",
    ja: "ヒノアラシ",
    zh: "火球鼠",
  },
  number: 155,
},{
  names: {
    de: "igelavar",
    en: "quilava",
    fr: "feurisson",
    ja: "マグマラシ",
    zh: "火岩鼠",
  },
  number: 156,
},{
  names: {
    de: "tornupto",
    en: "typhlosion",
    fr: "typhlosion",
    ja: "バクフーン",
    zh: "火暴兽",
  },
  number: 157,
},{
  names: {
    de: "karnimani",
    en: "totodile",
    fr: "kaiminus",
    ja: "ワニノコ",
    zh: "小锯鳄",
  },
  number: 158,
},{
  names: {
    de: "tyracroc",
    en: "croconaw",
    fr: "crocrodil",
    ja: "アリゲイツ",
    zh: "蓝鳄",
  },
  number: 159,
},{
  names: {
    de: "impergator",
    en: "feraligatr",
    fr: "aligatueur",
    ja: "オーダイル",
    zh: "大力鳄",
  },
  number: 160,
},{
  names: {
    de: "wiesor",
    en: "sentret",
    fr: "fouinette",
    ja: "オタチ",
    zh: "尾立",
  },
  number: 161,
},{
  names: {
    de: "wiesenior",
    en: "furret",
    fr: "fouinar",
    ja: "オオタチ",
    zh: "大尾立",
  },
  number: 162,
},{
  names: {
    de: "hoothoot",
    en: "hoothoot",
    fr: "hoothoot",
    ja: "ホーホー",
    zh: "咕咕",
  },
  number: 163,
},{
  names: {
    de: "noctuh",
    en: "noctowl",
    fr: "noarfang",
    ja: "ヨルノズク",
    zh: "猫头夜鹰",
  },
  number: 164,
},{
  names: {
    de: "ledyba",
    en: "ledyba",
    fr: "coxy",
    ja: "レディバ",
    zh: "芭瓢虫",
  },
  number: 165,
},{
  names: {
    de: "ledian",
    en: "ledian",
    fr: "coxyclaque",
    ja: "レディアン",
    zh: "安瓢虫",
  },
  number: 166,
},{
  names: {
    de: "webarak",
    en: "spinarak",
    fr: "mimigal",
    ja: "イトマル",
    zh: "圆丝蛛",
  },
  number: 167,
},{
  names: {
    de: "ariados",
    en: "ariados",
    fr: "migalos",
    ja: "アリアドス",
    zh: "阿利多斯",
  },
  number: 168,
},{
  names: {
    de: "iksbat",
    en: "crobat",
    fr: "nostenfer",
    ja: "クロバット",
    zh: "叉字蝠",
  },
  number: 169,
},{
  names: {
    de: "lampi",
    en: "chinchou",
    fr: "loupio",
    ja: "チョンチー",
    zh: "灯笼鱼",
  },
  number: 170,
},{
  names: {
    de: "lanturn",
    en: "lanturn",
    fr: "lanturn",
    ja: "ランターン",
    zh: "电灯怪",
  },
  number: 171,
},{
  names: {
    de: "pichu",
    en: "pichu",
    fr: "pichu",
    ja: "ピチュー",
    zh: "皮丘",
  },
  number: 172,
},{
  names: {
    de: "pii",
    en: "cleffa",
    fr: "mélo",
    ja: "ピィ",
    zh: "皮宝宝",
  },
  number: 173,
},{
  names: {
    de: "fluffeluff",
    en: "igglybuff",
    fr: "toudoudou",
    ja: "ププリン",
    zh: "宝宝丁",
  },
  number: 174,
},{
  names: {
    de: "togepi",
    en: "togepi",
    fr: "togepi",
    ja: "トゲピー",
    zh: "波克比",
  },
  number: 175,
},{
  names: {
    de: "togetic",
    en: "togetic",
    fr: "togetic",
    ja: "トゲチック",
    zh: "波克基古",
  },
  number: 176,
},{
  names: {
    de: "natu",
    en: "natu",
    fr: "natu",
    ja: "ネイティ",
    zh: "天然雀",
  },
  number: 177,
},{
  names: {
    de: "xatu",
    en: "xatu",
    fr: "xatu",
    ja: "ネイティオ",
    zh: "天然鸟",
  },
  number: 178,
},{
  names: {
    de: "voltilamm",
    en: "mareep",
    fr: "wattouat",
    ja: "メリープ",
    zh: "咩利羊",
  },
  number: 179,
},{
  names: {
    de: "waaty",
    en: "flaaffy",
    fr: "lainergie",
    ja: "モココ",
    zh: "茸茸羊",
  },
  number: 180,
},{
  names: {
    de: "ampharos",
    en: "ampharos",
    fr: "pharamp",
    ja: "デンリュウ",
    zh: "电龙",
  },
  number: 181,
},{
  names: {
    de: "blubella",
    en: "bellossom",
    fr: "joliflor",
    ja: "キレイハナ",
    zh: "美丽花",
  },
  number: 182,
},{
  names: {
    de: "marill",
    en: "marill",
    fr: "marill",
    ja: "マリル",
    zh: "玛力露",
  },
  number: 183,
},{
  names: {
    de: "azumarill",
    en: "azumarill",
    fr: "azumarill",
    ja: "マリルリ",
    zh: "玛力露丽",
  },
  number: 184,
},{
  names: {
    de: "mogelbaum",
    en: "sudowoodo",
    fr: "simularbre",
    ja: "ウソッキー",
    zh: "树才怪",
  },
  number: 185,
},{
  names: {
    de: "quaxo",
    en: "politoed",
    fr: "tarpaud",
    ja: "ニョロトノ",
    zh: "蚊香蛙皇",
  },
  number: 186,
},{
  names: {
    de: "hoppspross",
    en: "hoppip",
    fr: "granivol",
    ja: "ハネッコ",
    zh: "毽子草",
  },
  number: 187,
},{
  names: {
    de: "hubelupf",
    en: "skiploom",
    fr: "floravol",
    ja: "ポポッコ",
    zh: "毽子花",
  },
  number: 188,
},{
  names: {
    de: "papungha",
    en: "jumpluff",
    fr: "cotovol",
    ja: "ワタッコ",
    zh: "毽子棉",
  },
  number: 189,
},{
  names: {
    de: "griffel",
    en: "aipom",
    fr: "capumain",
    ja: "エイパム",
    zh: "长尾怪手",
  },
  number: 190,
},{
  names: {
    de: "sonnkern",
    en: "sunkern",
    fr: "tournegrin",
    ja: "ヒマナッツ",
    zh: "向日种子",
  },
  number: 191,
},{
  names: {
    de: "sonnflora",
    en: "sunflora",
    fr: "héliatronc",
    ja: "キマワリ",
    zh: "向日花怪",
  },
  number: 192,
},{
  names: {
    de: "yanma",
    en: "yanma",
    fr: "yanma",
    ja: "ヤンヤンマ",
    zh: "蜻蜻蜓",
  },
  number: 193,
},{
  names: {
    de: "felino",
    en: "wooper",
    fr: "axoloto",
    ja: "ウパー",
    zh: "乌波",
  },
  number: 194,
},{
  names: {
    de: "morlord",
    en: "quagsire",
    fr: "maraiste",
    ja: "ヌオー",
    zh: "沼王",
  },
  number: 195,
},{
  names: {
    de: "psiana",
    en: "espeon",
    fr: "mentali",
    ja: "エーフィ",
    zh: "太阳伊布",
  },
  number: 196,
},{
  names: {
    de: "nachtara",
    en: "umbreon",
    fr: "noctali",
    ja: "ブラッキー",
    zh: "月亮伊布",
  },
  number: 197,
},{
  names: {
    de: "kramurx",
    en: "murkrow",
    fr: "cornèbre",
    ja: "ヤミカラス",
    zh: "黑暗鸦",
  },
  number: 198,
},{
  names: {
    de: "laschoking",
    en: "slowking",
    fr: "roigada",
    ja: "ヤドキング",
    zh: "呆呆王",
  },
  number: 199,
},{
  names: {
    de: "traunfugil",
    en: "misdreavus",
    fr: "feuforêve",
    ja: "ムウマ",
    zh: "梦妖",
  },
  number: 200,
},{
  names: {
    de: "icognito",
    en: "unown",
    fr: "zarbi",
    ja: "アンノーン",
    zh: "未知图腾",
  },
  number: 201,
},{
  names: {
    de: "woingenau",
    en: "wobbuffet",
    fr: "qulbutoké",
    ja: "ソーナンス",
    zh: "果然翁",
  },
  number: 202,
},{
  names: {
    de: "girafarig",
    en: "girafarig",
    fr: "girafarig",
    ja: "キリンリキ",
    zh: "麒麟奇",
  },
  number: 203,
},{
  names: {
    de: "tannza",
    en: "pineco",
    fr: "pomdepik",
    ja: "クヌギダマ",
    zh: "榛果球",
  },
  number: 204,
},{
  names: {
    de: "forstellka",
    en: "forretress",
    fr: "foretress",
    ja: "フォレトス",
    zh: "佛烈托斯",
  },
  number: 205,
},{
  names: {
    de: "dummisel",
    en: "dunsparce",
    fr: "insolourdo",
    ja: "ノコッチ",
    zh: "土龙弟弟",
  },
  number: 206,
},{
  names: {
    de: "skorgla",
    en: "gligar",
    fr: "scorplane",
    ja: "グライガー",
    zh: "天蝎",
  },
  number: 207,
},{
  names: {
    de: "stahlos",
    en: "steelix",
    fr: "steelix",
    ja: "ハガネール",
    zh: "大钢蛇",
  },
  number: 208,
},{
  names: {
    de: "snubbull",
    en: "snubbull",
    fr: "snubbull",
    ja: "ブルー",
    zh: "布鲁",
  },
  number: 209,
},{
  names: {
    de: "granbull",
    en: "granbull",
    fr: "granbull",
    ja: "グランブル",
    zh: "布鲁皇",
  },
  number: 210,
},{
  names: {
    de: "baldorfish",
    en: "qwilfish",
    fr: "qwilfish",
    ja: "ハリーセン",
    zh: "千针鱼",
  },
  number: 211,
},{
  names: {
    de: "scherox",
    en: "scizor",
    fr: "cizayox",
    ja: "ハッサム",
    zh: "巨钳螳螂",
  },
  number: 212,
},{
  names: {
    de: "pottrott",
    en: "shuckle",
    fr: "caratroc",
    ja: "ツボツボ",
    zh: "壶壶",
  },
  number: 213,
},{
  names: {
    de: "skaraborn",
    en: "heracross",
    fr: "scarhino",
    ja: "ヘラクロス",
    zh: "赫拉克罗斯",
  },
  number: 214,
},{
  names: {
    de: "sniebel",
    en: "sneasel",
    fr: "farfuret",
    ja: "ニューラ",
    zh: "狃拉",
  },
  number: 215,
},{
  names: {
    de: "teddiursa",
    en: "teddiursa",
    fr: "teddiursa",
    ja: "ヒメグマ",
    zh: "熊宝宝",
  },
  number: 216,
},{
  names: {
    de: "ursaring",
    en: "ursaring",
    fr: "ursaring",
    ja: "リングマ",
    zh: "圈圈熊",
  },
  number: 217,
},{
  names: {
    de: "schneckmag",
    en: "slugma",
    fr: "limagma",
    ja: "マグマッグ",
    zh: "熔岩虫",
  },
  number: 218,
},{
  names: {
    de: "magcargo",
    en: "magcargo",
    fr: "volcaropod",
    ja: "マグカルゴ",
    zh: "熔岩蜗牛",
  },
  number: 219,
},{
  names: {
    de: "quiekel",
    en: "swinub",
    fr: "marcacrin",
    ja: "ウリムー",
    zh: "小山猪",
  },
  number: 220,
},{
  names: {
    de: "keifel",
    en: "piloswine",
    fr: "cochignon",
    ja: "イノムー",
    zh: "长毛猪",
  },
  number: 221,
},{
  names: {
    de: "corasonn",
    en: "corsola",
    fr: "corayon",
    ja: "サニーゴ",
    zh: "太阳珊瑚",
  },
  number: 222,
},{
  names: {
    de: "remoraid",
    en: "remoraid",
    fr: "rémoraid",
    ja: "テッポウオ",
    zh: "铁炮鱼",
  },
  number: 223,
},{
  names: {
    de: "octillery",
    en: "octillery",
    fr: "octillery",
    ja: "オクタン",
    zh: "章鱼桶",
  },
  number: 224,
},{
  names: {
    de: "botogel",
    en: "delibird",
    fr: "cadoizo",
    ja: "デリバード",
    zh: "信使鸟",
  },
  number: 225,
},{
  names: {
    de: "mantax",
    en: "mantine",
    fr: "démanta",
    ja: "マンタイン",
    zh: "巨翅飞鱼",
  },
  number: 226,
},{
  names: {
    de: "panzaeron",
    en: "skarmory",
    fr: "airmure",
    ja: "エアームド",
    zh: "盔甲鸟",
  },
  number: 227,
},{
  names: {
    de: "hunduster",
    en: "houndour",
    fr: "malosse",
    ja: "デルビル",
    zh: "戴鲁比",
  },
  number: 228,
},{
  names: {
    de: "hundemon",
    en: "houndoom",
    fr: "démolosse",
    ja: "ヘルガー",
    zh: "黑鲁加",
  },
  number: 229,
},{
  names: {
    de: "seedraking",
    en: "kingdra",
    fr: "hyporoi",
    ja: "キングドラ",
    zh: "刺龙王",
  },
  number: 230,
},{
  names: {
    de: "phanpy",
    en: "phanpy",
    fr: "phanpy",
    ja: "ゴマゾウ",
    zh: "小小象",
  },
  number: 231,
},{
  names: {
    de: "donphan",
    en: "donphan",
    fr: "donphan",
    ja: "ドンファン",
    zh: "顿甲",
  },
  number: 232,
},{
  names: {
    de: "porygon2",
    en: "porygon2",
    fr: "porygon2",
    ja: "ポリゴン２",
    zh: "多边兽２型",
  },
  number: 233,
},{
  names: {
    de: "damhirplex",
    en: "stantler",
    fr: "cerfrousse",
    ja: "オドシシ",
    zh: "惊角鹿",
  },
  number: 234,
},{
  names: {
    de: "farbeagle",
    en: "smeargle",
    fr: "queulorior",
    ja: "ドーブル",
    zh: "图图犬",
  },
  number: 235,
},{
  names: {
    de: "rabauz",
    en: "tyrogue",
    fr: "debugant",
    ja: "バルキー",
    zh: "无畏小子",
  },
  number: 236,
},{
  names: {
    de: "kapoera",
    en: "hitmontop",
    fr: "kapoera",
    ja: "カポエラー",
    zh: "战舞郎",
  },
  number: 237,
},{
  names: {
    de: "kussilla",
    en: "smoochum",
    fr: "lippouti",
    ja: "ムチュール",
    zh: "迷唇娃",
  },
  number: 238,
},{
  names: {
    de: "elekid",
    en: "elekid",
    fr: "élekid",
    ja: "エレキッド",
    zh: "电击怪",
  },
  number: 239,
},{
  names: {
    de: "magby",
    en: "magby",
    fr: "magby",
    ja: "ブビィ",
    zh: "鸭嘴宝宝",
  },
  number: 240,
},{
  names: {
    de: "miltank",
    en: "miltank",
    fr: "écrémeuh",
    ja: "ミルタンク",
    zh: "大奶罐",
  },
  number: 241,
},{
  names: {
    de: "heiteira",
    en: "blissey",
    fr: "leuphorie",
    ja: "ハピナス",
    zh: "幸福蛋",
  },
  number: 242,
},{
  names: {
    de: "raikou",
    en: "raikou",
    fr: "raikou",
    ja: "ライコウ",
    zh: "雷公",
  },
  number: 243,
},{
  names: {
    de: "entei",
    en: "entei",
    fr: "entei",
    ja: "エンテイ",
    zh: "炎帝",
  },
  number: 244,
},{
  names: {
    de: "suicune",
    en: "suicune",
    fr: "suicune",
    ja: "スイクン",
    zh: "水君",
  },
  number: 245,
},{
  names: {
    de: "larvitar",
    en: "larvitar",
    fr: "embrylex",
    ja: "ヨーギラス",
    zh: "幼基拉斯",
  },
  number: 246,
},{
  names: {
    de: "pupitar",
    en: "pupitar",
    fr: "ymphect",
    ja: "サナギラス",
    zh: "沙基拉斯",
  },
  number: 247,
},{
  names: {
    de: "despotar",
    en: "tyranitar",
    fr: "tyranocif",
    ja: "バンギラス",
    zh: "班基拉斯",
  },
  number: 248,
},{
  names: {
    de: "lugia",
    en: "lugia",
    fr: "lugia",
    ja: "ルギア",
    zh: "洛奇亚",
  },
  number: 249,
},{
  names: {
    de: "ho-oh",
    en: "ho-oh",
    fr: "ho-oh",
    ja: "ホウオウ",
    zh: "凤王",
  },
  number: 250,
},{
  names: {
    de: "celebi",
    en: "celebi",
    fr: "celebi",
    ja: "セレビィ",
    zh: "时拉比",
  },
  number: 251,
},{
  names: {
    de: "geckarbor",
    en: "treecko",
    fr: "arcko",
    ja: "キモリ",
    zh: "木守宫",
  },
  number: 252,
},{
  names: {
    de: "reptain",
    en: "grovyle",
    fr: "massko",
    ja: "ジュプトル",
    zh: "森林蜥蜴",
  },
  number: 253,
},{
  names: {
    de: "gewaldro",
    en: "sceptile",
    fr: "jungko",
    ja: "ジュカイン",
    zh: "蜥蜴王",
  },
  number: 254,
},{
  names: {
    de: "flemmli",
    en: "torchic",
    fr: "poussifeu",
    ja: "アチャモ",
    zh: "火稚鸡",
  },
  number: 255,
},{
  names: {
    de: "jungglut",
    en: "combusken",
    fr: "galifeu",
    ja: "ワカシャモ",
    zh: "力壮鸡",
  },
  number: 256,
},{
  names: {
    de: "lohgock",
    en: "blaziken",
    fr: "braségali",
    ja: "バシャーモ",
    zh: "火焰鸡",
  },
  number: 257,
},{
  names: {
    de: "hydropi",
    en: "mudkip",
    fr: "gobou",
    ja: "ミズゴロウ",
    zh: "水跃鱼",
  },
  number: 258,
},{
  names: {
    de: "moorabbel",
    en: "marshtomp",
    fr: "flobio",
    ja: "ヌマクロー",
    zh: "沼跃鱼",
  },
  number: 259,
},{
  names: {
    de: "sumpex",
    en: "swampert",
    fr: "laggron",
    ja: "ラグラージ",
    zh: "巨沼怪",
  },
  number: 260,
},{
  names: {
    de: "fiffyen",
    en: "poochyena",
    fr: "medhyèna",
    ja: "ポチエナ",
    zh: "土狼犬",
  },
  number: 261,
},{
  names: {
    de: "magnayen",
    en: "mightyena",
    fr: "grahyèna",
    ja: "グラエナ",
    zh: "大狼犬",
  },
  number: 262,
},{
  names: {
    de: "zigzachs",
    en: "zigzagoon",
    fr: "zigzaton",
    ja: "ジグザグマ",
    zh: "蛇纹熊",
  },
  number: 263,
},{
  names: {
    de: "geradaks",
    en: "linoone",
    fr: "linéon",
    ja: "マッスグマ",
    zh: "直冲熊",
  },
  number: 264,
},{
  names: {
    de: "waumpel",
    en: "wurmple",
    fr: "chenipotte",
    ja: "ケムッソ",
    zh: "刺尾虫",
  },
  number: 265,
},{
  names: {
    de: "schaloko",
    en: "silcoon",
    fr: "armulys",
    ja: "カラサリス",
    zh: "甲壳茧",
  },
  number: 266,
},{
  names: {
    de: "papinella",
    en: "beautifly",
    fr: "charmillon",
    ja: "アゲハント",
    zh: "狩猎凤蝶",
  },
  number: 267,
},{
  names: {
    de: "panekon",
    en: "cascoon",
    fr: "blindalys",
    ja: "マユルド",
    zh: "盾甲茧",
  },
  number: 268,
},{
  names: {
    de: "pudox",
    en: "dustox",
    fr: "papinox",
    ja: "ドクケイル",
    zh: "毒粉蛾",
  },
  number: 269,
},{
  names: {
    de: "loturzel",
    en: "lotad",
    fr: "nénupiot",
    ja: "ハスボー",
    zh: "莲叶童子",
  },
  number: 270,
},{
  names: {
    de: "lombrero",
    en: "lombre",
    fr: "lombre",
    ja: "ハスブレロ",
    zh: "莲帽小童",
  },
  number: 271,
},{
  names: {
    de: "kappalores",
    en: "ludicolo",
    fr: "ludicolo",
    ja: "ルンパッパ",
    zh: "乐天河童",
  },
  number: 272,
},{
  names: {
    de: "samurzel",
    en: "seedot",
    fr: "grainipiot",
    ja: "タネボー",
    zh: "橡实果",
  },
  number: 273,
},{
  names: {
    de: "blanas",
    en: "nuzleaf",
    fr: "pifeuil",
    ja: "コノハナ",
    zh: "长鼻叶",
  },
  number: 274,
},{
  names: {
    de: "tengulist",
    en: "shiftry",
    fr: "tengalice",
    ja: "ダーテング",
    zh: "狡猾天狗",
  },
  number: 275,
},{
  names: {
    de: "schwalbini",
    en: "taillow",
    fr: "nirondelle",
    ja: "スバメ",
    zh: "傲骨燕",
  },
  number: 276,
},{
  names: {
    de: "schwalboss",
    en: "swellow",
    fr: "hélédelle",
    ja: "オオスバメ",
    zh: "大王燕",
  },
  number: 277,
},{
  names: {
    de: "wingull",
    en: "wingull",
    fr: "goélise",
    ja: "キャモメ",
    zh: "长翅鸥",
  },
  number: 278,
},{
  names: {
    de: "pelipper",
    en: "pelipper",
    fr: "bekipan",
    ja: "ペリッパー",
    zh: "大嘴鸥",
  },
  number: 279,
},{
  names: {
    de: "trasla",
    en: "ralts",
    fr: "tarsal",
    ja: "ラルトス",
    zh: "拉鲁拉丝",
  },
  number: 280,
},{
  names: {
    de: "kirlia",
    en: "kirlia",
    fr: "kirlia",
    ja: "キルリア",
    zh: "奇鲁莉安",
  },
  number: 281,
},{
  names: {
    de: "guardevoir",
    en: "gardevoir",
    fr: "gardevoir",
    ja: "サーナイト",
    zh: "沙奈朵",
  },
  number: 282,
},{
  names: {
    de: "gehweiher",
    en: "surskit",
    fr: "arakdo",
    ja: "アメタマ",
    zh: "溜溜糖球",
  },
  number: 283,
},{
  names: {
    de: "maskeregen",
    en: "masquerain",
    fr: "maskadra",
    ja: "アメモース",
    zh: "雨翅蛾",
  },
  number: 284,
},{
  names: {
    de: "knilz",
    en: "shroomish",
    fr: "balignon",
    ja: "キノココ",
    zh: "蘑蘑菇",
  },
  number: 285,
},{
  names: {
    de: "kapilz",
    en: "breloom",
    fr: "chapignon",
    ja: "キノガッサ",
    zh: "斗笠菇",
  },
  number: 286,
},{
  names: {
    de: "bummelz",
    en: "slakoth",
    fr: "parecool",
    ja: "ナマケロ",
    zh: "懒人獭",
  },
  number: 287,
},{
  names: {
    de: "muntier",
    en: "vigoroth",
    fr: "vigoroth",
    ja: "ヤルキモノ",
    zh: "过动猿",
  },
  number: 288,
},{
  names: {
    de: "letarking",
    en: "slaking",
    fr: "monaflèmit",
    ja: "ケッキング",
    zh: "请假王",
  },
  number: 289,
},{
  names: {
    de: "nincada",
    en: "nincada",
    fr: "ningale",
    ja: "ツチニン",
    zh: "土居忍士",
  },
  number: 290,
},{
  names: {
    de: "ninjask",
    en: "ninjask",
    fr: "ninjask",
    ja: "テッカニン",
    zh: "铁面忍者",
  },
  number: 291,
},{
  names: {
    de: "ninjatom",
    en: "shedinja",
    fr: "munja",
    ja: "ヌケニン",
    zh: "脱壳忍者",
  },
  number: 292,
},{
  names: {
    de: "flurmel",
    en: "whismur",
    fr: "chuchmur",
    ja: "ゴニョニョ",
    zh: "咕妞妞",
  },
  number: 293,
},{
  names: {
    de: "krakeelo",
    en: "loudred",
    fr: "ramboum",
    ja: "ドゴーム",
    zh: "吼爆弹",
  },
  number: 294,
},{
  names: {
    de: "krawumms",
    en: "exploud",
    fr: "brouhabam",
    ja: "バクオング",
    zh: "爆音怪",
  },
  number: 295,
},{
  names: {
    de: "makuhita",
    en: "makuhita",
    fr: "makuhita",
    ja: "マクノシタ",
    zh: "幕下力士",
  },
  number: 296,
},{
  names: {
    de: "hariyama",
    en: "hariyama",
    fr: "hariyama",
    ja: "ハリテヤマ",
    zh: "铁掌力士",
  },
  number: 297,
},{
  names: {
    de: "azurill",
    en: "azurill",
    fr: "azurill",
    ja: "ルリリ",
    zh: "露力丽",
  },
  number: 298,
},{
  names: {
    de: "nasgnet",
    en: "nosepass",
    fr: "tarinor",
    ja: "ノズパス",
    zh: "朝北鼻",
  },
  number: 299,
},{
  names: {
    de: "eneco",
    en: "skitty",
    fr: "skitty",
    ja: "エネコ",
    zh: "向尾喵",
  },
  number: 300,
},{
  names: {
    de: "enekoro",
    en: "delcatty",
    fr: "delcatty",
    ja: "エネコロロ",
    zh: "优雅猫",
  },
  number: 301,
},{
  names: {
    de: "zobiris",
    en: "sableye",
    fr: "ténéfix",
    ja: "ヤミラミ",
    zh: "勾魂眼",
  },
  number: 302,
},{
  names: {
    de: "flunkifer",
    en: "mawile",
    fr: "mysdibule",
    ja: "クチート",
    zh: "大嘴娃",
  },
  number: 303,
},{
  names: {
    de: "stollunior",
    en: "aron",
    fr: "galekid",
    ja: "ココドラ",
    zh: "可可多拉",
  },
  number: 304,
},{
  names: {
    de: "stollrak",
    en: "lairon",
    fr: "galegon",
    ja: "コドラ",
    zh: "可多拉",
  },
  number: 305,
},{
  names: {
    de: "stolloss",
    en: "aggron",
    fr: "galeking",
    ja: "ボスゴドラ",
    zh: "波士可多拉",
  },
  number: 306,
},{
  names: {
    de: "meditie",
    en: "meditite",
    fr: "méditikka",
    ja: "アサナン",
    zh: "玛沙那",
  },
  number: 307,
},{
  names: {
    de: "meditalis",
    en: "medicham",
    fr: "charmina",
    ja: "チャーレム",
    zh: "恰雷姆",
  },
  number: 308,
},{
  names: {
    de: "frizelbliz",
    en: "electrike",
    fr: "dynavolt",
    ja: "ラクライ",
    zh: "落雷兽",
  },
  number: 309,
},{
  names: {
    de: "voltenso",
    en: "manectric",
    fr: "élecsprint",
    ja: "ライボルト",
    zh: "雷电兽",
  },
  number: 310,
},{
  names: {
    de: "plusle",
    en: "plusle",
    fr: "posipi",
    ja: "プラスル",
    zh: "正电拍拍",
  },
  number: 311,
},{
  names: {
    de: "minun",
    en: "minun",
    fr: "négapi",
    ja: "マイナン",
    zh: "负电拍拍",
  },
  number: 312,
},{
  names: {
    de: "volbeat",
    en: "volbeat",
    fr: "muciole",
    ja: "バルビート",
    zh: "电萤虫",
  },
  number: 313,
},{
  names: {
    de: "illumise",
    en: "illumise",
    fr: "lumivole",
    ja: "イルミーゼ",
    zh: "甜甜萤",
  },
  number: 314,
},{
  names: {
    de: "roselia",
    en: "roselia",
    fr: "rosélia",
    ja: "ロゼリア",
    zh: "毒蔷薇",
  },
  number: 315,
},{
  names: {
    de: "schluppuck",
    en: "gulpin",
    fr: "gloupti",
    ja: "ゴクリン",
    zh: "溶食兽",
  },
  number: 316,
},{
  names: {
    de: "schlukwech",
    en: "swalot",
    fr: "avaltout",
    ja: "マルノーム",
    zh: "吞食兽",
  },
  number: 317,
},{
  names: {
    de: "kanivanha",
    en: "carvanha",
    fr: "carvanha",
    ja: "キバニア",
    zh: "利牙鱼",
  },
  number: 318,
},{
  names: {
    de: "tohaido",
    en: "sharpedo",
    fr: "sharpedo",
    ja: "サメハダー",
    zh: "巨牙鲨",
  },
  number: 319,
},{
  names: {
    de: "wailmer",
    en: "wailmer",
    fr: "wailmer",
    ja: "ホエルコ",
    zh: "吼吼鲸",
  },
  number: 320,
},{
  names: {
    de: "wailord",
    en: "wailord",
    fr: "wailord",
    ja: "ホエルオー",
    zh: "吼鲸王",
  },
  number: 321,
},{
  names: {
    de: "camaub",
    en: "numel",
    fr: "chamallot",
    ja: "ドンメル",
    zh: "呆火驼",
  },
  number: 322,
},{
  names: {
    de: "camerupt",
    en: "camerupt",
    fr: "camérupt",
    ja: "バクーダ",
    zh: "喷火驼",
  },
  number: 323,
},{
  names: {
    de: "qurtel",
    en: "torkoal",
    fr: "chartor",
    ja: "コータス",
    zh: "煤炭龟",
  },
  number: 324,
},{
  names: {
    de: "spoink",
    en: "spoink",
    fr: "spoink",
    ja: "バネブー",
    zh: "跳跳猪",
  },
  number: 325,
},{
  names: {
    de: "groink",
    en: "grumpig",
    fr: "groret",
    ja: "ブーピッグ",
    zh: "噗噗猪",
  },
  number: 326,
},{
  names: {
    de: "pandir",
    en: "spinda",
    fr: "spinda",
    ja: "パッチール",
    zh: "晃晃斑",
  },
  number: 327,
},{
  names: {
    de: "knacklion",
    en: "trapinch",
    fr: "kraknoix",
    ja: "ナックラー",
    zh: "大颚蚁",
  },
  number: 328,
},{
  names: {
    de: "vibrava",
    en: "vibrava",
    fr: "vibraninf",
    ja: "ビブラーバ",
    zh: "超音波幼虫",
  },
  number: 329,
},{
  names: {
    de: "libelldra",
    en: "flygon",
    fr: "libégon",
    ja: "フライゴン",
    zh: "沙漠蜻蜓",
  },
  number: 330,
},{
  names: {
    de: "tuska",
    en: "cacnea",
    fr: "cacnea",
    ja: "サボネア",
    zh: "刺球仙人掌",
  },
  number: 331,
},{
  names: {
    de: "noktuska",
    en: "cacturne",
    fr: "cacturne",
    ja: "ノクタス",
    zh: "梦歌仙人掌",
  },
  number: 332,
},{
  names: {
    de: "wablu",
    en: "swablu",
    fr: "tylton",
    ja: "チルット",
    zh: "青绵鸟",
  },
  number: 333,
},{
  names: {
    de: "altaria",
    en: "altaria",
    fr: "altaria",
    ja: "チルタリス",
    zh: "七夕青鸟",
  },
  number: 334,
},{
  names: {
    de: "sengo",
    en: "zangoose",
    fr: "mangriff",
    ja: "ザングース",
    zh: "猫鼬斩",
  },
  number: 335,
},{
  names: {
    de: "vipitis",
    en: "seviper",
    fr: "séviper",
    ja: "ハブネーク",
    zh: "饭匙蛇",
  },
  number: 336,
},{
  names: {
    de: "lunastein",
    en: "lunatone",
    fr: "séléroc",
    ja: "ルナトーン",
    zh: "月石",
  },
  number: 337,
},{
  names: {
    de: "sonnfel",
    en: "solrock",
    fr: "solaroc",
    ja: "ソルロック",
    zh: "太阳岩",
  },
  number: 338,
},{
  names: {
    de: "schmerbe",
    en: "barboach",
    fr: "barloche",
    ja: "ドジョッチ",
    zh: "泥泥鳅",
  },
  number: 339,
},{
  names: {
    de: "welsar",
    en: "whiscash",
    fr: "barbicha",
    ja: "ナマズン",
    zh: "鲶鱼王",
  },
  number: 340,
},{
  names: {
    de: "krebscorps",
    en: "corphish",
    fr: "écrapince",
    ja: "ヘイガニ",
    zh: "龙虾小兵",
  },
  number: 341,
},{
  names: {
    de: "krebutack",
    en: "crawdaunt",
    fr: "colhomard",
    ja: "シザリガー",
    zh: "铁螯龙虾",
  },
  number: 342,
},{
  names: {
    de: "puppance",
    en: "baltoy",
    fr: "balbuto",
    ja: "ヤジロン",
    zh: "天秤偶",
  },
  number: 343,
},{
  names: {
    de: "lepumentas",
    en: "claydol",
    fr: "kaorine",
    ja: "ネンドール",
    zh: "念力土偶",
  },
  number: 344,
},{
  names: {
    de: "liliep",
    en: "lileep",
    fr: "lilia",
    ja: "リリーラ",
    zh: "触手百合",
  },
  number: 345,
},{
  names: {
    de: "wielie",
    en: "cradily",
    fr: "vacilys",
    ja: "ユレイドル",
    zh: "摇篮百合",
  },
  number: 346,
},{
  names: {
    de: "anorith",
    en: "anorith",
    fr: "anorith",
    ja: "アノプス",
    zh: "太古羽虫",
  },
  number: 347,
},{
  names: {
    de: "armaldo",
    en: "armaldo",
    fr: "armaldo",
    ja: "アーマルド",
    zh: "太古盔甲",
  },
  number: 348,
},{
  names: {
    de: "barschwa",
    en: "feebas",
    fr: "barpau",
    ja: "ヒンバス",
    zh: "丑丑鱼",
  },
  number: 349,
},{
  names: {
    de: "milotic",
    en: "milotic",
    fr: "milobellus",
    ja: "ミロカロス",
    zh: "美纳斯",
  },
  number: 350,
},{
  names: {
    de: "formeo",
    en: "castform",
    fr: "morphéo",
    ja: "ポワルン",
    zh: "飘浮泡泡",
  },
  number: 351,
},{
  names: {
    de: "kecleon",
    en: "kecleon",
    fr: "kecleon",
    ja: "カクレオン",
    zh: "变隐龙",
  },
  number: 352,
},{
  names: {
    de: "shuppet",
    en: "shuppet",
    fr: "polichombr",
    ja: "カゲボウズ",
    zh: "怨影娃娃",
  },
  number: 353,
},{
  names: {
    de: "banette",
    en: "banette",
    fr: "branette",
    ja: "ジュペッタ",
    zh: "诅咒娃娃",
  },
  number: 354,
},{
  names: {
    de: "zwirrlicht",
    en: "duskull",
    fr: "skelénox",
    ja: "ヨマワル",
    zh: "夜巡灵",
  },
  number: 355,
},{
  names: {
    de: "zwirrklop",
    en: "dusclops",
    fr: "téraclope",
    ja: "サマヨール",
    zh: "彷徨夜灵",
  },
  number: 356,
},{
  names: {
    de: "tropius",
    en: "tropius",
    fr: "tropius",
    ja: "トロピウス",
    zh: "热带龙",
  },
  number: 357,
},{
  names: {
    de: "palimpalim",
    en: "chimecho",
    fr: "éoko",
    ja: "チリーン",
    zh: "风铃铃",
  },
  number: 358,
},{
  names: {
    de: "absol",
    en: "absol",
    fr: "absol",
    ja: "アブソル",
    zh: "阿勃梭鲁",
  },
  number: 359,
},{
  names: {
    de: "isso",
    en: "wynaut",
    fr: "okéoké",
    ja: "ソーナノ",
    zh: "小果然",
  },
  number: 360,
},{
  names: {
    de: "schneppke",
    en: "snorunt",
    fr: "stalgamin",
    ja: "ユキワラシ",
    zh: "雪童子",
  },
  number: 361,
},{
  names: {
    de: "firnontor",
    en: "glalie",
    fr: "oniglali",
    ja: "オニゴーリ",
    zh: "冰鬼护",
  },
  number: 362,
},{
  names: {
    de: "seemops",
    en: "spheal",
    fr: "obalie",
    ja: "タマザラシ",
    zh: "海豹球",
  },
  number: 363,
},{
  names: {
    de: "seejong",
    en: "sealeo",
    fr: "phogleur",
    ja: "トドグラー",
    zh: "海魔狮",
  },
  number: 364,
},{
  names: {
    de: "walraisa",
    en: "walrein",
    fr: "kaimorse",
    ja: "トドゼルガ",
    zh: "帝牙海狮",
  },
  number: 365,
},{
  names: {
    de: "perlu",
    en: "clamperl",
    fr: "coquiperl",
    ja: "パールル",
    zh: "珍珠贝",
  },
  number: 366,
},{
  names: {
    de: "aalabyss",
    en: "huntail",
    fr: "serpang",
    ja: "ハンテール",
    zh: "猎斑鱼",
  },
  number: 367,
},{
  names: {
    de: "saganabyss",
    en: "gorebyss",
    fr: "rosabyss",
    ja: "サクラビス",
    zh: "樱花鱼",
  },
  number: 368,
},{
  names: {
    de: "relicanth",
    en: "relicanth",
    fr: "relicanth",
    ja: "ジーランス",
    zh: "古空棘鱼",
  },
  number: 369,
},{
  names: {
    de: "liebiskus",
    en: "luvdisc",
    fr: "lovdisc",
    ja: "ラブカス",
    zh: "爱心鱼",
  },
  number: 370,
},{
  names: {
    de: "kindwurm",
    en: "bagon",
    fr: "draby",
    ja: "タツベイ",
    zh: "宝贝龙",
  },
  number: 371,
},{
  names: {
    de: "draschel",
    en: "shelgon",
    fr: "drackhaus",
    ja: "コモルー",
    zh: "甲壳龙",
  },
  number: 372,
},{
  names: {
    de: "brutalanda",
    en: "salamence",
    fr: "drattak",
    ja: "ボーマンダ",
    zh: "暴飞龙",
  },
  number: 373,
},{
  names: {
    de: "tanhel",
    en: "beldum",
    fr: "terhal",
    ja: "ダンバル",
    zh: "铁哑铃",
  },
  number: 374,
},{
  names: {
    de: "metang",
    en: "metang",
    fr: "métang",
    ja: "メタング",
    zh: "金属怪",
  },
  number: 375,
},{
  names: {
    de: "metagross",
    en: "metagross",
    fr: "métalosse",
    ja: "メタグロス",
    zh: "巨金怪",
  },
  number: 376,
},{
  names: {
    de: "regirock",
    en: "regirock",
    fr: "regirock",
    ja: "レジロック",
    zh: "雷吉洛克",
  },
  number: 377,
},{
  names: {
    de: "regice",
    en: "regice",
    fr: "regice",
    ja: "レジアイス",
    zh: "雷吉艾斯",
  },
  number: 378,
},{
  names: {
    de: "registeel",
    en: "registeel",
    fr: "registeel",
    ja: "レジスチル",
    zh: "雷吉斯奇鲁",
  },
  number: 379,
},{
  names: {
    de: "latias",
    en: "latias",
    fr: "latias",
    ja: "ラティアス",
    zh: "拉帝亚斯",
  },
  number: 380,
},{
  names: {
    de: "latios",
    en: "latios",
    fr: "latios",
    ja: "ラティオス",
    zh: "拉帝欧斯",
  },
  number: 381,
},{
  names: {
    de: "kyogre",
    en: "kyogre",
    fr: "kyogre",
    ja: "カイオーガ",
    zh: "盖欧卡",
  },
  number: 382,
},{
  names: {
    de: "groudon",
    en: "groudon",
    fr: "groudon",
    ja: "グラードン",
    zh: "固拉多",
  },
  number: 383,
},{
  names: {
    de: "rayquaza",
    en: "rayquaza",
    fr: "rayquaza",
    ja: "レックウザ",
    zh: "烈空坐",
  },
  number: 384,
},{
  names: {
    de: "jirachi",
    en: "jirachi",
    fr: "jirachi",
    ja: "ジラーチ",
    zh: "基拉祈",
  },
  number: 385,
},{
  names: {
    de: "deoxys",
    en: "deoxys",
    fr: "deoxys",
    ja: "デオキシス",
    zh: "代欧奇希斯",
  },
  number: 386,
},{
  names: {
    de: "chelast",
    en: "turtwig",
    fr: "tortipouss",
    ja: "ナエトル",
    zh: "草苗龟",
  },
  number: 387,
},{
  names: {
    de: "chelcarain",
    en: "grotle",
    fr: "boskara",
    ja: "ハヤシガメ",
    zh: "树林龟",
  },
  number: 388,
},{
  names: {
    de: "chelterrar",
    en: "torterra",
    fr: "torterra",
    ja: "ドダイトス",
    zh: "土台龟",
  },
  number: 389,
},{
  names: {
    de: "panflam",
    en: "chimchar",
    fr: "ouisticram",
    ja: "ヒコザル",
    zh: "小火焰猴",
  },
  number: 390,
},{
  names: {
    de: "panpyro",
    en: "monferno",
    fr: "chimpenfeu",
    ja: "モウカザル",
    zh: "猛火猴",
  },
  number: 391,
},{
  names: {
    de: "panferno",
    en: "infernape",
    fr: "simiabraz",
    ja: "ゴウカザル",
    zh: "烈焰猴",
  },
  number: 392,
},{
  names: {
    de: "plinfa",
    en: "piplup",
    fr: "tiplouf",
    ja: "ポッチャマ",
    zh: "波加曼",
  },
  number: 393,
},{
  names: {
    de: "pliprin",
    en: "prinplup",
    fr: "prinplouf",
    ja: "ポッタイシ",
    zh: "波皇子",
  },
  number: 394,
},{
  names: {
    de: "impoleon",
    en: "empoleon",
    fr: "pingoléon",
    ja: "エンペルト",
    zh: "帝王拿波",
  },
  number: 395,
},{
  names: {
    de: "staralili",
    en: "starly",
    fr: "étourmi",
    ja: "ムックル",
    zh: "姆克儿",
  },
  number: 396,
},{
  names: {
    de: "staravia",
    en: "staravia",
    fr: "étourvol",
    ja: "ムクバード",
    zh: "姆克鸟",
  },
  number: 397,
},{
  names: {
    de: "staraptor",
    en: "staraptor",
    fr: "étouraptor",
    ja: "ムクホーク",
    zh: "姆克鹰",
  },
  number: 398,
},{
  names: {
    de: "bidiza",
    en: "bidoof",
    fr: "keunotor",
    ja: "ビッパ",
    zh: "大牙狸",
  },
  number: 399,
},{
  names: {
    de: "bidifas",
    en: "bibarel",
    fr: "castorno",
    ja: "ビーダル",
    zh: "大尾狸",
  },
  number: 400,
},{
  names: {
    de: "zirpurze",
    en: "kricketot",
    fr: "crikzik",
    ja: "コロボーシ",
    zh: "圆法师",
  },
  number: 401,
},{
  names: {
    de: "zirpeise",
    en: "kricketune",
    fr: "mélokrik",
    ja: "コロトック",
    zh: "音箱蟀",
  },
  number: 402,
},{
  names: {
    de: "sheinux",
    en: "shinx",
    fr: "lixy",
    ja: "コリンク",
    zh: "小猫怪",
  },
  number: 403,
},{
  names: {
    de: "luxio",
    en: "luxio",
    fr: "luxio",
    ja: "ルクシオ",
    zh: "勒克猫",
  },
  number: 404,
},{
  names: {
    de: "luxtra",
    en: "luxray",
    fr: "luxray",
    ja: "レントラー",
    zh: "伦琴猫",
  },
  number: 405,
},{
  names: {
    de: "knospi",
    en: "budew",
    fr: "rozbouton",
    ja: "スボミー",
    zh: "含羞苞",
  },
  number: 406,
},{
  names: {
    de: "roserade",
    en: "roserade",
    fr: "roserade",
    ja: "ロズレイド",
    zh: "罗丝雷朵",
  },
  number: 407,
},{
  names: {
    de: "koknodon",
    en: "cranidos",
    fr: "kranidos",
    ja: "ズガイドス",
    zh: "头盖龙",
  },
  number: 408,
},{
  names: {
    de: "rameidon",
    en: "rampardos",
    fr: "charkos",
    ja: "ラムパルド",
    zh: "战槌龙",
  },
  number: 409,
},{
  names: {
    de: "schilterus",
    en: "shieldon",
    fr: "dinoclier",
    ja: "タテトプス",
    zh: "盾甲龙",
  },
  number: 410,
},{
  names: {
    de: "bollterus",
    en: "bastiodon",
    fr: "bastiodon",
    ja: "トリデプス",
    zh: "护城龙",
  },
  number: 411,
},{
  names: {
    de: "burmy",
    en: "burmy",
    fr: "cheniti",
    ja: "ミノムッチ",
    zh: "结草儿",
  },
  number: 412,
},{
  names: {
    de: "burmadame",
    en: "wormadam",
    fr: "cheniselle",
    ja: "ミノマダム",
    zh: "结草贵妇",
  },
  number: 413,
},{
  names: {
    de: "moterpel",
    en: "mothim",
    fr: "papilord",
    ja: "ガーメイル",
    zh: "绅士蛾",
  },
  number: 414,
},{
  names: {
    de: "wadribie",
    en: "combee",
    fr: "apitrini",
    ja: "ミツハニー",
    zh: "三蜜蜂",
  },
  number: 415,
},{
  names: {
    de: "honweisel",
    en: "vespiquen",
    fr: "apireine",
    ja: "ビークイン",
    zh: "蜂女王",
  },
  number: 416,
},{
  names: {
    de: "pachirisu",
    en: "pachirisu",
    fr: "pachirisu",
    ja: "パチリス",
    zh: "帕奇利兹",
  },
  number: 417,
},{
  names: {
    de: "bamelin",
    en: "buizel",
    fr: "mustébouée",
    ja: "ブイゼル",
    zh: "泳圈鼬",
  },
  number: 418,
},{
  names: {
    de: "bojelin",
    en: "floatzel",
    fr: "mustéflott",
    ja: "フローゼル",
    zh: "浮潜鼬",
  },
  number: 419,
},{
  names: {
    de: "kikugi",
    en: "cherubi",
    fr: "ceribou",
    ja: "チェリンボ",
    zh: "樱花宝",
  },
  number: 420,
},{
  names: {
    de: "kinoso",
    en: "cherrim",
    fr: "ceriflor",
    ja: "チェリム",
    zh: "樱花儿",
  },
  number: 421,
},{
  names: {
    de: "schalellos",
    en: "shellos",
    fr: "sancoki",
    ja: "カラナクシ",
    zh: "无壳海兔",
  },
  number: 422,
},{
  names: {
    de: "gastrodon",
    en: "gastrodon",
    fr: "tritosor",
    ja: "トリトドン",
    zh: "海兔兽",
  },
  number: 423,
},{
  names: {
    de: "ambidiffel",
    en: "ambipom",
    fr: "capidextre",
    ja: "エテボース",
    zh: "双尾怪手",
  },
  number: 424,
},{
  names: {
    de: "driftlon",
    en: "drifloon",
    fr: "baudrive",
    ja: "フワンテ",
    zh: "飘飘球",
  },
  number: 425,
},{
  names: {
    de: "drifzepeli",
    en: "drifblim",
    fr: "grodrive",
    ja: "フワライド",
    zh: "随风球",
  },
  number: 426,
},{
  names: {
    de: "haspiror",
    en: "buneary",
    fr: "laporeille",
    ja: "ミミロル",
    zh: "卷卷耳",
  },
  number: 427,
},{
  names: {
    de: "schlapor",
    en: "lopunny",
    fr: "lockpin",
    ja: "ミミロップ",
    zh: "长耳兔",
  },
  number: 428,
},{
  names: {
    de: "traunmagil",
    en: "mismagius",
    fr: "magirêve",
    ja: "ムウマージ",
    zh: "梦妖魔",
  },
  number: 429,
},{
  names: {
    de: "kramshef",
    en: "honchkrow",
    fr: "corboss",
    ja: "ドンカラス",
    zh: "乌鸦头头",
  },
  number: 430,
},{
  names: {
    de: "charmian",
    en: "glameow",
    fr: "chaglam",
    ja: "ニャルマー",
    zh: "魅力喵",
  },
  number: 431,
},{
  names: {
    de: "shnurgarst",
    en: "purugly",
    fr: "chaffreux",
    ja: "ブニャット",
    zh: "东施喵",
  },
  number: 432,
},{
  names: {
    de: "klingplim",
    en: "chingling",
    fr: "korillon",
    ja: "リーシャン",
    zh: "铃铛响",
  },
  number: 433,
},{
  names: {
    de: "skunkapuh",
    en: "stunky",
    fr: "moufouette",
    ja: "スカンプー",
    zh: "臭鼬噗",
  },
  number: 434,
},{
  names: {
    de: "skuntank",
    en: "skuntank",
    fr: "moufflair",
    ja: "スカタンク",
    zh: "坦克臭鼬",
  },
  number: 435,
},{
  names: {
    de: "bronzel",
    en: "bronzor",
    fr: "archéomire",
    ja: "ドーミラー",
    zh: "铜镜怪",
  },
  number: 436,
},{
  names: {
    de: "bronzong",
    en: "bronzong",
    fr: "archéodong",
    ja: "ドータクン",
    zh: "青铜钟",
  },
  number: 437,
},{
  names: {
    de: "mobai",
    en: "bonsly",
    fr: "manzaï",
    ja: "ウソハチ",
    zh: "盆才怪",
  },
  number: 438,
},{
  names: {
    de: "pantimimi",
    en: "mime jr.",
    fr: "mime jr.",
    ja: "マネネ",
    zh: "魔尼尼",
  },
  number: 439,
},{
  names: {
    de: "wonneira",
    en: "happiny",
    fr: "ptiravi",
    ja: "ピンプク",
    zh: "小福蛋",
  },
  number: 440,
},{
  names: {
    de: "plaudagei",
    en: "chatot",
    fr: "pijako",
    ja: "ペラップ",
    zh: "聒噪鸟",
  },
  number: 441,
},{
  names: {
    de: "kryppuk",
    en: "spiritomb",
    fr: "spiritomb",
    ja: "ミカルゲ",
    zh: "花岩怪",
  },
  number: 442,
},{
  names: {
    de: "kaumalat",
    en: "gible",
    fr: "griknot",
    ja: "フカマル",
    zh: "圆陆鲨",
  },
  number: 443,
},{
  names: {
    de: "knarksel",
    en: "gabite",
    fr: "carmache",
    ja: "ガバイト",
    zh: "尖牙陆鲨",
  },
  number: 444,
},{
  names: {
    de: "knakrack",
    en: "garchomp",
    fr: "carchacrok",
    ja: "ガブリアス",
    zh: "烈咬陆鲨",
  },
  number: 445,
},{
  names: {
    de: "mampfaxo",
    en: "munchlax",
    fr: "goinfrex",
    ja: "ゴンベ",
    zh: "小卡比兽",
  },
  number: 446,
},{
  names: {
    de: "riolu",
    en: "riolu",
    fr: "riolu",
    ja: "リオル",
    zh: "利欧路",
  },
  number: 447,
},{
  names: {
    de: "lucario",
    en: "lucario",
    fr: "lucario",
    ja: "ルカリオ",
    zh: "路卡利欧",
  },
  number: 448,
},{
  names: {
    de: "hippopotas",
    en: "hippopotas",
    fr: "hippopotas",
    ja: "ヒポポタス",
    zh: "沙河马",
  },
  number: 449,
},{
  names: {
    de: "hippoterus",
    en: "hippowdon",
    fr: "hippodocus",
    ja: "カバルドン",
    zh: "河马兽",
  },
  number: 450,
},{
  names: {
    de: "pionskora",
    en: "skorupi",
    fr: "rapion",
    ja: "スコルピ",
    zh: "钳尾蝎",
  },
  number: 451,
},{
  names: {
    de: "piondragi",
    en: "drapion",
    fr: "drascore",
    ja: "ドラピオン",
    zh: "龙王蝎",
  },
  number: 452,
},{
  names: {
    de: "glibunkel",
    en: "croagunk",
    fr: "cradopaud",
    ja: "グレッグル",
    zh: "不良蛙",
  },
  number: 453,
},{
  names: {
    de: "toxiquak",
    en: "toxicroak",
    fr: "coatox",
    ja: "ドクロッグ",
    zh: "毒骷蛙",
  },
  number: 454,
},{
  names: {
    de: "venuflibis",
    en: "carnivine",
    fr: "vortente",
    ja: "マスキッパ",
    zh: "尖牙笼",
  },
  number: 455,
},{
  names: {
    de: "finneon",
    en: "finneon",
    fr: "écayon",
    ja: "ケイコウオ",
    zh: "荧光鱼",
  },
  number: 456,
},{
  names: {
    de: "lumineon",
    en: "lumineon",
    fr: "luminéon",
    ja: "ネオラント",
    zh: "霓虹鱼",
  },
  number: 457,
},{
  names: {
    de: "mantirps",
    en: "mantyke",
    fr: "babimanta",
    ja: "タマンタ",
    zh: "小球飞鱼",
  },
  number: 458,
},{
  names: {
    de: "shnebedeck",
    en: "snover",
    fr: "blizzi",
    ja: "ユキカブリ",
    zh: "雪笠怪",
  },
  number: 459,
},{
  names: {
    de: "rexblisar",
    en: "abomasnow",
    fr: "blizzaroi",
    ja: "ユキノオー",
    zh: "暴雪王",
  },
  number: 460,
},{
  names: {
    de: "snibunna",
    en: "weavile",
    fr: "dimoret",
    ja: "マニューラ",
    zh: "玛狃拉",
  },
  number: 461,
},{
  names: {
    de: "magnezone",
    en: "magnezone",
    fr: "magnézone",
    ja: "ジバコイル",
    zh: "自爆磁怪",
  },
  number: 462,
},{
  names: {
    de: "schlurplek",
    en: "lickilicky",
    fr: "coudlangue",
    ja: "ベロベルト",
    zh: "大舌舔",
  },
  number: 463,
},{
  names: {
    de: "rihornior",
    en: "rhyperior",
    fr: "rhinastoc",
    ja: "ドサイドン",
    zh: "超甲狂犀",
  },
  number: 464,
},{
  names: {
    de: "tangoloss",
    en: "tangrowth",
    fr: "bouldeneu",
    ja: "モジャンボ",
    zh: "巨蔓藤",
  },
  number: 465,
},{
  names: {
    de: "elevoltek",
    en: "electivire",
    fr: "élekable",
    ja: "エレキブル",
    zh: "电击魔兽",
  },
  number: 466,
},{
  names: {
    de: "magbrant",
    en: "magmortar",
    fr: "maganon",
    ja: "ブーバーン",
    zh: "鸭嘴炎兽",
  },
  number: 467,
},{
  names: {
    de: "togekiss",
    en: "togekiss",
    fr: "togekiss",
    ja: "トゲキッス",
    zh: "波克基斯",
  },
  number: 468,
},{
  names: {
    de: "yanmega",
    en: "yanmega",
    fr: "yanmega",
    ja: "メガヤンマ",
    zh: "远古巨蜓",
  },
  number: 469,
},{
  names: {
    de: "folipurba",
    en: "leafeon",
    fr: "phyllali",
    ja: "リーフィア",
    zh: "叶伊布",
  },
  number: 470,
},{
  names: {
    de: "glaziola",
    en: "glaceon",
    fr: "givrali",
    ja: "グレイシア",
    zh: "冰伊布",
  },
  number: 471,
},{
  names: {
    de: "skorgro",
    en: "gliscor",
    fr: "scorvol",
    ja: "グライオン",
    zh: "天蝎王",
  },
  number: 472,
},{
  names: {
    de: "mamutel",
    en: "mamoswine",
    fr: "mammochon",
    ja: "マンムー",
    zh: "象牙猪",
  },
  number: 473,
},{
  names: {
    de: "porygon-z",
    en: "porygon-z",
    fr: "porygon-z",
    ja: "ポリゴンＺ",
    zh: "多边兽乙型",
  },
  number: 474,
},{
  names: {
    de: "galagladi",
    en: "gallade",
    fr: "gallame",
    ja: "エルレイド",
    zh: "艾路雷朵",
  },
  number: 475,
},{
  names: {
    de: "voluminas",
    en: "probopass",
    fr: "tarinorme",
    ja: "ダイノーズ",
    zh: "大朝北鼻",
  },
  number: 476,
},{
  names: {
    de: "zwirrfinst",
    en: "dusknoir",
    fr: "noctunoir",
    ja: "ヨノワール",
    zh: "黑夜魔灵",
  },
  number: 477,
},{
  names: {
    de: "frosdedje",
    en: "froslass",
    fr: "momartik",
    ja: "ユキメノコ",
    zh: "雪妖女",
  },
  number: 478,
},{
  names: {
    de: "rotom",
    en: "rotom",
    fr: "motisma",
    ja: "ロトム",
    zh: "洛托姆",
  },
  number: 479,
},{
  names: {
    de: "selfe",
    en: "uxie",
    fr: "créhelf",
    ja: "ユクシー",
    zh: "由克希",
  },
  number: 480,
},{
  names: {
    de: "vesprit",
    en: "mesprit",
    fr: "créfollet",
    ja: "エムリット",
    zh: "艾姆利多",
  },
  number: 481,
},{
  names: {
    de: "tobutz",
    en: "azelf",
    fr: "créfadet",
    ja: "アグノム",
    zh: "亚克诺姆",
  },
  number: 482,
},{
  names: {
    de: "dialga",
    en: "dialga",
    fr: "dialga",
    ja: "ディアルガ",
    zh: "帝牙卢卡",
  },
  number: 483,
},{
  names: {
    de: "palkia",
    en: "palkia",
    fr: "palkia",
    ja: "パルキア",
    zh: "帕路奇亚",
  },
  number: 484,
},{
  names: {
    de: "heatran",
    en: "heatran",
    fr: "heatran",
    ja: "ヒードラン",
    zh: "席多蓝恩",
  },
  number: 485,
},{
  names: {
    de: "regigigas",
    en: "regigigas",
    fr: "regigigas",
    ja: "レジギガス",
    zh: "雷吉奇卡斯",
  },
  number: 486,
},{
  names: {
    de: "giratina",
    en: "giratina",
    fr: "giratina",
    ja: "ギラティナ",
    zh: "骑拉帝纳",
  },
  number: 487,
},{
  names: {
    de: "cresselia",
    en: "cresselia",
    fr: "cresselia",
    ja: "クレセリア",
    zh: "克雷色利亚",
  },
  number: 488,
},{
  names: {
    de: "phione",
    en: "phione",
    fr: "phione",
    ja: "フィオネ",
    zh: "霏欧纳",
  },
  number: 489,
},{
  names: {
    de: "manaphy",
    en: "manaphy",
    fr: "manaphy",
    ja: "マナフィ",
    zh: "玛纳霏",
  },
  number: 490,
},{
  names: {
    de: "darkrai",
    en: "darkrai",
    fr: "darkrai",
    ja: "ダークライ",
    zh: "达克莱伊",
  },
  number: 491,
},{
  names: {
    de: "shaymin",
    en: "shaymin",
    fr: "shaymin",
    ja: "シェイミ",
    zh: "谢米",
  },
  number: 492,
},{
  names: {
    de: "arceus",
    en: "arceus",
    fr: "arceus",
    ja: "アルセウス",
    zh: "阿尔宙斯",
  },
  number: 493,
},{
  names: {
    de: "victini",
    en: "victini",
    fr: "victini",
    ja: "ビクティニ",
    zh: "比克提尼",
  },
  number: 494,
},{
  names: {
    de: "serpifeu",
    en: "snivy",
    fr: "vipélierre",
    ja: "ツタージャ",
    zh: "藤藤蛇",
  },
  number: 495,
},{
  names: {
    de: "efoserp",
    en: "servine",
    fr: "lianaja",
    ja: "ジャノビー",
    zh: "青藤蛇",
  },
  number: 496,
},{
  names: {
    de: "serpiroyal",
    en: "serperior",
    fr: "majaspic",
    ja: "ジャローダ",
    zh: "君主蛇",
  },
  number: 497,
},{
  names: {
    de: "floink",
    en: "tepig",
    fr: "gruikui",
    ja: "ポカブ",
    zh: "暖暖猪",
  },
  number: 498,
},{
  names: {
    de: "ferkokel",
    en: "pignite",
    fr: "grotichon",
    ja: "チャオブー",
    zh: "炒炒猪",
  },
  number: 499,
},{
  names: {
    de: "flambirex",
    en: "emboar",
    fr: "roitiflam",
    ja: "エンブオー",
    zh: "炎武王",
  },
  number: 500,
},{
  names: {
    de: "ottaro",
    en: "oshawott",
    fr: "moustillon",
    ja: "ミジュマル",
    zh: "水水獭",
  },
  number: 501,
},{
  names: {
    de: "zwottronin",
    en: "dewott",
    fr: "mateloutre",
    ja: "フタチマル",
    zh: "双刃丸",
  },
  number: 502,
},{
  names: {
    de: "admurai",
    en: "samurott",
    fr: "clamiral",
    ja: "ダイケンキ",
    zh: "大剑鬼",
  },
  number: 503,
},{
  names: {
    de: "nagelotz",
    en: "patrat",
    fr: "ratentif",
    ja: "ミネズミ",
    zh: "探探鼠",
  },
  number: 504,
},{
  names: {
    de: "kukmarda",
    en: "watchog",
    fr: "miradar",
    ja: "ミルホッグ",
    zh: "步哨鼠",
  },
  number: 505,
},{
  names: {
    de: "yorkleff",
    en: "lillipup",
    fr: "ponchiot",
    ja: "ヨーテリー",
    zh: "小约克",
  },
  number: 506,
},{
  names: {
    de: "terribark",
    en: "herdier",
    fr: "ponchien",
    ja: "ハーデリア",
    zh: "哈约克",
  },
  number: 507,
},{
  names: {
    de: "bissbark",
    en: "stoutland",
    fr: "mastouffe",
    ja: "ムーランド",
    zh: "长毛狗",
  },
  number: 508,
},{
  names: {
    de: "felilou",
    en: "purrloin",
    fr: "chacripan",
    ja: "チョロネコ",
    zh: "扒手猫",
  },
  number: 509,
},{
  names: {
    de: "kleoparda",
    en: "liepard",
    fr: "léopardus",
    ja: "レパルダス",
    zh: "酷豹",
  },
  number: 510,
},{
  names: {
    de: "vegimak",
    en: "pansage",
    fr: "feuillajou",
    ja: "ヤナップ",
    zh: "花椰猴",
  },
  number: 511,
},{
  names: {
    de: "vegichita",
    en: "simisage",
    fr: "feuiloutan",
    ja: "ヤナッキー",
    zh: "花椰猿",
  },
  number: 512,
},{
  names: {
    de: "grillmak",
    en: "pansear",
    fr: "flamajou",
    ja: "バオップ",
    zh: "爆香猴",
  },
  number: 513,
},{
  names: {
    de: "grillchita",
    en: "simisear",
    fr: "flamoutan",
    ja: "バオッキー",
    zh: "爆香猿",
  },
  number: 514,
},{
  names: {
    de: "sodamak",
    en: "panpour",
    fr: "flotajou",
    ja: "ヒヤップ",
    zh: "冷水猴",
  },
  number: 515,
},{
  names: {
    de: "sodachita",
    en: "simipour",
    fr: "flotoutan",
    ja: "ヒヤッキー",
    zh: "冷水猿",
  },
  number: 516,
},{
  names: {
    de: "somniam",
    en: "munna",
    fr: "munna",
    ja: "ムンナ",
    zh: "食梦梦",
  },
  number: 517,
},{
  names: {
    de: "somnivora",
    en: "musharna",
    fr: "mushana",
    ja: "ムシャーナ",
    zh: "梦梦蚀",
  },
  number: 518,
},{
  names: {
    de: "dusselgurr",
    en: "pidove",
    fr: "poichigeon",
    ja: "マメパト",
    zh: "豆豆鸽",
  },
  number: 519,
},{
  names: {
    de: "navitaub",
    en: "tranquill",
    fr: "colombeau",
    ja: "ハトーボー",
    zh: "咕咕鸽",
  },
  number: 520,
},{
  names: {
    de: "fasasnob",
    en: "unfezant",
    fr: "déflaisan",
    ja: "ケンホロウ",
    zh: "高傲雉鸡",
  },
  number: 521,
},{
  names: {
    de: "elezeba",
    en: "blitzle",
    fr: "zébibron",
    ja: "シママ",
    zh: "斑斑马",
  },
  number: 522,
},{
  names: {
    de: "zebritz",
    en: "zebstrika",
    fr: "zéblitz",
    ja: "ゼブライカ",
    zh: "雷电斑马",
  },
  number: 523,
},{
  names: {
    de: "kiesling",
    en: "roggenrola",
    fr: "nodulithe",
    ja: "ダンゴロ",
    zh: "石丸子",
  },
  number: 524,
},{
  names: {
    de: "sedimantur",
    en: "boldore",
    fr: "géolithe",
    ja: "ガントル",
    zh: "地幔岩",
  },
  number: 525,
},{
  names: {
    de: "brockoloss",
    en: "gigalith",
    fr: "gigalithe",
    ja: "ギガイアス",
    zh: "庞岩怪",
  },
  number: 526,
},{
  names: {
    de: "fleknoil",
    en: "woobat",
    fr: "chovsourir",
    ja: "コロモリ",
    zh: "滚滚蝙蝠",
  },
  number: 527,
},{
  names: {
    de: "fletiamo",
    en: "swoobat",
    fr: "rhinolove",
    ja: "ココロモリ",
    zh: "心蝙蝠",
  },
  number: 528,
},{
  names: {
    de: "rotomurf",
    en: "drilbur",
    fr: "rototaupe",
    ja: "モグリュー",
    zh: "螺钉地鼠",
  },
  number: 529,
},{
  names: {
    de: "stalobor",
    en: "excadrill",
    fr: "minotaupe",
    ja: "ドリュウズ",
    zh: "龙头地鼠",
  },
  number: 530,
},{
  names: {
    de: "ohrdoch",
    en: "audino",
    fr: "nanméouïe",
    ja: "タブンネ",
    zh: "差不多娃娃",
  },
  number: 531,
},{
  names: {
    de: "praktibalk",
    en: "timburr",
    fr: "charpenti",
    ja: "ドッコラー",
    zh: "搬运小匠",
  },
  number: 532,
},{
  names: {
    de: "strepoli",
    en: "gurdurr",
    fr: "ouvrifier",
    ja: "ドテッコツ",
    zh: "铁骨土人",
  },
  number: 533,
},{
  names: {
    de: "meistagrif",
    en: "conkeldurr",
    fr: "bétochef",
    ja: "ローブシン",
    zh: "修建老匠",
  },
  number: 534,
},{
  names: {
    de: "schallquap",
    en: "tympole",
    fr: "tritonde",
    ja: "オタマロ",
    zh: "圆蝌蚪",
  },
  number: 535,
},{
  names: {
    de: "mebrana",
    en: "palpitoad",
    fr: "batracné",
    ja: "ガマガル",
    zh: "蓝蟾蜍",
  },
  number: 536,
},{
  names: {
    de: "branawarz",
    en: "seismitoad",
    fr: "crapustule",
    ja: "ガマゲロゲ",
    zh: "蟾蜍王",
  },
  number: 537,
},{
  names: {
    de: "jiutesto",
    en: "throh",
    fr: "judokrak",
    ja: "ナゲキ",
    zh: "投摔鬼",
  },
  number: 538,
},{
  names: {
    de: "karadonis",
    en: "sawk",
    fr: "karaclée",
    ja: "ダゲキ",
    zh: "打击鬼",
  },
  number: 539,
},{
  names: {
    de: "strawickl",
    en: "sewaddle",
    fr: "larveyette",
    ja: "クルミル",
    zh: "虫宝包",
  },
  number: 540,
},{
  names: {
    de: "folikon",
    en: "swadloon",
    fr: "couverdure",
    ja: "クルマユ",
    zh: "宝包茧",
  },
  number: 541,
},{
  names: {
    de: "matrifol",
    en: "leavanny",
    fr: "manternel",
    ja: "ハハコモリ",
    zh: "保姆虫",
  },
  number: 542,
},{
  names: {
    de: "toxiped",
    en: "venipede",
    fr: "venipatte",
    ja: "フシデ",
    zh: "百足蜈蚣",
  },
  number: 543,
},{
  names: {
    de: "rollum",
    en: "whirlipede",
    fr: "scobolide",
    ja: "ホイーガ",
    zh: "车轮球",
  },
  number: 544,
},{
  names: {
    de: "cerapendra",
    en: "scolipede",
    fr: "brutapode",
    ja: "ペンドラー",
    zh: "蜈蚣王",
  },
  number: 545,
},{
  names: {
    de: "waumboll",
    en: "cottonee",
    fr: "doudouvet",
    ja: "モンメン",
    zh: "木棉球",
  },
  number: 546,
},{
  names: {
    de: "elfun",
    en: "whimsicott",
    fr: "farfaduvet",
    ja: "エルフーン",
    zh: "风妖精",
  },
  number: 547,
},{
  names: {
    de: "lilminip",
    en: "petilil",
    fr: "chlorobule",
    ja: "チュリネ",
    zh: "百合根娃娃",
  },
  number: 548,
},{
  names: {
    de: "dressella",
    en: "lilligant",
    fr: "fragilady",
    ja: "ドレディア",
    zh: "裙儿小姐",
  },
  number: 549,
},{
  names: {
    de: "barschuft",
    en: "basculin",
    fr: "bargantua",
    ja: "バスラオ",
    zh: "野蛮鲈鱼",
  },
  number: 550,
},{
  names: {
    de: "ganovil",
    en: "sandile",
    fr: "mascaïman",
    ja: "メグロコ",
    zh: "黑眼鳄",
  },
  number: 551,
},{
  names: {
    de: "rokkaiman",
    en: "krokorok",
    fr: "escroco",
    ja: "ワルビル",
    zh: "混混鳄",
  },
  number: 552,
},{
  names: {
    de: "rabigator",
    en: "krookodile",
    fr: "crocorible",
    ja: "ワルビアル",
    zh: "流氓鳄",
  },
  number: 553,
},{
  names: {
    de: "flampion",
    en: "darumaka",
    fr: "darumarond",
    ja: "ダルマッカ",
    zh: "火红不倒翁",
  },
  number: 554,
},{
  names: {
    de: "flampivian",
    en: "darmanitan",
    fr: "darumacho",
    ja: "ヒヒダルマ",
    zh: "达摩狒狒",
  },
  number: 555,
},{
  names: {
    de: "maracamba",
    en: "maractus",
    fr: "maracachi",
    ja: "マラカッチ",
    zh: "沙铃仙人掌",
  },
  number: 556,
},{
  names: {
    de: "lithomith",
    en: "dwebble",
    fr: "crabicoque",
    ja: "イシズマイ",
    zh: "石居蟹",
  },
  number: 557,
},{
  names: {
    de: "castellith",
    en: "crustle",
    fr: "crabaraque",
    ja: "イワパレス",
    zh: "岩殿居蟹",
  },
  number: 558,
},{
  names: {
    de: "zurrokex",
    en: "scraggy",
    fr: "baggiguane",
    ja: "ズルッグ",
    zh: "滑滑小子",
  },
  number: 559,
},{
  names: {
    de: "irokex",
    en: "scrafty",
    fr: "baggaïd",
    ja: "ズルズキン",
    zh: "头巾混混",
  },
  number: 560,
},{
  names: {
    de: "symvolara",
    en: "sigilyph",
    fr: "cryptéro",
    ja: "シンボラー",
    zh: "象征鸟",
  },
  number: 561,
},{
  names: {
    de: "makabaja",
    en: "yamask",
    fr: "tutafeh",
    ja: "デスマス",
    zh: "哭哭面具",
  },
  number: 562,
},{
  names: {
    de: "echnatoll",
    en: "cofagrigus",
    fr: "tutankafer",
    ja: "デスカーン",
    zh: "迭失棺",
  },
  number: 563,
},{
  names: {
    de: "galapaflos",
    en: "tirtouga",
    fr: "carapagos",
    ja: "プロトーガ",
    zh: "原盖海龟",
  },
  number: 564,
},{
  names: {
    de: "karippas",
    en: "carracosta",
    fr: "mégapagos",
    ja: "アバゴーラ",
    zh: "肋骨海龟",
  },
  number: 565,
},{
  names: {
    de: "flapteryx",
    en: "archen",
    fr: "arkéapti",
    ja: "アーケン",
    zh: "始祖小鸟",
  },
  number: 566,
},{
  names: {
    de: "aeropteryx",
    en: "archeops",
    fr: "aéroptéryx",
    ja: "アーケオス",
    zh: "始祖大鸟",
  },
  number: 567,
},{
  names: {
    de: "unratütox",
    en: "trubbish",
    fr: "miamiasme",
    ja: "ヤブクロン",
    zh: "破破袋",
  },
  number: 568,
},{
  names: {
    de: "deponitox",
    en: "garbodor",
    fr: "miasmax",
    ja: "ダストダス",
    zh: "灰尘山",
  },
  number: 569,
},{
  names: {
    de: "zorua",
    en: "zorua",
    fr: "zorua",
    ja: "ゾロア",
    zh: "索罗亚",
  },
  number: 570,
},{
  names: {
    de: "zoroark",
    en: "zoroark",
    fr: "zoroark",
    ja: "ゾロアーク",
    zh: "索罗亚克",
  },
  number: 571,
},{
  names: {
    de: "picochilla",
    en: "minccino",
    fr: "chinchidou",
    ja: "チラーミィ",
    zh: "泡沫栗鼠",
  },
  number: 572,
},{
  names: {
    de: "chillabell",
    en: "cinccino",
    fr: "pashmilla",
    ja: "チラチーノ",
    zh: "奇诺栗鼠",
  },
  number: 573,
},{
  names: {
    de: "mollimorba",
    en: "gothita",
    fr: "scrutella",
    ja: "ゴチム",
    zh: "哥德宝宝",
  },
  number: 574,
},{
  names: {
    de: "hypnomorba",
    en: "gothorita",
    fr: "mesmérella",
    ja: "ゴチミル",
    zh: "哥德小童",
  },
  number: 575,
},{
  names: {
    de: "morbitesse",
    en: "gothitelle",
    fr: "sidérella",
    ja: "ゴチルゼル",
    zh: "哥德小姐",
  },
  number: 576,
},{
  names: {
    de: "monozyto",
    en: "solosis",
    fr: "nucléos",
    ja: "ユニラン",
    zh: "单卵细胞球",
  },
  number: 577,
},{
  names: {
    de: "mitodos",
    en: "duosion",
    fr: "méios",
    ja: "ダブラン",
    zh: "双卵细胞球",
  },
  number: 578,
},{
  names: {
    de: "zytomega",
    en: "reuniclus",
    fr: "symbios",
    ja: "ランクルス",
    zh: "人造细胞卵",
  },
  number: 579,
},{
  names: {
    de: "piccolente",
    en: "ducklett",
    fr: "couaneton",
    ja: "コアルヒー",
    zh: "鸭宝宝",
  },
  number: 580,
},{
  names: {
    de: "swaroness",
    en: "swanna",
    fr: "lakmécygne",
    ja: "スワンナ",
    zh: "舞天鹅",
  },
  number: 581,
},{
  names: {
    de: "gelatini",
    en: "vanillite",
    fr: "sorbébé",
    ja: "バニプッチ",
    zh: "迷你冰",
  },
  number: 582,
},{
  names: {
    de: "gelatroppo",
    en: "vanillish",
    fr: "sorboul",
    ja: "バニリッチ",
    zh: "多多冰",
  },
  number: 583,
},{
  names: {
    de: "gelatwino",
    en: "vanilluxe",
    fr: "sorbouboul",
    ja: "バイバニラ",
    zh: "双倍多多冰",
  },
  number: 584,
},{
  names: {
    de: "sesokitz",
    en: "deerling",
    fr: "vivaldaim",
    ja: "シキジカ",
    zh: "四季鹿",
  },
  number: 585,
},{
  names: {
    de: "kronjuwild",
    en: "sawsbuck",
    fr: "haydaim",
    ja: "メブキジカ",
    zh: "萌芽鹿",
  },
  number: 586,
},{
  names: {
    de: "emolga",
    en: "emolga",
    fr: "emolga",
    ja: "エモンガ",
    zh: "电飞鼠",
  },
  number: 587,
},{
  names: {
    de: "laukaps",
    en: "karrablast",
    fr: "carabing",
    ja: "カブルモ",
    zh: "盖盖虫",
  },
  number: 588,
},{
  names: {
    de: "cavalanzas",
    en: "escavalier",
    fr: "lançargot",
    ja: "シュバルゴ",
    zh: "骑士蜗牛",
  },
  number: 589,
},{
  names: {
    de: "tarnpignon",
    en: "foongus",
    fr: "trompignon",
    ja: "タマゲタケ",
    zh: "哎呀球菇",
  },
  number: 590,
},{
  names: {
    de: "hutsassa",
    en: "amoonguss",
    fr: "gaulet",
    ja: "モロバレル",
    zh: "败露球菇",
  },
  number: 591,
},{
  names: {
    de: "quabbel",
    en: "frillish",
    fr: "viskuse",
    ja: "プルリル",
    zh: "轻飘飘",
  },
  number: 592,
},{
  names: {
    de: "apoquallyp",
    en: "jellicent",
    fr: "moyade",
    ja: "ブルンゲル",
    zh: "胖嘟嘟",
  },
  number: 593,
},{
  names: {
    de: "mamolida",
    en: "alomomola",
    fr: "mamanbo",
    ja: "ママンボウ",
    zh: "保姆曼波",
  },
  number: 594,
},{
  names: {
    de: "wattzapf",
    en: "joltik",
    fr: "statitik",
    ja: "バチュル",
    zh: "电电虫",
  },
  number: 595,
},{
  names: {
    de: "voltula",
    en: "galvantula",
    fr: "mygavolt",
    ja: "デンチュラ",
    zh: "电蜘蛛",
  },
  number: 596,
},{
  names: {
    de: "kastadur",
    en: "ferroseed",
    fr: "grindur",
    ja: "テッシード",
    zh: "种子铁球",
  },
  number: 597,
},{
  names: {
    de: "tentantel",
    en: "ferrothorn",
    fr: "noacier",
    ja: "ナットレイ",
    zh: "坚果哑铃",
  },
  number: 598,
},{
  names: {
    de: "klikk",
    en: "klink",
    fr: "tic",
    ja: "ギアル",
    zh: "齿轮儿",
  },
  number: 599,
},{
  names: {
    de: "kliklak",
    en: "klang",
    fr: "clic",
    ja: "ギギアル",
    zh: "齿轮组",
  },
  number: 600,
},{
  names: {
    de: "klikdiklak",
    en: "klinklang",
    fr: "cliticlic",
    ja: "ギギギアル",
    zh: "齿轮怪",
  },
  number: 601,
},{
  names: {
    de: "zapplardin",
    en: "tynamo",
    fr: "anchwatt",
    ja: "シビシラス",
    zh: "麻麻小鱼",
  },
  number: 602,
},{
  names: {
    de: "zapplalek",
    en: "eelektrik",
    fr: "lampéroie",
    ja: "シビビール",
    zh: "麻麻鳗",
  },
  number: 603,
},{
  names: {
    de: "zapplarang",
    en: "eelektross",
    fr: "ohmassacre",
    ja: "シビルドン",
    zh: "麻麻鳗鱼王",
  },
  number: 604,
},{
  names: {
    de: "pygraulon",
    en: "elgyem",
    fr: "lewsor",
    ja: "リグレー",
    zh: "小灰怪",
  },
  number: 605,
},{
  names: {
    de: "megalon",
    en: "beheeyem",
    fr: "neitram",
    ja: "オーベム",
    zh: "大宇怪",
  },
  number: 606,
},{
  names: {
    de: "lichtel",
    en: "litwick",
    fr: "funécire",
    ja: "ヒトモシ",
    zh: "烛光灵",
  },
  number: 607,
},{
  names: {
    de: "laternecto",
    en: "lampent",
    fr: "mélancolux",
    ja: "ランプラー",
    zh: "灯火幽灵",
  },
  number: 608,
},{
  names: {
    de: "skelabra",
    en: "chandelure",
    fr: "lugulabre",
    ja: "シャンデラ",
    zh: "水晶灯火灵",
  },
  number: 609,
},{
  names: {
    de: "milza",
    en: "axew",
    fr: "coupenotte",
    ja: "キバゴ",
    zh: "牙牙",
  },
  number: 610,
},{
  names: {
    de: "sharfax",
    en: "fraxure",
    fr: "incisache",
    ja: "オノンド",
    zh: "斧牙龙",
  },
  number: 611,
},{
  names: {
    de: "maxax",
    en: "haxorus",
    fr: "tranchodon",
    ja: "オノノクス",
    zh: "双斧战龙",
  },
  number: 612,
},{
  names: {
    de: "petznief",
    en: "cubchoo",
    fr: "polarhume",
    ja: "クマシュン",
    zh: "喷嚏熊",
  },
  number: 613,
},{
  names: {
    de: "siberio",
    en: "beartic",
    fr: "polagriffe",
    ja: "ツンベアー",
    zh: "冻原熊",
  },
  number: 614,
},{
  names: {
    de: "frigometri",
    en: "cryogonal",
    fr: "hexagel",
    ja: "フリージオ",
    zh: "几何雪花",
  },
  number: 615,
},{
  names: {
    de: "schnuthelm",
    en: "shelmet",
    fr: "escargaume",
    ja: "チョボマキ",
    zh: "小嘴蜗",
  },
  number: 616,
},{
  names: {
    de: "hydragil",
    en: "accelgor",
    fr: "limaspeed",
    ja: "アギルダー",
    zh: "敏捷虫",
  },
  number: 617,
},{
  names: {
    de: "flunschlik",
    en: "stunfisk",
    fr: "limonde",
    ja: "マッギョ",
    zh: "泥巴鱼",
  },
  number: 618,
},{
  names: {
    de: "lin-fu",
    en: "mienfoo",
    fr: "kungfouine",
    ja: "コジョフー",
    zh: "功夫鼬",
  },
  number: 619,
},{
  names: {
    de: "wie-shu",
    en: "mienshao",
    fr: "shaofouine",
    ja: "コジョンド",
    zh: "师父鼬",
  },
  number: 620,
},{
  names: {
    de: "shardrago",
    en: "druddigon",
    fr: "drakkarmin",
    ja: "クリムガン",
    zh: "赤面龙",
  },
  number: 621,
},{
  names: {
    de: "golbit",
    en: "golett",
    fr: "gringolem",
    ja: "ゴビット",
    zh: "泥偶小人",
  },
  number: 622,
},{
  names: {
    de: "golgantes",
    en: "golurk",
    fr: "golemastoc",
    ja: "ゴルーグ",
    zh: "泥偶巨人",
  },
  number: 623,
},{
  names: {
    de: "gladiantri",
    en: "pawniard",
    fr: "scalpion",
    ja: "コマタナ",
    zh: "驹刀小兵",
  },
  number: 624,
},{
  names: {
    de: "caesurio",
    en: "bisharp",
    fr: "scalproie",
    ja: "キリキザン",
    zh: "劈斩司令",
  },
  number: 625,
},{
  names: {
    de: "bisofank",
    en: "bouffalant",
    fr: "frison",
    ja: "バッフロン",
    zh: "爆炸头水牛",
  },
  number: 626,
},{
  names: {
    de: "geronimatz",
    en: "rufflet",
    fr: "furaiglon",
    ja: "ワシボン",
    zh: "毛头小鹰",
  },
  number: 627,
},{
  names: {
    de: "washakwil",
    en: "braviary",
    fr: "gueriaigle",
    ja: "ウォーグル",
    zh: "勇士雄鹰",
  },
  number: 628,
},{
  names: {
    de: "skallyk",
    en: "vullaby",
    fr: "vostourno",
    ja: "バルチャイ",
    zh: "秃鹰丫头",
  },
  number: 629,
},{
  names: {
    de: "grypheldis",
    en: "mandibuzz",
    fr: "vaututrice",
    ja: "バルジーナ",
    zh: "秃鹰娜",
  },
  number: 630,
},{
  names: {
    de: "furnifraß",
    en: "heatmor",
    fr: "aflamanoir",
    ja: "クイタラン",
    zh: "熔蚁兽",
  },
  number: 631,
},{
  names: {
    de: "fermicula",
    en: "durant",
    fr: "fermite",
    ja: "アイアント",
    zh: "铁蚁",
  },
  number: 632,
},{
  names: {
    de: "kapuno",
    en: "deino",
    fr: "solochi",
    ja: "モノズ",
    zh: "单首龙",
  },
  number: 633,
},{
  names: {
    de: "duodino",
    en: "zweilous",
    fr: "diamat",
    ja: "ジヘッド",
    zh: "双首暴龙",
  },
  number: 634,
},{
  names: {
    de: "trikephalo",
    en: "hydreigon",
    fr: "trioxhydre",
    ja: "サザンドラ",
    zh: "三首恶龙",
  },
  number: 635,
},{
  names: {
    de: "ignivor",
    en: "larvesta",
    fr: "pyronille",
    ja: "メラルバ",
    zh: "燃烧虫",
  },
  number: 636,
},{
  names: {
    de: "ramoth",
    en: "volcarona",
    fr: "pyrax",
    ja: "ウルガモス",
    zh: "火神蛾",
  },
  number: 637,
},{
  names: {
    de: "kobalium",
    en: "cobalion",
    fr: "cobaltium",
    ja: "コバルオン",
    zh: "勾帕路翁",
  },
  number: 638,
},{
  names: {
    de: "terrakium",
    en: "terrakion",
    fr: "terrakium",
    ja: "テラキオン",
    zh: "代拉基翁",
  },
  number: 639,
},{
  names: {
    de: "viridium",
    en: "virizion",
    fr: "viridium",
    ja: "ビリジオン",
    zh: "毕力吉翁",
  },
  number: 640,
},{
  names: {
    de: "boreos",
    en: "tornadus",
    fr: "boréas",
    ja: "トルネロス",
    zh: "龙卷云",
  },
  number: 641,
},{
  names: {
    de: "voltolos",
    en: "thundurus",
    fr: "fulguris",
    ja: "ボルトロス",
    zh: "雷电云",
  },
  number: 642,
},{
  names: {
    de: "reshiram",
    en: "reshiram",
    fr: "reshiram",
    ja: "レシラム",
    zh: "莱希拉姆",
  },
  number: 643,
},{
  names: {
    de: "zekrom",
    en: "zekrom",
    fr: "zekrom",
    ja: "ゼクロム",
    zh: "捷克罗姆",
  },
  number: 644,
},{
  names: {
    de: "demeteros",
    en: "landorus",
    fr: "démétéros",
    ja: "ランドロス",
    zh: "土地云",
  },
  number: 645,
},{
  names: {
    de: "kyurem",
    en: "kyurem",
    fr: "kyurem",
    ja: "キュレム",
    zh: "酋雷姆",
  },
  number: 646,
},{
  names: {
    de: "keldeo",
    en: "keldeo",
    fr: "keldeo",
    ja: "ケルディオ",
    zh: "凯路迪欧",
  },
  number: 647,
},{
  names: {
    de: "meloetta",
    en: "meloetta",
    fr: "meloetta",
    ja: "メロエッタ",
    zh: "美洛耶塔",
  },
  number: 648,
},{
  names: {
    de: "genesect",
    en: "genesect",
    fr: "genesect",
    ja: "ゲノセクト",
    zh: "盖诺赛克特",
  },
  number: 649,
},{
  names: {
    de: "igamaro",
    en: "chespin",
    fr: "marisson",
    ja: "ハリマロン",
    zh: "哈力栗",
  },
  number: 650,
},{
  names: {
    de: "igastarnish",
    en: "quilladin",
    fr: "boguérisse",
    ja: "ハリボーグ",
    zh: "胖胖哈力",
  },
  number: 651,
},{
  names: {
    de: "brigaron",
    en: "chesnaught",
    fr: "blindépique",
    ja: "ブリガロン",
    zh: "布里卡隆",
  },
  number: 652,
},{
  names: {
    de: "fynx",
    en: "fennekin",
    fr: "feunnec",
    ja: "フォッコ",
    zh: "火狐狸",
  },
  number: 653,
},{
  names: {
    de: "rutena",
    en: "braixen",
    fr: "roussil",
    ja: "テールナー",
    zh: "长尾火狐",
  },
  number: 654,
},{
  names: {
    de: "fennexis",
    en: "delphox",
    fr: "goupelin",
    ja: "マフォクシー",
    zh: "妖火红狐",
  },
  number: 655,
},{
  names: {
    de: "froxy",
    en: "froakie",
    fr: "grenousse",
    ja: "ケロマツ",
    zh: "呱呱泡蛙",
  },
  number: 656,
},{
  names: {
    de: "amphizel",
    en: "frogadier",
    fr: "croâporal",
    ja: "ゲコガシラ",
    zh: "呱头蛙",
  },
  number: 657,
},{
  names: {
    de: "quajutsu",
    en: "greninja",
    fr: "amphinobi",
    ja: "ゲッコウガ",
    zh: "甲贺忍蛙",
  },
  number: 658,
},{
  names: {
    de: "scoppel",
    en: "bunnelby",
    fr: "sapereau",
    ja: "ホルビー",
    zh: "掘掘兔",
  },
  number: 659,
},{
  names: {
    de: "grebbit",
    en: "diggersby",
    fr: "excavarenne",
    ja: "ホルード",
    zh: "掘地兔",
  },
  number: 660,
},{
  names: {
    de: "dartiri",
    en: "fletchling",
    fr: "passerouge",
    ja: "ヤヤコマ",
    zh: "小箭雀",
  },
  number: 661,
},{
  names: {
    de: "dartignis",
    en: "fletchinder",
    fr: "braisillon",
    ja: "ヒノヤコマ",
    zh: "火箭雀",
  },
  number: 662,
},{
  names: {
    de: "fiaro",
    en: "talonflame",
    fr: "flambusard",
    ja: "ファイアロー",
    zh: "烈箭鹰",
  },
  number: 663,
},{
  names: {
    de: "purmel",
    en: "scatterbug",
    fr: "lépidonille",
    ja: "コフキムシ",
    zh: "粉蝶虫",
  },
  number: 664,
},{
  names: {
    de: "puponcho",
    en: "spewpa",
    fr: "pérégrain",
    ja: "コフーライ",
    zh: "粉蝶蛹",
  },
  number: 665,
},{
  names: {
    de: "vivillon",
    en: "vivillon",
    fr: "prismillon",
    ja: "ビビヨン",
    zh: "彩粉蝶",
  },
  number: 666,
},{
  names: {
    de: "leufeo",
    en: "litleo",
    fr: "hélionceau",
    ja: "シシコ",
    zh: "小狮狮",
  },
  number: 667,
},{
  names: {
    de: "pyroleo",
    en: "pyroar",
    fr: "némélios",
    ja: "カエンジシ",
    zh: "火炎狮",
  },
  number: 668,
},{
  names: {
    de: "flabébé",
    en: "flabébé",
    fr: "flabébé",
    ja: "フラベベ",
    zh: "花蓓蓓",
  },
  number: 669,
},{
  names: {
    de: "floette",
    en: "floette",
    fr: "floette",
    ja: "フラエッテ",
    zh: "花叶蒂",
  },
  number: 670,
},{
  names: {
    de: "florges",
    en: "florges",
    fr: "florges",
    ja: "フラージェス",
    zh: "花洁夫人",
  },
  number: 671,
},{
  names: {
    de: "mähikel",
    en: "skiddo",
    fr: "cabriolaine",
    ja: "メェークル",
    zh: "坐骑小羊",
  },
  number: 672,
},{
  names: {
    de: "chevrumm",
    en: "gogoat",
    fr: "chevroum",
    ja: "ゴーゴート",
    zh: "坐骑山羊",
  },
  number: 673,
},{
  names: {
    de: "pam-pam",
    en: "pancham",
    fr: "pandespiègle",
    ja: "ヤンチャム",
    zh: "顽皮熊猫",
  },
  number: 674,
},{
  names: {
    de: "pandagro",
    en: "pangoro",
    fr: "pandarbare",
    ja: "ゴロンダ",
    zh: "霸道熊猫",
  },
  number: 675,
},{
  names: {
    de: "coiffwaff",
    en: "furfrou",
    fr: "couafarel",
    ja: "トリミアン",
    zh: "多丽米亚",
  },
  number: 676,
},{
  names: {
    de: "psiau",
    en: "espurr",
    fr: "psystigri",
    ja: "ニャスパー",
    zh: "妙喵",
  },
  number: 677,
},{
  names: {
    de: "psiaugon",
    en: "meowstic",
    fr: "mistigrix",
    ja: "ニャオニクス",
    zh: "超能妙喵",
  },
  number: 678,
},{
  names: {
    de: "gramokles",
    en: "honedge",
    fr: "monorpale",
    ja: "ヒトツキ",
    zh: "独剑鞘",
  },
  number: 679,
},{
  names: {
    de: "duokles",
    en: "doublade",
    fr: "dimoclès",
    ja: "ニダンギル",
    zh: "双剑鞘",
  },
  number: 680,
},{
  names: {
    de: "durengard",
    en: "aegislash",
    fr: "exagide",
    ja: "ギルガルド",
    zh: "坚盾剑怪",
  },
  number: 681,
},{
  names: {
    de: "parfi",
    en: "spritzee",
    fr: "fluvetin",
    ja: "シュシュプ",
    zh: "粉香香",
  },
  number: 682,
},{
  names: {
    de: "parfinesse",
    en: "aromatisse",
    fr: "cocotine",
    ja: "フレフワン",
    zh: "芳香精",
  },
  number: 683,
},{
  names: {
    de: "flauschling",
    en: "swirlix",
    fr: "sucroquin",
    ja: "ペロッパフ",
    zh: "绵绵泡芙",
  },
  number: 684,
},{
  names: {
    de: "sabbaione",
    en: "slurpuff",
    fr: "cupcanaille",
    ja: "ペロリーム",
    zh: "胖甜妮",
  },
  number: 685,
},{
  names: {
    de: "iscalar",
    en: "inkay",
    fr: "sepiatop",
    ja: "マーイーカ",
    zh: "好啦鱿",
  },
  number: 686,
},{
  names: {
    de: "calamanero",
    en: "malamar",
    fr: "sepiatroce",
    ja: "カラマネロ",
    zh: "乌贼王",
  },
  number: 687,
},{
  names: {
    de: "bithora",
    en: "binacle",
    fr: "opermine",
    ja: "カメテテ",
    zh: "龟脚脚",
  },
  number: 688,
},{
  names: {
    de: "thanathora",
    en: "barbaracle",
    fr: "golgopathe",
    ja: "ガメノデス",
    zh: "龟足巨铠",
  },
  number: 689,
},{
  names: {
    de: "algitt",
    en: "skrelp",
    fr: "venalgue",
    ja: "クズモー",
    zh: "垃垃藻",
  },
  number: 690,
},{
  names: {
    de: "tandrak",
    en: "dragalge",
    fr: "kravarech",
    ja: "ドラミドロ",
    zh: "毒藻龙",
  },
  number: 691,
},{
  names: {
    de: "scampisto",
    en: "clauncher",
    fr: "flingouste",
    ja: "ウデッポウ",
    zh: "铁臂枪虾",
  },
  number: 692,
},{
  names: {
    de: "wummer",
    en: "clawitzer",
    fr: "gamblast",
    ja: "ブロスター",
    zh: "钢炮臂虾",
  },
  number: 693,
},{
  names: {
    de: "eguana",
    en: "helioptile",
    fr: "galvaran",
    ja: "エリキテル",
    zh: "伞电蜥",
  },
  number: 694,
},{
  names: {
    de: "elezard",
    en: "heliolisk",
    fr: "iguolta",
    ja: "エレザード",
    zh: "光电伞蜥",
  },
  number: 695,
},{
  names: {
    de: "balgoras",
    en: "tyrunt",
    fr: "ptyranidur",
    ja: "チゴラス",
    zh: "宝宝暴龙",
  },
  number: 696,
},{
  names: {
    de: "monargoras",
    en: "tyrantrum",
    fr: "rexillius",
    ja: "ガチゴラス",
    zh: "怪颚龙",
  },
  number: 697,
},{
  names: {
    de: "amarino",
    en: "amaura",
    fr: "amagara",
    ja: "アマルス",
    zh: "冰雪龙",
  },
  number: 698,
},{
  names: {
    de: "amagarga",
    en: "aurorus",
    fr: "dragmara",
    ja: "アマルルガ",
    zh: "冰雪巨龙",
  },
  number: 699,
},{
  names: {
    de: "feelinara",
    en: "sylveon",
    fr: "nymphali",
    ja: "ニンフィア",
    zh: "仙子伊布",
  },
  number: 700,
},{
  names: {
    de: "resladero",
    en: "hawlucha",
    fr: "brutalibré",
    ja: "ルチャブル",
    zh: "摔角鹰人",
  },
  number: 701,
},{
  names: {
    de: "dedenne",
    en: "dedenne",
    fr: "dedenne",
    ja: "デデンネ",
    zh: "咚咚鼠",
  },
  number: 702,
},{
  names: {
    de: "rocara",
    en: "carbink",
    fr: "strassie",
    ja: "メレシー",
    zh: "小碎钻",
  },
  number: 703,
},{
  names: {
    de: "viscora",
    en: "goomy",
    fr: "mucuscule",
    ja: "ヌメラ",
    zh: "黏黏宝",
  },
  number: 704,
},{
  names: {
    de: "viscargot",
    en: "sliggoo",
    fr: "colimucus",
    ja: "ヌメイル",
    zh: "黏美儿",
  },
  number: 705,
},{
  names: {
    de: "viscogon",
    en: "goodra",
    fr: "muplodocus",
    ja: "ヌメルゴン",
    zh: "黏美龙",
  },
  number: 706,
},{
  names: {
    de: "clavion",
    en: "klefki",
    fr: "trousselin",
    ja: "クレッフィ",
    zh: "钥圈儿",
  },
  number: 707,
},{
  names: {
    de: "paragoni",
    en: "phantump",
    fr: "brocélôme",
    ja: "ボクレー",
    zh: "小木灵",
  },
  number: 708,
},{
  names: {
    de: "trombork",
    en: "trevenant",
    fr: "desséliande",
    ja: "オーロット",
    zh: "朽木妖",
  },
  number: 709,
},{
  names: {
    de: "irrbis",
    en: "pumpkaboo",
    fr: "pitrouille",
    ja: "バケッチャ",
    zh: "南瓜精",
  },
  number: 710,
},{
  names: {
    de: "pumpdjinn",
    en: "gourgeist",
    fr: "banshitrouye",
    ja: "パンプジン",
    zh: "南瓜怪人",
  },
  number: 711,
},{
  names: {
    de: "arktip",
    en: "bergmite",
    fr: "grelaçon",
    ja: "カチコール",
    zh: "冰宝",
  },
  number: 712,
},{
  names: {
    de: "arktilas",
    en: "avalugg",
    fr: "séracrawl",
    ja: "クレベース",
    zh: "冰岩怪",
  },
  number: 713,
},{
  names: {
    de: "ef-em",
    en: "noibat",
    fr: "sonistrelle",
    ja: "オンバット",
    zh: "嗡蝠",
  },
  number: 714,
},{
  names: {
    de: "uhafnir",
    en: "noivern",
    fr: "bruyverne",
    ja: "オンバーン",
    zh: "音波龙",
  },
  number: 715,
},{
  names: {
    de: "xerneas",
    en: "xerneas",
    fr: "xerneas",
    ja: "ゼルネアス",
    zh: "哲尔尼亚斯",
  },
  number: 716,
},{
  names: {
    de: "yveltal",
    en: "yveltal",
    fr: "yveltal",
    ja: "イベルタル",
    zh: "伊裴尔塔尔",
  },
  number: 717,
},{
  names: {
    de: "zygarde",
    en: "zygarde",
    fr: "zygarde",
    ja: "ジガルデ",
    zh: "基格尔德",
  },
  number: 718,
},{
  names: {
    de: "diancie",
    en: "diancie",
    fr: "diancie",
    ja: "ディアンシー",
    zh: "蒂安希",
  },
  number: 719,
},{
  names: {
    de: "hoopa",
    en: "hoopa",
    fr: "hoopa",
    ja: "フーパ",
    zh: "胡帕",
  },
  number: 720,
},{
  names: {
    de: "volcanion",
    en: "volcanion",
    fr: "volcanion",
    ja: "ボルケニオン",
    zh: "波尔凯尼恩",
  },
  number: 721,
},{
  names: {
    de: "bauz",
    en: "rowlet",
    fr: "brindibou",
    ja: "モクロー",
    zh: "木木枭",
  },
  number: 722,
},{
  names: {
    de: "arboretoss",
    en: "dartrix",
    fr: "efflèche",
    ja: "フクスロー",
    zh: "投羽枭",
  },
  number: 723,
},{
  names: {
    de: "silvarro",
    en: "decidueye",
    fr: "archéduc",
    ja: "ジュナイパー",
    zh: "狙射树枭",
  },
  number: 724,
},{
  names: {
    de: "flamiau",
    en: "litten",
    fr: "flamiaou",
    ja: "ニャビー",
    zh: "火斑喵",
  },
  number: 725,
},{
  names: {
    de: "miezunder",
    en: "torracat",
    fr: "matoufeu",
    ja: "ニャヒート",
    zh: "炎热喵",
  },
  number: 726,
},{
  names: {
    de: "fuegro",
    en: "incineroar",
    fr: "félinferno",
    ja: "ガオガエン",
    zh: "炽焰咆哮虎",
  },
  number: 727,
},{
  names: {
    de: "robball",
    en: "popplio",
    fr: "otaquin",
    ja: "アシマリ",
    zh: "球球海狮",
  },
  number: 728,
},{
  names: {
    de: "marikeck",
    en: "brionne",
    fr: "otarlette",
    ja: "オシャマリ",
    zh: "花漾海狮",
  },
  number: 729,
},{
  names: {
    de: "primarene",
    en: "primarina",
    fr: "oratoria",
    ja: "アシレーヌ",
    zh: "西狮海壬",
  },
  number: 730,
},{
  names: {
    de: "peppeck",
    en: "pikipek",
    fr: "picassaut",
    ja: "ツツケラ",
    zh: "小笃儿",
  },
  number: 731,
},{
  names: {
    de: "trompeck",
    en: "trumbeak",
    fr: "piclairon",
    ja: "ケララッパ",
    zh: "喇叭啄鸟",
  },
  number: 732,
},{
  names: {
    de: "tukanon",
    en: "toucannon",
    fr: "bazoucan",
    ja: "ドデカバシ",
    zh: "铳嘴大鸟",
  },
  number: 733,
},{
  names: {
    de: "mangunior",
    en: "yungoos",
    fr: "manglouton",
    ja: "ヤングース",
    zh: "猫鼬少",
  },
  number: 734,
},{
  names: {
    de: "manguspektor",
    en: "gumshoos",
    fr: "argouste",
    ja: "デカグース",
    zh: "猫鼬探长",
  },
  number: 735,
},{
  names: {
    de: "mabula",
    en: "grubbin",
    fr: "larvibule",
    ja: "アゴジムシ",
    zh: "强颚鸡母虫",
  },
  number: 736,
},{
  names: {
    de: "akkup",
    en: "charjabug",
    fr: "chrysapile",
    ja: "デンヂムシ",
    zh: "虫电宝",
  },
  number: 737,
},{
  names: {
    de: "donarion",
    en: "vikavolt",
    fr: "lucanon",
    ja: "クワガノン",
    zh: "锹农炮虫",
  },
  number: 738,
},{
  names: {
    de: "krabbox",
    en: "crabrawler",
    fr: "crabagarre",
    ja: "マケンカニ",
    zh: "好胜蟹",
  },
  number: 739,
},{
  names: {
    de: "krawell",
    en: "crabominable",
    fr: "crabominable",
    ja: "ケケンカニ",
    zh: "好胜毛蟹",
  },
  number: 740,
},{
  names: {
    de: "choreogel",
    en: "oricorio",
    fr: "plumeline",
    ja: "オドリドリ",
    zh: "花舞鸟",
  },
  number: 741,
},{
  names: {
    de: "wommel",
    en: "cutiefly",
    fr: "bombydou",
    ja: "アブリー",
    zh: "萌虻",
  },
  number: 742,
},{
  names: {
    de: "bandelby",
    en: "ribombee",
    fr: "rubombelle",
    ja: "アブリボン",
    zh: "蝶结萌虻",
  },
  number: 743,
},{
  names: {
    de: "wuffels",
    en: "rockruff",
    fr: "rocabot",
    ja: "イワンコ",
    zh: "岩狗狗",
  },
  number: 744,
},{
  names: {
    de: "wolwerock",
    en: "lycanroc",
    fr: "lougaroc",
    ja: "ルガルガン",
    zh: "鬃岩狼人",
  },
  number: 745,
},{
  names: {
    de: "lusardin",
    en: "wishiwashi",
    fr: "froussardine",
    ja: "ヨワシ",
    zh: "弱丁鱼",
  },
  number: 746,
},{
  names: {
    de: "garstella",
    en: "mareanie",
    fr: "vorastérie",
    ja: "ヒドイデ",
    zh: "好坏星",
  },
  number: 747,
},{
  names: {
    de: "aggrostella",
    en: "toxapex",
    fr: "prédastérie",
    ja: "ドヒドイデ",
    zh: "超坏星",
  },
  number: 748,
},{
  names: {
    de: "pampuli",
    en: "mudbray",
    fr: "tiboudet",
    ja: "ドロバンコ",
    zh: "泥驴仔",
  },
  number: 749,
},{
  names: {
    de: "pampross",
    en: "mudsdale",
    fr: "bourrinos",
    ja: "バンバドロ",
    zh: "重泥挽马",
  },
  number: 750,
},{
  names: {
    de: "araqua",
    en: "dewpider",
    fr: "araqua",
    ja: "シズクモ",
    zh: "滴蛛",
  },
  number: 751,
},{
  names: {
    de: "aranestro",
    en: "araquanid",
    fr: "tarenbulle",
    ja: "オニシズクモ",
    zh: "滴蛛霸",
  },
  number: 752,
},{
  names: {
    de: "imantis",
    en: "fomantis",
    fr: "mimantis",
    ja: "カリキリ",
    zh: "伪螳草",
  },
  number: 753,
},{
  names: {
    de: "mantidea",
    en: "lurantis",
    fr: "floramantis",
    ja: "ラランテス",
    zh: "兰螳花",
  },
  number: 754,
},{
  names: {
    de: "bubungus",
    en: "morelull",
    fr: "spododo",
    ja: "ネマシュ",
    zh: "睡睡菇",
  },
  number: 755,
},{
  names: {
    de: "lamellux",
    en: "shiinotic",
    fr: "lampignon",
    ja: "マシェード",
    zh: "灯罩夜菇",
  },
  number: 756,
},{
  names: {
    de: "molunk",
    en: "salandit",
    fr: "tritox",
    ja: "ヤトウモリ",
    zh: "夜盗火蜥",
  },
  number: 757,
},{
  names: {
    de: "amfira",
    en: "salazzle",
    fr: "malamandre",
    ja: "エンニュート",
    zh: "焰后蜥",
  },
  number: 758,
},{
  names: {
    de: "velursi",
    en: "stufful",
    fr: "nounourson",
    ja: "ヌイコグマ",
    zh: "童偶熊",
  },
  number: 759,
},{
  names: {
    de: "kosturso",
    en: "bewear",
    fr: "chelours",
    ja: "キテルグマ",
    zh: "穿着熊",
  },
  number: 760,
},{
  names: {
    de: "frubberl",
    en: "bounsweet",
    fr: "croquine",
    ja: "アマカジ",
    zh: "甜竹竹",
  },
  number: 761,
},{
  names: {
    de: "frubaila",
    en: "steenee",
    fr: "candine",
    ja: "アママイコ",
    zh: "甜舞妮",
  },
  number: 762,
},{
  names: {
    de: "fruyal",
    en: "tsareena",
    fr: "sucreine",
    ja: "アマージョ",
    zh: "甜冷美后",
  },
  number: 763,
},{
  names: {
    de: "curelei",
    en: "comfey",
    fr: "guérilande",
    ja: "キュワワー",
    zh: "花疗环环",
  },
  number: 764,
},{
  names: {
    de: "kommandutan",
    en: "oranguru",
    fr: "gouroutan",
    ja: "ヤレユータン",
    zh: "智挥猩",
  },
  number: 765,
},{
  names: {
    de: "quartermak",
    en: "passimian",
    fr: "quartermac",
    ja: "ナゲツケサル",
    zh: "投掷猴",
  },
  number: 766,
},{
  names: {
    de: "reißlaus",
    en: "wimpod",
    fr: "sovkipou",
    ja: "コソクムシ",
    zh: "胆小虫",
  },
  number: 767,
},{
  names: {
    de: "tectass",
    en: "golisopod",
    fr: "sarmuraï",
    ja: "グソクムシャ",
    zh: "具甲武者",
  },
  number: 768,
},{
  names: {
    de: "sankabuh",
    en: "sandygast",
    fr: "bacabouh",
    ja: "スナバァ",
    zh: "沙丘娃",
  },
  number: 769,
},{
  names: {
    de: "colossand",
    en: "palossand",
    fr: "trépassable",
    ja: "シロデスナ",
    zh: "噬沙堡爷",
  },
  number: 770,
},{
  names: {
    de: "gufa",
    en: "pyukumuku",
    fr: "concombaffe",
    ja: "ナマコブシ",
    zh: "拳海参",
  },
  number: 771,
},{
  names: {
    de: "typ:null",
    en: "type: null",
    fr: "type:0",
    ja: "タイプ：ヌル",
    zh: "属性：空",
  },
  number: 772,
},{
  names: {
    de: "amigento",
    en: "silvally",
    fr: "silvallié",
    ja: "シルヴァディ",
    zh: "银伴战兽",
  },
  number: 773,
},{
  names: {
    de: "meteno",
    en: "minior",
    fr: "météno",
    ja: "メテノ",
    zh: "小陨星",
  },
  number: 774,
},{
  names: {
    de: "koalelu",
    en: "komala",
    fr: "dodoala",
    ja: "ネッコアラ",
    zh: "树枕尾熊",
  },
  number: 775,
},{
  names: {
    de: "tortunator",
    en: "turtonator",
    fr: "boumata",
    ja: "バクガメス",
    zh: "爆焰龟兽",
  },
  number: 776,
},{
  names: {
    de: "togedemaru",
    en: "togedemaru",
    fr: "togedemaru",
    ja: "トゲデマル",
    zh: "托戈德玛尔",
  },
  number: 777,
},{
  names: {
    de: "mimigma",
    en: "mimikyu",
    fr: "mimiqui",
    ja: "ミミッキュ",
    zh: "谜拟丘",
  },
  number: 778,
},{
  names: {
    de: "knirfish",
    en: "bruxish",
    fr: "denticrisse",
    ja: "ハギギシリ",
    zh: "磨牙彩皮鱼",
  },
  number: 779,
},{
  names: {
    de: "sen-long",
    en: "drampa",
    fr: "draïeul",
    ja: "ジジーロン",
    zh: "老翁龙",
  },
  number: 780,
},{
  names: {
    de: "moruda",
    en: "dhelmise",
    fr: "sinistrail",
    ja: "ダダリン",
    zh: "破破舵轮",
  },
  number: 781,
},{
  names: {
    de: "miniras",
    en: "jangmo-o",
    fr: "bébécaille",
    ja: "ジャラコ",
    zh: "心鳞宝",
  },
  number: 782,
},{
  names: {
    de: "mediras",
    en: "hakamo-o",
    fr: "écaïd",
    ja: "ジャランゴ",
    zh: "鳞甲龙",
  },
  number: 783,
},{
  names: {
    de: "grandiras",
    en: "kommo-o",
    fr: "ékaïser",
    ja: "ジャラランガ",
    zh: "杖尾鳞甲龙",
  },
  number: 784,
},{
  names: {
    de: "kapu-riki",
    en: "tapu koko",
    fr: "tokorico",
    ja: "カプ・コケコ",
    zh: "卡璞・鸣鸣",
  },
  number: 785,
},{
  names: {
    de: "kapu-fala",
    en: "tapu lele",
    fr: "tokopiyon",
    ja: "カプ・テテフ",
    zh: "卡璞・蝶蝶",
  },
  number: 786,
},{
  names: {
    de: "kapu-toro",
    en: "tapu bulu",
    fr: "tokotoro",
    ja: "カプ・ブルル",
    zh: "卡璞・哞哞",
  },
  number: 787,
},{
  names: {
    de: "kapu-kime",
    en: "tapu fini",
    fr: "tokopisco",
    ja: "カプ・レヒレ",
    zh: "卡璞・鳍鳍",
  },
  number: 788,
},{
  names: {
    de: "cosmog",
    en: "cosmog",
    fr: "cosmog",
    ja: "コスモッグ",
    zh: "科斯莫古",
  },
  number: 789,
},{
  names: {
    de: "cosmovum",
    en: "cosmoem",
    fr: "cosmovum",
    ja: "コスモウム",
    zh: "科斯莫姆",
  },
  number: 790,
},{
  names: {
    de: "solgaleo",
    en: "solgaleo",
    fr: "solgaleo",
    ja: "ソルガレオ",
    zh: "索尔迦雷欧",
  },
  number: 791,
},{
  names: {
    de: "lunala",
    en: "lunala",
    fr: "lunala",
    ja: "ルナアーラ",
    zh: "露奈雅拉",
  },
  number: 792,
},{
  names: {
    de: "anego",
    en: "nihilego",
    fr: "zéroïd",
    ja: "ウツロイド",
    zh: "虚吾伊德",
  },
  number: 793,
},{
  names: {
    de: "masskito",
    en: "buzzwole",
    fr: "mouscoto",
    ja: "マッシブーン",
    zh: "爆肌蚊",
  },
  number: 794,
},{
  names: {
    de: "schabelle",
    en: "pheromosa",
    fr: "cancrelove",
    ja: "フェローチェ",
    zh: "费洛美螂",
  },
  number: 795,
},{
  names: {
    de: "voltriant",
    en: "xurkitree",
    fr: "câblifère",
    ja: "デンジュモク",
    zh: "电束木",
  },
  number: 796,
},{
  names: {
    de: "kaguron",
    en: "celesteela",
    fr: "bamboiselle",
    ja: "テッカグヤ",
    zh: "铁火辉夜",
  },
  number: 797,
},{
  names: {
    de: "katagami",
    en: "kartana",
    fr: "katagami",
    ja: "カミツルギ",
    zh: "纸御剑",
  },
  number: 798,
},{
  names: {
    de: "schlingking",
    en: "guzzlord",
    fr: "engloutyran",
    ja: "アクジキング",
    zh: "恶食大王",
  },
  number: 799,
},{
  names: {
    de: "necrozma",
    en: "necrozma",
    fr: "necrozma",
    ja: "ネクロズマ",
    zh: "奈克洛兹玛",
  },
  number: 800,
},{
  names: {
    de: "magearna",
    en: "magearna",
    fr: "magearna",
    ja: "マギアナ",
    zh: "玛机雅娜",
  },
  number: 801,
},{
  names: {
    de: "marshadow",
    en: "marshadow",
    fr: "marshadow",
    ja: "マーシャドー",
    zh: "玛夏多",
  },
  number: 802,
},{
  names: {
    de: "venicro",
    en: "poipole",
    fr: "vémini",
    ja: "ベベノム",
    zh: "毒贝比",
  },
  number: 803,
},{
  names: {
    de: "agoyon",
    en: "naganadel",
    fr: "mandrillon",
    ja: "アーゴヨン",
    zh: "四颚针龙",
  },
  number: 804,
},{
  names: {
    de: "muramura",
    en: "stakataka",
    fr: "ama-ama",
    ja: "ツンデツンデ",
    zh: "垒磊石",
  },
  number: 805,
},{
  names: {
    de: "kopplosio",
    en: "blacephalon",
    fr: "pierroteknik",
    ja: "ズガドーン",
    zh: "砰头小丑",
  },
  number: 806,
},{
  names: {
    de: "zeraora",
    en: "zeraora",
    fr: "zeraora",
    ja: "ゼラオラ",
    zh: "捷拉奥拉",
  },
  number: 807,
},{
  names: {
    de: "meltan",
    en: "meltan",
    fr: "meltan",
    ja: "メルタン",
    zh: "美录坦",
  },
  number: 808,
},{
  names: {
    de: "melmetal",
    en: "melmetal",
    fr: "melmetal",
    ja: "メルメタル",
    zh: "美录梅塔",
  },
  number: 809,
},{
  names: {
    de: "chimpep",
    en: "grookey",
    fr: "ouistempo",
    ja: "サルノリ",
    zh: "敲音猴",
  },
  number: 810,
},{
  names: {
    de: "chimstix",
    en: "thwackey",
    fr: "badabouin",
    ja: "バチンキー",
    zh: "啪咚猴",
  },
  number: 811,
},{
  names: {
    de: "gortrom",
    en: "rillaboom",
    fr: "gorythmic",
    ja: "ゴリランダー",
    zh: "轰擂金刚猩",
  },
  number: 812,
},{
  names: {
    de: "hopplo",
    en: "scorbunny",
    fr: "flambino",
    ja: "ヒバニー",
    zh: "炎兔儿",
  },
  number: 813,
},{
  names: {
    de: "kickerlo",
    en: "raboot",
    fr: "lapyro",
    ja: "ラビフット",
    zh: "腾蹴小将",
  },
  number: 814,
},{
  names: {
    de: "liberlo",
    en: "cinderace",
    fr: "pyrobut",
    ja: "エースバーン",
    zh: "闪焰王牌",
  },
  number: 815,
},{
  names: {
    de: "memmeon",
    en: "sobble",
    fr: "larméléon",
    ja: "メッソン",
    zh: "泪眼蜥",
  },
  number: 816,
},{
  names: {
    de: "phlegleon",
    en: "drizzile",
    fr: "arrozard",
    ja: "ジメレオン",
    zh: "变涩蜥",
  },
  number: 817,
},{
  names: {
    de: "intelleon",
    en: "inteleon",
    fr: "lézargus",
    ja: "インテレオン",
    zh: "千面避役",
  },
  number: 818,
},{
  names: {
    de: "raffel",
    en: "skwovet",
    fr: "rongourmand",
    ja: "ホシガリス",
    zh: "贪心栗鼠",
  },
  number: 819,
},{
  names: {
    de: "schlaraffel",
    en: "greedent",
    fr: "rongrigou",
    ja: "ヨクバリス",
    zh: "藏饱栗鼠",
  },
  number: 820,
},{
  names: {
    de: "meikro",
    en: "rookidee",
    fr: "minisange",
    ja: "ココガラ",
    zh: "稚山雀",
  },
  number: 821,
},{
  names: {
    de: "kranoviz",
    en: "corvisquire",
    fr: "bleuseille",
    ja: "アオガラス",
    zh: "蓝鸦",
  },
  number: 822,
},{
  names: {
    de: "krarmor",
    en: "corviknight",
    fr: "corvaillus",
    ja: "アーマーガア",
    zh: "钢铠鸦",
  },
  number: 823,
},{
  names: {
    de: "sensect",
    en: "blipbug",
    fr: "larvadar",
    ja: "サッチムシ",
    zh: "索侦虫",
  },
  number: 824,
},{
  names: {
    de: "keradar",
    en: "dottler",
    fr: "coléodôme",
    ja: "レドームシ",
    zh: "天罩虫",
  },
  number: 825,
},{
  names: {
    de: "maritellit",
    en: "orbeetle",
    fr: "astronelle",
    ja: "イオルブ",
    zh: "以欧路普",
  },
  number: 826,
},{
  names: {
    de: "kleptifux",
    en: "nickit",
    fr: "goupilou",
    ja: "クスネ",
    zh: "狡小狐",
  },
  number: 827,
},{
  names: {
    de: "gaunux",
    en: "thievul",
    fr: "roublenard",
    ja: "フォクスライ",
    zh: "猾大狐",
  },
  number: 828,
},{
  names: {
    de: "cottini",
    en: "gossifleur",
    fr: "tournicoton",
    ja: "ヒメンカ",
    zh: "幼棉棉",
  },
  number: 829,
},{
  names: {
    de: "cottomi",
    en: "eldegoss",
    fr: "blancoton",
    ja: "ワタシラガ",
    zh: "白蓬蓬",
  },
  number: 830,
},{
  names: {
    de: "wolly",
    en: "wooloo",
    fr: "moumouton",
    ja: "ウールー",
    zh: "毛辫羊",
  },
  number: 831,
},{
  names: {
    de: "zwollock",
    en: "dubwool",
    fr: "moumouflon",
    ja: "バイウールー",
    zh: "毛毛角羊",
  },
  number: 832,
},{
  names: {
    de: "kamehaps",
    en: "chewtle",
    fr: "khélocrok",
    ja: "カムカメ",
    zh: "咬咬龟",
  },
  number: 833,
},{
  names: {
    de: "kamalm",
    en: "drednaw",
    fr: "torgamord",
    ja: "カジリガメ",
    zh: "暴噬龟",
  },
  number: 834,
},{
  names: {
    de: "voldi",
    en: "yamper",
    fr: "voltoutou",
    ja: "ワンパチ",
    zh: "来电汪",
  },
  number: 835,
},{
  names: {
    de: "bellektro",
    en: "boltund",
    fr: "fulgudog",
    ja: "パルスワン",
    zh: "逐电犬",
  },
  number: 836,
},{
  names: {
    de: "klonkett",
    en: "rolycoly",
    fr: "charbi",
    ja: "タンドン",
    zh: "小炭仔",
  },
  number: 837,
},{
  names: {
    de: "wagong",
    en: "carkol",
    fr: "wagomine",
    ja: "トロッゴン",
    zh: "大炭车",
  },
  number: 838,
},{
  names: {
    de: "montecarbo",
    en: "coalossal",
    fr: "monthracite",
    ja: "セキタンザン",
    zh: "巨炭山",
  },
  number: 839,
},{
  names: {
    de: "knapfel",
    en: "applin",
    fr: "verpom",
    ja: "カジッチュ",
    zh: "啃果虫",
  },
  number: 840,
},{
  names: {
    de: "drapfel",
    en: "flapple",
    fr: "pomdrapi",
    ja: "アップリュー",
    zh: "苹裹龙",
  },
  number: 841,
},{
  names: {
    de: "schlapfel",
    en: "appletun",
    fr: "dratatin",
    ja: "タルップル",
    zh: "丰蜜龙",
  },
  number: 842,
},{
  names: {
    de: "salanga",
    en: "silicobra",
    fr: "dunaja",
    ja: "スナヘビ",
    zh: "沙包蛇",
  },
  number: 843,
},{
  names: {
    de: "sanaconda",
    en: "sandaconda",
    fr: "dunaconda",
    ja: "サダイジャ",
    zh: "沙螺蟒",
  },
  number: 844,
},{
  names: {
    de: "urgl",
    en: "cramorant",
    fr: "nigosier",
    ja: "ウッウ",
    zh: "古月鸟",
  },
  number: 845,
},{
  names: {
    de: "pikuda",
    en: "arrokuda",
    fr: "embrochet",
    ja: "サシカマス",
    zh: "刺梭鱼",
  },
  number: 846,
},{
  names: {
    de: "barrakiefa",
    en: "barraskewda",
    fr: "hastacuda",
    ja: "カマスジョー",
    zh: "戽斗尖梭",
  },
  number: 847,
},{
  names: {
    de: "toxel",
    en: "toxel",
    fr: "toxizap",
    ja: "エレズン",
    zh: "电音婴",
  },
  number: 848,
},{
  names: {
    de: "riffex",
    en: "toxtricity",
    fr: "salarsen",
    ja: "ストリンダー",
    zh: "颤弦蝾螈",
  },
  number: 849,
},{
  names: {
    de: "thermopod",
    en: "sizzlipede",
    fr: "grillepattes",
    ja: "ヤクデ",
    zh: "烧火蚣",
  },
  number: 850,
},{
  names: {
    de: "infernopod",
    en: "centiskorch",
    fr: "scolocendre",
    ja: "マルヤクデ",
    zh: "焚焰蚣",
  },
  number: 851,
},{
  names: {
    de: "klopptopus",
    en: "clobbopus",
    fr: "poulpaf",
    ja: "タタッコ",
    zh: "拳拳蛸",
  },
  number: 852,
},{
  names: {
    de: "kaocto",
    en: "grapploct",
    fr: "krakos",
    ja: "オトスパス",
    zh: "八爪武师",
  },
  number: 853,
},{
  names: {
    de: "fatalitee",
    en: "sinistea",
    fr: "théffroi",
    ja: "ヤバチャ",
    zh: "来悲茶",
  },
  number: 854,
},{
  names: {
    de: "mortipot",
    en: "polteageist",
    fr: "polthégeist",
    ja: "ポットデス",
    zh: "怖思壶",
  },
  number: 855,
},{
  names: {
    de: "brimova",
    en: "hatenna",
    fr: "bibichut",
    ja: "ミブリム",
    zh: "迷布莉姆",
  },
  number: 856,
},{
  names: {
    de: "brimano",
    en: "hattrem",
    fr: "chapotus",
    ja: "テブリム",
    zh: "提布莉姆",
  },
  number: 857,
},{
  names: {
    de: "silembrim",
    en: "hatterene",
    fr: "sorcilence",
    ja: "ブリムオン",
    zh: "布莉姆温",
  },
  number: 858,
},{
  names: {
    de: "bähmon",
    en: "impidimp",
    fr: "grimalin",
    ja: "ベロバー",
    zh: "捣蛋小妖",
  },
  number: 859,
},{
  names: {
    de: "pelzebub",
    en: "morgrem",
    fr: "fourbelin",
    ja: "ギモー",
    zh: "诈唬魔",
  },
  number: 860,
},{
  names: {
    de: "olangaar",
    en: "grimmsnarl",
    fr: "angoliath",
    ja: "オーロンゲ",
    zh: "长毛巨魔",
  },
  number: 861,
},{
  names: {
    de: "barrikadax",
    en: "obstagoon",
    fr: "ixon",
    ja: "タチフサグマ",
    zh: "堵拦熊",
  },
  number: 862,
},{
  names: {
    de: "mauzinger",
    en: "perrserker",
    fr: "berserkatt",
    ja: "ニャイキング",
    zh: "喵头目",
  },
  number: 863,
},{
  names: {
    de: "gorgasonn",
    en: "cursola",
    fr: "corayôme",
    ja: "サニゴーン",
    zh: "魔灵珊瑚",
  },
  number: 864,
},{
  names: {
    de: "lauchzelot",
    en: "sirfetch'd",
    fr: "palarticho",
    ja: "ネギガナイト",
    zh: "葱游兵",
  },
  number: 865,
},{
  names: {
    de: "pantifrost",
    en: "mr. rime",
    fr: "m. glaquette",
    ja: "バリコオル",
    zh: "踏冰人偶",
  },
  number: 866,
},{
  names: {
    de: "oghnatoll",
    en: "runerigus",
    fr: "tutétékri",
    ja: "デスバーン",
    zh: "迭失板",
  },
  number: 867,
},{
  names: {
    de: "hokumil",
    en: "milcery",
    fr: "crèmy",
    ja: "マホミル",
    zh: "小仙奶",
  },
  number: 868,
},{
  names: {
    de: "pokusan",
    en: "alcremie",
    fr: "charmilly",
    ja: "マホイップ",
    zh: "霜奶仙",
  },
  number: 869,
},{
  names: {
    de: "legios",
    en: "falinks",
    fr: "hexadron",
    ja: "タイレーツ",
    zh: "列阵兵",
  },
  number: 870,
},{
  names: {
    de: "britzigel",
    en: "pincurchin",
    fr: "wattapik",
    ja: "バチンウニ",
    zh: "啪嚓海胆",
  },
  number: 871,
},{
  names: {
    de: "snomnom",
    en: "snom",
    fr: "frissonille",
    ja: "ユキハミ",
    zh: "雪吞虫",
  },
  number: 872,
},{
  names: {
    de: "mottineva",
    en: "frosmoth",
    fr: "beldeneige",
    ja: "モスノウ",
    zh: "雪绒蛾",
  },
  number: 873,
},{
  names: {
    de: "humanolith",
    en: "stonjourner",
    fr: "dolman",
    ja: "イシヘンジン",
    zh: "巨石丁",
  },
  number: 874,
},{
  names: {
    de: "kubuin",
    en: "eiscue",
    fr: "bekaglaçon",
    ja: "コオリッポ",
    zh: "冰砌鹅",
  },
  number: 875,
},{
  names: {
    de: "servol",
    en: "indeedee",
    fr: "wimessir",
    ja: "イエッサン",
    zh: "爱管侍",
  },
  number: 876,
},{
  names: {
    de: "morpeko",
    en: "morpeko",
    fr: "morpeko",
    ja: "モルペコ",
    zh: "莫鲁贝可",
  },
  number: 877,
},{
  names: {
    de: "kupfanti",
    en: "cufant",
    fr: "charibari",
    ja: "ゾウドウ",
    zh: "铜象",
  },
  number: 878,
},{
  names: {
    de: "patinaraja",
    en: "copperajah",
    fr: "pachyradjah",
    ja: "ダイオウドウ",
    zh: "大王铜象",
  },
  number: 879,
},{
  names: {
    de: "lectragon",
    en: "dracozolt",
    fr: "galvagon",
    ja: "パッチラゴン",
    zh: "雷鸟龙",
  },
  number: 880,
},{
  names: {
    de: "lecryodon",
    en: "arctozolt",
    fr: "galvagla",
    ja: "パッチルドン",
    zh: "雷鸟海兽",
  },
  number: 881,
},{
  names: {
    de: "pescragon",
    en: "dracovish",
    fr: "hydragon",
    ja: "ウオノラゴン",
    zh: "鳃鱼龙",
  },
  number: 882,
},{
  names: {
    de: "pescryodon",
    en: "arctovish",
    fr: "hydragla",
    ja: "ウオチルドン",
    zh: "鳃鱼海兽",
  },
  number: 883,
},{
  names: {
    de: "duraludon",
    en: "duraludon",
    fr: "duralugon",
    ja: "ジュラルドン",
    zh: "铝钢龙",
  },
  number: 884,
},{
  names: {
    de: "grolldra",
    en: "dreepy",
    fr: "fantyrm",
    ja: "ドラメシヤ",
    zh: "多龙梅西亚",
  },
  number: 885,
},{
  names: {
    de: "phandra",
    en: "drakloak",
    fr: "dispareptil",
    ja: "ドロンチ",
    zh: "多龙奇",
  },
  number: 886,
},{
  names: {
    de: "katapuldra",
    en: "dragapult",
    fr: "lanssorien",
    ja: "ドラパルト",
    zh: "多龙巴鲁托",
  },
  number: 887,
},{
  names: {
    de: "zacian",
    en: "zacian",
    fr: "zacian",
    ja: "ザシアン",
    zh: "苍响",
  },
  number: 888,
},{
  names: {
    de: "zamazenta",
    en: "zamazenta",
    fr: "zamazenta",
    ja: "ザマゼンタ",
    zh: "藏玛然特",
  },
  number: 889,
},{
  names: {
    de: "endynalos",
    en: "eternatus",
    fr: "éthernatos",
    ja: "ムゲンダイナ",
    zh: "无极汰那",
  },
  number: 890,
},{
  names: {
    de: "dakuma",
    en: "kubfu",
    fr: "wushours",
    ja: "ダクマ",
    zh: "熊徒弟",
  },
  number: 891,
},{
  names: {
    de: "wulaosu",
    en: "urshifu",
    fr: "shifours",
    ja: "ウーラオス",
    zh: "武道熊师",
  },
  number: 892,
},{
  names: {
    de: "zarude",
    en: "zarude",
    fr: "zarude",
    ja: "ザルード",
    zh: "萨戮德",
  },
  number: 893,
},{
  names: {
    de: "regieleki",
    en: "regieleki",
    fr: "regieleki",
    ja: "レジエレキ",
    zh: "雷吉艾勒奇",
  },
  number: 894,
},{
  names: {
    de: "regidrago",
    en: "regidrago",
    fr: "regidrago",
    ja: "レジドラゴ",
    zh: "雷吉铎拉戈",
  },
  number: 895,
},{
  names: {
    de: "polaross",
    en: "glastrier",
    fr: "blizzeval",
    ja: "ブリザポス",
    zh: "雪暴马",
  },
  number: 896,
},{
  names: {
    de: "phantoross",
    en: "spectrier",
    fr: "spectreval",
    ja: "レイスポス",
    zh: "灵幽马",
  },
  number: 897,
},{
  names: {
    de: "coronospa",
    en: "calyrex",
    fr: "sylveroy",
    ja: "バドレックス",
    zh: "蕾冠王",
  },
  number: 898,
},{
  names: {
    de: "damythir",
    en: "wyrdeer",
    fr: "cerbyllin",
    ja: "アヤシシ",
    zh: "诡角鹿",
  },
  number: 899,
},{
  names: {
    de: "axantor",
    en: "kleavor",
    fr: "hachécateur",
    ja: "バサギリ",
    zh: "劈斧螳螂",
  },
  number: 900,
},{
  names: {
    de: "ursaluna",
    en: "ursaluna",
    fr: "ursaking",
    ja: "ガチグマ",
    zh: "月月熊",
  },
  number: 901,
},{
  names: {
    de: "salmagnis",
    en: "basculegion",
    fr: "paragruel",
    ja: "イダイトウ",
    zh: "幽尾玄鱼",
  },
  number: 902,
},{
  names: {
    de: "snieboss",
    en: "sneasler",
    fr: "farfurex",
    ja: "オオニューラ",
    zh: "大狃拉",
  },
  number: 903,
},{
  names: {
    de: "myriador",
    en: "overqwil",
    fr: "qwilpik",
    ja: "ハリーマン",
    zh: "万针鱼",
  },
  number: 904,
},{
  names: {
    de: "cupidos",
    en: "enamorus",
    fr: "amovénus",
    ja: "ラブトロス",
    zh: "眷恋云",
  },
  number: 905,
},{
  names: {
    de: "felori",
    en: "sprigatito",
    fr: "poussacha",
    ja: "ニャオハ",
    zh: "新叶喵",
  },
  number: 906,
},{
  names: {
    de: "feliospa",
    en: "floragato",
    fr: "matourgeon",
    ja: "ニャローテ",
    zh: "蒂蕾喵",
  },
  number: 907,
},{
  names: {
    de: "maskagato",
    en: "meowscarada",
    fr: "miascarade",
    ja: "マスカーニャ",
    zh: "魔幻假面喵",
  },
  number: 908,
},{
  names: {
    de: "krokel",
    en: "fuecoco",
    fr: "chochodile",
    ja: "ホゲータ",
    zh: "呆火鳄",
  },
  number: 909,
},{
  names: {
    de: "lokroko",
    en: "crocalor",
    fr: "crocogril",
    ja: "アチゲータ",
    zh: "炙烫鳄",
  },
  number: 910,
},{
  names: {
    de: "skelokrok",
    en: "skeledirge",
    fr: "flâmigator",
    ja: "ラウドボーン",
    zh: "骨纹巨声鳄",
  },
  number: 911,
},{
  names: {
    de: "kwaks",
    en: "quaxly",
    fr: "coiffeton",
    ja: "クワッス",
    zh: "润水鸭",
  },
  number: 912,
},{
  names: {
    de: "fuentente",
    en: "quaxwell",
    fr: "canarbello",
    ja: "ウェルカモ",
    zh: "涌跃鸭",
  },
  number: 913,
},{
  names: {
    de: "bailonda",
    en: "quaquaval",
    fr: "palmaval",
    ja: "ウェーニバル",
    zh: "狂欢浪舞鸭",
  },
  number: 914,
},{
  names: {
    de: "ferkuli",
    en: "lechonk",
    fr: "gourmelet",
    ja: "グルトン",
    zh: "爱吃豚",
  },
  number: 915,
},{
  names: {
    de: "fragrunz",
    en: "oinkologne",
    fr: "fragroin",
    ja: "パフュートン",
    zh: "飘香豚",
  },
  number: 916,
},{
  names: {
    de: "tarundel",
    en: "tarountula",
    fr: "tissenboule",
    ja: "タマンチュラ",
    zh: "团珠蛛",
  },
  number: 917,
},{
  names: {
    de: "spinsidias",
    en: "spidops",
    fr: "filentrappe",
    ja: "ワナイダー",
    zh: "操陷蛛",
  },
  number: 918,
},{
  names: {
    de: "micrick",
    en: "nymble",
    fr: "lilliterelle",
    ja: "マメバッタ",
    zh: "豆蟋蟀",
  },
  number: 919,
},{
  names: {
    de: "lextremo",
    en: "lokix",
    fr: "gambex",
    ja: "エクスレッグ",
    zh: "烈腿蝗",
  },
  number: 920,
},{
  names: {
    de: "pamo",
    en: "pawmi",
    fr: "pohm",
    ja: "パモ",
    zh: "布拨",
  },
  number: 921,
},{
  names: {
    de: "pamamo",
    en: "pawmo",
    fr: "pohmotte",
    ja: "パモット",
    zh: "布土拨",
  },
  number: 922,
},{
  names: {
    de: "pamomamo",
    en: "pawmot",
    fr: "pohmarmotte",
    ja: "パーモット",
    zh: "巴布土拨",
  },
  number: 923,
},{
  names: {
    de: "zwieps",
    en: "tandemaus",
    fr: "compagnol",
    ja: "ワッカネズミ",
    zh: "一对鼠",
  },
  number: 924,
},{
  names: {
    de: "famieps",
    en: "maushold",
    fr: "famignol",
    ja: "イッカネズミ",
    zh: "一家鼠",
  },
  number: 925,
},{
  names: {
    de: "hefel",
    en: "fidough",
    fr: "pâtachiot",
    ja: "パピモッチ",
    zh: "狗仔包",
  },
  number: 926,
},{
  names: {
    de: "backel",
    en: "dachsbun",
    fr: "briochien",
    ja: "バウッツェル",
    zh: "麻花犬",
  },
  number: 927,
},{
  names: {
    de: "olini",
    en: "smoliv",
    fr: "olivini",
    ja: "ミニーブ",
    zh: "迷你芙",
  },
  number: 928,
},{
  names: {
    de: "olivinio",
    en: "dolliv",
    fr: "olivado",
    ja: "オリーニョ",
    zh: "奥利纽",
  },
  number: 929,
},{
  names: {
    de: "olithena",
    en: "arboliva",
    fr: "arboliva",
    ja: "オリーヴァ",
    zh: "奥利瓦",
  },
  number: 930,
},{
  names: {
    de: "krawalloro",
    en: "squawkabilly",
    fr: "tapatoès",
    ja: "イキリンコ",
    zh: "怒鹦哥",
  },
  number: 931,
},{
  names: {
    de: "geosali",
    en: "nacli",
    fr: "selutin",
    ja: "コジオ",
    zh: "盐石宝",
  },
  number: 932,
},{
  names: {
    de: "sedisal",
    en: "naclstack",
    fr: "amassel",
    ja: "ジオヅム",
    zh: "盐石垒",
  },
  number: 933,
},{
  names: {
    de: "saltigant",
    en: "garganacl",
    fr: "gigansel",
    ja: "キョジオーン",
    zh: "盐石巨灵",
  },
  number: 934,
},{
  names: {
    de: "knarbon",
    en: "charcadet",
    fr: "charbambin",
    ja: "カルボウ",
    zh: "炭小侍",
  },
  number: 935,
},{
  names: {
    de: "crimanzo",
    en: "armarouge",
    fr: "carmadura",
    ja: "グレンアルマ",
    zh: "红莲铠骑",
  },
  number: 936,
},{
  names: {
    de: "azugladis",
    en: "ceruledge",
    fr: "malvalame",
    ja: "ソウブレイズ",
    zh: "苍炎刃鬼",
  },
  number: 937,
},{
  names: {
    de: "blipp",
    en: "tadbulb",
    fr: "têtampoule",
    ja: "ズピカ",
    zh: "光蚪仔",
  },
  number: 938,
},{
  names: {
    de: "wampitz",
    en: "bellibolt",
    fr: "ampibidou",
    ja: "ハラバリー",
    zh: "电肚蛙",
  },
  number: 939,
},{
  names: {
    de: "voltrel",
    en: "wattrel",
    fr: "zapétrel",
    ja: "カイデン",
    zh: "电海燕",
  },
  number: 940,
},{
  names: {
    de: "voltrean",
    en: "kilowattrel",
    fr: "fulgulairo",
    ja: "タイカイデン",
    zh: "大电海燕",
  },
  number: 941,
},{
  names: {
    de: "mobtiff",
    en: "maschiff",
    fr: "grondogue",
    ja: "オラチフ",
    zh: "偶叫獒",
  },
  number: 942,
},{
  names: {
    de: "mastifioso",
    en: "mabosstiff",
    fr: "dogrino",
    ja: "マフィティフ",
    zh: "獒教父",
  },
  number: 943,
},{
  names: {
    de: "sproxi",
    en: "shroodle",
    fr: "gribouraigne",
    ja: "シルシュルー",
    zh: "滋汁鼹",
  },
  number: 944,
},{
  names: {
    de: "affiti",
    en: "grafaiai",
    fr: "tag-tag",
    ja: "タギングル",
    zh: "涂标客",
  },
  number: 945,
},{
  names: {
    de: "weherba",
    en: "bramblin",
    fr: "virovent",
    ja: "アノクサ",
    zh: "纳噬草",
  },
  number: 946,
},{
  names: {
    de: "horrerba",
    en: "brambleghast",
    fr: "virevorreur",
    ja: "アノホラグサ",
    zh: "怖纳噬草",
  },
  number: 947,
},{
  names: {
    de: "tentagra",
    en: "toedscool",
    fr: "terracool",
    ja: "ノノクラゲ",
    zh: "原野水母",
  },
  number: 948,
},{
  names: {
    de: "tenterra",
    en: "toedscruel",
    fr: "terracruel",
    ja: "リククラゲ",
    zh: "陆地水母",
  },
  number: 949,
},{
  names: {
    de: "klibbe",
    en: "klawf",
    fr: "craparoi",
    ja: "ガケガニ",
    zh: "毛崖蟹",
  },
  number: 950,
},{
  names: {
    de: "chilingel",
    en: "capsakid",
    fr: "pimito",
    ja: "カプサイジ",
    zh: "热辣娃",
  },
  number: 951,
},{
  names: {
    de: "halupenjo",
    en: "scovillain",
    fr: "scovilain",
    ja: "スコヴィラン",
    zh: "狠辣椒",
  },
  number: 952,
},{
  names: {
    de: "relluk",
    en: "rellor",
    fr: "léboulérou",
    ja: "シガロコ",
    zh: "虫滚泥",
  },
  number: 953,
},{
  names: {
    de: "skarabaks",
    en: "rabsca",
    fr: "bérasca",
    ja: "ベラカス",
    zh: "虫甲圣",
  },
  number: 954,
},{
  names: {
    de: "flattutu",
    en: "flittle",
    fr: "flotillon",
    ja: "ヒラヒナ",
    zh: "飘飘雏",
  },
  number: 955,
},{
  names: {
    de: "psiopatra",
    en: "espathra",
    fr: "cléopsytra",
    ja: "クエスパトラ",
    zh: "超能艳鸵",
  },
  number: 956,
},{
  names: {
    de: "forgita",
    en: "tinkatink",
    fr: "forgerette",
    ja: "カヌチャン",
    zh: "小锻匠",
  },
  number: 957,
},{
  names: {
    de: "tafforgita",
    en: "tinkatuff",
    fr: "forgella",
    ja: "ナカヌチャン",
    zh: "巧锻匠",
  },
  number: 958,
},{
  names: {
    de: "granforgita",
    en: "tinkaton",
    fr: "forgelina",
    ja: "デカヌチャン",
    zh: "巨锻匠",
  },
  number: 959,
},{
  names: {
    de: "schligda",
    en: "wiglett",
    fr: "taupikeau",
    ja: "ウミディグダ",
    zh: "海地鼠",
  },
  number: 960,
},{
  names: {
    de: "schligdri",
    en: "wugtrio",
    fr: "triopikeau",
    ja: "ウミトリオ",
    zh: "三海地鼠",
  },
  number: 961,
},{
  names: {
    de: "adebom",
    en: "bombirdier",
    fr: "lestombaile",
    ja: "オトシドリ",
    zh: "下石鸟",
  },
  number: 962,
},{
  names: {
    de: "normifin",
    en: "finizen",
    fr: "dofin",
    ja: "ナミイルカ",
    zh: "波普海豚",
  },
  number: 963,
},{
  names: {
    de: "delfinator",
    en: "palafin",
    fr: "superdofin",
    ja: "イルカマン",
    zh: "海豚侠",
  },
  number: 964,
},{
  names: {
    de: "knattox",
    en: "varoom",
    fr: "vrombi",
    ja: "ブロロン",
    zh: "噗隆隆",
  },
  number: 965,
},{
  names: {
    de: "knattatox",
    en: "revavroom",
    fr: "vrombotor",
    ja: "ブロロローム",
    zh: "普隆隆姆",
  },
  number: 966,
},{
  names: {
    de: "mopex",
    en: "cyclizar",
    fr: "motorizard",
    ja: "モトトカゲ",
    zh: "摩托蜥",
  },
  number: 967,
},{
  names: {
    de: "schlurm",
    en: "orthworm",
    fr: "ferdeter",
    ja: "ミミズズ",
    zh: "拖拖蚓",
  },
  number: 968,
},{
  names: {
    de: "lumispross",
    en: "glimmet",
    fr: "germéclat",
    ja: "キラーメ",
    zh: "晶光芽",
  },
  number: 969,
},{
  names: {
    de: "lumiflora",
    en: "glimmora",
    fr: "floréclat",
    ja: "キラフロル",
    zh: "晶光花",
  },
  number: 970,
},{
  names: {
    de: "gruff",
    en: "greavard",
    fr: "toutombe",
    ja: "ボチ",
    zh: "墓仔狗",
  },
  number: 971,
},{
  names: {
    de: "friedwuff",
    en: "houndstone",
    fr: "tomberro",
    ja: "ハカドッグ",
    zh: "墓扬犬",
  },
  number: 972,
},{
  names: {
    de: "flaminkno",
    en: "flamigo",
    fr: "flamenroule",
    ja: "カラミンゴ",
    zh: "缠红鹤",
  },
  number: 973,
},{
  names: {
    de: "flaniwal",
    en: "cetoddle",
    fr: "piétacé",
    ja: "アルクジラ",
    zh: "走鲸",
  },
  number: 974,
},{
  names: {
    de: "kolowal",
    en: "cetitan",
    fr: "balbalèze",
    ja: "ハルクジラ",
    zh: "浩大鲸",
  },
  number: 975,
},{
  names: {
    de: "agiluza",
    en: "veluza",
    fr: "délestin",
    ja: "ミガルーサ",
    zh: "轻身鳕",
  },
  number: 976,
},{
  names: {
    de: "heerashai",
    en: "dondozo",
    fr: "oyacata",
    ja: "ヘイラッシャ",
    zh: "吃吼霸",
  },
  number: 977,
},{
  names: {
    de: "nigiragi",
    en: "tatsugiri",
    fr: "nigirigon",
    ja: "シャリタツ",
    zh: "米立龙",
  },
  number: 978,
},{
  names: {
    de: "epitaff",
    en: "annihilape",
    fr: "courrousinge",
    ja: "コノヨザル",
    zh: "弃世猴",
  },
  number: 979,
},{
  names: {
    de: "suelord",
    en: "clodsire",
    fr: "terraiste",
    ja: "ドオー",
    zh: "土王",
  },
  number: 980,
},{
  names: {
    de: "farigiraf",
    en: "farigiraf",
    fr: "farigiraf",
    ja: "リキキリン",
    zh: "奇麒麟",
  },
  number: 981,
},{
  names: {
    de: "dummimisel",
    en: "dudunsparce",
    fr: "deusolourdo",
    ja: "ノココッチ",
    zh: "土龙节节",
  },
  number: 982,
},{
  names: {
    de: "gladimperio",
    en: "kingambit",
    fr: "scalpereur",
    ja: "ドドゲザン",
    zh: "仆刀将军",
  },
  number: 983,
},{
  names: {
    de: "riesenzahn",
    en: "great tusk",
    fr: "fort-ivoire",
    ja: "イダイナキバ",
    zh: "雄伟牙",
  },
  number: 984,
},{
  names: {
    de: "brüllschweif",
    en: "scream tail",
    fr: "hurle-queue",
    ja: "サケブシッポ",
    zh: "吼叫尾",
  },
  number: 985,
},{
  names: {
    de: "wutpilz",
    en: "brute bonnet",
    fr: "fongus-furie",
    ja: "アラブルタケ",
    zh: "猛恶菇",
  },
  number: 986,
},{
  names: {
    de: "flatterhaar",
    en: "flutter mane",
    fr: "flotte-mèche",
    ja: "ハバタクカミ",
    zh: "振翼发",
  },
  number: 987,
},{
  names: {
    de: "kriechflügel",
    en: "slither wing",
    fr: "rampe-ailes",
    ja: "チヲハウハネ",
    zh: "爬地翅",
  },
  number: 988,
},{
  names: {
    de: "sandfell",
    en: "sandy shocks",
    fr: "pelage-sablé",
    ja: "スナノケガワ",
    zh: "沙铁皮",
  },
  number: 989,
},{
  names: {
    de: "eisenrad",
    en: "iron treads",
    fr: "roue-de-fer",
    ja: "テツノワダチ",
    zh: "铁辙迹",
  },
  number: 990,
},{
  names: {
    de: "eisenbündel",
    en: "iron bundle",
    fr: "hotte-de-fer",
    ja: "テツノツツミ",
    zh: "铁包袱",
  },
  number: 991,
},{
  names: {
    de: "eisenhand",
    en: "iron hands",
    fr: "paume-de-fer",
    ja: "テツノカイナ",
    zh: "铁臂膀",
  },
  number: 992,
},{
  names: {
    de: "eisenhals",
    en: "iron jugulis",
    fr: "têtes-de-fer",
    ja: "テツノコウベ",
    zh: "铁脖颈",
  },
  number: 993,
},{
  names: {
    de: "eisenfalter",
    en: "iron moth",
    fr: "mite-de-fer",
    ja: "テツノドクガ",
    zh: "铁毒蛾",
  },
  number: 994,
},{
  names: {
    de: "eisendorn",
    en: "iron thorns",
    fr: "épine-de-fer",
    ja: "テツノイバラ",
    zh: "铁荆棘",
  },
  number: 995,
},{
  names: {
    de: "frospino",
    en: "frigibax",
    fr: "frigodo",
    ja: "セビエ",
    zh: "凉脊龙",
  },
  number: 996,
},{
  names: {
    de: "cryospino",
    en: "arctibax",
    fr: "cryodo",
    ja: "セゴール",
    zh: "冻脊龙",
  },
  number: 997,
},{
  names: {
    de: "espinodon",
    en: "baxcalibur",
    fr: "glaivodo",
    ja: "セグレイブ",
    zh: "戟脊龙",
  },
  number: 998,
},{
  names: {
    de: "gierspenst",
    en: "gimmighoul",
    fr: "mordudor",
    ja: "コレクレー",
    zh: "索财灵",
  },
  number: 999,
},{
  names: {
    de: "monetigo",
    en: "gholdengo",
    fr: "gromago",
    ja: "サーフゴー",
    zh: "赛富豪",
  },
  number: 1000,
},{
  names: {
    de: "chongjian",
    en: "wo-chien",
    fr: "chongjian",
    ja: "チオンジェン",
    zh: "古简蜗",
  },
  number: 1001,
},{
  names: {
    de: "baojian",
    en: "chien-pao",
    fr: "baojian",
    ja: "パオジアン",
    zh: "古剑豹",
  },
  number: 1002,
},{
  names: {
    de: "dinglu",
    en: "ting-lu",
    fr: "dinglu",
    ja: "ディンルー",
    zh: "古鼎鹿",
  },
  number: 1003,
},{
  names: {
    de: "yuyu",
    en: "chi-yu",
    fr: "yuyu",
    ja: "イーユイ",
    zh: "古玉鱼",
  },
  number: 1004,
},{
  names: {
    de: "donnersichel",
    en: "roaring moon",
    fr: "rugit-lune",
    ja: "トドロクツキ",
    zh: "轰鸣月",
  },
  number: 1005,
},{
  names: {
    de: "eisenkrieger",
    en: "iron valiant",
    fr: "garde-de-fer",
    ja: "テツノブジン",
    zh: "铁武者",
  },
  number: 1006,
},{
  names: {
    de: "koraidon",
    en: "koraidon",
    fr: "koraidon",
    ja: "コライドン",
    zh: "故勒顿",
  },
  number: 1007,
},{
  names: {
    de: "miraidon",
    en: "miraidon",
    fr: "miraidon",
    ja: "ミライドン",
    zh: "密勒顿",
  },
  number: 1008,
},{
  names: {
    de: "windewoge",
    en: "walking wake",
    fr: "serpente-eau",
    ja: "ウネルミナモ",
    zh: "波荡水",
  },
  number: 1009,
},{
  names: {
    de: "eisenblatt",
    en: "iron leaves",
    fr: "vert-de-fer",
    ja: "テツノイサハ",
    zh: "铁斑叶",
  },
  number: 1010,
},{
  names: {
    de: "sirapfel",
    en: "dipplin",
    fr: "pomdramour",
    ja: "カミッチュ",
    zh: "裹蜜虫",
  },
  number: 1011,
},{
  names: {
    de: "mortcha",
    en: "poltchageist",
    fr: "poltchageist",
    ja: "チャデス",
    zh: "斯魔茶",
  },
  number: 1012,
},{
  names: {
    de: "fatalitcha",
    en: "sinistcha",
    fr: "théffroyable",
    ja: "ヤバソチャ",
    zh: "来悲粗茶",
  },
  number: 1013,
},{
  names: {
    de: "boninu",
    en: "okidogi",
    fr: "félicanis",
    ja: "イイネイヌ",
    zh: "够赞狗",
  },
  number: 1014,
},{
  names: {
    de: "benesaru",
    en: "munkidori",
    fr: "fortusimia",
    ja: "マシマシラ",
    zh: "愿增猿",
  },
  number: 1015,
},{
  names: {
    de: "beatori",
    en: "fezandipiti",
    fr: "favianos",
    ja: "キチキギス",
    zh: "吉雉鸡",
  },
  number: 1016,
},{
  names: {
    de: "ogerpon",
    en: "ogerpon",
    fr: "ogerpon",
    ja: "オーガポン",
    zh: "厄诡椪",
  },
  number: 1017,
},{
  names: {
    de: "briduradon",
    en: "archaludon",
    fr: "pondralugon",
    ja: "ブリジュラス",
    zh: "铝钢桥龙",
  },
  number: 1018,
},{
  names: {
    de: "hydrapfel",
    en: "hydrapple",
    fr: "pomdorochi",
    ja: "カミツオロチ",
    zh: "蜜集大蛇",
  },
  number: 1019,
},{
  names: {
    de: "keilflamme",
    en: "gouging fire",
    fr: "feu-perçant",
    ja: "ウガツホムラ",
    zh: "破空焰",
  },
  number: 1020,
},{
  names: {
    de: "furienblitz",
    en: "raging bolt",
    fr: "ire-foudre",
    ja: "タケルライコ",
    zh: "猛雷鼓",
  },
  number: 1021,
},{
  names: {
    de: "eisenfels",
    en: "iron boulder",
    fr: "roc-de-fer",
    ja: "テツノイワオ",
    zh: "铁磐岩",
  },
  number: 1022,
},{
  names: {
    de: "eisenhaupt",
    en: "iron crown",
    fr: "chef-de-fer",
    ja: "テツノカシラ",
    zh: "铁头壳",
  },
  number: 1023,
},{
  names: {
    de: "terapagos",
    en: "terapagos",
    fr: "terapagos",
    ja: "テラパゴス",
    zh: "太乐巴戈斯",
  },
  number: 1024,
},{
  names: {
    de: "infamomo",
    en: "pecharunt",
    fr: "pêchaminus",
    ja: "モモワロウ",
    zh: "桃歹郎",
  },
  number: 1025,
}] as const;

export type PokemonNumber = typeof POKEMON_NAMES[number]['number'];

export type NamesForPokemon = typeof POKEMON_NAMES[number]['names'];
