/* 
Menu Types:
"menu-default", "menu-sub-hidden", "menu-hidden"
*/
export const defaultMenuType = "menu-default";

export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;
export const defaultLocale = "en";
export const localeOptions = [
  { id: "en", name: "English - LTR", direction: "ltr" },
  { id: "es", name: "Español", direction: "ltr" },
  { id: "enrtl", name: "العربية - RTL", direction: "rtl" }
];

// export const firebaseConfig = {
//   apiKey: "AIzaSyBBksq-Asxq2M4Ot-75X19IyrEYJqNBPcg",
//   authDomain: "gogo-react-login.firebaseapp.com",
//   databaseURL: "https://gogo-react-login.firebaseio.com",
//   projectId: "gogo-react-login",
//   storageBucket: "gogo-react-login.appspot.com",
//   messagingSenderId: "216495999563"
// };

export const firebaseConfig = {
  apiKey: "AIzaSyDUpy0LxAzV8ombBsNFyKmL3I7i39t7ZlM",
  authDomain: "todoapp-7784b.firebaseapp.com",
  databaseURL: "https://todoapp-7784b.firebaseio.com",
  projectId: "todoapp-7784b",
  storageBucket: "todoapp-7784b.appspot.com",
  messagingSenderId: "676395164661",
  appId: "1:676395164661:web:22f5546085fbc1b210f6bc"
};

export const searchPath = "/app/pages/search";
export const servicePath = "https://api.coloredstrategies.com";

/* 
Color Options:
"light.purple", "light.blue", "light.green", "light.orange", "light.red", "dark.purple", "dark.blue", "dark.green", "dark.orange", "dark.red"
*/
export const themeColorStorageKey="__theme_color"
export const isMultiColorActive = true;
export const defaultColor = "light.purple";
export const isDarkSwitchActive = true;
export const defaultDirection = "ltr";
export const themeRadiusStorageKey = "__theme_radius";
export const isDemo = true;
