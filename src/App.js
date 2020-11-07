import logo from './logo.svg';
import './App.css';

import {connect, useDispatch, useSelector} from "react-redux";
import {updateUser} from "./redux/actions";
/*
function App(props) {
  return (
    <div className="App">
      <p>{props.products}</p>
      <p>{props.user}</p>
      <button onClick={() => props.updateUser('Jun'+ Math.random())}>액션</button>
    </div>
  );
}

// subscribe: 스토어의 state를 props로 매핑하기
const mapStateToProps = (state) => ({
  // 왼쪽은 props, 오른쪽은 store의 state
  products: state.products,
  user: state.user
});

// publish: (액션을 디스패치하는) 펑션을 props 로 매핑하기
const mapActionToProps = (dispatch) => ({
  // 왼쪽은 props, 오른쪽은 (액션을 디스패치하는) 펑션
  //updateUser: () => dispatch(action)
  updateUser: (name) => dispatch(updateUser(name))
})

// 문법적으로는 파라메터를 차례대로 넣는 커링 펑션
// 결과적으로 만드는것은 App을 입력으로해서 새로운 HoC 컴포넌트를 만든다.
export default connect(mapStateToProps, mapActionToProps)(App);
*/

// redux hooks 적용하기
function App(props) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{user}</p>
      <button onClick={() => dispatch(updateUser('Jun'))}>액션</button>
    </div>
  );
}

export default App;