import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Sync from '@material-ui/icons/Sync';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            flexGrow: 0,
            marginRight: theme.spacing(3)
        },
        grow: {
            flexGrow: 1,
        }
    }),
);

const MainPage: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="xl">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2" className={classes.title}>Test Page</Typography>
                    <div className={classes.grow} />
                    <IconButton size='small' color='inherit'>
                        <Sync />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper>
                        Main Section
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={3}>
                    <Paper>
                        Sidebar
                            <Button>Primarys</Button>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );

};

export default MainPage;