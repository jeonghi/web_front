import './App.css';
import React from 'react';
import Todo from "./Todo";
import AddTodo from "./AddTodo";

// eslint-disable-next-line
import {Paper, List, Container} from "@material-ui/core";

//App은 컴포넌트이다.
//컴포넌트는 js함수 또는 js클래스 형태로 생성할 수 있다.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//App 컴포넌트는 HTML(렌더링 부분) 과 JS(로직 부분)를 포함하는 JSX를 리턴한다.
//js파일안에 js문법과 html코드를 사용하고 있다. 이는 리엑트가 한 파일에서 HTML과 js를 함께 쓰려고 확장한 문법이고 JSX라고 부른다.
//App 컴포넌트의 클래스 버전이다.
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {id: 0, title: "위장마스터 세윤", done:true},
                {id: 1, title: "뿡쟁이 정환", done:false}
            ]
        };
    }

    add = (item) => {
        const thisItems = this.state.items;
        item.id = "ID-" + thisItems.length;
        item.done = false;
        thisItems.push(item)
        this.setState({items : thisItems})
        console.log("items: ", this.state.items);
    }

    delete = (item) => {
        const thisItems = this.state.items;
        console.log("Before update Items : ", this.state.items)
        const newItems = thisItems.filter((e) => {return e.id !== item.id});
        this.setState({ items: newItems }, () => {
            console.log("Update Items : ", this.state.items)
        })
    }


    render(){
        const items = this.state.items;
        var todoItems = items.length > 0 && (
            <Paper style={{margin: 16}}>
                <List>
                    {items.map((item, idx) => {
                        return <Todo item={item} delete={this.delete}/>}
                    )}
                </List>
            </Paper>

        )
        return (
        <div className="App">
            <Container maxWidth="md">
                <AddTodo add={this.add}/>
                <div className="TodoList">{todoItems}</div>
            </Container>
        </div>
    )
  }
}
// export default 컴포넌트 구문을 통해 이 컴포넌트를 다른 컴포넌트에서 사용할 수 있게된다.
export default App;
