import React from "react"; //이 내용이 없으면 React는 file component를 읽어드릴수 있음.
import ReactDOM from "react-dom";
import App from "./App";
import Rrakoon from "./Rrakoon";

// ReactDOM.render(<Rrakoon />, document.getElementById("root")); // 하나의 컴포넌트만 인지함.
ReactDOM.render(<App />, document.getElementById("root")); // 하나의 컴포넌트만 렌더링됨.
//<App /> => component => HTML반환하는 함수. => App.JS 에 function()선언한곳 실행.
