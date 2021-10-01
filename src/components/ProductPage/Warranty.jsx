import styled from "styled-components";
import speaker from './Images/image 122.png';
import year from './Images/image 121.png';

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 428px;
    left: 0px;
    top: 3167px;
    background: #232323;

     & img {  
        position: absolute;
        width: 328px;
        height: 328px;
        left: 100px;
        top: 50px;
     }

     & h2 {
        position: absolute;
        width: 459px;
        height: 98px;
        left: 453px;
        top: 106px;
        color: #ffffff;
        font-weight: bold;
        font-size: 40px;
        line-height: 49px;
        letter-spacing: 0.01em;
     }
     & p {
            position: absolute;
            width: 400px;
            height: 72px;
            left: 453px;
            top: 217px;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.01em;
            color: #FFFFFF;
     }

     & div {
        position: absolute;
        width: 30.3%;
        height: 428px;
        left: 940px;
        top: 0px;
        background: #3C3C3C;
     }

     & div img {
        position: absolute;
        width: 364px;
        height: 382px;
        left: 20px;
        top: 25px;
     }
     
`;

export default function Warranty() {
    return (
        <Container>
            <img src={speaker} alt="speaker" />
            <h2>IPX7 Water & Splash Shield</h2>
            <p>For complete listening experience get into an immersive sound and light show. Customizable lights allow you to creates the perfect vibe.</p>
            <div>
                <img src={year} alt="year"/>
            </div>
        </Container>
    );
}