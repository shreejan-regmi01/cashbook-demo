import { HomeOutlined, LeftOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Form, Input, Row, Typography } from "antd";
import NextSection from "../components/add-business/NextSection";
import { useState } from "react";
import agricultureImage from "../assets/images/planting.png";
import constructionImage from "../assets/images/architect.png";
import educationImage from "../assets/images/cpu.png";
import electronicsImage from "../assets/images/report.png";
import financialImage from "../assets/images/restaurant.png";
import foodImage from "../assets/images/scholarship.png";
import BusinessCategoryCard from "../components/add-business/BusinessCategoryCard";

export default function AddBusiness() {
  const [currentStep, setCurrentStep] = useState(1);

  const toggleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const toggleBack = () => {
    setCurrentStep(Math.max(1, currentStep - 1));
  };

  return (
    <>
      <Button type="link" icon={<LeftOutlined />} onClick={toggleBack}>
        <strong>Back</strong>
      </Button>
      <Flex vertical={true} gap={"small"} justify="center" align="center">
        {
          //first step
          currentStep === 1 && (
            <>
              <Typography.Title level={3}>Add Business Name</Typography.Title>
              <Form layout="vertical">
                <Form.Item name="businessName">
                  <Input
                    addonBefore={<HomeOutlined />}
                    placeholder="Business name"
                    size="large"
                  />
                </Form.Item>
              </Form>
            </>
          )
        }
        {
          //second step
          currentStep === 2 && (
            <>
              <Typography.Title level={3}>
                Select Business Category
              </Typography.Title>
              <Typography.Text style={{ color: "darkgray" }}>
                This will help us personalize your app experience
              </Typography.Text>
              <Row
                gutter={[20, 16]}
                style={{ paddingInline: "2rem" }}
                className="mt-2"
              >
                <Col span={12}>
                  <BusinessCategoryCard
                    image={agricultureImage}
                    category="Agriculture"
                  />
                </Col>
                <Col span={12}>
                  <BusinessCategoryCard
                    image={constructionImage}
                    category="Construction"
                  />
                </Col>
                <Col span={12}>
                  <BusinessCategoryCard
                    image={educationImage}
                    category="Education"
                  />
                </Col>
                <Col span={12}>
                  <BusinessCategoryCard
                    image={electronicsImage}
                    category="Electronics"
                  />
                </Col>
                <Col span={12}>
                  <BusinessCategoryCard
                    image={financialImage}
                    category="Financial"
                  />
                </Col>
                <Col span={12}>
                  <BusinessCategoryCard
                    image={foodImage}
                    category="Restaurant"
                  />
                </Col>
              </Row>
            </>
          )
        }
      </Flex>
      <NextSection step={currentStep} onNextClick={toggleNextStep} />
    </>
  );
}
