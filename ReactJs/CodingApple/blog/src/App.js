// /* eslint-disable */
// Lint 끄기

import { useState } from 'react';
import './App.css';

function App() {

  // document.querySelector('h4').innerHTML = post;
  // let post = '강남 우동 맛집';
  
  /** State 사용법
   * 1. import { useState }
   * 2. useState(보관할 자료)
   * 3. let[작명, 작명]
   */

  // [ state에 보관했던 자료, state 변경 도와주는 함수 ]
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬독학']);

  let [따봉, 따봉변경] = useState(0);

  /** Destructuring 문법 
   * let num = [1, 2];
   * let [a, c] = [1, 2];
   * 
   * // let a = num[0];
   * // let c = num[1];
  */

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <h4 style={ {color : 'red', fontSize : '16px'} }>블로그임</h4> */}
        <h4>ReactBlog</h4>
      </div>

      {/* 가나다순 정렬하기 */}
      <button onClick={ () => {
        let copy = [...글제목];
        글제목변경(copy.sort())}}>가나다순 정렬</button>

      <button onClick={ () => { 
        // state가 array/object면 독립적 복사본을 만들어서 수정해야 한다.
        let copy = [...글제목];
        copy[0] = '여자코트 추천'
        글제목변경(copy);
      }}>글수정</button>

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () => { 
          따봉변경(따봉+1) 
        }}>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
