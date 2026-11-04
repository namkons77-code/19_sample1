function Body() {
//   const num = 19;

//   return (
//     <>
//       <h2>
//         {num}은 {num % 2 === 0 ? "짝수" : "홀수"} 입니다.
//       </h2>
//       <br>
//         <p> 조건문을 이용한 조건부 랜더링</p>
//       </br>
//     </>
//   );
// }


const num =200;
if (num % 2 ===0){
  return<div>
    {num} 은 짝수이빈다.
  </div>

}else{
  return<dev>{num}은 홀숭비니다</dev>
}
export default Body;
