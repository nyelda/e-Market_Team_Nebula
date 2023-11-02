import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      query: null,
      dataSource: [],
      dataBackup: [],
      isModalVisible: false,
    };
  }


  componentDidMount() {
    var data = [
      {
        name: 'T-Square',
        author: 'Daniel Suyat',
        //img: require('./assets/1.jpg'),
        description:
          'T-Square from TIPC 3rd Year Architecture.',
      },
      {
        name: 'If It Bleeds',
        author: 'Stephen King',
        //img: require('./app/assets/icon.png'),
        description:
          'From #1 New York Times bestselling author, legendary storyteller, and master of short fiction Stephen King comes an extraordinary collection of four new and compelling novellas—Mr. Harrigan’s Phone, ',
      },
      {
        name: 'The Book of Longings: A Novel',
        author: 'Sue Monk Kidd',
        //img: require('./app/assets/icon.png'),
        description:
          'Named a Most Anticipated Book of 2020 by O, the Oprah Magazine, Good Morning America/ABC-TV, Good Housekeeping, Bustle, TIME,',
      },
      {
        name: 'Masked Prey',
        author: 'John Sandford',
        //img: require('./app/assets/icon.png'),
        description:
          'Lucas Davenport investigates a vitriolic blog that seems to be targeting the children of U.S. politicians in the latest thriller by #1 New York Times-bestselling author John Sandford.',
      },
      {
        name: 'The Kennedy Curse',
        author: 'James Patterson',
        //img: require('./app/assets/icon.png'),
        description:
          'The Kennedys have always been a family of charismatic adventurers, raised to take risks and excel, living by the dual family mottos: To whom much is given,',
      },
      {
        name: 'Hidden Valley Road',
        author: 'Robert Kolker',
        //img: require('./app/assets/icon.png'),
        description:
          'Hidden Valley Road: Inside the Mind of an American Family is a 2020 non-fiction book by Robert Kolker.',
      },
    ];

    this.setState({
      dataBackup: data,
      dataSource: data,
    });
  }

  filterItem = event => {
    var query = event.nativeEvent.text;
    this.setState({
      query: query,
    });
    if (query == '') {
      this.setState({
        dataSource: this.state.dataBackup,
      });
    } else {
      var data = this.state.dataBackup;
      query = query.toLowerCase();
      data = data.filter(l => l.name.toLowerCase().match(query));

      this.setState({
        dataSource: data,
      });
    }
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  separator = () => {
    return (
      <View style={{ height: 10, width: '100%', backgroundColor: '#e5e5e5' }} />
    );
  };

  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#ff5b77" />
        <View style={styles.header}>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="gray"
            value={this.state.query}
            onChange={this.filterItem.bind(this)}
            style={styles.input}
          />
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={() => this.separator()}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.bookContainer}>
                <Image style={styles.image} source={item.img} />
                <View style={styles.dataContainer}>
                  <Text numberOfLines={1} style={styles.title}>
                    {item.name}
                  </Text>
                  <Text numberOfLines={4} style={styles.description}>
                    {item.description}
                  </Text>
                  <Text style={styles.author}>{item.author}</Text>
                  <TouchableOpacity
                    style={styles.iconNav}
                    onPress={this.toggleModal}
                  >
                    <AddIcon style={{ fontSize: 15, color: 'black' }} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modalContent}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Item has been added to My Bag</Text>
              <TouchableOpacity onPress={this.toggleModal}>
                <Text style={styles.modalText2}>Great!</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    width: '100%',
    backgroundColor: '#545F71',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
    paddingLeft: 10,
  },
  bookContainer: {
    flexDirection: 'row',
    padding: 5,
  },
  image: {
    height: 150,
    width: 90,
  },
  dataContainer: {
    padding: 10,
    paddingTop: 5,
    width: width - 100,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'lucida grande'
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  author: {
    fontSize: 16,
  },
  iconNav: {
    backgroundColor: '#EFD02C',
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  modalView: {
    backgroundColor: '#545F71',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 18,
    color: 'white'
  },
  modalText2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 18,
    color: 'black',
    backgroundColor: '#EFD02C',
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
  },
});