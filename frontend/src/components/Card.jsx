import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard(props) {
  return (
    <Card sx={{ width: props.width, textAlign: "left" }}>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: "text.secondary", fontSize: 14 }}
        >
          Most Recent Vital Parameters
        </Typography>

        <Typography variant="body2">
          weight
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
           {56+' '} kg
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
