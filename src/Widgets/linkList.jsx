import React, { useState } from "react";
import "../Widgets/linkList.css";
import dayjs from "dayjs";
import 'date-fns'
import Grid from "@mui/material/Grid"
import DateFnsUtils from "@date-io/date-fns/build/date-fns-utils";
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers"
import { Button, TextField, IconButton } from "@mui/material";
import { Send, PhotoCamera } from "@mui/icons-material";
import moment from "moment";
const LinkList = props => {
  // return (<></>props.options.map((link, index) => (
  //   <div key={index}>
  //     {link.url == "Name"  ? (
  //       <div><label>Name:</label><input placeholder={link.url} type='text' className='inputs' style={{width:"100px"}}/></div>
  //     ) :""}
  //     {link.dob == "DOB"?(<div><label>DOB :</label><input type="date"/></div>):""}
  //     {link.degree == "Degree"?(<div><label>Degree</label><input type="text" placeholder="Degree" style={{width:"100px"}}/></div>):""}
  //     {link.passYear == "passed_Year"?(<div><label>passed_Year</label><input type="text" placeholder="passed_Year" style={{width:"100px"}}/></div>):""}
  //     {link.photo == "your photo"?(<div><label>Photo</label><input type="file" placeholder="photo" style={{width:"100px"}}/></div>):""}
  //   </div>)
  // ));
  let currDate = moment().format("YYYY-MM-DD");
  console.log(currDate);
  const [value, setValue] = useState(dayjs(currDate));
  const handleChange = newValue => {
    setValue(newValue);
  };
  return (
    <div>
      <div>
        {props.options.map((link, index) =>
          <div key={index}>
            {link.url === "Name"
              ? <div>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder="Name"
                    size="small"
                  />
                </div>
              : ""}
            {link.dob === "DOB"
              ? <div>
      
                </div>
              : ""}
            {link.degree === "Degree"
              ? <div>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder="Degree"
                    size="small"
                  />
                </div>
              : ""}
            {link.passYear === "passed_Year"
              ? <div>
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    variant="filled"
                    placeholder="passed_Year"
                    size="small"
                  />
                </div>
              : ""}
            {link.photo === "your photo"
              ? <div>
                  <Button
                    variant="contained"
                    component="label"
                    size="small"
                    style={{
                      width: "100%",
                      marginTop: "10px",
                      marginBottom: "5px"
                    }}
                    endIcon={<PhotoCamera />}>
                    Image
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                </div>
              : ""}
          </div>
        )}
      </div>
      <Button
        variant="contained"
        endIcon={<Send />}
        size="small"
        style={{ width: "100%", marginTop: "10px" }}>
        Send
      </Button>
    </div>
  );
};

export default LinkList;
