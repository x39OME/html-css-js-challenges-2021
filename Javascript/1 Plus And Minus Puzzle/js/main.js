

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  Examples:
  [++a]
  - Value: ???
  - Explain: ???
  [+]
  - Explain: Addition Operator
*/

/*
  (1)

    [++a] [+]
    [++a]
    - Value: 11 
    - Explain: Pre Increment
    [+]
    - Explain: add Operator
    
    ( 11 + 20 + 80 - 11 )  = 100
*/


/*
  (2)
    [++a] [+]
    [++a]
    - Value: 13
    - Explain: Pre Increment
    [+]
    - Explain: add Operator
    ( 13 - 21+ 81 + 13 + 14 ) = 100

*/
/*
  (3)
    [++a] [+]
    [++a]
    - Value: 14
    قيمتها قبل ما نخصم منها 1
    - Explain: Pre Decrement
    [+]
    - Explain: add Operator
    (81 + 21 + 13 * 20 - 21 * 13 + 12 - 1 ) = 100
*/


