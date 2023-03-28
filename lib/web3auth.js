import { Web3Auth } from "@web3auth/web3auth";

//Initialize within your constructor
const web3auth = new Web3Auth({
  clientId: "BH46oQDxRp4s4LpzTAovuKTMZQQLplkBoR5bpBhL98HQcEIaAZUp4A5pkJs445apSr87j8lIkaA0waq7XT73Zsc", // Get your Client ID from Web3Auth Dashboard
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x1",
  },
});

await web3auth.initModal();