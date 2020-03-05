import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// p.66 propsのチェック(propTypes)
import PropTypes from 'prop-types';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const root = document.getElementById('root');

const page = "66";

if (page == "54") {
// p.54 Functional Component
const Hello = (props) => {
    return <div>こんにちは、{props.name}さん</div>;
}
ReactDOM.render(
    <>
    <Hello name="hoge from function"></Hello>
    <Hello name="fuga from function"></Hello>
    <Hello name="poge from function"></Hello>
    </>,
    root
);
}

if (page == "55") {
// p.55 Class Component
class Hello extends React.Component {
    render() {
        return <div>こんにちは、{this.props.name}さん</div>;
    }
};
ReactDOM.render(
    <>
    <Hello name="hoge from class"></Hello>
    <Hello name="fuga from class"></Hello>
    <Hello name="poge from class"></Hello>
    </>,
    root
);
}

if (page == "58") {
// p.58 React エレメント（エレメントでの変数への格納）
const Hello = (props) => {
    return <div>こんにちは、{props.name}さん</div>;
};
// 一旦変数に格納して
const helloElement = <Hello name="Hoge Fuga"></Hello>;

ReactDOM.render(
    <div>
        {helloElement}
    </div>,
    root
);
}

if (page == "63") {
// p.63 Reactコンポーネント children
const Hello = (props) => {
    return (
        <div>こんにちは、{props.children}さん</div>
    );
};

const Greeting = (props) => {
    return (
        <>
            <div>ご挨拶</div>
            {props.children}
        </>
    );
};
ReactDOM.render(
    <Greeting>
        <Hello>坂本龍馬</Hello>
        <Hello>西郷隆盛</Hello>
    </Greeting>,
    root
);
}

if (page == "64") {
// p.64 複数の値を渡す
const Profile = (props) => {
    return (
        <ul>
            <li>名前: {props.name}</li>
            <li>誕生日: {props.birthDay}</li>
        </ul>
    )
};

ReactDOM.render(
    <Profile name="坂本龍馬" birthDay='1836/01/03' />,
    root
);
}

if (page == "65") {
// p.65 スプレッド
const Profile = (props) => {
    return (
        <ul>
            <li>名前: {props.name}</li>
            <li>誕生日: {props.birthDay}</li>
        </ul>
    )
};

const ryoma = {
    name: '坂本龍馬',
    birthDay: '1836/01/03'
};

ReactDOM.render(
    <Profile {...ryoma} />,
    root
);
}

if (page == "66") {
// p.66 props のチェック(propTypes)
// $ npm install --save prop-types

const Hello = (props) => {
    return <div>こんにちは、{props.name}さん</div>;
};
Hello.propTypes = {
    name: PropTypes.string
};
const value = 1;
ReactDOM.render(
    <Hello name={value}></Hello>,
    root
);
}