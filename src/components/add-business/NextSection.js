import { Button, Typography } from "antd";

export default function NextSection({ step = "", onNextClick }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        textAlign: "center",
        paddingBottom: "1rem",
      }}
    >
      <div style={{ backgroundColor: "#E8E8E8" }}>
        <Typography.Paragraph strong style={{ paddingBlock: "1rem" }}>
          Business Setup: Step {step}/3
        </Typography.Paragraph>
      </div>
      <div style={{ paddingInline: "2rem" }}>
        <Button
          type="primary"
          block
          style={{ fontWeight: "600" }}
          onClick={onNextClick}
        >
          NEXT
        </Button>
      </div>
    </div>
  );
}
