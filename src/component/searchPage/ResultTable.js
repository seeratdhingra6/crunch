import React from "react";
import "./style/resultTable.css";
import TableRow from "./TableRow"
import { useSelector } from "react-redux";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const ResultTable = () => {

  const store = useSelector(store => store)
  // console.log('this is store updated',store )
  // console.log('current value of RT', store.currClass.RTClass)

  return (
    <div className={`resultTable__container ${store.currClass.RTClass} ${store.currClass.modeClass}`}>
      <table className="listAccordion__table">
        <thead>
          <tr className="listAccordion__tableHead">
            <th className="thResult__playlist listAccordion__helper">
              Playlist
            </th>
            <th className="thResutl__followers listAccordion__helper">
              <div className="d-flex">
              Followers 
              <ArrowDropDownIcon className="point__color" />
              </div>
            </th>
            <th className="thResutl__track listAccordion__helper ">
              <div className="d-flex">
              Tracks
              <ArrowDropDownIcon className="point__color" />
              </div>
            </th>
            <th className="thResutl__popularity listAccordion__helper">
              <div className="d-flex">
              Popularity
              <ArrowDropDownIcon className="point__color" />
              </div>
            </th>
            <th className="thResutl__last listAccordion__helper">
              <div className="d-flex">
              Last Modified
              <ArrowDropDownIcon className="point__color" />
              </div>
            </th>
            <th className="thResutl__public listAccordion__helper">
              <div className="d-flex">
              Public
              <ArrowDropDownIcon className="point__color" />
              </div>
              </th>
            <th className="thResutl__email listAccordion__helper">
              <div className="d-flex">
              Email
              <ArrowDropDownIcon className="point__color" />
              </div>
              </th>
            <th className="thResutl__link listAccordion__helper">
              <div className="d-flex">
              Links
              <ArrowDropDownIcon className="point__color" />
              </div>
              </th>
            <th className="thResutl__social listAccordion__helper">
            <div className="d-flex">
              Social
              <ArrowDropDownIcon className="point__color" />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
