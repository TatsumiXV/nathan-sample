import React, { Component } from 'react'
import Header from "../Components/Header.js"
import NavBar from '../Components/NavBar.js';
import Table from '../Components/Table.js';



class AlbumStatus extends Component {
    state = {
        data: [],
        isLoading: true
    }
    componentWillMount(){
        const csvFilePath = require("../Assets/Data.csv");
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
    <Table TableData ={data}/>

</div>
    )
)


}


}

export default AlbumStatus