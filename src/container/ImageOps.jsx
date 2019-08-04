import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import WebCamCapture from '../components/WebCamCapture';
import ImageFilters from '../components/ImageFilters';

export default class ImageOpsContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.state ={
            image_data: null
        };
    }

    saveCapturedImage(data) {
        this.setState({ image_data: data });
    }


    render() {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p">
                                    Image processing part-2
                                </Typography>
                                <Typography variant="h6" color="textPrimary" component="h6">
                                    CAMERA PREVIEW
                                </Typography>
                                <WebCamCapture saveCapturedImage={(data) => this.saveCapturedImage(data)}/>
                            </CardContent>
                        </Card>
                    </Grid>
                    {this.state.image_data && <Grid item md={12}>
                        <CardHeader title={`Captured Image`}>
                        </CardHeader>
                        <img src={this.state.image_data} alt="" height="300px"/>
                    </Grid>}
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="textPrimary" component="h6">
                                    IMAGE SMOOTH FILTERS
                                </Typography>
                                <ImageFilters image_data={this.state.image_data} type="smoothing_effects" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="textPrimary" component="h6">
                                    THRESHOLDING FILTERS
                                </Typography>
                                <ImageFilters image_data={this.state.image_data} type="threshold_effects" />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="textPrimary" component="h6">
                                    CONTOUR FILTERS
                                </Typography>
                                <ImageFilters image_data={this.state.image_data} type="contour_effects" />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}
