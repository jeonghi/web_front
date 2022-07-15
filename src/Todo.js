import React from "react";
// eslint-disable-next-line
import {ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

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

        this.state = { item: props.item , readOnly: true };
        this.delete = props.delete;
    }

    deleteEventHandler = () => {
        this.delete(this.state.item)
    }

    offReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        })
    }

    onReadOnlyMode = () => {
        console.log("Event!", this.state.readOnly)
        this.setState({readOnly: true}, () => {
            console.log("ReadOnly?", this.state.readOnly)
        })
    }

    onKeyPress = (e) => {
        if(e.key === "Enter"){
            this.onReadOnlyMode();
        }
    }

    render() {
// eslint-disable-next-line
        const item = this.state.item;

        return(
            <ListItem>
                <Checkbox checked={item.done}/>
                <ListItemText>
                    <InputBase
                        inputProps={{'aria-label':'naked',
                        readOnly: this.state.readOnly,}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                        onClick={this.offReadOnlyMode}
                        onKeyPress={this.onKeyPress}
                    />
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo"
                    onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Todo;