import { Box, List, ListItem, Typography } from "@material-ui/core";
import React from "react";

const OnlineIndicator = () => {
  const status = ["All", "Online", "Offline"];
  return (
    <Box>
      <List>
        {status.map((stat) => (
          <ListItem button key={stat}>
            <Typography variant="body2">{stat}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default OnlineIndicator;
