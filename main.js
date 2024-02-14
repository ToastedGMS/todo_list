(()=>{"use strict";const e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function t(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const n={date:t({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:t({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:t({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},a={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function r(e){return(t,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,r=n?.width?String(n.width):t;a=e.formattingValues[r]||e.formattingValues[t]}else{const t=e.defaultWidth,r=n?.width?String(n.width):e.defaultWidth;a=e.values[r]||e.values[t]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function i(e){return(t,n={})=>{const a=n.width,r=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;const o=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(o))return t}(d):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(o))return t}(d);let u;return u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:t.slice(o.length)}}}var o;const d={code:"en-US",formatDistance:(t,n,a)=>{let r;const i=e[t];return r="string"==typeof i?i:1===n?i.one:i.other.replace("{{count}}",n.toString()),a?.addSuffix?a.comparison&&a.comparison>0?"in "+r:r+" ago":r},formatLong:n,formatRelative:(e,t,n,r)=>a[e],localize:{ordinalNumber:(e,t)=>{const n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:r({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:r({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:r({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:r({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:r({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(o.matchPattern);if(!n)return null;const a=n[0],r=e.match(o.parsePattern);if(!r)return null;let i=o.valueCallback?o.valueCallback(r[0]):r[0];return i=t.valueCallback?t.valueCallback(i):i,{value:i,rest:e.slice(a.length)}}),era:i({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:i({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:i({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:i({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:i({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let c={};function u(){return c}Math.pow(10,8);const s=6048e5,l=864e5;function m(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function h(e){const t=m(e);return t.setHours(0,0,0,0),t}function p(e){const t=m(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function f(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function g(e){const t=m(e);return function(e,t){const n=h(e),a=h(t),r=+n-p(n),i=+a-p(a);return Math.round((r-i)/l)}(t,function(e){const t=m(e),n=f(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function y(e,t){const n=u(),a=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=m(e),i=r.getDay(),o=(i<a?7:0)+i-a;return r.setDate(r.getDate()-o),r.setHours(0,0,0,0),r}function b(e){return y(e,{weekStartsOn:1})}function w(e){const t=m(e),n=t.getFullYear(),a=f(e,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=b(a),i=f(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=b(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function v(e){const t=m(e),n=+b(t)-+function(e){const t=w(e),n=f(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),b(n)}(t);return Math.round(n/s)+1}function C(e,t){const n=m(e),a=n.getFullYear(),r=u(),i=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,o=f(e,0);o.setFullYear(a+1,0,i),o.setHours(0,0,0,0);const d=y(o,t),c=f(e,0);c.setFullYear(a,0,i),c.setHours(0,0,0,0);const s=y(c,t);return n.getTime()>=d.getTime()?a+1:n.getTime()>=s.getTime()?a:a-1}function E(e,t){const n=m(e),a=+y(n,t)-+function(e,t){const n=u(),a=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,r=C(e,t),i=f(e,0);return i.setFullYear(r,0,a),i.setHours(0,0,0,0),y(i,t)}(n,t);return Math.round(a/s)+1}function T(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const k={y(e,t){const n=e.getFullYear(),a=n>0?n:1-n;return T("yy"===t?a%100:a,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):T(n+1,2)},d:(e,t)=>T(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>T(e.getHours()%12||12,t.length),H:(e,t)=>T(e.getHours(),t.length),m:(e,t)=>T(e.getMinutes(),t.length),s:(e,t)=>T(e.getSeconds(),t.length),S(e,t){const n=t.length,a=e.getMilliseconds();return T(Math.trunc(a*Math.pow(10,n-3)),t.length)}},x={G:function(e,t,n){const a=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),a=t>0?t:1-t;return n.ordinalNumber(a,{unit:"year"})}return k.y(e,t)},Y:function(e,t,n,a){const r=C(e,a),i=r>0?r:1-r;return"YY"===t?T(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):T(i,t.length)},R:function(e,t){return T(w(e),t.length)},u:function(e,t){return T(e.getFullYear(),t.length)},Q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return T(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){const a=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return T(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){const a=e.getMonth();switch(t){case"M":case"MM":return k.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){const a=e.getMonth();switch(t){case"L":return String(a+1);case"LL":return T(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){const r=E(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):T(r,t.length)},I:function(e,t,n){const a=v(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):T(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):k.d(e,t)},D:function(e,t,n){const a=g(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):T(a,t.length)},E:function(e,t,n){const a=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return T(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){const r=e.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return T(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const a=e.getDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return T(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){const a=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){const a=e.getHours();let r;switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const a=e.getHours();let r;switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return k.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):k.H(e,t)},K:function(e,t,n){const a=e.getHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):T(a,t.length)},k:function(e,t,n){let a=e.getHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):T(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):k.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):k.s(e,t)},S:function(e,t){return k.S(e,t)},X:function(e,t,n){const a=e.getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return S(a);case"XXXX":case"XX":return L(a);default:return L(a,":")}},x:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"x":return S(a);case"xxxx":case"xx":return L(a);default:return L(a,":")}},O:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+M(a,":");default:return"GMT"+L(a,":")}},z:function(e,t,n){const a=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+M(a,":");default:return"GMT"+L(a,":")}},t:function(e,t,n){return T(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return T(e.getTime(),t.length)}};function M(e,t=""){const n=e>0?"-":"+",a=Math.abs(e),r=Math.trunc(a/60),i=a%60;return 0===i?n+String(r):n+String(r)+t+T(i,2)}function S(e,t){return e%60==0?(e>0?"-":"+")+T(Math.abs(e)/60,2):L(e,t)}function L(e,t=""){const n=e>0?"-":"+",a=Math.abs(e);return n+T(Math.trunc(a/60),2)+t+T(a%60,2)}const D=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},P=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},j={p:P,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return D(e,t);let i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",D(a,t)).replace("{{time}}",P(r,t))}},q=/^D+$/,A=/^Y+$/,W=["D","DD","YY","YYYY"];function N(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=m(e);return!isNaN(Number(n))}const O=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,Y=/''/g,F=/[a-zA-Z]/;function H(e,t,n){const a=u(),r=n?.locale??a.locale??d,i=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,o=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??a.weekStartsOn??a.locale?.options?.weekStartsOn??0,c=m(e);if(!N(c))throw new RangeError("Invalid time value");let s=t.match(B).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,j[t])(e,r.formatLong):e})).join("").match(O).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:z(e)};if(x[t])return{isToken:!0,value:e};if(t.match(F))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));r.localize.preprocessor&&(s=r.localize.preprocessor(c,s));const l={firstWeekContainsDate:i,weekStartsOn:o,locale:r};return s.map((a=>{if(!a.isToken)return a.value;const i=a.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return A.test(e)}(i)||!n?.useAdditionalDayOfYearTokens&&function(e){return q.test(e)}(i))&&function(e,t,n){const a=function(e,t,n){const a="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(a),W.includes(e))throw new RangeError(a)}(i,t,String(e)),(0,x[i[0]])(c,i,r.localize,l)})).join("")}function z(e){const t=e.match(I);return t?t[1].replace(Y,"'"):e}let J=[];class Q{constructor(e,t,n,a=void 0,r=void 0,i=void 0,o=[]){this.type=e,this.title=t,this.description=n,this.dueDate=a,this.dueTime=r,this.priority=i,this.listItems=o}pushToList(){return J.push(this),J}}const G=()=>{let e=document.getElementById("type").value,t=document.getElementById("title"),n=t?t.value:void 0,a=document.getElementById("description"),r=a?a.value:void 0,i=document.getElementById("dueDate"),o=i?i.value:void 0,d=document.getElementById("dueTime"),c=d?d.value:void 0,u=document.getElementById("priority"),s=u?u.value:void 0,l=[],m=document.getElementById("listItemsContainer");if(m){let e=m.getElementsByTagName("input");for(let t of e)l.push(t.value)}new Q(e,n,r,o,c,s,l).pushToList(),re(J);let h=JSON.stringify(J);localStorage.setItem("todoList",h)},X=document.querySelector(".modalBody"),$=document.createElement("form");function R(e,t){var n=document.createElement("label");return n.textContent=e+":",n.setAttribute("for",t),n}function U(e,t){var n=document.createElement("input");return n.type=e,n.id=t,n.name=t,n.setAttribute("maxlength","13"),n.required="dueDate"!==t&&"dueTime"!==t,n}function V(e){var t=document.createElement("textarea");return t.id=e,t.name=e,t.rows="4",t.cols="50",t}function K(e,t){var n=document.createElement("select");n.id=e,n.name=e,n.required=!0;for(var a=0;a<t.length;a++){var r=document.createElement("option");r.value=t[a],r.text=t[a],n.appendChild(r)}return n}$.id="todoForm",$.appendChild(R("Type","type")),$.appendChild(K("type",["","Task","Note","List","Project"])),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),X.appendChild($),document.getElementById("type").addEventListener("change",(()=>{let e=document.getElementById("type");if("Note"===e.value)ee(),$.appendChild(R("Title","title")),$.appendChild(U("text","title")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Description","description")),$.appendChild(V("description")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),$.appendChild(n),(a=document.createElement("input")).classList.add("modalBtn"),a.type="submit",a.value="Add to Project",a.setAttribute("data-type","project-form-build-button"),$.appendChild(a),a.addEventListener("click",te),a.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}));else if("Task"===e.value)ee(),$.appendChild(R("Title","title")),$.appendChild(U("text","title")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Description","description")),$.appendChild(V("description")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Due Date","dueDate")),$.appendChild(U("date","dueDate")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Due Time","dueTime")),$.appendChild(U("time","dueTime")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Priority","priority")),$.appendChild(K("priority",["Low","Medium","High"])),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),$.appendChild(n),(a=document.createElement("input")).classList.add("modalBtn"),a.type="submit",a.value="Add to Project",a.setAttribute("data-type","project-form-build-button"),$.appendChild(a),a.addEventListener("click",te),a.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}));else if("List"===e.value){ee(),$.appendChild(R("Title","title")),$.appendChild(U("text","title")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("List Items","listItems")),$.appendChild(document.createElement("br"));var t=document.createElement("div");t.id="listItemsContainer";let o=0;function d(){if(o<13){var e=U("text","li");t.appendChild(e),t.appendChild(document.createElement("br")),o+=1}}d(),$.appendChild(t),$.appendChild(document.createElement("br"));var n,a,r=document.createElement("button");r.textContent="Add List Item",r.addEventListener("click",d),$.appendChild(r),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),$.appendChild(n),(a=document.createElement("input")).classList.add("modalBtn"),a.type="submit",a.value="Add to Project",a.setAttribute("data-type","project-form-build-button"),$.appendChild(a),a.addEventListener("click",te),a.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}))}else if("Project"===e.value){ee(),$.appendChild(R("Project Title","projectTitle")),$.appendChild(U("text","projectTitle")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br"));var i=document.createElement("input");i.classList.add("modalBtn"),i.type="submit",i.value="Create Project",i.setAttribute("data-type","project-create-button"),$.appendChild(i),i.addEventListener("click",(e=>{e.preventDefault(),ae();let t=$.querySelector("span");t&&t.remove(),$.appendChild(document.createElement("span")).innerText="Project Created!"}))}}));const Z=()=>{null!=modal&&(modal.classList.remove("active"),overlay.classList.remove("active"))},_=()=>{$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br")),$.appendChild(R("Project Title","projectTitle")),$.appendChild(U("text","projectTitle")),$.appendChild(document.createElement("br")),$.appendChild(document.createElement("br"));var e=document.createElement("input");e.type="submit",e.value="Create Todo and add to Project",e.setAttribute("data-type","project-create-button"),$.appendChild(e),e.addEventListener("click",(e=>{e.preventDefault();let t=$.querySelector("span");t&&t.remove(),ae()}))},ee=()=>{for(var e=$.children;4<e.length;)$.removeChild(e[4])};function te(e){e.preventDefault(),_(),document.querySelector('[data-type="project-form-build-button"]').removeEventListener("click",te)}let ne=[];function ae(){let e=document.getElementById("projectTitle").value,t=!1;for(const n of ne)if(n[0]===e){t=!0;break}if(t){G(),ne.find((t=>t[0]===e)).push(J[J.length-1]);let t=$.querySelector("span");t&&t.remove(),$.appendChild(document.createElement("span")).innerText=`${document.getElementById("projectTitle").value} already exists! Todo added to existing project.`;let n=JSON.stringify(ne);localStorage.setItem("projectList",n)}else{G();const t=[e,J[J.length-1]];ne.push(t);let n=$.querySelector("span");n&&n.remove(),$.appendChild(document.createElement("span")).innerText=`Todo Created and added to ${document.getElementById("projectTitle").value}!`;let a=JSON.stringify(ne);localStorage.setItem("projectList",a)}}function re(e){const t=document.querySelector("main");for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.querySelector("#scheduleCardDiv");for(;n.firstChild;)n.removeChild(n.lastChild);e.forEach(((a,r)=>{const i=e.indexOf(a);if("Task"===a.type){const e=document.createElement("div");e.classList.add("taskCard"),e.setAttribute("data-task-id",a.title),e.classList.add("card");const r=document.createElement("h3");r.innerText=a.title;const o=document.createElement("p");o.innerText=a.description;const d=document.createElement("p");""===a.dueDate?d.innerText=a.dueDate:d.innerText=H(new Date(`${a.dueDate}T12:00:00`),"MMMM d, yyyy");const c=document.createElement("p");c.innerText=a.dueTime;const u=document.createElement("p");u.innerText=a.priority;const s=document.createElement("button");s.setAttribute("data-type","delete-button"),s.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(i,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),re(J);const t=document.querySelector(`[data-schedule-id="${a.title}"]`);t&&t.remove();for(const e of ne){const t=e.indexOf(a);if(-1!==t){e.splice(t,1);let n=JSON.stringify(ne);localStorage.setItem("projectList",n);break}}}})),t.appendChild(e),e.appendChild(r),e.appendChild(o),e.appendChild(d),e.appendChild(c),e.appendChild(u),e.appendChild(document.createElement("br")),e.appendChild(s).innerText="Delete";const l=document.createElement("div");l.classList.add("card"),l.classList.add("scheduleCard"),l.setAttribute("data-schedule-id",a.title);let m=document.createElement("h4");m.innerText=a.title;let h=document.createElement("p");""===a.dueDate?d.innerText=a.dueDate:""===a.dueTime?h.innerText=H(new Date(`${a.dueDate}T12:00:00`),"MMMM d, yyyy"):h.innerText=H(new Date(`${a.dueDate}T12:00:00`),"MMMM d, yyyy")+" - "+a.dueTime,l.appendChild(m),l.appendChild(h),n.appendChild(l),function(){const e=document.getElementById("scheduleCardDiv"),t=Array.from(e.getElementsByClassName("scheduleCard"));t.sort(((e,t)=>new Date(e.querySelector("p").innerText.split(" - ")[0])-new Date(t.querySelector("p").innerText.split(" - ")[0]))),t.forEach((t=>{e.appendChild(t)}))}()}else if("Note"===a.type){const e=document.createElement("div");e.classList.add("noteCard"),e.setAttribute("data-index",r),e.classList.add("card");const n=document.createElement("h3");n.innerText=a.title;const o=document.createElement("p");o.innerText=a.description;const d=document.createElement("button");d.setAttribute("data-type","delete-button"),d.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(i,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),re(J)}})),t.appendChild(e),e.appendChild(n),e.appendChild(o),e.appendChild(document.createElement("br")),e.appendChild(d).innerText="Delete"}else if("List"===a.type){const e=document.createElement("div");e.classList.add("listCard"),e.setAttribute("data-index",r),e.classList.add("card");const n=document.createElement("h3");n.innerText=a.title;const o=document.createElement("ul");a.listItems&&a.listItems.length>0&&a.listItems.forEach((e=>{const t=document.createElement("li");t.innerText=e,o.appendChild(t)}));const d=document.createElement("button");d.setAttribute("data-type","delete-button"),d.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(i,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),re(J)}})),t.appendChild(e),e.appendChild(n),e.appendChild(o),e.appendChild(document.createElement("br")),e.appendChild(d).innerText="Delete"}}))}!function(){let e=document.querySelector("#projectBtn"),t=document.querySelector("#projectDiv"),n=0;e.addEventListener("click",(()=>{if(0===n){for(;t.firstChild;)t.removeChild(t.lastChild);ne.forEach((e=>{let n=document.createElement("button"),a=ne.indexOf(e);n.innerText=e[0],t.appendChild(n),n.addEventListener("click",(()=>{re(e)}));let r=document.createElement("button");r.innerText="delet",t.appendChild(r),t.appendChild(document.createElement("br")),t.appendChild(document.createElement("br")),r.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the project?")){ne.splice(a,1);let e=JSON.stringify(ne);localStorage.setItem("projectList",e)}}))})),n=1}else if(n=1){for(;t.firstChild;)t.removeChild(t.lastChild);n=0}}))}();let ie=[],oe=[],de=[];const ce=document.querySelectorAll("[data-close-button]"),ue=document.getElementById("overlay"),se=document.querySelectorAll('[data-type="formBtn"]');ue.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{Z()}))})),se.forEach((e=>{e.addEventListener("click",(()=>{null!=modal&&(modal.classList.add("active"),overlay.classList.add("active"))}))})),ce.forEach((e=>{e.addEventListener("click",(()=>{Z()}))})),(()=>{const e=document.querySelector("[data-lists]"),t=document.querySelector("[data-notes]"),n=document.querySelector("[data-tasks]");document.querySelector("[data-all]").addEventListener("click",(()=>{re(J)})),t.addEventListener("click",(()=>{ie.splice(0,ie.length),J.forEach((e=>{"Note"===e.type&&ie.push(e),re(ie)}))})),n.addEventListener("click",(()=>{oe.splice(0,oe.length),J.forEach((e=>{"Task"===e.type&&oe.push(e),re(oe)}))})),e.addEventListener("click",(()=>{de.splice(0,de.length),J.forEach((e=>{"List"===e.type&&de.push(e),re(de)}))}))})(),document.addEventListener("DOMContentLoaded",(function(){let e=localStorage.getItem("todoList");JSON.parse(e).forEach((e=>J.push(e))),re(J);let t=localStorage.getItem("projectList");JSON.parse(t).forEach((e=>ne.push(e)))})),document.querySelector("#deleteAll").addEventListener("click",(function(){confirm("This action will delete ALL STORAGE PERMANENTLY")&&(localStorage.clear(),location.reload())}))})();