import React from "react";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import LyricsBarChart from "./LyricsBarChart";
import LyricsPieChart from "./LyricsPieChart";
import SimpleBackdrop from "./SimpleBackdrop";
import MediaCard from "./MediaCard";

class PortalApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      lyrics:
      "The club isn't the best place to find a lover" +
      "So the bar is where I go" +
      "Me and my friends at the table doing shots" +
      "Drinking faster and then we talk slow" +
      "Come over and start up a conversation with just me" +
      "And trust me I'll give it a chance now",
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkGenre = this.checkGenre.bind(this);
    this.handleLyricsChange = this.handleLyricsChange.bind(this);
  }

  componentDidMount() {}

  handleLyricsChange(e) {
    this.setState({ lyrics: e.target.value });
  }

  handleClick() {
    const { lyrics } = this.state;
    console.log("Start checking", lyrics);
    this.checkGenre();
  }

  checkGenre() {
    const { lyrics } = this.state;
    this.setState({ loading: true });
    const requestOptions = {
      method: "POST",
      body: lyrics,
    };
    fetch("http://localhost:9090/lyrics/predict", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const newData = [];
        Object.entries(data).forEach(([key, value]) => {
          if (key != "genre") {
            newData.push({ name: key, probability: value });
          }
        });
        newData.sort(function (a, b) {
          return b.probability - a.probability;
        });

        this.setState({ data: newData, loading: false });
      });
  }

  render() {
    const { data, loading, lyrics } = this.state;
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              <TextField
                id="outlined-multiline-flexible"
                label="Enter lyrics"
                multiline
                rows={15}
                fullWidth
                value={lyrics}
                onChange={this.handleLyricsChange}
              />
            </TableCell>

            <TableCell>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={3}>
                  <SimpleBackdrop
                    handleClick={this.handleClick}
                    loading={loading}
                  />
                </Grid>
              </Grid>
            </TableCell>

            <TableCell>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={3}>
                  <MediaCard data={data} />
                </Grid>
              </Grid>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <LyricsPieChart data={data} />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
              <LyricsBarChart data={data} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default PortalApp;
