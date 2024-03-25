import React, {useState, useRef} from "react";
import "./style/searchComponent.css";
import ResultBox from "./ResultBox";
import ResultTable from "./ResultTable";
import Pagination from "./Pagination";
import SearchBox from "./SearchBox";

const SearchComponent = () => {
  const process = useRef(null)

  const [spinner, setSpinner] = useState("spinner__reset")

  // const dispatch = useDispatch()

  // const callApi = (e) => {
  //   e.preventDefault()
  //   setSpinner("spinner__reset")
  //   dispatch(changeRBClass("search__after"))
  // }

  return (
    <div className="searchComp__container">
      <SearchBox process = {process} />
      <ResultBox process={process} spinner={spinner} />
      <ResultTable />
      <Pagination />
    </div>
  );
};

export default SearchComponent;
