// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {googleSuggestions, updateSearchInput} = props
  const {suggestion} = googleSuggestions

  const onClickUpdate = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-items">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="image"
        onClick={onClickUpdate}
      />
    </li>
  )
}

export default SuggestionItem
