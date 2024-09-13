import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {styled} from "@mui/system";
import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Banner from "../images/Mano.jpg";
import Banner1 from "../images/Bala1 (2).jpg";
import Banner2 from "../images/suri.jpg";
import { Grid } from "@mui/material";

const TestimonialsContainer = styled("div")({
  textAlign: "center",

  padding: "16px",

});

const TestimonialCard = styled(Card)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(1),
}));

const TestimonialAvatar = styled(Avatar)(({theme}) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(2),
}));

const TestimonialRating = styled(Rating)(({theme}) => ({
  marginBottom: theme.spacing(2),
}));

const TestimonialContent = styled(Typography)(({theme}) => ({
  fontSize: 16,
  
  padding: theme.spacing(1),
}));

const TestimonialAuthor = styled(Typography)(({theme}) => ({
  fontWeight: "bold",
  padding: theme.spacing(2),
  marginBottom: theme.spacing(.5),
}));

const TestimonialPage = () => {
  const testimonials = [
    {
      id: 1,
      author: "Manogar",
      avatar: Banner,
      rating: 5,
      content:
        "SmartCliff has been an incredible learning platform for me. The courses are well-structured, and the instructors are highly knowledgeable. I have gained valuable skills that have helped me advance in my career.",
    },
    {
      id: 2,
      author: "Bala",
      avatar: Banner1,
      rating: 5,
      content:
        "I can't recommend SmartCliff enough. The quality of the courses is exceptional, and the interactive learning experience makes it engaging and enjoyable. I have achieved significant growth in my skillset thanks to SmartCliff.",
    },
    {
      id: 3,
      author: "prakash",
      avatar: Banner2,
      rating: 4,
      content:
        "SmartCliff has exceeded my expectations. The instructors are passionate and provide clear explanations. The platform offers a wide range of courses, allowing me to explore various subjects. It's a game-changer for anyone looking to expand their knowledge.",
    },
    {
      id: 4,
      author: "Arun",
      avatar: Banner,
      rating: 4.7,
      content:
        "I'm extremely impressed with SmartCliff. The platform is user-friendly, and the course content is comprehensive. The practical assignments and quizzes helped me solidify my understanding. I feel more confident in my skills after taking courses on SmartCliff.",
    },
    // Add more testimonials here...
  ];

  return (
    
   <div className="container-fluid" style={{position:'relative',top:'5rem'}}>
    <img style={{ position: "absolute",marginTop:'-30rem',marginRight:"-40rem" ,width: "9rem",zIndex:'1',position:'relative',left:'5rem'}}src="https://smartcliff.in/assets/images/dotted-image1.png" />
    {/* <img style={{ position: "absolute",marginTop:'-20rem',marginRight:"40rem" ,width: "9rem",zIndex:'-3'}}src="	https://smartcliff.in/assets/images/abstract10.png" /> */}
     <TestimonialsContainer sx={{position:"relative",bottom:'16rem'}}>
      
     <Typography variant='h4' sx={{ fontFamily: "serif",fontWeight: '600', textAlign: 'center', alignItems: 'center', color: '#66023b' }}>
     Trainees Testimonials
        </Typography>
      
      <br/>
      
      
      <Carousel 
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        infiniteLoop={true}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard sx={{background :'#fff0fb'}} key={testimonial.id}>
            <TestimonialAvatar
              src={testimonial.avatar} style={{objectFit:"cover",width:"180px",height:"180px",borderRadius:"0.6rem"}}
              alt={`${testimonial.author}'s Avatar`}
            />
            <TestimonialRating
              name={`rating-${testimonial.id}`}
              value={testimonial.rating}
              precision={0.5}
              readOnly
            />
            <TestimonialContent>{testimonial.content}</TestimonialContent>
            <TestimonialAuthor style={{fontSize:'1.4rem'}} variant="subtitle2">
              - {testimonial.author}
            </TestimonialAuthor>
          </TestimonialCard>
        ))}
      </Carousel>
      {/* <img style={{ position: "absolute", marginTop: '-20rem', marginLeft: "30rem", width: "6rem", zIndex: '1' }} src="https://smartcliff.in/assets/images/shape8.png" /> */}
    </TestimonialsContainer>
    <img style={{ position: "absolute",marginTop:'-25rem',marginRight:"-40rem" ,width: "4rem",zIndex:'1',position:'relative',left:'1rem',top:'21rem'}}src="	https://smartcliff.in/assets/images/abstract6.png" />
   </div>
  );
};

export default TestimonialPage;