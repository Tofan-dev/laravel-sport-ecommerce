import { ArrowDownward, ArrowUpward } from "@mui/icons-material"
import "../admin.css";

const Info = () => {
  return (
    <div className="info">
        <div className="infoItem">
            <span className="infoTitle"> Revenue</span>
            <div className="infoMoneyContainer">
                <span className="infoMoney">$5,341</span>
                <span className="infoMoneyRate">-5.4<ArrowDownward className="infoIcon negative"/> </span>
            </div>
            <span className="infoSub">Compared to last month</span>
        </div>
        <div className="infoItem">
            <span className="infoTitle">Sales</span>
            <div className="infoMoneyContainer">
                <span className="infoMoney">$2,341</span>   
                <span className="infoMoneyRate">-2.4<ArrowDownward className="infoIcon negative"/> </span>
            </div>
            <span className="infoSub">Compared to last month</span>
        </div>
        <div className="infoItem">
            <span className="infoTitle">Cost</span>
            <div className="infoMoneyContainer">
                <span className="infoMoney">$7,341</span>
                <span className="infoMoneyRate">+4.4<ArrowUpward className="infoIcon"/> </span>
            </div>
            <span className="infoSub">Compared to last month</span>
        </div>
    </div>
  )
}

export default Info