import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import { Row, Col } from 'react-native-easy-grid';
import { Card } from 'react-native-shadow-cards';

class Driverpackages extends React.Component {

  static navigationOptions = {
    headerStyle: { backgroundColor: 'white', borderBottomWidth: 0 },
    headerShown: true,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Col style={styles.row}>
            {/* first card start */}
            <Card style={styles.card}>
              <TouchableOpacity>
                <Row>
                  <Col style={styles.colcard}>
                    <Image style={styles.logo} source={require('../../../../assets/weather.png')}></Image>
                  </Col>
                  <Col style={styles.colcard2}>
                    <Text style={styles.heading}>Day Time</Text>
                    <Text style={styles.description}>This service will be provided to
                    the user during the office time.
                  (i.e. 9am - 6pm)</Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Card>
            {/* first card end */}

            <Card style={styles.card}>
              <TouchableOpacity>
                <Row>
                  <Col style={styles.colcard}>
                    <Image style={styles.logo3} source={require('../../../../assets/night.png')}></Image>
                  </Col>
                  <Col style={styles.colcard2}>
                    <Text style={styles.heading}>Night Time</Text>
                    <Text style={styles.description}>This service will be provided to
                    the user after the office time.
                    (i.e. 6am - 2pm)</Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
              <TouchableOpacity>
                <Row>
                  <Col style={styles.colcard}>
                    <Image style={styles.logo3} source={require('../../../../assets/time.png')}></Image>
                  </Col>
                  <Col style={styles.colcard2}>
                    <Text style={styles.heading}>One Week</Text>
                    <Text style={styles.description}>This service will be provided to
                      the user for a week.</Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Card>

                       <Card style={styles.card}>
              <TouchableOpacity>
                <Row>
                  <Col style={styles.colcard}>
                    <Image style={styles.logo3} source={require('../../../../assets/15.png')}></Image>
                  </Col>
                  <Col style={styles.colcard2}>
                    <Text style={styles.heading}>Fifteen Days</Text>
                    <Text style={styles.description}>This service will be provided to
                    the user for fifteen days.</Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Card>

            <Card style={styles.card}>
              <TouchableOpacity>
                <Row>
                  <Col style={styles.colcard}>
                    <Image style={styles.logo3} source={require('../../../../assets/month.png')}></Image>
                  </Col>
                  <Col style={styles.colcard2}>
                    <Text style={styles.heading}>One Month</Text>
                    <Text style={styles.description}>This service will be provided to 
                    the user for a month.</Text>
                  </Col>
                </Row>
              </TouchableOpacity>
            </Card>

          </Col>
          <Row style={{ height: 20 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2EDC6'
  },
  card: {
    left: '2%',
    width: '95%',
    borderRadius: 10,
    height: 130,
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  row: {
    height: '100%'
  },
  logo: {
    height: 95,
    width: 95,
    rotation: 225
  },
  logo3: {
    height: 95,
    width: 95,
  },
  colcard: {
    marginLeft: '3%',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colcard2: {
    width: '70%',
    marginLeft: '3%',
    justifyContent: 'center'
  },
  heading: {
    fontFamily: 'courier new',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    width: '85%',
    fontFamily: 'courier new',
    color: '#777',
    fontSize: 13,
    fontWeight: 'bold'
  }
})

export default Driverpackages;
