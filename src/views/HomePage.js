import { Button, Flex, Typography } from "antd";
import companyImage from "../assets/images/company.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();

  const [atleastOneBusinessAvailable, setAtleastOneBusinessAvailable] =
    useState(false);
  return (
    <>
      {!atleastOneBusinessAvailable && (
        <Flex
          vertical={true}
          gap={"small"}
          justify="center"
          align="center"
          className="mt-2"
        >
          <div>
            <img
              src={companyImage}
              style={{ maxWidth: "100px" }}
              alt="company illustration"
            />
          </div>
          <Typography.Title>No business added</Typography.Title>
          <Button type="primary" onClick={() => navigate("/add-business")}>
            Add a business
          </Button>
        </Flex>
      )}
    </>
  );
}
