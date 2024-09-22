import React,{ useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { fonts } from '../styles/typography';
import undulate from '../assets/undulate.svg';
import lines from '../assets/lines.svg'
import programmer from '../assets/programmer.svg'

export function Contact() {

    const [messageSent, setMessageSent] = useState(false); 

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cf243ad0-78d2-4264-bf57-6a8e4d518ac9");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            setMessageSent(true); // Actualiza el estado cuando el mensaje se envía
            event.target.reset();
        }
      };


    return (
        <Main>
        <Title>Contact me</Title>

        <ContactArea>
            <ZoneForm>
                <Form onSubmit={onSubmit}>
                    <Label>Your name</Label>
                    <Input type="text" placeholder="What's your name?" name="name" required />
                    <Label>Your email</Label>
                    <Input type="email" placeholder="What's your email?" name="email" required />
                    <Label>Your message</Label>
                    <Input placeholder="What do you want to tell me?" name="message" required />
                    <Button type="submit">Send</Button>
                </Form>

                {/* Mostrar mensaje de confirmación */}
                {messageSent && <SuccessMessage>Thank you! Your message was sent successfully.</SuccessMessage>}
            </ZoneForm>

            <img src={programmer} style={{ width: '300px' }} />
        </ContactArea>
    </Main>
    );
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 20px;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: ${colors.purple[10]};
`;

const ZoneForm = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: ${colors.purple[40]};
    height: 450px;
    width: 350px;
    padding: 30px;
    gap: 20px;
    border-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
    font-family: ${fonts.primary};
    font-weight: 700;
    font-size: 30px;
    color: white;
    padding: 20px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%; 
`;

const Label = styled.label`
    color: white;
    font-size: 15px;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
    border: black;
    font-family: ${fonts.primary};
    font-weight: bold;
    border-radius: 10px;
    color: white;
    background-color: ${colors.turqiouse[20]};
    width: 110px;
    height: 50px;
    font-size: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        color: white;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
`;

const ContactArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    justify-items: center;
    justify-content: center;
`;

const SuccessMessage = styled.div`
    margin-top: 20px;
    color: white;
    font-size: 16px;
    background-color: ${colors.turqiouse[20]};
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;