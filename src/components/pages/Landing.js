import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ScrollView
} from 'react-native';
import {
  Col,
  Row
} from 'react-native-easy-grid';
import { Card } from 'react-native-shadow-cards';

class Landing extends React.Component {
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
              <Image style={styles.img} source={require('../../../assets/service.png')}></Image>
            </Col>
          </Row>
          {/* Ending Header of the application */}
          <ScrollView>
          <Row style={{top: '3%'}}>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/people.png')}></Image>
                <Text style={styles.cardtext}>Driver</Text>
              </Card>
            </Col>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/sanitize.png')}></Image>
                <Text style={styles.cardtext}>Sanitize</Text>
              </Card>
            </Col>
          </Row>

          <Row style={{top: '3%'}}>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/avatar.png')}></Image>
                <Text style={styles.cardtext}>Security</Text>
              </Card>
            </Col>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/mop.png')}></Image>
                <Text style={styles.cardtext}>House Cleaning</Text>
              </Card>
            </Col>
          </Row>
          <Row style={{top: '3%'}}>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/bodyguard.png')}></Image>
                <Text style={styles.cardtext}>BodyGuard</Text>
              </Card>
            </Col>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/spray.png')}></Image>
                <Text style={styles.cardtext}>Cleaning Solution</Text>
              </Card>
            </Col>
          </Row>

          <Row style={{top: '3%'}}>
            <Col>
              <Card style={styles.card}>
                <Image style={styles.img} source={require('../../../assets/bodyguard.png')}></Image>
                <Text style={styles.cardtext}>BodyGuard</Text>
              </Card>
            </Col>
          </Row>
          </ScrollView>
         

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
  img: {
    height: 100,
    width: 100
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
    left: '9%',
    width: '77%',
    borderRadius: 15,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardtext: {
    left: '5%',
    fontFamily: 'courier new',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000'
  },
})


export default Landing;