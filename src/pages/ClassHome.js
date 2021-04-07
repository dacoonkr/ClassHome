import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function dayclick(value, event) {
    let year = value.getYear() + 1900;
    let month = value.getMonth() + 1;
    let date = value.getDate();

    document.getElementsByClassName("datetime")[0].innerHTML = ```${year}년 ${month}월 ${date}일 정보```;
}

const Page = () => {
    return (
        <>
            <Calendar onClickDay={dayclick}></Calendar>
            <h1 className="datetime">달력을 클릭하세요.</h1>
        </>
    );
};

export default Page;