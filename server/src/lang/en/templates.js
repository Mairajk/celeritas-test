import { config } from 'dotenv'

config()

export default {
    'account-verification': {
        subject: `${process.env.APP_NAME} Login - One-time password (OTP)`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            celpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                          DQid Account Verification
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    Hi {{FULL_NAME}},
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    We received your request for login verification. We have generated a one-time password (OTP) for you to use to verify your account.
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >Your OTP is:
                                  </p>
                                  <div
                                    style="
                                      background-color: #ffffff;
                                      border: 1px solid #ecebe4;
                                      border-radius: 6px;
                                      width: 100%;
                                      padding: 10px 24px;
                                      color: #1c1917;
                                      font-size: 24px;
                                      font-weight: 700;
                                      margin: 0 auto 24px;
                                      display: block;
                                      letter-spacing: 14px;
                                      padding-left: 32px;
                                      box-sizing: border-box;
                                      text-align: center;
                                    "
                                  >
                                    {{CODE}}
                                  </div>
                                  <div
                                    style="
                                      margin-top: 36px;
                                      margin-bottom: 24px;
                                      font-size: 14px;
                                      line-height: 20px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    <p style="color: #c7c7cc">
                                      This OTP is valid for 10 minutes. Please do
                                      not share this code with anyone.
                                    </p>
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      font-weight: 400;
                                      color: #c7c7cc;
                                    "
                                  >
                                    If you did not request an OTP or if you have any
                                    questions, please contact us at
                                    <a
                                      href="mailto: {{SUPPORT_EMAIL}}"
                                      style="color: #2c8c6a"
                                      >{{SUPPORT_EMAIL}}</a
                                    >.
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 24px;
                                      line-height: 26px;
                                      color: #C7C7CC;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'ssn-otp-verification': {
        subject: `${process.env.APP_NAME} Verification - OTP to view secure data`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            celpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                          View Secure Data
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    {{FULL_NAME}},
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    We have received your request to view sensitive data on DQid. Please verify your access using the one-time password (OTP) below:
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    Your OTP is:
                                  </p>
                                  <div
                                    style="
                                      background-color: #ffffff;
                                      border: 1px solid #ecebe4;
                                      border-radius: 6px;
                                      width: 100%;
                                      padding: 10px 24px;
                                      color: #1c1917;
                                      font-size: 24px;
                                      font-weight: 700;
                                      margin: 0 auto 42px;
                                      display: block;
                                      letter-spacing: 14px;
                                      padding-left: 32px;
                                      box-sizing: border-box;
                                      text-align: center;
                                    "
                                  >
                                    {{CODE}}
                                  </div>
                                  <div
                                    style="
                                      margin-top: 36px;
                                      margin-bottom: 24px;
                                      font-size: 14px;
                                      line-height: 20px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    <p style="color: #c7c7cc">
                                      This OTP is valid for 10 minutes. Please do
                                      not share this code with anyone.
                                    </p>
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      font-weight: 400;
                                      color: #c7c7cc;
                                    "
                                  >
                                    If you did not request an OTP or if you have any
                                    questions, please contact us at
                                    <a
                                      href="mailto: {{SUPPORT_EMAIL}}"
                                      style="color: #2c8c6a"
                                      >{{SUPPORT_EMAIL}}</a
                                    >.
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 24px;
                                      line-height: 26px;
                                      color: #c7c7cc;
                                      display: block;
                                    "
                                  >
                                   <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'account-activation': {
        subject: `Activate Your ${process.env.APP_NAME} Account`,
        html: `<div
        style="
          width: 100%;
          margin: auto;
          background-color: #ffffff;
          overflow: hidden;
        "
      >
        <table
          align="center"
          cellspacing="0"
          cellpadding="0"
          style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
        >
          <tbody>
            <tr>
              <td
                style="
                width: 580px;
                position: relative;
                top: -30px;
                color: #ffffff;
                font-family: Inter, sans-serif;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url({{BACKGROUND_IMAGE}});
              "
              >
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="width: 100%; padding: 60px 48px 0">
                        <div style="width: 85px; height: 100%">
                          <img
                            alt="DQid-logo"
                            src="{{LOGO}}"
                            width="85px"
                            height="85px"
                          />
                        </div>
  
                        <p
                          style="
                            font-size: 28px;
                            font-weight: 600;
                            color: #C7C7CC;
                            margin-top: 32px;
                            margin-bottom: 24px;
                          "
                        >
                          Activate your account
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 48px 48px">
                        <table align="center" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="color: #c7c7cc; width: 100%">
                              <div>
                                <p style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                  Hi {{FULL_NAME}},
                                </p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 22px;
                                    color: #c7c7cc;
                                  "
                                >Welcome to DQid!</p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 22px;
                                    margin-bottom: 24px;
                                    color: #c7c7cc;
                                  "
                                >
                                 Please click on the "Activate account" button below to activate your account.
                                </p>
                                <a
                                  target="_blank"
                                  href="{{LINK}}"
                                  style="
                                    background-color: #2c8c6a;
                                    border: 1px solid #2c8c6a;
                                    border-radius: 6px;
                                    width: 100%;
                                    padding: 10px 24px;
                                    color: #ffffff;
                                    font-size: 18px;
                                    font-weight: 500;
                                    margin: 0 auto 42px;
                                    display: block;
                                    box-sizing: border-box;
                                    text-align: center;
                                    text-decoration: none;
                                    text-transform: uppercase;
                                  "
                                >
                                  Activate Account
                                </a>
  
                                <div
                                  style="
                                    font-size: 14px;
                                    margin-bottom: 0px;
                                    margin-top: 15px;
                                    line-height: 26px;
                                    color: #c7c7cc;
                                    display: block;
                                  "
                                >
                                  <span>Thank you, <br /></span>
                                  ${process.env.APP_NAME}
                                  <br />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`,
    },
    'driver-leaving-carrier': {
        subject: `Driver has left {{CARRIER_NAME}} on ${process.env.APP_NAME}`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                    width: 580px;
                    position: relative;
                    top: -30px;
                    color: #ffffff;
                    font-family: Inter, sans-serif;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url({{BACKGROUND_IMAGE}});
                  "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                            {{DRIVER_NAME}} left the Carrier
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                    {{CARRIER_NAME}},
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                  {{DRIVER_NAME}} has left      {{CARRIER_NAME}} on DQid.
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 42px;
                                      color: #c7c7cc;
                                    "
                                  >We will maintain a record of the DQ File for your records for up to 3 years in accordance with compliance and regulations. You may access these from the web portal.
                                  </p>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 15px;
                                      line-height: 26px;
                                      color: #c7c7cc;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'contact-us': {
        subject: `${process.env.APP_NAME} - Contact Us`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            celpadding="0"
            style="background: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                    width: 580px;
                    position: relative;
                    top: -30px;
                    color: #ffffff;
                    font-family: Inter, sans-serif;
                    background-image: url({{BACKGROUND_IMAGE}});
                    background-repeat: no-repeat;
                    background-size: contain;
                  "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 60px; height: 100%">
                            <img
                              alt="logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                          DQid CONTACT INFORMATION
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p style="font-size: 14px; margin-bottom: 14px; color: #c7c7cc;">
                                    Dear Admin,
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 42px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    {{FULLNAME}} has been in contact with us. Please
                                    find the contact details provided below.
                                  </p>
                                  <div style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                    <ul style="list-style: none; padding-left: 0">
                                      <li style="margin-bottom: 14px">
                                        Full Name:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{FULLNAME}}</span
                                        >
                                      </li>
                                      <li style="margin-bottom: 14px">
                                        Email address:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{EMAIL}}</span
                                        >
                                      </li>
                                      <li style="margin-bottom: 14px">
                                        Phone number:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{PHONENUMBER}}</span
                                        >
                                      </li>
                                      <li style="margin-bottom: 14px">
                                        Reason to Contact:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{REASON}}</span
                                        >
                                      </li>
                                      <li style="margin-bottom: 14px">
                                        Message:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{MESSAGE}}
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 15px;
                                      line-height: 26px;
                                      color: #C7C7CC;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="margin: 0 auto; text-align: center">
                          <div style="margin-top: 0px; padding: 0 8px">
                            <div
                              style="
                                margin-bottom: 20px;
                                text-align: center;
                                font-size: 12px;
                                color: #c7c7cc;
                              "
                            >
                              <p>
                                Copyright &copy; {{YEAR}} - ${process.env.APP_NAME},
                                Inc · All Rights Reserved.
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'contact-us-web': {
        subject: `${process.env.APP_NAME} - Contact Us Query`,
        html: `
      <div
        style="
          width: 100%;
          margin: auto;
          background-color: #ffffff;
          overflow: hidden;
        "
      >
        <table
          align="center"
          cellspacing="0"
          celpadding="0"
          style="background: linear-gradient(to bottom, #16242b, #3a4549)"
        >
          <tbody>
            <tr>
              <td
                style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-image: url({{BACKGROUND_IMAGE}});
                  background-repeat: no-repeat;
                  background-size: contain;
                "
              >
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="width: 100%; padding: 60px 48px 0">
                        <div style="width: 60px; height: 100%">
                          <img
                            alt="logo"
                            src="{{LOGO}}"
                            width="85px"
                            height="85px"
                          />
                        </div>
  
                        <p
                          style="
                            font-size: 28px;
                            font-weight: 600;
                            color: #C7C7CC;
                            margin-top: 32px;
                            margin-bottom: 24px;
                          "
                        >
                        DQid CONTACT INFORMATION
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  celpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 48px 48px">
                        <table align="center" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="color: #c7c7cc; width: 100%">
                              <div>
                                <p style="font-size: 14px; margin-bottom: 14px; color: #c7c7cc;">
                                  Hi Admin,
                                </p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 20px;
                                    margin-bottom: 42px;
                                    color: #c7c7cc;
                                  "
                                >
                                You have received a new contact query. Below are the details:
                                </p>
                                <div style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                  <ul style="list-style: none; padding-left: 0">
                                    <li style="margin-bottom: 14px">
                                      Full Name:
                                      <span
                                        style="margin-left: 4px; font-weight: 600"
                                        >{{FULLNAME}}</span
                                      >
                                    </li>
                                    <li style="margin-bottom: 14px">
                                    Carrier Name:
                                    <span
                                      style="margin-left: 4px; font-weight: 600"
                                      >{{CARRIER_NAME}}</span
                                    >
                                  </li>
                                    <li style="margin-bottom: 14px">
                                      Work Email:
                                      <span
                                        style="margin-left: 4px; font-weight: 600"
                                        >{{EMAIL}}</span
                                      >
                                    </li>
                                    <li style="margin-bottom: 14px">
                                      Work Phone Number:
                                      <span
                                        style="margin-left: 4px; font-weight: 600"
                                        >{{PHONENUMBER}}</span
                                      >
                                    </li>
                                    <li style="margin-bottom: 14px">
                                    Fleet Size:
                                    <span
                                      style="margin-left: 4px; font-weight: 600"
                                      >{{FLEET_SIZE}}</span
                                    >
                                  </li>
                                    <li style="margin-bottom: 14px">
                                      Industry:
                                      <span
                                        style="margin-left: 4px; font-weight: 600"
                                        >{{INDUSTRY}}</span
                                      >
                                    </li>
                                    <li style="margin-bottom: 14px">
                                      Message:
                                      <span
                                        style="margin-left: 4px; font-weight: 600"
                                        >{{MESSAGE}}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                                <div
                                  style="
                                    font-size: 14px;
                                    margin-bottom: 0px;
                                    margin-top: 15px;
                                    line-height: 26px;
                                    color: #C7C7CC;
                                    display: block;
                                  "
                                >
                                  <span>Thank you, <br /></span>
                                  ${process.env.APP_NAME}
                                  <br />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  celpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="margin: 0 auto; text-align: center">
                        <div style="margin-top: 0px; padding: 0 8px">
                          <div
                            style="
                              margin-bottom: 20px;
                              text-align: center;
                              font-size: 12px;
                              color: #c7c7cc;
                            "
                          >
                            <p>
                              Copyright &copy; {{YEAR}} - ${process.env.APP_NAME},
                              Inc · All Rights Reserved.
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`,
    },
    'driver-acceptance-confirmation': {
        subject: ` Driver has joined {{CARRIER_NAME}} on ${process.env.APP_NAME}`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                            Driver Acceptance Confirmation
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                    {{CARRIER_NAME}},
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 22px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    {{DRIVER_NAME}} has           joined {{CARRIER_NAME}}       on DQid.
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 22px;
                                      margin-bottom: 42px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    You may now view, verify, and manage their documents pertaining to their DQ File from the web portal.
                                  </p>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 15px;
                                      line-height: 26px;
                                      color: #c7c7cc;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'export-files': {
        subject: `${process.env.APP_NAME} - Data export complete`,
        html: `
      <div
        style="
          width: 100%;
          margin: auto;
          background-color: #ffffff;
          overflow: hidden;
        "
      >
        <table
          align="center"
          cellspacing="0"
          cellpadding="0"
          style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
        >
          <tbody>
            <tr>
              <td
                style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
              >
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="width: 100%; padding: 60px 48px 0">
                        <div style="width: 85px; height: 100%">
                          <img
                            alt="DQid-logo"
                            src="{{LOGO}}"
                            width="85px"
                            height="85px"
                          />
                        </div>
  
                        <p
                          style="
                            font-size: 28px;
                            font-weight: 600;
                            color: #C7C7CC;
                            margin-top: 32px;
                            margin-bottom: 24px;
                          "
                        >
                          Export {{FILE_TYPE}} Files
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 48px 48px">
                        <table align="center" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="color: #c7c7cc; width: 100%">
                              <div>
                                <p style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                  {{NAME}},
                                </p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 20px;
                                    margin-bottom: 24px;
                                    color: #c7c7cc;
                                  "
                                >
                                  Your request for exporting data to CSV has been successfully completed. You may download the file using the link below.
                                </p>
                                <a
                                  target="_blank"
                                  href="{{LINK}}"
                                  style="
                                    background-color: #2c8c6a;
                                    border: 1px solid #2c8c6a;
                                    border-radius: 6px;
                                    width: 100%;
                                    padding: 10px 24px;
                                    color: #ffffff;
                                    font-size: 18px;
                                    font-weight: 500;
                                    margin: 0 auto 42px;
                                    display: block;
                                    box-sizing: border-box;
                                    text-align: center;
                                    text-decoration: none;
                                    text-transform: uppercase;
                                  "
                                >
                                  Download
                                </a>
                                <div
                                  style="
                                    font-size: 14px;
                                    margin-bottom: 0px;
                                    margin-top: 15px;
                                    line-height: 26px;
                                    color: #c7c7cc;
                                    display: block;
                                  "
                                >
                                  <span>Thank you, <br /></span>
                                  ${process.env.APP_NAME}
                                  <br />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`,
    },
    'account-information-update': {
        subject: `${process.env.APP_NAME} - Account Information Update`,
        html: `<div style=" margin: 15px auto;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #ffff;
      color: #111827;
      font-family: Arial, Helvetica, sans-serif;">
        <div
          style="
            width: 580px;
            background: #F3F4F6;
            margin: 0 auto 0;
            border-radius: 12px;
            position: relative;
            border: 1px solid #D1D5DB;
            overflow: hidden;
          "
        >
        <div
        style="
          background-color: #20346c;
          padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 24px;
          padding-right: 24px;
          float: left;
          width: 94%;
        "
      >
        <div style="float: left; width: 50%">
          <img
            src="{{LOGO}}"
            width="193px"
            height="42px"
            alt="DQid logo"
          />
        </div>
        <div style="float: right; text-align: right; width: 50%">
          <p
            style="
              color: #ffff;
              margin-bottom: 4px;
              font-size: 11px;
              padding-right: 22px;
            "
          >
            Powered by
          </p>
          <img
            src="{{SPONSOR_LOGO}}"
            width="82px"
            height="19px"
            alt="sponsor logo"
          />
        </div>
      </div>
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            width="100%"
            style="margin: auto; padding: 24px;"
          >
            <tr>
              <td>
                <div style="margin-bottom: 5px; font-size: 16px; color: #111827">
                  <b>Hi {{DRIVER_NAME}},</b>
                </div>
                <table
                  width="100%"
                  style="color: #111827; font-size: 15px; line-height: 20px"
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                >
                  <tr>
                    <td>
                      <p style="padding-bottom: 10px">
                       
                         You have been disassociated from your current carrier {{CARRIER_NAME}}.Please contact your carrier or DQid system admin.
                      </p>
                      
                      <p style="margin-bottom: 0px">
                        Thank you,<br />
                        <strong>${process.env.APP_NAME}</strong>
                        <br />
                        <br />
                        <br />
                        Email:
                        <a
                          href="mailto:{{SUPPORT_EMAIL}}"
                          style="color: #20346C"
                          >{{SUPPORT_EMAIL}}</a
                        >
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <div style="text-align: center">
          <p
            style="
              margin-top: 28px;
              font-size: 14px;
              color: #52525B;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            &copy; {{YEAR}} ${process.env.APP_NAME}, Inc. All rights reserved.
          </p>
        </div>
      </div>`,
    },
    'carrier-invoice': {
        subject: `Invoice for ${process.env.APP_NAME} Platform Access`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                    width: 600px;
                    position: relative;
                    top: -30px;
                    color: #ffffff;
                    font-family: Inter, sans-serif;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-image: url({{BACKGROUND_IMAGE}});
                  "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 80px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                            "
                          >
                            Carrier Invoice
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 56px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p style="font-size: 14px; margin-bottom: 42px">
                                    {{CARRIER_OWNER_NAME}},
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 42px;
                                    "
                                  >
                                    Your DQid subscription payment is now due. You are subscribed to the {{CYCLE}} plan. The invoice is attached to this email.
                                    
                                  </p>
                                  <div style="margin: 0 auto 42px; width: 100%">
                                    {{INVOICE_HTML}}
                                  </div>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 42px;
                                    "
                                  >
                                    If you have any questions, please reach out to us.
                                  </p>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 15px;
                                      line-height: 26px;
                                      color: #c7c7cc;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                 <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    subscription: {
        subject: `${process.env.APP_NAME} - Subscription Invoice`,
        html: `<div>{{INVOICE_HTML}}</div>`,
    },
    'disassociate-driver': {
        subject: `${process.env.APP_NAME} - Driver Disassociation from {{CARRIER_NAME}}`,
        html: `<div
      style="
        width: 100%;
        margin: auto;
        background-color: #FFFFFF;
        overflow: hidden;
      "
    >
      <table
        align="center"
        cellspacing="0"
        celpadding="0"
        style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
      >
        <tbody>
          <tr>
            <td
              style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #FFFFFF;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
            >
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="width: 100%; padding: 60px 48px 0">
                      <div style="width: 85px; height: 100%">
                        <img
                          alt="DQid-logo"
                          src="{{LOGO}}"
                          width="85px"
                          height="85px"
                        />
                      </div>
                      <p
                        style="
                          font-size: 24px;
                          font-weight: 600;
                          color: #C7C7CC;
                          margin-top: 32px;
                          margin-bottom: 24px;
                        "
                      >
                        Carrier Disassociation Notice
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                celpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px 48px">
                      <table align="center" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="color: #C7C7CC; width: 100%">
                            <div>
                              <p
                                style="
                                  font-size: 14px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                                Dear {{DRIVER_NAME}},
                              </p>
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 42px;
                                  color: #C7C7CC;
                                "
                              >
                                You've been disassociated from your current carrier {{CARRIER_NAME}}. Please reach out to the admin or carrier for more details.
                              </p>
                              <div
                                style="
                                  font-size: 14px;
                                  margin-bottom: 0px;
                                  margin-top: 24px;
                                  line-height: 26px;
                                  color: #C7C7CC;
                                  display: block;
                                "
                              >
                                <span>Thank you, <br /></span>
                                ${process.env.APP_NAME}
                                <br />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                celpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="margin: 0 auto; text-align: center">
                      <div style="margin-top: 0px; padding: 0 8px">
                        <div
                          style="
                            margin-bottom: 20px;
                            text-align: center;
                            font-size: 12px;
                            color: #C7C7CC;
                          "
                        >
                          <p>
                            Copyright &copy; {{YEAR}} - ${process.env.APP_NAME},
                            Inc · All Rights Reserved.
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`,
    },
    'mandatory-checklist': {
        subject: `${process.env.APP_NAME} - Checklist made mandatory`,
        html: `{{Template}}`,
    },
    'driver-subscription': {
        subject: `${process.env.APP_NAME} - DQid Premium Subscription`,
        html: `
        <div
      style="
        width: 100%;
        margin: auto;
        background-color: #FFFFFF;
        overflow: hidden;
      "
    >
      <table
        align="center"
        cellspacing="0"
        cellpadding="0"
        style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
      >
        <tbody>
          <tr>
            <td
              style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #FFFFFF;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
            >
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="width: 100%; padding: 60px 48px 0">
                      <div style="width: 85px; height: 100%">
                        <img
                          alt="DQid-logo"
                          src="{{LOGO}}"
                          width="85px"
                          height="85px"
                        />
                      </div>
                      <p
                        style="
                          font-size: 28px;
                          font-weight: 600;
                          color: #C7C7CC;
                          margin-top: 32px;
                          margin-bottom: 24px;
                        "
                      >
                        DQid Premium Subscription
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px 48px">
                      <table cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="color: #c7c7cc; width: 100%">
                            <div>
                              <p
                                style="
                                  font-size: 14px;
                                  margin-bottom: 24px;
                                  color: #c7c7cc;
                                "
                              >
                                {{DRIVER_NAME}},
                              </p>
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                               Your subscription for DQid Premium has been processed.
                              </p>
                              <div
                                style="
                                  font-size: 14px;
                                  margin-bottom: 0px;
                                  margin-top: 15px;
                                  line-height: 26px;
                                  color: #C7C7CC;
                                  display: block;
                                "
                              >
                                <span>Thank you, <br /></span>
                                ${process.env.APP_NAME} team.
                                <br />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`,
    },
    'card-expiration': {
        subject: `${process.env.APP_NAME} - Card Expired`,
        html: `
      <div
    style="
      width: 100%;
      margin: auto;
      background-color: #FFFFFF;
      overflow: hidden;
    "
  >
    <table
      align="center"
      cellspacing="0"
      cellpadding="0"
      style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
    >
      <tbody>
        <tr>
          <td
            style="
                width: 580px;
                position: relative;
                top: -30px;
                color: #FFFFFF;
                font-family: Inter, sans-serif;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url({{BACKGROUND_IMAGE}});
              "
          >
            <table
              align="center"
              cellspacing="0"
              cellpadding="0"
              style="width: 100%"
            >
              <tbody>
                <tr>
                  <td style="width: 100%; padding: 60px 48px 0">
                    <div style="width: 85px; height: 100%">
                      <img
                        alt="DQid-logo"
                        src="{{LOGO}}"
                        width="85px"
                        height="85px"
                      />
                    </div>
                    <p
                      style="
                        font-size: 28px;
                        font-weight: 600;
                        color: #C7C7CC;
                        margin-top: 32px;
                        margin-bottom: 24px;
                      "
                    >
                      Card Expired
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              cellspacing="0"
              cellpadding="0"
              style="width: 100%"
            >
              <tbody>
                <tr>
                  <td style="padding: 0 48px 48px">
                    <table align="center" cellspacing="0" cellpadding="0">
                      <tr>
                        <td style="color: #C7C7CC; width: 100%">
                          <div>
                            <p style="font-size: 14px; margin-bottom: 24px">
                              {{DRIVER_NAME}},
                            </p>
                            <p
                              style="
                                font-size: 14px;
                                line-height: 20px;
                                margin-bottom: 24px;
                                color: #C7C7CC;
                              "
                            >
                              We would like to inform you that your card has been expired, kindly add new card by clicking on the following link
                            </p>
                            <a
                            target="_blank"
                            href="{{LINK}}"
                            style="
                              background-color: #2c8c6a;
                              border: 1px solid #2c8c6a;
                              border-radius: 6px;
                              width: 100%;
                              padding: 10px 24px;
                              color: #ffffff;
                              font-size: 18px;
                              font-weight: 500;
                              margin: 0 auto 42px;
                              display: block;
                              box-sizing: border-box;
                              text-align: center;
                              text-decoration: none;
                              text-transform: uppercase;
                            "
                          >
                            LINK
                          </a>
                            <div
                              style="
                                font-size: 14px;
                                margin-bottom: 0px;
                                margin-top: 15px;
                                line-height: 26px;
                                color: #C7C7CC;
                                display: block;
                              "
                            >
                              <span>Thank you, <br /></span>
                              ${process.env.APP_NAME}
                            </div>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              align="center"
              cellspacing="0"
              cellpadding="0"
              style="width: 100%"
            >
              <tbody>
                <tr>
                  <td style="padding: 0 48px">
                    <div>
                      <div
                        style="
                          display: inline;
                          font-size: 12px;
                          line-height: 16px;
                          font-weight: 700;
                          color: #57534E;
                          margin-bottom: 42px
                        "
                      >
                        <span
                          ><a
                            href="#"
                            style="
                              text-decoration: none;
                              max-width: 125px;
                              height: 100%;
                              margin-right: 8px;
                            "
                            ><img
                              alt="App store"
                              src="{{IOS_APP_LINK}}"
                              width="125px"
                              height="44px" /></a
                        ></span>
                        <span
                          ><a
                            href="#"
                            style="
                              text-decoration: none;
                              max-width: 125px;
                              height: 100%;
                            "
                          >
                            <img
                              alt="google play store"
                              src="{{ANDROID_APP_LINK}}"
                              width="125px"
                              height="44px" /></a
                        ></span>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
    },
    'card-expiration-soon': {
        subject: `${process.env.APP_NAME} - Card Expiration Soon`,
        html: `
    <div
  style="
    width: 100%;
    margin: auto;
    background-color: #FFFFFF;
    overflow: hidden;
  "
>
  <table
    align="center"
    cellspacing="0"
    cellpadding="0"
    style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
  >
    <tbody>
      <tr>
        <td
          style="
              width: 580px;
              position: relative;
              top: -30px;
              color: #FFFFFF;
              font-family: Inter, sans-serif;
              background-size: contain;
              background-repeat: no-repeat;
              background-image: url({{BACKGROUND_IMAGE}});
            "
        >
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="width: 100%; padding: 60px 48px 0">
                  <div style="width: 85px; height: 100%">
                    <img
                      alt="DQid-logo"
                      src="{{LOGO}}"
                      width="85px"
                      height="85px"
                    />
                  </div>
                  <p
                    style="
                      font-size: 28px;
                      font-weight: 600;
                      color: #C7C7CC;
                      margin-top: 32px;
                      margin-bottom: 24px;
                    "
                  >
                    Card Expiration Soon
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="padding: 0 48px 48px">
                  <table align="center" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="color: #C7C7CC; width: 100%">
                        <div>
                          <p style="font-size: 14px; margin-bottom: 24px">
                            {{DRIVER_NAME}},
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              line-height: 20px;
                              margin-bottom: 24px;
                              color: #C7C7CC;
                            "
                          >
                            {{BODY}}
                          </p>
                          <a
                          target="_blank"
                          href="{{LINK}}"
                          style="
                            background-color: #2c8c6a;
                            border: 1px solid #2c8c6a;
                            border-radius: 6px;
                            width: 100%;
                            padding: 10px 24px;
                            color: #ffffff;
                            font-size: 18px;
                            font-weight: 500;
                            margin: 0 auto 42px;
                            display: block;
                            box-sizing: border-box;
                            text-align: center;
                            text-decoration: none;
                            text-transform: uppercase;
                          "
                        >
                          LINK
                        </a>
                          <div
                            style="
                              font-size: 14px;
                              margin-bottom: 0px;
                              margin-top: 15px;
                              line-height: 26px;
                              color: #C7C7CC;
                              display: block;
                            "
                          >
                            <span>Thank you, <br /></span>
                            ${process.env.APP_NAME}
                            <br />
                            Web:
                            <a
                              href="${process.env.APP_URL}"
                              target="_blank"
                              style="color: #2C8C6A"
                              >${process.env.APP_URL}
                            </a>
                            <br />
                            Email:
                            <a
                              href="mailto: {{SUPPORT_EMAIL}}"
                              style="color: #2C8C6A"
                              >{{SUPPORT_EMAIL}}</a
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="padding: 0 48px">
                  <div>
                    <div
                      style="
                        display: inline;
                        font-size: 12px;
                        line-height: 16px;
                        font-weight: 700;
                        color: #57534E;
                      "
                    >
                      <span
                        ><a
                          href="#"
                          style="
                            text-decoration: none;
                            max-width: 125px;
                            height: 100%;
                            margin-right: 8px;
                          "
                          ><img
                            alt="App store"
                            src="{{IOS_APP_LINK}}"
                            width="125px"
                            height="44px" /></a
                      ></span>
                      <span
                        ><a
                          href="#"
                          style="
                            text-decoration: none;
                            max-width: 125px;
                            height: 100%;
                          "
                        >
                          <img
                            alt="google play store"
                            src="{{ANDROID_APP_LINK}}"
                            width="125px"
                            height="44px" /></a
                      ></span>
                    </div>
                    <div
                      style="
                        margin-top: 32px;
                      "
                    >
                      <div
                          style="
                            text-align: center;
                            font-size: 12px;
                            color: #c7c7cc;
                          "
                        >
                          <p>
                            Copyright &copy; {{YEAR}} - ${process.env.APP_NAME},
                            Inc · All Rights Reserved.
                          </p>
                        </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    },
    'free-trial-expiration': {
        subject: `${process.env.APP_NAME} - {{EMAIL_SUBJECT}}`,
        html: `
    <div
  style="
    width: 100%;
    margin: auto;
    background-color: #FFFFFF;
    overflow: hidden;
  "
>
  <table
    align="center"
    cellspacing="0"
    cellpadding="0"
    style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
  >
    <tbody>
      <tr>
        <td
          style="
              width: 580px;
              position: relative;
              top: -30px;
              color: #FFFFFF;
              font-family: Inter, sans-serif;
              background-size: contain;
              background-repeat: no-repeat;
              background-image: url({{BACKGROUND_IMAGE}});
            "
        >
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="width: 100%; padding: 60px 48px 0">
                  <div style="width: 85px; height: 100%">
                    <img
                      alt="DQid-logo"
                      src="{{LOGO}}"
                      width="85px"
                      height="85px"
                    />
                  </div>
                  <p
                    style="
                      font-size: 28px;
                      font-weight: 600;
                      color: #C7C7CC;
                      margin-top: 32px;
                      margin-bottom: 24px;
                    "
                  >
                    {{HEADER}}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            align="center"
            cellspacing="0"
            cellpadding="0"
            style="width: 100%"
          >
            <tbody>
              <tr>
                <td style="padding: 0 48px 48px">
                  <table align="center" cellspacing="0" cellpadding="0">
                    <tr>
                      <td style="color: #C7C7CC; width: 100%">
                        <div>
                          <p style="font-size: 14px; margin-bottom: 24px">
                            {{DRIVER_NAME}},
                          </p>
                          <p
                            style="
                              font-size: 14px;
                              line-height: 20px;
                              margin-bottom: 24px;
                              color: #C7C7CC;
                            "
                          >
                            {{BODY}}
                          </p>
                          <div
                            style="
                              font-size: 14px;
                              margin-bottom: 0px;
                              margin-top: 15px;
                              line-height: 26px;
                              color: #C7C7CC;
                              display: block;
                            "
                          >
                            <span>Thank you, <br /></span>
                            ${process.env.APP_NAME}
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
    },
    'driver-activation': {
        subject: `${process.env.APP_NAME} - Activate your account`,
        html: `
        <div
      style="
        width: 100%;
        margin: auto;
        background-color: #FFFFFF;
        overflow: hidden;
      "
    >
      <table
        align="center"
        cellspacing="0"
        cellpadding="0"
        style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
      >
        <tbody>
          <tr>
            <td
              style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #FFFFFF;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
            >
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="width: 100%; padding: 60px 48px 0">
                      <div style="width: 85px; height: 100%">
                        <img
                          alt="DQid-logo"
                          src="{{LOGO}}"
                          width="85px"
                          height="85px"
                        />
                      </div>
                      <p
                        style="
                          font-size: 28px;
                          font-weight: 600;
                          color: #C7C7CC;
                          margin-top: 32px;
                          margin-bottom: 24px;
                        "
                      >
                             Activate your account
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px 48px">
                      <table align="center" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="color: #C7C7CC; width: 100%">
                            <div>
                              <p style="font-size: 14px; margin-bottom: 24px">
                                 Hi {{FULL_NAME}},
                              </p>
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                                 Welcome to the DQid!  You've been added
                                 as a {{ROLE_TITLE}}.
                              </p>
                               <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                                Download the app and enjoy our premium driver services.
                              </p>
                              <div
                                style="
                                  font-size: 14px;
                                  margin-bottom: 0px;
                                  margin-top: 15px;
                                  line-height: 26px;
                                  color: #C7C7CC;
                                  display: block;
                                "
                              >
                                <span>Thank you, <br /></span>
                                ${process.env.APP_NAME}
                                <br />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px">
                      <div>
                        <div
                          style="
                            display: inline;
                            font-size: 12px;
                            line-height: 16px;
                            font-weight: 700;
                            color: #57534E;
                          "
                        >
                          <span
                            ><a
                              href="#"
                              style="
                                text-decoration: none;
                                max-width: 125px;
                                height: 100%;
                                margin-right: 8px;
                              "
                              ><img
                                alt="App store"
                                src="{{IOS_APP_LINK}}"
                                width="125px"
                                height="44px" /></a
                          ></span>
                          <span
                            ><a
                              href="#"
                              style="
                                text-decoration: none;
                                max-width: 125px;
                                height: 100%;
                              "
                            >
                              <img
                                alt="google play store"
                                src="{{ANDROID_APP_LINK}}"
                                width="125px"
                                height="44px" /></a
                          ></span>
                        </div>
                        <div
                          style="
                            margin-top: 16px;
                            margin-bottom: 20px;
                            border-top: 1px solid #606064;
                            padding-top: 12px;
                          "
                        >
                          <p
                            style="
                              color: #C7C7CC;
                              font-size: 12px;
                              line-height: 16px;
                            "
                          >
                            If you have questions or need help, don't hesitate
                            to contact our support team!
                          </p>
                          <div
                            style="
                              display: inline;
                              font-size: 12px;
                              line-height: 16px;
                              font-weight: 700;
                              color: #57534E;
                            "
                          >
                            <span style="border-right: 1px solid #606064"
                              ><a
                                href="${process.env.APP_URL}privacy-policy"
                                style="
                                  color: #C7C7CC;
                                  text-decoration: none;
                                  padding-right: 8px;
                                "
                                >Privacy policy</a
                              ></span
                            >
                            <span
                              ><a
                                href="${process.env.APP_URL}contact-us"
                                style="
                                  color: #C7C7CC;
                                  text-decoration: none;
                                  padding-left: 8px;
                                "
                                >Contact us</a
                              ></span
                            >
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`,
    },
    'driver-cancel-subscription': {
        subject: `${process.env.APP_NAME} - Cancel Driver Subscription`,
        html: `
        <div
      style="
        width: 100%;
        margin: auto;
        background-color: #FFFFFF;
        overflow: hidden;
      "
    >
      <table
        align="center"
        cellspacing="0"
        cellpadding="0"
        style="background-image: linear-gradient(to bottom, #16242B, #3A4549)"
      >
        <tbody>
          <tr>
            <td
              style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #FFFFFF;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
            >
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="width: 100%; padding: 60px 48px 0">
                      <div style="width: 85px; height: 100%">
                        <img
                          alt="DQid-logo"
                          src="{{LOGO}}"
                          width="85px"
                          height="85px"
                        />
                      </div>
                      <p
                        style="
                          font-size: 28px;
                          font-weight: 600;
                          color: #C7C7CC;
                          margin-top: 32px;
                          margin-bottom: 24px;
                        "
                      >
                        CANCEL DRIVER SUBSCRIPTION
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px 48px">
                      <table align="center" cellspacing="0" cellpadding="0">
                        <tr>
                          <td style="color: #C7C7CC; width: 100%">
                            <div>
                              <p style="font-size: 14px; margin-bottom: 24px">
                                Dear {{DRIVER_NAME}},
                              </p>
                              <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                              This is to inform you that your monthly subscription has been cancelled.
                              </p>
                               <p
                                style="
                                  font-size: 14px;
                                  line-height: 20px;
                                  margin-bottom: 24px;
                                  color: #C7C7CC;
                                "
                              >
                                Download the app and enjoy our premium driver services.
                              </p>
                              <div
                                style="
                                  font-size: 14px;
                                  margin-bottom: 0px;
                                  margin-top: 15px;
                                  line-height: 26px;
                                  color: #C7C7CC;
                                  display: block;
                                "
                              >
                                <span>Thank you, <br /></span>
                                ${process.env.APP_NAME}
                                <br />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align="center"
                cellspacing="0"
                cellpadding="0"
                style="width: 100%"
              >
                <tbody>
                  <tr>
                    <td style="padding: 0 48px">
                      <div>
                        <div
                          style="
                            margin-top: 32px;
                          "
                        >
                          <div
                              style="
                                text-align: center;
                                font-size: 12px;
                                color: #c7c7cc;
                              "
                            >
                              <p>
                                Copyright &copy; {{YEAR}} - ${process.env.APP_NAME},
                                Inc · All Rights Reserved.
                              </p>
                            </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>`,
    },
    'user-removed': {
        subject: `${process.env.APP_NAME} - Account Deletion Request`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            celpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                          Account Deletion Request
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    {{ADMIN_NAME}}
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 26px;
                                      color: #c7c7cc;
                                    "
                                  >
                                  We have received a request from {{FULL_NAME}} to delete their account from our system. Below are the details of the request:
                                  </p>
                                      <div style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                    <div style="list-style: none; padding-left: 0">
                                      <div style="margin-bottom: 8px">
                                        Driver Name:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{FULL_NAME}}</span
                                        >
                                      </div>
                                      <div>
                                        Driver Email:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{DRIVER_EMAIL}}</span
                                        >
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    style="
                                      margin-top: 36px;
                                      margin-bottom: 16px;
                                      font-size: 14px;
                                      line-height: 20px;
                                      color: #c7c7cc;
                                    "
                                  >
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 24px;
                                      line-height: 26px;
                                      color: #C7C7CC;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
    'modification-email-alert': {
        subject: `Account Information Updated`,
        html: `<div
        style="
          width: 100%;
          margin: auto;
          background-color: #ffffff;
          overflow: hidden;
        "
      >
        <table
          align="center"
          cellspacing="0"
          cellpadding="0"
          style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
        >
          <tbody>
            <tr>
              <td
                style="
                width: 580px;
                position: relative;
                top: -30px;
                color: #ffffff;
                font-family: Inter, sans-serif;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url({{BACKGROUND_IMAGE}});
              "
              >
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="width: 100%; padding: 60px 48px 0">
                        <div style="width: 85px; height: 100%">
                          <img
                            alt="DQid-logo"
                            src="{{LOGO}}"
                            width="85px"
                            height="85px"
                          />
                        </div>
  
                        <p
                          style="
                            font-size: 28px;
                            font-weight: 600;
                            color: #C7C7CC;
                            margin-top: 32px;
                            margin-bottom: 24px;
                          "
                        >
                          DQid Account Information Updated
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 48px 48px">
                        <table align="center" cellspacing="0" cellpadding="0">
                          <tr>
                            <td style="color: #c7c7cc; width: 100%">
                              <div>
                                <p style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                  Hi {{FULL_NAME}},
                                </p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 22px;
                                    color: #c7c7cc;
                                  "
                                >We wanted to inform you that your account information has been updated by the system administrator.</p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 22px;
                                    margin-bottom: 24px;
                                    color: #c7c7cc;
                                  "
                                >
                                 You can now log in using the new details:
                                </p>
                                <div style="font-size: 14px; margin-bottom: 42px; color: #c7c7cc;">
                                    <ul style="list-style: none; padding-left: 0">
                                      <li style="margin-bottom: 14px">
                                        Email address:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{EMAIL}}</span
                                        >
                                      </li>
                                      <li style="margin-bottom: 14px">
                                        Phone number:
                                        <span
                                          style="margin-left: 4px; font-weight: 600"
                                          >{{PHONENUMBER}}</span
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                 <p
                                  style="
                                    font-size: 14px;
                                    line-height: 22px;
                                    color: #c7c7cc;
                                  "
                                >If you have any questions or concerns, please reach out to us.</p>
                                <div
                                  style="
                                    font-size: 14px;
                                    margin-bottom: 0px;
                                    margin-top: 15px;
                                    line-height: 26px;
                                    color: #c7c7cc;
                                    display: block;
                                  "
                                >
                                  <span>Thank you, <br /></span>
                                  ${process.env.APP_NAME}
                                  <br />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`,
    },
    'secure-file-sharing': {
        subject: `${process.env.APP_NAME} Access Shared File`,
        html: `<div
        style="
          width: 100%;
          margin: auto;
          background-color: #ffffff;
          overflow: hidden;
        "
      >
        <table
          align="center"
          cellspacing="0"
          celpadding="0"
          style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
        >
          <tbody>
            <tr>
              <td
                style="
                width: 580px;
                position: relative;
                top: -30px;
                color: #ffffff;
                font-family: Inter, sans-serif;
                background-size: contain;
                background-repeat: no-repeat;
                background-image: url({{BACKGROUND_IMAGE}});
              "
              >
                <table
                  align="center"
                  cellspacing="0"
                  cellpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="width: 100%; padding: 60px 48px 0">
                        <div style="width: 85px; height: 100%">
                          <img
                            alt="DQid-logo"
                            src="{{LOGO}}"
                            width="85px"
                            height="85px"
                          />
                        </div>
  
                        <p
                          style="
                            font-size: 28px;
                            font-weight: 600;
                            color: #C7C7CC;
                            margin-top: 32px;
                            margin-bottom: 24px;
                          "
                        >
                        Access Your Shared File
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table
                  align="center"
                  cellspacing="0"
                  celpadding="0"
                  style="width: 100%"
                >
                  <tbody>
                    <tr>
                      <td style="padding: 0 48px 48px">
                        <table align="center" cellspacing="0" cellpadding="0" width="100%">
                          <tr>
                            <td style="color: #c7c7cc; width: 100%">
                              <div>
                                
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 20px;
                                    margin-bottom: 24px;
                                    color: #c7c7cc;
                                  "
                                >
                                  {{DRIVER_NAME}} has shared a secure file with you.
                                </p>
                                <p
                                  style="
                                    font-size: 14px;
                                    line-height: 20px;
                                    margin-bottom: 24px;
                                    color: #c7c7cc;
                                  "
                                >To access the file, click on the link below:
                                </p>
                                <a
                                  target="_blank"
                                  href="{{LINK}}"
                                  style="
                                    background-color: #2c8c6a;
                                    border: 1px solid #2c8c6a;
                                    border-radius: 6px;
                                    width: 100%;
                                    padding: 10px 24px;
                                    color: #ffffff;
                                    font-size: 18px;
                                    font-weight: 500;
                                    margin: 0 auto 42px;
                                    display: block;
                                    box-sizing: border-box;
                                    text-align: center;
                                    text-decoration: none;
                                    text-transform: uppercase;
                                  "
                                >
                                  Access File
                                </a>
                                <div
                                  style="
                                    margin-top: 36px;
                                    margin-bottom: 24px;
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: #c7c7cc;
                                  "
                                >
                                 
                                </div>
                                {{EXPIRATION_NOTE}}
                                <div
                                  style="
                                    font-size: 14px;
                                    margin-bottom: 0px;
                                    margin-top: 24px;
                                    line-height: 26px;
                                    color: #C7C7CC;
                                    display: block;
                                  "
                                >
                                  <span>Thank you, <br /></span>
                                  ${process.env.APP_NAME}
                                  <br />
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      `,
    },
    'shared-file-otp': {
        subject: `${process.env.APP_NAME} One-time password (OTP)`,
        html: `
        <div
          style="
            width: 100%;
            margin: auto;
            background-color: #ffffff;
            overflow: hidden;
          "
        >
          <table
            align="center"
            cellspacing="0"
            celpadding="0"
            style="background-image: linear-gradient(to bottom, #16242b, #3a4549)"
          >
            <tbody>
              <tr>
                <td
                  style="
                  width: 580px;
                  position: relative;
                  top: -30px;
                  color: #ffffff;
                  font-family: Inter, sans-serif;
                  background-size: contain;
                  background-repeat: no-repeat;
                  background-image: url({{BACKGROUND_IMAGE}});
                "
                >
                  <table
                    align="center"
                    cellspacing="0"
                    cellpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="width: 100%; padding: 60px 48px 0">
                          <div style="width: 85px; height: 100%">
                            <img
                              alt="DQid-logo"
                              src="{{LOGO}}"
                              width="85px"
                              height="85px"
                            />
                          </div>
    
                          <p
                            style="
                              font-size: 28px;
                              font-weight: 600;
                              color: #C7C7CC;
                              margin-top: 32px;
                              margin-bottom: 24px;
                            "
                          >
                          Shared File OTP
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    cellspacing="0"
                    celpadding="0"
                    style="width: 100%"
                  >
                    <tbody>
                      <tr>
                        <td style="padding: 0 48px 48px">
                          <table align="center" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="color: #c7c7cc; width: 100%">
                                <div>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    We received your request for verification. We have generated a one-time password (OTP) for you to use to verify your access.
                                  </p>
                                  <p
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      margin-bottom: 24px;
                                      color: #c7c7cc;
                                    "
                                  >Your OTP is:
                                  </p>
                                  <div
                                    style="
                                      background-color: #ffffff;
                                      border: 1px solid #ecebe4;
                                      border-radius: 6px;
                                      width: 100%;
                                      padding: 10px 24px;
                                      color: #1c1917;
                                      font-size: 24px;
                                      font-weight: 700;
                                      margin: 0 auto 24px;
                                      display: block;
                                      letter-spacing: 14px;
                                      padding-left: 32px;
                                      box-sizing: border-box;
                                      text-align: center;
                                    "
                                  >
                                    {{CODE}}
                                  </div>
                                  <div
                                    style="
                                      margin-top: 36px;
                                      margin-bottom: 24px;
                                      font-size: 14px;
                                      line-height: 20px;
                                      color: #c7c7cc;
                                    "
                                  >
                                    <p style="color: #c7c7cc">
                                      This OTP is valid for 10 minutes. Please do
                                      not share this code with anyone.
                                    </p>
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      line-height: 20px;
                                      font-weight: 400;
                                      color: #c7c7cc;
                                    "
                                  >
                                    If you did not request an OTP or if you have any
                                    questions, please contact us at
                                    <a
                                      href="mailto: {{SUPPORT_EMAIL}}"
                                      style="color: #2c8c6a"
                                      >{{SUPPORT_EMAIL}}</a
                                    >.
                                  </div>
                                  <div
                                    style="
                                      font-size: 14px;
                                      margin-bottom: 0px;
                                      margin-top: 24px;
                                      line-height: 26px;
                                      color: #C7C7CC;
                                      display: block;
                                    "
                                  >
                                    <span>Thank you, <br /></span>
                                    ${process.env.APP_NAME}
                                    <br />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>`,
    },
}
