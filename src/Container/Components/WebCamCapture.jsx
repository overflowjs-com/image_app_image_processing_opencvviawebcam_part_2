import React from 'react';
import Webcam from 'react-webcam';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default class WebCamCaptureContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videoConstants: {
                width: 1200,
                height: 720,
                facingMode: 'user'
            }
        }

    }

    captureImage() {

        this.props.saveCapturedImage(this.refs.webcam.getScreenshot());
    }

    render() {

        return (
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Webcam
                            ref="webcam"
                            audio={false}
                            // height={350}
                            screenshotFormat="image/jpeg"
                            // width={350}
                            videoConstraints={this.state.videoConstants}
                            />
                       
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" align="center" color="primary" onClick={() =>  this.captureImage()} >
                            Capture
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}