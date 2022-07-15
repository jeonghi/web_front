import React from "react";
import { TextField, Paper, Button, Grid} from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { item: { title: "" }};
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        // setState 는 state를 변경시켜주는 함수 이다.
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => {
        const thisItem = this.state.item;
        this.add(thisItem);
        this.setState({item: {title: ""}});
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter") {
            this.onButtonClick();
        }
    }

    render() {
        return(
            <Paper style={{margin: 16, padding: 16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight: 16}}>
                        {/* 사용자가 키보드를 두드릴때마다 TextField 컴포넌트에서 Event e가 발생함.*/}
                        {/* TextField 컴포넌트는 해당 TextField에 어떤 이벤트가 발생할 때마다 이벤트가 일어났을 때 실행해야하는 함수인 onChange()를 실행한다. */}
                        {/* 이런 함수를 이벤트 핸들러 함수라고 한다. 이 이벤트 핸들러 함수는 보통 개발자가 정해줘야 함. 아니면 아무 일도 일어나지 않음.*/}
                        {/* 그래서 이벤트 핸들러로 커스텀 함수인 onInputChange()함수를 작성하고 이 함수를 TextField의 이벤트 핸들러 함수로 연결해준다.*/}
                        {/* 이벤트가 발생해 onChange에 연결된 onInputChange()가 실행되면 Event 객체 e가 매개변수로 넘어온다*/}
                        {/* Event 객체의 target.value에는 현재 화면의 InputField에 입력된 글자들이 담겨 있다.*/}
                        {/* 따라서 e.target.value를 item의 title로 지정한 후 setState를 통해 item을 업데이트해 사용자의 Todo아이템을 임시로 저장할 수 있다*/}

                        <TextField placeholder="Add Todo here"
                                   fullWidth
                                   onChange={this.onInputChange}
                                   value={this.state.item.title}
                                   onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button fullWidth color="secondary"
                                variant="outlined"
                                onClick={this.onButtonClick}
                        >
                            +
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}

export default AddTodo;