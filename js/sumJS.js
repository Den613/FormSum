function valid(form){
  //Получаем данные из формы
  var number_one = form.number_one.value;
  var number_two = form.number_two.value;


  if(isNaN(number_one || number_two)){ // проверяем число, не число
    alert("не число");
  } else {
    var sum = Number(number_two) + Number(number_one); //суммируем
    alert(" Результат: \n  "+sum); // выводим результат

  }
}
