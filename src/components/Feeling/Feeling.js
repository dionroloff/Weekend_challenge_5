import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from './../Review/Review.js';
//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Feelings extends Component {

    constructor() {
        super();
        this.state = {
            response: '',
        }
    }

    //After the user inputs a number and clicks submit, payload is dispatched
    //to feelingsReducer in index.js
    handleNextButton = (event) => {
        event.preventDefault();
        if (this.state.response !== '') {
            const action = { type: 'SUBMIT_FEELINGS', payload: this.state.response }
            this.props.dispatch(action);
            this.props.history.push('/understanding');
        } else {
            alert('Please fill in a response.')
        }
    } //end handleNextButton

    handleChange = (event) => {
        this.setState({
            response: event.target.value,
        })
    } //end handleChange

    render() {
        console.log(this.state.response);
        return (
            <Grid container justify="container">
                <Grid item xs={12}>
                    <Card>
                        <CardContent>

                            <Typography color="textPrimary">
                                <h1>How are you feeling today?</h1>
                            </Typography>

                            <Typography variant="h5" component="h2">
                                <TextField
                                    onChange={this.handleChange}
                                    id='feelingInput'
                                    label='Feeling?'
                                    placeholder='From 1 and 5'
                                    multiline margin='normal'
                                    require />
                            </Typography>

                        </CardContent>
                        <CardActions>
                        <Grid container justify="center">
                            <Button id='feeling-next-btn' onClick={this.handleNextButton} variant='contained' color='primary'>
                                Next
                            </Button>
                        </Grid>
                        </CardActions>

                    </Card>
                    <Card>
                        <CardContent>
                            <Review />
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        )
    }

}

const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore,
});

export default connect(mapReduxStoreToProps)(Feelings);