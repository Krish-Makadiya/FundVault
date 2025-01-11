import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-[100%] text-white py-4 px-8">
            <div className="md:w-[80%] w-full mx-auto flex justify-between items-center my-5">
                <div className="md:w-full w-[45%] flex flex-col gap-2 md:text-[14px] text-[12px]">
                    <p>Address: 123 Main St, Anytown, USA</p>
                    <p>Phone: +1 (555) 555-5555</p>
                    <p>
                        Email:{" "}
                        <Link
                            href="mailto:info@example.com"
                            className="text-white hover:text-gray-400">
                            info@example.com
                        </Link>
                    </p>
                </div>
                <div className="w-[45%] md:text-[14px] text-[12px]">
                    <p>&copy; 2023 Example Company. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
