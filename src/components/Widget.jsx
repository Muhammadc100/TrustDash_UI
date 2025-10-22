import React, { useState, useCallback } from "react";
import {
  DesktopIcon,
  MobileIcon,
  AdjustIcon,
  ExternalIcon,
  DeleteIcon,
} from "@shopify/polaris-icons"; // Polaris Icons
import {
  Button,
  Card,
  Icon,
  RadioButton,
  Select,
  Checkbox,
  RangeSlider,
  DropZone,
  Text,
  TextField,
} from "@shopify/polaris";

const Widget = () => {
  const [view, setView] = useState("desktop");
  const [selected, setSelected] = useState("recent");
  const [selected1, setSelected1] = useState("recent");
  const [selected2, setSelected2] = useState("recent");
  const [selected3, setSelected3] = useState("recent");
  const [selected4, setSelected4] = useState("MDY");
  const [selected5, setSelected5] = useState("F+A");
  const [selected6, setSelected6] = useState("I+T");
  const [selected7, setSelected7] = useState("I+T");

  const [rangeValue, setRangeValue] = useState(4);
  const [rangeValue1, setRangeValue1] = useState(2);
  const [rangeValue2, setRangeValue2] = useState(14);
  const [rangeValue3, setRangeValue3] = useState(4);
  const [rangeValue4, setRangeValue4] = useState(5);

  const handleSelectChange = (value) => setSelected(value);
  const handleSelectChange1 = (value) => setSelected1(value);
  const handleSelectChange2 = (value) => setSelected2(value);
  const handleSelectChange3 = (value) => setSelected3(value);
  const handleSelectChange4 = (value) => setSelected4(value);
  const handleSelectChange5 = (value) => setSelected5(value);

  const handleSelectChange6 = (value) => setSelected6(value);

  const handleSelectChange7 = (value) => setSelected7(value);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );

  const handleRangeSliderChange1 = useCallback(
    (value) => setRangeValue1(value),
    []
  );

  const handleRangeSliderChange2 = useCallback(
    (value) => setRangeValue2(value),
    []
  );

  const handleRangeSliderChange3 = useCallback(
    (value) => setRangeValue3(value),
    []
  );

  const handleRangeSliderChange4 = useCallback(
    (value) => setRangeValue4(value),
    []
  );

  const [checked1, setChecked1] = useState(false);

  const [checked2, setChecked2] = useState({
    options: false,
  });
  const [checked3, setChecked3] = useState({
    options: false,
  });
  const [checked4, setChecked4] = useState({
    options: false,
  });
  const [checked5, setChecked5] = useState({
    options: false,
  });
  const [checked6, setChecked6] = useState(false);

  const [checked7, setChecked7] = useState(false);

  const [checked8, setChecked8] = useState(false);

  const [file, setFile] = useState(null);

  const handleDrop = useCallback(
    (_dropFiles, acceptedFiles, _rejectedFiles) => setFile(acceptedFiles[0]),
    []
  );

  const [checked9, setChecked9] = useState({
    options: false,
  });

  const [checked10, setChecked10] = useState({
    options: false,
  });

  const [checked11, setChecked11] = useState({
    options: false,
  });

  const [checked12, setChecked12] = useState({
    options: false,
  });

  const [checked13, setChecked13] = useState({
    options: false,
  });
  const [checked14, setChecked14] = useState({
    options: false,
  });

  const [checked15, setChecked15] = useState({
    options: false,
  });

  const [checked16, setChecked16] = useState({
    options: false,
  });

  const [checked17, setChecked17] = useState({
    options: false,
  });

  const handleChange1 = useCallback(
    (newChecked) => setChecked1(newChecked),
    []
  );
  const handleChange2 = useCallback(
    (newChecked) => setChecked2(newChecked),
    []
  );
  const handleChange3 = useCallback(
    (newChecked) => setChecked3(newChecked),
    []
  );
  const handleChange4 = useCallback(
    (newChecked) => setChecked4(newChecked),
    []
  );
  const handleChange5 = useCallback(
    (newChecked) => setChecked5(newChecked),
    []
  );
  const handleChange6 = useCallback(
    (newChecked) => setChecked6(newChecked),
    []
  );

  const handleChange7 = useCallback(
    (newChecked) => setChecked7(newChecked),
    []
  );

  const handleChange8 = useCallback(
    (newChecked) => setChecked8(newChecked),
    []
  );

  const handleChange9 = useCallback(
    (newChecked) => setChecked9(newChecked),
    []
  );

  const handleChange10 = useCallback(
    (newChecked) => setChecked10(newChecked),
    []
  );

  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const handleChange11 = useCallback(
    (newChecked) => setChecked11(newChecked),
    []
  );

  const handleChange12 = useCallback(
    (newChecked) => setChecked12(newChecked),
    []
  );

  const handleChange13 = useCallback(
    (newChecked) => setChecked13(newChecked),
    []
  );

  

  const handleChange14 = useCallback(
    (newChecked) => setChecked14(newChecked),
    []
  );

  const handleChange15 = useCallback(
    (newChecked) => setChecked15(newChecked),
    []
  );

  const handleChange16 = useCallback(
    (newChecked) => setChecked16(newChecked),
    []
  );

  const handleChange17 = useCallback(
    (newChecked) => setChecked17(newChecked),
    []
  );

  const sortOptions = [
    { label: "Featured (Ai)", value: "feature" },
    { label: "Photo priority", value: "photo" },
    { label: "Newest", value: "new" },
    { label: "Highest Rating", value: "high" },
    { label: "Lowest Rating", value: "low" },
  ];

  const sortOptions1 = [
    { label: "Rounded corners", value: "rounded" },
    { label: "Square corners", value: "square" },
  ];
  const sortOptions3 = [
    { label: "<...3,4,5...>", value: "num" },
    { label: "more", value: "other" },
  ];
  const sortOptions4 = [
    { label: "MM/DD/YYYY", value: "MDY" },
    { label: "DD/MM/YYYY", value: "DMY" },
    { label: "YYYY/MM/DD", value: "YMD" },
    { label: "xx time ago", value: "time_ago" },
  ];

  const sortOptions5 = [
    { label: "Flag+Abbreviation", value: "F+A" },
    { label: "Flag", value: "F" },
    { label: "Abbreviation", value: "A" },
  ];

  const sortOptions6 = [
    { label: "Icon+Text", value: "I+T" },
    { label: "Icon", value: "F" },
  ];

  const sortOptions7 = [
    { label: "Arabic", value: "arab" },
    { label: "Armenian", value: "armen" },
    { label: "Bulgarian", value: "bulgarad" },
    { label: "Chinese (Simplified)", value: "chinese" },
    { label: "Chinese (Traditional)", value: "chinese2" },
    { label: "Croatian (hrvatski)", value: "croatia" },
    { label: "Czech (cestian)", value: "czech" },
    { label: "Danish (dansk)", value: "danish" },
    { label: "Dutch (Nederlands)", value: "dutch" },
    { label: "English", value: "eng" },
    { label: "Estonian", value: "eesti" },
    { label: "Finnish (suomi)", value: "finnish" },
    { label: "French (francais)", value: "french" },
    { label: "Georgian", value: "george" },
    { label: "German (deutsch)", value: "german" },
    { label: "Greek (ellinika)", value: "greek" }
  ];

  const sortOptions2 = [
    { label: "First name, last initial(Jason Harvey)", value: "First, Last" },
    { label: "First name, last name (John H.)", value: "First,L" },
    { label: "First name, last name (J. H.)", value: "F,L" },
    { label: "Anonymus", value: "unknown" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto">
        {/* Top Navigation */}
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-4 border-b border-gray-200">
          {[
            "Review widget",
            "Q&A widget",
            "Star rating",
            "AI Summary",
            "Write a review",
            "Card carousel",
            "Store reviews",
            "All reviews",
            "Review snippets",
            "Checkout",
          ].map((item, idx) => (
            <span
              key={idx}
              className="text-sm font-medium text-gray-600 cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex gap-6 items-start">
          {/* Left Box - Activate Review Widget */}
          <div className="w-80 space-y-6">
            <Card className="w-full bg-white shadow rounded-lg p-4 flex flex-col h-fit">
              <h2 className="text-base font-semibold text-gray-900 mb-3">
                Activate review widget
              </h2>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Go to the Theme Editor and enable widgets through app blocks.
              </p>

              <Button variant="primary" size="micro" icon={ExternalIcon}>
                Add to theme
              </Button>

              <p className="text-xs text-gray-600 leading-5 mt-3">
                Display customer reviews at the bottom of the product page. To
                customize the style or display location, please{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  contact support
                </span>
                .
              </p>
            </Card>

            {/* Head Section */}
            <Card className="w-full bg-white shadow rounded-lg p-4">
              <h2 className="text-base font-semibold text-gray-900 mb-4">
                Head
              </h2>

              {/* Layout Section */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Layout
                </h3>

                <div className="flex gap-4 mb-3">
                  {/* Professional Layout */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-12 border-2 rounded bg-white p-1 mb-2">
                      <div className="w-full h-full bg-gray-100 rounded-sm flex flex-col gap-0.5 p-1">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <div className="flex-1 space-y-0.5">
                            <div className="h-0.5 bg-gray-400 rounded w-full"></div>
                            <div className="h-0.5 bg-gray-400 rounded w-3/4"></div>
                          </div>
                        </div>
                        <div className="flex gap-0.5 mt-1">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-sm"></div>
                        </div>
                        <div className="h-0.5 bg-gray-400 rounded w-1/2 mt-1"></div>
                      </div>
                    </div>
                    <label className="flex items-center gap-2">
                      <RadioButton
                        type="radio"
                        name="layout"
                        defaultChecked
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Professional</span>
                    </label>
                  </div>

                  {/* Streamlined Layout */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-12 border border-gray-300 rounded bg-white p-1 mb-2">
                      <div className="w-full h-full bg-gray-50 rounded-sm flex flex-col gap-0.5 p-1">
                        <div className="h-0.5 bg-gray-300 rounded w-1/3"></div>
                        <div className="flex justify-end gap-0.5 mt-2">
                          <div className="h-0.5 bg-gray-300 rounded w-4"></div>
                          <div className="h-0.5 bg-gray-300 rounded w-4"></div>
                        </div>
                      </div>
                    </div>
                    <label className="flex items-center gap-2">
                      <RadioButton
                        type="radio"
                        name="layout"
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Streamlined</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Star Style Section */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">
                  Star style
                </h3>

                <div className="grid grid-cols-6 gap-2 p-2 bg-white rounded-lg">
                  {/* Row 1 */}
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </button>
                  </div>

                  {/* Row 2 */}
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 2l2 6h6l2-6 4 12-6-4-4 4-6 4z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 16L3 5h18l-2 11H5zM12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 3V1h10v2l5 7-5 7v2H7v-2l-5-7 5-7z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C13.1 2 14 2.9 14 4v8c0 1.1-.9 2-2 2s-2-.9-2-2V4c0-1.1.9-2 2-2zm0 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.5 7 7.5 1-5.5 5.5L19 23l-7-3.5L5 23l1.5-7.5L1 10l7.5-1L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    </button>
                  </div>

                  {/* Row 3 */}
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7h-8v6h8V7zm-2 4h-4V9h4v2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-center">
                    <button className="w-11 h-9 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50 p-1">
                      <svg
                        className="w-5 h-5 fill-gray-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="border-t border-2 mt-4 mb-3" />
                <div>
                  <h3 className="font-semibold text-black mb-2">
                    Display and function
                  </h3>
                  <p className="text-gray-800 font-normal">Default sort</p>
                  <div className="flex-1 mb-3">
                    <Select
                      options={sortOptions}
                      onChange={handleSelectChange}
                      value={selected}
                    />
                  </div>
                  <p className="text-gray-800 font-normal">Attributes style</p>
                  <div className="flex-1 mb-3">
                    <Select
                      options={sortOptions1}
                      onChange={handleSelectChange1}
                      value={selected1}
                    />
                  </div>
                </div>
                <div className="mb-1">
                  <Checkbox
                    label="Number of reviews"
                    checked={checked1}
                    onChange={handleChange1}
                  />
                  <Checkbox
                    label="Write a review button"
                    checked={checked2}
                    onChange={handleChange2}
                  />{" "}
                  <br />
                  <Checkbox
                    label="Attributes"
                    checked={checked3}
                    onChange={handleChange3}
                  />{" "}
                  <br />
                  <Checkbox
                    label="Photo album"
                    checked={checked4}
                    onChange={handleChange4}
                  />
                </div>
                <RangeSlider
                  label="Photo border radius"
                  value={rangeValue}
                  onChange={handleRangeSliderChange}
                  output
                />
                <Checkbox
                  label="Rating filter"
                  checked={checked5}
                  onChange={handleChange5}
                />
                <RangeSlider
                  label="Button border radius"
                  value={rangeValue1}
                  onChange={handleRangeSliderChange1}
                  output
                />
                <div className="border-t border-2 solid mt-5 mb-5" />
                <div className="flex space-x-28 mb-5">
                  <div className="font-semibold">Color</div>
                  <div className="text-blue-700 hover:text-blue-800 hover:underline">
                    <a href="#">Reset to default</a>
                  </div>
                </div>
                <div className="flex gap-8">
                  {/* First Star Color */}
                  <div>
                    <p className="mb-1 font-medium">Star Color</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-amber-500" />
                      <p className="ml-2 text-gray-700">#FFA800</p>
                    </div>
                  </div>

                  {/* Second Star Color */}
                  <div>
                    <p className="mb-1 font-medium">Disabled star</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-300" />
                      <p className="ml-2 text-gray-700">#E6E6E6</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mt-2">
                  {/* First Star Color */}
                  <div>
                    <p className="mb-1 font-medium w-51">Button Background</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-white border border-1" />
                      <p className="ml-2 text-gray-700">#FFFFFF</p>
                    </div>
                  </div>

                  {/* Second Star Color */}
                  <div className="mt-5">
                    <p className="mb-1 font-medium">Button stroke</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-black" />
                      <p className="ml-2 text-gray-700">#303030</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mt-2">
                  {/* First Star Color */}
                  <div>
                    <p className="mb-1 mt-5 font-medium w-51">Button Text</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-black border border-1" />
                      <p className="ml-2 text-gray-700">#303030</p>
                    </div>
                  </div>

                  {/* Second Star Color */}
                  <div className="mt-5">
                    <p className="mb-1 font-medium">Attributes</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-black" />
                      <p className="ml-2 text-gray-700">#303030</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-8 mt-2">
                  {/* First Star Color */}
                  <div>
                    <p className="mb-1 mt-5 font-medium w-51">
                      Attributes Background
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-100 border border-1" />
                      <p className="ml-2 text-gray-700">#F2F2F2</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <p className="font-medium text-gray-800">Custom text</p>
                  <div className="mt-2">
                    <Button fullWidth>Settings</Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Reviews area */}
            <Card className="w-full bg-white shadow rounded-lg p-4">
              <h2 className="text-base font-semibold text-gray-900 mb-3">
                Reviews area
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                To move it or place it in a tab, please{" "}
                <span className="text-blue-600 hover:underline cursor-pointer">
                  contact support
                </span>
                .
              </p>
              <h2 className="font-semibold mt-5">Layout</h2>
              <div className="flex gap-7 mt-3">
                <label className="flex items-center">
                  <RadioButton type="radio" name="List" className="w-4 h-4" />
                  <span className="text-sm">List</span>
                </label>
                <label className="flex items-center">
                  <RadioButton type="radio" name="List" className="w-4 h-4" />
                  <span className="text-sm">Grid</span>
                </label>
                <label className="flex items-center">
                  <RadioButton type="radio" name="List" className="w-4 h-4" />
                  <span className="text-sm">Split</span>
                </label>
              </div>
              <div className="border-t mt-4 border-1 mb-4" />
              {/* Display and function */}
              <div>
                <h3 className="font-semibold text-black mb-2">
                  Display and function
                </h3>
                <p className="text-gray-800 font-medium mb-1">Name</p>
                <Select
                  options={sortOptions2}
                  onChange={handleSelectChange2}
                  value={selected2}
                />
                <p className="text-gray-800 font-medium mb-1 mt-4">
                  Pagination
                </p>
                <Select
                  options={sortOptions3}
                  onChange={handleSelectChange3}
                  value={selected3}
                />
                <div className="mb-1 mt-4">
                  <Checkbox
                    label="Review date"
                    checked={checked6}
                    onChange={handleChange6}
                  />
                  <Select
                    options={sortOptions4}
                    onChange={handleSelectChange4}
                    value={selected4}
                    disabled={!checked6} // <-- disabled when checkbox is NOT checked
                  />
                </div>
                <div className="mt-4 mb-1">
                  <Checkbox
                    label="Country flag"
                    checked={checked7}
                    onChange={handleChange7}
                  />
                  <Select
                    options={sortOptions5}
                    onChange={handleSelectChange5}
                    value={selected5}
                    disabled={!checked7} // 🔑 disable when checkbox is not checked
                  />
                </div>
                <div className="mt-4 mb-1">
                  <Checkbox
                    label="Verified badge"
                    checked={checked8}
                    onChange={handleChange8}
                  />
                  <Select
                    options={sortOptions6}
                    onChange={handleSelectChange6}
                    value={selected6}
                    disabled={!checked8} // 🔑 disable when checkbox is unchecked
                  />
                  <div className="flex gap-2 mt-1">
                    <div>
                      <button className="w-10 p-2 h-8 mt-2 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 15 15"
                        >
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="w-10 p-2 h-8 mt-2 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#000000"
                            d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="w-10 p-2 h-8 mt-2 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 24 24"
                          fill="#000000"
                        >
                          <g className="shield-tick-outline">
                            <g
                              fill="#000000"
                              fillRule="evenodd"
                              className="Vector"
                              clipRule="evenodd"
                            >
                              <path d="M15.696 9.282a1 1 0 0 1 .022 1.414l-4.03 4.159a1.17 1.17 0 0 1-1.683 0l-1.723-1.778a1 1 0 1 1 1.436-1.392l1.128 1.164l3.436-3.545a1 1 0 0 1 1.414-.022" />
                              <path d="M11.061 2.36a2.9 2.9 0 0 1 1.878 0l5.856 1.996A2.91 2.91 0 0 1 20.75 7.39l-.758 7.792a2.9 2.9 0 0 1-1.205 2.085l-5.118 3.657a2.91 2.91 0 0 1-3.34.029l-5.077-3.495a2.91 2.91 0 0 1-1.247-2.119l-.76-7.953a2.91 2.91 0 0 1 1.957-3.03zm1.291 1.72a1.1 1.1 0 0 0-.704 0L5.789 6.078a1.09 1.09 0 0 0-.734 1.136l.761 7.953c.03.32.202.612.468.795l5.076 3.494c.378.26.88.256 1.253-.01l5.119-3.657a1.1 1.1 0 0 0 .451-.782l.759-7.792a1.09 1.09 0 0 0-.734-1.138z" />
                            </g>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="w-10 p-2 h-8 mt-2 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 16 16"
                          fill="#000000"
                        >
                          <g
                            fill="none"
                            stroke="#000000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                          >
                            <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z" />
                            <path d="m5.75 7.75l1.5 1.5l3-3.5" />
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="w-10 p-2 h-8 mt-2 border border-gray-300 bg-white rounded flex items-center justify-center hover:bg-gray-50">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="200"
                          height="200"
                          viewBox="0 0 15 15"
                        >
                          <path
                            fill="#000000"
                            fillRule="evenodd"
                            d="M7.252.066a.5.5 0 0 1 .496 0l7 4A.5.5 0 0 1 15 4.5v.72a10.15 10.15 0 0 1-7.363 9.76a.5.5 0 0 1-.274 0A10.152 10.152 0 0 1 0 5.22V4.5a.5.5 0 0 1 .252-.434l7-4Zm-.18 10.645l4.318-5.399l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 mb-1">
                    <Checkbox
                      label="Customer avatar"
                      checked={checked9}
                      onChange={handleChange9}
                    />
                  </div>
                  <div className="flex flex-col gap-3 mt-2">
                    {/* Header row */}
                    <div className="flex gap-24 items-center">
                      <h2 className="font-medium">Upload store avatar</h2>
                      <div className="opacity-50 pointer-events-none">
                        <Icon source={DeleteIcon} tone="base" />
                      </div>
                    </div>

                    {/* DropZone */}
                    <DropZone accept="image/*" type="image" onDrop={handleDrop}>
                      {file ? (
                        <div className="p-2">
                          <Text as="p" variant="bodyMd">
                            {file.name} uploaded
                          </Text>
                          <img
                            src={URL.createObjectURL(file)}
                            alt="Add images"
                            className="mt-2 w-24 h-24 object-cover rounded"
                          />
                        </div>
                      ) : (
                        <DropZone.FileUpload
                        actionTitle="Add images" 
                        actionHint="Accepts JPG, PNG, or GIF, up to 5MB" />
                      )}
                    </DropZone>
                  </div>
                </div>
              </div>
              <Checkbox
                label="Show Empty Reviews"
                checked={checked10}
                onChange={handleChange10}
              />
              <br />
              <Checkbox
                label="Item type"
                checked={checked11}
                onChange={handleChange11}
              />
              <br />
              <Checkbox
                label="Review titles"
                checked={checked12}
                onChange={handleChange12}
              />
              <br />
              <Checkbox
                label="Helpful?"
                checked={checked13}
                onChange={handleChange13}
              />
              <div className="mt-3" />
              <div className="mb-4">
                <RangeSlider
                  label="Review font size"
                  value={rangeValue2}
                  onChange={handleRangeSliderChange2}
                  output
                />
                <div className="mb-2" />
                <RangeSlider
                  label="Photo border radius"
                  value={rangeValue3}
                  onChange={handleRangeSliderChange3}
                  output
                />
                <div className="mb-2" />
                <RangeSlider
                  label="Number of reviews per page"
                  value={rangeValue4}
                  onChange={handleRangeSliderChange4}
                  output
                />
              </div>
              <div className="border-t border-2 mb-4" />
              <div className="flex space-x-28 mb-5">
                <div className="font-semibold">Color</div>
                <div className="text-blue-700 hover:text-blue-800 hover:underline">
                  <a href="#">Reset to default</a>
                </div>
              </div>
              <div className="flex gap-8">
                <div>
                  <p className="mb-1 font-medium">Badge</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-800" />
                    <p className="ml-2 text-gray-700">#303030</p>
                  </div>
                </div>

                {/* Second Star Color */}
                <div>
                  <p className="mb-1 font-medium">Badge text</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-800" />
                    <p className="ml-2 text-gray-700">#303030</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mt-2">
                {/* First Star Color */}
                <div>
                  <p className="mt-6 font-medium w-51">Avatar background</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-300 border border-1" />
                    <p className="ml-2 text-gray-700">#EEEEEE</p>
                  </div>
                </div>

                {/* Second Star Color */}
                <div className="mt-5">
                  <p className="mb-1 font-medium">Avatar text</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-800" />
                    <p className="ml-2 text-gray-700">#303030</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-8 mt-2">
                {/* First Star Color */}
                <div>
                  <p className="mt-6 font-medium w-51">Dividing line</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-300 border border-1" />
                    <p className="ml-2 text-gray-700">#D9D9D9</p>
                  </div>
                </div>

                {/* Second Star Color */}
                <div className="mt-5">
                  <p className="mb-1 font-medium">Reply background</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-200" />
                    <p className="ml-2 text-gray-700">#F2F2F2</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold mb-2">Custom text</h3>
                <Button fullWidth>Settings</Button>
              </div>
            </Card>
            {/* General settings */}
            <Card className="w-full bg-white shadow rounded-lg p-4">
              <h2 className="text-base font-semibold text-gray-900 mb-3">
                General settings
              </h2>
              <h3 className="font-semibold mb-2">Display and function</h3>
              <Text as="p" fontWeight="regular">
                Font
              </Text>
              <div style={{ maxWidth: "300px", marginBottom: "5px" }}>
                <TextField
                  label=""
                  value={value}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder="Default (follow store theme)"
                />
              </div>
              <Checkbox
                label="Hide when there are no reviews"
                checked={checked14}
                onChange={handleChange14}
              />
              <div className="pl-7">
              <Text as="p" fontWeight="regular" className="mb-2" variant="bodyMd">When the number of reviews is 0, hide the review widget</Text>
              </div>
              <div className="mt-4 mb-4">
              <Text as="h3" fontWeight="medium" className="mt-3 mb-1">
                Show corresponding products
              </Text>
              <Checkbox
                label="All reviews"
                checked={checked15}
                onChange={handleChange15}
              />
              <br />
              <Checkbox
                label="Side tab"
                checked={checked16}
                onChange={handleChange16}
              />
              <br />
              <Checkbox
                label="Product pages (enable product group)"
                checked={checked17}
                onChange={handleChange17}
              />
              </div>
              <div className="border-t border-2"/>
              <div className=" mt-5">
              <Text as="h2" fontWeight="medium" variant="headingMd">Color</Text>
              </div>
              <div className="flex gap-8 mt-2">
                {/* First Star Color */}
                <div>
                  <p className="mt-2 font-medium w-51">Text</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-gray-800 border border-1" />
                    <p className="ml-2 text-gray-700">#303030</p>
                  </div>
                </div>

                {/* Second Star Color */}
                <div className="mt-2">
                  <p className="mb-1 font-medium">Box background color</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 cursor-pointer rounded-full bg-white border border-1" />
                    <p className="ml-2 text-gray-700">#FFFFFF</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-2 mt-5 mb-3"/>
              <Text as="h2" fontWeight="medium" tone="base" variant="headingMd">Language & Translate</Text>
              <div className="mt-3 mb-1">
                <Text as="h3" fontWeight="medium" tone="subdued">Default language</Text>
                <div className="mt-2 mb-1">
                <Select
                  options={sortOptions7}
                  onChange={handleSelectChange7}
                  value={selected7}
                />
                </div>
                <Text as="p" fontWeight="regular" tone="subdued">Please <a className="text-blue-600 hover:text-blue-900 hover:underline" href="#">contact support</a> to add more languages.</Text>
              </div>
              <div className="mt-4">
                  <Text as="h3" fontWeight="medium" variant="headingMd">Custom Language Text</Text>
                </div>
            </Card>
          </div>

          {/* Right Preview Block */}
          <div className="w-full">
            <Card className="w-full bg-white shadow rounded-lg overflow-hidden">
              {/* Preview Header */}
              <div className="flex items-center justify-between border-b px-4 py-2 bg-white">
                <span className="text-sm font-medium text-gray-700">
                  Preview
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setView("desktop")}
                    className={`p-2 rounded ${
                      view === "desktop" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    <DesktopIcon className="w-4 h-4 text-gray-600" />
                  </button>
                  <button
                    onClick={() => setView("mobile")}
                    className={`p-2 rounded ${
                      view === "mobile" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    <MobileIcon className="w-4 h-4 text-gray-600" />
                  </button>
                </div>

                <Button className="px-3 py-1 text-sm font-medium border rounded-md bg-white hover:bg-gray-100">
                  Preview
                </Button>
              </div>

              {/* Preview Body */}
              <div className="p-6 bg-gray-200">
                <div className="p-6 bg-white rounded-md shadow-sm">
                  {/* Title */}
                  <h2 className="text-lg font-semibold mb-4">
                    Customer Reviews
                  </h2>

                  {/* Rating Summary */}
                  <div className="flex items-start gap-6">
                    {/* Left Side */}
                    <div>
                      <div className="text-4xl font-bold">4.6</div>
                      <div className="flex text-yellow-400 my-1">
                        {Array.from({ length: 5 }, (_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < 4 ? "fill-yellow-400" : "fill-gray-200"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09L5.64 12 1 7.91l6.061-.88L10 2l2.939 5.03 6.061.88L14.36 12l1.518 6.09z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">50 reviews</div>

                      {/* Buttons */}
                      <div className="flex gap-2 mt-4">
                        <Button className="px-3 py-2 border rounded-md text-sm font-medium hover:bg-gray-50">
                          Write a review
                        </Button>
                        <Button className="px-3 py-2 border rounded-md text-sm font-medium hover:bg-gray-50 flex items-center gap-1">
                          <AdjustIcon className="w-4 h-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>

                    {/* Middle - Rating Bars */}
                    <div className="flex-1">
                      {[
                        { label: "5 Star", count: 102, percent: "90%" },
                        { label: "4 Star", count: 10, percent: "10%" },
                        { label: "3 Star", count: 0, percent: "0%" },
                        { label: "2 Star", count: 0, percent: "0%" },
                        { label: "1 Star", count: 0, percent: "0%" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm mb-1"
                        >
                          <span className="w-14">{item.label}</span>
                          <div className="flex-1 bg-gray-200 rounded h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded"
                              style={{ width: item.percent }}
                            ></div>
                          </div>
                          <span className="w-8 text-right">{item.count}</span>
                        </div>
                      ))}
                    </div>

                    {/* Right Side - Images */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        "https://www.justmylook.com/cdn/shop/articles/Introducing-Korean-Skin-Care.png?v=1725350079",
                        "https://derma.pk/cdn/shop/files/Cosmetics_895d7349-25fa-4ca0-a905-013af5b4f5ba.jpg?v=1751971439&width=750",
                        "https://www.bellobello.my/wp-content/uploads/2022/08/boldlipessentials-2.jpg",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-U4as6jk-NXNzQjsOcuw-3ICpmiMnbWQ8yg&s",
                        "https://www.orogoldcosmetics.com/wp-content/uploads/2023/02/skin-care-products-orogold.jpg",
                        "https://cdn.media.amplience.net/i/elfcosmetics/all-skincare-2025-5-plp-IMAGE-1_D?fmt=auto&w=820",
                      ].map((src, idx) => (
                        <img
                          key={idx}
                          src={src}
                          alt="review"
                          className="w-16 h-16 rounded object-cover"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Sliders */}
                  <div className="grid grid-cols-2 gap-8 mt-6">
                    {/* Shipping Speed */}
                    <div>
                      <div className="text-sm font-medium mb-1">
                        Shipping Speed
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">Slow</span>
                        <div className="flex-1 bg-gray-200 h-1 rounded relative">
                          <div className="absolute left-1/2 top-0 w-2 h-2 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">Fast</span>
                      </div>
                    </div>

                    {/* Size Fit */}
                    <div>
                      <div className="text-sm font-medium mb-1">Size Fit</div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-2">
                          Too small
                        </span>
                        <div className="flex-1 bg-gray-200 h-1 rounded relative">
                          <div className="absolute left-2/3 top-0 w-2 h-2 rounded-full bg-black transform -translate-x-1/2 -translate-y-1/2"></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">
                          Too large
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-1 mt-10 mb-5"/>
                  {/* testimonials */}
                  
                </div>
              </div>
            </Card>
            {/* End Preview Block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
