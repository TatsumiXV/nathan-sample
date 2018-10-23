import React, { Component } from 'react'
import Header from "../Components/Header.js"
import NavBar from '../Components/NavBar.js';
import Table2 from '../Components/Table2.js';



class TheirStatus extends Component {
    state = {
        data: [],
        isLoading: true
    }
    componentWillMount(){
        const csvFilePath = require("../Assets/Data2.csv");
        const Papa = require("papaparse/papaparse.min.js");
        Papa.parse(csvFilePath, {
        header: true,
        download: true,
        skipEmptyLines: true,
        complete: this.updateData
        })
    }

updateData = (result) => {
const data = result.data;
this.setState({data: data});
this.setState({isLoading: false})
}



render () {
    const{data,isLoading} = this.state
return (

    !isLoading
    &&(

<div>
    <Header />
    <NavBar />
    <br></br>
    <Table2 TableData2  ={data}/>

</div>
    )
)


}


}

export default TheirStatus