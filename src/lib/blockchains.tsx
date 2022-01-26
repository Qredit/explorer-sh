/*
	Default blockchains for explorer-sh. 
*/

export const Blockchains = [
 {
    title: "ARK",
    logo: "/assets/img/currencies/ark.svg",
    coingecko_id: "ark",
    networks: {
      main: {
        symbol: "ARK",
        url: "https://api.ark.io/api",
        slp_url: "https://aslp.qredit.dev/api",
      },
      dev: {
        symbol: "ARK",
        url: "https://dapi.ark.io/api",
      },
    },
  },
{
    title: "Swipe",
    logo: "/assets/img/currencies/sxp.png",
    coingecko_id: "",
    networks: {
      dev: {
        symbol: "SXP",
        url: "https://dapi.swipechain.org/api",
      },
    },
  },
{
    title: "Qredit",
    logo: "/assets/img/currencies/xqr.svg",
    coingecko_id: "qredit",
    networks: {
      main: {
        symbol: "XQR",
        url: "https://qredit.cloud/api/v2",
        slp_url: "https://qslp.qredit.cloud/api",
      },
      dev: {
        symbol: "XQR",
        url: "https://qredit.dev/api/v2",
      },
    },
  },
{
    title: "Compendia",
    logo: "/assets/img/currencies/bind.svg",
    coingecko_id: "wrapped-bind",
    networks: {
      main: {
        url: "https://apis.compendia.org/api/v2",
        symbol: "ß",
      },
      test: {
        symbol: "Tß",
        url: "https://apis-testnet.compendia.org/api/v2",
      },
    },
  },
 {
    title: "Blockpool",
    coingecko_id: "",
    logo: "/assets/img/currencies/bpl.svg",
    networks: {
      main: {
        symbol: "β",
        url: "http://explorer.blockpool.io:9031/api",
      },
    },
  },
];
