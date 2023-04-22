import styled from 'styled-components';

export const Container = styled.div`
background: url(http://salehriaz.com/404Page/img/overlay_stars.svg);
background-repeat: repeat;
background-size: contain;
background-position: left top;
width: 100%;

margin: 0;
height: 100%;
font-family: 'Dosis', sans-serif;
font-weight: 300;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;

@-moz-keyframes rocket-movement { 100% {-moz-transform: translate(1200px,-600px);} }
@-webkit-keyframes rocket-movement {100% {-webkit-transform: translate(1200px,-600px); } }
@keyframes rocket-movement { 100% {transform: translate(1200px,-600px);} }
@-moz-keyframes spin-earth { 100% { -moz-transform: rotate(-360deg); transition: transform 20s;  } }
@-webkit-keyframes spin-earth { 100% { -webkit-transform: rotate(-360deg); transition: transform 20s;  } }
@keyframes spin-earth{ 100% { -webkit-transform: rotate(-360deg); transform:rotate(-360deg); transition: transform 20s; } }

@-moz-keyframes move-astronaut {
  100% { -moz-transform: translate(-160px, -160px);}
}
@-webkit-keyframes move-astronaut {
  100% { -webkit-transform: translate(-160px, -160px);}
}
@keyframes move-astronaut{
  100% { -webkit-transform: translate(-160px, -160px); transform:translate(-160px, -160px); }
}
@-moz-keyframes rotate-astronaut {
  100% { -moz-transform: rotate(-720deg);}
}
@-webkit-keyframes rotate-astronaut {
  100% { -webkit-transform: rotate(-720deg);}
}
@keyframes rotate-astronaut{
  100% { -webkit-transform: rotate(-720deg); transform:rotate(-720deg); }
}

@-moz-keyframes glow-star {
  40% { -moz-opacity: 0.3;}
  90%,100% { -moz-opacity: 1; -moz-transform: scale(1.2);}
}
@-webkit-keyframes glow-star {
  40% { -webkit-opacity: 0.3;}
  90%,100% { -webkit-opacity: 1; -webkit-transform: scale(1.2);}
}
@keyframes glow-star{
  40% { -webkit-opacity: 0.3; opacity: 0.3;  }
  90%,100% { -webkit-opacity: 1; opacity: 1; -webkit-transform: scale(1.2); transform: scale(1.2); border-radius: 999999px;}
}

.spin-earth-on-hover{
  transition: ease 200s !important;
  transform: rotate(-3600deg) !important;
}

.btn-go-home{
  position: relative;
  z-index: 200;
  margin: 20px auto;
  width: 150px;
  padding: 10px 15px;
  display: block;
  text-align: center;
  border: 2px solid ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secundary};
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 0.1rem;
  overflow: hidden;
  transition: 0.5s;
}

.btn-go-home:hover{
  color: ${(props) => props.theme.colors.secundary};
  border: 2px solid ${(props) => props.theme.colors.secundary};
}

.btn-go-home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: ${(props) => props.theme.colors.primary};
  z-index: -1;
  transition: 0.5s;
}

.btn-go-home::before {
  width: 100%;
  transition: 0.5s;
}

.central-body{
  padding: 17% 5% 10% 5%;
  text-align: center;
}

.objects img{
  z-index: 90;
  pointer-events: none;
}

.object_rocket{
  z-index: 95;
  position: absolute;
  transform: translateX(-50px);
  top: 75%;
  pointer-events: none;
  animation: rocket-movement 200s linear infinite both running;
}

.object_earth{
  position: absolute;
  top: 20%;
  left: 15%;
  z-index: 90;
}

.object_moon{
  position: absolute;
  top: 12%;
  left: 25%;
}

.object_astronaut{
  animation: rotate-astronaut 200s infinite linear both alternate;
}

.box_astronaut{
  z-index: 110 !important;
  position: absolute;
  top: 60%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
}

.image-404{
  position: relative;
  z-index: 100;
  pointer-events: none;
}

.glowing_stars .star{
  position: absolute;
  border-radius: 100%;
  background-color: #fff;
  width: 3px;
  height: 3px;
  opacity: 0.3;
  will-change: opacity;
}

.glowing_stars .star:nth-child(1){
  top: 80%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 1s;
}

.glowing_stars .star:nth-child(2){
  top: 20%;
  left: 40%;
  animation: glow-star 2s infinite ease-in-out alternate 3s;
}

.glowing_stars .star:nth-child(3){
  top: 25%;
  left: 25%;
  animation: glow-star 2s infinite ease-in-out alternate 5s;
}

.glowing_stars .star:nth-child(4){
  top: 75%;
  left: 80%;
  animation: glow-star 2s infinite ease-in-out alternate 7s;
}

.glowing_stars .star:nth-child(5){
  top: 90%;
  left: 50%;
  animation: glow-star 2s infinite ease-in-out alternate 9s;
}

@media only screen and (max-width: 600px){
  .navbar-links{
    display: none;
  }
    
  .custom-navbar{
    text-align: center;
  }
    
  .brand-logo img{
    width: 120px;
  }
    
  .box_astronaut{
    top: 70%;
  }
    
  .central-body{
    padding-top: 25%;
  }
`;
