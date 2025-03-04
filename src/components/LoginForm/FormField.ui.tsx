interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
}

export function FormField({ className, name, label, ...rest }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium text-[12px] leading-[21px]"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="placeholder:nexos-gray-light py-3 px-4 border border-nexos-border rounded-sm"
        type="text"
        placeholder=""
        {...rest}
      />
    </div>
  );
}
