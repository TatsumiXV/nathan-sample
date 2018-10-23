import React, { Component } from 'react'
import Home from './Home.js'
import SharedAlbum from './SharedAlbum.js'
import TheirAlbum from './TheirAlbum.js'
import AlbumStatus from './AlbumStatus.js'
import TheirStatus from './TheirStatus.js'

import {Switch, Route, BrowserRouter} from 'react-router-dom'
class Containers extends Component {
render () {
return (

<div>

    <BrowserRouter>
    <Switch>
        <Route exact path='/' render = {() => <Home />} />
        <Route path = '/SharedAlbum' render = {() => <SharedAlbum />} />
        <Route path = '/TheirAlbum' render = {() => <TheirAlbum />} />
        <Route path = '/AlbumStatus' render = {() => <AlbumStatus />} />
        <Route path = '/TheirStatus' render = {() => <TheirStatus />} />
    </Switch>
    </BrowserRouter>
</div>
)


}


}

export default Containers