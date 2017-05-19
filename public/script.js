

// 입력값 전송
document.querySelector('.country').addEventListener('keypress', function(e){
	
	// 엔터키 누르면 데이터 전송
	var key = e.which || e.keyCode;
    if (key === 13) {

		// 입력값 위치를 찾아 변수에 담고
		var inputvalue = document.querySelector('.country').value;
		var inputdata = {'country' : inputvalue}

		// sendAjax 함수를 만들어서 URL과 data를 전달
		sendAjax('http://localhost:3000/by_ajax', inputdata);
    }
})

// 데이터 송수신 처리
var result = null;
function sendAjax(url, data){

	// 데이터를 변수에 담고 문자열로 변환
	var data = JSON.stringify(data);

	// content-type을 설정하고 송신
	var xhr = new XMLHttpRequest();
	xhr.open('POST', url);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(data);

	// 데이터 수신
	xhr.addEventListener('load', function(){
		// 받은 결과를 문자열로 변환
		result = JSON.parse(xhr.responseText);
		if(result.status == "error") alert("검색 결과가 없습니다.")
		else changeMap(result);
	})
}

// 구글지도
var map;
var theme = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#424b5b"
            },
            {
                "weight": 2
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "weight": 0.6
            },
            {
                "color": "#545b6b"
            },
            {
                "gamma": "0"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            },
            {
                "gamma": "1"
            },
            {
                "weight": "10"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#545b6b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#424a5b"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#666c7b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2e3546"
            }
        ]
    }
]
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 35.907757, lng: 127.766922},
		zoom: 4,
		backgroundColor: "#545B6B",
		fullscreenControl: false,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: false,
		maxZoom: 6,
		styles: theme,
	});
}
function changeMap(result){
	console.log(result)
	var lati = Number(result.latitude);
	var long = Number(result.longitude);
	var country = result.country;
	var country_en = result.country_en;
	var capital = result.capital;
	var capital_en = result.capital_en;
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: lati, lng: long},
		zoom: 4,
		backgroundColor: "#545B6B",
		fullscreenControl: false,
		mapTypeControl: false,
		scrollwheel: false,
		draggable: false,
		maxZoom: 6,
		styles: theme,
	});
	var marker = new google.maps.Marker({
		position: {lat: lati, lng: long},
		map: map
	});
	var contentString = '<div id="content" class="maplayer">'+
        '<h1>'+ capital +'</h1>'+
        '<div id="bodyContent">'+
        '<p>'+ capital_en +'</p>'+
        '<p><b>'+ country +'</b>의 수도</p>'+
        '<p><a href="https://ko.wikipedia.org/wiki/'+ capital +'" target="_blank">자세히</a></p>'+
        '</div>'+
        '</div>';
    var infowindow = new google.maps.InfoWindow({
		content: contentString,
		width: 200
    });
    infowindow.open(map, marker);
}

// 반응형 웹일 때 지도 가운데 재정렬
window.addEventListener('resize', function(event){
	if(result) changeMap(result);
	else initMap()
});
