import './MainPage.css';

export function MainPage() {
    return (
        <>
            <h1 className={"lg:mx-32 text-green-500 text-5xl font-bold"}>
                Convert Currencies Today
            </h1>
            <p className={"lg:mx-32 opacity-40 py-6"}>
                Welcome to "Covert Your Currencies Today" This application allows you to easily convert currencies base on the latest exchange rates. Whether you are planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.
            </p>
            <div className={"mt-5 flex items-center justify-center flex-col"}>
                <section className={"w-full lg:w-1/2"}>
                    <form>
                        <div className="mb-5 mb-4 ">
                            <label htmlFor=""
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Your
                                email</label>
                            <input type="Date" id=""
                                   className="bg-gray-50 border border-gray-300
                                   text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
                                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                                   required/>
                        </div>

                        <div className="mb-5 mb-4 ">
                            <label htmlFor=""
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Source Currency</label>
                            <input type="text" id=""
                                   className="bg-gray-50 border border-gray-300
                                   text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700
                                     dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                                   placeholder="Select source currency"
                                   required/>
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}