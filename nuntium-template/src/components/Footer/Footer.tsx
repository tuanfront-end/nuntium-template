import React from "react";
import FooterBg from "FooterBg.png";
import Container from "components/Container/Container";
import FooterWidgetTitle from "components/FooterWidgetTitle/FooterWidgetTitle";
import FooterWidgetNav from "components/FooterWidgetNav/FooterWidgetNav";
import FooterCopyright from "components/FooterCopyright/FooterCopyright";
import PostCard10 from "components/PostCard10/PostCard10";
import FooterWidgetSocial from "components/FooterWidgetSocial/FooterWidgetSocial";

export default function Footer() {
  return (
    <footer
      className="wil-footer relative py-13 bg-cover"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-90" />
      <Container>
        <div className="space-y-14 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-8">
            <PostCard10 />
            <PostCard10 />
            <PostCard10 />
          </div>
          <ul className="text-base grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 xl:gap-8">
            <li>
              <FooterWidgetTitle />
              <FooterWidgetNav />
            </li>
            <li>
              <FooterWidgetTitle>Pages</FooterWidgetTitle>
              <FooterWidgetNav />
            </li>
            <li>
              <FooterWidgetTitle>Company</FooterWidgetTitle>
              <FooterWidgetNav />
            </li>
            <li>
              <FooterWidgetTitle>Social</FooterWidgetTitle>
              <FooterWidgetSocial />
            </li>
          </ul>
          <div className="text-center">
            <FooterCopyright />
          </div>
        </div>
      </Container>
    </footer>
  );
}
