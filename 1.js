/*
检查回文字符串

如果给定的字符串是回文，返回true，反之，返回false。

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

函数参数的值可以为"racecar"，"RaceCar"和"race CAR"。
 */
function palindrome(str) {
    str = str.replace(/[^\w]|(_)/g, "");
    str = str.toUpperCase();
    for (var i = 0; i < str.length / 2; i++)
        if (str[i] !== str[str.length - 1 - i]) return false;
    return true
}

palindrome("eye")

/*
找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。
 */
function findLongestWord(str) {
    // 请把你的代码写在这里
    var arr = str.split(" ")
    let num = 0
    arr.forEach((item, index) => {
        if (item.length > num) {
            num = item.length
        }
    })

    return num
}

findLongestWord("The quick brown fox jumped over the lazy dog");

/*
句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。
 */
function titleCase(str) {
    // 请把你的代码写在这里
    var arr = str.split(" ")
    var newArr = arr.map(item => {
        //console.log(item);
        return item = item[0].toUpperCase() + item.substr(1).toLocaleLowerCase()
    })
    return str = newArr.join(" ")
}

titleCase("I'm a little tea pot");

/*
找出多个数组中的最大数

右边大数组中包含了4个小数组，分别找到每个小数组中的最大值，然后把它们串联起来，形成一个新数组。

提示：你可以用for循环来迭代数组，并通过arr[i]的方式来访问数组的每个元素。
 */
function largestOfFour(arr) {
    // 请把你的代码写在这里
    var newArr = []
    var max = 0
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i]
        for (var j = 0; j < item.length; j++) {
            if (item[j] > max) {
                max = item[j]
            }
        }
        newArr.push(max)
        max = 0
    }
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/*
检查字符串结尾

判断一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。
 */
function confirmEnding(str, target) {
    // 请把你的代码写在这里
    var length = target.length
    var num = str.length - length
    var newStr = str.substr(num, length)
    if (newStr === target) {
        return true
    }
    return false;
}

confirmEnding("Bastian", "n");

/*
重复输出字符串

（重要的事情说3遍）

重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
 */
function repeat(str, num) {
    // 请把你的代码写在这里
    var newStr = ""
    for (var i = 1; i <= num; i++) {
        newStr += str
    }
    //console.log(newStr)
    return newStr;
}

repeat("abc", 3);


/*
截断字符串

（用瑞兹来截断对面的退路）

如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。

切记，插入到字符串尾部的三个点号也会计入字符串的长度。

但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
 */
function truncate(str, num) {
    // 请把你的代码写在这里
    var length = str.length
    if (length > num) {
        if (num > 3) {
            str = str.substr(0, num - 3) + "..."
        } else {
            str = str.substr(0, num) + "..."
        }
    }
    return str;
}

truncate("Absolutely Longer", 2);

/*
猴子吃香蕉, 分割数组

（猴子吃香蕉可是掰成好几段来吃哦）

把一个数组arr按照指定的数组大小size分割成若干个数组块。

例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];

chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];
Array.push()
Array.slice()
 */
function chunk(arr, size) {
    // 请把你的代码写在这里
    var newArr = []
    for (var i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size))
    }
    return newArr;
}

chunk(["a", "b", "c", "d", "e"], 2);

/*
截断数组

返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */
function slasher(arr, howMany) {
    // 请把你的代码写在这里
    for (var i = 0; i < howMany; i++) {
        arr.shift()
    }
    return arr;
}

slasher([1, 2, 3], 2);

/*
比较字符串

（蛤蟆可以吃队友，也可以吃对手）

如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。
 */
function mutation(arr) {
    // 请把你的代码写在这里
    var flag = true;
    var str1 = arr[0].toLowerCase()
    //console.log(str1);
    var str2 = arr[1].toLowerCase()
    //console.log(str2);
    for (var i = 0; i < str2.length; i++) {
        var item = str2[i]
        console.log(item);
        if (!str1.includes(item)) {
            flag = false
        }
    }
    return flag
}

mutation(["hello", "Hello"]);

/*
过滤数组假值

（真假美猴王）

删除数组中的所有假值。

在JavaScript中，假值有false、null、0、""、undefined 和 NaN。
 */
function bouncer(arr) {
    // 请把你的代码写在这里
    var newArr = arr.filter(item => {
        return Boolean(item)
    })
    return newArr
}

bouncer([7, "ate", "", false, 9]);


/*
摧毁数组

金克斯的迫击炮！

实现一个摧毁(destroyer)函数，第一个参数是待摧毁的数组，其余的参数是待摧毁的值。
 */
function destroyer(arr) {
    // 请把你的代码写在这里
    let newArr = arguments
    for (let i = 1; i < newArr.length; i++) {
        arr.push(arr.filter(item => item !== newArr[i]))
    }
    return arr;
}

let a = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(a);


/*
高阶函数
使用箭头函数的语法来计算squaredIntegers数组里正整数的平方（分数不是整数）
 */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    // 在这行以下修改代码
    const squaredIntegers = arr.filter(item => {
        return Number.isInteger(item)
    }).map(item => Math.pow(item, 2))
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/*
给函数increment加上默认参数，使得在value没有被赋值的时候，默认给number加1
 */
const increment = (function () {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // 返回 7
console.log(increment(5)); // 返回 6


/*
修改sum函数，来让它使用rest操作符，并且它可以在有任何数量的参数时以相同的形式工作。
 */
const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6

/*
使用展开操作符将arr1中的内容都赋值到arr2中去。
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // 改变这一行
})();
console.log(arr2);

/*
使用解构语法去得到输入的str字符串的长度，并将长度赋值给len。
 */
function getLength(str) {
    "use strict";

    // 在这行以下修改代码
    const {length: len} = str; // change this
    // 在这行以上修改代码

    return len; // 你必须在这行将 length 赋值给 len

}

console.log(getLength('FreeCodeCamp'));


/*
使用解构赋值来得到forecast.tomorrow的max，并将其赋值给maxOfTomorrow。
 */
const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // 在这行以下修改代码
    const {tomorrow: {max: maxOfTomorrow}} = forecast; // 改变这一行
    // 在这行以上修改代码
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // 应该为 84.6
/*
使用数组解构来交换变量a与b的值。使a、b能分别获得对方的值。
 */
let a = 8, b = 6;
(() => {
    "use strict";
    // 在这行以下修改代码
    [a, b] = [b, a]
    // 在这行以上修改代码
})();
console.log(a); // 应该等于 6
console.log(b); // 应该等于 8
/*
使用解构赋值以及rest操作符来进行一个Array.prototype.slice相同的操作。使得arr是原数组source除开前两个元素的子数组。
 */
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    "use strict";
    // 在这行以下修改代码
    const [a, b, ...arr] = list // change this
    // 在这行以上修改代码
    return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // 应该为 [3,4,5,6,7,8,9,10]
console.log(source); // 应该为 [1,2,3,4,5,6,7,8,9,10];\

/*
对half的参数进行解构赋值，使得仅仅将max与min的值传进函数。
 */
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // 不要改变这行

    // 在这行以下修改代码
    return function half({max, min}) {
        // 请在函数参数中使用解构赋值
        return (max + min) / 2.0;
    };
    // 在这行以上修改代码

})();
console.log(stats); // 应该为 object
console.log(half(stats)); // 应该为 28.015

/*
使用模板字符串的反引号的语法来展示result对象的failure数组内的每个条目。每个条目应该括在带有text-warning类属性的li标签中，并赋值给resultDisplayArray
 */
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // 在这行以下修改代码
    const resultDisplayArray = arr.map(item => {
        return `<li class="text-warning">${item}</li>`
    });
    // 在这行以上修改代码
    console.log(resultDisplayArray);
    return resultDisplayArray;
}

/**
 * makeList(result.failure) 应该返回：
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>,
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);


/*
请使用简单属性对象的语法来创建并返回一个Person对象
 */
const createPerson = (name, age, gender) => {
    "use strict";
    // 在这行以下修改代码
    return {
        name,
        age,
        gender
    };
    // 在这行以上修改代码
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // 返回正确的对象


/*

使用以上这种简短的语法，重构在bicycle对象中的setGear函数
 */
// 在这行以下修改代码
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// 在这行以上修改代码
bicycle.setGear(3);
console.log(bicycle.gear);

/*

使用class关键字，并写出正确的构造函数，来创建Vegetable这个类：

Vegetable这个类可以创建 vegetable 对象，这个对象拥有一个在构造函数中赋值的name属性
 */
function makeClass() {
    "use strict";

    /* 在这行下面改写代码 */
    class Vegetable {
        constructor(name) {
            this.name = name
        }
    }

    /* 在这行上面改写代码 */
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => 应该显示 'carrot'


/**
 * 使用class关键字来创建Thermostat类，它的构造函数应该可以接收华氏温度作为参数。
 在类中创建 getter和setter，将温度转换成摄氏温度。
 温度转换的公式是C = 5/9 * (F - 32)以及F = C * 9.0 / 5 + 32，F 代表华氏温度，C 代表摄氏温度。
 请注意
 当你实现这个作业的时候，你应当在类中使用一个温度标准，无论是华氏温度还是摄氏温度。
 是时候展现 getter 和 setter 的威力了——无论你的 API 内部使用的是哪种温度标准，用户都能得到正确的结果。
 或者说，你从用户需求中抽象出了实现细节。
 */
function makeClass() {
    "use strict";

    /* 请把你的代码写在这条注释以下 */
    class Thermostat {
        constructor(farenheit) {
            this.farenheit = farenheit
        }

        get temperature() {
            return 5 / 9 * (this.farenheit - 32)
        }

        set temperature(celsius) {
            this.farenheit = celsius * 9.0 / 5 + 32
        }
    }

    /* 请把你的代码写在这条注释以上 */
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // 使用华氏温度来初始化
let temp = thermos.temperature; // 摄氏温度24.44度
thermos.temperature = 26;
temp = thermos.temperature; // 摄氏温度26度

/**
 * 添加正确的import语句，允许当前文件使用capitalizeString函数。这个函数是在与当前文件同一目录下的"string_functions"文件中声明的。
 */
"use strict";
import {capitalizeString} from "string_functions";

capitalizeString("hello!");


//prop="company_status"


/**
 * 如果一个字符串（第一个参数）的长度大于给出的值（第二个参数），则截断它并在其后加上 ... 。返回被截断的字符串
 */
function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        str = str.substr(0, num) + "..."
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


/**
 * 请写一个函数来检查一个数组（第一个参数）中的元素，并返回数组中第一个通过校验测试（第二个参数，一个接受一个参数并返回一个布尔值的函数）的元素。如果没有元素通过测试，则返回 undefined。
 */
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i]
        if (func(num)) {
            return num
        }
    }
    return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

/**
 * 检查一个值是否是原始的布尔值（boolean）类型。返回 true 或者 false。
 */
function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    let boo = null
    if (typeof bool === "boolean") {
        boo = true
    } else {
        boo = false
    }
    return boo;
}

booWho(null);


/**
 * 将给出的字符串中所有单词的第一个字母变成大写，并返回得到的字符串。请确保其余的字母是小写的。

 出于练习的目的，“ the ”“ of ”等虚词的首字母也要大写。
 */
function titleCase(str) {
    let arr = str.split(" ")
    let a = []
    for (var i = 0; i < arr.length; i++) {
        a.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase())
    }
    return a.join(" ");
}

titleCase("I'm a little tea pot");

/**
 * 请利用数组的 slice 和 splice 方法，将第一个数组中的所有元素依次复制到第二个数组中。
 请从第二个数组中索引值为 n 的地方开始插入。
 返回插入元素后的数组。输入的两个数组在函数执行前后要保持不变。
 */
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let ary1 = arr1.slice(0)
    let ary2 = arr2.slice(0)
    for (let i = 0; i < ary1.length; i++) {
        ary2.splice(n + i, 0, ary1[i])
        console.log(ary2)
    }
    return ary2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

/**
 * 从一个数组中移除所有假值（falsy values）。
 JavaScript 中的假值有 false、null、0、""、undefined 和 NaN。
 提示：请尝试将每一个值转换为一个布尔值（boolean）
 */
function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            arr.splice(i, 1)
            i--
        }
    }
    return arr;
}

bouncer([7, "ate", "", false, 9]);

/**
 * 返回数组（第一个参数）被排序后，将一个值（第二个参数）插入到该数组中而使数组保持有序的最小的索引。返回的值应该是一个数字。
 例如，getIndexToIns([1,2,3,4], 1.5) 应该返回 1 因为 1.5 大于 1 （索引为 0），但小于 2（索引为 1）。
 同样地，getIndexToIns([20,3,5], 19) 应该返回 2 因为数组被排序后会变成 [3,5,20]，而 19 小于 20（索引为 2）且大于 5（索引为 1）。
 */
function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    let index = 0
    arr.push(num)
    arr.sort((a, b) => {
        return a - b
    })
    index = arr.findIndex((item) => {
        return item === num
    })
    return index;
}

getIndexToIns([40, 60], 50);

/**
 * 输入参数是一个有两个字符串元素的数组。如果第一个字符串中包含了第二个字符串中的所有字母，则返回 true。
 例如，["hello", "Hello"] 应该返回 true 因为第一个字符串中包含了第二个字符串中出现的所有字母（忽略大小写）。
 而 ["hello", "hey"] 应该返回 false 因为第一个字符串 "hello" 没有包含字母 "y"。
 最后，["Alien", "line"], 应该返回 true，因为 "line" 中的所有字母都被包含在 "Alien" 中。
 */
function mutation(arr) {
    let item = arr[0].toLowerCase()
    let item1 = arr[1].toLowerCase()
    for (let i = 0; i < item1.length; i++) {
        if (item.indexOf(item1[i]) < 0) {
            return false
        }
    }
    return true
}

mutation(["hello", "hey"]);


/**
 * 请写一个函数，将一个数组（第一个参数）分割成一组长度为 size（第二个参数）的数组，然后在一个二维数组中返回这些结果
 */

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let ary = []
    for (let i = 0; i < arr.length; i += size) {
        ary.push(arr.slice(i, i + size))
    }
    return ary;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);


/**
 * 创建一个dog 对象，并给这个对象添加两个属性：name和numLegs，同时把这两个属性的值分别设为字符串和数字
 */
let dog = {
    name: "xiaohuang",
    numLegs: 4
};

/**
 * 请在控制台里面输出dog对象中两个属性对应的值
 */
let dog = {
    name: "Spot",
    numLegs: 4
};
// 请把你的代码写在这条注释以下
console.log(dog.name)
console.log(dog.numLegs)

/**
 * 给dog 对象设置一个名为sayLegs的方法，并让它返回 "This dog has 4 legs." 这句话
 */
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + dog.numLegs + " legs."
    }
};

dog.sayLegs();

/**
 * 修改dog.sayLegs方法以将所有直接对dog的引用删除。可以参考上面的例子
 */

let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
        return "This dog has " + this.numLegs + " legs.";
    }
};

dog.sayLegs();

/**
 * 创建一个构造函数：Dog。给其添加name，color和numLegs属性并分别给它们设置为：字符串，字符串和数字
 */
function Dog() {
    this.name = "sss";
    this.color = "red";
    this.numLegs = 4;
}

let hound = new Dog()

/**
 * 创建另一个Dog构造函数。这一次，给它设置两个参数：name和color，同时给numLegs赋值为 4。然后创建一个新Dog实例保存为变量名：terrier，再将两个字符串通过参数的形式传入name和color属性
 */
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog("jjj", "sss")


/**
 * 给House构造函数创建一个新实例，取名为myHouse并且传递一个数字给bedrooms参数。然后使用instanceof操作符验证这个对象是否为House的实例。
 */

/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// 请把你的代码写在这条注释以下
let myHouse = new House(6)

myHouse instanceof House

/**
 * 将canary对象里面的自身属性添加到ownProps数组里面
 */
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// 请把你的代码写在这条注释以下
for (let key in canary) {
    if (canary.hasOwnProperty(key)) {
        ownProps.push(key)
    }
}

/**
 * 给Dog的原型添加一个numLegs属性
 */
function Dog(name) {
    this.name = name;
}

// 请把你的代码写在这条注释以下
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 2

/**
 * 将beagle的所有属性都添加到ownProps数组里面去。将Dog的所有原型属性添加到prototypeProps数组中
 */
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// 请把你的代码写在这条注释以下
for (let key in beagle) {
    if (beagle.hasOwnProperty(key)) {
        ownProps.push(key)
    } else {
        prototypeProps.push(key)
    }
}

/**
 * 写一个joinDogFraternity函数，传入一个candidate参数并使用constructor属性来判断传入的 candidate 是不是Dog创建的对象实例，如果是，就返回true，否则返回false
 */
function Dog(name) {
    this.name = name;
}

// 请把你的代码写在这条注释以下
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true
    }
    return false
}

/**
 * 通过给prototype设置为新对象的方法，在Dog构造函数的原型上添加一个属性numLegs以及两个方法：eat()和describe()。
 */
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // 请把你的代码写在这条注释以下
    numLegs:3,
    eat(){
        console.log(1)
    },
    describe(){
        console.log(2)
    }
};

/**
 * 给Dog 的原型对象定义一个constructor属性
 */
function Dog(name) {
    this.name = name;
}

// 请只修改这条注释以下的代码
Dog.prototype = {
    constructor:Dog,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
};

/**
 * 使用isPrototypeOf方法验证beagle是否继承了Dog构造函数的原型
 */
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// 请把你的代码写在这条注释以下
Dog.prototype.isPrototypeOf(beagle)

/**
 * 修改以下代码使其展示出正确的原型链
 */
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// 修改以下代码使其结果返回 true
Object.prototype.isPrototypeOf(Dog.prototype);


/**
 * Cat和Bear重复定义了eat方法。本着DRY的原则，通过将eat方法移动到Animal 超类中来重写你的代码
 */
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Animal,

};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Animal,
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

/**
 * 使用Object.create方法给Animal创建两个实例：duck和beagle
 */
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

// 请把你的代码写在这条注释以下

let duck=Object.create(Animal.prototype); // 修改这一行代码
let beagle=Object.create(Animal.prototype); // 修改这一行代码

duck.eat(); // 应该输出 "nom nom nom"
beagle.eat(); // 应该输出 "nom nom nom"

/**
 * 修改你的代码，实现一个继承自Animal的Dog构造函数
 */
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

// 请把你的代码写在这条注释以下
Dog.prototype=new Animal()

let beagle = new Dog();
beagle.eat();  // 应该输出 "nom nom nom"

/**
 * 修改你的代码，使得duck.constructor和beagle.constructor返回各自的构造函数
 */
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// 请把你的代码写在这条注释以下
Bird.prototype.constructor=Bird
Dog.prototype.constructor=Dog


let duck = new Bird();
let beagle = new Dog();

/**
 * 添加必要的代码，使得Dog对象继承Animal构造函数，并且把Dog 原型上的 constructor 属性设置为 Dog。然后给Dog对象添加一个bark()方法，这样的话，beagle将同时拥有eat()和bark()这两个方法。bark()方法中应该输出 "Woof!" 到控制台。
 */
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() {

}

// 请把你的代码写在这条注释以下
Dog.prototype=Object.create(Animal.prototype)
Dog.prototype.constructor=Dog
Dog.prototype.bark=function(){
    console.log("woof!");
}




// 请把你的代码写在这条注释以下

let beagle = new Dog();

beagle.eat(); // 应该输出 "nom nom nom"
beagle.bark(); // 应该输出 "Woof!"

/**
 * 重写Penguin的fly()方法，使其返回 "Alas, this is a flightless bird."
 */
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// 请把你的代码写在这条注释以下
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };


// 请把你的代码写在这条注释以下

let penguin = new Penguin();
console.log(penguin.fly());

/**
 * 正如你所见，行为是可以通过继承来共享的。然而，在有些情况下，继承不是最好的解决方案。继承不适用于不相关的对象，比如Bird和Airplane。虽然它们都可以飞行，但是Bird并不是一种Airplane，反之亦然。

 对于不相关的对象，更好的方法是使用mixins。mixin允许其他对象使用函数集合。

 let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
 flyMixin能接受任何对象，并为其提供fly方法。

 let bird = {
  name: "Donald",
  numLegs: 2
};

 let plane = {
  model: "777",
  numPassengers: 524
};

 flyMixin(bird);
 flyMixin(plane);
 这里的flyMixin接收了bird和plane对象，然后将fly方法分配给了每一个对象。现在bird和plane都可以飞行了：

 bird.fly(); // 输出 "Flying, wooosh!"
 plane.fly(); // 输出 "Flying, wooosh!"
 注意观察mixin是如何允许相同的fly方法被不相关的对象bird和plane重用的。
 * 创建一个名为glideMixin的mixin，并定义一个glide方法。然后使用glideMixin来给bird和boat赋予滑行的能力
 */
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// 请把你的代码写在这条注释以下
const glideMixin=function(obj){
    obj.glide=function(){
        console.log("Flying, wooosh!");
    }
}
glideMixin(bird)
glideMixin(boat)

/**
 * 更改在Bird函数中声明的weight方法，使其成为私有变量。然后，创建一个返回weight值的getWeight方法
 */
function Bird() {
    let weight = 15;
    this.getWeight=function(){
        return weight
    }
}

/**
 * 重写函数makeNest，并删除它的调用，取而代之是一个匿名的自执行函数表达式（IIFE）
 */
(function () {
    console.log("A cozy nest is ready");
})()

/**
 * 创建一个名为funModule的模块，将这两个mixins：isCuteMixin和singMixin包装起来。funModule应该返回一个对象
 */
let isCuteMixin = function(obj) {
    obj.isCute = function() {
        return true;
    };
};
let singMixin = function(obj) {
    obj.sing = function() {
        console.log("Singing to an awesome tune");
    };
};

let funModule = (function() {
    return {
        isCuteMixin: function(obj) {
            obj.isCute = function() {
                return true;
            };
        },
        singMixin: function(obj) {
            obj.sing = function() {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();

/**
 * 在代码编辑器中，已经为你定义好了prepareTea和getTea函数。调用getTea函数为团队准备 40 杯茶，并将它们存储在tea4TeamFCC变量里
 */
/**
 * 备茶过程
 * @return {string} 一杯茶
 **/
const prepareTea = () => 'greenTea';

/**
 * 获得一定数量的茶
 * @param {number} numOfCups 所需茶的数量
 * @return {Array<string>} 返回给定量的茶
 **/
const getTea = (numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// 请在本行以下添加你的代码

const tea4TeamFCC = getTea(40); // :(

// 请在本行以上添加你的代码

console.log(tea4TeamFCC);

/**
 * FCC 团队需求有变更，现在想要两种茶：绿茶（green tea）和红茶（black tea）。事实证明，用户需求变更是很常见的。
 基于以上信息，我们需要重构上一节挑战中的getTea函数来处理多种茶的请求。我们可以修改getTea接受一个函数作为参数，使它能够修改茶的类型。这让getTea更灵活，也使需求变更时为程序员提供更多控制权。
 首先，我们将介绍一些术语：
 Callbacks是被传递到另一个函数中调用的函数。你应该已经在其他函数中看过这个写法，例如在filter中，回调函数告诉 JavaScript 以什么规则过滤数组。
 函数就像其他正常值一样，可以赋值给变量、传递给另一个函数，或从其它函数返回，这种函数叫做first class函数。在 JavaScript 中，所有函数都是first class函数。
 将函数为参数或返回值的函数叫做higher order函数。
 当函数传递给另一个函数或从另一个函数返回时，那些传入或返回的函数可以叫做lambda。
 准备 27 杯绿茶和 13 杯红茶，分别存入tea4GreenTeamFCC和tea4BlackTeamFCC变量。请注意，getTea函数已经变了，现在它接收一个函数作为第一个参数。
 注意：数据（茶的数量）作为最后一个参数。我们将在后面的课程中对此进行更多讨论
 */

/**
 * 绿茶准备过程
 * @return {string} 一杯绿茶
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * 备红茶准备过程
 * @return {string} 一杯红茶
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * 获得一定数量的茶
 * @param {function():string} prepareTea 茶的类型
 * @param {number} numOfCups 需要茶的数量
 * @return {Array<string>} 给定的茶
 **/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// 请在本行以下添加你的代码

const tea4GreenTeamFCC = getTea(prepareGreenTea,27); // :(
const tea4BlackTeamFCC = getTea(prepareBlackTea,13); // :(

// 请在本行以上添加你的代码

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);

/*
填写incrementer函数的代码，使其返回全局变量fixedValue的值增加 1
 */
// 全局变量
var fixedValue = 4;

function incrementer () {
    // 请在本行以下添加你的代码
    let a=fixedValue
    return ++a

    // 请在本行以上添加你的代码
}

var newValue = incrementer(); // 应等于 5
console.log(fixedValue); // 应打印 4

/**
 * 更新incrementer函数，明确声明其依赖项。
 编写incrementer函数，获取它的参数，然后将值增加 1
 */
// 全局变量
var fixedValue = 4;

// 请在本行以下添加你的代码
function incrementer (num) {
return ++num

    // 请在本行以上添加你的代码
}

var newValue = incrementer(fixedValue); // 应等于 5
console.log(fixedValue); // 应打印 4

/**
 * 重构代码，使全局数组bookList在函数内部不会被改变。add函数可以将指定的bookName增加到数组末尾。remove函数可以从数组中移除指定bookName。两个函数都返回数组，并且任何参数都应该添加到bookName前面
 */
// 全局变量
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* 这个函数应该增加一本书到列表中，并返回这个列表 */
// 新参数应在 bookName 之前

// 请在本行以下添加你的代码
function add (list,bookName) {
    return [...list, bookName];
}

function remove (list,bookName) {
    if (list.indexOf(bookName) >= 0) {
        return list.filter((item) => item !== bookName);
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);

/**
 * watchList数组保存了包含一些电影信息的对象。使用map从watchList中提取标题（title）和评分（rating），并将新数组保存在rating变量里。目前编辑器中的代码是使用for循环实现，使用map表达式替换循环功能
 */
// 全局变量
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// 请在本行以下添加你的代码

var rating = [];
rating=watchList.map(item=>{
return {"title":item["Title"], "rating":item["imdbRating"]}
})

// 请在本行以上添加你的代码

console.log(rating);

/**
 * 写一个和Array.prototype.map()一样的Array.prototype.myMap()。你可以用for循环或者forEach方法
 */
// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
    var newArray = [];
    // 请在本行以下添加你的代码
        this.forEach(item=>{
            newArray.push(callback(item))
        })
    // 请在本行以上添加你的代码
    return newArray;

};

var new_s = s.myMap(function(item){
    return item * 2;
});

/**
 * watchList是包含一些电影信息的对象。结合filter和map返回一个只包含title和rating属性的新数组，并且imdbRating值大于或等于 8.0。请注意，评级值在对象中保存为字符串，你可能需要将它转换成数字来执行运算
 */
// 全局变量
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// 请在本行以下添加你的代码
var filteredList=watchList.map(function(e) {
    return {title: e["Title"], rating: e["imdbRating"]}
}).filter((e) => e.rating >= 8);
// 请在本行以上添加你的代码

console.log(filteredList);

/**
 * 编写一个和Array.prototype.filter()功能一样的Array.prototype.myFilter()方法。你可以用for循环或Array.prototype.forEach()方法
 */
// 全局变量
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
    var newArray = [];
    // 请在本行以下添加你的代码
    this.forEach(function(x) {
        if (callback(x) == true) {
            newArray.push(x);
        }
    })
    // 请在本行以上添加你的代码
    return newArray;

};

var new_s = s.myFilter(function(item){
    return item % 2 === 1;
});

/**
 * 在sliceArray函数中使用slice方法，给出beginSlice和endSlice索引，返回anim数组的一部分，这个函数应返回一个数组
 */
function sliceArray(anim, beginSlice, endSlice) {
    // 请在本行以下添加你的代码

    return anim.slice(beginSlice,endSlice)
    // 请在本行以上添加你的代码
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

/**
 * 用slice代替splice重写nonMutatingSplice函数。将cities数组长度限制为3，并返回一个仅包含前 3 项的新数组。
 不要改变提供给函数的原始数组
 */
function nonMutatingSplice(cities) {
    // 请在本行以下添加你的代码
    return cities.slice(0,3);

    // 请在本行以上添加你的代码
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

/**
 * 在nonMutatingConcat函数里使用concat，将attach拼接到original尾部，返回拼接后的数组
 */
function nonMutatingConcat(original, attach) {
    // 请在本行以下添加你的代码
        return original.concat(attach)
    // 请在本行以上添加你的代码
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);


/**
 * 修改nonMutatingPush函数，用concat替代push将newItem添加到original末尾，该函数应返回一个数组
 */
function nonMutatingPush(original, newItem) {
    // 请在本行以下添加你的代码
    return original.concat(newItem);

    // 请在本行以上添加你的代码
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);


/**
 * watchList变量中包含一组存有多部电影信息对象。使用reduce查找由 Christopher Nolan 导演的电影directed by Christopher Nolan的 IMDB 评级。回想一下之前的挑战，如何filter数据，以及使用map来获取你想要的数据。你可能需要创建一些变量，但是请将最后的平均值保存到averageRating变量中。请注意，评级在对象中是字符串，需要将其转换为数字再用于数学运算
 */
// 全局变量
var watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];

// 请在本行以下添加你的代码

var averageRating=watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;;

// 请在本行以上添加你的代码

console.log(averageRating);


/**
 * 在alphabeticalOrder函数中使用sort方法对arr中的元素按照字母顺序排列
 */
function alphabeticalOrder(arr) {
    // 请在本行以下添加你的代码
return arr.sort()

    // 请在本行以上添加你的代码
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


/**
 * 给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
 */
function sumAll(arr) {
    let sum=0
arr.sort((a,b)=>{
    return a-b
})
    let a=arr[0]
    let b=arr[arr.length-1]
    for (let i =a ; i <=b ; i++) {
        sum+=i
    }
    return sum
}
sumAll([1, 4])


/**
 * 在这道题目中，我们需要写一个函数，比较两个数组，返回一个新的数组。这个新数组需要包含传入的两个数组所有元素中，仅在其中一个数组里出现的元素。如果某个元素同时出现在两个数组中，则不应包含在返回的数组里。换言之，我们需要返回这两个数组的对称差
 */
function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2).filter(item=>{
        return !arr1.includes(item)|| !arr2.includes(item)
    })
    // 这是一个党异伐同的过程

    return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

/**
 * 在这道题目中，我们要写一个叫destroyer的函数。传给它的第一个参数是数组，我们称他为初始数组。后续的参数数量是不确定的，可能有一个或多个。你需要做的是，从初始数组中移除所有与后续参数相等的元素，并返回移除元素后的数组
 */
function destroyer(arr,...args) {
    // 删掉那些值
    for (let i = 0; i <args.length ; i++) {
        for (let j = 0; j <arr.length; j++) {
            if(args[i] === arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/**
 * 在这道题目中，我们要写一个函数，它接收两个参数：第一个参数是对象数组，第二个参数是一个对象。我们需要从对象数组中找出与第二个参数相等或包含第二个参数的所有对象，并以对象数组的形式返回。其中，相等的意思是原数组中的对象与第二个参数中对象的所有键值对完全相等；包含的意思是只要第二个参数中对象的所有键存在于原数组对象中，且它们对应的值相同即可。

 比如，如果第一个参数是[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]，第二个参数是{ last: "Capulet" }。那么你需要以对象数组的形式返回第一个参数中的第三个元素，因为它包含第二个参数中定义的键last，且对应的值"Capulet"相同
 */
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let sou=Object.keys(source)
    // 请把你的代码写在这条注释以下
    arr=collection.filter(obj=>{
        return sou.every(key=>{
            return obj.hasOwnProperty(key) &&obj[key]=== source[key]
        })
    })

    // 请把你的代码写在这条注释以上
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

/**
 * 在这道题目中，我们需要写一个函数，把一个字符串转换为“短线连接格式”。短线连接格式的意思是，所有字母都是小写，且用-连接。比如，对于Hello World，应该转换为hello-world；对于I love_Javascript-VeryMuch，应该转换为i-love-javascript-very-much
 */
function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().split(/(?:_| )+/) .join('-');
}

// test here
spinalCase('This Is Spinal Tap');

/**
 * 在这道题目中，我们需要写一个函数，把传入的字符串翻译成“儿童黑话”。
 儿童黑话的基本转换规则很简单，只需要把一个英文单词的第一个辅音字母或第一组辅音从移到单词的结尾，并在后面加上ay即可。在英语中，字母 a、e、i、o、u 为元音，其余的字母均为辅音。辅音从的意思是连续的多个辅音字母。
 额外地，如果单词本身是以元音开头的，那只需要在结尾加上way。
 在本题中，传入的单词一定会是英文单词，且所有字母均为小写
 */
function translatePigLatin(str) {

    return str;
}

translatePigLatin("consonant");

/**
 * 在这道题目中，我们需要写一个字符串的搜索与替换函数，它的返回值为完成替换后的新字符串。
 这个函数接收的第一个参数为待替换的句子。
 第二个参数为句中需要被替换的单词。
 第三个参数为替换后的单词。
 注意：
 你需要保留被替换单词首字母的大小写格式。即如果传入的第二个参数为 "Book"，第三个参数为 "dog"，那么替换后的结果应为 "Dog"
 */
function myReplace(str, before, after) {
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/**
 * 在这道题目中，我们需要写一个函数，为 DNA 中的碱基配对。这个函数只接收一个表示碱基的字符串为参数，最后返回完成配对的二维数组。

 碱基对 由一对碱基组成。碱基有四种，分别为 A（腺嘌呤）、T（胸腺嘧啶）、G（鸟嘌呤）和 C（胞嘧啶）。配对原则是：A 与 T 配对，C 与 G 配对。我们需要根据这个原则对传入的所有碱基进行配对。

 对于每个传入的碱基，我们应采用数组的形式展示配对结果。其中，传入的碱基需要作为数组的第一个元素出现。最终返回的数组中应当包含参数中每一个碱基的配对结果。

 比如，传入的参数是 GCG，那么函数的返回值应为 [["G", "C"], ["C","G"],["G", "C"]]
 */

function pairElement(str) {
    let obj={
        A:"T",
        C:"G",
        T:'A',
        G:"C"
    }

    let arr=[]
    arr=Array.from(str)
    let newArr=arr.map(item=>{
        return [item,obj[item]]
    })


    return newArr;
}

pairElement("GCG");


/**
 * 在这道题目中，我们需要写一个函数，找到传入的字符串里缺失的字母并返回它。

 判断缺失的依据是字母顺序，比如 abcdfg 中缺失了 e。而 abcdef 中就没有字母缺失，此时我们需要返回undefined
 */
function fearNotLetter(str) {
    return str;
}

fearNotLetter("abce");

/**
 * 在这道题目中，我们需要写一个函数，它接收两个或多个数组为参数。我们需要对这些数组中所有元素进行去除重复元素的处理，并以数组的形式返回去重结果。

 需要注意的是，结果数组中的元素顺序必须与其传入的顺序保持一致
 */
function uniteUnique(arr) {
    let args=[...arguments]
    var result=[]
    for(var i=0;i<args.length;i++){
        for(var j=0;j<args[i].length;j++){
            if(!result.includes(args[i][j])){

            }
        }
    }
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


/**
 * 在这道题目中，我们需要写一个转换 HTML entity 的函数。需要转换的 HTML entity 有&、<、>、"（双引号）和'（单引号
 */
function convertHTML(str) {
    var temp = str.split('');
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case '<':
          temp[i] = '&lt;';
          break;
        case '&':
          temp[i] = '&amp;';
          break;
        case '>':
          temp[i] = '&gt;';
          break;
        case '"':
          temp[i] = '&quot;';
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }

    temp = temp.join('');
    return temp;
  }
  convertHTML("Dolce & Gabbana");


/**
 * 在这道题目中，我们需要写一个函数，参数为一个正整数num。它的作用是计算斐波那契数列中，小于或等于num的奇数之和。
 斐波那契数列中，第一和第二个数字都是 1，后面的每个数字由之前两数相加得出。斐波那契数列的前六个数字分别为：1、1、2、3、5、8。
 比如，sumFibs(10)应该返回10。因为斐波那契数列中，比10小的数字只有 1、1、3、5
 */
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

sumFibs(4);

/**
 * 在这道题目中，我们需要写一个函数，它接收一个数字参数num，返回值为不大于这个数字的所有质数之和。

 质数是大于 1 且仅可以被 1 和自己整除的数。比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。

 注意，传入函数的num不一定是质数
 */
function sumPrimes(num) {
    if(num){

    }
    return num;
}

sumPrimes(10);

/**
 * 在这道题目中，我们需要写一个函数，它接收一个包含两个数字的数组参数arr，它的返回值为这两个数字范围内所有数字（包含这两个数字）的最小公倍数。

 注意，较小数不一定总是出现在数组的第一个元素。

 比如，传入[1, 3]，那么函数的返回结果应为 1、2、3 的最小公倍数，即为 6
 */
function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
        range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
        var GCD = gcd(lcm, range[i]);
        lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
        if (y === 0)
            return x;
        else
            return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);




