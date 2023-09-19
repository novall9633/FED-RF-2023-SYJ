// 구체적인 데이터 구성처리를 위한 JS - msgFormat.js

// 내용 메시지 구성 함수 ///
// 이름없이 바로 내보낼 수 있음
// export default = (name,age) => `
const message = (name,age) => `
    나의 이름은 ${name}입니다.
    나이는 ${age}살입니다. 반갑습니다!!!^^<br>
`;
const mess = (name, age, company) => `
    ${age}살 ${name}님은
    ${company} 회사에 합격하셨습니다!

`;
// 내보내기
export {message, mess};