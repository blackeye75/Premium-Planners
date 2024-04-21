import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Coantactus = () => {
  return (
    <>
      <div className="h-fit">
        <div className="pt-28">
          <h1 className="pl-8 text-5xl">
            Get in Touch with{" "}
            <span className="text-cyan-600">Premium Planners!</span>
          </h1>
          <p className="pl-8 mt-5 text-2xl pr-2">
            Have a question, inquiry, or just want to say hello? We'd love to
            hear from you! Feel free to reach out to us using the contact
            information below:
          </p>
          <div className="pl-8 mt-5">
            <h2 className="mt-3 text-l">
              Email: <a href="">info@yourcompany.com</a>
            </h2>
            <h2 className="mt-3 text-l">Phone: +123-456-7890</h2>
            <h2 className="mt-3 text-l">Address: New Delhi, IN</h2>
          </div>
          <p className="pl-8 text-2xl mt-6">
            You can also connect with us on social media for the latest updates,
            news, and behind-the-scenes glimpses:
          </p>
          <div className="pl-8 mt-5">
            <a href="">
              <h1 className="mt-3">Facebook: DPremium Planners</h1>
            </a>
            <a href="">
              <h1 className="mt-3">Twitter: @Premium Planners</h1>
            </a>
            <a href="">
              <h1 className="mt-3">Instagram:#premium Planners</h1>
            </a>
            <a href="">
              <h1 className="mt-3">LinkedIn:Premium Planners</h1>
            </a>
          </div>
          <p className="pl-8 mt-3 text-xl">
            Our team is here to assist you and provide any information you may
            need. Don't hesitate to get in touch—we're always happy to help!
          </p>
          <h1 className="pl-8 text-3xl mt-5" >
            We look forward to hearing from you soon. <br />Best regards,
          </h1>
          <h1 className="pl-8 mt-2 text-xl mb-5" >
          The Premium Planners Team
          </h1>
          <a href="https://wa.me/7005212531" className="right-5 -bottom-64 hover:scale-150 duration-300 md:-bottom-9 text-2xl p-3 bg-zinc-600 rounded-full  absolute "><FaWhatsapp /></a>
        </div>
        
      </div>
    </>
  );
};

export default Coantactus;
