import React, { useRef } from "react";
import InputGroupLocation from "../molecules/InputGroupLocation";
import Input from "../atom/Input";
import { observer } from "mobx-react";
import city from "../../store/city";

const AddLocation = () => {
    const locationRef = useRef<{ location: { lat: string; long: string } }>(
        null,
    );

    return (
        <div className="font-nunito-sans flex flex-col gap-4 bg-white rounded-2xl px-7 py-10 w-full max-w-2xl mx-auto shadow-[-2px_4px_12px_0px_rgba(24,24,24,0.08)] border-2">
            <InputGroupLocation ref={locationRef} />
            <div className="my-4 w-1/3 bg-slate-600 bg-opacity-25 h-[1px] mx-auto" />
            <Input
                placeholder="Cidade"
                name="city"
                onChange={(event) => city.search(event.currentTarget.value)}
            />
        </div>
    );
};

export default observer(AddLocation);
