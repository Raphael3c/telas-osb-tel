import React from "react";
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight} from "@material-ui/icons";
import { Button } from "components/Button";
import { useStyles } from "./ProcessPageFooter.style";

interface ProcessPageFooterProps {
  primaryButton?: React.ReactNode;
}

export const ProcessPageFooter: React.FC<ProcessPageFooterProps> = ({
  primaryButton,
}) => {
  const styles = useStyles();
  const history = useHistory();

  const onPreviousButtonClick = () => history.goBack();

  const onNextButtonClick = () => history.goBack();

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<KeyboardArrowLeft color="secondary" />}
        onClick={onPreviousButtonClick}
      >
        Voltar
      </Button>
      <Button
        palette="primary"
        endIcon={<KeyboardArrowRight color="secondary" />}
        onClick={onNextButtonClick}
      >
        Próximo
      </Button>
    </Box>
  );
};
