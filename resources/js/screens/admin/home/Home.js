import Chart from "../dashboard/chart"
import Info from "../dashboard/Info"
import WidgetLg from "../dashboard/WidgetLg"
import WidgetSm from "../dashboard/WidgetSm"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
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