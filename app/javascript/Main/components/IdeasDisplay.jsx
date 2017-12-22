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
    axios.get(`api/v1/idea/${id}`)
      .then(response => {
        this.setState({ idea: response.data })
      })
      .catch(error => {
        console.error(error)
      })
  }

  setIdeaIdFromQueryString(qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.idea) {
      this.ideaId = Number(this.qsParams.idea)
    } else {
      this.ideaId = 3
      this.props.history.push(`/?idea=${this.ideaId}`)
    }
  }

  componentDidMount() {
    this.setIdeaIdFromQueryString(this.props.location.search)
    this.fetchIdea(this.ideaId)
  }

  render() {
    const nextIdeaId = Number(this.state.idea.id) + 1

    return (
      <div>
        <Link to={`/?idea=${nextIdeaId}`}>Next</Link>
        <h3>{this.state.idea.title}</h3>
        <p>
          {this.state.idea.description}<br />
          Likes: {this.state.idea.likes}<br />
          Dislikes: {this.state.idea.dislikes}
        </p>
      </div>
    )
  }
}

export default IdeasDisplay
