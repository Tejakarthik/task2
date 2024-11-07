import React from "react";
import { useTheme, Select, Box, Text } from "@chakra-ui/react";
import FromWrapper from "./formWrapper";
import { IFormInputProps } from "@src/interface/forms";
// import ReactSelect, { Props } from "react-select";
// | "onChange" | "onBlur"
interface IFormSelectProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
  onChange?: (name: string, value: string) => void;
  onBlur?: (name: string, touched: boolean) => void;
  error?: string;
  touched?: boolean;
  options: { label: string; value: string }[];
  helperText?: string;
  wrapperProps?: any;
}

const FormSelect: React.FC<IFormSelectProps> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  // selectProps = {},
  // children,
  helperText,
  wrapperProps = {},
  options,
}) => {
  const theme = useTheme();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(name, event.target.value);
  };
  const handleBlur = () => {
    onBlur && onBlur(name, true);
  };

  return (
    <FromWrapper
      isInvalid={Boolean(error && touched)}
      wrapperProps={wrapperProps}
      helperText={helperText}
      label={label}
      error={error as string}
      touched={touched}
    >
      {/* <ReactSelect
        name={name}
        placeholder={placeholder}
        value={options.find((item: { value: string }) => item?.value === value)}
        onChange={handleChange}
        onBlur={handleBlur}
        options={options}
        // styles
        styles={{
          container: (base) => ({
            ...base,
            width: "100%",
            minWidth: "none",
            height: "auto",
            maxHeight: "none",
            minHeight: "none",
          }),
          control: (base, { isFocused }) => ({
            ...base,
            width: "100%",
            minWidth: "272px",
            height: "45px",
            border: isFocused
              ? `1px solid ${theme.colors.primary}`
              : error
              ? `1px solid ${theme.colors.errorRed}`
              : "1px solid #c0bcd7",
            backgroundColor: theme.colors.inputBg,
            borderRadius: "10px",
            fontSize: ".875rem",
            fontWeight: "500",
            "&:hover": {
              border: `1px solid ${theme.colors.primary}`,
            },
          }),
          valueContainer: (base) => ({
            ...base,
            paddingLeft: "20px",
          }),
          option: (base, { isFocused }) => ({
            ...base,
            fontSize: ".875rem",
            fontWeight: "500",
          }),
        }}
        {...selectProps}
      />
      {children} */}
      
        <Select
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          borderColor={error ? theme.colors.errorRed : "gray.300"}
          _hover={{ borderColor: theme.colors.primary }}
          _focus={{ borderColor: theme.colors.primary }}
          icon={<Box as="span" className="down-arrow">▼</Box>}
          iconSize="20px"
          iconColor="gray.500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>

      

    </FromWrapper>
  );
};

export default FormSelect;
