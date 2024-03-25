import React from 'react';
import Switch from '@material-ui/core/Switch';
import './style/resetSwitch.css'
import { useDispatch } from 'react-redux';
import { modeClass, rowClass } from '../../Redux/actions';

export default function Switches() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const dispatch = useDispatch()

  const handleChange = (event) => {
    if(state.checked === true){
      setState({checked: false})
      dispatch(modeClass("dark__mode"))
      dispatch(rowClass("dark__modeRow"))
    }
    else if(state.checked === false){
      setState({checked: true})
      dispatch(modeClass("light__mode"))
      dispatch(rowClass("light__modeRow"))
    }
  };

  // for demo
  // if(state.checked === false){
  //   // console.log('dark mode on')
  // }
  // else if(state.checked === true){
  //   console.log('light mode on')
  // }

  return (
    <div className="darkMode__container">
      <p className="darkMode__text">Dark Mode</p>
      <Switch
        className="reset__switch"
        checked={state.checkedA}
        onChange={handleChange}
        color="primary"
        name="checkedA"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
    </div>
  );
}
