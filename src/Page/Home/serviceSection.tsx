import Container from "@/components/Container/Container";
import BatteryReplacement from "@/components/serviceTiles/BatteryReplacement";
import ChipReplacement from "@/components/serviceTiles/ChipReplacement";
import DataRecovery from "@/components/serviceTiles/DataRecovery";
import Delivery from "@/components/serviceTiles/Delivery";
import Free from "@/components/serviceTiles/Free";
import StorageReplacement from "@/components/serviceTiles/StorageReplacement";
import Support from "@/components/serviceTiles/Support";

const ServiceSection = () => {
    return (
        <Container className="my-20 lg:my-40 overflow-hidden">
            {/* Header Section */}
            <div className="text-center flex justify-center items-center flex-col">
                <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold">
                    <span className="text-primary">Services</span> that we provide.
                </h1>
                <p className="text-[16px] md:text-[18px] max-w-[80ch] mt-6 lg:mt-10 mb-10 lg:mb-20">
                    We provide various computer repair services and solutions for our new and regular customers.
                    Feel free to find out more below.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-12 gap-[20px]">
                <BatteryReplacement />
                <ChipReplacement />
                <DataRecovery />
                <StorageReplacement />
                <Delivery />
                <Free />
                <Support />
            </div>
        </Container>
    );
};

export default ServiceSection;
