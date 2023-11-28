export default function Button({ children, type, className }) {
  let buttonClass = '';

  if (type === undefined) {
    buttonClass = 'bg-primary';
  } else if (type === 'danger') {
    buttonClass = 'bg-danger';
  }

  // Gabungkan kelas yang sudah ada dengan kelas yang diterima dari properti
  buttonClass = `${buttonClass} ${className}`;

  return <button className={buttonClass}>{children}</button>;
}
