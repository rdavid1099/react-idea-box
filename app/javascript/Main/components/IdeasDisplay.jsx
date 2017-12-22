import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

class IdeasDisplay extends React.Component {
  constructor() {
    super()
    this.state = {
      idea: {}
    }
  }

  fetchIdea(id) {
    id = Number(queryString.parse(id).idea) || 3
    axios.get(`api/v1/idea/${id}.json`)
      .then(response => {
        this.setState({ idea: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.fetchIdea(this.props.location.search)
  }

  componentWillReceiveProps(nextProps) {
    this.fetchIdea(nextProps.location.search)
  }

  render() {
    const nextIdeaId = Number(this.state.idea.id) + 1

    return (
      <div>
        <h3>{this.state.idea.title}</h3>
        <p>
          {this.state.idea.description}<br />
          Likes: {this.state.idea.likes}<br />
          Dislikes: {this.state.idea.dislikes}
        </p>
        <Link to={`/?idea=${nextIdeaId}`}>Next</Link>
      </div>
    )
  }
}

export default IdeasDisplay
