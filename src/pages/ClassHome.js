import React, { Component } from "react";
import Calendar from 'react-calendar';
import $ from 'jquery';
import {
    BrowserView,
    MobileView,
} from "react-device-detect";
import 'react-calendar/dist/Calendar.css';

let api_url = "https://api1.dacon.xyz";

function dayclick(value, event) {
    let year = value.getYear() + 1900;
    let month = value.getMonth() + 1;
    let date = value.getDate();

    document.getElementsByClassName("datetime")[0].innerHTML = year + "년 " + month + "월 " + date + "일 정보";
}

class Page extends Component {
    constructor() {
        super();
        this.state = { prepare: {} }
    }

    componentDidMount() {
        let id = this.props.match.params["id"];

        $.ajax({
            url: api_url + "/upcoming/" + id,
            type: 'GET',
            dataType: 'json',
            crossDomain: true,
            success: function(res) {
                document.getElementsByClassName("classname")[0].innerHTML = id.toUpperCase() + " 알림판";

                let prepare = document.getElementsByClassName("t_homework")[0];
                let special = document.getElementsByClassName("t_special")[0];

                for (let i in res.prepare) {
                    prepare.innerHTML += "<br><span class=\"date_view\">" + i + "</span>";
                    for (let j in res.prepare[i]) {
                        prepare.innerHTML += "<br><span class=\"article_thumb\">" + res.prepare[i][j] + "" + "</span>";
                    }
                }
                for (let i in res.special) {
                    special.innerHTML += "<br><span class=\"date_view\">" + i + "</span>";
                    for (let j in res.special[i]) {
                        special.innerHTML += "<br><span class=\"article_thumb\">" + res.special[i][j] + "" + "</span>";
                    }
                }
            }
        });
    }

    render() {
        return (
            <>
                <h1 className="classname">반</h1>
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
                <div className="t_homework datapanel wide_panel">
                    <span className="panel_title">전체 과제</span>
                </div>
                <div className="t_special datapanel wide_panel"><span className="panel_title">평가 계획</span></div>
                <h1 className="datetime">준비중입니다.</h1>
                <Calendar onClickDay={dayclick}></Calendar>
                <div className="d_lunch datapanel"><span className="panel_title">급식</span></div>
                <div className="d_homework datapanel"><span className="panel_title">준비물/과제</span></div>
                <div className="d_special datapanel"><span className="panel_title">수행평가/행사</span></div>
            </>
        );
    }
};

export default Page;