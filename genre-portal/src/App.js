import logo from "./logo.svg";
import "./App.css";
import ButtonAppBar from "./AppBar";
import {
  Button,
  Grid,
  Table,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import LyricsBarChart from "./LyricsBarChart";
import LyricsPieChart from "./LyricsPieChart";
import SimpleBackdrop from "./SimpleBackdrop";
import MediaCard from "./MediaCard";
import PortalApp from "./PortalApp";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <PortalApp />
      
    </div>
  );
}

export default App;
