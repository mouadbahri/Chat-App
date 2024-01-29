import { PrettyChatWindow } from "react-chat-engine-pretty"
import 'dotenv/config'

const ChatsPage = (properties) => {
  const username = properties.user.username
  const secret = properties.user.secret
  const id = 'c8f4d44e-1cf6-4b43-a4ad-fd29ab479985'
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={id}
        username={username} 
        secret={secret} 
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;