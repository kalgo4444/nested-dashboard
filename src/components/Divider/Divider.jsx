import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export default function IntroDivider({ paymentdata }) {
  return (
    <div className="grid grid-cols-5 gap-5">
      {paymentdata?.map((item, i) => (
        <Card key={i} variant="outlined" sx={{ maxWidth: 360 }}>
          <Box sx={{ p: 2 }}>
            <Stack
              direction="row"
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {item.price}$
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ p: 2 }}>
            <Typography gutterBottom variant="body2">
              Select type
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip color="primary" label="Soft" size="small" />
              <Chip label="Medium" size="small" />
              <Chip label="Hard" size="small" />
            </Stack>
          </Box>
        </Card>
      ))}
    </div>
  );
}
