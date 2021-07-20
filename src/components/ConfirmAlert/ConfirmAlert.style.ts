import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  confirmContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 100,
    zIndex: 3,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  imgConfirmAlert:{
    width: '90%',
  }
});
