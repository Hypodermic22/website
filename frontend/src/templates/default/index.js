import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext as dndContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import AppBar from 'material-ui/AppBar';
import ReorderIcon from 'material-ui/svg-icons/action/reorder';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Settings from '../../components/molecules/settings';
import styles from './styles';
import actions from './actions.js';


const mapStateToProps = (state) => ({
  settingsOpen: state.settings.open,
});

@connect(mapStateToProps, actions)
class Template extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    close: PropTypes.func.isRequired,
    settingsOpen: PropTypes.bool,
    toggleSettings: PropTypes.func.isRequired,
  }

  static defaultProps = {
    settingsOpen: false,
  }

  componentWillMount() {
    this.props.close();
  }

  render() {
    return (
      <div style={styles.content}>
        <Drawer
          openSecondary
          open={this.props.settingsOpen}
        >
          <MenuItem
            primaryText="&nbsp;"
            rightIcon={<CloseIcon onClick={this.props.toggleSettings} />}
          />
          <Settings />
        </Drawer>

        <AppBar
          title="Tilda Center"
          iconElementLeft={
            <IconButton onTouchTap={this.handleHomeTouchTap} >
              <HomeIcon />
            </IconButton>
          }
          iconElementRight={
            <IconButton onTouchTap={this.props.toggleSettings} >
              <ReorderIcon />
            </IconButton>
          }
        />
        {this.props.children}
      </div>
    );
  }
}

export default dndContext(HTML5Backend)(Template);
