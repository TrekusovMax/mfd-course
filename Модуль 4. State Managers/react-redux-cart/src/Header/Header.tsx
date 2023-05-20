import { useAppStore } from '../redux/hooks'

export const Header = () => {
  const store = useAppStore()
  const handleTitleClick = () => {
    console.log(store.getState())
  }
  return (
    <div className="header" onClick={handleTitleClick}>
      <h1>Your cart</h1>
      <p>"I say let the world go to hell, but I should always have my tea."</p>
      <p>― Fyodor Dostoyevsky, Notes from Underground</p>
    </div>
  )
}
