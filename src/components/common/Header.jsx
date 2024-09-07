import React, { useState } from "react";
import LogoImg1 from "../assets/images/logo-adawati.png";
import { LinkData } from "../assets/data/dummydata";
import { NavLink, useNavigate } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Modal, Form, Input, Button } from "antd";

export const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  /* Modal pour ecole */

  const onFinish = (values) => {
    console.log(values);
    navigate("/ecole");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    onFinish();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* Fin show Modal */
  return (
    <>
      <header className="bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full">
        <div className="container flex justify-between items-center">
          <div className="logo flex items-center gap-6">
            <img src={LogoImg1} alt="logo" className="h-14" />
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className="flex items-center gap-6">
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-primary text-sm" : "text-[15px]"
                    }
                    to={link.url}
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flex items-center gap-5">
            <button>
              <BiShoppingBag size={25} />
            </button>
            <button onClick={showModal}>Espace Ecole</button>{" "}
            <button className="open-menu" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 size={25} />
            </button>
          </div>
        </div>
      </header>
      <Modal
        title="Infos Ecole"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Nom De l'école"
            rules={[{ required: true, message: "Veuillez entrer votre nom!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: "Veuillez entrer votre mot de passe" },
            ]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};
