import { Button, Flex, Typography } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function HomePage() {
  const [atleastOneBusinessAvailable, setAtleastOneBusinessAvailable] =
    useState(false);
  return (
    <>
      {!atleastOneBusinessAvailable && (
        <Flex vertical={true} gap={"small"} justify="center" align="center">
          <ExclamationCircleOutlined style={{ fontSize: "5rem" }} />
          <Typography.Title>No business available</Typography.Title>
          <Button type="primary">Add a business</Button>
        </Flex>
      )}
    </>
  );
}
