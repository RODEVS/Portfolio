import React from 'react';
import { Container, Typography, Grid, Avatar, ButtonBase } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const mainContentStyle = makeStyles(
    theme => ({
        heroContent: {
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(8, 8, 6),
            margin: theme.spacing(8, 8, 8),
          },
          heroButtons: {
            marginTop: theme.spacing(4),
          },
          bigAvatar: {
            width: 320,
            height: 320,
          },
    })
);

function MainContent(props) {
    const classes = mainContentStyle;

    return (
        <div className={classes.heroContent}>
            <Container>
                    <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase>
                        <Avatar alt="Remy Sharp" src="/public/images/avatar.jpg" className={classes.bigAvatar}/>
                        </ButtonBase>                        
                    </Grid>
                    <Grid item lg={8} container>
                        <Grid item container direction="column" spacing={2}>
                        <Grid item>
                            <Typography gutterBottom variant="subtitle1">
                            RODRIGO ALEXIS
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                            Computer Science Engineer by the Universidad Mexiquense del Bicentenario in Mexico. Actually working as a Project Leader
                            and Developer at GF Inbursa.    
                            He's always looking for great and new opportunities that help to boost his professional career.
                            </Typography>
                            </Grid>
                            <Grid item container direction="column" spacing={2}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>        
        </div>
    );

}

export default MainContent;