import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Divider, CardHeader } from '@material-ui/core';
import {api} from '../utils/Api';

export default class ImageFilters extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            smoothing_effects: [
                {label: "Blur", key: "blur"},
                {label: "Gaussian Blur", key: "gaussian_blur"},
                {label: "Median Blur", key: "median_blur"},
                {label: "Bilateral Filter", key: "bilateral_filter"},
            ],
            threshold_effects: [
                {label: "Simple Threshold", key: "simple_threshold"},
                {label: "Adaptive Threshold", key: "adaptive_threshold"},
                {label: "Otsu's Threshold", key: "otasu_threshold"},
            ],
            contour_effects: [
                {label: "Find all contours", key: "find_all_contours"},
                {label: "Find filtered contours", key: "find_filtered_contours"},
            ],
            render: {}
        }
    }

    componentWillReceiveProps(nextProps) {
       this.setState({render: {}})
    }


    applyEffect(effect) {

        api("apply_filter", {
            type: effect,
            data: this.props.image_data
        }).then((response) => {
            
            const filtered_data = response;

            const render = this.state.render;
            render[effect] = filtered_data.data;

            this.setState({render});
        });
    }

    getFilterData(effect) {
        
        if(this.state.render[effect]) {
            return this.state.render[effect];
        }

        return this.props.image_data;
    }

    render() {

        if (!this.props.image_data) {
            return (
                <div></div>
            )
        }

        return (
            <Grid container>
                {this.state[this.props.type].map((effect, i) => {
                    return (
                        <Grid item md={4} key={i}>
                            <Card>
                                <CardHeader title={`${effect.label} Image`}>
                                </CardHeader>
                                <CardContent>
                                    <img src={this.getFilterData(effect.key)} alt="" height="300px" />
                                    <Button variant="contained" align="center" color="secondary" onClick={() => this.applyEffect(effect.key)} >
                                        Generate
                                    </Button>
                                </CardContent>
                            </Card>
                            <Divider />
                        </Grid>

                    )
                })}
            </Grid>
        )
    }
}