import styled from "styled-components";

export const AlarmDiv = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    border-radius: 14px;
`

export const ChatDiv = styled.div`
    position: absolute;
    width: 380px;
    height: 500px;
    background-color: #F5F6F8;
    left: 380px;
    border-radius: 14px;
    display: flex;

    img {
        padding-top : 20px;
        padding-left : 20px;
        width : 30px;
        height : 30px;
        background-color: white;
        
    }

    .Chat_in_name {
        padding-top : 24px;
        padding-left : 20px;
        font-size: 18px;
        font-weight : bold;
        background-color: white;
        height : 45px;
        width : 310px;
    }
`

export const AlarmTitle = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;

    & > div {
        cursor: pointer;
        flex: 1;
        text-align: center;
        height: 64px;
        line-height: 64px;
        background-color: white;
    }

    .bar {
        transition: 0.3s;
        position: absolute;
        width: 100px;
        height: 3px;
        background-color: #0085ff;
        top: 60px;
    }

`

export const AlarmForm = styled.div`
    position: relative;

    & > div {

    }

`

export const AlarmSubForm = styled.div`
    position: absolute;
    width: 380px;

    &.left {
        padding: 25px;
        left: 0px;
    }

    &.right {
        left: 380px
    }
`

export const AlarmList = styled.div`
    border-radius: 15px;
    width: 290px;
    padding : 18px;
    background : #FFFFFF;
    box-shadow: 0px 0px 5px 1px lightgray;
    margin-bottom : 25px;
`

export const AlarmRow = styled.div`
    display: flex;
    padding : 5px 0px 0px 5px;

    .Alarm_kind {
        font-weight : bold;
        font-size : 15px;
        padding-right: 15px;
    }

    .Alarm_time {
        color : #828282;
        font-size : 15px;
    }
`

export const AlarmRow2 = styled.div`
    padding : 0px 0px 5px 5px;

    .Alarm_content {
        padding-top : 15px;
        font-size : 18px;
    }
`

export const ChattingList = styled.div`
    background:#FFFFFF;
    display: flex;
`

export const ChattingOne = styled.div`
    background:white;
    height:90px;
    width: 90px;
    display: flex;

    img {
        width: 70px;
        height: 70px;
        margin:10px;
        border-radius: 15px;
    }
`

export const ChattingTwo = styled.div`
    background:white;
    width : 190px;
    padding-left : 10px;

    .Chat_name {
        margin-top : 20px;
        font-size: 18px;
        font-weight : bold;
    }

    .Chat_content {
        margin-top : 8px;
        font-size: 15px;
    }
`

export const ChattingThree = styled.div`
    font-size: 15px;
    padding-top : 20px;
    width:90px;
    text-align:center;
    background:white;

    .Chat_message {
        margin : 10px 15px; 0px; 0px;
        font-size: 15px;
        color : white;
        background : #0085FF;
        border-radius: 30px;
        height:20px;
        width:60px;
    }
`