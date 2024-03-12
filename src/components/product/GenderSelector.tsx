"use client";
import { GENDERS } from "@/utils/constant";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const GenderSelector = ({ gender }: { gender: string }) => {
  const [selectedGender, setSelectedGender] = useState<string>(gender);

  const router = useRouter();

  useEffect(() => {
    if (gender) {
      setSelectedGender(gender);
    }
  }, [gender]);

  const handleChange = (event: any) => {
    setSelectedGender(event.target.value);
    router.replace(`/genero/${event.target.value}`);
  };

  return (
    <div className="flex justify-between px-2 gap-2  w-full">
      {GENDERS.map((gender) => (
        <div key={gender.id} className="flex flex-row items-center">
          <input
            onChange={handleChange}
            type="checkbox"
            value={gender.id}
            checked={selectedGender === gender.id}
            id={gender.id}
            className="appearance-none h-6 w-6 bg-white border-[1px] border-slate-200 rounded-full checked:bg-gold checked:scale-75 transition-all duration-200 peer"
          />
          <div className="h-6 w-6 absolute rounded-full pointer-events-none peer-checked:border-gold peer-checked:border-2"></div>
          <label
            htmlFor={gender.id}
            className="flex flex-col justify-center px-2 peer-checked:text-gold text-raffle-text select-none"
          >
            {gender.name}
          </label>
        </div>
      ))}
    </div>
  );
};
