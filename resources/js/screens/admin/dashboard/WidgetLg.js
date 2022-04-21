import "./widgetLg.css";

const WidgetLg = () => {
    const Button = ({type}) =>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }
    return (
        <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest transcations</h3>
           <table className="widgetLgTable">
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                        <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
                        <span className="widgetLgName">Marcel Pavel</span>
                   </td>
                   <td className="widgetLgDate"> 2 May 2022</td>
                   <td className="widgetLgAmount"> $123.32</td>
                   <td className="widgetLgStatus">
                       <Button type="Approved"/>
                   </td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                        <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
                        <span className="widgetLgName">Costel</span>
                   </td>
                   <td className="widgetLgDate"> 2 May 2022</td>
                   <td className="widgetLgAmount"> $123.32</td>
                   <td className="widgetLgStatus">
                       <Button type="Declined"/>
                   </td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                        <img src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
                        <span className="widgetLgName">Mirel</span>
                   </td>
                   <td className="widgetLgDate"> 2 May 2022</td>
                   <td className="widgetLgAmount"> $123.32</td>
                   <td className="widgetLgStatus">
                       <Button type="Pending"/>
                   </td>
               </tr>
           </table>
        </div>
    );
};

export default WidgetLg;
