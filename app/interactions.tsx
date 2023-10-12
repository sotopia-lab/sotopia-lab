interface OutLinkLogoProps {
    link: string;
}

interface quoterProps {
    quoter: string;
}

function OutLinkLogo(props: OutLinkLogoProps) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="hover:drop-shadow-md hover:animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0-8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
        </a>
    );
}

function Quoter(props: quoterProps) {
    return (
        <div className="flex justify-between mb-5 ...">
            <p className="text-slate-500 italic text-2xl">&ldquo;{props.quoter}&rdquo;</p>
        </div>
    );
}

const Interactions = () => {
    return (
        <div className="flex flex-col justify-center, items-center"> 
        <div className="w-full">
            <div className="lg:flex items-start justify-start w-full">
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-sky-900">Helping friends 🤝</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01HAAGBSHGD6RGZ1PST6G0AGG7"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">Two friends are meeting at a coffee shop, where one of them is having trouble keeping up with their bills.</p>
                        <Quoter quoter={"Maybe we could look over your budget together, or I could lend you some money until things get better. What do you think?"} /> 
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#collaboration</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#non-verbal communication</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-sky-900">Music to play 🎶</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H94EFEP55SP18FQ65PZP4BRN"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">Two friends are hanging out at home and deciding what music to listen to</p>
                        <Quoter quoter={"[action] leans back on the couch, closing his eyes to fully appreciate the classical music"} /> 
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#persuation</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#non-verbal communication</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-start justify-start w-full mt-7">
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-orange-50 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-sky-900">Reveal Secrets 🔓</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H8B7ACYZ9NJFH4TRW0KJ6J9X"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">Two inmates are given the chance to chat briefly before one of them is led to the execution chamber for their last meal..</p>
                        <Quoter quoter={"My brother committed a crime, and I covered it up for him. I know it was wrong, but I wanted to protect him."} /> 
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#secret</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#risk</div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-6/12 lg:mr-7 lg:mb-0 mb-7 bg-sky-50 p-6 shadow rounded">
                    <div className="flex items-center border-b border-gray-300 pb-6">
                        <div className="flex items-start justify-between w-full">
                            <div className="pl-3 w-full">
                                <p className="text-xl font-medium leading-5 text-sky-900">Craiglist Bargain 💸</p>
                            </div>
                            <OutLinkLogo link={"https://sotopia-chatbot.vercel.app/render/01H8GPMG4F8P1DJ4AHV0BXEVBE"} />
                        </div>
                    </div>
                    <div className="px-2">
                        <p className="text-sm leading-5 py-4 text-gray-600">One person is selling a brand new 64GB Samsung Galaxy S8 in Midnight Black for $650, while another person is in the market to purchase it. </p>
                        <Quoter quoter={"If I agree to your 550 for one phone, could you provide the second unit at a diminished cost of, say, 400? So, in total, it will be $950 for two units."} /> 
                        <div className="flex">
                            <div className="py-2 px-4 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#negotiation</div>
                            <div className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100">#strategic conversation</div>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
            <a href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="group hidden max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-transparent px-3 py-1.5 text-sm text-black transition-colors hover:bg-white hover:text-black sm:flex mt-10"
              >
                <p>More</p>
                </a>
                

        </div>
    );
};
export default Interactions;
