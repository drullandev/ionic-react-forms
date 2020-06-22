import {
  IonContent,
  IonPage,
  IonText,
  IonInput,
  IonButton,
  IonCheckbox,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import { useForm } from "react-hook-form";
import Input, { InputProps } from "../components/Input";
import { object, string } from "yup";

const Home: React.FC = () => {
  const validationSchema = object().shape({
    email: string().required().email(),
    fullName: string().required().min(5).max(32),
    password: string().required().min(8),
  });
  const { control, handleSubmit, errors } = useForm({
    validationSchema,
  });

  const formFields: InputProps[] = [
    {
      name: "email",
      component: <IonInput type="email" />,
      label: "Email",
    },
    {
      name: "fullName",
      label: "Full Name",
    },
    {
      name: "password",
      component: <IonInput type="password" clearOnEdit={false} />,
      label: "Password",
    },
  ];

  const registerUser = (data: any) => {
    console.log("creating a new user account with: ", data);
  };

  return (
    <IonPage>
      <IonContent>
        <div className="ion-padding">
          <IonText color="muted">
            <h2>Create Account</h2>
          </IonText>

          <form onSubmit={handleSubmit(registerUser)}>
            {formFields.map((field, index) => (
              <Input {...field} control={control} key={index} errors={errors} />
            ))}

            <IonItem>
              <IonLabel>I agree to the terms of service</IonLabel>
              <IonCheckbox slot="start" />
            </IonItem>
            <IonButton expand="block" type="submit" className="ion-margin-top">
              Register
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
