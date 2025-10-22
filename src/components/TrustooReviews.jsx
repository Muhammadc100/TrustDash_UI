import React, { useState, useEffect, useCallback } from "react";
import {
  Button,
  Card,
  Icon,
  Listbox,
  Popover,
  TextField,
  Checkbox,
  Text,
  Tooltip,
  ProgressBar,
  Select,
  Modal,
  Badge,
} from "@shopify/polaris";
import {
  SearchIcon,
  ArrowsOutHorizontalIcon,
  XSmallIcon,
  ViewIcon,
} from "@shopify/polaris-icons";

const products = [
  {
    id: 1,
    name: "autumn dawn",
    image: null,
    status: "Inactive",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 2,
    name: "BERIBES Bluetooth Headphones Over Ear, 65H Playtime and 6 EQ Music Modes Wireless Headphones with Microphone, HiFi Stereo Foldable Lightweight Headsets, Deep Bass for Home Office Cellphone PC Ect.",
    image: "https://cdn.mos.cms.futurecdn.net/QhFxoywDVHbpRFCNJcwj2Q.jpg",
    status: "Active",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 3,
    name: "billowing uuojoipolp",
    image: null,
    status: "Inactive",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 4,
    name: "hdhhdhdbhdv",
    image: null,
    status: "Active",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 5,
    name: "Adidas Sports Shoes combine comfort, durability, and modern style, designed to deliver maximum performance whether you're running, training, or enjoying casual wear.",
    image:
      "https://www.shutterstock.com/image-photo/3102022-estonia-tallinn-adidas-runfalcon-600nw-2212696451.jpg",
    status: "Inactive",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 6,
    name: "The NVIDIA GeForce RTX 5090 delivers next-generation performance with advanced ray tracing, AI-powered graphics, and ultra-fast speeds, built for gamers and creators who demand the ultimate experience.",
    image:
      "https://static.gigabyte.com/StaticFile/Image/Global/89788f96d441f6e6b4f239305692c9bc/Product/43836",
    status: "Active",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 7,
    name: "The Lian Li O11 Dynamic EVO is a premium mid-tower PC case offering exceptional airflow, modular design, and versatile layout options, perfect for high-performance gaming and custom water cooling builds.",
    image:
      "https://lian-li.com/wp-content/uploads/2023/12/O11D-EVO-RBG_09.webp",
    status: "Inactive",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 8,
    name: "gloves",
    image: null,
    status: "Active",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
];

const TrustooReviews = () => {
  const [inputValue, setInputValue] = useState("");
  const [manageSelected] = useState("Manage Summary");
  const [exportSelected] = useState("Export All Summaries");
  const [productActive, setProductActive] = useState(false);
  const [productSelected, setProductSelected] = useState("Product");
  const [reviewsActive, setReviewsActive] = useState(false);
  const [reviewsSelected, setReviewsSelected] = useState("Reviews");
  const [tabActive, setTabActive] = useState(false);
  const [tabSelected, setTabSelected] = useState("Tab");
  const [ratingActive, setRatingActive] = useState(false);
  const [ratingSelected, setRatingSelected] = useState("Rating");
  const [statusActive, setStatusActive] = useState(false);
  const [statusSelected, setStatusSelected] = useState("Status");
  const [sourcesActive, setSourcesActive] = useState(false);
  const [sourcesSelected, setSourcesSelected] = useState("Sources");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sortValue, setSortValue] = useState("newest");
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSortChange = useCallback((value) => setSortValue(value), []);

  const sortOptions = [
    { label: "Newest first", value: "newest" },
    { label: "Oldest first", value: "oldest" },
    { label: "Alphabetical", value: "alphabetical" },
    { label: "Completion %", value: "completion" },
  ];

  const handleOpenModal = (product) => setActiveProduct(product);
  const handleCloseModal = () => setActiveProduct(null);

  const renderDropdownButton = (label, selected, onReset, toggle) => (
    <Button onClick={toggle} disclosure="down">
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{selected}</span>
        {selected !== label && (
          <span
            role="button"
            tabIndex={0}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.stopPropagation();
              onReset();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.stopPropagation();
                onReset();
              }
            }}
          >
            <Icon source={XSmallIcon} tone="base" />
          </span>
        )}
      </div>
    </Button>
  );

  const hasProducts = products.length > 0;

  return (
    <div style={{ minHeight: "75vh", background: "#f9fafb", padding: "24px" }}>
      <div style={{ maxWidth: "full", margin: "0 auto" }}>
        {/* Header Section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "24px",
            marginTop: "5px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              cursor: "default",
            }}
          >
            <Text as="h2" tone="base" variant="headingLg">
              {manageSelected}
            </Text>
          </div>
          <Button variant="primary">{exportSelected}</Button>
        </div>

        {/* Card Section */}
        <Card>
          {/* Search row */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: "12px",
              width: "100%",
              marginBottom: "16px",
              alignItems: isMobile ? "stretch" : "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <TextField
                value={inputValue}
                onChange={(value) => setInputValue(value)}
                prefix={<Icon source={SearchIcon} tone="base" />}
                placeholder="Search by product, widget, Summary"
                autoComplete="off"
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Button variant="tertiary" onClick={() => setInputValue("")}>
                Cancel
              </Button>
              <div
                style={{
                  padding: "4px",
                  borderRadius: "6px",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
              >
                <div style={{ transform: "rotate(90deg)" }}>
                  <Tooltip
                    content="Sort"
                    preferredPosition="above"
                    hoverDelay={1000}
                  >
                    <Icon source={ArrowsOutHorizontalIcon} tone="base" />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />

          {/* Filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "16px",
            }}
          >
            {/* Product */}
            <Popover
              active={productActive}
              activator={renderDropdownButton(
                "Product",
                productSelected,
                () => setProductSelected("Product"),
                () => setProductActive(!productActive)
              )}
              onClose={() => setProductActive(false)}
            >
              <Listbox>
                <Listbox.Option value="Product">
                  <Checkbox
                    checked={productSelected === "Product"}
                    onChange={() => {
                      setProductSelected("Product");
                      setProductActive(false);
                    }}
                  />
                  <span style={{ marginLeft: "8px" }}>Product</span>
                </Listbox.Option>
              </Listbox>
            </Popover>

            {/* Reviews */}
            <Popover
              active={reviewsActive}
              activator={renderDropdownButton(
                "Reviews",
                reviewsSelected,
                () => setReviewsSelected("Reviews"),
                () => setReviewsActive(!reviewsActive)
              )}
              onClose={() => setReviewsActive(false)}
            >
              <Listbox>
                {[
                  "Today",
                  "Last 7 Days",
                  "Last 30 Days",
                  "Last 90 Days",
                  "Last 12 months",
                  "Custom",
                ].map((option) => (
                  <Listbox.Option key={option} value={option}>
                    <Checkbox
                      checked={reviewsSelected === option}
                      onChange={() => {
                        setReviewsSelected(option);
                        setReviewsActive(false);
                      }}
                    />
                    <span style={{ marginLeft: "8px" }}>{option}</span>
                  </Listbox.Option>
                ))}
              </Listbox>
            </Popover>

            {/* Tab */}
            <Popover
              active={tabActive}
              activator={renderDropdownButton(
                "Tab",
                tabSelected,
                () => setTabSelected("Tab"),
                () => setTabActive(!tabActive)
              )}
              onClose={() => setTabActive(false)}
            >
              <Listbox>
                {[
                  "Featured",
                  "Unfeatured",
                  "Verified",
                  "Unverified",
                  "Top reviews",
                  "Review snippets",
                ].map((option) => (
                  <Listbox.Option key={option} value={option}>
                    <Checkbox
                      checked={tabSelected === option}
                      onChange={() => {
                        setTabSelected(option);
                        setTabActive(false);
                      }}
                    />
                    <span style={{ marginLeft: "8px" }}>{option}</span>
                  </Listbox.Option>
                ))}
              </Listbox>
            </Popover>

            {/* Rating */}
            <Popover
              active={ratingActive}
              activator={renderDropdownButton(
                "Rating",
                ratingSelected,
                () => setRatingSelected("Rating"),
                () => setRatingActive(!ratingActive)
              )}
              onClose={() => setRatingActive(false)}
            >
              <Listbox>
                {["1 Star", "2 Star", "3 Star", "4 Star", "5 Star"].map(
                  (option) => (
                    <Listbox.Option key={option} value={option}>
                      <Checkbox
                        checked={ratingSelected === option}
                        onChange={() => {
                          setRatingSelected(option);
                          setRatingActive(false);
                        }}
                      />
                      <span style={{ marginLeft: "8px" }}>{option}</span>
                    </Listbox.Option>
                  )
                )}
              </Listbox>
            </Popover>

            {/* Status */}
            <Popover
              active={statusActive}
              activator={renderDropdownButton(
                "Status",
                statusSelected,
                () => setStatusSelected("Status"),
                () => setStatusActive(!statusActive)
              )}
              onClose={() => setStatusActive(false)}
            >
              <Listbox>
                {["Publish", "Unpublish"].map((option) => (
                  <Listbox.Option key={option} value={option}>
                    <Checkbox
                      checked={statusSelected === option}
                      onChange={() => {
                        setStatusSelected(option);
                        setStatusActive(false);
                      }}
                    />
                    <span style={{ marginLeft: "8px" }}>{option}</span>
                  </Listbox.Option>
                ))}
              </Listbox>
            </Popover>

            {/* Sources */}
            <Popover
              active={sourcesActive}
              activator={renderDropdownButton(
                "Sources",
                sourcesSelected,
                () => setSourcesSelected("Sources"),
                () => setSourcesActive(!sourcesActive)
              )}
              onClose={() => setSourcesActive(false)}
            >
              <Listbox>
                {[
                  "CSV uploaded",
                  "Email request",
                  "Store front",
                  "Store link",
                  "Store link-Dondy",
                  "AliExpress",
                  "Amazon",
                  "Shop",
                  "Shopee",
                  "Auto",
                  "QR Code",
                  "Account",
                ].map((option) => (
                  <Listbox.Option key={option} value={option}>
                    <Checkbox
                      checked={sourcesSelected === option}
                      onChange={() => {
                        setSourcesSelected(option);
                        setSourcesActive(false);
                      }}
                    />
                    <span style={{ marginLeft: "8px" }}>{option}</span>
                  </Listbox.Option>
                ))}
              </Listbox>
            </Popover>
          </div>

          <div style={{ borderTop: "1px solid #e5e7eb", margin: "16px 0" }} />

          {/* Conditional Rendering: Empty State or Product List */}
          {!hasProducts ? (
            <div
              style={{
                textAlign: "center",
                padding: "48px 0",
              }}
            >
              <div
                style={{
                  margin: "0 auto 24px",
                  width: "48px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#6b7280",
                }}
              >
                <Icon
                  source={SearchIcon}
                  tone="base"
                  style={{ width: "28px", height: "28px" }}
                />
              </div>

              <Text
                as="h3"
                variant="headingLg"
                fontWeight="semibold"
                tone="secondary"
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "8px",
                }}
              >
                No product found
              </Text>
              <Text
                as="p"
                variant="bodyMd"
                fontWeight="regular"
                style={{
                  color: "#475569",
                  fontWeight: "500",
                  marginBottom: "24px",
                }}
              >
                Summaries not found
              </Text>
            </div>
          ) : (
            <>
              {/* Product List Header */}
              <div
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  gap: isMobile ? "12px" : "0px",
                  justifyContent: "space-between",
                  alignItems: isMobile ? "flex-start" : "center",
                  marginBottom: "16px",
                }}
              >
                <Text>
                  Showing {products.length} of {products.length} products
                </Text>
                <div style={{ width: isMobile ? "100%" : "240px" }}>
                  <Select
                    label="Sort by:-"
                    labelInline={!isMobile}
                    options={sortOptions}
                    onChange={handleSortChange}
                    value={sortValue}
                  />
                </div>
              </div>

              {/* Products List */}
              <div>
                {products.map((product) => (
                  <React.Fragment key={product.id}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "flex-start" : "flex-start",
                        gap: "16px",
                        padding: "16px",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8fafc")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      {/* Image or Placeholder */}
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "64px",
                            height: "64px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            border: "1px solid #e5e7eb",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "64px",
                            height: "64px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#e5e7eb",
                            borderRadius: "50%",
                            color: "#6b7280",
                          }}
                        >
                          <svg
                            style={{ width: "32px", height: "32px" }}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 12c2.21 0 4-1.79 
                                4-4s-1.79-4-4-4-4 1.79-4 
                                4 1.79 4 4 4zm0 2c-2.67 0-8 
                                1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                            />
                          </svg>
                        </div>
                      )}

                      {/* Details */}
                      <div style={{ flex: 1 }}>
                        <Text as="h3" tone="medium">
                          {product.name}
                        </Text>
                        <div
                          style={{
                            display: "flex",
                            gap: "8px",
                            fontSize: "14px",
                            marginTop: "4px",
                            flexWrap: "wrap",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "4px",
                              marginBottom: "3px",
                            }}
                          >
                            <Badge>{product.Summary}</Badge>
                            <Badge>{product.progress}</Badge>
                            <Badge
                              tone={
                                product.status === "Active"
                                  ? "success"
                                  : "default"
                              }
                            >
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                        <Text as="p">{product.description}</Text>
                      </div>

                      {/* Actions */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: isMobile ? "row" : "column",
                          gap: "8px",
                          alignItems: isMobile ? "flex-start" : "flex-end",
                          marginTop: isMobile ? "8px" : "0px",
                        }}
                      >
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleOpenModal(product);
                          }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            color: "#2563eb",
                            fontSize: "14px",
                            textDecoration: "none",
                          }}
                          onMouseEnter ={(e) => {
                            (e.currentTarget.style.textDecoration= "Underline")
                          }}
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.textDecoration = "none")
                          }
                        >
                          Generate Summary
                        </a>

                        {/* ProgressBar + Button row */}
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginTop: "8px",
                          }}
                        >
                          <div style={{ width: "80px" }}>
                            <ProgressBar
                              progress={product.progressValue}
                              size="small"
                            />
                          </div>
                          <Button
                            icon={ViewIcon}
                            onClick={() => handleOpenModal(product)}
                          >
                            Manage Summary
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Divider Line */}
                    <hr style={{ borderTop: "1.5px solid #e5e7eb" }} />
                  </React.Fragment>
                ))}
              </div>
            </>
          )}
        </Card>
      </div>

      {/* Modal for Widget Management */}
      {activeProduct && (
        <Modal
          open={true}
          onClose={handleCloseModal}
          title="Widget Management"
          primaryAction={{
            content: "Generate All Missing",
            onAction: () =>
              alert("Generate all Summary for " + activeProduct.name),
          }}
          secondaryActions={[
            {
              content: "Export Summary",
              onAction: handleCloseModal,
            },
          ]}
          large
        >
          <Modal.Section>
            {/* Product Info */}
            <div style={{ marginBottom: "8px" }}>
              <Card
                style={{
                  display: "flex",
                  flexDirection: isMobile ? "column" : "row",
                  alignItems: isMobile ? "flex-start" : "center",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                {activeProduct.image ? (
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    style={{
                      width: "64px",
                      height: "64px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      border: "1px solid #e5e7eb",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#e5e7eb",
                      borderRadius: "50%",
                      color: "#6b7280",
                    }}
                  >
                    <svg
                      style={{ width: "32px", height: "32px" }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 12c2.21 0 4-1.79 
                        4-4s-1.79-4-4-4-4 1.79-4 
                        4 1.79 4 4 4zm0 2c-2.67 0-8 
                        1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                  </div>
                )}
                <div>
                  <Text as="h3" fontWeight="medium">
                    {activeProduct.name}
                  </Text>
                  <Badge>{activeProduct.Summary}</Badge>{" "}
                  <Badge> {activeProduct.progress}</Badge>{" "}
                  <Badge
                    tone={
                      activeProduct.status === "Active" ? "success" : "default"
                    }
                  >
                    {activeProduct.status}
                  </Badge>
                </div>
              </Card>
            </div>

            {/* Summary Section */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                gap: "8px",
              }}
            >
              <Card sectioned>
                <Text variant="headingSm">🤖 AI Summary</Text>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Badge>Not Generated</Badge>
                </div>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Text as="p">
                    Click "Generate" to create this summary content
                  </Text>
                </div>
                <Button onClick={() => alert("Generate AI Summary")}>
                  + Generate
                </Button>
              </Card>

              <Card sectioned>
                <Text variant="headingSm">⚖️ Pros & Cons</Text>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Badge>Not Generated</Badge>
                </div>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Text as="p">
                    Click "Generate" to create this summary content
                  </Text>
                </div>
                <Button onClick={() => alert("Generate Pros & Cons")}>
                  + Generate
                </Button>
              </Card>

              <Card sectioned>
                <Text variant="headingSm">🎯 Sale Popup</Text>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Badge>Not Generated</Badge>
                </div>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Text as="p">
                    Click "Generate" to create this summary content
                  </Text>
                </div>
                <Button onClick={() => alert("Generate Sale Popup")}>
                  + Generate
                </Button>
              </Card>

              <Card sectioned>
                <Text variant="headingSm">📜 Scrolling Text</Text>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Badge>Not Generated</Badge>
                </div>
                <div style={{ marginTop: "4px", marginBottom: "4px" }}>
                  <Text as="p">
                    Click "Generate" to create this summary content
                  </Text>
                </div>
                <Button onClick={() => alert("Generate Scrolling Text")}>
                  + Generate
                </Button>
              </Card>
            </div>
          </Modal.Section>
        </Modal>
      )}
    </div>
  );
};

export default TrustooReviews;