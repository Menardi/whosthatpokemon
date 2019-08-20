/*
 * names.js
 *
 * Contains all Pokemon names in multiple languages. Also includes functionality
 * to remove accents from non-English Pokemon names for easier comparison.
 */

var pokemonAccentMap = {
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
}

// Based on https://github.com/aristus/accent-folding/blob/master/accent-fold.js

function removeAccents (s) {
    if (!s) { return ''; }
    var ret = '';
    for (var i=0; i<s.length; i++) {
        ret += pokemonAccentMap[s.charAt(i)] || s.charAt(i);
    }
    return ret;
}

window.pokemonNames = [{
  names: {
    de: "bisasam",
    en: "bulbasaur",
    fr: "bulbizarre",
    ja: "フシギダネ"
  },
  number: 1
},{
  names: {
    de: "bisaknosp",
    en: "ivysaur",
    fr: "herbizarre",
    ja: "フシギソウ"
  },
  number: 2
},{
  names: {
    de: "bisaflor",
    en: "venusaur",
    fr: "florizarre",
    ja: "フシギバナ"
  },
  number: 3
},{
  names: {
    de: "glumanda",
    en: "charmander",
    fr: "salamèche",
    ja: "ヒトカゲ"
  },
  number: 4
},{
  names: {
    de: "glutexo",
    en: "charmeleon",
    fr: "reptincel",
    ja: "リザード"
  },
  number: 5
},{
  names: {
    de: "glurak",
    en: "charizard",
    fr: "dracaufeu",
    ja: "リザードン"
  },
  number: 6
},{
  names: {
    de: "schiggy",
    en: "squirtle",
    fr: "carapuce",
    ja: "ゼニガメ"
  },
  number: 7
},{
  names: {
    de: "schillok",
    en: "wartortle",
    fr: "carabaffe",
    ja: "カメール"
  },
  number: 8
},{
  names: {
    de: "turtok",
    en: "blastoise",
    fr: "tortank",
    ja: "カメックス"
  },
  number: 9
},{
  names: {
    de: "raupy",
    en: "caterpie",
    fr: "chenipan",
    ja: "キャタピー"
  },
  number: 10
},{
  names: {
    de: "safcon",
    en: "metapod",
    fr: "chrysacier",
    ja: "トランセル"
  },
  number: 11
},{
  names: {
    de: "smettbo",
    en: "butterfree",
    fr: "papilusion",
    ja: "バタフリー"
  },
  number: 12
},{
  names: {
    de: "hornliu",
    en: "weedle",
    fr: "aspicot",
    ja: "ビードル"
  },
  number: 13
},{
  names: {
    de: "kokuna",
    en: "kakuna",
    fr: "coconfort",
    ja: "コクーン"
  },
  number: 14
},{
  names: {
    de: "bibor",
    en: "beedrill",
    fr: "dardargnan",
    ja: "スピアー"
  },
  number: 15
},{
  names: {
    de: "taubsi",
    en: "pidgey",
    fr: "roucool",
    ja: "ポッポ"
  },
  number: 16
},{
  names: {
    de: "tauboga",
    en: "pidgeotto",
    fr: "roucoups",
    ja: "ピジョン"
  },
  number: 17
},{
  names: {
    de: "tauboss",
    en: "pidgeot",
    fr: "roucarnage",
    ja: "ピジョット"
  },
  number: 18
},{
  names: {
    de: "rattfratz",
    en: "rattata",
    fr: "rattata",
    ja: "コラッタ"
  },
  number: 19
},{
  names: {
    de: "rattikarl",
    en: "raticate",
    fr: "rattatac",
    ja: "ラッタ"
  },
  number: 20
},{
  names: {
    de: "habitak",
    en: "spearow",
    fr: "piafabec",
    ja: "オニスズメ"
  },
  number: 21
},{
  names: {
    de: "ibitak",
    en: "fearow",
    fr: "rapasdepic",
    ja: "オニドリル"
  },
  number: 22
},{
  names: {
    de: "rettan",
    en: "ekans",
    fr: "abo",
    ja: "アーボ"
  },
  number: 23
},{
  names: {
    de: "arbok",
    en: "arbok",
    fr: "arbok",
    ja: "アーボック"
  },
  number: 24
},{
  names: {
    de: "pikachu",
    en: "pikachu",
    fr: "pikachu",
    ja: "ピカチュウ"
  },
  number: 25
},{
  names: {
    de: "raichu",
    en: "raichu",
    fr: "raichu",
    ja: "ライチュウ"
  },
  number: 26
},{
  names: {
    de: "sandan",
    en: "sandshrew",
    fr: "sabelette",
    ja: "サンド"
  },
  number: 27
},{
  names: {
    de: "sandamer",
    en: "sandslash",
    fr: "sablaireau",
    ja: "サンドパン"
  },
  number: 28
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン"
  },
  number: 29
},{
  names: {
    de: "nidorina",
    en: "nidorina",
    fr: "nidorina",
    ja: "ニドリーナ"
  },
  number: 30
},{
  names: {
    de: "nidoqueen",
    en: "nidoqueen",
    fr: "nidoqueen",
    ja: "ニドクイン"
  },
  number: 31
},{
  names: {
    de: "nidoran",
    en: "nidoran",
    fr: "nidoran",
    ja: "ニドラン"
  },
  number: 32
},{
  names: {
    de: "nidorino",
    en: "nidorino",
    fr: "nidorino",
    ja: "ニドリーノ"
  },
  number: 33
},{
  names: {
    de: "nidoking",
    en: "nidoking",
    fr: "nidoking",
    ja: "ニドキング"
  },
  number: 34
},{
  names: {
    de: "piepi",
    en: "clefairy",
    fr: "mélofée",
    ja: "ピッピ"
  },
  number: 35
},{
  names: {
    de: "pixi",
    en: "clefable",
    fr: "mélodelfe",
    ja: "ピクシー"
  },
  number: 36
},{
  names: {
    de: "vulpix",
    en: "vulpix",
    fr: "goupix",
    ja: "ロコン"
  },
  number: 37
},{
  names: {
    de: "vulnona",
    en: "ninetales",
    fr: "feunard",
    ja: "キュウコン"
  },
  number: 38
},{
  names: {
    de: "pummeluff",
    en: "jigglypuff",
    fr: "rondoudou",
    ja: "プリン"
  },
  number: 39
},{
  names: {
    de: "knuddeluff",
    en: "wigglytuff",
    fr: "grodoudou",
    ja: "プクリン"
  },
  number: 40
},{
  names: {
    de: "zubat",
    en: "zubat",
    fr: "nosferapti",
    ja: "ズバット"
  },
  number: 41
},{
  names: {
    de: "golbat",
    en: "golbat",
    fr: "nosferalto",
    ja: "ゴルバット"
  },
  number: 42
},{
  names: {
    de: "myrapla",
    en: "oddish",
    fr: "mystherbe",
    ja: "ナゾノクサ"
  },
  number: 43
},{
  names: {
    de: "duflor",
    en: "gloom",
    fr: "ortide",
    ja: "クサイハナ"
  },
  number: 44
},{
  names: {
    de: "giflor",
    en: "vileplume",
    fr: "rafflesia",
    ja: "ラフレシア"
  },
  number: 45
},{
  names: {
    de: "paras",
    en: "paras",
    fr: "paras",
    ja: "パラス"
  },
  number: 46
},{
  names: {
    de: "parasek",
    en: "parasect",
    fr: "parasect",
    ja: "パラセクト"
  },
  number: 47
},{
  names: {
    de: "bluzuk",
    en: "venonat",
    fr: "mimitoss",
    ja: "コンパン"
  },
  number: 48
},{
  names: {
    de: "omot",
    en: "venomoth",
    fr: "aéromite",
    ja: "モルフォン"
  },
  number: 49
},{
  names: {
    de: "digda",
    en: "diglett",
    fr: "taupiqueur",
    ja: "ディグダ"
  },
  number: 50
},{
  names: {
    de: "digdri",
    en: "dugtrio",
    fr: "triopikeur",
    ja: "ダグトリオ"
  },
  number: 51
},{
  names: {
    de: "mauzi",
    en: "meowth",
    fr: "miaouss",
    ja: "ニャース"
  },
  number: 52
},{
  names: {
    de: "snobilikat",
    en: "persian",
    fr: "persian",
    ja: "ペルシアン"
  },
  number: 53
},{
  names: {
    de: "enton",
    en: "psyduck",
    fr: "psykokwak",
    ja: "コダック"
  },
  number: 54
},{
  names: {
    de: "entoron",
    en: "golduck",
    fr: "akwakwak",
    ja: "ゴルダック"
  },
  number: 55
},{
  names: {
    de: "menki",
    en: "mankey",
    fr: "férosinge",
    ja: "マンキー"
  },
  number: 56
},{
  names: {
    de: "rasaff",
    en: "primeape",
    fr: "colossinge",
    ja: "オコリザル"
  },
  number: 57
},{
  names: {
    de: "fukano",
    en: "growlithe",
    fr: "caninos",
    ja: "ガーディ"
  },
  number: 58
},{
  names: {
    de: "arkani",
    en: "arcanine",
    fr: "arcanin",
    ja: "ウインディ"
  },
  number: 59
},{
  names: {
    de: "quapsel",
    en: "poliwag",
    fr: "ptitard",
    ja: "ニョロモ"
  },
  number: 60
},{
  names: {
    de: "quaputzi",
    en: "poliwhirl",
    fr: "têtarte",
    ja: "ニョロゾ"
  },
  number: 61
},{
  names: {
    de: "quappo",
    en: "poliwrath",
    fr: "tartard",
    ja: "ニョロボン"
  },
  number: 62
},{
  names: {
    de: "abra",
    en: "abra",
    fr: "abra",
    ja: "ケーシィ"
  },
  number: 63
},{
  names: {
    de: "kadabra",
    en: "kadabra",
    fr: "kadabra",
    ja: "ユンゲラー"
  },
  number: 64
},{
  names: {
    de: "simsala",
    en: "alakazam",
    fr: "alakazam",
    ja: "フーディン"
  },
  number: 65
},{
  names: {
    de: "machollo",
    en: "machop",
    fr: "machoc",
    ja: "ワンリキー"
  },
  number: 66
},{
  names: {
    de: "maschock",
    en: "machoke",
    fr: "machopeur",
    ja: "ゴーリキー"
  },
  number: 67
},{
  names: {
    de: "machomei",
    en: "machamp",
    fr: "mackogneur",
    ja: "カイリキー"
  },
  number: 68
},{
  names: {
    de: "knofensa",
    en: "bellsprout",
    fr: "chétiflor",
    ja: "マダツボミ"
  },
  number: 69
},{
  names: {
    de: "ultrigaria",
    en: "weepinbell",
    fr: "boustiflor",
    ja: "ウツドン"
  },
  number: 70
},{
  names: {
    de: "sarzenia",
    en: "victreebel",
    fr: "empiflor",
    ja: "ウツボット"
  },
  number: 71
},{
  names: {
    de: "tentacha",
    en: "tentacool",
    fr: "tentacool",
    ja: "メノクラゲ"
  },
  number: 72
},{
  names: {
    de: "tentoxa",
    en: "tentacruel",
    fr: "tentacruel",
    ja: "ドククラゲ"
  },
  number: 73
},{
  names: {
    de: "kleinstein",
    en: "geodude",
    fr: "racaillou",
    ja: "イシツブテ"
  },
  number: 74
},{
  names: {
    de: "georok",
    en: "graveler",
    fr: "gravalanch",
    ja: "ゴローン"
  },
  number: 75
},{
  names: {
    de: "geowaz",
    en: "golem",
    fr: "grolem",
    ja: "ゴローニャ"
  },
  number: 76
},{
  names: {
    de: "ponita",
    en: "ponyta",
    fr: "ponyta",
    ja: "ポニータ"
  },
  number: 77
},{
  names: {
    de: "gallopa",
    en: "rapidash",
    fr: "galopa",
    ja: "ギャロップ"
  },
  number: 78
},{
  names: {
    de: "flegmon",
    en: "slowpoke",
    fr: "ramoloss",
    ja: "ヤドン"
  },
  number: 79
},{
  names: {
    de: "lahmus",
    en: "slowbro",
    fr: "flagadoss",
    ja: "ヤドラン"
  },
  number: 80
},{
  names: {
    de: "magnetilo",
    en: "magnemite",
    fr: "magnéti",
    ja: "コイル"
  },
  number: 81
},{
  names: {
    de: "magneton",
    en: "magneton",
    fr: "magnéton",
    ja: "レアコイル"
  },
  number: 82
},{
  names: {
    de: "porenta",
    en: "farfetch'd",
    fr: "canarticho",
    ja: "カモネギ"
  },
  number: 83
},{
  names: {
    de: "dodu",
    en: "doduo",
    fr: "doduo",
    ja: "ドードー"
  },
  number: 84
},{
  names: {
    de: "dodri",
    en: "dodrio",
    fr: "dodrio",
    ja: "ドードリオ"
  },
  number: 85
},{
  names: {
    de: "jurob",
    en: "seel",
    fr: "otaria",
    ja: "パウワウ"
  },
  number: 86
},{
  names: {
    de: "jugong",
    en: "dewgong",
    fr: "lamantine",
    ja: "ジュゴン"
  },
  number: 87
},{
  names: {
    de: "sleima",
    en: "grimer",
    fr: "tadmorv",
    ja: "ベトベター"
  },
  number: 88
},{
  names: {
    de: "sleimok",
    en: "muk",
    fr: "grotadmorv",
    ja: "ベトベトン"
  },
  number: 89
},{
  names: {
    de: "muschas",
    en: "shellder",
    fr: "kokiyas",
    ja: "シェルダー"
  },
  number: 90
},{
  names: {
    de: "austos",
    en: "cloyster",
    fr: "crustabri",
    ja: "パルシェン"
  },
  number: 91
},{
  names: {
    de: "nebulak",
    en: "gastly",
    fr: "fantominus",
    ja: "ゴース"
  },
  number: 92
},{
  names: {
    de: "alpollo",
    en: "haunter",
    fr: "spectrum",
    ja: "ゴースト"
  },
  number: 93
},{
  names: {
    de: "gengar",
    en: "gengar",
    fr: "ectoplasma",
    ja: "ゲンガー"
  },
  number: 94
},{
  names: {
    de: "onix",
    en: "onix",
    fr: "onix",
    ja: "イワーク"
  },
  number: 95
},{
  names: {
    de: "traumato",
    en: "drowzee",
    fr: "soporifik",
    ja: "スリープ"
  },
  number: 96
},{
  names: {
    de: "hypno",
    en: "hypno",
    fr: "hypnomade",
    ja: "スリーパー"
  },
  number: 97
},{
  names: {
    de: "krabby",
    en: "krabby",
    fr: "krabby",
    ja: "クラブ"
  },
  number: 98
},{
  names: {
    de: "kingler",
    en: "kingler",
    fr: "krabboss",
    ja: "キングラー"
  },
  number: 99
},{
  names: {
    de: "voltobal",
    en: "voltorb",
    fr: "voltorbe",
    ja: "ビリリダマ"
  },
  number: 100
},{
  names: {
    de: "lektrobal",
    en: "electrode",
    fr: "électrode",
    ja: "マルマイン"
  },
  number: 101
},{
  names: {
    de: "owei",
    en: "exeggcute",
    fr: "noeunoeuf",
    ja: "タマタマ"
  },
  number: 102
},{
  names: {
    de: "kokowei",
    en: "exeggutor",
    fr: "noadkoko",
    ja: "ナッシー"
  },
  number: 103
},{
  names: {
    de: "tragosso",
    en: "cubone",
    fr: "osselait",
    ja: "カラカラ"
  },
  number: 104
},{
  names: {
    de: "knogga",
    en: "marowak",
    fr: "ossatueur",
    ja: "ガラガラ"
  },
  number: 105
},{
  names: {
    de: "kicklee",
    en: "hitmonlee",
    fr: "kicklee",
    ja: "サワムラー"
  },
  number: 106
},{
  names: {
    de: "nockchan",
    en: "hitmonchan",
    fr: "tygnon",
    ja: "エビワラー"
  },
  number: 107
},{
  names: {
    de: "schlurp",
    en: "lickitung",
    fr: "excelangue",
    ja: "ベロリンガ"
  },
  number: 108
},{
  names: {
    de: "smogon",
    en: "koffing",
    fr: "smogo",
    ja: "ドガース"
  },
  number: 109
},{
  names: {
    de: "smogmog",
    en: "weezing",
    fr: "smogogo",
    ja: "マタドガス"
  },
  number: 110
},{
  names: {
    de: "rihorn",
    en: "rhyhorn",
    fr: "rhinocorne",
    ja: "サイホーン"
  },
  number: 111
},{
  names: {
    de: "rizeros",
    en: "rhydon",
    fr: "rhinoféros",
    ja: "サイドン"
  },
  number: 112
},{
  names: {
    de: "chaneira",
    en: "chansey",
    fr: "leveinard",
    ja: "ラッキー"
  },
  number: 113
},{
  names: {
    de: "tangela",
    en: "tangela",
    fr: "saquedeneu",
    ja: "モンジャラ"
  },
  number: 114
},{
  names: {
    de: "kangama",
    en: "kangaskhan",
    fr: "kangourex",
    ja: "ガルーラ"
  },
  number: 115
},{
  names: {
    de: "seeper",
    en: "horsea",
    fr: "hypotrempe",
    ja: "タッツー"
  },
  number: 116
},{
  names: {
    de: "seemon",
    en: "seadra",
    fr: "hypocéan",
    ja: "シードラ"
  },
  number: 117
},{
  names: {
    de: "goldini",
    en: "goldeen",
    fr: "poissirène",
    ja: "トサキント"
  },
  number: 118
},{
  names: {
    de: "golking",
    en: "seaking",
    fr: "poissoroy",
    ja: "アズマオウ"
  },
  number: 119
},{
  names: {
    de: "sterndu",
    en: "staryu",
    fr: "stari",
    ja: "ヒトデマン"
  },
  number: 120
},{
  names: {
    de: "starmie",
    en: "starmie",
    fr: "staross",
    ja: "スターミー"
  },
  number: 121
},{
  names: {
    de: "pantimos",
    en: "mr. mime",
    fr: "m. mime",
    ja: "バリヤード"
  },
  number: 122
},{
  names: {
    de: "sichlor",
    en: "scyther",
    fr: "insécateur",
    ja: "ストライク"
  },
  number: 123
},{
  names: {
    de: "rossana",
    en: "jynx",
    fr: "lippoutou",
    ja: "ルージュラ"
  },
  number: 124
},{
  names: {
    de: "elektek",
    en: "electabuzz",
    fr: "élektek",
    ja: "エレブー"
  },
  number: 125
},{
  names: {
    de: "magmar",
    en: "magmar",
    fr: "magmar",
    ja: "ブーバー"
  },
  number: 126
},{
  names: {
    de: "pinsir",
    en: "pinsir",
    fr: "scarabrute",
    ja: "カイロス"
  },
  number: 127
},{
  names: {
    de: "tauros",
    en: "tauros",
    fr: "tauros",
    ja: "ケンタロス"
  },
  number: 128
},{
  names: {
    de: "karpador",
    en: "magikarp",
    fr: "magicarpe",
    ja: "コイキング"
  },
  number: 129
},{
  names: {
    de: "garados",
    en: "gyarados",
    fr: "léviator",
    ja: "ギャラドス"
  },
  number: 130
},{
  names: {
    de: "lapras",
    en: "lapras",
    fr: "lokhlass",
    ja: "ラプラス"
  },
  number: 131
},{
  names: {
    de: "ditto",
    en: "ditto",
    fr: "métamorph",
    ja: "メタモン"
  },
  number: 132
},{
  names: {
    de: "evoli",
    en: "eevee",
    fr: "évoli",
    ja: "イーブイ"
  },
  number: 133
},{
  names: {
    de: "aquana",
    en: "vaporeon",
    fr: "aquali",
    ja: "シャワーズ"
  },
  number: 134
},{
  names: {
    de: "blitza",
    en: "jolteon",
    fr: "voltali",
    ja: "サンダース"
  },
  number: 135
},{
  names: {
    de: "flamara",
    en: "flareon",
    fr: "pyroli",
    ja: "ブースター"
  },
  number: 136
},{
  names: {
    de: "porygon",
    en: "porygon",
    fr: "porygon",
    ja: "ポリゴン"
  },
  number: 137
},{
  names: {
    de: "amonitas",
    en: "omanyte",
    fr: "amonita",
    ja: "オムナイト"
  },
  number: 138
},{
  names: {
    de: "amoroso",
    en: "omastar",
    fr: "amonistar",
    ja: "オムスター"
  },
  number: 139
},{
  names: {
    de: "kabuto",
    en: "kabuto",
    fr: "kabuto",
    ja: "カブト"
  },
  number: 140
},{
  names: {
    de: "kabutops",
    en: "kabutops",
    fr: "kabutops",
    ja: "カブトプス"
  },
  number: 141
},{
  names: {
    de: "aerodactyl",
    en: "aerodactyl",
    fr: "ptéra",
    ja: "プテラ"
  },
  number: 142
},{
  names: {
    de: "relaxo",
    en: "snorlax",
    fr: "ronflex",
    ja: "カビゴン"
  },
  number: 143
},{
  names: {
    de: "arktos",
    en: "articuno",
    fr: "artikodin",
    ja: "フリーザー"
  },
  number: 144
},{
  names: {
    de: "zapdos",
    en: "zapdos",
    fr: "électhor",
    ja: "サンダー"
  },
  number: 145
},{
  names: {
    de: "lavados",
    en: "moltres",
    fr: "sulfura",
    ja: "ファイヤー"
  },
  number: 146
},{
  names: {
    de: "dratini",
    en: "dratini",
    fr: "minidraco",
    ja: "ミニリュウ"
  },
  number: 147
},{
  names: {
    de: "dragonir",
    en: "dragonair",
    fr: "draco",
    ja: "ハクリュー"
  },
  number: 148
},{
  names: {
    de: "dragoran",
    en: "dragonite",
    fr: "dracolosse",
    ja: "カイリュー"
  },
  number: 149
},{
  names: {
    de: "mewtu",
    en: "mewtwo",
    fr: "mewtwo",
    ja: "ミュウツー"
  },
  number: 150
},{
  names: {
    de: "mew",
    en: "mew",
    fr: "mew",
    ja: "ミュウ"
  },
  number: 151
},{
  names: {
    de: "endivie",
    en: "chikorita",
    fr: "germignon",
    ja: "チコリータ"
  },
  number: 152
},{
  names: {
    de: "lorblatt",
    en: "bayleef",
    fr: "macronium",
    ja: "ベイリーフ"
  },
  number: 153
},{
  names: {
    de: "meganie",
    en: "meganium",
    fr: "méganium",
    ja: "メガニウム"
  },
  number: 154
},{
  names: {
    de: "feurigel",
    en: "cyndaquil",
    fr: "héricendre",
    ja: "ヒノアラシ"
  },
  number: 155
},{
  names: {
    de: "igelavar",
    en: "quilava",
    fr: "feurisson",
    ja: "マグマラシ"
  },
  number: 156
},{
  names: {
    de: "tornupto",
    en: "typhlosion",
    fr: "typhlosion",
    ja: "バクフーン"
  },
  number: 157
},{
  names: {
    de: "karnimani",
    en: "totodile",
    fr: "kaiminus",
    ja: "ワニノコ"
  },
  number: 158
},{
  names: {
    de: "tyracroc",
    en: "croconaw",
    fr: "crocrodil",
    ja: "アリゲイツ"
  },
  number: 159
},{
  names: {
    de: "impergator",
    en: "feraligatr",
    fr: "aligatueur",
    ja: "オーダイル"
  },
  number: 160
},{
  names: {
    de: "wiesor",
    en: "sentret",
    fr: "fouinette",
    ja: "オタチ"
  },
  number: 161
},{
  names: {
    de: "wiesenior",
    en: "furret",
    fr: "fouinar",
    ja: "オオタチ"
  },
  number: 162
},{
  names: {
    de: "hoothoot",
    en: "hoothoot",
    fr: "hoothoot",
    ja: "ホーホー"
  },
  number: 163
},{
  names: {
    de: "noctuh",
    en: "noctowl",
    fr: "noarfang",
    ja: "ヨルノズク"
  },
  number: 164
},{
  names: {
    de: "ledyba",
    en: "ledyba",
    fr: "coxy",
    ja: "レディバ"
  },
  number: 165
},{
  names: {
    de: "ledian",
    en: "ledian",
    fr: "coxyclaque",
    ja: "レディアン"
  },
  number: 166
},{
  names: {
    de: "webarak",
    en: "spinarak",
    fr: "mimigal",
    ja: "イトマル"
  },
  number: 167
},{
  names: {
    de: "ariados",
    en: "ariados",
    fr: "migalos",
    ja: "アリアドス"
  },
  number: 168
},{
  names: {
    de: "iksbat",
    en: "crobat",
    fr: "nostenfer",
    ja: "クロバット"
  },
  number: 169
},{
  names: {
    de: "lampi",
    en: "chinchou",
    fr: "loupio",
    ja: "チョンチー"
  },
  number: 170
},{
  names: {
    de: "lanturn",
    en: "lanturn",
    fr: "lanturn",
    ja: "ランターン"
  },
  number: 171
},{
  names: {
    de: "pichu",
    en: "pichu",
    fr: "pichu",
    ja: "ピチュー"
  },
  number: 172
},{
  names: {
    de: "pii",
    en: "cleffa",
    fr: "mélo",
    ja: "ピィ"
  },
  number: 173
},{
  names: {
    de: "fluffeluff",
    en: "igglybuff",
    fr: "toudoudou",
    ja: "ププリン"
  },
  number: 174
},{
  names: {
    de: "togepi",
    en: "togepi",
    fr: "togepi",
    ja: "トゲピー"
  },
  number: 175
},{
  names: {
    de: "togetic",
    en: "togetic",
    fr: "togetic",
    ja: "トゲチック"
  },
  number: 176
},{
  names: {
    de: "natu",
    en: "natu",
    fr: "natu",
    ja: "ネイティ"
  },
  number: 177
},{
  names: {
    de: "xatu",
    en: "xatu",
    fr: "xatu",
    ja: "ネイティオ"
  },
  number: 178
},{
  names: {
    de: "voltilamm",
    en: "mareep",
    fr: "wattouat",
    ja: "メリープ"
  },
  number: 179
},{
  names: {
    de: "waaty",
    en: "flaaffy",
    fr: "lainergie",
    ja: "モココ"
  },
  number: 180
},{
  names: {
    de: "ampharos",
    en: "ampharos",
    fr: "pharamp",
    ja: "デンリュウ"
  },
  number: 181
},{
  names: {
    de: "blubella",
    en: "bellossom",
    fr: "joliflor",
    ja: "キレイハナ"
  },
  number: 182
},{
  names: {
    de: "marill",
    en: "marill",
    fr: "marill",
    ja: "マリル"
  },
  number: 183
},{
  names: {
    de: "azumarill",
    en: "azumarill",
    fr: "azumarill",
    ja: "マリルリ"
  },
  number: 184
},{
  names: {
    de: "mogelbaum",
    en: "sudowoodo",
    fr: "simularbre",
    ja: "ウソッキー"
  },
  number: 185
},{
  names: {
    de: "quaxo",
    en: "politoed",
    fr: "tarpaud",
    ja: "ニョロトノ"
  },
  number: 186
},{
  names: {
    de: "hoppspross",
    en: "hoppip",
    fr: "granivol",
    ja: "ハネッコ"
  },
  number: 187
},{
  names: {
    de: "hubelupf",
    en: "skiploom",
    fr: "floravol",
    ja: "ポポッコ"
  },
  number: 188
},{
  names: {
    de: "papungha",
    en: "jumpluff",
    fr: "cotovol",
    ja: "ワタッコ"
  },
  number: 189
},{
  names: {
    de: "griffel",
    en: "aipom",
    fr: "capumain",
    ja: "エイパム"
  },
  number: 190
},{
  names: {
    de: "sonnkern",
    en: "sunkern",
    fr: "tournegrin",
    ja: "ヒマナッツ"
  },
  number: 191
},{
  names: {
    de: "sonnflora",
    en: "sunflora",
    fr: "héliatronc",
    ja: "キマワリ"
  },
  number: 192
},{
  names: {
    de: "yanma",
    en: "yanma",
    fr: "yanma",
    ja: "ヤンヤンマ"
  },
  number: 193
},{
  names: {
    de: "felino",
    en: "wooper",
    fr: "axoloto",
    ja: "ウパー"
  },
  number: 194
},{
  names: {
    de: "morlord",
    en: "quagsire",
    fr: "maraiste",
    ja: "ヌオー"
  },
  number: 195
},{
  names: {
    de: "psiana",
    en: "espeon",
    fr: "mentali",
    ja: "エーフィ"
  },
  number: 196
},{
  names: {
    de: "nachtara",
    en: "umbreon",
    fr: "noctali",
    ja: "ブラッキー"
  },
  number: 197
},{
  names: {
    de: "kramurx",
    en: "murkrow",
    fr: "cornèbre",
    ja: "ヤミカラス"
  },
  number: 198
},{
  names: {
    de: "laschoking",
    en: "slowking",
    fr: "roigada",
    ja: "ヤドキング"
  },
  number: 199
},{
  names: {
    de: "traunfugil",
    en: "misdreavus",
    fr: "feuforêve",
    ja: "ムウマ"
  },
  number: 200
},{
  names: {
    de: "icognito",
    en: "unown",
    fr: "zarbi",
    ja: "アンノーン"
  },
  number: 201
},{
  names: {
    de: "woingenau",
    en: "wobbuffet",
    fr: "qulbutoké",
    ja: "ソーナンス"
  },
  number: 202
},{
  names: {
    de: "girafarig",
    en: "girafarig",
    fr: "girafarig",
    ja: "キリンリキ"
  },
  number: 203
},{
  names: {
    de: "tannza",
    en: "pineco",
    fr: "pomdepik",
    ja: "クヌギダマ"
  },
  number: 204
},{
  names: {
    de: "forstellka",
    en: "forretress",
    fr: "foretress",
    ja: "フォレトス"
  },
  number: 205
},{
  names: {
    de: "dummisel",
    en: "dunsparce",
    fr: "insolourdo",
    ja: "ノコッチ"
  },
  number: 206
},{
  names: {
    de: "skorgla",
    en: "gligar",
    fr: "scorplane",
    ja: "グライガー"
  },
  number: 207
},{
  names: {
    de: "stahlos",
    en: "steelix",
    fr: "steelix",
    ja: "ハガネール"
  },
  number: 208
},{
  names: {
    de: "snubbull",
    en: "snubbull",
    fr: "snubbull",
    ja: "ブルー"
  },
  number: 209
},{
  names: {
    de: "granbull",
    en: "granbull",
    fr: "granbull",
    ja: "グランブル"
  },
  number: 210
},{
  names: {
    de: "baldorfish",
    en: "qwilfish",
    fr: "qwilfish",
    ja: "ハリーセン"
  },
  number: 211
},{
  names: {
    de: "scherox",
    en: "scizor",
    fr: "cizayox",
    ja: "ハッサム"
  },
  number: 212
},{
  names: {
    de: "pottrott",
    en: "shuckle",
    fr: "caratroc",
    ja: "ツボツボ"
  },
  number: 213
},{
  names: {
    de: "skaraborn",
    en: "heracross",
    fr: "scarhino",
    ja: "ヘラクロス"
  },
  number: 214
},{
  names: {
    de: "sniebel",
    en: "sneasel",
    fr: "farfuret",
    ja: "ニューラ"
  },
  number: 215
},{
  names: {
    de: "teddiursa",
    en: "teddiursa",
    fr: "teddiursa",
    ja: "ヒメグマ"
  },
  number: 216
},{
  names: {
    de: "ursaring",
    en: "ursaring",
    fr: "ursaring",
    ja: "リングマ"
  },
  number: 217
},{
  names: {
    de: "schneckmag",
    en: "slugma",
    fr: "limagma",
    ja: "マグマッグ"
  },
  number: 218
},{
  names: {
    de: "magcargo",
    en: "magcargo",
    fr: "volcaropod",
    ja: "マグカルゴ"
  },
  number: 219
},{
  names: {
    de: "quiekel",
    en: "swinub",
    fr: "marcacrin",
    ja: "ウリムー"
  },
  number: 220
},{
  names: {
    de: "keifel",
    en: "piloswine",
    fr: "cochignon",
    ja: "イノムー"
  },
  number: 221
},{
  names: {
    de: "corasonn",
    en: "corsola",
    fr: "corayon",
    ja: "サニーゴ"
  },
  number: 222
},{
  names: {
    de: "remoraid",
    en: "remoraid",
    fr: "rémoraid",
    ja: "テッポウオ"
  },
  number: 223
},{
  names: {
    de: "octillery",
    en: "octillery",
    fr: "octillery",
    ja: "オクタン"
  },
  number: 224
},{
  names: {
    de: "botogel",
    en: "delibird",
    fr: "cadoizo",
    ja: "デリバード"
  },
  number: 225
},{
  names: {
    de: "mantax",
    en: "mantine",
    fr: "démanta",
    ja: "マンタイン"
  },
  number: 226
},{
  names: {
    de: "panzaeron",
    en: "skarmory",
    fr: "airmure",
    ja: "エアームド"
  },
  number: 227
},{
  names: {
    de: "hunduster",
    en: "houndour",
    fr: "malosse",
    ja: "デルビル"
  },
  number: 228
},{
  names: {
    de: "hundemon",
    en: "houndoom",
    fr: "démolosse",
    ja: "ヘルガー"
  },
  number: 229
},{
  names: {
    de: "seedraking",
    en: "kingdra",
    fr: "hyporoi",
    ja: "キングドラ"
  },
  number: 230
},{
  names: {
    de: "phanpy",
    en: "phanpy",
    fr: "phanpy",
    ja: "ゴマゾウ"
  },
  number: 231
},{
  names: {
    de: "donphan",
    en: "donphan",
    fr: "donphan",
    ja: "ドンファン"
  },
  number: 232
},{
  names: {
    de: "porygon2",
    en: "porygon2",
    fr: "porygon2",
    ja: "ポリゴン２"
  },
  number: 233
},{
  names: {
    de: "damhirplex",
    en: "stantler",
    fr: "cerfrousse",
    ja: "オドシシ"
  },
  number: 234
},{
  names: {
    de: "farbeagle",
    en: "smeargle",
    fr: "queulorior",
    ja: "ドーブル"
  },
  number: 235
},{
  names: {
    de: "rabauz",
    en: "tyrogue",
    fr: "debugant",
    ja: "バルキー"
  },
  number: 236
},{
  names: {
    de: "kapoera",
    en: "hitmontop",
    fr: "kapoera",
    ja: "カポエラー"
  },
  number: 237
},{
  names: {
    de: "kussilla",
    en: "smoochum",
    fr: "lippouti",
    ja: "ムチュール"
  },
  number: 238
},{
  names: {
    de: "elekid",
    en: "elekid",
    fr: "élekid",
    ja: "エレキッド"
  },
  number: 239
},{
  names: {
    de: "magby",
    en: "magby",
    fr: "magby",
    ja: "ブビィ"
  },
  number: 240
},{
  names: {
    de: "miltank",
    en: "miltank",
    fr: "écrémeuh",
    ja: "ミルタンク"
  },
  number: 241
},{
  names: {
    de: "heiteira",
    en: "blissey",
    fr: "leuphorie",
    ja: "ハピナス"
  },
  number: 242
},{
  names: {
    de: "raikou",
    en: "raikou",
    fr: "raikou",
    ja: "ライコウ"
  },
  number: 243
},{
  names: {
    de: "entei",
    en: "entei",
    fr: "entei",
    ja: "エンテイ"
  },
  number: 244
},{
  names: {
    de: "suicune",
    en: "suicune",
    fr: "suicune",
    ja: "スイクン"
  },
  number: 245
},{
  names: {
    de: "larvitar",
    en: "larvitar",
    fr: "embrylex",
    ja: "ヨーギラス"
  },
  number: 246
},{
  names: {
    de: "pupitar",
    en: "pupitar",
    fr: "ymphect",
    ja: "サナギラス"
  },
  number: 247
},{
  names: {
    de: "despotar",
    en: "tyranitar",
    fr: "tyranocif",
    ja: "バンギラス"
  },
  number: 248
},{
  names: {
    de: "lugia",
    en: "lugia",
    fr: "lugia",
    ja: "ルギア"
  },
  number: 249
},{
  names: {
    de: "ho-oh",
    en: "ho-oh",
    fr: "ho-oh",
    ja: "ホウオウ"
  },
  number: 250
},{
  names: {
    de: "celebi",
    en: "celebi",
    fr: "celebi",
    ja: "セレビィ"
  },
  number: 251
},{
  names: {
    de: "geckarbor",
    en: "treecko",
    fr: "arcko",
    ja: "キモリ"
  },
  number: 252
},{
  names: {
    de: "reptain",
    en: "grovyle",
    fr: "massko",
    ja: "ジュプトル"
  },
  number: 253
},{
  names: {
    de: "gewaldro",
    en: "sceptile",
    fr: "jungko",
    ja: "ジュカイン"
  },
  number: 254
},{
  names: {
    de: "flemmli",
    en: "torchic",
    fr: "poussifeu",
    ja: "アチャモ"
  },
  number: 255
},{
  names: {
    de: "jungglut",
    en: "combusken",
    fr: "galifeu",
    ja: "ワカシャモ"
  },
  number: 256
},{
  names: {
    de: "lohgock",
    en: "blaziken",
    fr: "braségali",
    ja: "バシャーモ"
  },
  number: 257
},{
  names: {
    de: "hydropi",
    en: "mudkip",
    fr: "gobou",
    ja: "ミズゴロウ"
  },
  number: 258
},{
  names: {
    de: "moorabbel",
    en: "marshtomp",
    fr: "flobio",
    ja: "ヌマクロー"
  },
  number: 259
},{
  names: {
    de: "sumpex",
    en: "swampert",
    fr: "laggron",
    ja: "ラグラージ"
  },
  number: 260
},{
  names: {
    de: "fiffyen",
    en: "poochyena",
    fr: "medhyèna",
    ja: "ポチエナ"
  },
  number: 261
},{
  names: {
    de: "magnayen",
    en: "mightyena",
    fr: "grahyèna",
    ja: "グラエナ"
  },
  number: 262
},{
  names: {
    de: "zigzachs",
    en: "zigzagoon",
    fr: "zigzaton",
    ja: "ジグザグマ"
  },
  number: 263
},{
  names: {
    de: "geradaks",
    en: "linoone",
    fr: "linéon",
    ja: "マッスグマ"
  },
  number: 264
},{
  names: {
    de: "waumpel",
    en: "wurmple",
    fr: "chenipotte",
    ja: "ケムッソ"
  },
  number: 265
},{
  names: {
    de: "schaloko",
    en: "silcoon",
    fr: "armulys",
    ja: "カラサリス"
  },
  number: 266
},{
  names: {
    de: "papinella",
    en: "beautifly",
    fr: "charmillon",
    ja: "アゲハント"
  },
  number: 267
},{
  names: {
    de: "panekon",
    en: "cascoon",
    fr: "blindalys",
    ja: "マユルド"
  },
  number: 268
},{
  names: {
    de: "pudox",
    en: "dustox",
    fr: "papinox",
    ja: "ドクケイル"
  },
  number: 269
},{
  names: {
    de: "loturzel",
    en: "lotad",
    fr: "nénupiot",
    ja: "ハスボー"
  },
  number: 270
},{
  names: {
    de: "lombrero",
    en: "lombre",
    fr: "lombre",
    ja: "ハスブレロ"
  },
  number: 271
},{
  names: {
    de: "kappalores",
    en: "ludicolo",
    fr: "ludicolo",
    ja: "ルンパッパ"
  },
  number: 272
},{
  names: {
    de: "samurzel",
    en: "seedot",
    fr: "grainipiot",
    ja: "タネボー"
  },
  number: 273
},{
  names: {
    de: "blanas",
    en: "nuzleaf",
    fr: "pifeuil",
    ja: "コノハナ"
  },
  number: 274
},{
  names: {
    de: "tengulist",
    en: "shiftry",
    fr: "tengalice",
    ja: "ダーテング"
  },
  number: 275
},{
  names: {
    de: "schwalbini",
    en: "taillow",
    fr: "nirondelle",
    ja: "スバメ"
  },
  number: 276
},{
  names: {
    de: "schwalboss",
    en: "swellow",
    fr: "hélédelle",
    ja: "オオスバメ"
  },
  number: 277
},{
  names: {
    de: "wingull",
    en: "wingull",
    fr: "goélise",
    ja: "キャモメ"
  },
  number: 278
},{
  names: {
    de: "pelipper",
    en: "pelipper",
    fr: "bekipan",
    ja: "ペリッパー"
  },
  number: 279
},{
  names: {
    de: "trasla",
    en: "ralts",
    fr: "tarsal",
    ja: "ラルトス"
  },
  number: 280
},{
  names: {
    de: "kirlia",
    en: "kirlia",
    fr: "kirlia",
    ja: "キルリア"
  },
  number: 281
},{
  names: {
    de: "guardevoir",
    en: "gardevoir",
    fr: "gardevoir",
    ja: "サーナイト"
  },
  number: 282
},{
  names: {
    de: "gehweiher",
    en: "surskit",
    fr: "arakdo",
    ja: "アメタマ"
  },
  number: 283
},{
  names: {
    de: "maskeregen",
    en: "masquerain",
    fr: "maskadra",
    ja: "アメモース"
  },
  number: 284
},{
  names: {
    de: "knilz",
    en: "shroomish",
    fr: "balignon",
    ja: "キノココ"
  },
  number: 285
},{
  names: {
    de: "kapilz",
    en: "breloom",
    fr: "chapignon",
    ja: "キノガッサ"
  },
  number: 286
},{
  names: {
    de: "bummelz",
    en: "slakoth",
    fr: "parecool",
    ja: "ナマケロ"
  },
  number: 287
},{
  names: {
    de: "muntier",
    en: "vigoroth",
    fr: "vigoroth",
    ja: "ヤルキモノ"
  },
  number: 288
},{
  names: {
    de: "letarking",
    en: "slaking",
    fr: "monaflèmit",
    ja: "ケッキング"
  },
  number: 289
},{
  names: {
    de: "nincada",
    en: "nincada",
    fr: "ningale",
    ja: "ツチニン"
  },
  number: 290
},{
  names: {
    de: "ninjask",
    en: "ninjask",
    fr: "ninjask",
    ja: "テッカニン"
  },
  number: 291
},{
  names: {
    de: "ninjatom",
    en: "shedinja",
    fr: "munja",
    ja: "ヌケニン"
  },
  number: 292
},{
  names: {
    de: "flurmel",
    en: "whismur",
    fr: "chuchmur",
    ja: "ゴニョニョ"
  },
  number: 293
},{
  names: {
    de: "krakeelo",
    en: "loudred",
    fr: "ramboum",
    ja: "ドゴーム"
  },
  number: 294
},{
  names: {
    de: "krawumms",
    en: "exploud",
    fr: "brouhabam",
    ja: "バクオング"
  },
  number: 295
},{
  names: {
    de: "makuhita",
    en: "makuhita",
    fr: "makuhita",
    ja: "マクノシタ"
  },
  number: 296
},{
  names: {
    de: "hariyama",
    en: "hariyama",
    fr: "hariyama",
    ja: "ハリテヤマ"
  },
  number: 297
},{
  names: {
    de: "azurill",
    en: "azurill",
    fr: "azurill",
    ja: "ルリリ"
  },
  number: 298
},{
  names: {
    de: "nasgnet",
    en: "nosepass",
    fr: "tarinor",
    ja: "ノズパス"
  },
  number: 299
},{
  names: {
    de: "eneco",
    en: "skitty",
    fr: "skitty",
    ja: "エネコ"
  },
  number: 300
},{
  names: {
    de: "enekoro",
    en: "delcatty",
    fr: "delcatty",
    ja: "エネコロロ"
  },
  number: 301
},{
  names: {
    de: "zobiris",
    en: "sableye",
    fr: "ténéfix",
    ja: "ヤミラミ"
  },
  number: 302
},{
  names: {
    de: "flunkifer",
    en: "mawile",
    fr: "mysdibule",
    ja: "クチート"
  },
  number: 303
},{
  names: {
    de: "stollunior",
    en: "aron",
    fr: "galekid",
    ja: "ココドラ"
  },
  number: 304
},{
  names: {
    de: "stollrak",
    en: "lairon",
    fr: "galegon",
    ja: "コドラ"
  },
  number: 305
},{
  names: {
    de: "stolloss",
    en: "aggron",
    fr: "galeking",
    ja: "ボスゴドラ"
  },
  number: 306
},{
  names: {
    de: "meditie",
    en: "meditite",
    fr: "méditikka",
    ja: "アサナン"
  },
  number: 307
},{
  names: {
    de: "meditalis",
    en: "medicham",
    fr: "charmina",
    ja: "チャーレム"
  },
  number: 308
},{
  names: {
    de: "frizelbliz",
    en: "electrike",
    fr: "dynavolt",
    ja: "ラクライ"
  },
  number: 309
},{
  names: {
    de: "voltenso",
    en: "manectric",
    fr: "élecsprint",
    ja: "ライボルト"
  },
  number: 310
},{
  names: {
    de: "plusle",
    en: "plusle",
    fr: "posipi",
    ja: "プラスル"
  },
  number: 311
},{
  names: {
    de: "minun",
    en: "minun",
    fr: "négapi",
    ja: "マイナン"
  },
  number: 312
},{
  names: {
    de: "volbeat",
    en: "volbeat",
    fr: "muciole",
    ja: "バルビート"
  },
  number: 313
},{
  names: {
    de: "illumise",
    en: "illumise",
    fr: "lumivole",
    ja: "イルミーゼ"
  },
  number: 314
},{
  names: {
    de: "roselia",
    en: "roselia",
    fr: "rosélia",
    ja: "ロゼリア"
  },
  number: 315
},{
  names: {
    de: "schluppuck",
    en: "gulpin",
    fr: "gloupti",
    ja: "ゴクリン"
  },
  number: 316
},{
  names: {
    de: "schlukwech",
    en: "swalot",
    fr: "avaltout",
    ja: "マルノーム"
  },
  number: 317
},{
  names: {
    de: "kanivanha",
    en: "carvanha",
    fr: "carvanha",
    ja: "キバニア"
  },
  number: 318
},{
  names: {
    de: "tohaido",
    en: "sharpedo",
    fr: "sharpedo",
    ja: "サメハダー"
  },
  number: 319
},{
  names: {
    de: "wailmer",
    en: "wailmer",
    fr: "wailmer",
    ja: "ホエルコ"
  },
  number: 320
},{
  names: {
    de: "wailord",
    en: "wailord",
    fr: "wailord",
    ja: "ホエルオー"
  },
  number: 321
},{
  names: {
    de: "camaub",
    en: "numel",
    fr: "chamallot",
    ja: "ドンメル"
  },
  number: 322
},{
  names: {
    de: "camerupt",
    en: "camerupt",
    fr: "camérupt",
    ja: "バクーダ"
  },
  number: 323
},{
  names: {
    de: "qurtel",
    en: "torkoal",
    fr: "chartor",
    ja: "コータス"
  },
  number: 324
},{
  names: {
    de: "spoink",
    en: "spoink",
    fr: "spoink",
    ja: "バネブー"
  },
  number: 325
},{
  names: {
    de: "groink",
    en: "grumpig",
    fr: "groret",
    ja: "ブーピッグ"
  },
  number: 326
},{
  names: {
    de: "pandir",
    en: "spinda",
    fr: "spinda",
    ja: "パッチール"
  },
  number: 327
},{
  names: {
    de: "knacklion",
    en: "trapinch",
    fr: "kraknoix",
    ja: "ナックラー"
  },
  number: 328
},{
  names: {
    de: "vibrava",
    en: "vibrava",
    fr: "vibraninf",
    ja: "ビブラーバ"
  },
  number: 329
},{
  names: {
    de: "libelldra",
    en: "flygon",
    fr: "libégon",
    ja: "フライゴン"
  },
  number: 330
},{
  names: {
    de: "tuska",
    en: "cacnea",
    fr: "cacnea",
    ja: "サボネア"
  },
  number: 331
},{
  names: {
    de: "noktuska",
    en: "cacturne",
    fr: "cacturne",
    ja: "ノクタス"
  },
  number: 332
},{
  names: {
    de: "wablu",
    en: "swablu",
    fr: "tylton",
    ja: "チルット"
  },
  number: 333
},{
  names: {
    de: "altaria",
    en: "altaria",
    fr: "altaria",
    ja: "チルタリス"
  },
  number: 334
},{
  names: {
    de: "sengo",
    en: "zangoose",
    fr: "mangriff",
    ja: "ザングース"
  },
  number: 335
},{
  names: {
    de: "vipitis",
    en: "seviper",
    fr: "séviper",
    ja: "ハブネーク"
  },
  number: 336
},{
  names: {
    de: "lunastein",
    en: "lunatone",
    fr: "séléroc",
    ja: "ルナトーン"
  },
  number: 337
},{
  names: {
    de: "sonnfel",
    en: "solrock",
    fr: "solaroc",
    ja: "ソルロック"
  },
  number: 338
},{
  names: {
    de: "schmerbe",
    en: "barboach",
    fr: "barloche",
    ja: "ドジョッチ"
  },
  number: 339
},{
  names: {
    de: "welsar",
    en: "whiscash",
    fr: "barbicha",
    ja: "ナマズン"
  },
  number: 340
},{
  names: {
    de: "krebscorps",
    en: "corphish",
    fr: "écrapince",
    ja: "ヘイガニ"
  },
  number: 341
},{
  names: {
    de: "krebutack",
    en: "crawdaunt",
    fr: "colhomard",
    ja: "シザリガー"
  },
  number: 342
},{
  names: {
    de: "puppance",
    en: "baltoy",
    fr: "balbuto",
    ja: "ヤジロン"
  },
  number: 343
},{
  names: {
    de: "lepumentas",
    en: "claydol",
    fr: "kaorine",
    ja: "ネンドール"
  },
  number: 344
},{
  names: {
    de: "liliep",
    en: "lileep",
    fr: "lilia",
    ja: "リリーラ"
  },
  number: 345
},{
  names: {
    de: "wielie",
    en: "cradily",
    fr: "vacilys",
    ja: "ユレイドル"
  },
  number: 346
},{
  names: {
    de: "anorith",
    en: "anorith",
    fr: "anorith",
    ja: "アノプス"
  },
  number: 347
},{
  names: {
    de: "armaldo",
    en: "armaldo",
    fr: "armaldo",
    ja: "アーマルド"
  },
  number: 348
},{
  names: {
    de: "barschwa",
    en: "feebas",
    fr: "barpau",
    ja: "ヒンバス"
  },
  number: 349
},{
  names: {
    de: "milotic",
    en: "milotic",
    fr: "milobellus",
    ja: "ミロカロス"
  },
  number: 350
},{
  names: {
    de: "formeo",
    en: "castform",
    fr: "morphéo",
    ja: "ポワルン"
  },
  number: 351
},{
  names: {
    de: "kecleon",
    en: "kecleon",
    fr: "kecleon",
    ja: "カクレオン"
  },
  number: 352
},{
  names: {
    de: "shuppet",
    en: "shuppet",
    fr: "polichombr",
    ja: "カゲボウズ"
  },
  number: 353
},{
  names: {
    de: "banette",
    en: "banette",
    fr: "branette",
    ja: "ジュペッタ"
  },
  number: 354
},{
  names: {
    de: "zwirrlicht",
    en: "duskull",
    fr: "skelénox",
    ja: "ヨマワル"
  },
  number: 355
},{
  names: {
    de: "zwirrklop",
    en: "dusclops",
    fr: "téraclope",
    ja: "サマヨール"
  },
  number: 356
},{
  names: {
    de: "tropius",
    en: "tropius",
    fr: "tropius",
    ja: "トロピウス"
  },
  number: 357
},{
  names: {
    de: "palimpalim",
    en: "chimecho",
    fr: "éoko",
    ja: "チリーン"
  },
  number: 358
},{
  names: {
    de: "absol",
    en: "absol",
    fr: "absol",
    ja: "アブソル"
  },
  number: 359
},{
  names: {
    de: "isso",
    en: "wynaut",
    fr: "okéoké",
    ja: "ソーナノ"
  },
  number: 360
},{
  names: {
    de: "schneppke",
    en: "snorunt",
    fr: "stalgamin",
    ja: "ユキワラシ"
  },
  number: 361
},{
  names: {
    de: "firnontor",
    en: "glalie",
    fr: "oniglali",
    ja: "オニゴーリ"
  },
  number: 362
},{
  names: {
    de: "seemops",
    en: "spheal",
    fr: "obalie",
    ja: "タマザラシ"
  },
  number: 363
},{
  names: {
    de: "seejong",
    en: "sealeo",
    fr: "phogleur",
    ja: "トドグラー"
  },
  number: 364
},{
  names: {
    de: "walraisa",
    en: "walrein",
    fr: "kaimorse",
    ja: "トドゼルガ"
  },
  number: 365
},{
  names: {
    de: "perlu",
    en: "clamperl",
    fr: "coquiperl",
    ja: "パールル"
  },
  number: 366
},{
  names: {
    de: "aalabyss",
    en: "huntail",
    fr: "serpang",
    ja: "ハンテール"
  },
  number: 367
},{
  names: {
    de: "saganabyss",
    en: "gorebyss",
    fr: "rosabyss",
    ja: "サクラビス"
  },
  number: 368
},{
  names: {
    de: "relicanth",
    en: "relicanth",
    fr: "relicanth",
    ja: "ジーランス"
  },
  number: 369
},{
  names: {
    de: "liebiskus",
    en: "luvdisc",
    fr: "lovdisc",
    ja: "ラブカス"
  },
  number: 370
},{
  names: {
    de: "kindwurm",
    en: "bagon",
    fr: "draby",
    ja: "タツベイ"
  },
  number: 371
},{
  names: {
    de: "draschel",
    en: "shelgon",
    fr: "drackhaus",
    ja: "コモルー"
  },
  number: 372
},{
  names: {
    de: "brutalanda",
    en: "salamence",
    fr: "drattak",
    ja: "ボーマンダ"
  },
  number: 373
},{
  names: {
    de: "tanhel",
    en: "beldum",
    fr: "terhal",
    ja: "ダンバル"
  },
  number: 374
},{
  names: {
    de: "metang",
    en: "metang",
    fr: "métang",
    ja: "メタング"
  },
  number: 375
},{
  names: {
    de: "metagross",
    en: "metagross",
    fr: "métalosse",
    ja: "メタグロス"
  },
  number: 376
},{
  names: {
    de: "regirock",
    en: "regirock",
    fr: "regirock",
    ja: "レジロック"
  },
  number: 377
},{
  names: {
    de: "regice",
    en: "regice",
    fr: "regice",
    ja: "レジアイス"
  },
  number: 378
},{
  names: {
    de: "registeel",
    en: "registeel",
    fr: "registeel",
    ja: "レジスチル"
  },
  number: 379
},{
  names: {
    de: "latias",
    en: "latias",
    fr: "latias",
    ja: "ラティアス"
  },
  number: 380
},{
  names: {
    de: "latios",
    en: "latios",
    fr: "latios",
    ja: "ラティオス"
  },
  number: 381
},{
  names: {
    de: "kyogre",
    en: "kyogre",
    fr: "kyogre",
    ja: "カイオーガ"
  },
  number: 382
},{
  names: {
    de: "groudon",
    en: "groudon",
    fr: "groudon",
    ja: "グラードン"
  },
  number: 383
},{
  names: {
    de: "rayquaza",
    en: "rayquaza",
    fr: "rayquaza",
    ja: "レックウザ"
  },
  number: 384
},{
  names: {
    de: "jirachi",
    en: "jirachi",
    fr: "jirachi",
    ja: "ジラーチ"
  },
  number: 385
},{
  names: {
    de: "deoxys",
    en: "deoxys",
    fr: "deoxys",
    ja: "デオキシス"
  },
  number: 386
},{
  names: {
    de: "chelast",
    en: "turtwig",
    fr: "tortipouss",
    ja: "ナエトル"
  },
  number: 387
},{
  names: {
    de: "chelcarain",
    en: "grotle",
    fr: "boskara",
    ja: "ハヤシガメ"
  },
  number: 388
},{
  names: {
    de: "chelterrar",
    en: "torterra",
    fr: "torterra",
    ja: "ドダイトス"
  },
  number: 389
},{
  names: {
    de: "panflam",
    en: "chimchar",
    fr: "ouisticram",
    ja: "ヒコザル"
  },
  number: 390
},{
  names: {
    de: "panpyro",
    en: "monferno",
    fr: "chimpenfeu",
    ja: "モウカザル"
  },
  number: 391
},{
  names: {
    de: "panferno",
    en: "infernape",
    fr: "simiabraz",
    ja: "ゴウカザル"
  },
  number: 392
},{
  names: {
    de: "plinfa",
    en: "piplup",
    fr: "tiplouf",
    ja: "ポッチャマ"
  },
  number: 393
},{
  names: {
    de: "pliprin",
    en: "prinplup",
    fr: "prinplouf",
    ja: "ポッタイシ"
  },
  number: 394
},{
  names: {
    de: "impoleon",
    en: "empoleon",
    fr: "pingoléon",
    ja: "エンペルト"
  },
  number: 395
},{
  names: {
    de: "staralili",
    en: "starly",
    fr: "étourmi",
    ja: "ムックル"
  },
  number: 396
},{
  names: {
    de: "staravia",
    en: "staravia",
    fr: "étourvol",
    ja: "ムクバード"
  },
  number: 397
},{
  names: {
    de: "staraptor",
    en: "staraptor",
    fr: "étouraptor",
    ja: "ムクホーク"
  },
  number: 398
},{
  names: {
    de: "bidiza",
    en: "bidoof",
    fr: "keunottor",
    ja: "ビッパ"
  },
  number: 399
},{
  names: {
    de: "bidifas",
    en: "bibarel",
    fr: "castorno",
    ja: "ビーダル"
  },
  number: 400
},{
  names: {
    de: "zirpurze",
    en: "kricketot",
    fr: "crikzik",
    ja: "コロボーシ"
  },
  number: 401
},{
  names: {
    de: "zirpeise",
    en: "kricketune",
    fr: "mélokrik",
    ja: "コロトック"
  },
  number: 402
},{
  names: {
    de: "sheinux",
    en: "shinx",
    fr: "lixy",
    ja: "コリンク"
  },
  number: 403
},{
  names: {
    de: "luxio",
    en: "luxio",
    fr: "luxio",
    ja: "ルクシオ"
  },
  number: 404
},{
  names: {
    de: "luxtra",
    en: "luxray",
    fr: "luxray",
    ja: "レントラー"
  },
  number: 405
},{
  names: {
    de: "knospi",
    en: "budew",
    fr: "rozbouton",
    ja: "スボミー"
  },
  number: 406
},{
  names: {
    de: "roserade",
    en: "roserade",
    fr: "roserade",
    ja: "ロズレイド"
  },
  number: 407
},{
  names: {
    de: "koknodon",
    en: "cranidos",
    fr: "kranidos",
    ja: "ズガイドス"
  },
  number: 408
},{
  names: {
    de: "rameidon",
    en: "rampardos",
    fr: "charkos",
    ja: "ラムパルド"
  },
  number: 409
},{
  names: {
    de: "schilterus",
    en: "shieldon",
    fr: "dinoclier",
    ja: "タテトプス"
  },
  number: 410
},{
  names: {
    de: "bollterus",
    en: "bastiodon",
    fr: "bastiodon",
    ja: "トリデプス"
  },
  number: 411
},{
  names: {
    de: "burmy",
    en: "burmy",
    fr: "cheniti",
    ja: "ミノムッチ"
  },
  number: 412
},{
  names: {
    de: "burmadame",
    en: "wormadam",
    fr: "cheniselle",
    ja: "ミノマダム"
  },
  number: 413
},{
  names: {
    de: "moterpel",
    en: "mothim",
    fr: "papilord",
    ja: "ガーメイル"
  },
  number: 414
},{
  names: {
    de: "wadribie",
    en: "combee",
    fr: "apitrini",
    ja: "ミツハニー"
  },
  number: 415
},{
  names: {
    de: "honweisel",
    en: "vespiquen",
    fr: "apireine",
    ja: "ビークイン"
  },
  number: 416
},{
  names: {
    de: "pachirisu",
    en: "pachirisu",
    fr: "pachirisu",
    ja: "パチリス"
  },
  number: 417
},{
  names: {
    de: "bamelin",
    en: "buizel",
    fr: "mustébouée",
    ja: "ブイゼル"
  },
  number: 418
},{
  names: {
    de: "bojelin",
    en: "floatzel",
    fr: "mustéflott",
    ja: "フローゼル"
  },
  number: 419
},{
  names: {
    de: "kikugi",
    en: "cherubi",
    fr: "ceribou",
    ja: "チェリンボ"
  },
  number: 420
},{
  names: {
    de: "kinoso",
    en: "cherrim",
    fr: "ceriflor",
    ja: "チェリム"
  },
  number: 421
},{
  names: {
    de: "schalellos",
    en: "shellos",
    fr: "sancoki",
    ja: "カラナクシ"
  },
  number: 422
},{
  names: {
    de: "gastrodon",
    en: "gastrodon",
    fr: "tritosor",
    ja: "トリトドン"
  },
  number: 423
},{
  names: {
    de: "ambidiffel",
    en: "ambipom",
    fr: "capidextre",
    ja: "エテボース"
  },
  number: 424
},{
  names: {
    de: "driftlon",
    en: "drifloon",
    fr: "baudrive",
    ja: "フワンテ"
  },
  number: 425
},{
  names: {
    de: "drifzepeli",
    en: "drifblim",
    fr: "grodrive",
    ja: "フワライド"
  },
  number: 426
},{
  names: {
    de: "haspiror",
    en: "buneary",
    fr: "laporeille",
    ja: "ミミロル"
  },
  number: 427
},{
  names: {
    de: "schlapor",
    en: "lopunny",
    fr: "lockpin",
    ja: "ミミロップ"
  },
  number: 428
},{
  names: {
    de: "traunmagil",
    en: "mismagius",
    fr: "magirêve",
    ja: "ムウマージ"
  },
  number: 429
},{
  names: {
    de: "kramshef",
    en: "honchkrow",
    fr: "corboss",
    ja: "ドンカラス"
  },
  number: 430
},{
  names: {
    de: "charmian",
    en: "glameow",
    fr: "chaglam",
    ja: "ニャルマー"
  },
  number: 431
},{
  names: {
    de: "shnurgarst",
    en: "purugly",
    fr: "chaffreux",
    ja: "ブニャット"
  },
  number: 432
},{
  names: {
    de: "klingplim",
    en: "chingling",
    fr: "korillon",
    ja: "リーシャン"
  },
  number: 433
},{
  names: {
    de: "skunkapuh",
    en: "stunky",
    fr: "moufouette",
    ja: "スカンプー"
  },
  number: 434
},{
  names: {
    de: "skuntank",
    en: "skuntank",
    fr: "moufflair",
    ja: "スカタンク"
  },
  number: 435
},{
  names: {
    de: "bronzel",
    en: "bronzor",
    fr: "archéomire",
    ja: "ドーミラー"
  },
  number: 436
},{
  names: {
    de: "bronzong",
    en: "bronzong",
    fr: "archéodong",
    ja: "ドータクン"
  },
  number: 437
},{
  names: {
    de: "mobai",
    en: "bonsly",
    fr: "manzaï",
    ja: "ウソハチ"
  },
  number: 438
},{
  names: {
    de: "pantimimi",
    en: "mime jr.",
    fr: "mime jr",
    ja: "マネネ"
  },
  number: 439
},{
  names: {
    de: "wonneira",
    en: "happiny",
    fr: "ptiravi",
    ja: "ピンプク"
  },
  number: 440
},{
  names: {
    de: "plaudagei",
    en: "chatot",
    fr: "pijako",
    ja: "ペラップ"
  },
  number: 441
},{
  names: {
    de: "kryppuk",
    en: "spiritomb",
    fr: "spiritomb",
    ja: "ミカルゲ"
  },
  number: 442
},{
  names: {
    de: "kaumalat",
    en: "gible",
    fr: "griknot",
    ja: "フカマル"
  },
  number: 443
},{
  names: {
    de: "knarksel",
    en: "gabite",
    fr: "carmache",
    ja: "ガバイト"
  },
  number: 444
},{
  names: {
    de: "knakrack",
    en: "garchomp",
    fr: "carchacrok",
    ja: "ガブリアス"
  },
  number: 445
},{
  names: {
    de: "mampfaxo",
    en: "munchlax",
    fr: "goinfrex",
    ja: "ゴンベ"
  },
  number: 446
},{
  names: {
    de: "riolu",
    en: "riolu",
    fr: "riolu",
    ja: "リオル"
  },
  number: 447
},{
  names: {
    de: "lucario",
    en: "lucario",
    fr: "lucario",
    ja: "ルカリオ"
  },
  number: 448
},{
  names: {
    de: "hippopotas",
    en: "hippopotas",
    fr: "hippopotas",
    ja: "ヒポポタス"
  },
  number: 449
},{
  names: {
    de: "hippoterus",
    en: "hippowdon",
    fr: "hippodocus",
    ja: "カバルドン"
  },
  number: 450
},{
  names: {
    de: "pionskora",
    en: "skorupi",
    fr: "rapion",
    ja: "スコルピ"
  },
  number: 451
},{
  names: {
    de: "piondragi",
    en: "drapion",
    fr: "drascore",
    ja: "ドラピオン"
  },
  number: 452
},{
  names: {
    de: "glibunkel",
    en: "croagunk",
    fr: "cradopaud",
    ja: "グレッグル"
  },
  number: 453
},{
  names: {
    de: "toxiquak",
    en: "toxicroak",
    fr: "coatox",
    ja: "ドクロッグ"
  },
  number: 454
},{
  names: {
    de: "venuflibis",
    en: "carnivine",
    fr: "vortente",
    ja: "マスキッパ"
  },
  number: 455
},{
  names: {
    de: "finneon",
    en: "finneon",
    fr: "écayon",
    ja: "ケイコウオ"
  },
  number: 456
},{
  names: {
    de: "lumineon",
    en: "lumineon",
    fr: "luminéon",
    ja: "ネオラント"
  },
  number: 457
},{
  names: {
    de: "mantirps",
    en: "mantyke",
    fr: "babimanta",
    ja: "タマンタ"
  },
  number: 458
},{
  names: {
    de: "shnebedeck",
    en: "snover",
    fr: "blizzi",
    ja: "ユキカブリ"
  },
  number: 459
},{
  names: {
    de: "rexblisar",
    en: "abomasnow",
    fr: "blizzaroi",
    ja: "ユキノオー"
  },
  number: 460
},{
  names: {
    de: "snibunna",
    en: "weavile",
    fr: "dimoret",
    ja: "マニューラ"
  },
  number: 461
},{
  names: {
    de: "magnezone",
    en: "magnezone",
    fr: "magnézone",
    ja: "ジバコイル"
  },
  number: 462
},{
  names: {
    de: "schlurplek",
    en: "lickilicky",
    fr: "coudlangue",
    ja: "ベロベルト"
  },
  number: 463
},{
  names: {
    de: "rihornior",
    en: "rhyperior",
    fr: "rhinastoc",
    ja: "ドサイドン"
  },
  number: 464
},{
  names: {
    de: "tangoloss",
    en: "tangrowth",
    fr: "bouldeneu",
    ja: "モジャンボ"
  },
  number: 465
},{
  names: {
    de: "elevoltek",
    en: "electivire",
    fr: "élekable",
    ja: "エレキブル"
  },
  number: 466
},{
  names: {
    de: "magbrant",
    en: "magmortar",
    fr: "maganon",
    ja: "ブーバーン"
  },
  number: 467
},{
  names: {
    de: "togekiss",
    en: "togekiss",
    fr: "togekiss",
    ja: "トゲキッス"
  },
  number: 468
},{
  names: {
    de: "yanmega",
    en: "yanmega",
    fr: "yanméga",
    ja: "メガヤンマ"
  },
  number: 469
},{
  names: {
    de: "folipurba",
    en: "leafeon",
    fr: "phyllali",
    ja: "リーフィア"
  },
  number: 470
},{
  names: {
    de: "glaziola",
    en: "glaceon",
    fr: "givrali",
    ja: "グレイシア"
  },
  number: 471
},{
  names: {
    de: "skorgro",
    en: "gliscor",
    fr: "scorvol",
    ja: "グライオン"
  },
  number: 472
},{
  names: {
    de: "mamutel",
    en: "mamoswine",
    fr: "mammochon",
    ja: "マンムー"
  },
  number: 473
},{
  names: {
    de: "porygon-z",
    en: "porygon-z",
    fr: "porygon-z",
    ja: "ポリゴンz"
  },
  number: 474
},{
  names: {
    de: "galagladi",
    en: "gallade",
    fr: "gallame",
    ja: "エルレイド"
  },
  number: 475
},{
  names: {
    de: "voluminas",
    en: "probopass",
    fr: "tarinorme",
    ja: "ダイノーズ"
  },
  number: 476
},{
  names: {
    de: "zwirrfinst",
    en: "dusknoir",
    fr: "noctunoir",
    ja: "ヨノワール"
  },
  number: 477
},{
  names: {
    de: "frosdedje",
    en: "froslass",
    fr: "momartik",
    ja: "ユキメノコ"
  },
  number: 478
},{
  names: {
    de: "rotom",
    en: "rotom",
    fr: "motisma",
    ja: "ロトム"
  },
  number: 479
},{
  names: {
    de: "selfe",
    en: "uxie",
    fr: "créhelf",
    ja: "ユクシー"
  },
  number: 480
},{
  names: {
    de: "vesprit",
    en: "mesprit",
    fr: "créfollet",
    ja: "エムリット"
  },
  number: 481
},{
  names: {
    de: "tobutz",
    en: "azelf",
    fr: "créfadet",
    ja: "アグノム"
  },
  number: 482
},{
  names: {
    de: "dialga",
    en: "dialga",
    fr: "dialga",
    ja: "ディアルガ"
  },
  number: 483
},{
  names: {
    de: "palkia",
    en: "palkia",
    fr: "palkia",
    ja: "パルキア"
  },
  number: 484
},{
  names: {
    de: "heatran",
    en: "heatran",
    fr: "heatran",
    ja: "ヒードラン"
  },
  number: 485
},{
  names: {
    de: "regigigas",
    en: "regigigas",
    fr: "regigigas",
    ja: "レジギガス"
  },
  number: 486
},{
  names: {
    de: "giratina",
    en: "giratina",
    fr: "giratina",
    ja: "ギラティナ"
  },
  number: 487
},{
  names: {
    de: "cresselia",
    en: "cresselia",
    fr: "cresselia",
    ja: "クレセリア"
  },
  number: 488
},{
  names: {
    de: "phione",
    en: "phione",
    fr: "phione",
    ja: "フィオネ"
  },
  number: 489
},{
  names: {
    de: "manaphy",
    en: "manaphy",
    fr: "manaphy",
    ja: "マナフィ"
  },
  number: 490
},{
  names: {
    de: "darkrai",
    en: "darkrai",
    fr: "darkrai",
    ja: "ダークライ"
  },
  number: 491
},{
  names: {
    de: "shaymin",
    en: "shaymin",
    fr: "shaymin",
    ja: "シェイミ"
  },
  number: 492
},{
  names: {
    de: "arceus",
    en: "arceus",
    fr: "arceus",
    ja: "アルセウス"
  },
  number: 493
},{
  names: {
    de: "victini",
    en: "victini",
    fr: "victini",
    ja: "ビクティニ"
  },
  number: 494
},{
  names: {
    de: "serpifeu",
    en: "snivy",
    fr: "vipélierre",
    ja: "ツタージャ"
  },
  number: 495
},{
  names: {
    de: "efoserp",
    en: "servine",
    fr: "lianaja",
    ja: "ジャノビー"
  },
  number: 496
},{
  names: {
    de: "serpiroyal",
    en: "serperior",
    fr: "majaspic",
    ja: "ジャローダ"
  },
  number: 497
},{
  names: {
    de: "floink",
    en: "tepig",
    fr: "gruikui",
    ja: "ポカブ"
  },
  number: 498
},{
  names: {
    de: "ferkokel",
    en: "pignite",
    fr: "grotichon",
    ja: "チャオブー"
  },
  number: 499
},{
  names: {
    de: "flambirex",
    en: "emboar",
    fr: "roitiflam",
    ja: "エンブオー"
  },
  number: 500
},{
  names: {
    de: "ottaro",
    en: "oshawott",
    fr: "moustillon",
    ja: "ミジュマル"
  },
  number: 501
},{
  names: {
    de: "zwottronin",
    en: "dewott",
    fr: "mateloutre",
    ja: "フタチマル"
  },
  number: 502
},{
  names: {
    de: "admurai",
    en: "samurott",
    fr: "clamiral",
    ja: "ダイケンキ"
  },
  number: 503
},{
  names: {
    de: "nagelotz",
    en: "patrat",
    fr: "ratentif",
    ja: "ミネズミ"
  },
  number: 504
},{
  names: {
    de: "kukmarda",
    en: "watchog",
    fr: "miradar",
    ja: "ミルホッグ"
  },
  number: 505
},{
  names: {
    de: "yorkleff",
    en: "lillipup",
    fr: "ponchiot",
    ja: "ヨーテリー"
  },
  number: 506
},{
  names: {
    de: "terribark",
    en: "herdier",
    fr: "ponchien",
    ja: "ハーデリア"
  },
  number: 507
},{
  names: {
    de: "bissbark",
    en: "stoutland",
    fr: "mastouffe",
    ja: "ムーランド"
  },
  number: 508
},{
  names: {
    de: "felilou",
    en: "purrloin",
    fr: "chacripan",
    ja: "チョロネコ"
  },
  number: 509
},{
  names: {
    de: "kleoparda",
    en: "liepard",
    fr: "léopardus",
    ja: "レパルダス"
  },
  number: 510
},{
  names: {
    de: "vegimak",
    en: "pansage",
    fr: "feuillajou",
    ja: "ヤナップ"
  },
  number: 511
},{
  names: {
    de: "vegichita",
    en: "simisage",
    fr: "feuilloutan",
    ja: "ヤナッキー"
  },
  number: 512
},{
  names: {
    de: "grillmak",
    en: "pansear",
    fr: "flamajou",
    ja: "バオップ"
  },
  number: 513
},{
  names: {
    de: "grillchita",
    en: "simisear",
    fr: "flamoutan",
    ja: "バオッキー"
  },
  number: 514
},{
  names: {
    de: "sodamak",
    en: "panpour",
    fr: "flotajou",
    ja: "ヒヤップ"
  },
  number: 515
},{
  names: {
    de: "sodachita",
    en: "simipour",
    fr: "flotoutan",
    ja: "ヒヤッキー"
  },
  number: 516
},{
  names: {
    de: "somniam",
    en: "munna",
    fr: "munna",
    ja: "ムンナ"
  },
  number: 517
},{
  names: {
    de: "somnivora",
    en: "musharna",
    fr: "mushana",
    ja: "ムシャーナ"
  },
  number: 518
},{
  names: {
    de: "dusselgurr",
    en: "pidove",
    fr: "poichigeon",
    ja: "マメパト"
  },
  number: 519
},{
  names: {
    de: "navitaub",
    en: "tranquill",
    fr: "colombeau",
    ja: "ハトーボー"
  },
  number: 520
},{
  names: {
    de: "fasasnob",
    en: "unfezant",
    fr: "déflaisan",
    ja: "ケンホロウ"
  },
  number: 521
},{
  names: {
    de: "elezeba",
    en: "blitzle",
    fr: "zébibron",
    ja: "シママ"
  },
  number: 522
},{
  names: {
    de: "zebritz",
    en: "zebstrika",
    fr: "zéblitz",
    ja: "ゼブライカ"
  },
  number: 523
},{
  names: {
    de: "kiesling",
    en: "roggenrola",
    fr: "nodulithe",
    ja: "ダンゴロ"
  },
  number: 524
},{
  names: {
    de: "sedimantur",
    en: "boldore",
    fr: "géolithe",
    ja: "ガントル"
  },
  number: 525
},{
  names: {
    de: "brockoloss",
    en: "gigalith",
    fr: "gigalithe",
    ja: "ギガイアス"
  },
  number: 526
},{
  names: {
    de: "fleknoil",
    en: "woobat",
    fr: "chovsourir",
    ja: "コロモリ"
  },
  number: 527
},{
  names: {
    de: "fletiamo",
    en: "swoobat",
    fr: "rhinolove",
    ja: "ココロモリ"
  },
  number: 528
},{
  names: {
    de: "rotomurf",
    en: "drilbur",
    fr: "rototaupe",
    ja: "モグリュー"
  },
  number: 529
},{
  names: {
    de: "stalobor",
    en: "excadrill",
    fr: "minotaupe",
    ja: "ドリュウズ"
  },
  number: 530
},{
  names: {
    de: "ohrdoch",
    en: "audino",
    fr: "nanméouïe",
    ja: "タブンネ"
  },
  number: 531
},{
  names: {
    de: "praktibalk",
    en: "timburr",
    fr: "charpenti",
    ja: "ドッコラー"
  },
  number: 532
},{
  names: {
    de: "strepoli",
    en: "gurdurr",
    fr: "ouvrifier",
    ja: "ドテッコツ"
  },
  number: 533
},{
  names: {
    de: "meistagrif",
    en: "conkeldurr",
    fr: "bétochef",
    ja: "ローブシン"
  },
  number: 534
},{
  names: {
    de: "schallquap",
    en: "tympole",
    fr: "tritonde",
    ja: "オタマロ"
  },
  number: 535
},{
  names: {
    de: "mebrana",
    en: "palpitoad",
    fr: "batracné",
    ja: "ガマガル"
  },
  number: 536
},{
  names: {
    de: "branawarz",
    en: "seismitoad",
    fr: "crapustule",
    ja: "ガマゲロゲ"
  },
  number: 537
},{
  names: {
    de: "jiutesto",
    en: "throh",
    fr: "judokrak",
    ja: "ナゲキ"
  },
  number: 538
},{
  names: {
    de: "karadonis",
    en: "sawk",
    fr: "karaclée",
    ja: "ダゲキ"
  },
  number: 539
},{
  names: {
    de: "strawickl",
    en: "sewaddle",
    fr: "larveyette",
    ja: "クルミル"
  },
  number: 540
},{
  names: {
    de: "folikon",
    en: "swadloon",
    fr: "couverdure",
    ja: "クルマユ"
  },
  number: 541
},{
  names: {
    de: "matrifol",
    en: "leavanny",
    fr: "manternel",
    ja: "ハハコモリ"
  },
  number: 542
},{
  names: {
    de: "toxiped",
    en: "venipede",
    fr: "venipatte",
    ja: "フシデ"
  },
  number: 543
},{
  names: {
    de: "rollum",
    en: "whirlipede",
    fr: "scobolide",
    ja: "ホイーガ"
  },
  number: 544
},{
  names: {
    de: "cerapendra",
    en: "scolipede",
    fr: "brutapode",
    ja: "ペンドラー"
  },
  number: 545
},{
  names: {
    de: "waumboll",
    en: "cottonee",
    fr: "doudouvet",
    ja: "モンメン"
  },
  number: 546
},{
  names: {
    de: "elfun",
    en: "whimsicott",
    fr: "farfaduvet",
    ja: "エルフーン"
  },
  number: 547
},{
  names: {
    de: "lilminip",
    en: "petilil",
    fr: "chlorobule",
    ja: "チュリネ"
  },
  number: 548
},{
  names: {
    de: "dressella",
    en: "lilligant",
    fr: "fragilady",
    ja: "ドレディア"
  },
  number: 549
},{
  names: {
    de: "barschuft",
    en: "basculin",
    fr: "bargantua",
    ja: "バスラオ"
  },
  number: 550
},{
  names: {
    de: "ganovil",
    en: "sandile",
    fr: "mascaïman",
    ja: "メグロコ"
  },
  number: 551
},{
  names: {
    de: "rokkaiman",
    en: "krokorok",
    fr: "escroco",
    ja: "ワルビル"
  },
  number: 552
},{
  names: {
    de: "rabigator",
    en: "krookodile",
    fr: "crocorible",
    ja: "ワルビアル"
  },
  number: 553
},{
  names: {
    de: "flampion",
    en: "darumaka",
    fr: "darumarond",
    ja: "ダルマッカ"
  },
  number: 554
},{
  names: {
    de: "flampivian",
    en: "darmanitan",
    fr: "darumacho",
    ja: "ヒヒダルマ"
  },
  number: 555
},{
  names: {
    de: "maracamba",
    en: "maractus",
    fr: "maracachi",
    ja: "マラカッチ"
  },
  number: 556
},{
  names: {
    de: "lithomith",
    en: "dwebble",
    fr: "crabicoque",
    ja: "イシズマイ"
  },
  number: 557
},{
  names: {
    de: "castellith",
    en: "crustle",
    fr: "crabaraque",
    ja: "イワパレス"
  },
  number: 558
},{
  names: {
    de: "zurrokex",
    en: "scraggy",
    fr: "baggiguane",
    ja: "ズルッグ"
  },
  number: 559
},{
  names: {
    de: "irokex",
    en: "scrafty",
    fr: "baggaïd",
    ja: "ズルズキン"
  },
  number: 560
},{
  names: {
    de: "symvolara",
    en: "sigilyph",
    fr: "cryptéro",
    ja: "シンボラー"
  },
  number: 561
},{
  names: {
    de: "makabaja",
    en: "yamask",
    fr: "tutafeh",
    ja: "デスマス"
  },
  number: 562
},{
  names: {
    de: "echnatoll",
    en: "cofagrigus",
    fr: "tutankafer",
    ja: "デスカーン"
  },
  number: 563
},{
  names: {
    de: "galapaflos",
    en: "tirtouga",
    fr: "carapagos",
    ja: "プロトーガ"
  },
  number: 564
},{
  names: {
    de: "karippas",
    en: "carracosta",
    fr: "mégapagos",
    ja: "アバゴーラ"
  },
  number: 565
},{
  names: {
    de: "flapteryx",
    en: "archen",
    fr: "arkéapti",
    ja: "アーケン"
  },
  number: 566
},{
  names: {
    de: "aeropteryx",
    en: "archeops",
    fr: "aéroptéryx",
    ja: "アーケオス"
  },
  number: 567
},{
  names: {
    de: "unratütox",
    en: "trubbish",
    fr: "miamiasme",
    ja: "ヤブクロン"
  },
  number: 568
},{
  names: {
    de: "deponitox",
    en: "garbodor",
    fr: "miasmax",
    ja: "ダストダス"
  },
  number: 569
},{
  names: {
    de: "zorua",
    en: "zorua",
    fr: "zorua",
    ja: "ゾロア"
  },
  number: 570
},{
  names: {
    de: "zoroark",
    en: "zoroark",
    fr: "zoroark",
    ja: "ゾロアーク"
  },
  number: 571
},{
  names: {
    de: "picochilla",
    en: "minccino",
    fr: "chinchidou",
    ja: "チラーミィ"
  },
  number: 572
},{
  names: {
    de: "chillabell",
    en: "cinccino",
    fr: "pashmilla",
    ja: "チラチーノ"
  },
  number: 573
},{
  names: {
    de: "mollimorba",
    en: "gothita",
    fr: "scrutella",
    ja: "ゴチム"
  },
  number: 574
},{
  names: {
    de: "hypnomorba",
    en: "gothorita",
    fr: "mesmérella",
    ja: "ゴチミル"
  },
  number: 575
},{
  names: {
    de: "morbitesse",
    en: "gothitelle",
    fr: "sidérella",
    ja: "ゴチルゼル"
  },
  number: 576
},{
  names: {
    de: "monozyto",
    en: "solosis",
    fr: "nucléos",
    ja: "ユニラン"
  },
  number: 577
},{
  names: {
    de: "mitodos",
    en: "duosion",
    fr: "méios",
    ja: "ダブラン"
  },
  number: 578
},{
  names: {
    de: "zytomega",
    en: "reuniclus",
    fr: "symbios",
    ja: "ランクルス"
  },
  number: 579
},{
  names: {
    de: "piccolente",
    en: "ducklett",
    fr: "couaneton",
    ja: "コアルヒー"
  },
  number: 580
},{
  names: {
    de: "swaroness",
    en: "swanna",
    fr: "lakmécygne",
    ja: "スワンナ"
  },
  number: 581
},{
  names: {
    de: "gelatini",
    en: "vanillite",
    fr: "sorbébé",
    ja: "バニプッチ"
  },
  number: 582
},{
  names: {
    de: "gelatroppo",
    en: "vanillish",
    fr: "sorboul",
    ja: "バニリッチ"
  },
  number: 583
},{
  names: {
    de: "gelatwino",
    en: "vanilluxe",
    fr: "sorbouboul",
    ja: "バイバニラ"
  },
  number: 584
},{
  names: {
    de: "sesokitz",
    en: "deerling",
    fr: "vivaldaim",
    ja: "シキジカ"
  },
  number: 585
},{
  names: {
    de: "kronjuwild",
    en: "sawsbuck",
    fr: "haydaim",
    ja: "メブキジカ"
  },
  number: 586
},{
  names: {
    de: "emolga",
    en: "emolga",
    fr: "emolga",
    ja: "エモンガ"
  },
  number: 587
},{
  names: {
    de: "laukaps",
    en: "karrablast",
    fr: "carabing",
    ja: "カブルモ"
  },
  number: 588
},{
  names: {
    de: "cavalanzas",
    en: "escavalier",
    fr: "lançargot",
    ja: "シュバルゴ"
  },
  number: 589
},{
  names: {
    de: "tarnpignon",
    en: "foongus",
    fr: "trompignon",
    ja: "タマゲタケ"
  },
  number: 590
},{
  names: {
    de: "hutsassa",
    en: "amoonguss",
    fr: "gaulet",
    ja: "モロバレル"
  },
  number: 591
},{
  names: {
    de: "quabbel",
    en: "frillish",
    fr: "viskuse",
    ja: "プルリル"
  },
  number: 592
},{
  names: {
    de: "apoquallyp",
    en: "jellicent",
    fr: "moyade",
    ja: "ブルンゲル"
  },
  number: 593
},{
  names: {
    de: "mamolida",
    en: "alomomola",
    fr: "mamanbo",
    ja: "ママンボウ"
  },
  number: 594
},{
  names: {
    de: "wattzapf",
    en: "joltik",
    fr: "statitik",
    ja: "バチュル"
  },
  number: 595
},{
  names: {
    de: "voltula",
    en: "galvantula",
    fr: "mygavolt",
    ja: "デンチュラ"
  },
  number: 596
},{
  names: {
    de: "kastadur",
    en: "ferroseed",
    fr: "grindur",
    ja: "テッシード"
  },
  number: 597
},{
  names: {
    de: "tentantel",
    en: "ferrothorn",
    fr: "noacier",
    ja: "ナットレイ"
  },
  number: 598
},{
  names: {
    de: "klikk",
    en: "klink",
    fr: "tic",
    ja: "ギアル"
  },
  number: 599
},{
  names: {
    de: "kliklak",
    en: "klang",
    fr: "clic",
    ja: "ギギアル"
  },
  number: 600
},{
  names: {
    de: "klikdiklak",
    en: "klinklang",
    fr: "cliticlic",
    ja: "ギギギアル"
  },
  number: 601
},{
  names: {
    de: "zapplardin",
    en: "tynamo",
    fr: "anchwatt",
    ja: "シビシラス"
  },
  number: 602
},{
  names: {
    de: "zapplalek",
    en: "eelektrik",
    fr: "lampéroie",
    ja: "シビビール"
  },
  number: 603
},{
  names: {
    de: "zapplarang",
    en: "eelektross",
    fr: "ohmassacre",
    ja: "シビルドン"
  },
  number: 604
},{
  names: {
    de: "pygraulon",
    en: "elgyem",
    fr: "lewsor",
    ja: "リグレー"
  },
  number: 605
},{
  names: {
    de: "megalon",
    en: "beheeyem",
    fr: "neitram",
    ja: "オーベム"
  },
  number: 606
},{
  names: {
    de: "lichtel",
    en: "litwick",
    fr: "funécire",
    ja: "ヒトモシ"
  },
  number: 607
},{
  names: {
    de: "laternecto",
    en: "lampent",
    fr: "mélancolux",
    ja: "ランプラー"
  },
  number: 608
},{
  names: {
    de: "skelabra",
    en: "chandelure",
    fr: "lugulabre",
    ja: "シャンデラ"
  },
  number: 609
},{
  names: {
    de: "milza",
    en: "axew",
    fr: "coupenotte",
    ja: "キバゴ"
  },
  number: 610
},{
  names: {
    de: "sharfax",
    en: "fraxure",
    fr: "incisache",
    ja: "オノンド"
  },
  number: 611
},{
  names: {
    de: "maxax",
    en: "haxorus",
    fr: "tranchodon",
    ja: "オノノクス"
  },
  number: 612
},{
  names: {
    de: "petznief",
    en: "cubchoo",
    fr: "polarhume",
    ja: "クマシュン"
  },
  number: 613
},{
  names: {
    de: "siberio",
    en: "beartic",
    fr: "polagriffe",
    ja: "ツンベアー"
  },
  number: 614
},{
  names: {
    de: "frigometri",
    en: "cryogonal",
    fr: "hexagel",
    ja: "フリージオ"
  },
  number: 615
},{
  names: {
    de: "schnuthelm",
    en: "shelmet",
    fr: "escargaume",
    ja: "チョボマキ"
  },
  number: 616
},{
  names: {
    de: "hydragil",
    en: "accelgor",
    fr: "limaspeed",
    ja: "アギルダー"
  },
  number: 617
},{
  names: {
    de: "flunschlik",
    en: "stunfisk",
    fr: "limonde",
    ja: "マッギョ"
  },
  number: 618
},{
  names: {
    de: "lin-fu",
    en: "mienfoo",
    fr: "kungfouine",
    ja: "コジョフー"
  },
  number: 619
},{
  names: {
    de: "wie-shu",
    en: "mienshao",
    fr: "shaofouine",
    ja: "コジョンド"
  },
  number: 620
},{
  names: {
    de: "shardrago",
    en: "druddigon",
    fr: "drakkarmin",
    ja: "クリムガン"
  },
  number: 621
},{
  names: {
    de: "golbit",
    en: "golett",
    fr: "gringolem",
    ja: "ゴビット"
  },
  number: 622
},{
  names: {
    de: "golgantes",
    en: "golurk",
    fr: "golemastoc",
    ja: "ゴルーグ"
  },
  number: 623
},{
  names: {
    de: "gladiantri",
    en: "pawniard",
    fr: "scalpion",
    ja: "コマタナ"
  },
  number: 624
},{
  names: {
    de: "caesurio",
    en: "bisharp",
    fr: "scalproie",
    ja: "キリキザン"
  },
  number: 625
},{
  names: {
    de: "bisofank",
    en: "bouffalant",
    fr: "frison",
    ja: "バッフロン"
  },
  number: 626
},{
  names: {
    de: "geronimatz",
    en: "rufflet",
    fr: "furaiglon",
    ja: "ワシボン"
  },
  number: 627
},{
  names: {
    de: "washakwil",
    en: "braviary",
    fr: "gueriaigle",
    ja: "ウォーグル"
  },
  number: 628
},{
  names: {
    de: "skallyk",
    en: "vullaby",
    fr: "vostourno",
    ja: "バルチャイ"
  },
  number: 629
},{
  names: {
    de: "grypheldis",
    en: "mandibuzz",
    fr: "vaututrice",
    ja: "バルジーナ"
  },
  number: 630
},{
  names: {
    de: "furnifraß",
    en: "heatmor",
    fr: "aflamanoir",
    ja: "クイタラン"
  },
  number: 631
},{
  names: {
    de: "fermicula",
    en: "durant",
    fr: "fermite",
    ja: "アイアント"
  },
  number: 632
},{
  names: {
    de: "kapuno",
    en: "deino",
    fr: "solochi",
    ja: "モノズ"
  },
  number: 633
},{
  names: {
    de: "duodino",
    en: "zweilous",
    fr: "diamat",
    ja: "ジヘッド"
  },
  number: 634
},{
  names: {
    de: "trikephalo",
    en: "hydreigon",
    fr: "trioxhydre",
    ja: "サザンドラ"
  },
  number: 635
},{
  names: {
    de: "ignivor",
    en: "larvesta",
    fr: "pyronille",
    ja: "メラルバ"
  },
  number: 636
},{
  names: {
    de: "ramoth",
    en: "volcarona",
    fr: "pyrax",
    ja: "ウルガモス"
  },
  number: 637
},{
  names: {
    de: "kobalium",
    en: "cobalion",
    fr: "cobaltium",
    ja: "コバルオン"
  },
  number: 638
},{
  names: {
    de: "terrakium",
    en: "terrakion",
    fr: "terrakium",
    ja: "テラキオン"
  },
  number: 639
},{
  names: {
    de: "viridium",
    en: "virizion",
    fr: "viridium",
    ja: "ビリジオン"
  },
  number: 640
},{
  names: {
    de: "boreos",
    en: "tornadus",
    fr: "boréas",
    ja: "トルネロス"
  },
  number: 641
},{
  names: {
    de: "voltolos",
    en: "thundurus",
    fr: "fulguris",
    ja: "ボルトロス"
  },
  number: 642
},{
  names: {
    de: "reshiram",
    en: "reshiram",
    fr: "reshiram",
    ja: "レシラム"
  },
  number: 643
},{
  names: {
    de: "zekrom",
    en: "zekrom",
    fr: "zekrom",
    ja: "ゼクロム"
  },
  number: 644
},{
  names: {
    de: "demeteros",
    en: "landorus",
    fr: "démétéros",
    ja: "ランドロス"
  },
  number: 645
},{
  names: {
    de: "kyurem",
    en: "kyurem",
    fr: "kyurem",
    ja: "キュレム"
  },
  number: 646
},{
  names: {
    de: "keldeo",
    en: "keldeo",
    fr: "keldeo",
    ja: "ケルディオ"
  },
  number: 647
},{
  names: {
    de: "meloetta",
    en: "meloetta",
    fr: "meloetta",
    ja: "メロエッタ"
  },
  number: 648
},{
  names: {
    de: "genesect",
    en: "genesect",
    fr: "genesect",
    ja: "ゲノセクト"
  },
  number: 649
},{
  names: {
    de: "igamaro",
    en: "chespin",
    fr: "marisson",
    ja: "ハリマロン"
  },
  number: 650
},{
  names: {
    de: "igastarnish",
    en: "quilladin",
    fr: "boguérisse",
    ja: "ハリボーグ"
  },
  number: 651
},{
  names: {
    de: "brigaron",
    en: "chesnaught",
    fr: "blindépique",
    ja: "ブリガロン"
  },
  number: 652
},{
  names: {
    de: "fynx",
    en: "fennekin",
    fr: "feunnec",
    ja: "フォッコ"
  },
  number: 653
},{
  names: {
    de: "rutena",
    en: "braixen",
    fr: "roussil",
    ja: "テールナー"
  },
  number: 654
},{
  names: {
    de: "fennexis",
    en: "delphox",
    fr: "goupelin",
    ja: "マフォクシー"
  },
  number: 655
},{
  names: {
    de: "froxy",
    en: "froakie",
    fr: "grenousse",
    ja: "ケロマツ"
  },
  number: 656
},{
  names: {
    de: "amphizel",
    en: "frogadier",
    fr: "croâporal",
    ja: "ゲコガシラ"
  },
  number: 657
},{
  names: {
    de: "quajutsu",
    en: "greninja",
    fr: "amphinobi",
    ja: "ゲッコウガ"
  },
  number: 658
},{
  names: {
    de: "scoppel",
    en: "bunnelby",
    fr: "sapereau",
    ja: "ホルビー"
  },
  number: 659
},{
  names: {
    de: "grebbit",
    en: "diggersby",
    fr: "excavarenne",
    ja: "ホルード"
  },
  number: 660
},{
  names: {
    de: "dartiri",
    en: "fletchling",
    fr: "passerouge",
    ja: "ヤヤコマ"
  },
  number: 661
},{
  names: {
    de: "dartignis",
    en: "fletchinder",
    fr: "braisillon",
    ja: "ヒノヤコマ"
  },
  number: 662
},{
  names: {
    de: "fiaro",
    en: "talonflame",
    fr: "flambusard",
    ja: "ファイアロー"
  },
  number: 663
},{
  names: {
    de: "purmel",
    en: "scatterbug",
    fr: "lépidonille",
    ja: "コフキムシ"
  },
  number: 664
},{
  names: {
    de: "puponcho",
    en: "spewpa",
    fr: "pérégrain",
    ja: "コフーライ"
  },
  number: 665
},{
  names: {
    de: "vivillon",
    en: "vivillon",
    fr: "prismillon",
    ja: "ビビヨン"
  },
  number: 666
},{
  names: {
    de: "leufeo",
    en: "litleo",
    fr: "hélionceau",
    ja: "シシコ"
  },
  number: 667
},{
  names: {
    de: "pyroleo",
    en: "pyroar",
    fr: "némélios",
    ja: "カエンジシ"
  },
  number: 668
},{
  names: {
    de: "flabébé",
    en: "flabébé",
    fr: "flabébé",
    ja: "フラベベ"
  },
  number: 669
},{
  names: {
    de: "floette",
    en: "floette",
    fr: "floette",
    ja: "フラエッテ"
  },
  number: 670
},{
  names: {
    de: "florges",
    en: "florges",
    fr: "florges",
    ja: "フラージェス"
  },
  number: 671
},{
  names: {
    de: "mähikel",
    en: "skiddo",
    fr: "cabriolaine",
    ja: "メェークル"
  },
  number: 672
},{
  names: {
    de: "chevrumm",
    en: "gogoat",
    fr: "chevroum",
    ja: "ゴーゴート"
  },
  number: 673
},{
  names: {
    de: "pam-pam",
    en: "pancham",
    fr: "pandespiègle",
    ja: "ヤンチャム"
  },
  number: 674
},{
  names: {
    de: "pandagro",
    en: "pangoro",
    fr: "pandarbare",
    ja: "ゴロンダ"
  },
  number: 675
},{
  names: {
    de: "coiffwaff",
    en: "furfrou",
    fr: "couafarel",
    ja: "トリミアン"
  },
  number: 676
},{
  names: {
    de: "psiau",
    en: "espurr",
    fr: "psystigri",
    ja: "ニャスパー"
  },
  number: 677
},{
  names: {
    de: "psiaugon",
    en: "meowstic",
    fr: "mistigrix",
    ja: "ニャオニクス"
  },
  number: 678
},{
  names: {
    de: "gramokles",
    en: "honedge",
    fr: "monorpale",
    ja: "ヒトツキ"
  },
  number: 679
},{
  names: {
    de: "duokles",
    en: "doublade",
    fr: "dimoclès",
    ja: "ニダンギル"
  },
  number: 680
},{
  names: {
    de: "durengard",
    en: "aegislash",
    fr: "exagide",
    ja: "ギルガルド"
  },
  number: 681
},{
  names: {
    de: "parfi",
    en: "spritzee",
    fr: "fluvetin",
    ja: "シュシュプ"
  },
  number: 682
},{
  names: {
    de: "parfinesse",
    en: "aromatisse",
    fr: "cocotine",
    ja: "フレフワン"
  },
  number: 683
},{
  names: {
    de: "flauschling",
    en: "swirlix",
    fr: "sucroquin",
    ja: "ペロッパフ"
  },
  number: 684
},{
  names: {
    de: "sabbaione",
    en: "slurpuff",
    fr: "cupcanaille",
    ja: "ペロリーム"
  },
  number: 685
},{
  names: {
    de: "iscalar",
    en: "inkay",
    fr: "sepiatop",
    ja: "マーイーカ"
  },
  number: 686
},{
  names: {
    de: "calamanero",
    en: "malamar",
    fr: "sepiatroce",
    ja: "カラマネロ"
  },
  number: 687
},{
  names: {
    de: "bithora",
    en: "binacle",
    fr: "opermine",
    ja: "カメテテ"
  },
  number: 688
},{
  names: {
    de: "thanathora",
    en: "barbaracle",
    fr: "golgopathe",
    ja: "ガメノデス"
  },
  number: 689
},{
  names: {
    de: "algitt",
    en: "skrelp",
    fr: "venalgue",
    ja: "クズモー"
  },
  number: 690
},{
  names: {
    de: "tandrak",
    en: "dragalge",
    fr: "kravarech",
    ja: "ドラミドロ"
  },
  number: 691
},{
  names: {
    de: "scampisto",
    en: "clauncher",
    fr: "flingouste",
    ja: "ウデッポウ"
  },
  number: 692
},{
  names: {
    de: "wummer",
    en: "clawitzer",
    fr: "gamblast",
    ja: "ブロスター"
  },
  number: 693
},{
  names: {
    de: "eguana",
    en: "helioptile",
    fr: "galvaran",
    ja: "エリキテル"
  },
  number: 694
},{
  names: {
    de: "elezard",
    en: "heliolisk",
    fr: "iguolta",
    ja: "エレザード"
  },
  number: 695
},{
  names: {
    de: "balgoras",
    en: "tyrunt",
    fr: "ptyranidur",
    ja: "チゴラス"
  },
  number: 696
},{
  names: {
    de: "monargoras",
    en: "tyrantrum",
    fr: "rexillius",
    ja: "ガチゴラス"
  },
  number: 697
},{
  names: {
    de: "amarino",
    en: "amaura",
    fr: "amagara",
    ja: "アマルス"
  },
  number: 698
},{
  names: {
    de: "amagarga",
    en: "aurorus",
    fr: "dragmara",
    ja: "アマルルガ"
  },
  number: 699
},{
  names: {
    de: "feelinara",
    en: "sylveon",
    fr: "nymphali",
    ja: "ニンフィア"
  },
  number: 700
},{
  names: {
    de: "resladero",
    en: "hawlucha",
    fr: "brutalibré",
    ja: "ルチャブル"
  },
  number: 701
},{
  names: {
    de: "dedenne",
    en: "dedenne",
    fr: "dedenne",
    ja: "デデンネ"
  },
  number: 702
},{
  names: {
    de: "rocara",
    en: "carbink",
    fr: "strassie",
    ja: "メレシー"
  },
  number: 703
},{
  names: {
    de: "viscora",
    en: "goomy",
    fr: "mucuscule",
    ja: "ヌメラ"
  },
  number: 704
},{
  names: {
    de: "viscargot",
    en: "sliggoo",
    fr: "colimucus",
    ja: "ヌメイル"
  },
  number: 705
},{
  names: {
    de: "viscogon",
    en: "goodra",
    fr: "muplodocus",
    ja: "ヌメルゴン"
  },
  number: 706
},{
  names: {
    de: "clavion",
    en: "klefki",
    fr: "trousselin",
    ja: "クレッフィ"
  },
  number: 707
},{
  names: {
    de: "paragoni",
    en: "phantump",
    fr: "brocélôme",
    ja: "ボクレー"
  },
  number: 708
},{
  names: {
    de: "trombork",
    en: "trevenant",
    fr: "desséliande",
    ja: "オーロット"
  },
  number: 709
},{
  names: {
    de: "irrbis",
    en: "pumpkaboo",
    fr: "pitrouille",
    ja: "バケッチャ"
  },
  number: 710
},{
  names: {
    de: "pumpdjinn",
    en: "gourgeist",
    fr: "banshitrouye",
    ja: "パンプジン"
  },
  number: 711
},{
  names: {
    de: "arktip",
    en: "bergmite",
    fr: "grelaçon",
    ja: "カチコール"
  },
  number: 712
},{
  names: {
    de: "arktilas",
    en: "avalugg",
    fr: "séracrawl",
    ja: "クレベース"
  },
  number: 713
},{
  names: {
    de: "ef-em",
    en: "noibat",
    fr: "sonistrelle",
    ja: "オンバット"
  },
  number: 714
},{
  names: {
    de: "uhafnir",
    en: "noivern",
    fr: "bruyverne",
    ja: "オンバーン"
  },
  number: 715
},{
  names: {
    de: "xerneas",
    en: "xerneas",
    fr: "xerneas",
    ja: "ゼルネアス"
  },
  number: 716
},{
  names: {
    de: "yveltal",
    en: "yveltal",
    fr: "yveltal",
    ja: "イベルタル"
  },
  number: 717
},{
  names: {
    de: "zygarde",
    en: "zygarde",
    fr: "zygarde",
    ja: "ジガルデ"
  },
  number: 718
},{
  names: {
    de: "diancie",
    en: "diancie",
    fr: "diancie",
    ja: "ディアンシー"
  },
  number: 719
},{
  names: {
    de: "hoopa",
    en: "hoopa",
    fr: "hoopa",
    ja: "フーパ"
  },
  number: 720
},{
  names: {
    de: "volcanion",
    en: "volcanion",
    fr: "volcanion",
    ja: "ボルケニオン"
  },
  number: 721
},{
  names: {
    de: "bauz",
    en: "rowlet",
    fr: "brindibou",
    ja: "モクロー"
  },
  number: 722
},{
  names: {
    de: "arboretoss",
    en: "dartrix",
    fr: "efflèche",
    ja: "フクスロー"
  },
  number: 723
},{
  names: {
    de: "silvarro",
    en: "decidueye",
    fr: "archéduc",
    ja: "ジュナイパー"
  },
  number: 724
},{
  names: {
    de: "flamiau",
    en: "litten",
    fr: "flamiaou",
    ja: "ニャビー"
  },
  number: 725
},{
  names: {
    de: "miezunder",
    en: "torracat",
    fr: "matoufeu",
    ja: "ニャヒート"
  },
  number: 726
},{
  names: {
    de: "fuegro",
    en: "incineroar",
    fr: "félinferno",
    ja: "ガオガエン"
  },
  number: 727
},{
  names: {
    de: "robball",
    en: "popplio",
    fr: "otaquin",
    ja: "アシマリ"
  },
  number: 728
},{
  names: {
    de: "marikeck",
    en: "brionne",
    fr: "otarlette",
    ja: "オシャマリ"
  },
  number: 729
},{
  names: {
    de: "primarene",
    en: "primarina",
    fr: "oratoria",
    ja: "アシレーヌ"
  },
  number: 730
},{
  names: {
    de: "peppeck",
    en: "pikipek",
    fr: "picassaut",
    ja: "ツツケラ"
  },
  number: 731
},{
  names: {
    de: "trompeck",
    en: "trumbeak",
    fr: "piclairon",
    ja: "ケララッパ"
  },
  number: 732
},{
  names: {
    de: "tukanon",
    en: "toucannon",
    fr: "bazoucan",
    ja: "ドデカバシ"
  },
  number: 733
},{
  names: {
    de: "mangunior",
    en: "yungoos",
    fr: "manglouton",
    ja: "ヤングース"
  },
  number: 734
},{
  names: {
    de: "manguspektor",
    en: "gumshoos",
    fr: "argouste",
    ja: "デカグース"
  },
  number: 735
},{
  names: {
    de: "mabula",
    en: "grubbin",
    fr: "larvibule",
    ja: "アゴジムシ"
  },
  number: 736
},{
  names: {
    de: "akkup",
    en: "charjabug",
    fr: "chrysapile",
    ja: "デンヂムシ"
  },
  number: 737
},{
  names: {
    de: "donarion",
    en: "vikavolt",
    fr: "lucanon",
    ja: "クワガノン"
  },
  number: 738
},{
  names: {
    de: "krabbox",
    en: "crabrawler",
    fr: "crabagarre",
    ja: "マケンカニ"
  },
  number: 739
},{
  names: {
    de: "krawell",
    en: "crabominable",
    fr: "crabominable",
    ja: "ケケンカニ"
  },
  number: 740
},{
  names: {
    de: "choreogel",
    en: "oricorio",
    fr: "plumeline",
    ja: "オドリドリ"
  },
  number: 741
},{
  names: {
    de: "wommel",
    en: "cutiefly",
    fr: "bombydou",
    ja: "アブリー"
  },
  number: 742
},{
  names: {
    de: "bandelby",
    en: "ribombee",
    fr: "rubombelle",
    ja: "アブリボン"
  },
  number: 743
},{
  names: {
    de: "wuffels",
    en: "rockruff",
    fr: "rocabot",
    ja: "イワンコ"
  },
  number: 744
},{
  names: {
    de: "wolwerock",
    en: "lycanroc",
    fr: "lougaroc",
    ja: "ルガルガン"
  },
  number: 745
},{
  names: {
    de: "lusardin",
    en: "wishiwashi",
    fr: "froussardine",
    ja: "ヨワシ"
  },
  number: 746
},{
  names: {
    de: "garstella",
    en: "mareanie",
    fr: "vorastérie",
    ja: "ヒドイデ"
  },
  number: 747
},{
  names: {
    de: "aggrostella",
    en: "toxapex",
    fr: "prédastérie",
    ja: "ドヒドイデ"
  },
  number: 748
},{
  names: {
    de: "pampuli",
    en: "mudbray",
    fr: "tiboudet",
    ja: "ドロバンコ"
  },
  number: 749
},{
  names: {
    de: "pampross",
    en: "mudsdale",
    fr: "bourrinos",
    ja: "バンバドロ"
  },
  number: 750
},{
  names: {
    de: "araqua",
    en: "dewpider",
    fr: "araqua",
    ja: "シズクモ"
  },
  number: 751
},{
  names: {
    de: "aranestro",
    en: "araquanid",
    fr: "tarenbulle",
    ja: "オニシズクモ"
  },
  number: 752
},{
  names: {
    de: "imantis",
    en: "fomantis",
    fr: "mimantis",
    ja: "カリキリ"
  },
  number: 753
},{
  names: {
    de: "mantidea",
    en: "lurantis",
    fr: "floramantis",
    ja: "ラランテス"
  },
  number: 754
},{
  names: {
    de: "bubungus",
    en: "morelull",
    fr: "spododo",
    ja: "ネマシュ"
  },
  number: 755
},{
  names: {
    de: "lamellux",
    en: "shiinotic",
    fr: "lampignon",
    ja: "マシェード"
  },
  number: 756
},{
  names: {
    de: "molunk",
    en: "salandit",
    fr: "tritox",
    ja: "ヤトウモリ"
  },
  number: 757
},{
  names: {
    de: "amfira",
    en: "salazzle",
    fr: "malamandre",
    ja: "エンニュート"
  },
  number: 758
},{
  names: {
    de: "velursi",
    en: "stufful",
    fr: "nounourson",
    ja: "ヌイコグマ"
  },
  number: 759
},{
  names: {
    de: "kosturso",
    en: "bewear",
    fr: "chelours",
    ja: "キテルグマ"
  },
  number: 760
},{
  names: {
    de: "frubberl",
    en: "bounsweet",
    fr: "croquine",
    ja: "アマカジ"
  },
  number: 761
},{
  names: {
    de: "frubaila",
    en: "steenee",
    fr: "candine",
    ja: "アママイコ"
  },
  number: 762
},{
  names: {
    de: "fruyal",
    en: "tsareena",
    fr: "sucreine",
    ja: "アマージョ"
  },
  number: 763
},{
  names: {
    de: "curelei",
    en: "comfey",
    fr: "guérilande",
    ja: "キュワワー"
  },
  number: 764
},{
  names: {
    de: "kommandutan",
    en: "oranguru",
    fr: "gouroutan",
    ja: "ヤレユータン"
  },
  number: 765
},{
  names: {
    de: "quartermak",
    en: "passimian",
    fr: "quartermac",
    ja: "ナゲツケサル"
  },
  number: 766
},{
  names: {
    de: "reißlaus",
    en: "wimpod",
    fr: "sovkipou",
    ja: "コソクムシ"
  },
  number: 767
},{
  names: {
    de: "tectass",
    en: "golisopod",
    fr: "sarmuraï",
    ja: "グソクムシャ"
  },
  number: 768
},{
  names: {
    de: "sankabuh",
    en: "sandygast",
    fr: "bacabouh",
    ja: "スナバァ"
  },
  number: 769
},{
  names: {
    de: "colossand",
    en: "palossand",
    fr: "trépassable",
    ja: "シロデスナ"
  },
  number: 770
},{
  names: {
    de: "gufa",
    en: "pyukumuku",
    fr: "concombaffe",
    ja: "ナマコブシ"
  },
  number: 771
},{
  names: {
    de: "typ:null",
    en: "type: null",
    fr: "type:0",
    ja: "タイプ：ヌル"
  },
  number: 772
},{
  names: {
    de: "amigento",
    en: "silvally",
    fr: "silvallié",
    ja: "シルヴァディ"
  },
  number: 773
},{
  names: {
    de: "meteno",
    en: "minior",
    fr: "météno",
    ja: "メテノ"
  },
  number: 774
},{
  names: {
    de: "koalelu",
    en: "komala",
    fr: "dodoala",
    ja: "ネッコアラ"
  },
  number: 775
},{
  names: {
    de: "tortunator",
    en: "turtonator",
    fr: "boumata",
    ja: "バクガメス"
  },
  number: 776
},{
  names: {
    de: "togedemaru",
    en: "togedemaru",
    fr: "togedemaru",
    ja: "トゲデマル"
  },
  number: 777
},{
  names: {
    de: "mimigma",
    en: "mimikyu",
    fr: "mimiqui",
    ja: "ミミッキュ"
  },
  number: 778
},{
  names: {
    de: "knirfish",
    en: "bruxish",
    fr: "denticrisse",
    ja: "ハギギシリ"
  },
  number: 779
},{
  names: {
    de: "sen-long",
    en: "drampa",
    fr: "draïeul",
    ja: "ジジーロン"
  },
  number: 780
},{
  names: {
    de: "moruda",
    en: "dhelmise",
    fr: "sinistrail",
    ja: "ダダリン"
  },
  number: 781
},{
  names: {
    de: "miniras",
    en: "jangmo-o",
    fr: "bébécaille",
    ja: "ジャラコ"
  },
  number: 782
},{
  names: {
    de: "mediras",
    en: "hakamo-o",
    fr: "écaïd",
    ja: "ジャランゴ"
  },
  number: 783
},{
  names: {
    de: "grandiras",
    en: "kommo-o",
    fr: "ékaïser",
    ja: "ジャラランガ"
  },
  number: 784
},{
  names: {
    de: "kapu-riki",
    en: "tapu koko",
    fr: "tokorico",
    ja: "カプ・コケコ"
  },
  number: 785
},{
  names: {
    de: "kapu-fala",
    en: "tapu lele",
    fr: "tokopiyon",
    ja: "カプ・テテフ"
  },
  number: 786
},{
  names: {
    de: "kapu-toro",
    en: "tapu bulu",
    fr: "tokotoro",
    ja: "カプ・ブルル"
  },
  number: 787
},{
  names: {
    de: "kapu-kime",
    en: "tapu fini",
    fr: "tokopisco",
    ja: "カプ・レヒレ"
  },
  number: 788
},{
  names: {
    de: "cosmog",
    en: "cosmog",
    fr: "cosmog",
    ja: "コスモッグ"
  },
  number: 789
},{
  names: {
    de: "cosmovum",
    en: "cosmoem",
    fr: "cosmovum",
    ja: "コスモウム"
  },
  number: 790
},{
  names: {
    de: "solgaleo",
    en: "solgaleo",
    fr: "solgaleo",
    ja: "ソルガレオ"
  },
  number: 791
},{
  names: {
    de: "lunala",
    en: "lunala",
    fr: "lunala",
    ja: "ルナアーラ"
  },
  number: 792
},{
  names: {
    de: "anego",
    en: "nihilego",
    fr: "zéroïd",
    ja: "ウツロイド"
  },
  number: 793
},{
  names: {
    de: "masskito",
    en: "buzzwole",
    fr: "mouscoto",
    ja: "マッシブーン"
  },
  number: 794
},{
  names: {
    de: "schabelle",
    en: "pheromosa",
    fr: "cancrelove",
    ja: "フェローチェ"
  },
  number: 795
},{
  names: {
    de: "voltriant",
    en: "xurkitree",
    fr: "câblifère",
    ja: "デンジュモク"
  },
  number: 796
},{
  names: {
    de: "kaguron",
    en: "celesteela",
    fr: "bamboiselle",
    ja: "テッカグヤ"
  },
  number: 797
},{
  names: {
    de: "katagami",
    en: "kartana",
    fr: "katagami",
    ja: "カミツルギ"
  },
  number: 798
},{
  names: {
    de: "schlingking",
    en: "guzzlord",
    fr: "engloutyran",
    ja: "アクジキング"
  },
  number: 799
},{
  names: {
    de: "necrozma",
    en: "necrozma",
    fr: "necrozma",
    ja: "ネクロズマ"
  },
  number: 800
},{
  names: {
    de: "magearna",
    en: "magearna",
    fr: "magearna",
    ja: "マギアナ"
  },
  number: 801
},{
  names: {
    de: "marshadow",
    en: "marshadow",
    fr: "marshadow",
    ja: "マーシャドー"
  },
  number: 802
}];