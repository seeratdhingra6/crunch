import React, {useEffect} from "react";
import "./style/resultBox.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import DoneIcon from '@material-ui/icons/Done';

const ResultBox = ({spinner}) => {

  const store = useSelector(store => store)
  useEffect(()=>{
    // console.log('this is store >>>', store)
  })


  // console.log(store.inputValue.finalValue)

  return (
    <div className={`resultBox__container ${store.currClass.RBClass}`}>
      <div className="resultBox__infoBox">
        <p className={`resultBox__count ${store.currClass.searchClass}`}>6326 results found for “{store.inputValue.finalValue}”</p>
        <p className="resultBox__processing">Process
        <Spinner className={`${spinner} ${store.currClass.spinnerClass}`} animation="border" role="status"></Spinner>
        <DoneIcon className={store.currClass.searchClass} style={{color : "green", marginLeft: "5px"}} />
        </p>
        <div className={`resultBox__download resultsm__hide ${store.currClass.searchClass}`}>
          <div className="resultBox__combo">
            <GetAppIcon />
            <p className="resultBox__downloadText">Export.xls</p>
          </div>
          <div className="resultBox__combo">
            <GetAppIcon />
            <p className="resultBox__downloadText">Export.csv</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
