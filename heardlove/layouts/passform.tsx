'use client'
import React, { useEffect, useState } from "react";
import "@/stylesheet/passform.css";
interface PassFormProps {
    onClose: () => void;
}

const PassForm: React.FC<PassFormProps> = ({onClose}) => {
    const fake_pass_word = "iuanhbap";
    const pass_word = "10102009";
    const [err1, setErr1] = useState(false);
    const [err2, setErr2] = useState(false);
    const [err3, setErr3] = useState(false);
    const [err4, setErr4] = useState(false);
    const [valuePass, setValuePass] = useState("");
    const [checkBoxAccept, setCheckBoxAccept] = useState(false);
    const [checkBoxReject, setCheckBoxReject] = useState(false);
    const [disableAccept, setDisableAccept] = useState(false);
    const [disableReject, setDisableReject] = useState(false);
    const [unLock, setUnLock] = useState(false);
    const followChangePass = (e: any) => {
        const value = e.target.value;
        setValuePass(value)
    };
    const followCheckAccept = (e: any) => {
        setCheckBoxAccept(e.target.checked);
    };
    const followCheckReject = (e:any) => {
        setCheckBoxReject(e.target.checked);
    };
    useEffect(() => {
        checkBoxAccept ? setDisableReject(true) : setDisableReject(false);
        checkBoxReject ? setDisableAccept(true) : setDisableAccept(false);
    }, [checkBoxAccept, checkBoxReject]);
    useEffect(() => {
        checkBoxReject ? setErr2(true) : setErr2(false);
    },[checkBoxReject]);
    useEffect(() => {
        if( checkBoxAccept || checkBoxReject) {setErr3(false);}
    }, [checkBoxAccept, checkBoxReject]);
    useEffect(() => {
        if(valuePass === pass_word && checkBoxAccept) {
            setUnLock(true);
        } else{
            setUnLock(false);
        }
    }, [valuePass, checkBoxAccept])
    const handleSubmit = () => {
        valuePass === "" && setErr1(true);
        valuePass !== "" && setErr1(false);
        !checkBoxAccept && !checkBoxReject && setErr3(true);
        if( checkBoxAccept || checkBoxReject) {setErr3(false);}
        if (valuePass === "iuanhbap" && checkBoxAccept) {
            alert("Hí Hí! Trôn Trôn Việt Nam. PassWord là ngày tháng năm sinh của em bé đóa :3");
        }
        if (valuePass !== pass_word || checkBoxAccept) {
            setErr4(true);
        }
        if(valuePass !== "" && checkBoxReject) {
            alert("Cưới anh mới mở được quà :3");
        }
    };
    return (
        <div className="pass-form">
            <button onClick={onClose} className="close-btn">close</button>
            <div className="form-password">
                <label htmlFor="password">&#42; Để mở được hộp quà, em bé nhập pass là : <span className="pass-display">{fake_pass_word}</span></label>
                <input onChange={followChangePass} type="text" name="password" id="password" />
                <span className="err-pass">{err1 ? "* Không để trống mục này" : ""}</span>
                <span className="err-pass">{err4 ? "* Sai mật khẩu" : ""}</span>
                <div className="terms">
                    <div className="terms-item">
                        <input disabled={disableAccept} onChange={followCheckAccept} type="checkbox" name="" id="accept" />
                        <label className="checkbox" htmlFor="accept"></label>
                        <label htmlFor="accept">Đồng ý cưới abe :3</label>
                    </div>
                    <div className="terms-item">
                        <input disabled={disableReject} onChange={followCheckReject} type="checkbox" name="" id="reject" />
                        <label className="checkbox" htmlFor="reject"></label>
                        <label htmlFor="reject">Cưới anh Chí Công &#9785;</label>                    
                    </div>
                    <div className="err2">{err2 ? "Chạ iu anh :((" : ""}</div>
                    <div className="err3">{err3 ? "Chọn một trong hai đi :))" : ""}</div>
                </div>
                <button onClick={handleSubmit} className="btn-accept">
                    {unLock ? 
                        (
                            <a href="./heart">Đồng ý</a>
                        ) : 
                        "Đồng ý"
                   }
                </button>
            </div>
        </div>
    )
}

export default PassForm;