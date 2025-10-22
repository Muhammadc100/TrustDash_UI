import React, { useState } from "react";
import {
  Page,
  Card,
  ProgressBar,
  Badge,
  Button,
  Icon,
  Text,
  BlockStack,
  InlineStack,
  Box,
  Divider,
} from "@shopify/polaris";
import {
  SettingsFilledIcon,
  ProductFilledIcon,
  CheckCircleIcon,
  QuestionCircleIcon,
  BulletIcon,
} from "@shopify/polaris-icons";
import AppEmbbed from "./AppEmbbed";
import EligibleCriteria from "./EligibleCriteria";

const Dashboard = () => {
  const [setupProgress] = useState(0.25);
  const [systemStatus] = useState(0.2);

  const setupSteps = [
    {
      id: 1,
      title: "Activate app",
      description:
        "Activate the APP to ensure that the APP runs normally in the store.",
      completed: false,
      showButton: true,
    },
    {
      id: 2,
      title: "Custom reviews widget",
      description: "",
      completed: true,
      showButton: false,
    },
    {
      id: 3,
      title: "Migrate or Import reviews",
      description: "",
      completed: false,
      showButton: false,
    },
    {
      id: 4,
      title: "Congratulations! Your limited-time discount is ready",
      description: "",
      completed: false,
      showButton: false,
    },
  ];

  const analyticsCards = Array(6).fill({
    title: "Processing Status",
    subtitle: "Lorem ipsum dolor sit amet",
    value: "3032.44",
  });

  const quotaItems = [
    { label: "Products", current: 24, total: 90 },
    { label: "Reviews", current: 40, total: 90 },
    { label: "Collections", current: 18, total: 90 },
    { label: "Widgets", current: 78, total: 90 },
  ];

  const quickTips = [
    "Summaries automatically update when new reviews are added",
    "Visit the settings page to configure your Judge.me integration",
    "Use the 'Generate All' button after making style changes",
    "Filter reviews easily to view only verified, recent, or high-rated feedback.",
    "Leverage AI-generated summaries to quickly understand customer sentiment and key themes in reviews.",
    "Regularly check the analytics section to monitor review trends and customer feedback over time.",
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-full mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 mb-1">
                Dashboard
              </h1>
              <p className="text-sm text-gray-600">
                Transform customer reviews into powerful product insights
              </p>
            </div>
            <InlineStack gap="200">
              <Button variant="primary" tone="success" size="large">
                Refresh Data
              </Button>
              <Button variant="primary" icon={SettingsFilledIcon} />
            </InlineStack>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Setup Guide */}
            <Card>
              <div className="p-2">
                <BlockStack gap="400">
                  <Text variant="headingMd" as="h2">
                    Setup guide
                  </Text>

                  <Box>
                    <div className="mb-2">
                      <Text variant="bodyMd" as="p" tone="subdued">
                        1/4 completed
                      </Text>
                    </div>
                    <ProgressBar
                      progress={setupProgress * 100}
                      size="small"
                      tone="primary"
                    />
                  </Box>

                  <BlockStack gap="300">
                    {setupSteps.map((step) => (
                      <div
                        key={step.id}
                        className={`p-4 rounded-lg border ${
                          step.completed
                            ? "bg-white border-gray-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <InlineStack gap="300" align="start">
                          <div className="mt-1">
                            {step.completed ? (
                              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center">
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 14 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
                            )}
                          </div>
                          <BlockStack gap="200">
                            <Text
                              variant="bodyMd"
                              as="h3"
                              fontWeight="semibold"
                            >
                              {step.title}
                            </Text>
                            {step.description && (
                              <Text variant="bodySm" as="p" tone="subdued">
                                {step.description}
                              </Text>
                            )}
                            {step.showButton && (
                              <div className="mt-2">
                                <Button size="slim" variant="primary">
                                  Refresh Data
                                </Button>
                              </div>
                            )}
                          </BlockStack>
                        </InlineStack>
                      </div>
                    ))}
                  </BlockStack>
                </BlockStack>
              </div>
            </Card>

            {/* Analytics */}
            <Card>
              <div className="p-2">
                <BlockStack gap="400">
                  <InlineStack align="space-between">
                    <InlineStack gap="200" align="center">
                      <Text variant="headingMd" as="h2">
                        Analytics
                      </Text>
                      <Icon source={QuestionCircleIcon} tone="subdued" />
                    </InlineStack>
                    <InlineStack gap="300">
                      <Button plain>View Reports</Button>
                      <Button plain disclosure="down">
                        Last 30 Days
                      </Button>
                    </InlineStack>
                  </InlineStack>

                  <div className="grid grid-cols-2 gap-4">
                    {analyticsCards.map((card, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white"
                      >
                        <BlockStack gap="300">
                          <InlineStack gap="300" align="start">
                            <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
                              <Icon source={ProductFilledIcon} tone="primary" />
                            </div>
                            <BlockStack gap="100">
                              <Text
                                variant="bodyMd"
                                as="h3"
                                fontWeight="medium"
                              >
                                {card.title}
                              </Text>
                              <Text variant="bodySm" as="p" tone="subdued">
                                {card.subtitle}
                              </Text>
                            </BlockStack>
                          </InlineStack>
                          <Text
                            variant="heading2xl"
                            as="p"
                            fontWeight="semibold"
                          >
                            {card.value}
                          </Text>
                        </BlockStack>
                      </div>
                    ))}
                  </div>
                </BlockStack>
              </div>
            </Card>
          </div>

          {/* Sidebar - Right Side */}
          <div className="space-y-6">
            {/* System Status */}
            <Card>
              <div className="p-2">
                <BlockStack gap="400">
                  <InlineStack align="space-between" blockAlign="center">
                    <Text variant="headingMd" as="h2">
                      System Status
                    </Text>
                    <Badge tone="success" icon={BulletIcon}>
                      Ready
                    </Badge>
                  </InlineStack>

                  <Box>
                    <div className="mb-2">
                      <Text variant="bodySm" as="p" tone="subdued">
                        {Math.round(systemStatus * 100)}%
                      </Text>
                    </div>
                    <ProgressBar
                      progress={systemStatus * 100}
                      size="small"
                      tone="success"
                    />
                  </Box>

                  <BlockStack gap="300">
                    <Divider />
                    <InlineStack align="space-between">
                      <Text variant="bodyMd" as="p" fontWeight="medium">
                        Last Updated
                      </Text>
                      <div className="text-right">
                        <Text variant="bodySm" as="p" tone="subdued">
                          18/08/2025
                        </Text>
                        <Text variant="bodySm" as="p" tone="subdued">
                          23:30:10 PM
                        </Text>
                      </div>
                    </InlineStack>

                    <Divider />
                    <InlineStack align="space-between">
                      <Text variant="bodyMd" as="p" fontWeight="medium">
                        Processing Queue
                      </Text>
                      <div className="text-right">
                        <Text variant="bodySm" as="p" tone="subdued">
                          No active
                        </Text>
                        <Text variant="bodySm" as="p" tone="subdued">
                          processing
                        </Text>
                      </div>
                    </InlineStack>
                  </BlockStack>
                </BlockStack>
              </div>
            </Card>

            {/* Quota */}
            <Card>
              <div className="p-2">
                <BlockStack gap="400">
                  <Text variant="headingMd" as="h2">
                    Quota
                  </Text>
                  <BlockStack gap="400">
                    {quotaItems.map((item, index) => (
                      <Box key={index}>
                        <InlineStack align="space-between" blockAlign="center">
                          <Text variant="bodySm" as="p">
                            {item.label}
                          </Text>
                          <Text variant="bodySm" as="p" fontWeight="medium">
                            {item.current}/{item.total}
                          </Text>
                        </InlineStack>
                        <div className="mt-2">
                          <ProgressBar
                            progress={(item.current / item.total) * 100}
                            size="small"
                            tone="success"
                          />
                        </div>
                      </Box>
                    ))}
                  </BlockStack>
                </BlockStack>
              </div>
            </Card>

            {/* Quick Tips */}
            <Card>
              <div className="p-2">
                <BlockStack gap="400">
                  {/* Heading */}
                  <Text variant="headingMd" as="h2">
                    Quick Tips
                  </Text>

                  {/* List */}
                  <div className="space-y-2 mt-2">
                    {quickTips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        {/* Bullet icon — perfectly centered with text */}
                        <div className="flex items-center justify-center w-4 h-4">
                          <Icon source={BulletIcon} tone="primary" />
                        </div>

                        {/* Text — same baseline height */}
                        <Text
                          variant="bodySm"
                          as="p"
                          tone="subdued"
                          className="leading-[1.1rem]"
                        >
                          {tip}
                        </Text>
                      </div>
                    ))}
                  </div>
                </BlockStack>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <AppEmbbed />
      </div>
      <div className="mt-7">
        <EligibleCriteria/>
      </div>
    </div>
  );
};

export default Dashboard;
