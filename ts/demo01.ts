// Number类型
var age:number = 18;
var ran:number = 12.5;

// String类型
var myname:string = 'mily';

// 布尔类型
var test:boolean = true;


// 函数
function delay(time:number, ...arg:string[]) {
	let init:string =  `延迟了${time}s出现`;
	
	for(let i=0; i<arg.length; i++) {
		init += arg[i];	
	}
	return init + '小动物';
}

let result:string = delay(3, '小猫', '小狗');
console.log(result);


// 箭头函数
let add = (n1:number, n2:number):number => {
	return n1 + n2;
}
console.log(add(2, 3));

// 定义数组并赋值
// 声明一个数值类型的数组
// 在TypeScript中指定数据类型的数组只能存储同一类型的数组元素。
let arr:number[] = [1,2,3];
let arr1:Array<string> =['mily', 'xxxx'];

// 字符串的两种类型
// 这两种声明字符串的方法没有什么不同。基本类型的字符串可以直接使用引用类型的属性和方法。
let mily:string = 'mily';
let xxx:String = new String("mily");

// 日期对象
let d:Date = new Date();
let d1:Date = new Date('2020-07-08 13:30:00');
console.log(d1);

// 正则
let reg1:RegExp = new RegExp('mily');
let reg2:RegExp = new RegExp('mily', 'gi'); //g是全局修饰符，i是忽略大小写，m是多行模式。
let reg3:RegExp = /mily/gi;

/**
 * class 类
 * public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
 * protected:受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
 * private : 私有修饰符，只可以在类内使用private修饰的属性和行为。
*/

class Person {
	public name:string;
	private age: number;
	constructor(name:string, age:number) {
		this.name = name;
		this.age = age;
	}
}

let xiaohong:Person = new Person('小红', 18);