"use state"
const LoadingPage = () => {
    return (
        <div className="w-[100vw] h-[85vh] flex justify-center items-center">
            <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-[#ffb703] animate-bounce"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffb703] animate-bounce [animation-delay:-.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-[#ffb703] animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
};

export default LoadingPage;
