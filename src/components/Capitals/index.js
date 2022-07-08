import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].id}

  onChangeButton = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  render() {
    const {activeCapitalId} = this.state
    const country = countryAndCapitalsList.map(
      eachCapital => eachCapital.id === activeCapitalId,
    )

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select"
              value={activeCapitalId}
              onChange={this.onChangeButton}
            >
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  className="option"
                  key={eachCapital.id}
                  value={eachCapital.id}
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="paragraph">is capital of which country?</p>
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
