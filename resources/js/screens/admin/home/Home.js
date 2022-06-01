import Chart from "../dashboard/Chart"
import Info from "../dashboard/Info"
import WidgetLg from "../dashboard/WidgetLg"
import WidgetSm from "../dashboard/WidgetSm"
import "../admin.css";

const Home = () => {
  return (
    <div className="mainContainer">
        <Info/>
        <Chart />
        <div className="homeWidgets">
          <WidgetSm />
          <WidgetLg />
        </div>
    </div>
  )
}

export default Home