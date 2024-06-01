import './Table.scss';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {

  const rows = [
    {
      id: 1143155,
      Destination: "Acer Nitro 5",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",

    },
    {
      id: 2235235,
      Destination: "Playstation 5",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",

    },
    {
      id: 2342353,
      Destination: "Redragon S101",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",

    },
    {
      id: 2357741,
      Destination: "Razer Blade 15",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",

    },
    {
      id: 2342355,
      Destination: "ASUS ROG Strix",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",

    },
  ];


  return (
    <TableContainer component={Paper} className='table' >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Destination</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tableCell" >
                {row.id}
              </TableCell>
              <TableCell className="tableCell">{row.Destination}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List
