import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  ConfirmPopUp: {
    position: "absolute",
    width: "100%",
    height: "212px",
    bottom: 0,
    zIndex: 2,
    background: "#323751",
    boxShadow: "0px -2px 2px rgba(0, 0, 0, 0.3)",
    borderRadius: "20px 20px 0px 0px",
    padding: 0,
  },

  titlePassword: {
    color: '#EFEFEF',
    marginTop: "12px",
    fontWeight: 700,
    marginLeft: '16px',
    fontSize: '16px',
  },

  subtitlePassword: {
    color: 'rgba(239, 239, 239, 0.7)',
    marginTop: "12px",
    fontWeight: 300,
    marginLeft: '16px',
    marginBottom: '11px',
  },

  passwordContainer: {
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
      justifyContent: 'space-evenly',
    }
  },

  inputPassword: {
    marginRight: "30px"
  }, 

  confirmLabel: {
    position: 'relative',
    right: '12px',
  },

  buttonPadding: {
    width: '79.85px',
    height: '25.63px',
  }

});
