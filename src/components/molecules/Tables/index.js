import React, { Component } from 'react';
import { StyleSheet, View,ImageBackground,ScrollView,Text, TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
 
class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Tanggal', 'Surat', 'Ayat', 'Pembimbing'],
      tableData: [
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],
        [<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>,<TextInput style={{height:50,color:'black'}}></TextInput>],

        
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <ScrollView>
        <View style={{marginTop:15,width:365,left:24,top:98,}}>
        <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.texthead}/>
          <Rows data={state.tableData} style={styles.head} textStyle={styles.textisi}/>
        </Table>
      </View>
      </ScrollView>
    )
  }
}
 
const styles = StyleSheet.create({
  head: { height: 25, backgroundColor: 'white'},
  texthead: { margin: 2 , textAlign:"center", fontSize:12, color:'#009BB9'},
  textisi: { margin: 2 , textAlign:"center", fontSize:12, color:'black'},
  header: {
    position: "absolute", width: 200, color: '#009BB9', height: 50, left: 26, top: 68, fontSize: 18, fontWeight: "bold"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Tables