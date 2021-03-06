import { Visibility } from "@mui/icons-material"
import "../admin.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img className="avatar" src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Marcel Pavel</span>
                <span className="widgetSmUserTitle">Muzician</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display 
            </button>
            </li>
            
            <li className="widgetSmListItem">
                <img className="avatar" src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg" />
            <div className="widgetSmUser">
                <span className="widgetSmUsername">Mirabela Popescu</span>
                <span className="widgetSmUserTitle">Farmacistă</span>
            </div>
            <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display 
            </button>
            </li>
        </ul>
    </div>
  )
}

export default WidgetSm