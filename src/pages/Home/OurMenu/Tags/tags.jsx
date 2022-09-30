import { useState } from "react";

const Tags = ({tagName}) => {
    const [active1, setActive1] = useState('active');
    const [active2, setActive2] = useState('');
    const [active3, setActive3] = useState('');
    const [active4, setActive4] = useState('');
    const [active5, setActive5] = useState('');
    const [active6, setActive6] = useState('');
    const [active7, setActive7] = useState('');
    const [active8, setActive8] = useState('');
    const [active9, setActive9] = useState('');
    const [active10, setActive10] = useState('');


    const tagClick1 = (e) => {
        tagName(e);
        setActive1("active");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }

    const tagClick2 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("active");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick3 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("active");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick4 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("active");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick5 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("active");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick6 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("active");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick7 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("active");
        setActive8("");
        setActive9("");
        setActive10("");
    }
    const tagClick8 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("active");
        setActive9("");
        setActive10("");
    }

    const tagClick9 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("active");
        setActive10("");
    }

    const tagClick10 = (e) => {
        tagName(e);
        setActive1("");
        setActive2("");
        setActive3("");
        setActive4("");
        setActive5("");
        setActive6("");
        setActive7("");
        setActive8("");
        setActive9("");
        setActive10("active");
    }
    return(
        <ul className="selecton brdr-b-primary mb-70">
            <li onClick={(e) => tagClick1(e)}><span className={active1}><b>Pizza 24</b></span></li>
            <li onClick={(e) => tagClick2(e)}><span className={active2}><b>Calzone</b></span></li>
            <li onClick={(e) => tagClick3(e)}><span className={active3}><b>Drinks</b></span></li>
            <li onClick={(e) => tagClick4(e)}><span className={active4}><b>Sandwiches and Burgers</b></span></li>
            <li onClick={(e) => tagClick5(e)}><span className={active5}><b>Rolls</b></span></li>
            <li onClick={(e) => tagClick6(e)}><span className={active6}><b>Appetizers</b></span></li>
            <li onClick={(e) => tagClick7(e)}><span className={active7}><b>Pizza 31</b></span></li>
            <li onClick={(e) => tagClick8(e)}><span className={active8}><b>Soups</b></span></li>
            <li onClick={(e) => tagClick9(e)}><span className={active9}><b>Salads</b></span></li>
            <li onClick={(e) => tagClick10(e)}><span className={active10}><b>Pasta</b></span></li>
        </ul>
    )
}

export default Tags
