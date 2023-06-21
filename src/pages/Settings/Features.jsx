import {client} from "../../../lib/client"
import {SuccessMessage} from "./partials/Message"

export const updateUserName = (username, user) => {
  client
    .patch(user)
    .set({ username: username })
    .commit()
    .then(
      (res) =>
        console.log(res) & SuccessMessage(`Username changed to ${username}.`)
    );
};

export const updateEmail = (email, user) => {
  client
    .patch(user)
    .set({ email: email })
    .commit()
    .then((res) => {
      console.log(res);
      localStorage.setItem("email", email);
      SuccessMessage(`email changed to ${email}.`);
    });
};

export const updatePhone = (phone, user) => {
  client
    .patch(user)
    .set({ phone: phone })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`phone number changed to ${phone}.`);
    });
};

export const updatePassword = (password, user) => {

  client
    .patch(user)
    .set({ password: password })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`password changed.`);
    });
};

export const updateRisk = (risk, user) => {

  client
    .patch(user)
    .set({ risklevel: risk })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`Updated risk preferences.`);
    });
};

export const updateSmartPortfolio = (settingsobject, user) => {

  client
    .patch(user)
    .set({
       "autoinvest": settingsobject.autoinvest,
       "pipefunding": settingsobject.pipefunding,
       "cryptoinvestments": settingsobject.cryptoinvestments,
       "smartportfolioison": settingsobject.smartportfolioison,

       })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`Smart Portfolio settings updated.`);
    });
};

export const updateDefaultAccount = (settingsobject, user) => {

  client
    .patch(user)
    .set({
       "defaultaccount.accountname": settingsobject.accountname,
       "defaultaccount.accountnumber": settingsobject.accountnumber,
       "defaultaccount.routingnumber": settingsobject.routingnumber,
       "defaultaccount.bankname": settingsobject.bankname,
       "defaultaccount.checking": settingsobject.checking,
       "defaultaccount.savings": settingsobject.savings,

       })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`Default account updated.`);
    });
};
export const updatePrivacySettings = (settingsobject, user) => {

  client
    .patch(user)
    .set({
       "privacysettings.tradinginformation": settingsobject.tradinginformation,
       "privacysettings.investmentinformation": settingsobject.investmentinformation,
       "privacysettings.locationinformation": settingsobject.locationinformation,

       })
    .commit()
    .then((res) => {
      console.log(res);
      SuccessMessage(`privacy settings updated.`);
    });
};