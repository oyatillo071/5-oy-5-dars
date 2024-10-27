function randomArray(length = 10) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = [];

  for (let i = 0; i < length; i++) {
    let isNumber = Math.random() < 0.5;
    if (isNumber) {
      result.push(Math.floor(Math.random() * 1000));
    } else {
      let wordLength = Math.floor(Math.random() * 10) + 1;
      let randomWord = "";
      for (let j = 0; j < wordLength; j++) {
        randomWord += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      result.push(randomWord);
    }
  }

  return result;
}

// Majburiy masalalar
// 1. **Foydalanuvchining ismi va familiyasidan iborat string kiriting.
//  Har bir so'z bosh harf bilan boshlanadigan qilib qaytaruvchi
//  funksiyani yozing.**

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function innerHtml(ansId, answer) {
  document.getElementById(ansId).innerHTML = answer;
}

document.getElementById("first--btn").addEventListener("click", function () {
  let firstValue = document.getElementById("first--value").value;

  let result = "Natija:<br>" + capitalizeWords(firstValue);

  innerHtml("first--ans", result);
});

// 2. **Berilgan stringni aylantiruvchi funksiyani yozing.
//  Stringni teskari shaklida qaytaring.**

function reverseStr(str) {
  return str.split("").reverse().join("");
  alert("error");
}

document.getElementById("second--btn").addEventListener("click", function () {
  let secondValue = document.getElementById("second--value").value;

  let res = "Natija:<br>" + reverseStr(secondValue);

  innerHtml("second--ans", res);
});

// 3. **Massivdagi sonlarning o'rtacha qiymatini qaytaruvchi funksiyani yozing.**
function arifFind(array) {
  let res = 0;

  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }

  return res / array.length;
}

function randNum(length = 10, maxValue = 100) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * maxValue));
  }
  return randomArray;
}

document.getElementById("third--btn").addEventListener("click", function () {
  let arr = randNum();

  let result = arifFind(arr);

  let res = arr + "<br>Natija:<br>" + result;

  innerHtml("third--ans", res);
});

// 4. **Massivdagi har bir elementning uzunligini qaytaruvchi
//  funksiyani yozing. Funksiya qabul qilgan massiv ichidagi so'zlarning uzunligini qaytarishi kerak.**
function lenArrElements(array) {
  let res = "";
  for (let i = 1; i < array.length; i++) {
    if (isNaN(array[i - 1])) {
      res +=
        "<br>" +
        i +
        "-indeksdagi string element uzunligi " +
        array[i - 1].length;
    }
  }

  return res;
}

document.getElementById("four--btn").addEventListener("click", function () {
  let arr = randomArray();

  let result = lenArrElements(arr);

  let res = arr + "<br>Natija:<br>" + result;

  innerHtml("four--ans", res);
});

// 5. **Berilgan massivdagi barcha
// toq sonlarni chiqaruvchi funksiyani yozing.**
function oddNum(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "number" && array[i] % 2 === 1) {
      result.push(array[i]);
    }
  }
  return result.join("  ");
}

document.getElementById("five--btn").addEventListener("click", function () {
  let arr = randNum();

  let result = oddNum(arr);

  let res = arr + "<br>Natija:<br>" + result;

  innerHtml("five--ans", res);
});

//
// 6. **Ikki obyektni qabul qilib, ularni birlashtiruvchi funksiyani yozing.**
function mergeObjects(obj1, obj2) {
  // https://stackoverflow.com/questions/2454295/how-to-concatenate-properties-from-multiple-javascript-objects

  return Object.assign({}, obj1, obj2);
}

document.getElementById("six--btn").addEventListener("click", function () {
  const obj1 = { name: "Oyatillo", age: 21 };
  const obj2 = { city: "Fergana", profession: "Student" };

  let mergedObject = mergeObjects(obj1, obj2);

  let result =
    "1-obyekt: <br>" +
    "name: " +
    obj1.name +
    ", age: " +
    obj1.age +
    "<br>" +
    "2-obyekt: <br>" +
    "city: " +
    obj2.city +
    ", profession: " +
    obj2.profession +
    "<br>" +
    "Natija:<br>" +
    "name: " +
    mergedObject.name +
    ", age: " +
    mergedObject.age +
    ", city: " +
    mergedObject.city +
    ", profession: " +
    mergedObject.profession;

  innerHtml("six--ans", result);
});

// 7. **Foydalanuvchidan string qabul qilib, undagi bo‘sh joylarni olib tashlaydigan funksiyani yozing.**

function trimStr(str) {
  return str.replaceAll(" ", "");
}

document.getElementById("seven--btn").addEventListener("click", function () {
  let sevenValue = document.getElementById("seven--value").value;

  let result =
    "Satr<br>" + sevenValue + "<br>Natija:<br>" + trimStr(sevenValue);
  innerHtml("seven--ans", result);
});

//

// 8. **Obyektdagi barcha qiymatlarni massivga o‘tkazuvchi funksiyani yozing.**
function objValArr(obj) {
  return Object.values(obj);
}
document.getElementById("eight--btn").addEventListener("click", function () {
  const exObject = {
    name: "Oyatillo",
    age: 21,
    city: "Fergana",
    profession: "Student",
  };

  let result = "<br>Natija:<br>" + objValArr(exObject);

  innerHtml("eight--ans", result);
});

//

//

// 9. **Berilgan massivdagi sonlarning eng kichigi va eng kattasini aniqlab,
// obyekt sifatida qaytaruvchi funksiyani yozing (masalan, `{min: 2, max: 10}`)
class MaxMin {
  constructor(max, min) {
    this.max = max;
    this.min = min;
  }
}

function maxMinObj(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let res = new MaxMin(max, min);

  return res;
}

document.getElementById("nine--btn").addEventListener("click", function () {
  let arr = randNum();

  let resultObj = maxMinObj(arr);

  let result =
    "<br>" +
    `Massiv:<br>${arr}<br>Natija:<br>Max: ${resultObj.max}<br>Min: ${resultObj.min}`;
  console.log(maxMinObj(arr));

  innerHtml("nine--ans", result);
});

//

//

// 10. **Berilgan stringda nechta unli harf borligini hisoblovchi funksiyani yozing.**

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

document.getElementById("ten--btn").addEventListener("click", function () {
  let inputString = document.getElementById("ten--value").value;

  let result =
    "SAtr <br>" +
    inputString +
    "<br> Berilgan satrda unli harflar soni:<br>" +
    countVowels(inputString);

  innerHtml("ten--ans", result);
});

// 11. **Massivni qabul qilib,
// har bir elementiga 2 qo‘shadigan va qaytadigan funksiyani yozing.**
function plusTwo(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] += 2;
  }
  return array;
}

document.getElementById("eleven--btn").addEventListener("click", function () {
  let arr = randNum();

  let result =
    "Massiv <br>" + arr + "<br> 2 qiymat kopaygan natija:<br>" + plusTwo(arr);

  innerHtml("eleven--ans", result);
});

// 12. **Massiv ichida eng uzun so'zni aniqlab qaytaruvchi funksiyani yozing.**

function maxLen(array) {
  let maxWord = "";
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string" && array[i].length > maxWord.length) {
      maxWord = array[i];
    }
  }
  return maxWord;
}

document.getElementById("twelve--btn").addEventListener("click", function () {
  let arr = randomArray();

  let result =
    "Massiv <br>" +
    arr.join(" ") +
    "<br> Eng uzun qiymat natija:<br>" +
    maxLen(arr);

  innerHtml("twelve--ans", result);
});

// 13. **Foydalanuvchidan massiv qabul qilib, uning ichidagi raqamlarni
//  o‘rtacha qiymatidan katta bo‘lgan elementlarni
// ajratib qaytaruvchi funksiyani yozing.**

function medValElement(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let arifVal = sum / array.length;

  let res = array.filter(function (value) {
    return value > arifVal;
  });

  return res;
}

document.getElementById("thirtn--btn").addEventListener("click", function () {
  let arr = randNum(10, 100);

  let result =
    "Massiv: <br>" +
    arr.join("  ") +
    "<br> O'rtacha qiymatdan katta bo'lganlar: <br>" +
    medValElement(arr).join("  ");

  innerHtml("thirtn--ans", result);
});

//     14. **Stringni qabul qilib, u bilan boshlanadigan va tugaydigan
// belgini olib tashlaydigan funksiyani yozing.**
function trimString(string, char) {
  if (string.startsWith(char)) {
    string = string.slice(1);
  }

  if (string.endsWith(char)) {
    string = string.slice(0, -1);
  }

  return string;
}

document.getElementById("fourtn--btn").addEventListener("click", function () {
  let inputString = document.getElementById("fourtn--value").value;
  let charToTrim = "u";

  let result = "Natija: <br>" + trimString(inputString, charToTrim);
  innerHtml("fourtn--ans", result);
});

// 15. **Berilgan massivdagi barcha raqamlarning
//  kvadratlari yig'indisini hisoblaydigan funksiyani yozing.**
function degreeArr(array) {
  return array.map(function (value) {
    return typeof value === "number" ? value ** 2 : value;
  });
}

document.getElementById("fivetn--btn").addEventListener("click", function () {
  let arr = randomArray();

  let result =
    "Massiv: <br>" +
    arr.join("  ") +
    "<br> Sonlarni kvadrati: <br>" +
    degreeArr(arr).join("  ");

  innerHtml("fivetn--ans", result);
});

// 16. **Massivni teskari qilib qaytaruvchi funksiyani yozing
// (bunda massiv ichidagi elementlar teskari tartibda joylashadi).**
function reverseArray(array) {
  return array.reverse();
}

document.getElementById("sixtn--btn").addEventListener("click", function () {
  let arr = randNum();
  let result =
    "Asl massiv: <br>" +
    arr.join(", ") +
    "<br>Teskari massiv: <br>" +
    reverseArray(arr).join(", ");

  innerHtml("sixtn--ans", result);
});

// 17. **Stringni qabul qilib, uni har bir so‘zini
// katta harflarda yozib qaytaradigan funksiyani yozing.**
function upperStr(str) {
  return str.toUpperCase();
}

document.getElementById("seventn--btn").addEventListener("click", function () {
  let inputString = document.getElementById("seventn--value").value;

  let result =
    "Satr<br>" + inputString + "<br>Natija: <br>" + upperStr(inputString);
  innerHtml("seventn--ans", result);
});

// 18. **Obyektlar massividan berilgan yoshdan
// kattalarni ajratib qaytaradigan funksiyani yozing.**

function checkAge(object, age) {
  return object.filter(function (person) {
    return person.age >= age;
  });
}

document.getElementById("eighttn--btn").addEventListener("click", function () {
  let minAge = document.getElementById("eighttn--value").value;

  const people = [
    { name: "Oyatillo", age: 21 },
    { name: "Zuhriddin", age: 18 },
    { name: "Muslimbek", age: 18 },
    { name: "Avazbek", age: 17 },
  ];

  let obj = checkAge(people, minAge);

  let result = "Berilgan yoshdan kattalar:<br>";
  for (const person of obj) {
    result += person.name + " : " + person.age + "<br>";
  }

  innerHtml("eighttn--ans", result);
});

// 19. **Massiv ichida nechta marta
// berilgan element uchrashganini aniqlovchi funksiyani yozing.**

function countElement(array, element) {
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    if (element == array[i]) {
      counter++;
    }
  }
  return counter;
}
document.getElementById("ninetn--btn").addEventListener("click", function () {
  let searchValue = document.getElementById("ninetn--value").value;

  let arr = randNum();

  let result =
    "Massiv:<br>" +
    arr +
    "<br>Berilgan element " +
    countElement(arr, searchValue) +
    " marta uchraydi";

  innerHtml("ninetn--ans", result);
});

// 20. **Ikki string qabul qilib, ularning umumiy harflarini ajratib
//  qaytaradigan funksiyani yozing.**

function someChar(str1, str2) {
  let res = "";

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        res += str1[i];
      }
    }
  }
  let result = "";

  for (let i = 0; i < res.length; i++) {
    if (result.indexOf(res[i]) === -1) {
      result += res[i];
    }
  }

  return result;
}

document.getElementById("twenty--btn").addEventListener("click", function () {
  let string1 = document.getElementById("twenty--first--value").value;
  let string2 = document.getElementById("twenty--second--value").value;

  let result =
    "1-SAtr<br>" +
    string1 +
    "<br>2-Satr<br>" +
    string2 +
    "<br>Bir xil belgilar<br>" +
    someChar(string1, string2);

  innerHtml("twenty--ans", result);
});
