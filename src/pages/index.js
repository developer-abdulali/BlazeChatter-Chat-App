import useAuthUser from "src/Hooks/useAuthUser";
import Login from "src/components/Login/Login";
import Sidebar from "src/components/Sidebar/Sidebar";

export default function Home() {
  const user = useAuthUser()

  if(!user) return <Login />

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar user={user}/>
      </div>
    </div>
  );
}
