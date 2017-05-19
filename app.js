var express = require('express');
var app = express();

// 서버 실행
app.listen(3000, function(){
	console.log("express server is running on port 3000");
})

// 정적파일 등록
app.use(express.static('public'));

// URL Routing
app.get('/',function(req, res){
	res.sendFile(__dirname + "/public/index.html")
})

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// 더미 JSON Data
var rawData = [
	{country:"가나",country_en:"Ghana",capital:"아크라",capital_en:"Accra",latitude:"5.56",longitude:"-0.20"},
	{country:"가봉",country_en:"Gabon",capital:"리브르빌",capital_en:"Libreville",latitude:"0.39",longitude:"9.45"},
	{country:"가이아나",country_en:"Guyana",capital:"조지타운",capital_en:"Georgetown",latitude:"6.80",longitude:"-58.16"},
	{country:"감비아",country_en:"Gambia",capital:"반줄",capital_en:"Banjul",latitude:"13.45",longitude:"-16.58"},
	{country:"과테말라",country_en:"Guatemala",capital:"과테말라시티",capital_en:"Guatemala City",latitude:"14.64",longitude:"-90.51"},
	{country:"그레나다",country_en:"Grenada",capital:"세인트조지스",capital_en:"Saint George's",latitude:"12.06",longitude:"-61.75"},
	{country:"그리스",country_en:"Greece",capital:"아테네",capital_en:"Athens",latitude:"37.98",longitude:"23.72"},
	{country:"기니",country_en:"Guinea",capital:"코나크리",capital_en:"Conakry",latitude:"9.54",longitude:"-13.68"},
	{country:"기니비사우",country_en:"Guinea-Bissau",capital:"비사우",capital_en:"Bissau",latitude:"11.86",longitude:"-15.60"},
	{country:"나미비아",country_en:"Namibia",capital:"빈트후크",capital_en:"Windhoek",latitude:"-22.56",longitude:"17.08"},
	{country:"나우루",country_en:"Nauru",capital:"야렌",capital_en:"Yaren",latitude:"-0.54",longitude:"166.93"},
	{country:"나이지리아",country_en:"Nigeria",capital:"아부자",capital_en:"Abuja",latitude:"9.07",longitude:"7.48"},
	{country:"남아프리카공화국",country_en:"South Africa",capital:"프리토리아",capital_en:"Pretoria",latitude:"-25.74",longitude:"28.19"},
	{country:"네덜란드",country_en:"Netherlands",capital:"암스테르담",capital_en:"Amsterdam",latitude:"52.37",longitude:"4.89"},
	{country:"네팔",country_en:"Nepal",capital:"카트만두",capital_en:"Kathmandu",latitude:"27.70",longitude:"85.32"},
	{country:"노르웨이",country_en:"Norway",capital:"오슬로",capital_en:"Oslo",latitude:"59.91",longitude:"10.75"},
	{country:"뉴질랜드",country_en:"New Zealand",capital:"웰링턴",capital_en:"Wellington",latitude:"-41.29",longitude:"174.78"},
	{country:"니제르",country_en:"Niger",capital:"니아메",capital_en:"Niamey",latitude:"13.51",longitude:"2.11"},
	{country:"니카라과",country_en:"Nicaragua",capital:"마나과",capital_en:"Managua",latitude:"12.13",longitude:"-86.25"},
	{country:"대한민국",country_en:"South Korea",capital:"서울",capital_en:"Seoul",latitude:"37.57",longitude:"126.98"},
	{country:"덴마크",country_en:"Denmark",capital:"코펜하겐",capital_en:"Copenhagen",latitude:"55.68",longitude:"12.57"},
	{country:"도미니카공화국",country_en:"Dominican Republic",capital:"산토도밍고",capital_en:"Santo Domingo",latitude:"18.50",longitude:"-69.99"},
	{country:"도미니카연방",country_en:"Dominica",capital:"로조",capital_en:"Roseau",latitude:"15.30",longitude:"-61.39"},
	{country:"독일",country_en:"Germany",capital:"베를린",capital_en:"Berlin",latitude:"52.52",longitude:"13.41"},
	{country:"동티모르",country_en:"East Timor",capital:"딜리",capital_en:"Dili",latitude:"-8.56",longitude:"125.57"},
	{country:"라오스",country_en:"Laos",capital:"비엔티안",capital_en:"Vientiane",latitude:"17.97",longitude:"102.60"},
	{country:"라이베리아",country_en:"Liberia",capital:"몬로비아",capital_en:"Monrovia",latitude:"6.30",longitude:"-10.80"},
	{country:"라트비아",country_en:"Latvia",capital:"리가",capital_en:"Riga",latitude:"56.95",longitude:"24.11"},
	{country:"러시아",country_en:"Russia",capital:"모스크바",capital_en:"Moscow",latitude:"55.75",longitude:"37.62"},
	{country:"레바논",country_en:"Lebanon",capital:"베이루트",capital_en:"Beirut",latitude:"33.89",longitude:"35.49"},
	{country:"레소토",country_en:"Lesotho",capital:"마세루",capital_en:"Maseru",latitude:"-29.32",longitude:"27.48"},
	{country:"루마니아",country_en:"Romania",capital:"부쿠레슈티",capital_en:"Bucharest",latitude:"44.43",longitude:"26.11"},
	{country:"룩셈부르크",country_en:"Luxembourg",capital:"룩셈부르크시티",capital_en:"Luxembourg",latitude:"49.61",longitude:"6.13"},
	{country:"르완다",country_en:"Rwanda",capital:"키갈리",capital_en:"Kigali",latitude:"-1.95",longitude:"30.06"},
	{country:"리비아",country_en:"Libya",capital:"트리폴리",capital_en:"Tripoli",latitude:"32.88",longitude:"13.19"},
	{country:"리투아니아",country_en:"Lithuania",capital:"빌뉴스",capital_en:"Vilnius",latitude:"54.69",longitude:"25.28"},
	{country:"리히텐슈타인",country_en:"Liechtenstein",capital:"파두츠",capital_en:"Vaduz",latitude:"47.14",longitude:"9.52"},
	{country:"마다가스카르",country_en:"Madagascar",capital:"안타나나리보",capital_en:"Antananarivo",latitude:"-18.91",longitude:"47.54"},
	{country:"마샬",country_en:"Marshall Islands",capital:"마주로",capital_en:"Majuro",latitude:"7.09",longitude:"171.38"},
	{country:"마케도니아",country_en:"Macedonia",capital:"스코페",capital_en:"Skopje",latitude:"42.00",longitude:"21.43"},
	{country:"말라위",country_en:"Malawi",capital:"릴롱궤",capital_en:"Lilongwe",latitude:"-13.97",longitude:"33.79"},
	{country:"말레이시아",country_en:"Malaysia",capital:"쿠알라룸푸르",capital_en:"Kuala Lumpur",latitude:"3.14",longitude:"101.69"},
	{country:"말리",country_en:"Mali",capital:"바마코",capital_en:"Bamako",latitude:"12.65",longitude:"-8.00"},
	{country:"멕시코",country_en:"Mexico",capital:"멕시코시티",capital_en:"Mexico City",latitude:"19.43",longitude:"-99.13"},
	{country:"모나코",country_en:"Monaco",capital:"모나코",capital_en:"Monaco",latitude:"43.73",longitude:"7.42"},
	{country:"모로코",country_en:"Morocco",capital:"라바트",capital_en:"Rabat",latitude:"34.01",longitude:"-6.83"},
	{country:"모리셔스",country_en:"Mauritius",capital:"포트루이스",capital_en:"Port Louis",latitude:"-20.16",longitude:"57.50"},
	{country:"모리타니",country_en:"Mauritania",capital:"누악쇼트",capital_en:"Nouakchott",latitude:"18.09",longitude:"-15.98"},
	{country:"모잠비크",country_en:"Mozambique",capital:"마푸투",capital_en:"Maputo",latitude:"-25.97",longitude:"32.58"},
	{country:"몬테네그로",country_en:"Montenegro",capital:"포드고리차",capital_en:"Podgorica",latitude:"42.44",longitude:"19.26"},
	{country:"몰도바",country_en:"Moldova",capital:"키시네프",capital_en:"Chisinau",latitude:"47.01",longitude:"28.86"},
	{country:"몰디브",country_en:"Maldives",capital:"말레",capital_en:"Male",latitude:"4.17",longitude:"73.51"},
	{country:"몰타",country_en:"Malta",capital:"발레타",capital_en:"Valletta",latitude:"35.90",longitude:"14.51"},
	{country:"몽골",country_en:"Mongolia",capital:"울란바토르",capital_en:"Ulan Bator",latitude:"47.91",longitude:"106.88"},
	{country:"미국",country_en:"United States",capital:"워싱턴디씨",capital_en:"Washington D.C.",latitude:"38.90",longitude:"-77.04"},
	{country:"미얀마",country_en:"Myanmar",capital:"네피도",capital_en:"Nay Pyi Taw",latitude:"19.75",longitude:"96.13"},
	{country:"미크로네시아",country_en:"Micronesia",capital:"팔리키르",capital_en:"Palikir",latitude:"6.92",longitude:"158.16"},
	{country:"바누아투",country_en:"Vanuatu",capital:"포트빌라",capital_en:"Port Vila",latitude:"-17.73",longitude:"168.32"},
	{country:"바레인",country_en:"Bahrain",capital:"마나마",capital_en:"Manama",latitude:"26.22",longitude:"50.58"},
	{country:"바베이도스",country_en:"Barbados",capital:"브리지타운",capital_en:"Bridgetown",latitude:"13.10",longitude:"-59.62"},
	{country:"바티칸시국",country_en:"Vatican City",capital:"바티칸시티",capital_en:"Vatican City",latitude:"41.90",longitude:"12.45"},
	{country:"바하마",country_en:"Bahamas",capital:"나소",capital_en:"Nassau",latitude:"25.06",longitude:"-77.34"},
	{country:"방글라데시",country_en:"Bangladesh",capital:"다카",capital_en:"Dhaka",latitude:"23.71",longitude:"90.41"},
	{country:"베냉",country_en:"Benin",capital:"포르토노보",capital_en:"Porto-Novo",latitude:"6.50",longitude:"2.60"},
	{country:"베네수엘라",country_en:"Venezuela",capital:"카라카스",capital_en:"Caracas",latitude:"10.49",longitude:"-66.88"},
	{country:"베트남",country_en:"Vietnam",capital:"하노이",capital_en:"Hanoi",latitude:"21.02",longitude:"105.84"},
	{country:"벨기에",country_en:"Belgium",capital:"브뤼셀",capital_en:"Brussels",latitude:"50.85",longitude:"4.35"},
	{country:"벨라루스",country_en:"Belarus",capital:"민스크",capital_en:"Minsk",latitude:"53.90",longitude:"27.57"},
	{country:"벨리즈",country_en:"Belize",capital:"벨모판",capital_en:"Belmopan",latitude:"17.25",longitude:"-88.77"},
	{country:"보스니아헤르체고비나",country_en:"Bosnia and Herzegovina",capital:"사라예보",capital_en:"Sarajevo",latitude:"43.85",longitude:"18.36"},
	{country:"보츠와나",country_en:"Botswana",capital:"가보로네",capital_en:"Gaborone",latitude:"-24.65",longitude:"25.91"},
	{country:"볼리비아",country_en:"Bolivia",capital:"수크레",capital_en:"Sucre",latitude:"-19.03",longitude:"-65.26"},
	{country:"부룬디",country_en:"Burundi",capital:"부줌부라",capital_en:"Bujumbura",latitude:"-3.38",longitude:"29.36"},
	{country:"부르키나파소",country_en:"Burkina Faso",capital:"와가두구",capital_en:"Ouagadougou",latitude:"12.37",longitude:"-1.53"},
	{country:"부탄",country_en:"Bhutan",capital:"팀부",capital_en:"Thimphu",latitude:"27.47",longitude:"89.64"},
	{country:"북한",country_en:"North Korea",capital:"평양",capital_en:"Pyongyang",latitude:"39.03",longitude:"125.75"},
	{country:"불가리아",country_en:"Bulgaria",capital:"소피아",capital_en:"Sofia",latitude:"42.70",longitude:"23.32"},
	{country:"브라질",country_en:"Brazil",capital:"브라질리아",capital_en:"Brasilia",latitude:"-15.78",longitude:"-47.93"},
	{country:"브루나이",country_en:"Brunei",capital:"반다르스리브가완",capital_en:"Bandar Seri Begawan",latitude:"4.94",longitude:"114.95"},
	{country:"사모아",country_en:"Samoa",capital:"아피아",capital_en:"Apia",latitude:"-13.83",longitude:"-171.77"},
	{country:"사우디아라비아",country_en:"Saudi Arabia",capital:"리야드",capital_en:"Riyadh",latitude:"24.69",longitude:"46.72"},
	{country:"산마리노",country_en:"San Marino",capital:"산마리노",capital_en:"San Marino",latitude:"43.94",longitude:"12.45"},
	{country:"상투메프린시페",country_en:"Sao Tome and Principe",capital:"상투메",capital_en:"Sao Tome",latitude:"0.34",longitude:"6.73"},
	{country:"세네갈",country_en:"Senegal",capital:"다카르",capital_en:"Dakar",latitude:"14.69",longitude:"-17.44"},
	{country:"세르비아",country_en:"Serbia",capital:"베오그라드",capital_en:"Belgrade",latitude:"44.80",longitude:"20.47"},
	{country:"세이셸",country_en:"Seychelles",capital:"빅토리아",capital_en:"Victoria",latitude:"-4.62",longitude:"55.45"},
	{country:"세인트루시아",country_en:"Saint Lucia",capital:"캐스트리스",capital_en:"Castries",latitude:"14.00",longitude:"-61.01"},
	{country:"세인트빈센트그레나딘",country_en:"Saint Vincent and the Grenadines",capital:"킹스타운",capital_en:"Kingstown",latitude:"13.16",longitude:"-61.22"},
	{country:"세인트키츠네비스",country_en:"Saint Kitts and Nevis",capital:"바스테르",capital_en:"Basseterre",latitude:"17.29",longitude:"-62.73"},
	{country:"소말리아",country_en:"Somalia",capital:"모가디슈",capital_en:"Mogadishu",latitude:"2.04",longitude:"45.34"},
	{country:"솔로몬아일랜드",country_en:"Solomon Islands",capital:"호니아라",capital_en:"Honiara",latitude:"-9.43",longitude:"159.95"},
	{country:"수단",country_en:"Sudan",capital:"카르툼",capital_en:"Khartoum",latitude:"15.55",longitude:"32.53"},
	{country:"수리남",country_en:"Suriname",capital:"파라마리보",capital_en:"Paramaribo",latitude:"5.87",longitude:"-55.17"},
	{country:"스리랑카",country_en:"Sri Lanka",capital:"콜롬보",capital_en:"Colombo",latitude:"6.93",longitude:"79.85"},
	{country:"스와질란드",country_en:"Swaziland",capital:"음바바네",capital_en:"Mbabane",latitude:"-26.32",longitude:"31.13"},
	{country:"스웨덴",country_en:"Sweden",capital:"스톡홀름",capital_en:"Stockholm",latitude:"59.33",longitude:"18.06"},
	{country:"스위스",country_en:"Switzerland",capital:"베른",capital_en:"Berne",latitude:"46.95",longitude:"7.45"},
	{country:"스페인",country_en:"Spain",capital:"마드리드",capital_en:"Madrid",latitude:"40.42",longitude:"-3.70"},
	{country:"슬로바키아",country_en:"Slovakia",capital:"브라티슬라바",capital_en:"Bratislava",latitude:"48.15",longitude:"17.11"},
	{country:"슬로베니아",country_en:"Slovenia",capital:"류블랴나",capital_en:"Ljubljana",latitude:"46.05",longitude:"14.51"},
	{country:"시리아",country_en:"Syria",capital:"다마스쿠스",capital_en:"Damascus",latitude:"33.51",longitude:"36.29"},
	{country:"시에라리온",country_en:"Sierra Leone",capital:"프리타운",capital_en:"Freetown",latitude:"8.48",longitude:"-13.23"},
	{country:"싱가포르",country_en:"Singapore",capital:"싱가포르",capital_en:"Singapore",latitude:"1.29",longitude:"103.85"},
	{country:"아랍에미리트",country_en:"United Arab Emirates",capital:"아부다비",capital_en:"Abu Dhabi",latitude:"24.47",longitude:"54.37"},
	{country:"아르메니아",country_en:"Armenia",capital:"예레반",capital_en:"Yerevan",latitude:"40.18",longitude:"44.51"},
	{country:"아르헨티나",country_en:"Argentina",capital:"부에노스아이레스",capital_en:"Buenos Aires",latitude:"-34.61",longitude:"-58.38"},
	{country:"아이슬란드",country_en:"Iceland",capital:"레이캬비크",capital_en:"Reykjavik",latitude:"64.14",longitude:"-21.90"},
	{country:"아이티",country_en:"Haiti",capital:"포르토프랭스",capital_en:"Port-au-Prince",latitude:"18.54",longitude:"-72.34"},
	{country:"아일랜드",country_en:"Ireland",capital:"더블린",capital_en:"Dublin",latitude:"53.33",longitude:"-6.25"},
	{country:"아제르바이잔",country_en:"Azerbaijan",capital:"바쿠",capital_en:"Baku",latitude:"40.38",longitude:"49.89"},
	{country:"아프가니스탄",country_en:"Afghanistan",capital:"카불",capital_en:"Kabul",latitude:"34.53",longitude:"69.17"},
	{country:"안도라",country_en:"Andorra",capital:"안도라라베야",capital_en:"Andorra la Vella",latitude:"42.51",longitude:"1.52"},
	{country:"알바니아",country_en:"Albania",capital:"티라나",capital_en:"Tirana",latitude:"41.33",longitude:"19.82"},
	{country:"알제리",country_en:"Algeria",capital:"알제",capital_en:"Algiers",latitude:"36.75",longitude:"3.04"},
	{country:"앙골라",country_en:"Angola",capital:"루안다",capital_en:"Luanda",latitude:"-8.84",longitude:"13.23"},
	{country:"앤티가바부다",country_en:"Antigua and Barbuda",capital:"세인트존스",capital_en:"Saint John's",latitude:"17.12",longitude:"-61.85"},
	{country:"에디오피아",country_en:"Ethiopia",capital:"아디스아바바",capital_en:"Addis Ababa",latitude:"9.02",longitude:"38.75"},
	{country:"에리트레아",country_en:"Eritrea",capital:"아스마라",capital_en:"Asmara",latitude:"15.33",longitude:"38.93"},
	{country:"에스토니아",country_en:"Estonia",capital:"탈린",capital_en:"Tallinn",latitude:"59.44",longitude:"24.75"},
	{country:"에콰도르",country_en:"Ecuador",capital:"키토",capital_en:"Quito",latitude:"-0.23",longitude:"-78.52"},
	{country:"엘살바도르",country_en:"El Salvador",capital:"산살바도르",capital_en:"San Salvador",latitude:"13.69",longitude:"-89.19"},
	{country:"영국",country_en:"United Kingdom",capital:"런던",capital_en:"London",latitude:"51.51",longitude:"-0.13"},
	{country:"예멘",country_en:"Yemen",capital:"사나",capital_en:"Sanaa",latitude:"15.35",longitude:"44.21"},
	{country:"오만",country_en:"Oman",capital:"무스카트",capital_en:"Muscat",latitude:"23.61",longitude:"58.59"},
	{country:"오스트레일리아",country_en:"Australia",capital:"캔버라",capital_en:"Canberra",latitude:"-35.28",longitude:"149.13"},
	{country:"오스트리아",country_en:"Austria",capital:"빈",capital_en:"Vienna",latitude:"48.21",longitude:"16.37"},
	{country:"온두라스",country_en:"Honduras",capital:"테구시갈파",capital_en:"Tegucigalpa",latitude:"14.08",longitude:"-87.21"},
	{country:"요르단",country_en:"Jordan",capital:"암만",capital_en:"Amman",latitude:"31.96",longitude:"35.95"},
	{country:"우간다",country_en:"Uganda",capital:"캄팔라",capital_en:"Kampala",latitude:"0.32",longitude:"32.58"},
	{country:"우루과이",country_en:"Uruguay",capital:"몬테비데오",capital_en:"Montevideo",latitude:"-34.83",longitude:"-56.17"},
	{country:"우즈베키스탄",country_en:"Uzbekistan",capital:"탸슈켄트",capital_en:"Tashkent",latitude:"41.26",longitude:"69.22"},
	{country:"우크라이나",country_en:"Ukraine",capital:"키예프",capital_en:"Kiev",latitude:"50.45",longitude:"30.52"},
	{country:"이라크",country_en:"Iraq",capital:"바그다드",capital_en:"Baghdad",latitude:"33.34",longitude:"44.40"},
	{country:"이란",country_en:"Iran",capital:"테헤란",capital_en:"Tehran",latitude:"35.69",longitude:"51.42"},
	{country:"이스라엘",country_en:"Israel",capital:"예루살렘",capital_en:"Jerusalem",latitude:"35.23",longitude:"31.77"},
	{country:"이집트",country_en:"Egypt",capital:"카이로",capital_en:"Cairo",latitude:"30.06",longitude:"31.25"},
	{country:"이탈리아",country_en:"Italy",capital:"로마",capital_en:"Rome",latitude:"41.89",longitude:"12.48"},
	{country:"인도",country_en:"India",capital:"뉴델리",capital_en:"New Delhi",latitude:"28.64",longitude:"77.22"},
	{country:"인도네시아",country_en:"Indonesia",capital:"자카르타",capital_en:"Jakarta",latitude:"-6.21",longitude:"106.85"},
	{country:"일본",country_en:"Japan",capital:"도쿄",capital_en:"Tokyo",latitude:"35.69",longitude:"139.69"},
	{country:"자메이카",country_en:"Jamaica",capital:"킹스턴",capital_en:"Kingston",latitude:"18.00",longitude:"-76.79"},
	{country:"잠비아",country_en:"Zambia",capital:"루사카",capital_en:"Lusaka",latitude:"-15.41",longitude:"28.29"},
	{country:"적도기니",country_en:"Equatorial Guinea",capital:"말라보",capital_en:"Malabo",latitude:"3.75",longitude:"8.78"},
	{country:"조지아",country_en:"Georgia",capital:"트빌리시",capital_en:"Tbilisi",latitude:"41.69",longitude:"44.83"},
	{country:"중국",country_en:"China",capital:"베이징",capital_en:"Beijing",latitude:"39.91",longitude:"116.40"},
	{country:"중앙아프리카공화국",country_en:"Central African Republic",capital:"방기",capital_en:"Bangui",latitude:"4.36",longitude:"18.55"},
	{country:"지부티",country_en:"Djibouti",capital:"지부티",capital_en:"Djibouti",latitude:"11.59",longitude:"43.15"},
	{country:"짐바브웨",country_en:"Zimbabwe",capital:"하라레",capital_en:"Harare",latitude:"-17.83",longitude:"31.05"},
	{country:"차드",country_en:"Chad",capital:"은자메나",capital_en:"N'Djamena",latitude:"12.11",longitude:"15.04"},
	{country:"체코",country_en:"Czech Republic",capital:"프라하",capital_en:"Prague",latitude:"50.09",longitude:"14.42"},
	{country:"칠레",country_en:"Chile",capital:"산티아고",capital_en:"Santiago",latitude:"-33.46",longitude:"-70.65"},
	{country:"카메룬",country_en:"Cameroon",capital:"야운데",capital_en:"Yaounde",latitude:"3.87",longitude:"11.52"},
	{country:"카보베르데",country_en:"Cape Verde",capital:"프라이아",capital_en:"Praia",latitude:"14.93",longitude:"-23.51"},
	{country:"카자흐스탄",country_en:"Kazakhstan",capital:"아스타나",capital_en:"Astana",latitude:"51.18",longitude:"71.45"},
	{country:"카타르",country_en:"Qatar",capital:"도하",capital_en:"Doha",latitude:"25.28",longitude:"51.52"},
	{country:"캄보디아",country_en:"Cambodia",capital:"프놈펜",capital_en:"Phnom Penh",latitude:"11.56",longitude:"104.92"},
	{country:"캐나다",country_en:"Canada",capital:"오타와",capital_en:"Ottawa",latitude:"45.41",longitude:"-75.70"},
	{country:"케냐",country_en:"Kenya",capital:"나이로비",capital_en:"Nairobi",latitude:"-1.28",longitude:"36.82"},
	{country:"코모로",country_en:"Comoros",capital:"모로니",capital_en:"Moroni",latitude:"-11.70",longitude:"43.26"},
	{country:"코소보",country_en:"Kosovo",capital:"프리슈티나",capital_en:"Pristina",latitude:"42.67",longitude:"21.17"},
	{country:"코스타리카",country_en:"Costa Rica",capital:"산호세",capital_en:"San Jose",latitude:"9.93",longitude:"-84.08"},
	{country:"코트디부아르",country_en:"Cote d'Ivoire",capital:"야마수크로",capital_en:"Yamoussoukro",latitude:"6.82",longitude:"-5.28"},
	{country:"콜롬비아",country_en:"Colombia",capital:"산타페데보고타",capital_en:"Bogota",latitude:"4.61",longitude:"-74.08"},
	{country:"콩고",country_en:"Congo DR",capital:"킨샤사",capital_en:"Kinshasa",latitude:"-4.32",longitude:"15.31"},
	{country:"콩고민주공화국",country_en:"Congo",capital:"브리자빌",capital_en:"Brazzaville",latitude:"-4.27",longitude:"15.28"},
	{country:"쿠바",country_en:"Cuba",capital:"아바나",capital_en:"Havana",latitude:"23.13",longitude:"-82.38"},
	{country:"쿠웨이트",country_en:"Kuwait",capital:"쿠웨이트시티",capital_en:"Kuwait City",latitude:"29.37",longitude:"47.98"},
	{country:"크로아티아",country_en:"Croatia",capital:"자그레브",capital_en:"Zagreb",latitude:"45.81",longitude:"15.98"},
	{country:"키르기스스탄",country_en:"Kyrgyzstan",capital:"비슈케크",capital_en:"Bishkek",latitude:"42.87",longitude:"74.59"},
	{country:"키리바시",country_en:"Kiribati",capital:"사우스타라와",capital_en:"South Tarawa",latitude:"1.33",longitude:"172.98"},
	{country:"키프로스",country_en:"Cyprus",capital:"니코시아",capital_en:"Nicosia",latitude:"35.17",longitude:"33.37"},
	{country:"타이",country_en:"Thailand",capital:"방콕",capital_en:"Bangkok",latitude:"13.75",longitude:"100.50"},
	{country:"타이완",country_en:"Taiwan",capital:"타이베이",capital_en:"Taipei",latitude:"25.05",longitude:"121.53"},
	{country:"타지키스탄",country_en:"Tajikistan",capital:"두샨베",capital_en:"Dushanbe",latitude:"38.54",longitude:"68.78"},
	{country:"탄자니아",country_en:"Tanzania",capital:"도도마",capital_en:"Dodoma",latitude:"-6.17",longitude:"35.74"},
	{country:"터키",country_en:"Turkey",capital:"앙카라",capital_en:"Ankara",latitude:"39.92",longitude:"32.85"},
	{country:"토고",country_en:"Togo",capital:"로메",capital_en:"Lome",latitude:"6.14",longitude:"1.21"},
	{country:"통가",country_en:"Tonga",capital:"누쿠알로파",capital_en:"Nuku'alofa",latitude:"-21.13",longitude:"-175.20"},
	{country:"투르크메니스탄",country_en:"Turkmenistan",capital:"아슈하바트",capital_en:"Ashkhabad",latitude:"37.95",longitude:"58.38"},
	{country:"투발루",country_en:"Tuvalu",capital:"푸나푸티",capital_en:"Funafuti",latitude:"-8.52",longitude:"179.19"},
	{country:"튀니지",country_en:"Tunisia",capital:"튀니스",capital_en:"Tunis",latitude:"36.82",longitude:"10.17"},
	{country:"트리니다드토바고",country_en:"Trinidad and Tobago",capital:"포트오브스페인",capital_en:"Port of Spain",latitude:"10.67",longitude:"-61.52"},
	{country:"파나마",country_en:"Panama",capital:"파나마시티",capital_en:"Panama City",latitude:"8.99",longitude:"-79.52"},
	{country:"파라과이",country_en:"Paraguay",capital:"아순시온",capital_en:"Asuncion",latitude:"-25.30",longitude:"-57.64"},
	{country:"파키스탄",country_en:"Pakistan",capital:"이슬라마바드",capital_en:"Islamabad",latitude:"33.72",longitude:"73.04"},
	{country:"파푸아뉴기니",country_en:"Papua New Guinea",capital:"포트모르즈비",capital_en:"Port Moresby",latitude:"-9.44",longitude:"147.18"},
	{country:"팔라우",country_en:"Palau",capital:"멜레케오크",capital_en:"Melekeok",latitude:"7.50",longitude:"134.62"},
	{country:"팔레스타인",country_en:"Palestine",capital:"라말라",capital_en:"Jerusalem",latitude:"35.23",longitude:"31.77"},
	{country:"페루",country_en:"Peru",capital:"리마",capital_en:"Lima",latitude:"-12.04",longitude:"-77.03"},
	{country:"포르투갈",country_en:"Portugal",capital:"리스본",capital_en:"Lisbon",latitude:"38.72",longitude:"-9.13"},
	{country:"폴란드",country_en:"Poland",capital:"바르샤바",capital_en:"Warsaw",latitude:"52.23",longitude:"21.01"},
	{country:"프랑스",country_en:"France",capital:"파리",capital_en:"Paris",latitude:"48.85",longitude:"2.35"},
	{country:"피지",country_en:"Fiji",capital:"수바",capital_en:"Suva",latitude:"-18.14",longitude:"178.44"},
	{country:"핀란드",country_en:"Finland",capital:"헬싱키",capital_en:"Helsinki",latitude:"60.17",longitude:"24.94"},
	{country:"필리핀",country_en:"Philippines",capital:"마닐라",capital_en:"Manila",latitude:"14.60",longitude:"120.98"},
	{country:"헝가리",country_en:"Hungary",capital:"부다페스트",capital_en:"Budapest",latitude:"47.50",longitude:"19.04"},
]

// 헷갈리는 이름 보정
var addData = [
	{country:"태국",country_en:"Thailand",capital:"방콕",capital_en:"Bangkok",latitude:"13.75",longitude:"100.50"},
	{country:"대만",country_en:"Taiwan",capital:"타이베이",capital_en:"Taipei",latitude:"25.05",longitude:"121.53"},
	{country:"남아공",country_en:"South Africa",capital:"프리토리아",capital_en:"Pretoria",latitude:"-25.74",longitude:"28.19"},
	{country:"한국",country_en:"South Korea",capital:"서울",capital_en:"Seoul",latitude:"37.57",longitude:"126.98"},
	{country:"호주",country_en:"Australia",capital:"캔버라",capital_en:"Canberra",latitude:"-35.28",longitude:"149.13"},
	{country:"몽고",country_en:"Mongolia",capital:"울란바토르",capital_en:"Ulan Bator",latitude:"47.91",longitude:"106.88"},
	{country:"벨로루시",country_en:"Belarus",capital:"민스크",capital_en:"Minsk",latitude:"53.90",longitude:"27.57"},
	{country:"바티칸",country_en:"Vatican City",capital:"바티칸시티",capital_en:"Vatican City",latitude:"41.90",longitude:"12.45"},
]

// 검색용 풀버전 배열 만들기
var fullData = rawData.concat(addData);

// 수도 검색
function search(value){
	var order = "undefined"
	for(var i = 0; i < fullData.length; i++){
		if(fullData[i].country == value){
			return fullData[i];
		}
	}
	return order;
}

// 나라이름 검색
app.post('/search', function(req, res){

	var error = {"type":"search", "status" : "error"}
	var success = {"type":"search", "status" : "success"}
	var responseData = ""

	var inputData = req.body.country;
	var resultData = search(inputData);

	if(resultData == "undefined") responseData = error
	else responseData = Object.assign({},success,resultData);
	res.json(responseData);

})

// 전체목록 조회
app.post('/list', function(req, res){
	var list = {}
	for(var i=0; i<rawData.length; i++){
		list[i] = rawData[i].country
	}
	var responseData = {"type":"list", "data" : list}
	res.json(responseData);
})
