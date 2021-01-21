import React from "react";

function Rrakoon() {
  //Functional Components라 하며 항상 대문자로 시작함..
  return <h3>i'm rrakoon</h3>; //return 안에는 html elements를 작성한다.
}
// function Food(props) {
//   //props object 안에는 fav, something, papapa가 들어있다.
// console.log(props);
// return <h3>aaaa</h3>;
// }

function Food({ fav }) {
  //이처럼 property obeject안 property를 가져오려면  { property}을 해주면된다.
  // props.fav랑 같음
  console.log("fav", fav);
  return <h3>i like {fav}</h3>;
}
function App() {
  return (
    <div>
      <h1>hi react</h1>
      <Rrakoon /> {/* componet안에 다른 componet import가능 */}
      <Food fav="taco" something={true} papapa={["hello", 1, 2, 3, 4, true]} />
      {/* fav => favorite란 이름의 property를 taco라는 value를 준것.*/
      /* react magic => 전달한 props(properties)를 가져가는일을함  */}
      <Food fav="ramen" />
      <Food fav="sushi" />
      <Food fav="apple" /> {/* component를 재상용 가능. */}
      {/* Jsx  = Html + javascript*/}
    </div>
  );
}

export default App; // App componets를 내보낸다는 의미로 다른 콤포넌트에서 App componets를 활용할 수 있다.
