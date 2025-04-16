import { Space } from "antd";
import './App.css';
import AppHeader from "./components/AppHeader/AppHeader.jsx";
import AppFooter from "./components/AppFooter/AppFooter.jsx";
import PageContent from "./components/PageContent/PageContent.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import { ConfigProvider, Typography } from "antd";
import "@ant-design/v5-patch-for-react-19";

const { Title } = Typography;
const theme = {
  token: {
    // colorPrimary: "#ffffff",
    // colorPrimaryBg: "#BC2626",
    // colorBgBase: "#051A53",
    // colorTextBase: "black",
    // colorBgSolidHover: "#414c6b",
    colorPrimary: "#BC2626",  //update
    // colorPrimaryHover: "", 
    fontFamily: "Inter"
    //  -apple-system, SF Pro, BlinkMacSystemFont, Segoe UI
  },
  components: {
    // Menu: {
    //   colorText: "#ffffff",       //update
    // },

    // Select: {
    //   colorPlaceholder: "#051A53",
    //   controlItemBgActive: "#ffffff",
    //   colorBgContainer: "#ffffff",
    //   colorPrimary: "#BC2626",
    // },
  }
}

/*
@primary-color: #BC2626;
@font-family: -apple-system, SF Pro, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
sans-serif;
@text-color: #ffffff;
@background-color-base: #051A53
 */

function App() {
  return <ConfigProvider theme={theme}>
    {<div className="App">
      <AppHeader />
      <div className="sidebar-and-page-content">
        <Sidebar></Sidebar>
        <div className="page-content-and-footer">
          <PageContent></PageContent>
          <AppFooter />
        </div>
      </div>
    </div>}
  </ConfigProvider>
}

export default App;
