import {bindActionCreators} from '@reduxjs/toolkit';
import {Content} from 'native-base';
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {styles} from './styles';
import {getUsers} from '../../actions';
import {connect} from 'react-redux';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount = () => {
    this.initApi();
  };

  initApi = () => {
    const { getUsers } = this.props;
    getUsers();
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { getUsersResult } = this.props;

    if (getUsersResult !== null && prevProps.getUsersResult !== getUsersResult) {
      this.setState({ users: getUsersResult });
    }
  }

  render() {
    const {users} = this.state;
    return (
      <View style={styles.wrapperContainer}>
        <ImageBackground
          source={{
            uri: 'https://image.freepik.com/free-photo/color-two-tone-blue-yellow-paper-background_23-2147981644.jpg',
          }}
          style={styles.imgWrapper}
          resizeMode={'cover'}>
          <View style={styles.containerContent}>
            <Content>
              {users.map((data, index) => {
                return <Text key={index}>{data.title}</Text>;
              })}
            </Content>
          </View>
          <View style={styles.navigation}></View>
        </ImageBackground>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    getUsersResult: state.getUsers.result,
    getUsersError: state.getUsers.error,
    getUsersLoading: state.getUsers.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getUsers,
    },
    dispatch,
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
