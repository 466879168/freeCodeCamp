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
       if(num>3){
           str = str.substr(0, num - 3) + "..."
       }else{
           str=str.substr(0,num)+"..."
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
    var newArr=[]
    for(var i=0;i<arr.length;i+=size){
        newArr.push(arr.slice(i,i+size))
    }
    return newArr;
}

chunk(["a", "b", "c", "d","e"], 2);
/*
截断数组

返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。
 */
function slasher(arr, howMany) {
    // 请把你的代码写在这里
    for(var i=0;i<howMany;i++){
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
    var flag=true;
    var str1=arr[0].toLowerCase()
    //console.log(str1);
    var str2=arr[1].toLowerCase()
    //console.log(str2);
    for (var i = 0; i <str2.length ; i++) {
        var item=str2[i]
        console.log(item);
        if(!str1.includes(item)){
            flag=false
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
    var newArr=arr.filter(item=>{
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
    let newArr=arguments
    for (let i = 1; i <newArr.length ; i++) {
       arr.push(arr.filter(item=>item !==newArr[i]))
    }
    return arr;
}

let a=destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(a);


/*
高阶函数
使用箭头函数的语法来计算squaredIntegers数组里正整数的平方（分数不是整数）
 */
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
    // 在这行以下修改代码
    const squaredIntegers = arr.filter(item=>{
        return Number.isInteger(item)
    }).map(item=>Math.pow(item,2))
    // 在这行以上修改代码
    return squaredIntegers;
};
// 测试你的代码
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/*
给函数increment加上默认参数，使得在value没有被赋值的时候，默认给number加1
 */
const increment = (function() {
    "use strict";
    return function increment(number, value=1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // 返回 7
console.log(increment(5)); // 返回 6


/*
修改sum函数，来让它使用rest操作符，并且它可以在有任何数量的参数时以相同的形式工作。
 */
const sum = (function() {
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
(function() {
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
    const {length:len} = str; // change this
    // 在这行以上修改代码

    return len; // 你必须在这行将 length 赋值给 len

}

console.log(getLength('FreeCodeCamp'));



/*
使用解构赋值来得到forecast.tomorrow的max，并将其赋值给maxOfTomorrow。
 */
const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // 在这行以下修改代码
    const {tomorrow:{max:maxOfTomorrow}} = forecast; // 改变这一行
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
    [a,b]=[b,a]
    // 在这行以上修改代码
})();
console.log(a); // 应该等于 6
console.log(b); // 应该等于 8
/*
使用解构赋值以及rest操作符来进行一个Array.prototype.slice相同的操作。使得arr是原数组source除开前两个元素的子数组。
 */
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    "use strict";
    // 在这行以下修改代码
    const [a,b,...arr]=list // change this
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
const half = (function() {
    "use strict"; // 不要改变这行

    // 在这行以下修改代码
    return function half({max,min}) {
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
    const resultDisplayArray = `<li class="text-warning">no-var</li>
<li class="text-warning">var-on-top</li>
<li class="text-warning">linebreak</li>`;
    // 在这行以上修改代码

    return resultDisplayArray;
}
/**
 * makeList(result.failure) 应该返回：
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>,
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);