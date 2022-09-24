# json 字符串嵌套问题

## 使用vue web-component开发，数据通过属性嵌套,关于引号问题的解决<br><br>

<br>

> json 转 str

```js
function j2base(obj) {
  //return btoa( encodeURIComponent(JSON.stringify(obj)) ); 
  //要求：不能有双引号，能处理层层引号问题
  //理想状态：基本可读性；体积不能太膨胀
  var json = JSON.stringify(obj);
  var magic = '\u2745';

  json = json.replace(/\"/g, magic + "00" + magic);
  json = json.replace(new RegExp(magic + "(\\d\\d)" + magic, "g"), function (word, $1) {
    var n = parseInt($1, 10);
    var s = "" + (n + 1);
    if (s.length < 2) s = "0" + s;
    return magic + s + magic;
  });
  return json;
}
```
<br>

> str 转 json 

```js
//🌟 思想是层层解析 先解析最外层的
function base2j(st) {     
  //return JSON.parse( decodeURIComponent(atob(s)) ); 
  if (!st) return null;

  var magic = '\u2745';
  st = st.replace(new RegExp(magic + "(\\d\\d)" + magic, "g"), function (word, $1) {
    var n = parseInt($1, 10);
    if (n == 1) return "\"";
    var s = "" + (n - 1);  // 🌟  -1 是精髓  只有是1才转换
    if (s.length < 2) s = "0" + s;
    return magic + s + magic;
  });
  console.log(st);
  return JSON.parse(st);
}

```
<br>

> demo 

```js
const obj1 = {
  a:111,
  b:[1,2],
  c:'单引号',
  d:"双引号"
}

const obj2 = {
  component:"内容<span msg=\"{❅01❅a❅01❅:111,❅01❅b❅01❅:[1,2],❅01❅c❅01❅:❅01❅单引号❅01❅,❅01❅d❅01❅:❅01❅双引号❅01❅}\"></span>",
  mark:'嵌套组件'
}

// json to str
const atob = j2base(obj2)
console.log('atob',atob)

//str to json
const str = "{❅01❅component❅01❅:❅01❅内容<span msg=\\❅01❅{❅02❅a❅02❅:111,❅02❅b❅02❅:[1,2],❅02❅c❅02❅:❅02❅单引号❅02❅,❅02❅d❅02❅:❅02❅双引号❅02❅}\\❅01❅></span>❅01❅,❅01❅mark❅01❅:❅01❅嵌套组件❅01❅}"
const btoa = base2j(str)
console.log(btoa)
```

## json 嵌套问题 本身是没有问题的 跟原生交互的时候碰到问题就转编码 base64、url等都可以

```js
const obj3 = {
  a3:"{\"a\":111,\"b\":[1,2],\"c\":\"单引号\",\"d\":\"双引号\"}"
}
const obj2str = JSON.stringify(obj3) //"{\"a3\":\"{\\\"a\\\":111,\\\"b\\\":[1,2],\\\"c\\\":\\\"单引号\\\",\\\"d\\\":\\\"双引号\\\"}\"}"

const str32obj = JSON.parse(obj2str) 
/* 
{
  a3: "{\"a\":111,\"b\":[1,2],\"c\":\"单引号\",\"d\":\"双引号\"}",
} 
*/

```
