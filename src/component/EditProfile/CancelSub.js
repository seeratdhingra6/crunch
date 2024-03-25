import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';
import './style/resetDialog.css'
import { useHistory } from 'react-router';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const history = useHistory()

  const cancelSub = () =>{
      history.push("/")
  }

  return (
    <div>
      <Button className="reset__dialog" variant="outlined" color="primary" onClick={handleClickOpen}>
        Cancel Subscription
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" style={{fontWeight : "600"}}>
          Are you sure you no longer want access to information on hundreds of  playlists your audience are listening to?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className="resetDialog__disagree" onClick={cancelSub} color="primary">
          Cancel my subscription
          </Button>
          <Button className="resetDialog__agree" onClick={handleClose} color="primary">
          Keep me subscribed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
