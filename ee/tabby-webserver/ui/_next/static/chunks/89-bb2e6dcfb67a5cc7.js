(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{7404:function(n,t,u){"use strict";u.d(t,{j:function(){return i}});let r=n=>"boolean"==typeof n?"".concat(n):0===n?"0":n,e=function(){for(var n=arguments.length,t=Array(n),u=0;u<n;u++)t[u]=arguments[u];return t.flat(1/0).filter(Boolean).join(" ")},i=(n,t)=>u=>{var i;if((null==t?void 0:t.variants)==null)return e(n,null==u?void 0:u.class,null==u?void 0:u.className);let{variants:o,defaultVariants:c}=t,f=Object.keys(o).map(n=>{let t=null==u?void 0:u[n],e=null==c?void 0:c[n];if(null===t)return null;let i=r(t)||r(e);return o[n][i]}),a=u&&Object.entries(u).reduce((n,t)=>{let[u,r]=t;return void 0===r||(n[u]=r),n},{}),s=null==t?void 0:null===(i=t.compoundVariants)||void 0===i?void 0:i.reduce((n,t)=>{let{class:u,className:r,...e}=t;return Object.entries(e).every(n=>{let[t,u]=n;return Array.isArray(u)?u.includes({...c,...a}[t]):({...c,...a})[t]===u})?[...n,u,r]:n},[]);return e(n,f,s,null==u?void 0:u.class,null==u?void 0:u.className)}},61554:function(n,t,u){var r;!function(){var e=o(function(n){return 1===n?"χρόνος":"χρόνια"},function(n){return 1===n?"μήνας":"μήνες"},function(n){return 1===n?"εβδομάδα":"εβδομάδες"},function(n){return 1===n?"μέρα":"μέρες"},function(n){return 1===n?"ώρα":"ώρες"},function(n){return 1===n?"λεπτό":"λεπτά"},function(n){return 1===n?"δευτερόλεπτο":"δευτερόλεπτα"},function(n){return(1===n?"χιλιοστό":"χιλιοστά")+" του δευτερολέπτου"},","),i={af:o("jaar",function(n){return"maand"+(1===n?"":"e")},function(n){return 1===n?"week":"weke"},function(n){return 1===n?"dag":"dae"},function(n){return 1===n?"uur":"ure"},function(n){return 1===n?"minuut":"minute"},function(n){return"sekonde"+(1===n?"":"s")},function(n){return"millisekonde"+(1===n?"":"s")},","),ar:m(o(function(n){return["سنة","سنتان","سنوات"][c(n)]},function(n){return["شهر","شهران","أشهر"][c(n)]},function(n){return["أسبوع","أسبوعين","أسابيع"][c(n)]},function(n){return["يوم","يومين","أيام"][c(n)]},function(n){return["ساعة","ساعتين","ساعات"][c(n)]},function(n){return["دقيقة","دقيقتان","دقائق"][c(n)]},function(n){return["ثانية","ثانيتان","ثواني"][c(n)]},function(n){return["جزء من الثانية","جزآن من الثانية","أجزاء من الثانية"][c(n)]},","),{delimiter:" ﻭ ",_digitReplacements:["۰","١","٢","٣","٤","٥","٦","٧","٨","٩"]}),bg:o(function(n){return["години","година","години"][a(n)]},function(n){return["месеца","месец","месеца"][a(n)]},function(n){return["седмици","седмица","седмици"][a(n)]},function(n){return["дни","ден","дни"][a(n)]},function(n){return["часа","час","часа"][a(n)]},function(n){return["минути","минута","минути"][a(n)]},function(n){return["секунди","секунда","секунди"][a(n)]},function(n){return["милисекунди","милисекунда","милисекунди"][a(n)]},","),bn:o("বছর","মাস","সপ্তাহ","দিন","ঘন্টা","মিনিট","সেকেন্ড","মিলিসেকেন্ড"),ca:o(function(n){return"any"+(1===n?"":"s")},function(n){return"mes"+(1===n?"":"os")},function(n){return"setman"+(1===n?"a":"es")},function(n){return"di"+(1===n?"a":"es")},function(n){return"hor"+(1===n?"a":"es")},function(n){return"minut"+(1===n?"":"s")},function(n){return"segon"+(1===n?"":"s")},function(n){return"milisegon"+(1===n?"":"s")},","),ckb:o("ساڵ","مانگ","هەفتە","ڕۆژ","کاژێر","خولەک","چرکە","میلی چرکە","."),cs:o(function(n){return["rok","roku","roky","let"][s(n)]},function(n){return["měs\xedc","měs\xedce","měs\xedce","měs\xedců"][s(n)]},function(n){return["t\xfdden","t\xfddne","t\xfddny","t\xfddnů"][s(n)]},function(n){return["den","dne","dny","dn\xed"][s(n)]},function(n){return["hodina","hodiny","hodiny","hodin"][s(n)]},function(n){return["minuta","minuty","minuty","minut"][s(n)]},function(n){return["sekunda","sekundy","sekundy","sekund"][s(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][s(n)]},","),cy:o("flwyddyn","mis","wythnos","diwrnod","awr","munud","eiliad","milieiliad"),da:o("\xe5r",function(n){return"m\xe5ned"+(1===n?"":"er")},function(n){return"uge"+(1===n?"":"r")},function(n){return"dag"+(1===n?"":"e")},function(n){return"time"+(1===n?"":"r")},function(n){return"minut"+(1===n?"":"ter")},function(n){return"sekund"+(1===n?"":"er")},function(n){return"millisekund"+(1===n?"":"er")},","),de:o(function(n){return"Jahr"+(1===n?"":"e")},function(n){return"Monat"+(1===n?"":"e")},function(n){return"Woche"+(1===n?"":"n")},function(n){return"Tag"+(1===n?"":"e")},function(n){return"Stunde"+(1===n?"":"n")},function(n){return"Minute"+(1===n?"":"n")},function(n){return"Sekunde"+(1===n?"":"n")},function(n){return"Millisekunde"+(1===n?"":"n")},","),el:e,en:o(function(n){return"year"+(1===n?"":"s")},function(n){return"month"+(1===n?"":"s")},function(n){return"week"+(1===n?"":"s")},function(n){return"day"+(1===n?"":"s")},function(n){return"hour"+(1===n?"":"s")},function(n){return"minute"+(1===n?"":"s")},function(n){return"second"+(1===n?"":"s")},function(n){return"millisecond"+(1===n?"":"s")}),eo:o(function(n){return"jaro"+(1===n?"":"j")},function(n){return"monato"+(1===n?"":"j")},function(n){return"semajno"+(1===n?"":"j")},function(n){return"tago"+(1===n?"":"j")},function(n){return"horo"+(1===n?"":"j")},function(n){return"minuto"+(1===n?"":"j")},function(n){return"sekundo"+(1===n?"":"j")},function(n){return"milisekundo"+(1===n?"":"j")},","),es:o(function(n){return"a\xf1o"+(1===n?"":"s")},function(n){return"mes"+(1===n?"":"es")},function(n){return"semana"+(1===n?"":"s")},function(n){return"d\xeda"+(1===n?"":"s")},function(n){return"hora"+(1===n?"":"s")},function(n){return"minuto"+(1===n?"":"s")},function(n){return"segundo"+(1===n?"":"s")},function(n){return"milisegundo"+(1===n?"":"s")},","),et:o(function(n){return"aasta"+(1===n?"":"t")},function(n){return"kuu"+(1===n?"":"d")},function(n){return"n\xe4dal"+(1===n?"":"at")},function(n){return"p\xe4ev"+(1===n?"":"a")},function(n){return"tund"+(1===n?"":"i")},function(n){return"minut"+(1===n?"":"it")},function(n){return"sekund"+(1===n?"":"it")},function(n){return"millisekund"+(1===n?"":"it")},","),eu:o("urte","hilabete","aste","egun","ordu","minutu","segundo","milisegundo",","),fa:o("سال","ماه","هفته","روز","ساعت","دقیقه","ثانیه","میلی ثانیه"),fi:o(function(n){return 1===n?"vuosi":"vuotta"},function(n){return 1===n?"kuukausi":"kuukautta"},function(n){return"viikko"+(1===n?"":"a")},function(n){return"p\xe4iv\xe4"+(1===n?"":"\xe4")},function(n){return"tunti"+(1===n?"":"a")},function(n){return"minuutti"+(1===n?"":"a")},function(n){return"sekunti"+(1===n?"":"a")},function(n){return"millisekunti"+(1===n?"":"a")},","),fo:o("\xe1r",function(n){return 1===n?"m\xe1na\xf0ur":"m\xe1na\xf0ir"},function(n){return 1===n?"vika":"vikur"},function(n){return 1===n?"dagur":"dagar"},function(n){return 1===n?"t\xedmi":"t\xedmar"},function(n){return 1===n?"minuttur":"minuttir"},"sekund","millisekund",","),fr:o(function(n){return"an"+(n>=2?"s":"")},"mois",function(n){return"semaine"+(n>=2?"s":"")},function(n){return"jour"+(n>=2?"s":"")},function(n){return"heure"+(n>=2?"s":"")},function(n){return"minute"+(n>=2?"s":"")},function(n){return"seconde"+(n>=2?"s":"")},function(n){return"milliseconde"+(n>=2?"s":"")},","),gr:e,he:o(function(n){return 1===n?"שנה":"שנים"},function(n){return 1===n?"חודש":"חודשים"},function(n){return 1===n?"שבוע":"שבועות"},function(n){return 1===n?"יום":"ימים"},function(n){return 1===n?"שעה":"שעות"},function(n){return 1===n?"דקה":"דקות"},function(n){return 1===n?"שניה":"שניות"},function(n){return 1===n?"מילישנייה":"מילישניות"}),hr:o(function(n){return n%10==2||n%10==3||n%10==4?"godine":"godina"},function(n){return 1===n?"mjesec":2===n||3===n||4===n?"mjeseca":"mjeseci"},function(n){return n%10==1&&11!==n?"tjedan":"tjedna"},function(n){return 1===n?"dan":"dana"},function(n){return 1===n?"sat":2===n||3===n||4===n?"sata":"sati"},function(n){var t=n%10;return(2===t||3===t||4===t)&&(n<10||n>14)?"minute":"minuta"},function(n){var t=n%10;if(5===t||Math.floor(n)===n&&n>=10&&n<=19);else if(1===t)return"sekunda";else if(2===t||3===t||4===t)return"sekunde";return"sekundi"},function(n){return 1===n?"milisekunda":n%10==2||n%10==3||n%10==4?"milisekunde":"milisekundi"},","),hi:o("साल",function(n){return 1===n?"महीना":"महीने"},function(n){return 1===n?"हफ़्ता":"हफ्ते"},"दिन",function(n){return 1===n?"घंटा":"घंटे"},"मिनट","सेकंड","मिलीसेकंड"),hu:o("\xe9v","h\xf3nap","h\xe9t","nap","\xf3ra","perc","m\xe1sodperc","ezredm\xe1sodperc",","),id:o("tahun","bulan","minggu","hari","jam","menit","detik","milidetik"),is:o("\xe1r",function(n){return"m\xe1nu\xf0"+(1===n?"ur":"ir")},function(n){return"vik"+(1===n?"a":"ur")},function(n){return"dag"+(1===n?"ur":"ar")},function(n){return"klukkut\xedm"+(1===n?"i":"ar")},function(n){return"m\xedn\xfat"+(1===n?"a":"ur")},function(n){return"sek\xfand"+(1===n?"a":"ur")},function(n){return"millisek\xfand"+(1===n?"a":"ur")}),it:o(function(n){return"ann"+(1===n?"o":"i")},function(n){return"mes"+(1===n?"e":"i")},function(n){return"settiman"+(1===n?"a":"e")},function(n){return"giorn"+(1===n?"o":"i")},function(n){return"or"+(1===n?"a":"e")},function(n){return"minut"+(1===n?"o":"i")},function(n){return"second"+(1===n?"o":"i")},function(n){return"millisecond"+(1===n?"o":"i")},","),ja:o("年","ヶ月","週","日","時間","分","秒","ミリ秒"),km:o("ឆ្នាំ","ខែ","សប្តាហ៍","ថ្ងៃ","ម៉ោង","នាទី","វិនាទី","មិល្លីវិនាទី"),kn:o(function(n){return 1===n?"ವರ್ಷ":"ವರ್ಷಗಳು"},function(n){return 1===n?"ತಿಂಗಳು":"ತಿಂಗಳುಗಳು"},function(n){return 1===n?"ವಾರ":"ವಾರಗಳು"},function(n){return 1===n?"ದಿನ":"ದಿನಗಳು"},function(n){return 1===n?"ಗಂಟೆ":"ಗಂಟೆಗಳು"},function(n){return 1===n?"ನಿಮಿಷ":"ನಿಮಿಷಗಳು"},function(n){return 1===n?"ಸೆಕೆಂಡ್":"ಸೆಕೆಂಡುಗಳು"},function(n){return 1===n?"ಮಿಲಿಸೆಕೆಂಡ್":"ಮಿಲಿಸೆಕೆಂಡುಗಳು"}),ko:o("년","개월","주일","일","시간","분","초","밀리 초"),ku:o("sal","meh","hefte","roj","seet","deqe","saniye","m\xeel\xee\xe7irk",","),lo:o("ປີ","ເດືອນ","ອາທິດ","ມື້","ຊົ່ວໂມງ","ນາທີ","ວິນາທີ","ມິນລິວິນາທີ",","),lt:o(function(n){return n%10==0||n%100>=10&&n%100<=20?"metų":"metai"},function(n){return["mėnuo","mėnesiai","mėnesių"][d(n)]},function(n){return["savaitė","savaitės","savaičių"][d(n)]},function(n){return["diena","dienos","dienų"][d(n)]},function(n){return["valanda","valandos","valandų"][d(n)]},function(n){return["minutė","minutės","minučių"][d(n)]},function(n){return["sekundė","sekundės","sekundžių"][d(n)]},function(n){return["milisekundė","milisekundės","milisekundžių"][d(n)]},","),lv:o(function(n){return l(n)?"gads":"gadi"},function(n){return l(n)?"mēnesis":"mēneši"},function(n){return l(n)?"nedēļa":"nedēļas"},function(n){return l(n)?"diena":"dienas"},function(n){return l(n)?"stunda":"stundas"},function(n){return l(n)?"minūte":"minūtes"},function(n){return l(n)?"sekunde":"sekundes"},function(n){return l(n)?"milisekunde":"milisekundes"},","),mk:o(function(n){return 1===n?"година":"години"},function(n){return 1===n?"месец":"месеци"},function(n){return 1===n?"недела":"недели"},function(n){return 1===n?"ден":"дена"},function(n){return 1===n?"час":"часа"},function(n){return 1===n?"минута":"минути"},function(n){return 1===n?"секунда":"секунди"},function(n){return 1===n?"милисекунда":"милисекунди"},","),mn:o("жил","сар","долоо хоног","өдөр","цаг","минут","секунд","миллисекунд"),mr:o(function(n){return 1===n?"वर्ष":"वर्षे"},function(n){return 1===n?"महिना":"महिने"},function(n){return 1===n?"आठवडा":"आठवडे"},"दिवस","तास",function(n){return 1===n?"मिनिट":"मिनिटे"},"सेकंद","मिलिसेकंद"),ms:o("tahun","bulan","minggu","hari","jam","minit","saat","milisaat"),nl:o("jaar",function(n){return 1===n?"maand":"maanden"},function(n){return 1===n?"week":"weken"},function(n){return 1===n?"dag":"dagen"},"uur",function(n){return 1===n?"minuut":"minuten"},function(n){return 1===n?"seconde":"seconden"},function(n){return 1===n?"milliseconde":"milliseconden"},","),no:o("\xe5r",function(n){return"m\xe5ned"+(1===n?"":"er")},function(n){return"uke"+(1===n?"":"r")},function(n){return"dag"+(1===n?"":"er")},function(n){return"time"+(1===n?"":"r")},function(n){return"minutt"+(1===n?"":"er")},function(n){return"sekund"+(1===n?"":"er")},function(n){return"millisekund"+(1===n?"":"er")},","),pl:o(function(n){return["rok","roku","lata","lat"][f(n)]},function(n){return["miesiąc","miesiąca","miesiące","miesięcy"][f(n)]},function(n){return["tydzień","tygodnia","tygodnie","tygodni"][f(n)]},function(n){return["dzień","dnia","dni","dni"][f(n)]},function(n){return["godzina","godziny","godziny","godzin"][f(n)]},function(n){return["minuta","minuty","minuty","minut"][f(n)]},function(n){return["sekunda","sekundy","sekundy","sekund"][f(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisekund"][f(n)]},","),pt:o(function(n){return"ano"+(1===n?"":"s")},function(n){return 1===n?"m\xeas":"meses"},function(n){return"semana"+(1===n?"":"s")},function(n){return"dia"+(1===n?"":"s")},function(n){return"hora"+(1===n?"":"s")},function(n){return"minuto"+(1===n?"":"s")},function(n){return"segundo"+(1===n?"":"s")},function(n){return"milissegundo"+(1===n?"":"s")},","),ro:o(function(n){return 1===n?"an":"ani"},function(n){return 1===n?"lună":"luni"},function(n){return 1===n?"săptăm\xe2nă":"săptăm\xe2ni"},function(n){return 1===n?"zi":"zile"},function(n){return 1===n?"oră":"ore"},function(n){return 1===n?"minut":"minute"},function(n){return 1===n?"secundă":"secunde"},function(n){return 1===n?"milisecundă":"milisecunde"},","),ru:o(function(n){return["лет","год","года"][a(n)]},function(n){return["месяцев","месяц","месяца"][a(n)]},function(n){return["недель","неделя","недели"][a(n)]},function(n){return["дней","день","дня"][a(n)]},function(n){return["часов","час","часа"][a(n)]},function(n){return["минут","минута","минуты"][a(n)]},function(n){return["секунд","секунда","секунды"][a(n)]},function(n){return["миллисекунд","миллисекунда","миллисекунды"][a(n)]},","),sq:o(function(n){return 1===n?"vit":"vjet"},"muaj","jav\xeb","dit\xeb","or\xeb",function(n){return"minut"+(1===n?"\xeb":"a")},function(n){return"sekond"+(1===n?"\xeb":"a")},function(n){return"milisekond"+(1===n?"\xeb":"a")},","),sr:o(function(n){return["години","година","године"][a(n)]},function(n){return["месеци","месец","месеца"][a(n)]},function(n){return["недељи","недеља","недеље"][a(n)]},function(n){return["дани","дан","дана"][a(n)]},function(n){return["сати","сат","сата"][a(n)]},function(n){return["минута","минут","минута"][a(n)]},function(n){return["секунди","секунда","секунде"][a(n)]},function(n){return["милисекунди","милисекунда","милисекунде"][a(n)]},","),ta:o(function(n){return 1===n?"வருடம்":"ஆண்டுகள்"},function(n){return 1===n?"மாதம்":"மாதங்கள்"},function(n){return 1===n?"வாரம்":"வாரங்கள்"},function(n){return 1===n?"நாள்":"நாட்கள்"},function(n){return 1===n?"மணி":"மணிநேரம்"},function(n){return"நிமிட"+(1===n?"ம்":"ங்கள்")},function(n){return"வினாடி"+(1===n?"":"கள்")},function(n){return"மில்லி விநாடி"+(1===n?"":"கள்")}),te:o(function(n){return"సంవత్స"+(1===n?"రం":"రాల")},function(n){return"నెల"+(1===n?"":"ల")},function(n){return 1===n?"వారం":"వారాలు"},function(n){return"రోజు"+(1===n?"":"లు")},function(n){return"గంట"+(1===n?"":"లు")},function(n){return 1===n?"నిమిషం":"నిమిషాలు"},function(n){return 1===n?"సెకను":"సెకన్లు"},function(n){return 1===n?"మిల్లీసెకన్":"మిల్లీసెకన్లు"}),uk:o(function(n){return["років","рік","роки"][a(n)]},function(n){return["місяців","місяць","місяці"][a(n)]},function(n){return["тижнів","тиждень","тижні"][a(n)]},function(n){return["днів","день","дні"][a(n)]},function(n){return["годин","година","години"][a(n)]},function(n){return["хвилин","хвилина","хвилини"][a(n)]},function(n){return["секунд","секунда","секунди"][a(n)]},function(n){return["мілісекунд","мілісекунда","мілісекунди"][a(n)]},","),ur:o("سال",function(n){return 1===n?"مہینہ":"مہینے"},function(n){return 1===n?"ہفتہ":"ہفتے"},"دن",function(n){return 1===n?"گھنٹہ":"گھنٹے"},"منٹ","سیکنڈ","ملی سیکنڈ"),sk:o(function(n){return["rok","roky","roky","rokov"][s(n)]},function(n){return["mesiac","mesiace","mesiace","mesiacov"][s(n)]},function(n){return["t\xfdždeň","t\xfdždne","t\xfdždne","t\xfdždňov"][s(n)]},function(n){return["deň","dni","dni","dn\xed"][s(n)]},function(n){return["hodina","hodiny","hodiny","hod\xedn"][s(n)]},function(n){return["min\xfata","min\xfaty","min\xfaty","min\xfat"][s(n)]},function(n){return["sekunda","sekundy","sekundy","sek\xfand"][s(n)]},function(n){return["milisekunda","milisekundy","milisekundy","milisek\xfand"][s(n)]},","),sl:o(function(n){return n%10==1?"leto":n%100==2?"leti":n%100==3||n%100==4||Math.floor(n)!==n&&n%100<=5?"leta":"let"},function(n){return n%10==1?"mesec":n%100==2||Math.floor(n)!==n&&n%100<=5?"meseca":n%10==3||n%10==4?"mesece":"mesecev"},function(n){return n%10==1?"teden":n%10==2||Math.floor(n)!==n&&n%100<=4?"tedna":n%10==3||n%10==4?"tedne":"tednov"},function(n){return n%100==1?"dan":"dni"},function(n){return n%10==1?"ura":n%100==2?"uri":n%10==3||n%10==4||Math.floor(n)!==n?"ure":"ur"},function(n){return n%10==1?"minuta":n%10==2?"minuti":n%10==3||n%10==4||Math.floor(n)!==n&&n%100<=4?"minute":"minut"},function(n){return n%10==1?"sekunda":n%100==2?"sekundi":n%100==3||n%100==4||Math.floor(n)!==n?"sekunde":"sekund"},function(n){return n%10==1?"milisekunda":n%100==2?"milisekundi":n%100==3||n%100==4||Math.floor(n)!==n?"milisekunde":"milisekund"},","),sv:o("\xe5r",function(n){return"m\xe5nad"+(1===n?"":"er")},function(n){return"veck"+(1===n?"a":"or")},function(n){return"dag"+(1===n?"":"ar")},function(n){return"timm"+(1===n?"e":"ar")},function(n){return"minut"+(1===n?"":"er")},function(n){return"sekund"+(1===n?"":"er")},function(n){return"millisekund"+(1===n?"":"er")},","),sw:m(o(function(n){return 1===n?"mwaka":"miaka"},function(n){return 1===n?"mwezi":"miezi"},"wiki",function(n){return 1===n?"siku":"masiku"},function(n){return 1===n?"saa":"masaa"},"dakika","sekunde","milisekunde"),{_numberFirst:!0}),tr:o("yıl","ay","hafta","g\xfcn","saat","dakika","saniye","milisaniye",","),th:o("ปี","เดือน","สัปดาห์","วัน","ชั่วโมง","นาที","วินาที","มิลลิวินาที"),uz:o("yil","oy","hafta","kun","soat","minut","sekund","millisekund"),uz_CYR:o("йил","ой","ҳафта","кун","соат","минут","секунд","миллисекунд"),vi:o("năm","th\xe1ng","tuần","ng\xe0y","giờ","ph\xfat","gi\xe2y","mili gi\xe2y",","),zh_CN:o("年","个月","周","天","小时","分钟","秒","毫秒"),zh_TW:o("年","個月","周","天","小時","分鐘","秒","毫秒")};function o(n,t,u,r,e,i,o,c,f){var a={y:n,mo:t,w:u,d:r,h:e,m:i,s:o,ms:c};return void 0!==f&&(a.decimal=f),a}function c(n){return 2===n?1:n>2&&n<11?2:0}function f(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&!(n%100>10&&n%100<20)?2:3}function a(n){return Math.floor(n)!==n?2:n%100>=5&&n%100<=20||n%10>=5&&n%10<=9||n%10==0?0:n%10==1?1:n>1?2:0}function s(n){return 1===n?0:Math.floor(n)!==n?1:n%10>=2&&n%10<=4&&n%100<10?2:3}function d(n){return 1===n||n%10==1&&n%100>20?0:Math.floor(n)!==n||n%10>=2&&n%100>20||n%10>=2&&n%100<10?1:2}function l(n){return n%10==1&&n%100!=11}function m(n){for(var t,u=1;u<arguments.length;u++)for(var r in t=arguments[u])h(t,r)&&(n[r]=t[r]);return n}var k=Array.isArray||function(n){return"[object Array]"===Object.prototype.toString.call(n)};function h(n,t){return Object.prototype.hasOwnProperty.call(n,t)}function g(n,t,u){var r,e,i,o,c=n.unitName,f=n.unitCount,a=u.spacer,s=u.maxDecimalPoints;r=h(u,"decimal")?u.decimal:h(t,"decimal")?t.decimal:".","digitReplacements"in u?e=u.digitReplacements:"_digitReplacements"in t&&(e=t._digitReplacements);var d=(void 0===s?f:Math.floor(f*Math.pow(10,s))/Math.pow(10,s)).toString();if(e){i="";for(var l=0;l<d.length;l++){var m=d[l];"."===m?i+=r:i+=e[m]}}else i=d.replace(".",r);var k=t[c];return(o="function"==typeof k?k(f):k,t._numberFirst)?o+a+i:i+a+o}function v(n){var t=function(n,u){n=Math.abs(n);var r=m({},t,u||{});return function(n,t){var u,r=function(n){var t=[n.language];if(h(n,"fallbacks")){if(k(n.fallbacks)&&n.fallbacks.length)t=t.concat(n.fallbacks);else throw Error("fallbacks must be an array with at least one element")}for(var u=0;u<t.length;u++){var r=t[u];if(h(n.languages,r))return n.languages[r];if(h(i,r))return i[r]}throw Error("No language found.")}(t);if(!n.length){var e=t.units;return g({unitName:e[e.length-1],unitCount:0},r,t)}var o=t.conjunction,c=t.serialComma;u=h(t,"delimiter")?t.delimiter:h(r,"delimiter")?r.delimiter:", ";for(var f=[],a=0;a<n.length;a++)f.push(g(n[a],r,t));return o&&1!==n.length?2===n.length?f.join(o):f.slice(0,-1).join(u)+(c?",":"")+o+f.slice(-1):f.join(u)}(function(n,t){var u,r,e,i,o=t.units,c=t.unitMeasures,f="largest"in t?t.largest:1/0;if(!o.length)return[];var a={};for(r=0,i=n;r<o.length;r++){var s=c[u=o[r]];e=r===o.length-1?i/s:Math.floor(i/s),a[u]=e,i-=e*s}if(t.round){var d=f;for(r=0;r<o.length;r++)if(0!==(e=a[u=o[r]])&&0==--d){for(var l=r+1;l<o.length;l++){var m=o[l],k=a[m];a[u]+=k*c[m]/c[u],a[m]=0}break}for(r=o.length-1;r>=0;r--)if(0!==(e=a[u=o[r]])){var h=Math.round(e);if(a[u]=h,0===r)break;var g=o[r-1],v=c[g],x=Math.floor(h*c[u]/v);if(x)a[g]+=x,a[u]=0;else break}}var y=[];for(r=0;r<o.length&&y.length<f;r++)(e=a[u=o[r]])&&y.push({unitName:u,unitCount:e});return y}(n,r),r)};return m(t,{language:"en",spacer:" ",conjunction:"",serialComma:!0,units:["y","mo","w","d","h","m","s"],languages:{},round:!1,unitMeasures:{y:315576e5,mo:26298e5,w:6048e5,d:864e5,h:36e5,m:6e4,s:1e3,ms:1}},n)}var x=v({});x.getSupportedLanguages=function(){var n=[];for(var t in i)h(i,t)&&"gr"!==t&&n.push(t);return n},x.humanizer=v,void 0!==(r=(function(){return x}).call(t,u,t,n))&&(n.exports=r)}()}}]);