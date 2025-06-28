import DashBoardHeader from "../components/dashboard/DashBoardHeader";
import DashBoardHello from "../components/dashboard/DashBoardHello";
import Widgets from "../components/dashboard/Widgets";

export default function DashboardHome() {
  return (
    <div className="">
        <DashBoardHeader/>
        <DashBoardHello/>
        <Widgets/>
      
    </div>
  )
}
