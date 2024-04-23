var re = /([а-яё]+)\s([а-яё]+)/i;
var str = "Джон Смит";
var newstr = str.replace(re, "ЭэЭ:, $1");
console.log(newstr);
