import {
  Button,
  Card,
  Icon,
  Text,
  ProgressBar,
  Select,
  Modal,
  Badge,
} from "@shopify/polaris";
import { ViewIcon } from "@shopify/polaris-icons";
import React, { useState, useCallback, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "autumn dawn",
    image: null,
    status: "INACTIVE",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 2,
    name: "BERIBES Bluetooth Headphones Over Ear, 65H Playtime and 6 EQ Music Modes Wireless Headphones with Microphone, HiFi Stereo Foldable Lightweight Headsets, Deep Bass for Home Office Cellphone PC Ect.",
    image: "https://cdn.mos.cms.futurecdn.net/QhFxoywDVHbpRFCNJcwj2Q.jpg",
    status: "ACTIVE",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 3,
    name: "billowing uuojoipolp",
    image: null,
    status: "INACTIVE",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 4,
    name: "hdhhdhdbhdv",
    image: null,
    status: "ACTIVE",
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
    status: "INACTIVE",
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
    status: "ACTIVE",
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
    status: "INACTIVE",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
  {
    id: 8,
    name: "gloves",
    image: null,
    status: "ACTIVE",
    Summary: "0/4 Summary",
    progress: "0% Complete",
    progressValue: 0,
    description: "No Summary generated yet",
  },
];

const ProductList = () => {
  const [sortValue, setSortValue] = useState("newest");
  const [activeProduct, setActiveProduct] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track window resize to update isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // check on mount
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

  return (
    <div style={{ padding: "24px", backgroundColor: "#f9fafb" }}>
      <Card style={{ maxWidth: "1024px", margin: "0 auto" }}>
        {/* Sticky Header Section */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "white",
            padding: "16px",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "0px",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
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
                          product.status === "ACTIVE" ? "success" : "default"
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
                    onClick={() => handleOpenModal(product)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#2563eb",
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.textDecoration = "underline")
                    }
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
      </Card>

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
              content: "Done",
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
                      activeProduct.status === "ACTIVE"
                        ? "success"
                        : "default"
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

export default ProductList;
