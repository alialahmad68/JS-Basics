
const stringSize = (text) => {
    return text.length;
}

const replaceCharacterE = (text) => {
    return text.replace('e',' ');

}

const concatString = (text1, text2) => {
    return text1.concat(text2);
}

const showChar5 = (text) => {
    return text[4];
}

const showChar9 = (text) => {
    return text.slice(0,9);
}

const toCapitals = (text) => {
    return text.toUpperCase();
}

const toLowerCase = (text) => {
    return text.toLowerCase();

}
const removeSpaces = (text) => {
    return text.trim();

}
const IsString = (text) => {
   return typeof text =="string";
}

const getExtension = (text) => {
    
    const ext=text.indexOf(".")+1;
    return text.slice(ext,text.length);
}
const countSpaces = (text) => {

    let count=0;
    for (let space of text){
        if(space==" "){
            count++;
        }
    }
    return count;
}
const InverseString = (text) => {
let reverseText="";

for(let i=text.length-1;i>=0;i--){
reverseText+=text[i];
}

return reverseText;
}

const power = (x, y) => {
    return Math.pow(x,y);

}
const absoluteValue = (num) => {
    return Math.abs(num);


}
const absoluteValueArray = (array) => {
    return array.map((num) => Math.abs(num));

}
const circleSurface = (radius) => {
    return Math.round(Math.PI*radius*radius);


}
const hypothenuse = (ab, ac) => {
return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
const BMI = (weight, height) => {

    let result=weight/(height*height);
return parseFloat(result.toFixed(2));

}

const createLanguagesArray = () => {
   
    let array=["Html","CSS","Java","PHP"];
return array;

}

const createNumbersArray = () => {

let array=[0,1,2,3,4,5];
return array;

}

const replaceElement = (languages) => {

languages[2]="Javascript";
return languages;

}

const addElement = (languages) => {

    languages.push("Ruby","Python");
    return languages;
}

const addNumberElement = (numbers) => {

numbers.unshift(-2,-1);
return numbers;

}

const removeFirst = (languages) => {

languages.shift(0);
return languages;

}

const removeLast = (languages) => {

languages.pop();
return languages;
}

const convertStrToArr = (social_arr) => {
    return social_arr.split(",");
}

const convertArrToStr = (languages) => {
    return languages.join();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}