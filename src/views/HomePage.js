import { Button, Flex, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import companyImage from "../assets/images/company.png";
import { useState } from "react";

export default function HomePage() {
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
            <img src={companyImage} style={{ maxWidth: "100px" }} />
          </div>
          {/* <ExclamationCircleOutlined style={{ fontSize: "5rem" }} /> */}
          <Typography.Title>No business added</Typography.Title>
          <Button type="primary">Add a business</Button>
        </Flex>
      )}
    </>
  );
}
