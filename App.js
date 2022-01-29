import { Component } from 'react'
import { StatusBar,Text, View, TextInput, FlatList} from 'react-native';

let database  = [
  {indonesia: 'Ayam', english: 'Chiken'},
  {indonesia: 'Anjing', english: 'Dog'},
  {indonesia: 'Kucing', english: 'Cat'},
  {indonesia: 'Kelinci', english: 'Rabbit'},
  {indonesia: 'Ikan', english: 'Fish'},
  {indonesia: 'Hiu', english: 'Sark'},
  {indonesia: 'Paus', english: 'Whale'},
  {indonesia: 'Ular', english: 'Snake'},
  
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      Text: '',
      data: database
    };
  }

search = () => {
  let data = database;
data = data.filter(item => item.indonesia.toLocaleLowerCase().includes(this.state.text.toLocaleLowerCase()));
this.setState({
  data:data
})
}


  render() {
    return (
      <View style= {{flex: 1}}>
      <StatusBar backgroundColor="#0288d1" barStyle="light-content"/>
      <View style={{padding: 20, backgroundColor: '#03a9f4', elevation: 1}}>
      <Text style={{color:'#fff', fontWeight:'bold', fontSize: 18, textAlign:'center'}}>Kamusku</Text>
      </View>

      <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, marginVertical: 20, marginHorizonta: 10, borderRadius: 10}}
      onChangeText={text => this.setState({text:text})}
      value={this.state.text}
      placeholder ='Masukkan kata kunci'
      onKeyPress={() => this.search()}
      />

      <FlatList
      data={this.state.data}
      renderItem={({item})=>
      
      <View style={{borderWidth: 1, borderRadius: 3, marginVertical: 5, marginHorizontal: 20, padding: 10}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.indonesia}</Text>
      <Text style={{fontSize: 16, marginTop: 5}}>{item.indonesia}</Text>
      </View>
      }
      
      keyExtractor={item => item.indonesia}
      />

      </View>
      
     
    );
  }
}

export default App;
