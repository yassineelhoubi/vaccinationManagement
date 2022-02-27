import { Header } from '../components/layouts';
import { Outlet } from "react-router-dom";
const UserLayouts: React.FC = () => {

  return (
    <div className="app min-h-screen">
      <div className=" lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  )
}
export { UserLayouts }
