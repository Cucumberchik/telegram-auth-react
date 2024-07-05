
import './App.css'
import TelegramLoginButton from './components/TelegramButton';

function App() {
  let name = "TelegramAuthBot"
  const handleBot = (user:any) => {
    console.log(user);
    
  }

  return (
  <main>
    <TelegramLoginButton
        botName={name}
        buttonSize="large" // "large" | "medium" | "small"
        cornerRadius={3} // 0 - 20
        usePic={false} // true | false
        dataOnauth={handleBot}
      />
  </main>
  )
}

export default App





