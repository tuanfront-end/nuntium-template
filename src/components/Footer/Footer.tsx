import React from "react";
import FooterWidgetNav from "components/FooterWidgetNav/FooterWidgetNav";
import Logo from "components/Logo/Logo";
import Input from "components/Input/Input";
import Button from "components/Button/Button";

export default function Footer() {
  const _renderListSocial = () => {
    const socials = [
      "las la-envelope",
      "lab la-facebook-f",
      "lab la-youtube",
      "lab la-instagram",
      "lab la-twitter",
    ];
    return (
      <ul className="flex items-center justify-start flex-wrap space-x-3">
        {socials.map((item, index) => (
          <li key={String(index)}>
            <a
              className="p-2px text-f5 text-gray-600 dark:text-gray-500 hover:text-primary"
              href="#root"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={item}></i>
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className="ttnc-footer bg-white dark:bg-black pt-8">
      <div className="container space-y-10">
        <ul className="flex flex-wrap justify-between">
          <li className="flex-shrink-0 w-full lg:w-auto space-y-6 mr-8 my-8">
            <Logo />
            {_renderListSocial()}
          </li>
          <li className="mr-8 my-4">
            <FooterWidgetNav />
          </li>
          <li className="mr-8 my-4">
            <FooterWidgetNav dataIndex={1} />
          </li>
          <li className="mr-8 my-4">
            <FooterWidgetNav dataIndex={2} />
          </li>
          <li className="w-full max-w-xs lg:max-w-sm my-4">
            <form action="#" method="post" className="grid grid-cols-1 gap-6">
              <Input name="footerName" label="Name" />
              <Input name="footerEmail" label="Email Address" type="email" />
              <Button size="small">Subscribe</Button>
            </form>
          </li>
        </ul>
        <div className="text-center pb-4 text-gray-800 dark:text-gray-200">
          Copyright © 2021. Powered by TTNC-themes |{" "}
          <a
            className=""
            href="#root"
            target="_blank"
            rel="noopener noreferrer"
          >
            Licensing
          </a>
        </div>
      </div>
    </footer>
  );
}
