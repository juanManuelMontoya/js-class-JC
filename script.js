function howMany(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) {
        numberSelected++;
      }
    }
    return numberSelected;
  }

  let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };
  
  // visitas, algunos usuarios lo hacen varias veces
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);
  
  // set solo guarda valores únicos
  alert( set.size ); // 3

  set.delete(john);
  
  for (let user of set) {
    console.log(user.name); // John (luego Pete y Mary)
  }

  let btn = document.getElementById("btn");

  btn.addEventListener("click", function () {
    alert(
      "Número de opciones seleccionadas: " +
        howMany(document.selectForm.musicTypes)
    );
  });