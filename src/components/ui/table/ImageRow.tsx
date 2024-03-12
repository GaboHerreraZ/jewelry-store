import Image from "next/image";

interface Props {
  image: string;
  label: string;
}

export const ImageRow = ({ label, image }: Props) => {
  return (
    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0 w-16 h-16">
          <Image
            className="w-full h-full rounded-full"
            src={image}
            alt="Anillo"
            width={250}
            height={250}
          />
        </div>
        <div className="ml-3">
          <p className="text-gray-900 whitespace-no-wrap">{label}</p>
        </div>
      </div>
    </td>
  );
};
