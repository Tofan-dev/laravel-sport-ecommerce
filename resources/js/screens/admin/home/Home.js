import Chart from "../dashboard/chart"
import Info from "../dashboard/Info"
import "./home.css"

const Home = () => {
  return (
    <div className="home">
        <Info/>
        <Chart />
    </div>
  )
}

export default Home