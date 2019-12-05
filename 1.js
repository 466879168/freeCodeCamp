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
    var newArr=arguments
    for (let i = 0; i < ; i++) {
        
    }
    
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

freeCodeCamp