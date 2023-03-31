import Navbar from "./components/Navbar";
import MyRoutes from "./routers/routes";
import { TaskContextProvider } from "./context/TaskProvider";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="container mx-auto py-4 px-20">
        <TaskContextProvider>
          {/* <Navbar /> */}
          <MyRoutes />
        </TaskContextProvider>
      </div>
    </div>
  );
}

export default App;
