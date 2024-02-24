(()=>{"use strict";const e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function t(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const n={date:t({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:t({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:t({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},r={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function a(e){return(t,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=n?.width?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=n?.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function o(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;const i=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?function(e,t){for(let t=0;t<e.length;t++)if(e[t].test(i))return t}(d):function(e,t){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&e[t].test(i))return t}(d);let l;return l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l,{value:l,rest:t.slice(i.length)}}}var i;const d={code:"en-US",formatDistance:(t,n,r)=>{let a;const o=e[t];return a="string"==typeof o?o:1===n?o.one:o.other.replace("{{count}}",n.toString()),r?.addSuffix?r.comparison&&r.comparison>0?"in "+a:a+" ago":a},formatLong:n,formatRelative:(e,t,n,a)=>r[e],localize:{ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:a({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:a({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:a({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:a({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:a({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(i={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)},(e,t={})=>{const n=e.match(i.matchPattern);if(!n)return null;const r=n[0],a=e.match(i.parsePattern);if(!a)return null;let o=i.valueCallback?i.valueCallback(a[0]):a[0];return o=t.valueCallback?t.valueCallback(o):o,{value:o,rest:e.slice(r.length)}}),era:o({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:o({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:o({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:o({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:o({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let c={};function l(){return c}Math.pow(10,8);const s=6048e5,u=864e5;function m(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function h(e){const t=m(e);return t.setHours(0,0,0,0),t}function p(e){const t=m(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function f(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}function g(e){const t=m(e);return function(e,t){const n=h(e),r=h(t),a=+n-p(n),o=+r-p(r);return Math.round((a-o)/u)}(t,function(e){const t=m(e),n=f(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t))+1}function y(e,t){const n=l(),r=t?.weekStartsOn??t?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=m(e),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function b(e){return y(e,{weekStartsOn:1})}function C(e){const t=m(e),n=t.getFullYear(),r=f(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=b(r),o=f(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=b(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}function w(e){const t=m(e),n=+b(t)-+function(e){const t=C(e),n=f(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),b(n)}(t);return Math.round(n/s)+1}function v(e,t){const n=m(e),r=n.getFullYear(),a=l(),o=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=f(e,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const d=y(i,t),c=f(e,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const s=y(c,t);return n.getTime()>=d.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function E(e,t){const n=m(e),r=+y(n,t)-+function(e,t){const n=l(),r=t?.firstWeekContainsDate??t?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=v(e,t),o=f(e,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),y(o,t)}(n,t);return Math.round(r/s)+1}function x(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const T={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return x("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):x(n+1,2)},d:(e,t)=>x(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>x(e.getHours()%12||12,t.length),H:(e,t)=>x(e.getHours(),t.length),m:(e,t)=>x(e.getMinutes(),t.length),s:(e,t)=>x(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return x(Math.trunc(r*Math.pow(10,n-3)),t.length)}},k={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return T.y(e,t)},Y:function(e,t,n,r){const a=v(e,r),o=a>0?a:1-a;return"YY"===t?x(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):x(o,t.length)},R:function(e,t){return x(C(e),t.length)},u:function(e,t){return x(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return x(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return x(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return x(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=E(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):x(a,t.length)},I:function(e,t,n){const r=w(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):x(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,n){const r=g(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):x(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return x(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return x(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return x(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return T.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):x(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return M(r);case"XXXX":case"XX":return S(r);default:return S(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return M(r);case"xxxx":case"xx":return S(r);default:return S(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(r,":");default:return"GMT"+S(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(r,":");default:return"GMT"+S(r,":")}},t:function(e,t,n){return x(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return x(e.getTime(),t.length)}};function L(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+t+x(o,2)}function M(e,t){return e%60==0?(e>0?"-":"+")+x(Math.abs(e)/60,2):S(e,t)}function S(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+x(Math.trunc(r/60),2)+t+x(r%60,2)}const D=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},P=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},j={p:P,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return D(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;default:o=t.dateTime({width:"full"})}return o.replace("{{date}}",D(r,t)).replace("{{time}}",P(a,t))}},q=/^D+$/,W=/^Y+$/,N=["D","DD","YY","YYYY"];function O(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=m(e);return!isNaN(Number(n))}const A=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,B=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,I=/^'([^]*?)'?$/,Y=/''/g,H=/[a-zA-Z]/;function F(e,t,n){const r=l(),a=n?.locale??r.locale??d,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,c=m(e);if(!O(c))throw new RangeError("Invalid time value");let s=t.match(B).map((e=>{const t=e[0];return"p"===t||"P"===t?(0,j[t])(e,a.formatLong):e})).join("").match(A).map((e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:z(e)};if(k[t])return{isToken:!0,value:e};if(t.match(H))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}}));a.localize.preprocessor&&(s=a.localize.preprocessor(c,s));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return s.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(e){return W.test(e)}(o)||!n?.useAdditionalDayOfYearTokens&&function(e){return q.test(e)}(o))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(console.warn(r),N.includes(e))throw new RangeError(r)}(o,t,String(e)),(0,k[o[0]])(c,o,a.localize,u)})).join("")}function z(e){const t=e.match(I);return t?t[1].replace(Y,"'"):e}let J=[];class ${constructor(e,t,n,r=void 0,a=void 0,o=void 0,i=[],d=void 0,c=void 0){this.type=e,this.title=t,this.description=n,this.dueDate=r,this.dueTime=a,this.priority=o,this.listItems=i,this.color=d,this.textColor=c}pushToList(){return J.push(this),J}}const G=()=>{let e=document.getElementById("type").value,t=document.getElementById("title"),n=t?t.value:void 0,r=document.getElementById("description"),a=r?r.value:void 0,o=document.getElementById("dueDate"),i=o?o.value:void 0,d=document.getElementById("dueTime"),c=d?d.value:void 0,l=document.getElementById("priority"),s=l?l.value:void 0,u=[],m=document.getElementById("listItemsContainer");if(m){let e=m.getElementsByTagName("input");for(let t of e)u.push(t.value)}let h=document.getElementById("color"),p=h?h.value:void 0,f=document.getElementById("textColor"),g=f?f.value:void 0;new $(e,n,a,i,c,s,u,p,g).pushToList(),ae(J);let y=JSON.stringify(J);localStorage.setItem("todoList",y)},Q=document.querySelector(".modalBody"),X=document.createElement("form");function R(e,t){var n=document.createElement("label");return n.textContent=e+":",n.setAttribute("for",t),n}function U(e,t){var n=document.createElement("input");return n.type=e,n.id=t,n.name=t,n.setAttribute("maxlength","20"),"dueDate"===t||"dueTime"===t?n.required=!1:"color"===t?n.value="#C9C9C9":n.required=!0,n}function V(e){var t=document.createElement("textarea");return t.id=e,t.name=e,t.rows="4",t.cols="50",t}function K(e,t){var n=document.createElement("select");n.id=e,n.name=e,n.required=!0;for(var r=0;r<t.length;r++){var a=document.createElement("option");a.value=t[r],a.text=t[r],n.appendChild(a)}return n}X.id="todoForm",X.appendChild(R("Type","type")),X.appendChild(K("type",["","Task","Note","List","Project"])),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),Q.appendChild(X),document.getElementById("type").addEventListener("change",(()=>{let e=document.getElementById("type");if("Note"===e.value)ee(),X.appendChild(R("Title","title")),X.appendChild(U("text","title")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Description","description")),X.appendChild(V("description")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Card Color","color")),X.appendChild(U("color","color")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Text Color","textColor")),X.appendChild(U("color","textColor")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),X.appendChild(n),(r=document.createElement("input")).classList.add("modalBtn"),r.type="submit",r.value="Add to Project",r.setAttribute("data-type","project-form-build-button"),X.appendChild(r),r.addEventListener("click",te),r.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}));else if("Task"===e.value)ee(),X.appendChild(R("Title","title")),X.appendChild(U("text","title")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Description","description")),X.appendChild(V("description")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Card Color","color")),X.appendChild(U("color","color")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Text Color","textColor")),X.appendChild(U("color","textColor")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Due Date","dueDate")),X.appendChild(U("date","dueDate")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Due Time","dueTime")),X.appendChild(U("time","dueTime")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Priority","priority")),X.appendChild(K("priority",["Low","Medium","High"])),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),X.appendChild(n),(r=document.createElement("input")).classList.add("modalBtn"),r.type="submit",r.value="Add to Project",r.setAttribute("data-type","project-form-build-button"),X.appendChild(r),r.addEventListener("click",te),r.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}));else if("List"===e.value){ee(),X.appendChild(R("Title","title")),X.appendChild(U("text","title")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Card Color","color")),X.appendChild(U("color","color")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Text Color","textColor")),X.appendChild(U("color","textColor")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("List Items","listItems")),X.appendChild(document.createElement("br"));var t=document.createElement("div");t.id="listItemsContainer";let i=0;function d(){if(i<13){var e=U("text","li");t.appendChild(e),t.appendChild(document.createElement("br")),i+=1}}d(),X.appendChild(t),X.appendChild(document.createElement("br"));var n,r,a=document.createElement("button");a.textContent="Add List Item",a.addEventListener("click",d),X.appendChild(a),(n=document.createElement("input")).classList.add("modalBtn"),n.type="submit",n.value="Create Todo",n.setAttribute("data-type","submit-button"),X.appendChild(n),(r=document.createElement("input")).classList.add("modalBtn"),r.type="submit",r.value="Add to Project",r.setAttribute("data-type","project-form-build-button"),X.appendChild(r),r.addEventListener("click",te),r.addEventListener("click",(e=>e.preventDefault())),n.addEventListener("click",(e=>{e.preventDefault(),G()}))}else if("Project"===e.value){ee(),X.appendChild(R("Project Title","projectTitle")),X.appendChild(U("text","projectTitle")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br"));var o=document.createElement("input");o.classList.add("modalBtn"),o.type="submit",o.value="Create Project",o.setAttribute("data-type","project-create-button"),X.appendChild(o),o.addEventListener("click",(e=>{e.preventDefault(),re();let t=X.querySelector("span");t&&t.remove(),X.appendChild(document.createElement("span")).innerText="Project Created!"}))}}));const Z=()=>{null!=modal&&(modal.classList.remove("active"),overlay.classList.remove("active"))},_=()=>{X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br")),X.appendChild(R("Project Title","projectTitle")),X.appendChild(U("text","projectTitle")),X.appendChild(document.createElement("br")),X.appendChild(document.createElement("br"));var e=document.createElement("input");e.type="submit",e.value="Create Todo and add to Project",e.setAttribute("data-type","project-create-button"),X.appendChild(e),e.addEventListener("click",(e=>{e.preventDefault();let t=X.querySelector("span");t&&t.remove(),re()}))},ee=()=>{for(var e=X.children;4<e.length;)X.removeChild(e[4])};function te(e){e.preventDefault(),_(),document.querySelector('[data-type="project-form-build-button"]').removeEventListener("click",te)}let ne=[];function re(){let e=document.getElementById("projectTitle").value,t=!1;for(const n of ne)if(n[0]===e){t=!0;break}if(t){G(),ne.find((t=>t[0]===e)).push(J[J.length-1]);let t=X.querySelector("span");t&&t.remove(),X.appendChild(document.createElement("span")).innerText=`${document.getElementById("projectTitle").value} already exists! Todo added to existing project.`;let n=JSON.stringify(ne);localStorage.setItem("projectList",n)}else{G();const t=[e,J[J.length-1]];ne.push(t);let n=X.querySelector("span");n&&n.remove(),X.appendChild(document.createElement("span")).innerText=`Todo Created and added to ${document.getElementById("projectTitle").value}!`;let r=JSON.stringify(ne);localStorage.setItem("projectList",r)}}function ae(e){const t=document.querySelector("main");for(;t.firstChild;)t.removeChild(t.lastChild);let n=document.querySelector("#scheduleCardDiv");for(;n.firstChild;)n.removeChild(n.lastChild);e.forEach(((r,a)=>{const o=e.indexOf(r);if("Task"===r.type){const e=document.createElement("div");e.classList.add("taskCard"),e.setAttribute("data-task-id",r.title),e.classList.add("card");const a=document.createElement("h3");a.innerText=r.title;const i=document.createElement("p");i.innerText=r.description;const d=document.createElement("p");""===r.dueDate?d.innerText=r.dueDate:d.innerText=`Due for ${F(new Date(`${r.dueDate}T12:00:00`),"MMMM d, yyyy")}`,d.style.marginBottom="0px";const c=document.createElement("p");""===r.dueTime?c.innerText=r.dueTime:c.innerText=`at ${r.dueTime}`,c.style.marginTop="0px";const l=document.createElement("h4");l.innerText=`Priority: ${r.priority}`,l.style.fontWeight="600",e.style.backgroundColor=r.color,e.style.color=r.textColor;const s=document.createElement("button");s.style.color=r.textColor,s.classList.add("fa-regular","fa-trash-can"),s.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(o,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),ae(J);const t=document.querySelector(`[data-schedule-id="${r.title}"]`);t&&t.remove();for(const e of ne){const t=e.indexOf(r);if(-1!==t){e.splice(t,1);let n=JSON.stringify(ne);localStorage.setItem("projectList",n);break}}}})),t.appendChild(e),e.appendChild(a),e.appendChild(i),e.appendChild(d),e.appendChild(c),e.appendChild(l),e.appendChild(document.createElement("br")),e.appendChild(s);const u=document.createElement("div");u.classList.add("card"),u.classList.add("scheduleCard"),u.setAttribute("data-schedule-id",r.title);let m=document.createElement("h4");m.innerText=r.title;let h=document.createElement("p");""===r.dueDate?d.innerText=r.dueDate:""===r.dueTime?h.innerText=F(new Date(`${r.dueDate}T12:00:00`),"MMMM d, yyyy"):h.innerText=F(new Date(`${r.dueDate}T12:00:00`),"MMMM d, yyyy")+" - "+r.dueTime,u.style.backgroundColor=r.color,u.style.color=r.textColor,u.appendChild(m),u.appendChild(h),n.appendChild(u),function(){const e=document.getElementById("scheduleCardDiv"),t=Array.from(e.getElementsByClassName("scheduleCard"));t.sort(((e,t)=>new Date(e.querySelector("p").innerText.split(" - ")[0])-new Date(t.querySelector("p").innerText.split(" - ")[0]))),t.forEach((t=>{e.appendChild(t)}))}(),"Low"===r.priority?(e.style.borderLeft="6px solid #00b3b3",u.style.borderLeft="6px solid #00b3b3"):"Medium"===r.priority?(e.style.borderLeft="6px solid #ffff00",u.style.borderLeft="6px solid #ffff00"):"High"===r.priority&&(e.style.borderLeft="6px solid #ff0000",u.style.borderLeft="6px solid #ff0000")}else if("Note"===r.type){const e=document.createElement("div");e.classList.add("noteCard"),e.setAttribute("data-index",a),e.classList.add("card");const n=document.createElement("h3");n.innerText=r.title;const i=document.createElement("p");i.innerText=r.description,e.style.backgroundColor=r.color,e.style.color=r.textColor;const d=document.createElement("button");d.classList.add("fa-regular","fa-trash-can"),d.style.color=r.textColor,d.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(o,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),ae(J)}})),t.appendChild(e),e.appendChild(n),e.appendChild(i),e.appendChild(document.createElement("br")),e.appendChild(d)}else if("List"===r.type){const e=document.createElement("div");e.classList.add("listCard"),e.setAttribute("data-index",a),e.classList.add("card");const n=document.createElement("h3");n.innerText=r.title,e.style.backgroundColor=r.color,e.style.color=r.textColor;const i=document.createElement("ul");r.listItems&&r.listItems.length>0&&r.listItems.forEach((e=>{const t=document.createElement("li");t.innerText=e,i.appendChild(t)}));const d=document.createElement("button");d.classList.add("fa-regular","fa-trash-can"),d.style.color=r.textColor,d.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the todo?")){J.splice(o,1);let e=JSON.stringify(J);localStorage.setItem("todoList",e),ae(J)}})),t.appendChild(e),e.appendChild(n),e.appendChild(i),e.appendChild(document.createElement("br")),e.appendChild(d)}}))}!function(){let e=document.querySelector("#projectBtn"),t=document.querySelector("#projectDiv"),n=0;e.addEventListener("click",(()=>{if(0===n){for(;t.firstChild;)t.removeChild(t.lastChild);ne.forEach((e=>{let n=document.createElement("div");n.classList.add("projectBtnDiv");let r=document.createElement("button"),a=ne.indexOf(e);r.innerText=e[0],n.appendChild(r),t.appendChild(n),r.addEventListener("click",(()=>{ae(e)}));let o=document.createElement("button");o.classList.add("fa-regular","fa-trash-can"),n.appendChild(o),t.appendChild(document.createElement("br")),o.addEventListener("click",(()=>{if(confirm("Are you sure you want to delete the project?")){ne.splice(a,1);let e=JSON.stringify(ne);localStorage.setItem("projectList",e)}}))})),n=1}else if(n=1){for(;t.firstChild;)t.removeChild(t.lastChild);n=0}}))}();let oe=[],ie=[],de=[];const ce=document.querySelectorAll("[data-close-button]"),le=document.getElementById("overlay"),se=document.querySelectorAll('[data-type="formBtn"]');le.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((e=>{Z()}))})),se.forEach((e=>{e.addEventListener("click",(()=>{null!=modal&&(modal.classList.add("active"),overlay.classList.add("active"))}))})),ce.forEach((e=>{e.addEventListener("click",(()=>{Z()}))})),(()=>{const e=document.querySelector("[data-lists]"),t=document.querySelector("[data-notes]"),n=document.querySelector("[data-tasks]");document.querySelector("[data-all]").addEventListener("click",(()=>{ae(J)})),t.addEventListener("click",(()=>{oe.splice(0,oe.length),J.forEach((e=>{"Note"===e.type&&oe.push(e),ae(oe)}))})),n.addEventListener("click",(()=>{ie.splice(0,ie.length),J.forEach((e=>{"Task"===e.type&&ie.push(e),ae(ie)}))})),e.addEventListener("click",(()=>{de.splice(0,de.length),J.forEach((e=>{"List"===e.type&&de.push(e),ae(de)}))}))})(),document.addEventListener("DOMContentLoaded",(function(){let e=localStorage.getItem("todoList");JSON.parse(e).forEach((e=>J.push(e))),ae(J);let t=localStorage.getItem("projectList");JSON.parse(t).forEach((e=>ne.push(e)))})),document.querySelector("#deleteAll").addEventListener("click",(function(){confirm("This action will delete ALL STORAGE PERMANENTLY")&&(localStorage.clear(),location.reload())})),document.querySelector("#githubBtn").addEventListener("click",(()=>{window.open("https://github.com/ToastedGMS")}))})();