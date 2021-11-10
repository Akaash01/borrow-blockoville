import FooterProfit from "./FooterProfit";
import FooterLoss from "./FooterLoss";

const Footer = () => {
  return (
    <footer>
      <marquee width="100%" direction="left">
        <div className="mrq">
          <FooterLoss />
          <FooterProfit />
          <FooterLoss />
          <FooterProfit />
          <FooterLoss />
          <FooterProfit />
          <FooterLoss />
        </div>
      </marquee>
    </footer>
  );
};
export default Footer;
