import React, { useState } from "react";
import { Card, Button, Text, InlineStack } from "@shopify/polaris";

const AppEmbed = () => {
  const [enabled, setEnabled] = useState(false);
  const [blockStates, setBlockStates] = useState(Array(6).fill(false)); // each block disabled initially

  const blocks = [
    "Reviews widget block",
    "Reviews widget block",
    "Reviews widget block",
    "Reviews widget block",
    "Reviews widget block",
    "Reviews widget block",
  ];

  // Enable all blocks
  const handleEnableAll = () => {
    setEnabled(true);
    setBlockStates(Array(blocks.length).fill(true));
  };

  // Disable all blocks
  const handleDisableAll = () => {
    setEnabled(false);
    setBlockStates(Array(blocks.length).fill(false));
  };

  // Toggle individual block state (simulate backend call)
  const handleBlockToggle = (index) => {
    if (!enabled) return;
    setBlockStates((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      console.log(
        `Block ${index + 1} ${
          updated[index] ? "Enabled" : "Disabled"
        } — backend action triggered`
      );
      return updated;
    });
  };

  return (
    <Card roundedAbove="sm">
      <div className="p-2">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <Text variant="headingMd" as="h2">
              App Embed
            </Text>
            <Text variant="bodySm" tone="subdued">
              Use the APP normally after enabling
            </Text>
          </div>

          {!enabled ? (
            <Button tone="base" variant="primary" onClick={handleEnableAll}>
              Enable Now
            </Button>
          ) : (
            <Button tone="critical" variant="secondary" onClick={handleDisableAll}>
              Disable All
            </Button>
          )}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {blocks.map((title, index) => (
            <div
              key={index}
              className={`flex items-center justify-between border rounded-lg px-4 py-3 transition-all duration-200 ${
                blockStates[index]
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white"
              }`}
            >
              <InlineStack gap="300" align="center">
                <Text variant="bodyMd" as="p" fontWeight="medium">
                  {title}
                </Text>
              </InlineStack>

              <Button
                onClick={() => handleBlockToggle(index)}
                disabled={!enabled}
                variant={blockStates[index] ? "primary" : "secondary"}
                tone={blockStates[index] ? "success" : "base"}
              >
                {blockStates[index] ? "Active" : "Disabled"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AppEmbed;
