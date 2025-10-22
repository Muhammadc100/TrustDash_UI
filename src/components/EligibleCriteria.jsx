import React, { useState } from "react";
import {
  Card,
  Text,
  Button,
  TextField,
  Checkbox,
  Badge,
  Divider,
  Icon,
  Box,
  BlockStack,
  InlineStack,
} from "@shopify/polaris";
import { SearchIcon, RefreshIcon } from "@shopify/polaris-icons";

const EligibleCriteria = () => {
  // -----------------------------
  // 🔹 State Management
  // -----------------------------
  const [minReviews, setMinReviews] = useState("2");
  const [maxReviews, setMaxReviews] = useState("20");
  const [activeProducts, setActiveProducts] = useState(true);
  const [draftProducts, setDraftProducts] = useState(true);
  const [archiveProducts, setArchiveProducts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([1, 2, 3]);

  // -----------------------------
  // 🔹 Product Data
  // -----------------------------
  const products = [
    {
      id: 1,
      title: "Bluetooth Headphones Over Ear, 65H Playtime",
      reviews: 2,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Bluetooth Headphones Over Ear, 65H Playtime",
      reviews: 2,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Bluetooth Headphones Over Ear, 65H Playtime",
      reviews: 2,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    },
  ];

  // -----------------------------
  // 🔹 Handlers
  // -----------------------------
  const handleMinChange = (value) => {
    const numValue = parseInt(value) || 2;
    if (numValue >= 2 && numValue <= 1000) {
      setMinReviews(value);
    }
  };

  const handleMaxChange = (value) => {
    const numValue = parseInt(value) || 2;
    if (numValue >= 2 && numValue <= 1000) {
      setMaxReviews(value);
    }
  };

  const handleSearchChange = (value) => setSearchQuery(value);

  const toggleSelectAll = () => {
    if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(filteredProducts.map((p) => p.id));
    }
  };

  const handleToggleProduct = (id) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter((pid) => pid !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  // -----------------------------
  // 🔹 Filtered List
  // -----------------------------
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus =
      (activeProducts && p.status === "Active") ||
      (draftProducts && p.status === "Draft") ||
      (archiveProducts && p.status === "Archive");
    return matchesSearch && matchesStatus;
  });

  // Calculate filtered out count
  const totalEligibleProducts = products.length;
  const filteredOutCount = 28; // As shown in screenshot

  // -----------------------------
  // 🔹 Render Active Badges
  // -----------------------------
  const renderCurrentFilters = () => {
    const filters = [];

    filters.push(
      <Badge key="min-reviews" tone="default">
        Min. {minReviews} reviews
      </Badge>
    );

    if (draftProducts) {
      filters.push(
        <Badge key="draft" tone="attention">
          Draft
        </Badge>
      );
    }

    if (activeProducts) {
      filters.push(
        <Badge key="active" tone="success">
          Active
        </Badge>
      );
    }

    if (archiveProducts) {
      filters.push(
        <Badge key="archive" tone="info">
          Archive
        </Badge>
      );
    }

    return filters;
  };

  // -----------------------------
  // 🔹 Layout
  // -----------------------------
  return (
    <Card>
      <div className="p-2">
        <BlockStack gap="400">
          {/* === Header === */}
          <BlockStack gap="200">
            <Text variant="headingMd" as="h2">
              Eligible Criteria
            </Text>
            <Text variant="bodySm" as="p" tone="subdued">
              Choose the products to process and define the minimum review count
              for eligibility.
            </Text>
          </BlockStack>

          {/* === Main Content Card === */}
          <div className=" border border-gray-200 rounded-lg p-6">
            <BlockStack gap="400">
              {/* === Minimum Number of Reviews === */}
              <BlockStack gap="200">
                <Text variant="headingMd" as="h3" fontWeight="bold">
                  Minimum Number of Reviews
                </Text>
                <Text variant="bodySm" as="p" tone="subdued">
                  Product must meet the minimum review count to be eligible.
                </Text>
                <Text variant="bodySm" as="p" tone="subdued" fontWeight="bold">
                  Range: 2-1000
                </Text>
              </BlockStack>

              {/* === Review Input Fields === */}
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  label="Min. Reviews"
                  type="number"
                  value={minReviews}
                  onChange={handleMinChange}
                  autoComplete="off"
                  min={2}
                  max={1000}
                />
                <TextField
                  label="Max. Reviews"
                  type="number"
                  value={maxReviews}
                  onChange={handleMaxChange}
                  autoComplete="off"
                  min={2}
                  max={1000}
                />
              </div>

              <Divider />

              {/* === Product Status Filters === */}
              <BlockStack gap="300">
                <BlockStack gap="200">
                  <Text variant="headingMd" as="h3" fontWeight="bold">
                    Product Status Filters
                  </Text>
                  <Text variant="bodySm" as="p" tone="subdued">
                    Only products with selected statuses will be shown. At least
                    one status must be selected.
                  </Text>
                </BlockStack>

                <div className="grid grid-cols-3 gap-4">
                  <BlockStack gap="100">
                    <Checkbox
                      label="Active Products"
                      checked={activeProducts}
                      onChange={(newValue) => setActiveProducts(newValue)}
                    />
                    <div className="ml-7">
                      <Text variant="bodySm" as="p" tone="subdued">
                        Currently published and visible in store.
                      </Text>
                    </div>
                  </BlockStack>

                  <BlockStack gap="100">
                    <Checkbox
                      label="Draft Products"
                      checked={draftProducts}
                      onChange={(newValue) => setDraftProducts(newValue)}
                    />
                    <div className="ml-7">
                      <Text variant="bodySm" as="p" tone="subdued">
                        Saved but not yet published.
                      </Text>
                    </div>
                  </BlockStack>

                  <BlockStack gap="100">
                    <Checkbox
                      label="Archive Products"
                      checked={archiveProducts}
                      onChange={(newValue) => setArchiveProducts(newValue)}
                    />
                    <div className="ml-7">
                      <Text variant="bodySm" as="p" tone="subdued">
                        Hidden and not active in store.
                      </Text>
                    </div>
                  </BlockStack>
                </div>
              </BlockStack>

              <Divider />

              {/* === Current Filters === */}
              <BlockStack gap="300">
                <Text variant="headingMd" as="h3" fontWeight="bold">
                  Current Filters:
                </Text>
                <InlineStack gap="200" wrap={true}>
                  {renderCurrentFilters()}
                </InlineStack>
              </BlockStack>

              <Divider />

              {/* === Search and Select All === */}
              <InlineStack gap="300" align="space-between" blockAlign="center">
                <div className="flex-1">
                  <TextField
                    placeholder="Search Products"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    autoComplete="off"
                    prefix={<Icon source={SearchIcon} />}
                  />
                </div>
                <Button onClick={toggleSelectAll}>
                  {selectedProducts.length === filteredProducts.length &&
                  filteredProducts.length > 0
                    ? "Deselect All"
                    : "Select All"}
                </Button>
              </InlineStack>

              {/* === Product List === */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                {filteredProducts.map((product, index) => (
                  <div key={product.id}>
                    <div className="flex items-center justify-between p-4">
                      <InlineStack gap="400" blockAlign="center">
                        <Checkbox
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => handleToggleProduct(product.id)}
                          label=""
                        />
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-14 h-14 object-cover rounded-md border border-gray-200"
                        />
                        <BlockStack gap="100">
                          <Text variant="bodyMd" as="p" fontWeight="semibold">
                            {product.title}
                          </Text>
                          <Text variant="bodySm" as="p" tone="subdued">
                            {product.reviews} Reviews
                          </Text>
                        </BlockStack>
                      </InlineStack>

                      <Badge tone="success">● {product.status}</Badge>
                    </div>
                    {index < filteredProducts.length - 1 && <Divider />}
                  </div>
                ))}
              </div>
            </BlockStack>
          </div>
          <InlineStack align="space-between" blockAlign="start" gap="400">
            <BlockStack gap="100">
              <Text variant="bodySm" as="p" tone="subdued">
                {selectedProducts.length} of {totalEligibleProducts} eligible
                products selected for processing.
              </Text>
              <Text variant="bodySm" as="p" tone="subdued">
                {filteredOutCount} products filtered out (require {minReviews}+
                reviews and selected statuses).
              </Text>
            </BlockStack>
            <div className="flex items-center gap-3">
              <Button size="large">Generate Summaries</Button>
              <Button variant="primary" icon={RefreshIcon} />
            </div>
          </InlineStack>
        </BlockStack>
      </div>
    </Card>
  );
};

export default EligibleCriteria;
