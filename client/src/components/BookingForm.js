import React, { Component } from 'react';

// import FormControl from '@mui/material/FormControl';
// or
import { FormControl, Input, InputLabel, FormHelperText, FormGroup, FormLabel,
 Select, RadioGroup, Radio, FormControlLabel, MenuItem } from '@mui/material';

class BookingForm extends React.Component {
  render() {
    return <FormGroup>
    <FormControl>
      <InputLabel htmlFor="Receipt Number">Receipt Number</InputLabel>
      <Input id="receiptNo" aria-describedby="receipt-number-text" />
      <FormHelperText id="my-helper-text">Please enter receipt number here</FormHelperText>
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Date">Date</InputLabel>
      <Input id="date" aria-describedby="date-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Customer Name">Customer Name</InputLabel>
      <Input id="custName" aria-describedby="customer-name-text" />
    </FormControl>
    <br/>

    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">IdolType</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="IdolType"
      >
        <MenuItem value={'A'}>A</MenuItem>
        <MenuItem value={'B'}>B</MenuItem>
        <MenuItem value={'C'}>C</MenuItem>
      </Select>
    </FormControl>
    <br/>

    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">SubType</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="SubType"
      >
        <MenuItem>ML</MenuItem>
        <MenuItem>B</MenuItem>
        <MenuItem>C</MenuItem>
      </Select>
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Mobile Number">Mobile Number</InputLabel>
      <Input id="mobNo" aria-describedby="mob-no-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Address">Address</InputLabel>
      <Input id="address" aria-describedby="address-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Total Amount">Total Amount</InputLabel>
      <Input id="amount" aria-describedby="amount-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Advance Payment">Advance Payment</InputLabel>
      <Input id="advancePayment" aria-describedby="advance-payment-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Remaining Balance">Remaining Balance</InputLabel>
      <Input id="remainingBal" aria-describedby="remaining-bal-text" />
    </FormControl>
    <br/>

    <FormControl>
      <InputLabel htmlFor="Paid To">Paid To</InputLabel>
      <Input id="paidTo" aria-describedby="paid-to-text" />
    </FormControl>
    <br/>


    <FormControl>
      <FormLabel id="delivery-req-label">Delivery Required?</FormLabel>
      <RadioGroup
        aria-labelledby="delivery-req"
        defaultValue="No"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
    <br/>

    </FormGroup>
  }
}

export default BookingForm;