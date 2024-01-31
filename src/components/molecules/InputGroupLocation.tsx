import React, {
    forwardRef,
    useCallback,
    useImperativeHandle,
    useState,
} from "react";
import Input from "../atom/Input";
import { MdOutlineMyLocation } from "react-icons/md";

const InputGroupLocation = forwardRef((_, ref) => {
    const [location, setLocation] = useState({
        lat: "",
        long: "",
    });

    const handleGetLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation({ lat: `${latitude}`, long: `${longitude}` });
            });
        }
    }, []);

    const handleChangeLocation = useCallback(
        (prop: keyof typeof location, value: string) => {
            setLocation((prev) => {
                prev[prop] = value;
                return { ...prev };
            });
        },
        [],
    );

    useImperativeHandle(
        ref,
        () => ({
            location,
        }),
        [location],
    );

    return (
        <div className="w-full flex gap-2">
            <Input
                containerClassname="w-full"
                name="latitude"
                placeholder="Latitude"
                value={location.lat}
                onChange={(event) =>
                    handleChangeLocation("lat", event.currentTarget.value)
                }
            />
            <Input
                containerClassname="w-full"
                name="longitude"
                placeholder="Longitude"
                value={location.long}
                onChange={(event) =>
                    handleChangeLocation("long", event.currentTarget.value)
                }
            />
            <div className="flex items-end">
                <button
                    className="rounded-2xl px-2 pb-[10px]"
                    onClick={handleGetLocation}
                >
                    <MdOutlineMyLocation size={24} />
                </button>
            </div>
        </div>
    );
});

export default InputGroupLocation;
