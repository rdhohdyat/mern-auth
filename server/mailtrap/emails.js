import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(error);
    throw new Error(`Error sending verification email : ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recepient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recepient,
      template_uuid: "62343fa0-4b4a-4fd2-9c1f-76b8aec60e90",
      template_variables: {
        company_info_name: "Auth Company",
        name: name,
      },
    });

    console.log("Email succesfully", response);
  } catch (error) {}
};
