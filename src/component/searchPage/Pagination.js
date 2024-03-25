import React from "react";
import { usePagination } from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import "./style/resetPagination.css";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
  },
});

export default function Pagination() {
  const store = useSelector(store => store)
  const classes = useStyles();
  const { items } = usePagination({
    count: 10,
  });

  // console.log('this is pagination items', items)

  return (
    <nav className={`pagination__container ${store.currClass.RTClass}`}>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                className="pagination__btn"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                  backgroundColor: selected ? "#5D515B" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button className="pagination__next" type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
