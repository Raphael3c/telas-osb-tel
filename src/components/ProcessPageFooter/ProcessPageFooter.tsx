import React from "react";
import { useHistory } from "react-router";
import { Box } from "@material-ui/core";
import arrowLeft from '_assets/img/arrowLeft.svg'
import arrowRight from '_assets/img/arrowRight.svg'
import { Button } from "components/Button";
import { useStyles } from "./ProcessPageFooter.style";

import './ProcessPageFooter.scss'

interface ProcessPageFooterProps {
  nextButtonOnClick: any
}

export const ProcessPageFooter: React.FC<ProcessPageFooterProps> = ({
  nextButtonOnClick
}) => {
  const styles = useStyles();
  const history = useHistory();

  const onPreviousButtonClick = () => history.goBack();

  return (
    <Box className={styles.buttonsWrapper}>
      <Button
        palette="secondary"
        startIcon={<img src={arrowLeft} width="8" height="14" className="marginArrowLeft" alt="Anterior"/>}
        onClick={onPreviousButtonClick}
      >
        <span className="letterSpacing"> Voltar </span> 
      </Button>
      <Button
        palette="primary"
        endIcon={<img src={arrowRight} width="8" height="14" className="marginArrowRight" alt="Próximo"/>}
        onClick={nextButtonOnClick}
      >
        <span className="buttonNext"> Próximo </span> 
      </Button>
    </Box>
  );
};
