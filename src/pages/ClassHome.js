import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function dayclick(value, event) {
    let year = value.getYear() + 1900;
    let month = value.getMonth() + 1;
    let date = value.getDate();

    document.getElementsByClassName("datetime")[0].innerHTML = year + "년 " + month + "월 " + date + "일 정보";
}

const Page = () => {
    return (
        <>
            <h1 className="classname">반</h1>
            <div className="general_info">
                <table className="t_timetable">
                    <thead>
                        <td></td><td>월</td><td>화</td><td>수</td><td>목</td><td>금</td>
                    </thead>
                    <tbody>
                        <tr> <td>1교시</td> <td>창체</td> <td>체육</td> <td>영어</td> <td>체육</td> <td>체육</td> </tr>
                        <tr> <td>2교시</td> <td>수학</td> <td>정보</td> <td>수학</td> <td>역사A</td> <td>국어</td> </tr>
                        <tr> <td>3교시</td> <td>과학</td> <td>정보</td> <td>도덕</td> <td>역사A</td> <td>수학</td> </tr>
                        <tr> <td>4교시</td> <td>과학</td> <td>기가</td> <td>미술</td> <td>스포츠</td> <td>진로</td> </tr>
                        <tr> <td>5교시</td> <td>국어</td> <td>기가</td> <td>과학</td> <td>과학</td> <td>도덕</td> </tr>
                        <tr> <td>6교시</td> <td>음악</td> <td>영어</td> <td>국어</td> <td>국어</td> <td>영어</td> </tr>
                        <tr> <td>7교시</td> <td></td> <td></td> <td>역사B</td> <td>수학</td> <td>동아리</td> </tr>
                    </tbody>
                </table>
                <div className="t_homework datapanel wide_panel"><span className="panel_title">전체 과제</span></div>
                <div className="t_prepare datapanel wide_panel"><span className="panel_title">평가 계획</span></div>
            </div>
            <h1 className="datetime">준비중입니다.</h1>
            <div className="schedule">
                <Calendar onClickDay={dayclick}></Calendar>
                <div className="daily_info">
                    <div className="d_timetable datapanel"><span className="panel_title">시간표</span></div>
                    <div className="d_lunch datapanel"><span className="panel_title">급식</span></div>
                    <div className="d_homework datapanel"><span className="panel_title">준비물/과제</span></div>
                    <div className="d_special datapanel"><span className="panel_title">수행평가/행사</span></div>
                </div>
            </div>
        </>
    );
};

export default Page;