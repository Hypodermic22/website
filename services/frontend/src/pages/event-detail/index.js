import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Template from 'templates/default'
import titleActions from 'templates/default/actions'
import errorActions from 'templates/empty/actions'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import styles from './styles'

const mapStateToProps = () => ({})


class EventDetail extends Component {
  componentWillMount() {
    this.props.requestTitle('Event Detail')
  }

  handleError = () => {
    this.props.requestError('Event Detail')
  }

  render() {	  
    return (
      <Template>
      <div style={styles.backgroundShit}>
      	 {/* <div align='center' >
			<Paper elevation={5} style={styles.titleText}>
				<Typography component="h1" variant="capiton" style={styles.titleText.typography} >
				U izvedbi Tilda Centra dogadja se najnoviji Python Serbia Conference<br />
				</Typography>
				<Typography component="p">
				PySer je jednodnevna konferencija posvecena svim stvarima sa Python tematikom.
				</Typography>
			</Paper>
			
			<Card style={styles.titleText} >
				<CardContent>
				<Typography component= "h1" variant="capiton" color="textPrimary" >
				Datum: 32gi Decembar 2022.<br/>Vreme: od 12h dok se boje ne rastope
				</Typography>
				</CardContent>
			</Card>
		</div> */}
   
   <div align= 'center'>   
    <Card style={styles.cardStuff} >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          ovde ide neki tekst
        </Typography>
        <Typography variant="h5" component="h2">
          See You There!
        </Typography>
        <Typography color="textSecondary">
          i ovde mozda ide neki tekst
        </Typography>
        <Typography component="p">
          <br />
          "ovde mozda mapa?"
        </Typography>
      </CardContent>
		<CardActions>
        <Button size="small">link ka vecoj mapi</Button>
		</CardActions>
		</Card>
		<Button variant="contained" component={Link} to="/landing">
          Back to Landing
		</Button> 
		</div>
    </div>
    </Template>
  );  
  
  }
}


EventDetail.propTypes = {
  requestError: PropTypes.func.isRequired,
  requestTitle: PropTypes.func.isRequired,
}


export default connect(mapStateToProps, { ...errorActions, ...titleActions })(
  EventDetail,
)
