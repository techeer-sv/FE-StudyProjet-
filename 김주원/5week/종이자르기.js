// 종이 자르기
// 문제 설명
// 머쓱이는 큰 종이를 1 x 1 크기로 자르려고 합니다.
// 예를 들어 2 x 2 크기의 종이를 1 x 1 크기로 자르려면 최소 가위질 세 번이 필요합니다.

function solution(M, N) {
  return M * N - 1; //(M-1)+(N-1)*M
}
