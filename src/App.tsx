import "./App.css";
import TelegramLoginButton from "./components/TelegramButton";

function App() {
  let name = "ReactAuth_bot"; // Это имя бота который вы ранее создавали в BotFather
  const handleBot = (user: any) => {
    console.log(user);
  };

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
  );
}

export default App;
