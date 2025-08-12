const translations = {
  en: {
    days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  pt: {
    days: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'],
    months: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
    formatDate: (day, month, year, weekday) => `${day} de ${month} de ${year} - ${weekday}`
  },
  es: {
    days: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    months: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
    formatDate: (day, month, year, weekday) => `${day} de ${month} de ${year} - ${weekday}`
  },
  de: {
    days: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  fr: {
    days: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    months: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  it: {
    days: ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'],
    months: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  ru: {
    days: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  zh: {
    days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    formatDate: (day, month, year, weekday) => `${year}年${month}${day}日 - ${weekday}`
  },
  ja: {
    days: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    formatDate: (day, month, year, weekday) => `${year}年${month}${day}日 - ${weekday}`
  },
  ar: {
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  ko: {
    days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    formatDate: (day, month, year, weekday) => `${year}년 ${month} ${day}일 - ${weekday}`
  },
  nl: {
    days: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  sv: {
    days: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
    months: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  no: {
    days: ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'],
    months: ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  fi: {
    days: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
    months: ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  pl: {
    days: ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
    months: ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  cs: {
    days: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
    months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
    formatDate: (day, month, year, weekday) => `${day}. ${month} ${year} - ${weekday}`
  },
  hu: {
    days: ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'],
    months: ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'],
    formatDate: (day, month, year, weekday) => `${year}. ${month} ${day}. - ${weekday}`
  },
  ro: {
    days: ['duminică', 'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbătă'],
    months: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie', 'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  el: {
    days: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'],
    months: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  he: {
    days: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'],
    months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  th: {
    days: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์'],
    months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
  vi: {
    days: ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'],
    months: ['Tháng một', 'Tháng hai', 'Tháng ba', 'Tháng tư', 'Tháng năm', 'Tháng sáu', 'Tháng bảy', 'Tháng tám', 'Tháng chín', 'Tháng mười', 'Tháng mười một', 'Tháng mười hai'],
    formatDate: (day, month, year, weekday) => `${weekday}, ${day} ${month} ${year}`
  },
  id: {
    days: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    formatDate: (day, month, year, weekday) => `${day} ${month} ${year} - ${weekday}`
  },
}

function getLanguage() {
  const lang = navigator.language || navigator.userLanguage || 'en'
  const code = lang.toLowerCase().split(/[-_]/)[0]
  return translations[code] ? code : 'en'
}
