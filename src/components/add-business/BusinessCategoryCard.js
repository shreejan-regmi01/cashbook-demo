import { Flex } from "antd";

export default function BusinessCategoryCard({ image, category = "other" }) {
  return (
    <Flex
      gap="middle"
      align="center"
      style={{
        border: "1px solid  #c5c1c1",
        padding: "8px 12px",
        borderRadius: "4px",
      }}
    >
      <div style={{ width: "100%" }}>
        <img src={image} width="40px" alt="agriculture" />
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>{category}</p>
      </div>
    </Flex>
  );
}
