import { Flex } from "antd";

export default function BusinessCategoryCard({
  image,
  category = "other",
  onClick,
  selected,
}) {
  return (
    <Flex
      gap="middle"
      align="center"
      className={`category-select-tile ${selected && "selected-category"}`}
      onClick={onClick}
    >
      <div>
        <img src={image} width="40px" alt="agriculture" />
      </div>
      <div>
        <p style={{ fontWeight: 600 }}>{category}</p>
      </div>
    </Flex>
  );
}
