/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var triangles_count = 0;
  
  for (var i = 0; i < preferences.length; i++) {
  var spichonee_2 = preferences[i];

    if (spichonee_2 != 0) {
    // первый spichonee кого-то любит
      var spichonee_3 = preferences[spichonee_2 - 1];

      if (spichonee_3 != 0) {
        var spichonee_1 = preferences[spichonee_3 - 1];
          if (spichonee_1 != 0 && spichonee_1 - 1 == i) {
          
          // проверяем, что все spichonee в треугольнике уникальны
            if (spichonee_1 != spichonee_2 && spichonee_2 != spichonee_3 && spichonee_2 != spichonee_1) {
            triangles_count++;
            
            // помечаем, что этих spichonee уже просмотрели
            preferences[i] = 0;
            preferences[spichonee_2 - 1] = 0;
            preferences[spichonee_3 - 1] = 0;
  }
  }
  }
  }
  }
  
  return triangles_count;
  
};
