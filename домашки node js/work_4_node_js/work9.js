
let num = '87053056462'
function ValidPhone(phone) {
    let re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let valid = re.test(phone);
    if (valid)
     return `Номер телефона введен правильно! : ${num}`;
    else 
    return 'Номер телефона введен неправильно!';
} 
console.log(ValidPhone(num))