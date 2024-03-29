import styled from "styled-components";
import logo from './Images/image 98.png';
import vector from "./Images/Vector 5.png";

const Container = styled.div`
    position: absolute;
    top: 86px;
    left: 0px;
    width: 50%;
    height: 1472px;
    background: white;

    & .logo {
        position: absolute;
        width: 16.14%;
        height: 56px;
        left: 12.82%;
        top: 72px;
    }

    & .covid {
        position: absolute;
        width: 86%;
        height: 40px;
        left: 12.82%;
        top: 154px;
        background: #FF0000;
        border-radius: 8px;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        color: #FFFFFF;
        padding: 12px;
        padding-left: 20px;
    }

    & div:nth-child(3) {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0px;
        position: absolute;
        width: 45.85%;
        height: 15px;
        left: 12.82%;
        top: 220px;
        font-size: 12px;
    }

    & .info {
        position: absolute;
        top: 264px; 
        left: 12.82%;
        justify-content: space-between;
        width: 86%;
        display: flex;
        height: 20px;
    }

    & .info p:nth-child(1) {
       font-weight: 500;
        font-size: 16px;
        line-height: 20px;
    }

    & .info p:nth-child(2) {
       font-weight: 500;
        font-size: 12px;
        line-height: 15px;
    }

    & form {
        position: absolute;
        top: 328px;
        left: 12.82%;
        width: 86%;
    }

    & form .check {
        display: flex;
        width: 86%;
        margin-top: 44px;
    }

     & form .check p{
        font-size: 16px;
        line-height: 20px;
        margin-left: 10px;
    }

    & form .name {
        margin-top: 28px;
    }

    & form .name input {
        width: 40.72%;
    }

    & form .name input[name=secondName] {
        margin-left: 20px;
         width: 46%;
    }

    & form .ship { 
        width: 86%;
        height: 20px;
        margin-top: 44px;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #000000;
    }

    & form input[name=firstName] {
        margin-top: 28px;
        width: 46%;
    }

    & form input[type=text] {
        background: #ffffff;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
        height: 52px;
        padding: 14px;
        font-size: 16px;
    }

    & input[name=email], input[name=address],input[name=houseNo],input[name=city],input[name=phone]{
        width: 96%;
    }
    
     input[name=address],input[name=houseNo],input[name=city],input[name=phone] {
         margin-top: 22px;
     }

    & input[type=checkbox] {
        -webkit-appearance: none;
        width: 26px;
        height: 26px;
        background: #ffffff;
        border: 1px solid black;
    }

     & input[type=checkbox]:checked {
        background-color: black;
        border: solid white;
        border-width: 0 5px 5px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    & .dropdown {
        display: flex;
        justify-content: space-between;
        margin-top: 22px;
        width: 95%;
    }

    & .dropdown * {
        height: 52px;
        width: 28%;
        background: #FFFFFF;
        border: 0.5px solid #000000;
        box-sizing: border-box;
        border-radius: 4px;
    }

    & .btn {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }

    & .btn p {
        font-size: 16px;
        line-height: 20px;
    }

    .btn input {
        width: 28.65%;
        height: 46px;
        background: #FF0000;
        border-radius: 4px;
        border: none;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }

    & .vector {
        display: flex;
    }

    & .vector img {
        width: 3px;
        height: 7px;
        margin-top: 5px;
        margin-right: 12px;
    }

    & .policy {
        position: absolute;
        top: 1182px;
        left: 12.82%;
        display: flex;
    }

    & .policy p {
        font-size: 12px;
        margin-right: 15px;
    }
`;

export default function LeftSection() {
    return (
        <Container>
            <img className="logo" src={logo} alt="logo"/>
            <div className="covid">Note: Due to COVID related lockdowns, Please  expect a delay in the delivery of your order.</div>
            <div>
                <p>{'Cart >'}</p>
                <p>{'Information >'}</p>
                <p>{'Shipping >'}</p>
                <p>{'Payment'}</p>
            </div>
            <div className="info">
                <p>Contact Information</p>
                <p>Already have an account? Log in</p>
            </div>
            <form>
                <input type="text" name="email" placeholder="Email" />
                <div className="check">
                    <input type="checkbox" name="updated"/>
                    <p>Keep me updated on my order status over email and whatsapp</p>
                </div>
                <p className="ship">Shipping Adddress</p>
                <div className="name">
                    <input type="text" name="firstName" placeholder="First Name" />
                    <input type="text" name="secondName" placeholder="Last Name" />
                </div>
                 <input type="text" name="address" placeholder="Address" />
                <input type="text" name="houseNo" placeholder="Apartment, Suite, etc., (Optional)" />
                <input type="text" name="city" placeholder="City" />
                <div className="dropdown">
                    <select name="country">
                        <option value="india">India</option>
                        <option value="uk">UK</option>
                        <option value="usa">USA</option>
                        <option value="nepal">Nepal</option>
                    </select>
                    <select name="state">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                    </select>
                    <input type="text" name="pincode" placeholder="Pincode" />
                </div>
                <input type="text" name="phone" placeholder="Phone Number" />
                 <div className="check">
                    <input type="checkbox" name="saveinfo"/>
                    <p>Save this information for next time</p>
                </div>
                <div className="btn">
                    <div className="vector">
                        <img src={vector} alt="left"/>
                        <p>Return to Cart</p>
                    </div>
                  <input type="submit" value="Continue to Shipping"/>
                </div>
            </form>
            <div className="policy">
                <p>Return Policy</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </Container>
    );
}