
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortArr = [];
   for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      if (i % 2 == 0) {
        sortArr.push(matrix[i][j]);
      } else {
       let length = matrix[i].length;
        sortArr.push(matrix[i][(length-1-j)])
     }
    }
   }
return sortArr;
}
