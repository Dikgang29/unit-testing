function countAllFromTown(regNo1, reg) {
    let counter = 0;
      var number = regNo1.split(',');
      for (var i = 0; i<number.length; i++) {
      if (number[i].includes(reg)) {
      counter ++; 
      } 
      }
      return counter;
    }