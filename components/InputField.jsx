export default function InputField({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  name,
  required = false,
  className = '',
}) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 text-sm font-semibold text-gray-700">
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
      />
    </div>
  );
}
