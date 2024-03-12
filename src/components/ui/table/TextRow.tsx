export const TextRow = ({ label }: { label: string | number }) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-md">
      <p className="text-gray-900 whitespace-no-wrap">{label}</p>
    </td>
  );
};
