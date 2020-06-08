import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  Col,
  Row
} from 'react-native-easy-grid';
import { Card } from 'react-native-shadow-cards';

class Landing extends React.Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: 'white', borderBottomWidth: 0 },
    headerShown: false,
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={styles.container}>
          {/*  Starting Header of the application */}
          <Row style={{ marginTop: '3%', height: 100 }}>
            <Col style={{ width: '70%', top: '4%' }}>
              <Text style={styles.texthead}>Welcome Home</Text>
              <Text style={styles.secondarytext}>Hey, Welcome to the Garud Services. Choose your services.</Text>
            </Col>
            <Col style={{ width: '20%' }}>
              <Image style={styles.logo} source={require('../../../assets/service.png')}></Image>
            </Col>
          </Row>
          {/* Ending Header of the application */}

          {/* starting the body section */}
          <ScrollView>
            <Row style={{ marginTop: '3%' }}>
              <Col>
                <Card style={styles.card}>
                  <TouchableOpacity>
                    <Image style={styles.img} source={require('../../../assets/people.png')}></Image>
                    <Text style={styles.cardtext}>Driver</Text>
                  </TouchableOpacity>
                </Card>
              </Col>
              <Col style={{ marginLeft: '-6%' }}>
                <Card style={styles.card}>
                  <Image style={styles.img} source={require('../../../assets/sanitize.png')}></Image>
                  <Text style={styles.cardtext}>Sanitize</Text>
                </Card>
              </Col>
            </Row>

            <Row style={{ marginTop: '6%' }}>
              <Col>
                <Card style={styles.card}>
                  <Image style={styles.img} source={require('../../../assets/avatar.png')}></Image>
                  <Text style={styles.cardtext}>Security</Text>
                </Card>
              </Col>
              <Col style={{ marginLeft: '-6%' }}>
                <Card style={styles.card}>
                  <Image style={styles.img} source={require('../../../assets/mop.png')}></Image>
                  <Text style={styles.cardtext}>House Cleaning</Text>
                </Card>
              </Col>
            </Row>
            <Row style={{ marginTop: '6%' }}>
              <Col>
                <Card style={styles.card}>
                  <Image style={styles.img} source={require('../../../assets/bodyguard.png')}></Image>
                  <Text style={styles.cardtext}>BodyGuard</Text>
                </Card>
              </Col>
              <Col style={{ marginLeft: '-6%' }}>
                <Card style={styles.card}>
                  <Image style={styles.img} source={require('../../../assets/spray.png')}></Image>
                  <Text style={styles.fittext}>Cleaning Solution</Text>
                </Card>
              </Col>
            </Row>

            <Row style={{ marginTop: '5%', alignContent: 'center' }}>
              <Col>
                <Card style={styles.lastcard}>
                  <Image style={styles.img} source={require('../../../assets/bouncer.png')}></Image>
                  <Text style={styles.cardtext}>Bouncer</Text>
                </Card>
              </Col>
            </Row>
            <Row style={{ height: 30 }} />
            <Text style={styles.footer}>@CopyRight 2018-2020 Sulav Thapa</Text>
            <Row style={{ height: 10 }} />
          </ScrollView>
          {/* Ending the body section */}
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDC6'
  },
  logo: {
    height: 100,
    width: 100
  },
  img: {
    height: 80,
    width: 80
  },
  texthead: {
    left: '5%',
    fontFamily: 'courier new',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#707070'
  },
  secondarytext: {
    left: '5%',
    fontFamily: 'courier new',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#707070'
  },
  card: {
    top: '3%',
    left: '13%',
    width: '72%',
    borderRadius: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  cardtext: {
    top: '3%',
    fontFamily: 'courier new',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    textAlign:'center'
  },
  lastcard: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    height: 150,
    left: '30%',
    justifyContent: 'center',
  },
  fittext: {
    left: '5%',
    fontFamily: 'courier new',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
  footer:{
    fontFamily:'courier new',
    fontWeight: 'bold',
    fontSize: 12,
    color: '#777',
    textAlign: 'center'
  }
})


export default Landing;