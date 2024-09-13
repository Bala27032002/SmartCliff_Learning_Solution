import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo from "../images/Entrolimage.webp";
import Grid from '@mui/material/Grid';
import { Container } from 'react-bootstrap';
import "../styles/HomeStyles.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Grid container className="home" style={{ height: "100%",  position: 'relative', bottom: '3rem' }}>
        <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Typography variant="h3" align="center" gutterBottom color={'Black'} marginTop={5}sx={{fontWeight:'600'}}>
            Our Service
          </Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ marginLeft: '-15px', marginRight: '-8px' }}>
            <Grid item xs={12} sm={6} md={4} style={{ animationDelay: '0s' }}>
              <Card sx={{ maxWidth: 345, position: "relative", top: "20px", animation: 'cardAnimation 20s infinite, slideAnimation 5s infinite' }}>
                {/* Card 1 */}
                <CardHeader
                  title="Skill Development through measurable transformation"
                />
                <CardMedia component="img" height="194" image={logo} alt="Paella dish" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Tailor-made learning with flexible & scalable programs, problem-solving, decision-making, critical thinking, and analytical capabilities, behavioral skills, language and Communication skills.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton> */}
                  {/* <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      hh
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4} style={{ animationDelay: '5s' }}>
              <Card sx={{ maxWidth: 340, position: "relative", top: "20px", animation: 'cardAnimation 20s infinite, slideAnimation 5s infinite' }}>
                {/* Card 2 */}
                <CardHeader
                  title="High Engagement Learning Experience"
                />
                <CardMedia component="img" height="194" image={logo} alt="Card 2 Image" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Industry-relevant focus knowledge built into learning programs across domains that map to industry skill gaps, interact with domain experts from across industries through regular industry sessions and networking opportunities
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Card 2 Method:</Typography>
                    <Typography paragraph>Card 2 additional details go here.</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4} style={{ animationDelay: '10s' }}>
              <Card sx={{ maxWidth: 345, position: "relative", top: "20px", animation: 'cardAnimation 20s infinite, slideAnimation 5s infinite' }}>
                {/* Card 3 */}
                <CardHeader
                  title="Assured Placement Assistance"
                />
                <CardMedia component="img" height="194" image={logo} alt="Card 3 Image" />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    Each learner will work with an assigned career specialist to build out their personal and professional brand and provide assistance to participate in exclusive interviews and work for great organizations.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton> */}
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph></Typography>
                    <Typography paragraph>Card 2 Method:</Typography>

                    <Typography paragraph>Card 3 additional details go here.</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
