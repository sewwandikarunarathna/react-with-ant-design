import { useActionState, useState } from 'react'
import SharedFormItem from '../../shared/SharedFormItem';
import SharedInput from '../../shared/SharedInput';
import SharedButton from '../../shared/SharedButton';
import { Alert, ConfigProvider } from 'antd';
import SharedCheckbox from '../../shared/SharedCheckbox';
import SharedCard from '../../shared/SharedCard';
import SharedForm from '../../shared/SharedForm';
import SharedBreadcrumb from '../../shared/SharedBreadcrumb';

 const breadcrumbItems = [
    {
      title: <a href="/">Home</a>,
    },
    {
      title: <a href="/form">Form</a>,
    },
  ]; 

const Form = () => {
const [formErrors, setFormErrors] = useState<any>({});

    // Special theme just for this page
    const specialTheme = {
      components: {
        Form: {
          itemMarginBottom: 12, // Default is 24px
        },
      },
    };

  const [message, submitAction, isPending] = useActionState(
    async (prevErrors: any, formData: any) => {
      // Server-side validation
      const errors: any = {};
      if (!formData.get("username")) errors.username = "Username required";
      if (!formData.get("email")?.match(/^\S+@\S+\.\S+$/)) {
        errors.email = "Invalid email format";
      }
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors); // Update errors state
        return { type: "error", message: "Something wrong!" }; // Return error message
      }

      // Process valid data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Submitted:", Object.fromEntries(formData));
      setFormErrors({});
      return { type: "success", message: "Submitted!" }; // Return success message
    },
    { type: "", message: "" } // Initial state
  );

  //   const { pending } = useFormStatus();

  return (
    <SharedCard className="flex flex-col w-auto h-auto justify-start items-center mt-6 p-2 bg-amber-300">
        <SharedBreadcrumb items={breadcrumbItems}/>

      <h2 className="flex text-2xl font-bold mb-4 justify-center text-center">Authentication Form</h2>
      <p className="flex justify-center text-sm text-gray-500 mb-4">
        Please fill in the details below
      </p>
      {/* <PerfectScrollbar> */}
      <ConfigProvider theme={specialTheme}>
      <SharedForm
        variant="outlined"
        size="small"
        layout="horizontal"
        onFinish={async (values:any) => {
          // Convert AntD values to FormData
          const formData = new FormData();
          Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value as string);
          });
          submitAction(formData);
        }}
        style={{ height: '200px', padding: '0px 12px', gap: 0 }}
      >
        {/* Username Field */}
        <SharedFormItem
          label="Username"
          name="username"
          initialValue="name"
          rules={[
            { required: true, message: "Required field" },
            { whitespace: true, message: "Cannot be just whitespace" },
          ]}
          validateStatus={formErrors?.username ? "error" : ""}
          help={formErrors?.username}
        >
          <SharedInput />
        </SharedFormItem>

        {/* Email Field */}
        <SharedFormItem
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Required field" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
          validateStatus={formErrors?.email ? "error" : ""}
          help={formErrors?.email}
        >
          <SharedInput />
        </SharedFormItem>

        {/* Password Field */}
        <SharedFormItem
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Required field" },
            { min: 4, message: "Password must be at least 4 characters" },
            { max: 8, message: "Password cannot exceed 8 characters" },
          ]}
          validateStatus={formErrors?.password ? "error" : ""}
          help={formErrors?.password}
        >
          <SharedInput inputType="password" />
        </SharedFormItem>

        {/* Confirm Password Field */}
        <SharedFormItem
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }: { getFieldValue: any }) => ({
              validator(_ : any, value : any) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <SharedInput inputType="password" />
        </SharedFormItem>

        {/* Agreement checking field */}
        <SharedFormItem
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_:any, value:any) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must accept the agreement")),
            },
          ]}
        >
          <SharedCheckbox>I have read the agreement</SharedCheckbox>
        </SharedFormItem>
        {/* Submit Button */}
        <SharedFormItem>
          <SharedButton type="primary" htmlType="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </SharedButton>
        </SharedFormItem>

        {/* Server Error Display */}
        {formErrors && Object.keys(formErrors).length > 0 && (
          <Alert
            message="Submission Errors"
            description={Object.values(formErrors).join(", ")}
            type="error"
            showIcon
          />
        )}
        {/* Success Message */}
        {message?.type === "success" ? (
          <Alert message={message.message} type="success" showIcon />
        ) : (
          <Alert message={message.message} type="error" showIcon />
        )}
      </SharedForm>

      </ConfigProvider>

      {/* </PerfectScrollbar> */}
    </SharedCard>
  );
}

export default Form
