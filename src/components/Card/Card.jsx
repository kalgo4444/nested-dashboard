import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ librarydata }) {
  return (
    <div className="grid grid-cols-4 gap-5">
      {librarydata?.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345 }}>
          <div
            sx={{ height: 140 }}
            className="h-[200px] animate-pulse bg-gray-100"
          ></div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Open</Button>
            <Button size="small">Download</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
