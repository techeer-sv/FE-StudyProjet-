//문자열 정렬
function solution(my_string) {
  return my_string
    .split("")
    .map(Number)
    .filter((v) => !isNaN(v))
    .sort((a, b) => a - b);
}
