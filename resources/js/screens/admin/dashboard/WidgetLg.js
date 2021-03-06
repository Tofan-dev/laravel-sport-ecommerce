import "../admin.css";

const WidgetLg = () => {
    const Button = ({type}) =>{
        return <button className={"widgetLgButton "+type}>{type}</button>
    }
    return (
        <div className="widgetLg">
           <h3 className="widgetLgTitle">Latest transactions</h3>
           <table className="widgetLgTable">
               <thead>
               <tr className="widgetLgTr">
                   <th className="widgetLgTh">Customer</th>
                   <th className="widgetLgTh">Date</th>
                   <th className="widgetLgTh">Amount</th>
                   <th className="widgetLgTh">Status</th>
               </tr>
               </thead>
               <tbody>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                        <img className="avatar" src="https://www.mantruckandbus.com/fileadmin/media/bilder/02_19/219_05_busbusiness_interviewHeader_1485x1254.jpg" />
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
                        <img className="avatar" src="https://www.mantruckandbus.com/fileadmin/_processed_/1/1/csm_man-holger-von-der-heide-interview-header_02ae36db18.jpg" />
                        <span className="widgetLgName">Costel Jurcă</span>
                   </td>
                   <td className="widgetLgDate"> 2 May 2022</td>
                   <td className="widgetLgAmount"> $123.32</td>
                   <td className="widgetLgStatus">
                       <Button type="Declined"/>
                   </td>
               </tr>
               <tr className="widgetLgTr">
                   <td className="widgetLgUser">
                        <img className="avatar" src="https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg" />
                        <span className="widgetLgName">Mirabela Popescu</span>
                   </td>
                   <td className="widgetLgDate"> 2 May 2022</td>
                   <td className="widgetLgAmount"> $123.32</td>
                   <td className="widgetLgStatus">
                       <Button type="Pending"/>
                   </td>
               </tr>
               </tbody>
           </table>
        </div>
    );
};

export default WidgetLg;
