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
  },

  titlePassword: {
    color: '#EFEFEF',
    marginTop: "12px",
    fontWeight: "bold"
  },

  subtitlePassword: {
    color: '#EFEFEF',
    marginTop: "12px",
    fontWeight: 300,
  },

  passwordContainer: {
    display: 'flex'
  },

  inputPassword: {
    width: "45px",
    height: "55px",
    marginRight: "30px"
  }
});
