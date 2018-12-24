import React, { Component } from 'react'
import Sidebar from './Sidebar'
import { getPlayers } from '../api'
import { parse } from 'query-string'
import slug from 'slug'

class Players extends Component {
  state = {
    players: [],
    loading: true,
  }

  fetchPlayers = (teamId) => {
    getPlayers(teamId)
      .then((players) => this.setState(() => ({
        players,
        loading: false,
      })))
  }

  componentDidMount() {
    const { location } = this.props
    location.search
      ? this.fetchPlayers(parse(location.search).teamId)
      : this.fetchPlayers()
  }

  render() {
    const { loading, players } = this.state
    const { location, match } = this.props
    return (
      <div className='container two-column'>
        <Sidebar
          loading={loading}
          title='Players'
          list={players.map((player) => player.name)}
          {...this.props}
        />

        {!loading && location.pathname === '/players'
          ? <div className='sidebar-instruction'>Select a player</div>
          : null}
      </div>
    )
  }
}

export default Players