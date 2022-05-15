import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

export default [
  {
    title: "USERS",
    isMoney: false,
    link: "See all users",
    icon: PersonOutlinedIcon,
    color: "crimson",
    backgroundColor: "rgba(255, 0, 0, 0.2)",
  },
  {
    title: "ORDERS",
    isMoney: false,
    link: "View all orders",
    icon: ShoppingCartOutlinedIcon,
    backgroundColor: "rgba(218, 165, 32, 0.2)",
    color: "goldenrod",
  },
  {
    title: "EARNINGS",
    isMoney: true,
    link: "View net earnings",
    icon: MonetizationOnOutlinedIcon,
    backgroundColor: "rgba(0, 128, 0, 0.2)",
    color: "green",
  },
  {
    title: "BALANCE",
    isMoney: true,
    link: "See details",
    icon: AccountBalanceWalletOutlinedIcon,
    backgroundColor: "rgba(128, 0, 128, 0.2)",
    color: "purple",
  },
];

// style={{
//   color: "crimson",
//   backgroundColor: "rgba(255, 0, 0, 0.2)",
// }}

//   backgroundColor: "rgba(218, 165, 32, 0.2)",
//   color: "goldenrod",
// }}
// style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
// style={{
//   backgroundColor: "rgba(128, 0, 128, 0.2)",
//   color: "purple",
// }}
