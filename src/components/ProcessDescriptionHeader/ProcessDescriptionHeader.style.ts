import { makeStyles } from "@material-ui/core";
import { textColors } from "_config/theme";

export const useStyles = makeStyles({
  title: {
    fontWeight: 700,
    fontSize: 20,
    color: textColors.primary,
    marginLeft: 16,
    lineHeight: '23,44px',
    marginBottom: '28px',
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    color: textColors.primary,
    marginLeft: 16,
    marginTop: 8,
  },
  description: {
    color: textColors.primary,
    fontWeight: 500,
    fontSize: 14,
    lineHeight: "16px",
    marginLeft: 16,
    paddingBottom: 29
  },
  containerDescriptionHeader:{
    backgroundColor: '#F9F9F9',
    paddingTop: 21,
  }
});