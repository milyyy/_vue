"use strict";
// Number类型
var age = 18;
var ran = 12.5;
// String类型
var myname = 'mily';
// 布尔类型
var test = true;
// 函数
function delay(time) {
    var arg = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arg[_i - 1] = arguments[_i];
    }
    var init = "\u5EF6\u8FDF\u4E86" + time + "s\u51FA\u73B0";
    for (var i = 0; i < arg.length; i++) {
        init += arg[i];
    }
    return init + '小动物';
}
var result = delay(3, '小猫', '小狗');
console.log(result);
// 箭头函数
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(2, 3));
// 定义数组并赋值
// 声明一个数值类型的数组
// 在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。
var arr = [1, 2, 3];
var arr1 = ['mily', 'xxxx'];
// 字符串的两种类型
// 这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。
var mily = 'mily';
var xxx = new String("mily");
// 日期对象
var d = new Date();
var d1 = new Date('2020-07-08 13:30:00');
console.log(d1);
// 正则
var reg1 = new RegExp('mily');
var reg2 = new RegExp('mily', 'gi'); //g是全局修饰符，i是忽略大小写，m是多行模式。
var reg3 = /mily/gi;
/**
 * class 类
 * public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
 * protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
 * private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var xiaohong = new Person('小红', 18);
