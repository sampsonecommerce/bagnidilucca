export type Lang = "he" | "en";

export interface Fact {
  label: string;
  value: string;
  tag?: string;
}

export interface Distance {
  place: string;
  time: string;
}

export interface Titled {
  title: string;
  text: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface Content {
  lang: Lang;
  dir: "rtl" | "ltr";
  title: string;
  metaDescription: string;
  whatsappMessage: string;
  nav: { story: string; house: string; photos: string; area: string; know: string; cta: string };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    pitch: string;
    primary: string;
    secondary: string;
    trust: string[];
    allPhotos: string;
  };
  facts: Fact[];
  story: {
    eyebrow: string;
    title: string;
    quote: string;
    paragraphs: string[];
    readMore: string;
    readLess: string;
  };
  band: { caption: string };
  house: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    includedTitle: string;
    included: string[];
    ratesNote: string;
    ratesLink: string;
  };
  gallery: { eyebrow: string; title: string; hint: string; photos: Photo[] };
  guests: {
    eyebrow: string;
    quote: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    caption: string;
  };
  area: { eyebrow: string; title: string; distances: Distance[]; paragraphs: string[] };
  activities: { title: string; items: Titled[] };
  know: { eyebrow: string; title: string; items: Titled[] };
  cta: { title: string; text: string; whatsapp: string; email: string };
  footer: { line: string; rights: string };
  lightbox: { close: string; prev: string; next: string };
  alts: { facade: string; living: string; kitchen: string; band: string; landscape: string; guestbook: string };
}

export const PHONE = "+972506264382";
export const PHONE_DISPLAY = "+972 50-626-4382";
export const EMAIL = "nomadica.online@gmail.com";
export const FACEBOOK = "https://www.facebook.com/casa193";

const galleryFiles = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg",
  "gallery-9.jpg",
  "gallery-10.jpg",
  "gallery-11.jpg",
  "gallery-12.jpg",
] as const;

const he: Content = {
  lang: "he",
  dir: "rtl",
  title: "Casa Letizia · הבית בבני די לוקה",
  metaDescription:
    "Casa Letizia. בית טוסקני אמיתי על נהר הלימה בבני די לוקה. תריסים ירוקים, רצפת קוטו, גינה, ומארחת שמכירה את העמק.",
  whatsappMessage: "שלום, אני פונה בנוגע ל-Casa Letizia בבני די לוקה. אשמח לשמוע פרטים ולבדוק תאריכים.",
  nav: { story: "הסיפור", house: "הבית", photos: "תמונות", area: "האזור", know: "טוב לדעת", cta: "בדקו תאריכים" },
  hero: {
    eyebrow: "פונטה א סראליו · נהר הלימה · טוסקנה",
    headline: "היכן שהיסטוריה",
    headlineAccent: "פוגשת תשוקה",
    pitch:
      "בית טוסקני אמיתי, לא מלון. 120 מ\"ר עם תריסים ירוקים, רצפת קוטו, גינה עם לוונדר ונהר הלימה מתחת לחלון. אירוח עם לב, 25 דקות מלוקה.",
    primary: "שלחו הודעה בוואטסאפ",
    secondary: "לראות את הבית",
    trust: ["מינימום 3 לילות", "דירה שלמה או חדר אחד", "תחנת רכבת בעיירה"],
    allPhotos: "כל 12 התמונות",
  },
  facts: [
    { label: "שטח", value: "120 מ\"ר" },
    { label: "קומה", value: "ראשונה, בלי מעלית" },
    { label: "מתאים ל", value: "זוג + ילד" },
    { label: "מינימום", value: "3 לילות" },
    { label: "חימום", value: "קמין פלט", tag: "חדש" },
    { label: "ללוקה", value: "25 דק'" },
  ],
  story: {
    eyebrow: "קצת עליי",
    title: "סיפור דרך",
    quote: "\"קראתי את הפוסט ומשהו בתמונות עורר בי תשוקה חבויה, לבית.\"",
    paragraphs: [
      "אולי היתה זו תובנה מעמיקה, הקשורה לגיל, לשחיקה מאבק הדרכים, מהלבדות שבמסע, המרחק הגאוגרפי או הנפשי ממי שאני אוהבת. ואולי זה היה דבר קצת טיפשי, כמו מזרקה. כן. מזרקה, פאונטיין בלועזית, נביעה של מי מעיינות חיים ובריאים, כמו שאפשר למצוא רק באיטליה. בכל מקרה, עדיין לא ידעתי על קיומה, כשתפס את עיני פוסט שקפץ לי בפיד, ועורר את סקרנותי.",
      "וככל שהתבוננתי עוד בתמונות, מצאתי עוד סימנים קטנים, שאז עוד לא ידעתי לנסח אותם. וגם היום אני עדיין מתקשה להגדיר אותם במדויק. בכל מקרה, משהו הואר בתוכי, והחלטתי לארוז ולמצוא את הבית הזה. לא ידעתי עוד מה יקרה כשאראה אותו, אבל ידעתי שמשהו בו קורא לי לבוא. אז באתי. מרחוק מאד.",
      "ומיד ידעתי. זה זה. הצבעים, האסתטיקה, ההיסטוריה, הרצפה הטוסקנית הלא ישרה, החצר היפה, עצי הזית, הסיפור. כשיצאתי לרחוב להתבונן שוב, ראיתי שהבניין בנוי על צלע הר ומולו הנהר, וכל היופי הזה, שקשה לתאר אותו במילים. הריח של הבית היה ריח של משהו מוכר. ואז ראיתי את המזרקה. ופשוט ידעתי. לא מוותרים על בית שיש לו גם מזרקה, גם הר וגם נהר. וגם סיפור, וגם תריסים ירוקים.",
      "הראש התחיל לעבוד, למרות שבלב לא היו שום ספקות. אבל הלכתי עם קריאת הנשמה. וקניתי את הבית. אני עדיין קצת בשוק, ומופתעת בכל פעם מחדש מעצמי. הרבה שכל, וגם הרבה נשמה. ועכשיו גם בעלת בית רשמית, באיטליה.",
    ],
    readMore: "לקריאת הסיפור המלא",
    readLess: "לסגור",
  },
  band: { caption: "הסלון. קירות סיד, רצפת קוטו טוסקנית, מהסוג הלא ישר." },
  house: {
    eyebrow: "הבית",
    title: "זמן עם עצמכם, זמן איטליה",
    paragraphs: [
      "הבית מושלם עבור זוגות, יחידות ויחידים ומשפחות קטנות (זוג + ילד) שמבקשים לעצמם חופשה, זמן איטליה, זמן עם עצמם, מקום לפתוח את הלב ואת הנשמה, מרחב להשראה.",
      "בזמן שאני כאן, הבית פתוח לאירוח של נשים המעוניינות בחופשה איטלקית כהילכתה, אבל לא רוצות או חוששות מהלבד. אני אארח לכן לחברה, אכיר לכן את האזור ובשאר הזמן תהנו מהמקום, האוירה, הנופים והקולינריה.",
      "המטבח מצוייד בכל מה שצריך כדי להכין ארוחות איטלקיות או ישראליות כהילכתן. הגינה המהממת עם פינת הישיבה היא מקום נפלא לארוחות קלילות, פטפוטים ורביצה בשמש האיטלקית החמימה. ריחם של שיחי הלוונדר וצלצוליו העדינים של פעמון הכנסיה הסמוכה יהפכו את החוויה לנעימה במיוחד. ולחורף: קמין פלט חדש, מוכן לערבים הקרירים בעמק.",
    ],
    includedTitle: "כלול באירוח",
    included: [
      "שהייה בדירה כולה או בחדר שינה אחד",
      "שימוש בכל מתקני הבית ומכשירי החשמל",
      "מכונת כביסה, טלוויזיה ומטבח מלא",
      "אבקת כביסה, סבון וחומרי ניקוי",
      "רשימת המלצות לכל מה שכדאי לאכול ולעשות באזור",
      "פינוקים ימתינו לכם במטבח",
    ],
    ratesNote:
      "התעריפים משתנים בהתאם לעונת השנה, מספר האורחים ומשך האירוח. עלות ניקיון ופיקדון מוחזר מחויבים בנפרד.",
    ratesLink: "כל מה שכדאי לדעת לפני ההזמנה",
  },
  gallery: {
    eyebrow: "תמונות",
    title: "הבית מבפנים ומבחוץ",
    hint: "לחצו על תמונה כדי להגדיל",
    photos: [
      "חזית הבית עם תריסים ירוקים ומרפסת",
      "סלון עם ספה ופינת ישיבה",
      "מטבח עם אי עבודה מעץ",
      "פתח לחצר הפנימית",
      "פינת אוכל",
      "חדר שינה",
      "חדר רחצה",
      "חדר שינה נוסף",
      "פינת הקמין החדש",
      "בתים מעל נהר הלימה",
      "ערפל בעמק בשקיעה",
      "גשר השטן בבורגו א מוצאנו",
    ].map((alt, i) => ({ src: `images/${galleryFiles[i]}`, alt })),
  },
  guests: {
    eyebrow: "אורחים · חודש שלם בבית",
    quote: "\"תודה שאפשרת לנו להרגיש בביתך כמו בביתנו.\"",
    paragraphs: [
      "אחרי שנה של מסע בעולם, לפעמים כל מה שבאמת מתגעגעים אליו זה בית. עם גינה מלבלבת, צמחי תבלין ריחניים, מטבח שאפשר לבשל בו, וספה לרבוץ עליה בלי לחשוב על המחר. זיו ואשרת מצאו את זה אצלנו, ונשארו לחודש שלם. \"הבית קרא לי והבנתי שפה אני רוצה שנשהה בחודש שלנו באיטליה\", הם כתבו.",
      "חודש שלם עבר עליהם ברגעים פשוטים וקסומים כאחד. בישול איטי, רביצה על הספה בלי שעון, השקיית הגינה בשעות הרכות של הבוקר. ארוחות בחוץ, קפה ומאפה בבוקר, ואפרול שפריץ אחר הצהרים בבר איטליה. נסיעות ספונטניות לכפרים שנראים כמו ציור. דרכים מתפתלות בהר, חומות אבן ישנות, כביסה שמתנפנפת ברוח, ועגבניות עם מוצרלה טריה ועלי בזיליקום.",
    ],
    closing:
      "ברגע הפרידה, הם השאירו לנו חלוקי נחל מעוטרים בעדינות בנופים שראו מבעד לחלון, ושתי מילים: \"מקווים שנחזור.\" אנחנו גם מקווים, זיו ואשרת. הדלת תמיד פתוחה עבורכם.",
    signature: "זיו ואשרת, חודש ב-Casa Letizia",
    caption: "חלוקי הנחל והמכתב שהשאירו בספר האורחים.",
  },
  area: {
    eyebrow: "האזור",
    title: "גשר משנת 898, בר שבו כולם נפגשים",
    distances: [
      { place: "לוקה", time: "25 דק' · רכב או רכבת" },
      { place: "פיזה", time: "55 דק' · רכב או רכבת" },
      { place: "פירנצה", time: "שעה ורבע · רכב או רכבת" },
      { place: "חוף ורסיליה", time: "50–60 דק' מערבה" },
      { place: "אבטונה (סקי)", time: "40–50 דק' צפונה" },
    ],
    paragraphs: [
      "הבית הטוסקני שלי צמוד לצלע הר, על שפת כביש צר ומול גשר עתיק שמחבר את מרכז הכפר לעולם. יש מקורות המדווחים על קיומו משנת 898! הגשר הקטן שמעל נהר הלימה חוצה בין רחוב שהיה פעם הומה אדם, חנויות מקומיות, ושיח איטלקי מתנגן למרכז הכפר Ponte a Serraglio.",
      "מול הבית נמצא המקום שבו מתכנסים כולם לקפה של בוקר ואחר הצהרים לכוס יין לבן קריר או אפרול שפריץ, \"בר איטליה\". שם תמצאו הכל מהכל: מקומיים ובינלאומיים, רוכבי אופניים חתיכים וקשישים גנדרנים, עקרות בית משועממות ונשים אלגנטיות, תרמילאים וטיילנים מקצועיים. הבריסטה מכירה את כוס הקפה של כל אחד מבאי המקום, גם אם היה אורח לרגע.",
      "בהמשך הרחוב המתעקל, חנות קהילתית לחפצי יד שנייה, בריכה, מגרשי טניס, סופרמרקט ופיאצה מרכזית עם תיאטרון היסטורי. ואם חפצה נפשכם לרחוץ במרחצאות הטרמיים המפורסמים או להתפנק בספא, זה ממש במעלה ההר.",
    ],
  },
  activities: {
    title: "מה עושים",
    items: [
      { title: "מרחצאות תרמיים", text: "בני די לוקה מפורסמת במעיינות המרפא שלה. ספא עם טיפולי בוץ תרמי ובריכות מים חמים בתוך מערות טבעיות, ממש במעלה ההר." },
      { title: "אתר סקי אבטונה", text: "כ-40–50 דק' צפונה. אתר הסקי המרכזי במרכז איטליה. כ-50 ק\"מ מסלולים עד גובה 1,900 מ', סנובורד, נעלי שלג בחורף ואופני הרים בקיץ." },
      { title: "חוף ורסיליה", text: "50–60 דק' מערבה. חופי חול זהוב רחבים, מועדוני חוף, טיילת Art Nouveau מרשימה בויארג'ו ופורטה דיי מארמי היוקרתית." },
      { title: "ספורט מים ואתגר", text: "קניון פארק עם זיפליינים וגשרים תלויים, ראפטינג וקיאקים בנהר הלימה, שמורת Orrido di Botri לטיולי קניונינג." },
      { title: "היסטוריה ותרבות", text: "הקזינו המלכותי מ-1839, גשר השרשראות הייחודי, גשר השטן האגדתי בבורגו א מוצאנו הסמוכה, ווילות אריסטוקרטיות." },
      { title: "טיולים וכפרים", text: "שבילי הייקינג, אופניים ויוגה בקניון. כפרים ציוריים על הגבעות כמו לוצ'יו, שנראה כאילו תלוי על המצוק עם חורבות מצודה עתיקה." },
    ],
  },
  know: {
    eyebrow: "לפני שמזמינים",
    title: "טוב לדעת",
    items: [
      { title: "הגעה", text: "שדות התעופה הקרובים: פיזה ופירנצה. הרחוקים: רומא ובולוניה. כולם מחוברים לרשת הרכבות. בעיירה יש תחנת רכבת: לוקה 25 דק', פיזה 55 דק', פירנצה שעה ורבע. רכב שכור מומלץ לחופש תנועה." },
      { title: "חימום וקירור", text: "בבית יש חימום חשמלי וקמין פלט חדש. אין מזגנים." },
      { title: "נגישות", text: "הבית נמצא בקומה ראשונה ללא מעלית." },
      { title: "ניקיון ופיקדון", text: "עלות ניקיון בסיום השהייה, מחויבת בנפרד. פיקדון נדרש ויוחזר בתום השהייה." },
      { title: "נזקים", text: "שימוש לא תקין ואובדן או נזק לחפצים, מצעים, מגבות או כלים: שברתם, שילמתם." },
      { title: "תעריפים", text: "משתנים בהתאם לעונת השנה, מספר האורחים ומשך האירוח. מינימום שהייה 3 לילות. שלחו תאריכים לקבלת הצעת מחיר." },
    ],
  },
  cta: {
    title: "מוכנים לטוסקנה?",
    text: "שלחו לנו את התאריכים שחשבתם עליהם ונחזור אליכם עם זמינות, מחיר וכל הפרטים.",
    whatsapp: "שלחו הודעה בוואטסאפ",
    email: "עדיף במייל",
  },
  footer: { line: "Ponte a Serraglio · Bagni di Lucca · Tuscany", rights: "© 2026 · כל הזכויות שמורות" },
  lightbox: { close: "סגירה", prev: "הקודמת", next: "הבאה" },
  alts: {
    facade: "חזית הבית עם תריסים ירוקים ומרפסת",
    living: "הסלון: כורסאות ראטן ורצפת קוטו",
    kitchen: "המטבח עם אי עבודה מעץ",
    band: "הסלון",
    landscape: "פונטה א סראליו ונהר הלימה",
    guestbook: "חלוקי נחל מצוירים ומכתב בכתב יד בספר האורחים",
  },
};

const en: Content = {
  lang: "en",
  dir: "ltr",
  title: "Casa Letizia · Bagni di Lucca",
  metaDescription:
    "Casa Letizia. A real Tuscan home on the Lima river in Bagni di Lucca. Green shutters, terracotta floors, a garden, and a host who knows the valley.",
  whatsappMessage: "Hello, I'm writing about Casa Letizia in Bagni di Lucca. I'd love to hear details and check dates.",
  nav: { story: "Story", house: "The house", photos: "Photos", area: "Area", know: "Good to know", cta: "Check dates" },
  hero: {
    eyebrow: "Ponte a Serraglio · Lima river · Tuscany",
    headline: "Where history",
    headlineAccent: "meets passion",
    pitch:
      "A real Tuscan home, not a hotel. 120 square metres with green shutters, a terracotta floor, a garden with lavender, and the Lima river under the window. Hosted with heart, 25 minutes from Lucca.",
    primary: "Message on WhatsApp",
    secondary: "See the house",
    trust: ["Min. 3 nights", "Whole home or one room", "Train station in town"],
    allPhotos: "All 12 photos",
  },
  facts: [
    { label: "Size", value: "120 m²" },
    { label: "Floor", value: "First, no lift" },
    { label: "Suits", value: "Couple + child" },
    { label: "Minimum", value: "3 nights" },
    { label: "Heating", value: "Pellet fireplace", tag: "NEW" },
    { label: "To Lucca", value: "25 min" },
  ],
  story: {
    eyebrow: "From the host",
    title: "A story of a road",
    quote: "\"I read the post and something in the photos stirred a hidden longing. For a home.\"",
    paragraphs: [
      "Maybe it was a deep insight, something to do with age, with the wear of the road, the loneliness of travel, the geographic or emotional distance from the people I love. Or maybe it was something a little silly, like a fountain. Yes. A fountain, a spring of living, healthy water, the kind you only find in Italy. Either way, I didn't yet know it existed when a post in my feed caught my eye and stirred my curiosity.",
      "The more I looked at the photos, the more small signs I found, signs I couldn't yet put into words, and even today I still struggle to define them precisely. Whatever it was, something lit up inside me, and I decided to pack up and find this house. I didn't know what would happen when I saw it, but I knew something in it was calling me to come. So I came. From very far away.",
      "And I knew at once. This is it. The colours, the aesthetics, the history, the uneven Tuscan floor, the beautiful courtyard, the olive trees, the story. When I stepped out to the street to look again, I saw the building sits against a hillside with the river in front of it, and all that beauty that is hard to put into words. The house smelled of something familiar. Then I saw the fountain. And I simply knew. You don't give up a house that has a fountain, a mountain and a river. And a story, and green shutters.",
      "My head started working, though my heart had no doubts at all. I followed the call of the soul. And I bought the house. I'm still a little in shock, surprised by myself every time. A lot of sense, and a lot of soul. And now, officially, a homeowner in Italy.",
    ],
    readMore: "Read the whole story",
    readLess: "Show less",
  },
  band: { caption: "The living room. Lime-washed walls, terracotta floor, the uneven Tuscan kind." },
  house: {
    eyebrow: "The house",
    title: "Time with yourself, Italy time",
    paragraphs: [
      "The house is perfect for couples, solo travellers and small families (a couple plus a child) looking for a holiday, Italy time, time with themselves, a place to open the heart and the soul, a space for inspiration.",
      "While I'm here, the house is open to women who want a proper Italian holiday but don't want, or are wary of, being alone. I'll keep you company, introduce you to the area, and the rest of the time you'll enjoy the place, the atmosphere, the views and the food.",
      "The kitchen has everything you need to cook proper Italian or Israeli meals. The gorgeous garden with its seating corner is a wonderful place for light meals, long chats and lounging in the warm Italian sun. The scent of lavender and the gentle bells of the nearby church make the experience especially pleasant. And for winter: a new pellet fireplace, ready for the cool evenings in the valley.",
    ],
    includedTitle: "Included in your stay",
    included: [
      "Stay in the whole apartment or in one bedroom",
      "Use of all house facilities and appliances",
      "Washing machine, TV and a fully equipped kitchen",
      "Laundry powder, soap and cleaning supplies",
      "A list of what to eat and do in the area",
      "Treats waiting for you in the kitchen",
    ],
    ratesNote:
      "Rates vary by season, number of guests and length of stay. Cleaning fee and a refundable deposit are charged separately.",
    ratesLink: "Everything to know before booking",
  },
  gallery: {
    eyebrow: "Photos",
    title: "Inside and out",
    hint: "Click any photo to open it",
    photos: [
      "House front with green shutters and balcony",
      "Living room with sofa and seating corner",
      "Kitchen with a wooden island",
      "Doorway to the inner courtyard",
      "Dining corner",
      "Bedroom",
      "Bathroom",
      "Second bedroom",
      "The new fireplace corner",
      "Houses over the Lima river",
      "Mist in the valley at sunset",
      "The Devil's Bridge in Borgo a Mozzano",
    ].map((alt, i) => ({ src: `images/${galleryFiles[i]}`, alt })),
  },
  guests: {
    eyebrow: "Guests · a whole month in the house",
    quote: "\"Thank you for letting us feel at home in your home.\"",
    paragraphs: [
      "After a year of travelling the world, sometimes all you really miss is a home. With a blooming garden, fragrant herbs, a kitchen you can cook in, and a sofa to lounge on without thinking about tomorrow. Ziv and Osherat found that here, and stayed a whole month. \"The house called me, and I understood this is where I want us to spend our month in Italy,\" they wrote.",
      "A whole month passed in moments both simple and magical. Slow cooking, lounging on the sofa with no clock, watering the garden in the soft hours of the morning. Meals outside, coffee and a pastry in the morning, an Aperol spritz in the afternoon at Bar Italia. Spontaneous drives to villages that look like paintings. Winding mountain roads, old stone walls, laundry fluttering in the wind, and tomatoes with fresh mozzarella and basil leaves.",
    ],
    closing:
      "When they left, they gave us river stones delicately painted with the views they had seen through the window, and three words: \"Hoping to return.\" So are we, Ziv and Osherat. The door is always open for you.",
    signature: "Ziv and Osherat, one month at Casa Letizia",
    caption: "The stones and the note they left in the guestbook.",
  },
  area: {
    eyebrow: "The area",
    title: "A bridge from 898, a bar where everyone meets",
    distances: [
      { place: "Lucca", time: "25 min · car or train" },
      { place: "Pisa", time: "55 min · car or train" },
      { place: "Florence", time: "1 h 15 · car or train" },
      { place: "Versilia coast", time: "50–60 min west" },
      { place: "Abetone ski", time: "40–50 min north" },
    ],
    paragraphs: [
      "My Tuscan house sits against a hillside, on the edge of a narrow road, facing an ancient bridge that connects the village centre to the world. Some sources record it as far back as 898! The little bridge over the Lima river crosses from a street that was once bustling, with local shops and Italian chatter in the air, to the village centre of Ponte a Serraglio.",
      "Opposite the house is where everyone gathers for morning coffee and, in the afternoon, a glass of cold white wine or an Aperol spritz: Bar Italia. There you'll find everyone: locals and internationals, handsome cyclists and dapper old men, bored housewives and elegant women, backpackers and professional travellers. The barista knows everyone's cup, even a guest of a moment.",
      "Further along the winding street: a community second-hand shop, a pool, tennis courts, a supermarket and the main piazza with its historic theatre. And if you fancy the famous thermal baths or a spa, they're right up the hill.",
    ],
  },
  activities: {
    title: "What to do",
    items: [
      { title: "Thermal baths", text: "Bagni di Lucca is famous for its healing springs. A spa with thermal mud treatments and hot pools inside natural caves, just up the hill." },
      { title: "Abetone ski resort", text: "About 40–50 minutes north. Central Italy's main ski area: around 50 km of runs up to 1,900 m, snowboarding, snowshoeing in winter and mountain biking in summer." },
      { title: "The Versilia coast", text: "50–60 minutes west. Wide golden beaches, beach clubs, the impressive Art Nouveau promenade of Viareggio and upscale Forte dei Marmi." },
      { title: "Water sports and adventure", text: "A canyon park with ziplines and hanging bridges, rafting and kayaking on the Lima, and the Orrido di Botri reserve for canyoning." },
      { title: "History and culture", text: "The Royal Casino of 1839, the unique Chain Bridge, the legendary Devil's Bridge in nearby Borgo a Mozzano, aristocratic villas." },
      { title: "Walks and villages", text: "Hiking trails, cycling and yoga in the canyon. Picturesque hill villages like Lucchio, which seems to hang from the cliff beside the ruins of an ancient fortress." },
    ],
  },
  know: {
    eyebrow: "Before you book",
    title: "Good to know",
    items: [
      { title: "Getting here", text: "Nearest airports: Pisa and Florence. Further: Rome and Bologna. All connected to the rail network. The town has its own station: Lucca 25 min, Pisa 55 min, Florence 1 h 15. A rental car is recommended for freedom to move around." },
      { title: "Heating and cooling", text: "Electric heating and a new pellet fireplace. There is no air conditioning." },
      { title: "Access", text: "The house is on the first floor with no elevator." },
      { title: "Cleaning and deposit", text: "A cleaning fee is charged at the end of the stay, separately. A deposit is required and refunded when you leave." },
      { title: "Damage", text: "Misuse, loss or damage to items, linen, towels or dishes is charged. You break it, you pay for it." },
      { title: "Rates", text: "Vary by season, number of guests and length of stay. Minimum stay 3 nights. Send your dates for a quote." },
    ],
  },
  cta: {
    title: "Ready for Tuscany?",
    text: "Send the dates you have in mind and we'll come back with availability, a price and everything you need.",
    whatsapp: "Message on WhatsApp",
    email: "Email instead",
  },
  footer: { line: "Ponte a Serraglio · Bagni di Lucca · Tuscany", rights: "© 2026 · All rights reserved" },
  lightbox: { close: "Close", prev: "Previous", next: "Next" },
  alts: {
    facade: "Casa Letizia street front with green shutters and balcony",
    living: "Living room with rattan chairs and terracotta floor",
    kitchen: "Kitchen with a wooden island",
    band: "The living room",
    landscape: "Ponte a Serraglio and the Lima river",
    guestbook: "Painted river stones and a handwritten note in the guestbook",
  },
};

export const content: Record<Lang, Content> = { he, en };
