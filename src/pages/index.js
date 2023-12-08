import useAuthUser from "src/Hooks/useAuthUser";
import Chat from "src/components/Chat/Chat";
import Login from "src/components/Login/Login";
import Sidebar from "src/components/Sidebar/Sidebar";

export default function Home() {
  const user = useAuthUser();

  if (!user) return <Login />;

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar user={user} />
        <Chat user={user} />
      </div>
    </div>
  );
}
