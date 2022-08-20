import { Button} from '@mui/material'
import React from 'react'
const useStyle={
   root:{
        backgroundColor:'blue',
        height:'100px',
        width:'100px'
    }
}
export default function Buttoncomponent() {
    const classes=useStyle;
  return (
    <div>
        <Button style={classes.root}>
            Click me
        </Button>
    </div>
  )
}
