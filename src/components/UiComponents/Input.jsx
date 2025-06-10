export const Input = function ({ value, onChange, className = "", ...props }) {
  <input className={className} value={value} onChange={onChange} {...props} />;
};
