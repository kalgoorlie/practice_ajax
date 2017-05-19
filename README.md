# 나라 이름으로 수도 검색하기

Node.js에서 Ajax를 이용한 데이터 통신을 연습하는 예제입니다.
[윤지수 님의 인프런 강의](https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C/)의 중간 실습 과제로 만들었습니다.

### 미션
1. express 설정
2. 필요한 npm 모듈 설치
3. input UI 만들기 (검색창)
4. 검색 결과를 받아서 dummy json 형태를 내려주기
5. 화면에 결과를 노출하기

---

# 실습과정 요약

### 1. 새 프로젝트를 만들고 express를 설치한다.

```
mkdir node && cd node
npm init
npm install express —save
```

### 2. app.js 파일을 작성한다.
```js
var express = require('express')
var app = express()
app.listen(3000, function(){
  console.log("start! express server is running on port 3000")
})
```

### 3. 참고로 node는 비동기로 동작한다.
```js
var express = require('express')
var app = express()
app.listen(3000, function(){
  console.log("this line will be at the end")
})
for(var i=0; i<20; i++){
  console.log("this is line number " + i)
}
```

### 4. 서버는 nodemon으로 실행한다.
```
npm install nodemon -g
nodemon app.js
```

### 5. GET 방식의 요청을 처리한다.
```js
app.get('/', function(req,res){
  res.send("<h1>안녕하세요</h1>")
  res.sendFile( __dirname + "/public/main.html")
})
```

### 6. Static 디렉토리를 express에 등록한다.
```js
app.use(express.static('public'))
```

### 7. form.html에 폼 양식을 만든다.
```html
<form action="/email_post"  method="post">
  email : <input type="text" name="email">
  <input type="submit">
</form>
```

### 8. bodyParser를 이용해 POST 요청을 처리한다.
```
npm install body-parser -save
```
```js
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.post('/email_post', function(req,res){
  console.log(req.body)
  res.send("welcome! " + req.body.email)
})
```

---

# Ajax 통신 추가하기

### 1. ajax 요청을 보낼 버튼을 그린다.
```html
<button class="ajaxsend">ajaxsend</button>
```

### 2. 이벤트리스너에 등록한다.
```html
<script>
  document.querySelector('.ajaxsend').addEventListener('click', function(){
    // 입력값 위치를 찾아 변수에 담고
    var inputdata = document.forms[0].elements[0].value;
    // sendAjax 함수를 만들고 URL과 data를 전달
    sendAjax('http://127.0.0.1:3000/ajax_send_email', inputdata)
  })
</script>
```

### 3. XMLHttpRequest로 데이터를 보내고 받는다.
```html
<script>
function sendAjax(url, data){
  
  // 입력값을 변수에 담고 문자열 형태로 변환
  var data = {'email' : data};
  data = JSON.stringify(data);

  // content-type을 설정하고 데이터 송신
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', "application/json");
  xhr.send(data);
  
  // 데이터 수신이 완료되면 표시
  xhr.addEventListener('load', function(){
    console.log(xhr.responseText);
  });
}
</script>
```

### 4. app.js에서 Ajax 요청을 처리한다.
```js
app.post('/ajax_send_email', function(req, res){
  console.log(req.body.email);
  var responseData = {'result' : 'ok', 'email' : req.body.email}
  res.json(responseData);
  // 서버에서는 JSON.stringify 필요없음
})
```

### 5. 데이터 수신 부분을 수정해 결과를 표시한다.
```html
<div class="result"></div>
<script>
  xhr.addEventListener('load', function(){
    // 문자열 형식으로 변환
    var result = JSON.parse(xhr.responseText);
    // 데이터가 없으면 return 반환
    if(result.result !== 'ok') return;
    // 데이터가 있으면 결과값 표시
    document.querySelector(".result").innerHTML = result.email;
  });
</script>
```

