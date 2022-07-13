import React from "react";

// function Todo(){
//     return (
//         <div className="Todo">
//             <input type="checkbox" id="todo0" name="todo0" value="todo0"/>
//             <label for="todo0">Todo 컴포넌트 만들기</label>
//         </div>
//     );
// }

class Todo extends React.Component {
    constructor(props) {
        super(props);

        // state는 리엑트가 관리하는 객체이다.
        // 리엑트에서는 추후에 변경할 수 있는 변수를 state 오브젝트에서 관리.
        // 그 이유는 js 내에서 변경한 변수의 값을 HTML에 다시 렌더링 하기 위함이다.
        // 리엑트가 변경된 state를 어떻게 다시 렌더링 하는지는 이후 setState에서 다룬다.

        this.state = { item: props.item };
    }

    render() {
        return(
            <div className="Todo">
                {/* 자바스크립트로 된 변수를 JSX에서 사용하려면 변수를 {}로 묶어주면 된다. */}
                <input type="checkbox" id={this.state.item.id}
                       name={this.state.item.id}
                       checked={this.state.item.done}
                />
                <label id={this.state.item.id}>{this.state.item.title}</label>
            </div>
        );
    }
}

export default Todo;