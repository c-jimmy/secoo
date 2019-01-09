// 强制转换成指定位数
function fix(num, length) {
  return ('' + num).length < length ? ((new Array(length + 1)).join('0') + num).slice(-length) : '' + num;
}
// 对象深拷贝
function deepClone(obj) {
  var _obj = JSON.stringify(obj),
    objClone = JSON.parse(_obj);
  return objClone;
}

 export {
   fix,
   deepClone
 }