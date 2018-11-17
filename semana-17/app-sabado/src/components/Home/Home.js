import React, {Component} from 'react';
import Item from './Item';
import Selected from './Selected';
import styles from './Home.module.css';
import Corona from "./Corona";
import Form from "./Form";
import './Form.css';

class Home extends Component{

    constructor(){
        super();
        this.state = {
            form: {
                name: "",
                age: ""
            },
            show: false,
            selection: {
                name: ""
            },
            data: [
                {
                    name:"David",
                    age: 21
                },
                {
                    name:"Peter",
                    age:19
                },
                {
                    name: "Mike",
                    age:5
                }
            ]
        }
    }

    handleClick = (selection) => {
        this.setState({selection})
    };

    toggleBlock = () => {
        let {show} = this.state;
        show = !show;
        this.setState({show});
    };

    deleteItem = (index) => {
        let {data} = this.state;
        data = data.filter( (i, inx) => index !== inx);
        this.setState({data});
    };

    handleChange = (e) => {
        let {form} = this.state;
        let field = e.target.name;
        form[field] = e.target.value;
        this.setState({form});
    };

    render(){
        return(
            <div>
                <div className={styles.container}>
                    <ul>
                        {this.state.data.map( (item,index) => <Item
                            deleteItem={this.deleteItem}
                            handleClick={this.handleClick}
                            key={index}
                            index={index}
                            item={item}/> )}
                    </ul>
                    <div>
                        <Selected selection={this.state.selection}/>
                    </div>

                    <button onClick={this.toggleBlock} >Picale</button>

                    {this.state.show ? <Corona/> : <div>No hay data</div>}

                </div>

                <div>
                    <Form handleChange={this.handleChange}/>
                </div>

            </div>
        )
    }

}

export default Home;