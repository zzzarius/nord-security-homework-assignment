import { twMerge } from "tailwind-merge";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  name: string;
}

export function FormField({ className, name, label, ...rest }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={twMerge([
          "placeholder:nexos-placeholder border border-nexos-border pt-3 pb-3 px-4 rounded-[0.3125rem]",
          "text-nexos-text focus:outline-offset-4",
        ])}
        type="text"
        placeholder=""
        {...rest}
      />
    </div>
  );
}
